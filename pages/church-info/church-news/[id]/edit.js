import default_styles from "@/styles/default.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "@/styles/CreateChurchNews.module.css";
import axios from "axios";

export async function getServerSideProps(context) {
  const id = context.params["id"];
  console.log(id);

  let churchNews;
  try {
    const res = await axios.get(`/churchNews/${id}`);
    churchNews = res.data;
  } catch {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id,
      churchNews,
    },
  };
}

export default function EditChurchNews({ id, churchNews }) {
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
        .patch(`/churchNews/${id}`, {
          title,
          author,
          url: weekly,
        })
        .then((res) => {
          res.status == 200
            ? router.push(`/church-info/church-news/${id}`)
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
        <title>교회소식 수정 - 서부교회</title>
      </Head>

      <form onSubmit={handleSubmit} className={styles.create__form}>
        <input
          name="title"
          type="text"
          placeholder="제목"
          defaultValue={churchNews.title}
        />

        <input
          name="author"
          type="text"
          placeholder="작성자"
          defaultValue={churchNews.author}
        />

        <input
          name="weekly"
          type="text"
          placeholder="구글드라이브 주소"
          defaultValue={churchNews.url}
        />

        <button disabled={requesting} className={styles.form__upload}>
          업로드
        </button>
      </form>
    </div>
  );
}
