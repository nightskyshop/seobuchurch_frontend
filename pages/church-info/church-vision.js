import styles from "@/styles/ChurchVision.module.css";
import default_styles from "@/styles/default.module.css";
import Head from "next/head";
import Image from "next/image";

export default function ChurchVision() {
  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>교회 비전 - 서부교회</title>
      </Head>

      <h1 className={default_styles.default__title}>교회 비전</h1>
      <hr className={default_styles.default__hr} />

      <div className={styles.vision__main}>
        <p className={styles.main__caption}>VISION</p>

        <h1 className={styles.main__header}>하나님 사랑, 사람 사랑</h1>

        <Image
          className={styles.main__quote1}
          src="/images/따옴표1.png"
          width={75}
          height={75}
        />

        <p className={styles.main__content}>
          <span>37</span> 예수께서 이르시되 네 마음을 다하고 목숨을 다하고{" "}
          <br />
          뜻을 다하여 주 너의 하나님을 사랑하라 하셨으니 <br />
          <span>38</span> 이것이 크고 첫째 되는 계명이요 <br />
          <span>39</span> 둘째도 그와 같으니 네 이웃을 네 자신 같이 사랑하라
          하셨으니 <br />
          <span>40</span> 이 두 계명이 온 율법과 선지자의 강령이니라
        </p>

        <span className={styles.main__verse}>(마22:37-40)</span>

        <Image
          className={styles.main__quote2}
          src="/images/따옴표2.png"
          width={75}
          height={75}
        />
      </div>
    </div>
  );
}
