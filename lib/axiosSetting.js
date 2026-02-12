import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

async function getAccessTokenFromRefreshToken() {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/refreshToken`,
      {
        headers: {
          RefreshToken: `Bearer ${sessionStorage.getItem("refreshToken")}`,
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    // 백엔드 서버가 실행되지 않았거나 연결할 수 없는 경우
    if (error.code === "ECONNREFUSED" || error.message?.includes("ECONNREFUSED")) {
      console.warn(
        "백엔드 서버에 연결할 수 없습니다. 서버가 실행 중인지 확인해주세요."
      );
    } else {
      console.error("토큰 갱신 중 오류 발생:", error);
    }
    return null;
  }
}

async function handleRefreshKey() {
  if (typeof window !== "undefined") {
    if (
      sessionStorage.getItem("tokenExpiresIn") &&
      sessionStorage.getItem("tokenExpiresIn") < Date.now()
    ) {
      localStorage.removeItem("tokenExpiresIn");
      localStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");
      sessionStorage.removeItem("tokenExpiresIn");
    } else if (
      (localStorage.getItem("tokenExpiresIn") &&
        localStorage.getItem("tokenExpiresIn") < Date.now()) ||
      (sessionStorage.getItem("refreshToken") &&
        !localStorage.getItem("accessToken"))
    ) {
      localStorage.removeItem("tokenExpiresIn");
      localStorage.removeItem("accessToken");

      const data = await getAccessTokenFromRefreshToken();

      if (data && data.accessToken && data.tokenExpiresIn) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("tokenExpiresIn", data.tokenExpiresIn);
      }
    }
  }
}

handleRefreshKey();

axios.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

let isRefreshing = false;
let failedQueue = [];

// 요청 큐 처리 함수
const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (token) {
      prom.resolve(token);
    } else {
      prom.reject(error);
    }
  });
  failedQueue = [];
};

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.data.message ==
        '401 UNAUTHORIZED "만료된 JWT access 토큰입니다."' &&
      !originalRequest._retry
    ) {
      console.log("success");
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;
        localStorage.removeItem("tokenExpiresIn");
        localStorage.removeItem("accessToken");

        const data = await getAccessTokenFromRefreshToken();

        if (data && data.accessToken && data.tokenExpiresIn) {
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("tokenExpiresIn", data.tokenExpiresIn);
          processQueue(null, data.accessToken);
        } else {
          // 토큰 갱신 실패 시 큐의 모든 요청을 거부
          processQueue(error, null);
        }

        isRefreshing = false;
      }

      return new Promise((resolve, reject) => {
        failedQueue.push({
          resolve: (token) => {
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            resolve(axios(originalRequest)); // 원래 요청 재시도
          },
          reject: (err) => {
            reject(err);
          },
        });
      });
    }

    return Promise.reject(error);
  }
);
