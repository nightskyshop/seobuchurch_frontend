import default_styles from "@/styles/default.module.css";
import styles from "@/styles/SermonDetail.module.css";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps(context) {
  const id = context.params["id"];
  console.log(id);

  let praise;
  try {
    const res = await axios.get(`/praise/${id}`);
    praise = res.data;
  } catch {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id,
      praise,
    },
  };
}

export default function PraiseDetail({ id, praise }) {
  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>{praise.title} - 서부교회</title>
      </Head>

      <div className={styles.sermon}>
        <h1>{praise.title}</h1>
        <p className={styles.sermon__createdAt}>{praise.createdAt}</p>
        <iframe
          className={styles.sermon__youtube}
          width="100%"
          height="315"
          src={praise.url}
          allowfullscreen
        ></iframe>

        <div className={styles.sermon__btns}>
          {praise.worshipTime == "찬양대" ? (
            <Link
              className={styles.sermon__goToList}
              href="/sermon-column/sunday-sermon"
            >
              목록
            </Link>
          ) : null}

          {praise.worshipTime == "경배와 찬양" ? (
            <Link
              className={styles.sermon__goToList}
              href="/sermon-column/wednesday-sermon"
            >
              목록
            </Link>
          ) : null}

          {typeof window !== "undefined" ? (
            sessionStorage.getItem("refreshToken") != null ? (
              <Link
                className={styles.sermon__goToList}
                href={`/sermon-column/praise/${id}/edit`}
              >
                수정
              </Link>
            ) : null
          ) : null}
        </div>
      </div>
    </div>
  );
}
