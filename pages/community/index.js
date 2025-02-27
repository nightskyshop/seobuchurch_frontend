import default_styles from "@/styles/default.module.css";
import styles from "@/styles/Community.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Community() {
  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>공동체 - 서부교회</title>
      </Head>

      <h1 className={default_styles.default__title}>다음 세대</h1>
      <hr className={default_styles.default__hr} />

      <p className={styles.community__newGeneration}>
        믿음은 한 세대에서 다음 세대로 이어져 왔습니다. 예수그리스도에게서
        제자들에게로, 제자들에게서 교회들로, 교회의 신앙선배들에게서 오늘날
        우리에게까지 전달되어 왔습니다. 주일학교가 점점 사라져가고 있습니다. 더
        이상 많은 자녀가 복이라 말하지 않는 시대입니다. 그러나 교회는 믿음의
        다음세대를 세워가야 합니다.{" "}
        <span>서부교회는 믿음의 다음세대를 세워가는 교회</span>입니다.
      </p>

      <div className={styles.community__container}>
        <div className={styles.community__box}>
          <h1>
            <Link href="/community/elementary">유•초등부</Link>
          </h1>

          <Link href="/community/elementary">바로가기</Link>
        </div>
        <div className={styles.community__box}>
          <h1>
            <Link href="/community/youth">중•고등부</Link>
          </h1>

          <Link href="/community/youth">바로가기</Link>
        </div>
        <div className={styles.community__box}>
          <h1>
            <Link href="/community/young-adult">청년부</Link>
          </h1>

          <Link href="/community/young-adult">바로가기</Link>
        </div>
      </div>

      <h1 className={default_styles.default__title}>엘더 세대</h1>
      <hr className={default_styles.default__hr} />
    </div>
  );
}
