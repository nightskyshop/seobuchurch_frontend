import default_styles from "@/styles/default.module.css";
import styles from "@/styles/Community.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Elementary() {
  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>유•초등부 - 서부교회</title>
      </Head>

      <h1 className={default_styles.default__title}>유초등부</h1>
      <hr className={default_styles.default__hr} />

      <div className={styles.community__images}>
        <Image src="/images/유초등1.jpeg" width={260} height={300} />
      </div>

      <div className={styles.community__borderbox}>
        <p>
          서부교회 유•초등부는 믿음의 다음 세대들이 하나님을 사랑하고, 사람을
          사랑하는 인격자로 잘 성장할 수 있도록 돕고 있습니다.
        </p>

        <p>
          예배시간 및 장소: 주일 오전 11시, 지하1층 유치부실 <br />
          대상: 유치부, 초등부 <br />
          담당: 서효진 전도사
        </p>
      </div>
    </div>
  );
}
