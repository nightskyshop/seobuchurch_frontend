import default_styles from "@/styles/default.module.css";
import styles from "@/styles/ChurchNewsDetail.module.css";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

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

export default function ChurchNewsDetail({ id, churchNews }) {
  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>{churchNews.title} - 서부교회</title>
      </Head>

      <div className={styles.churchNews}>
        <h1>{churchNews.title}</h1>
        <p className={styles.churchNews__author}>{churchNews.author}</p>
        <iframe
          className={styles.churchNews__google_drive}
          width="100%"
          height="600"
          src={churchNews.url}
        ></iframe>

        <div className={styles.churchNews__btns}>
          <Link
            className={styles.churchNews__goToList}
            href="/koinonia/church-news"
          >
            목록
          </Link>

          {typeof window !== "undefined" ? (
            sessionStorage.getItem("refreshToken") != null ? (
              <Link
                className={styles.churchNews__goToList}
                href={`/koinonia/church-news/${id}/edit`}
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
