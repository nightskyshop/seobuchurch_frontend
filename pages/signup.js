import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import default_styles from "@/styles/default.module.css";
import styles from "@/styles/Signup.module.css";

export default function Signup() {
  const router = useRouter();

  if (typeof window !== "undefined") {
    if (localStorage.getItem("refreshToken")) {
      router.push("/");
    }
  }

  const [signuped, setSignuped] = useState(false);
  const [usernameCache, setUsernameCache] = useState("");
  const [passwordCache, setPasswordCache] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const username = form.elements.namedItem("username").value;
    const password = form.elements.namedItem("password").value;
    const password_check = form.elements.namedItem("password_check").value;
    const adminPassword = form.elements.namedItem("adminPassword").value;

    if (username === "" || password === "" || password_check === "") {
      window.alert("내용을 모두 적어주세요.");
    } else if (password !== password_check) {
      window.alert("비밀번호와 비밀번호 확인의 값이 다릅니다.");
    } else {
      await axios
        .post("/auth/signup", { id: 0, username, password, adminPassword })
        .then((res) => {
          console.log(res);
          if (res.status == 201) {
            setError("");
            setSignuped(true);
          } else if (res.status == 208) {
            setError(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err.response);
          if (err.response.status == 400) {
            setError(err.response.data.message);
          }
        });

      setUsernameCache(username);
      setPasswordCache(password);
    }
  };

  const login = async () => {
    await axios
      .post("/auth/login", { username: usernameCache, password: passwordCache })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("tokenExpiresIn", res.data.tokenExpiresIn);
        sessionStorage.setItem("refreshToken", res.data.refreshToken);
        sessionStorage.setItem(
          "tokenExpiresIn",
          res.data.refreshTokenExpiresIn
        );
        router.push("/");
      });
  };

  useEffect(() => {
    if (signuped && emailCache !== "" && passwordCache !== "") {
      login();
    }
  }, [signuped]);

  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>회원가입 - 서부교회</title>
      </Head>

      <h1 className={default_styles.default__title}>회원가입</h1>
      <hr className={default_styles.default__hr} />

      <form onSubmit={handleSubmit} className={styles.signup__form}>
        <input type="text" placeholder="ID" name="id" />
        <input type="password" placeholder="PASSWORD" name="password" />
        <input
          type="password"
          placeholder="PASSWORD CHECK"
          name="passwordCheck"
        />
        <input
          type="password"
          placeholder="ADMIN PASSWORD"
          name="adminPassword"
        />
        <p className={styles.error}>{error}</p>
        <button>Signup</button>
      </form>
    </div>
  );
}
