import SermonList from "@/component/SermonList";
import default_styles from "@/styles/default.module.css";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps() {
  const {
    data: { content: default_sermons, totalPages },
  } = await axios.get(`/sermon?pageNo=0&worshipTime=특별집회`);

  return {
    props: {
      default_sermons,
      totalPages,
    },
  };
}

export default function FridayPrayer({ default_sermons, totalPages }) {
  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>금요기도회 - 고신교회</title>
      </Head>

      <h1 className={default_styles.default__title}>금요기도회</h1>
      <hr className={default_styles.default__hr} />

      {/* <div className={default_styles.default__bar}>
        <Link href="/sermon-column/sermon/new?worshipTime=금요기도회">
          글쓰기
        </Link>

        <form className={default_styles.default__search}>
          <input type="text" />
          <button>검색</button>
        </form>
      </div> */}

      <SermonList sermonList={default_sermons} />
    </div>
  );
}
