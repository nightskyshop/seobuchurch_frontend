import default_styles from "@/styles/default.module.css";
import styles from "@/styles/Workers.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Workers() {
  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>섬기는 분들 - 서부교회</title>
      </Head>

      <h1 className={default_styles.default__title}>섬기는 분들</h1>
      <hr className={default_styles.default__hr} />

      <Image
        className={styles.pastor__image}
        src="/images/담임목사님.jpeg"
        width={300}
        height={380}
      />

      <h3 className={styles.pastor__title}>
        김혜수 <span>목사</span>
      </h3>

      <div className={styles.workeres}>
        <div className={styles.workers__box}>
          <Image src="/images/white.jpg" width={100} height={200} />
          <p>
            서효진 <span>전도사</span>
          </p>
        </div>

        <div className={styles.workers__box}>
          <Image src="/images/white.jpg" width={100} height={200} />
          <p>
            전기원 <span>원로장로</span>
          </p>
        </div>

        <div className={styles.workers__box}>
          <Image src="/images/white.jpg" width={100} height={200} />
          <p>
            남궁현 <span>원로장로</span>
          </p>
        </div>

        <div className={styles.workers__box}>
          <Image src="/images/white.jpg" width={100} height={200} />
          <p>
            정용균 <span>원로장로</span>
          </p>
        </div>
      </div>
    </div>
  );
}
