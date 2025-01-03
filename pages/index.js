import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>서부교회 - 고신</title>
      </Head>

      <div className={styles.home__header}>
        <h1>하나님을 사랑하고, 사람을 사랑하는 서부교회</h1>
      </div>

      <div className={styles.home__vision}>
        <p className={styles.vision__caption}>VISION</p>

        <h1 className={styles.vision__header}>"하나님 사랑, 사람 사랑"</h1>

        <p className={styles.vision__content}>
          <span>서부교회</span>는 <br />
          <span>하나님을 사랑</span>하여 영과 진리로 예배하며, <br />
          <span>사람을 사랑</span>하여 영혼 구원하여 제자를 삼고, <br />
          성령의 풍성한 교제를 누리며, 하나님의 말씀을 가르쳐 지키게 하며,{" "}
          <br />
          하나님께 받은 사람으로 이웃을 섬기는 한 가족 공동체입니다.
        </p>

        <Link href="/church-info/church-vision" className={styles.vision__more}>
          더보기
        </Link>
      </div>

      <div className={styles.home__section_background}>
        <div className={styles.home__section}>
          <div className={styles.section__box}>
            <Link href="/sermon-column/sunday-sermon">
              <Image src="/btns/1.png" width={100} height={100} />
            </Link>
            <Link href="/sermon-column/sunday-sermon">
              <h3>주일설교</h3>
            </Link>
            <Link href="/sermon-column/sunday-sermon">바로가기</Link>
          </div>

          <div className={styles.section__box}>
            <Link href="/">
              <Image src="/btns/2.png" width={100} height={100} />
            </Link>
            <Link href="/">
              <h3>교회소식</h3>
            </Link>
            <Link href="/">바로가기</Link>
          </div>

          <div className={styles.section__box}>
            <Link href="/">
              <Image src="/btns/3.png" width={100} height={100} />
            </Link>
            <Link href="/">
              <h3>예배안내</h3>
            </Link>
            <Link href="/">바로가기</Link>
          </div>

          <div className={styles.section__box}>
            <Link href="/">
              <Image src="/btns/4.png" width={100} height={100} />
            </Link>
            <Link href="/">
              <h3>공동체</h3>
            </Link>
            <Link href="/">바로가기</Link>
          </div>

          <div className={styles.section__box}>
            <Link href="/">
              <Image src="/btns/5.png" width={100} height={100} />
            </Link>
            <Link href="/">
              <h3>찬양</h3>
            </Link>
            <Link href="/">바로가기</Link>
          </div>

          <div className={styles.section__box}>
            <Link href="/">
              <Image src="/btns/6.png" width={100} height={100} />
            </Link>
            <Link href="/">
              <h3>서부교회 이야기</h3>
            </Link>
            <Link href="/">바로가기</Link>
          </div>

          <div className={styles.section__box}>
            <Link href="/">
              <Image src="/btns/7.png" width={100} height={100} />
            </Link>
            <Link href="/">
              <h3>선교 및 훈련</h3>
            </Link>
            <Link href="/">바로가기</Link>
          </div>

          <div className={styles.section__box}>
            <Link href="/church-info/how-to-come">
              <Image src="/btns/8.png" width={100} height={100} />
            </Link>
            <Link href="/church-info/how-to-come">
              <h3>오시는 길</h3>
            </Link>
            <Link href="/church-info/how-to-come">바로가기</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
