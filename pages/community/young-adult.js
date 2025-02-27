import default_styles from "@/styles/default.module.css";
import styles from "@/styles/Community.module.css";
import Head from "next/head";

export default function YoungAdult() {
  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>청년부 - 서부교회</title>
      </Head>

      <h1 className={default_styles.default__title}>청년부</h1>
      <hr className={default_styles.default__hr} />

      <div className={styles.community__borderbox}>
        <p>
          청년의 때에 예수님을 삶의 주인으로 모시고, 예수그리스도의 제자로서의
          삶을 살아갈 수 있도록 돕습니다.
        </p>

        <p>
          예배시간 및 장소: 주일 오후 12시 30분, 지하 1층 청년부실 <br />
          대상: 청년 <br />
          담당: 김혜수 목사
        </p>
      </div>
    </div>
  );
}
