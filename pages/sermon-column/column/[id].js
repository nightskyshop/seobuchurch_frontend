import default_styles from "@/styles/default.module.css";
import styles from "@/styles/ColumnDetail.module.css";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps(context) {
  const id = context.params["id"];
  console.log(id);

  let column;
  try {
    const res = await axios.get(`/column/${id}`);
    column = res.data;
  } catch {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      column,
    },
  };
}

export default function ColumnDetail({ column }) {
  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>{column.title} - 서부교회</title>
      </Head>

      <div className={styles.column}>
        <h1>{column.title}</h1>
        <div className={styles.column__textbox}>
          <p className={styles.column__author}>{column.author}</p>

          <p className={styles.column__createdAt}>
            {column.createdAt[0]}-{column.createdAt[1]}-{column.createdAt[2]}
          </p>
        </div>

        <hr className={styles.column__hr} />

        <p className={styles.column__content}>{column.content}</p>

        <div>
          <Link
            className={styles.column__goToList}
            href="/column-column/columns"
          >
            목록
          </Link>
        </div>
      </div>
    </div>
  );
}
