import default_styles from "@/styles/default.module.css";
import styles from "@/styles/CreateSermon.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Head from "next/head";

export async function getServerSideProps(context) {
  const id = context.params["id"];
  console.log(id);

  let sermon;
  try {
    const res = await axios.get(`/sermon/${id}`);
    sermon = res.data;
  } catch {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id,
      sermon,
    },
  };
}

export default function EditSermon({ id, sermon }) {
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
    const verse = form.elements.namedItem("verse").value;
    const createdAt = form.elements.namedItem("createdAt").value;
    const pastor = form.elements.namedItem("pastor").value;
    const worshipTime = form.elements.namedItem("worshipTime").value;
    const url = form.elements.namedItem("url").value;

    if (
      title.trim() == "" ||
      verse.trim() == "" ||
      createdAt.trim() == "" ||
      worshipTime.trim() == "" ||
      pastor.trim() == "" ||
      url.trim() == ""
    ) {
      window.alert("모든 항목을 입력해주세요.");
    } else {
      setRequesting(true);
      await axios
        .patch(`/sermon/${id}`, {
          title,
          verse,
          createdAt,
          pastor,
          worshipTime,
          url,
        })
        .then((res) => {
          res.status == 200
            ? router.push(`/sermon-column/sermon/${id}`)
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
        <title>설교 수정 - 서부교회</title>
      </Head>

      <form onSubmit={handleSubmit} className={styles.create__form}>
        <input
          name="title"
          type="text"
          placeholder="제목"
          defaultValue={sermon.title}
        />

        <div className={styles.form__box}>
          <input
            name="verse"
            type="text"
            placeholder="본문"
            defaultValue={sermon.verse}
          />

          <input
            name="createdAt"
            type="text"
            placeholder="작성일"
            defaultValue={sermon.createdAt}
          />
        </div>

        <div className={styles.form__box}>
          <input
            name="pastor"
            type="text"
            placeholder="설교자"
            defaultValue={sermon.pastor}
          />

          <select name="worshipTime" defaultValue={sermon.worshipTime}>
            <option value="">---</option>
            <option value="주일예배">주일예배</option>
            <option value="주일예배">수요예배</option>
            <option value="주일예배">금요기도회</option>
            <option value="주일예배">새벽기도회</option>
            <option value="주일예배">특별집회</option>
          </select>
        </div>

        <input
          name="url"
          type="text"
          placeholder="유튜브 링크"
          defaultValue={sermon.url}
        />

        <button disabled={requesting} className={styles.form__upload}>
          업로드
        </button>
      </form>
    </div>
  );
}
