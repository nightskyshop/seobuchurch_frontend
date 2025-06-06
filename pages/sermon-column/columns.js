import ColumnList from "@/component/ColumnList";
import default_styles from "@/styles/default.module.css";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export async function getServerSideProps() {
  const {
    data: { content: default_columns, totalPages },
  } = await axios.get(`/column?pageNo=0`);

  return {
    props: {
      default_columns,
      totalPages,
    },
  };
}

export default function Column({ default_columns, totalPages }) {
  const [columns, setColumns] = useState(default_columns);
  const [pageNo, setPageNo] = useState(0);

  const getColumns = async () => {
    const {
      data: { content },
    } = await axios.get(`/column?pageNo=${pageNo}`);
    setColumns(content);
  };

  const handlePageChange = ({ selected }) => {
    setPageNo(selected);
  };

  useEffect(() => {
    getColumns();
  }, [pageNo]);

  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>칼럼 - 고신교회</title>
      </Head>

      <h1 className={default_styles.default__title}>칼럼</h1>
      <hr className={default_styles.default__hr} />

      <div className={default_styles.default__bar}>
        {typeof window !== "undefined" ? (
          sessionStorage.getItem("refreshToken") != null ? (
            <Link href="/sermon-column/column/new">글쓰기</Link>
          ) : null
        ) : null}
        {/*
        <form className={default_styles.default__search}>
          <input type="text" />
          <button>검색</button>
        </form>*/}
      </div>

      <ColumnList
        columnList={columns}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        pageNo={pageNo}
      />
    </div>
  );
}
