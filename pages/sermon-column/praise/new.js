import default_styles from "@/styles/default.module.css";
import styles from "@/styles/CreateSermon.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Head from "next/head";

export default function CreateSermon() {
  const router = useRouter();

  if (typeof window !== "undefined") {
    if (sessionStorage.getItem("refreshToken") == null) {
      router.push("/login");
    }
  }

  const params = useSearchParams();

  const defaultWorshipTime = params.get("worshipTime");

  const [requesting, setRequesting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const title = form.elements.namedItem("title").value;
    const createdAt = form.elements.namedItem("createdAt").value;
    const worshipTime = form.elements.namedItem("worshipTime").value;
    const url = form.elements.namedItem("url").value;

    if (
      title.trim() == "" ||
      createdAt.trim() == "" ||
      worshipTime.trim() == "" ||
      url.trim() == ""
    ) {
      window.alert("모든 항목을 입력해주세요.");
    } else {
      setRequesting(true);
      await axios
        .post("/praise", {
          title,
          createdAt,
          worshipTime,
          url,
        })
        .then((res) => {
          res.status == 201
            ? worshipTime == "찬양대"
              ? router.push("/sermon-column/choir")
              : router.push("/sermon-column/worship-and-praise")
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
        <title>찬양 업로드 - 서부교회</title>
      </Head>

      <form onSubmit={handleSubmit} className={styles.create__form}>
        <input name="title" type="text" placeholder="제목" />

        <div className={styles.form__box}>
          <input name="createdAt" type="text" placeholder="작성일" />

          <select name="worshipTime" defaultValue={defaultWorshipTime}>
            <option value="">---</option>
            <option value="찬양대">찬양대</option>
            <option value="경배와찬양">경배와 찬양</option>
          </select>
        </div>

        <input name="url" type="text" placeholder="유튜브 링크" />

        <button disabled={requesting} className={styles.form__upload}>
          업로드
        </button>
      </form>
    </div>
  );
}
