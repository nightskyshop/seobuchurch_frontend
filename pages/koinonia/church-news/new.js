import default_styles from "@/styles/default.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "@/styles/CreateChurchNews.module.css";
import axios from "axios";

export default function CreateChurchNews() {
  const router = useRouter();

  if (typeof window !== "undefined") {
    if (sessionStorage.getItem("refreshToken") == null) {
      router.push("/login");
    }
  }

  const [requesting, setRequesting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const title = form.elements.namedItem("title").value;
    const author = form.elements.namedItem("author").value;
    const weekly = form.elements.namedItem("weekly").value;

    if (title.trim() == "" || author.trim() == "" || weekly.trim() == "") {
      window.alert("모든 항목을 입력해주세요.");
    } else {
      setRequesting(true);
      await axios
        .post("/churchNews", {
          title,
          author,
          url: weekly,
        })
        .then((res) => {
          res.status == 201
            ? router.push("/koinonia/church-news")
            : window.alert("문제가 생겼습니다. 잠시후 시도해주세요.");
        })
        .catch((err) => {
          window.alert("문제가 생겼습니다. 잠시후 시도해주세요.");
        });

      setRequesting(false);
    }
  };

  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>교회소식 업로드 - 서부교회</title>
      </Head>

      <form onSubmit={handleSubmit} className={styles.create__form}>
        <input name="title" type="text" placeholder="제목" />

        <input name="author" type="text" placeholder="작성자" />

        <input name="weekly" type="text" placeholder="구글드라이브 주소" />

        <button disabled={requesting} className={styles.form__upload}>
          업로드
        </button>
      </form>
    </div>
  );
}
