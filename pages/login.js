import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import default_styles from "@/styles/default.module.css";
import styles from "@/styles/Login.module.css";
import axios from "axios";
import Head from "next/head";

export default function Login() {
  const router = useRouter();

  if (typeof window !== "undefined") {
    if (sessionStorage.getItem("refreshToken")) {
      router.push("/");
    }
  }

  const [error, setError] = useState("");

  const login = async (username, password) => {
    await axios
      .post("/auth/login", { username, password })
      .then((res) => {
        if (res.status == 200) {
          setError("");

          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("tokenExpiresIn", res.data.tokenExpiresIn);
          sessionStorage.setItem("refreshToken", res.data.refreshToken);
          sessionStorage.setItem(
            "tokenExpiresIn",
            res.data.refreshTokenExpiresIn
          );

          router.push("/");
          router.reload();
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        if (err.response.status == 400) {
          setError(err.response.data.message);
        } else if (err.response.status == 401) {
          setError(err.response.data.message);
        }
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const id = form.elements.namedItem("id").value;
    const password = form.elements.namedItem("password").value;

    if (id.trim() == "" || password.trim() == "") {
      window.alert("모든 항목을 입력해주세요.");
    } else {
      await login(id, password);
    }
  };

  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>로그인 - 서부교회</title>
      </Head>

      <h1 className={default_styles.default__title}>로그인</h1>
      <hr className={default_styles.default__hr} />

      <form onSubmit={handleSubmit} className={styles.login__form}>
        <input type="text" placeholder="ID" name="id" />
        <input type="password" placeholder="PASSWORD" name="password" />
        <p className={styles.error}>{error}</p>
        <button>Login</button>
      </form>

      <p className={styles.login__hr}>or</p>

      <Link className={styles.login__signup} href="/signup">
        Create account
      </Link>
    </div>
  );
}
