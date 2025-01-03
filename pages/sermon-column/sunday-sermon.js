import SermonList from "@/component/SermonList";
import default_styles from "@/styles/default.module.css";
import styles from "@/styles/SundaySermon.module.css";
import axios from "axios";
import Head from "next/head";

export async function getServerSideProps() {
  const {
    data: { content: default_sermons, totalPages },
  } = await axios.get(`/sermon?pageNo=0&worshipTime=주일 설교`);

  let currentSermon;
  try {
    const { data } = await axios.get("/sermon/current");
    currentSermon = data;
  } catch {
    console.log("NO CURRENT SERMON");
  }

  return {
    props: {
      default_sermons,
      totalPages,
      currentSermon,
    },
  };
}

export default function SundaySermon({
  default_sermons,
  totalPages,
  currentSermon,
}) {
  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>주일 설교 - 고신교회</title>
      </Head>

      <h1 className={default_styles.default__title}>주일 설교</h1>
      <hr className={default_styles.default__hr} />

      <h2 className={default_styles.default__subTitle}>이번 주 주일 설교</h2>

      {currentSermon ? (
        <iframe
          className={styles.sundaySermon__youtube}
          width="560"
          height="315"
          src={currentSermon.url}
        ></iframe>
      ) : null}

      <div className={default_styles.default__bar}>
        <button>글쓰기</button>

        <form className={default_styles.default__search}>
          <input type="text" />
          <button>검색</button>
        </form>
      </div>

      <SermonList sermonList={default_sermons} />
    </div>
  );
}
