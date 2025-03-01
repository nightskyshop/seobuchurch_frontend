import SermonList from "@/component/SermonList";
import default_styles from "@/styles/default.module.css";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function SpecialSermon({ default_sermons, totalPages }) {
  const [sermons, setSermons] = useState(default_sermons);
  const [pageNo, setPageNo] = useState(0);

  const getSermons = async () => {
    const {
      data: { content },
    } = await axios.get(`/sermon?pageNo=${pageNo}&worshipTime=금요기도회`);
    setSermons(content);
  };

  const handlePageChange = ({ selected }) => {
    setPageNo(selected);
  };

  useEffect(() => {
    getSermons();
  }, [pageNo]);

  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>특별집회 - 고신교회</title>
      </Head>

      <h1 className={default_styles.default__title}>특별집회</h1>
      <hr className={default_styles.default__hr} />

      <div className={default_styles.default__bar}>
        {typeof window !== "undefined" ? (
          sessionStorage.getItem("refreshToken") != null ? (
            <Link href="/sermon-column/sermon/new?worshipTime=특별집회">
              글쓰기
            </Link>
          ) : null
        ) : null}

        {/*
        <form className={default_styles.default__search}>
          <input type="text" />
          <button>검색</button>
        </form>*/}
      </div>

      <SermonList
        sermonList={sermons}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        pageNo={pageNo}
      />
    </div>
  );
}
