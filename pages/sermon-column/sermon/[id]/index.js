import default_styles from "@/styles/default.module.css";
import styles from "@/styles/SermonDetail.module.css";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

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

export default function SermonDetail({ id, sermon }) {
  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>{sermon.title} - 서부교회</title>
      </Head>

      <div className={styles.sermon}>
        <h1>{sermon.title}</h1>
        <div className={styles.sermon__textbox}>
          <p>{sermon.verse}</p>
          <p>{sermon.pastor}</p>
        </div>
        <p className={styles.sermon__createdAt}>{sermon.createdAt}</p>
        <iframe
          className={styles.sermon__youtube}
          width="100%"
          height="315"
          src={sermon.url}
          allowfullscreen
        ></iframe>

        <div className={styles.sermon__btns}>
          {sermon.worshipTime == "주일예배" ? (
            <Link
              className={styles.sermon__goToList}
              href="/sermon-column/sunday-sermon"
            >
              목록
            </Link>
          ) : null}

          {sermon.worshipTime == "수요예배" ? (
            <Link
              className={styles.sermon__goToList}
              href="/sermon-column/wednesday-sermon"
            >
              목록
            </Link>
          ) : null}

          {sermon.worshipTime == "금요기도회" ? (
            <Link
              className={styles.sermon__goToList}
              href="/sermon-column/friday-prayer"
            >
              목록
            </Link>
          ) : null}

          {sermon.worshipTime == "특별집회" ? (
            <Link
              className={styles.sermon__goToList}
              href="/sermon-column/special-sermon"
            >
              목록
            </Link>
          ) : null}

          {typeof window !== "undefined" ? (
            sessionStorage.getItem("refreshToken") != null ? (
              <Link
                className={styles.sermon__goToList}
                href={`/sermon-column/sermon/${id}/edit`}
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
