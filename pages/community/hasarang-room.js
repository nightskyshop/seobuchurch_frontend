import default_styles from "@/styles/default.module.css";
import styles from "@/styles/HasarangRoom.module.css";
import Head from "next/head";
import Image from "next/image";

export default function HasarangRoom() {
  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>사랑방 - 서부교회</title>
      </Head>

      <h1 className={default_styles.default__title}>사랑방</h1>
      <hr className={default_styles.default__hr} />

      <div className={styles.hasarangRoom__images}>
        <div>
          <Image src="/images/사랑방싱글.jpeg" width={260} height={300} />
          <p className={styles.hasarangRoom__caption}>사랑방싱글</p>
        </div>

        <div>
          <Image src="/images/사랑방1.jpeg" width={260} height={300} />
          <p className={styles.hasarangRoom__caption}>사랑방1</p>
        </div>

        <div>
          <Image src="/images/사랑방2.jpeg" width={260} height={300} />
          <p className={styles.hasarangRoom__caption}>사랑방2</p>
        </div>

        <div>
          <Image src="/images/사랑방3.jpeg" width={260} height={300} />
          <p className={styles.hasarangRoom__caption}>사랑방3</p>
        </div>
      </div>
    </div>
  );
}
