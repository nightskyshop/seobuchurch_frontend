import default_styles from "@/styles/default.module.css";
import styles from "@/styles/Choir.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Choir() {
  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>찬양대 - 서부교회</title>
      </Head>

      <h1 className={default_styles.default__title}>찬양대</h1>
      <hr className={default_styles.default__hr} />

      <div className={styles.choir__images}>
        <Image src="/images/찬양대1.jpeg" width={260} height={300} />
        <Image src="/images/찬양대2.jpeg" width={400} height={300} />
      </div>
    </div>
  );
}
