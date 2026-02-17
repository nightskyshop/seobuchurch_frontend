import default_styles from "@/styles/default.module.css";
import Head from "next/head";
import PraiseList from "@/component/PraiseList";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export async function getServerSideProps() {
  const {
    data: { content: default_praises, totalPages },
  } = await axios.get(`/praise?pageNo=0&worshipTime=경배와찬양`);

  return {
    props: {
      default_praises,
      totalPages,
    },
  };
}

export default function WorshipAndPraise({ default_praises, totalPages }) {
  const [praises, setPraises] = useState(default_praises);
  const [pageNo, setPageNo] = useState(0);

  const getPraises = async () => {
    const {
      data: { content },
    } = await axios.get(`/praise?pageNo=${pageNo}&worshipTime=경배와찬양`);
    setPraises(content);
  };

  const handlePageChange = ({ selected }) => {
    setPageNo(selected);
  };

  useEffect(() => {
    getPraises();
  }, [pageNo]);

  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>경배와 찬양 - 서부교회</title>
      </Head>

      <h1 className={default_styles.default__title}>경배와 찬양</h1>
      <hr className={default_styles.default__hr} />

      <div className={default_styles.default__bar}>
        {typeof window !== "undefined" ? (
          sessionStorage.getItem("refreshToken") != null ? (
            <Link href="/sermon-column/praise/new?worshipTime=경배와찬양">
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

      <PraiseList
        praiseList={praises}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        pageNo={pageNo}
      />
    </div>
  );
}
