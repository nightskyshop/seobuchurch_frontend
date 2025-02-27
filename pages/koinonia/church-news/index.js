import ChurchNewsList from "@/component/ChurchNewsList";
import default_styles from "@/styles/default.module.css";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps() {
  const {
    data: { content: default_churchNews, totalPages },
  } = await axios.get(`/churchNews?pageNo=0`);

  return {
    props: {
      default_churchNews,
      totalPages,
    },
  };
}

export default function ChurchNews({ default_churchNews, totalPages }) {
  console.log(default_churchNews);
  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>교회소식 - 서부교회</title>
      </Head>

      <h1 className={default_styles.default__title}>교회소식</h1>
      <hr className={default_styles.default__hr} />

      <div className={default_styles.default__bar}>
        {typeof window !== "undefined" ? (
          sessionStorage.getItem("refreshToken") != null ? (
            <Link href="/koinonia/church-news/new">글쓰기</Link>
          ) : null
        ) : null}

        {/*
        <form className={default_styles.default__search}>
          <input type="text" />
          <button>검색</button>
        </form>*/}
      </div>

      <ChurchNewsList churchNewsList={default_churchNews} />
    </div>
  );
}
