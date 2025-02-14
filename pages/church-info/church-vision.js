import styles from "@/styles/ChurchVision.module.css";
import default_styles from "@/styles/default.module.css";
import Head from "next/head";
import Image from "next/image";

export default function ChurchVision() {
  return (
    <div>
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
          <span>37</span> 예수께서 이르시되 네 마음을 다하고 목숨을 다하고 뜻을
          다하여 주 너의 하나님을 사랑하라 하셨으니 <br />
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

      <div className={styles.vision__list}>
        <h3 className={styles.list__header}>서부교회는</h3>

        <ul className={styles.list__ul}>
          <li>
            <span>[예배]</span> 영과 진리로 예배하는 교회입니다.
          </li>
          <li>
            <span>[전도]</span> 영혼 구원하여 제자 삼는 교회입니다
          </li>
          <li>
            <span>[교제]</span> 성령의 풍성한 교제를 누리는 교회입니다
          </li>
          <li>
            <span>[훈련]</span> 하나님의 말씀을 가르쳐 지키게 하는 교회입니다
          </li>
          <li>
            <span>[섬김]</span> 하나님께 받은 사랑으로 이웃을 섬기는 교회입니다
          </li>
        </ul>
      </div>

      <div className={styles.vision__declarate}>
        <h2 className={styles.declarate__header}>
          {"<"}비전 선언문{">"}
        </h2>

        <p className={styles.declarate__content}>
          <span>서부교회</span>는 <br />
          <span className={styles.underline}>하나님을 사랑</span>하여 영과{" "}
          진리로 예배하며, <span className={styles.underline}>사람을 사랑</span>
          하여 영혼 구원하여 제자를 삼고, 성령의 풍성한 교제를 누리며, 하나님의
          말씀을 가르쳐 지키게 하며, 하나님께 받은 사람으로 이웃을 섬기는{" "}
          <span>한 가족 공동체</span>
          입니다.
        </p>
      </div>

      <div className={styles.vision__content}>
        <p>
          예수님께서는 십계명과 구약 성경을 {"<하나님 사랑, 사람* 사랑>으로 "}
          요약하셨습니다. <br />
          신약 성경도 이것을 크게 벗어나지 않습니다. <br />
          예수 그리스도의 십자가는 위로는 하나님과의 관계를 회복시키고, 옆으로는
          이웃과의 관계를 회복시켰습니다. <br />
        </p>

        <p>
          성경은 예수그리스도 안에 있는 구원의 길을 우리에게 보여줍니다. <br />
          그리고 구원의 은혜를 받은 우리가 하나님의 백성으로서 어떤 삶을
          살아가야 하는지 그 길을 보여줍니다 (딤후3:15~17). <br />
          <span>
            그러므로 성경의 요약이라고 할 수 있는 [하나님 사랑, 사람 사랑]은{" "}
            모든 성도, 모든 교회의 비전이라 할 수 있습니다. <br />
            서부교회는 하나님께 받은 사랑으로 하나님을 사랑하고, 사람을 사람하여{" "}
            하나님께 영광을 돌려드리는 교회입니다.
          </span>
        </p>

        <span>
          * 성경은 ‘이웃’이라는 단어를 사용하였지만, ‘사람’이라고 표현한 것은
          우리가 생각하는 이웃의 개념이 너무 좁은 경우가 많기 때문입니다. 그래서
          보편적인 의미를 담고 있는 ‘사람’이라는 단어를 사용합니다.
        </span>
      </div>

      <div className={styles.vision__pillar}>
        <h2 className={styles.pillar__header}>VISION을 이루는 세 가지 축</h2>
        <Image width={360} height={300} src="/images/비전세가지축.png" />
      </div>

      <div className={styles.vision__number}>
        <h2 className={styles.number__header}>
          하나님 사랑, 사람 사랑의 비전은
        </h2>

        <div className={styles.number__content}>
          <h3>첫째</h3>

          <p>
            <span>풍성한 예배를 통해 이루어 갑니다.</span> <br />
            예배 가운데 하나님을 만나면 하나님의 사랑의 풍성함을 깨닫게 됩니다.{" "}
            <br />
            그리고 하나님의 사랑을 아는 만큼 하나님의 사랑을 닮아 하나님을
            사랑하고 사람을 사랑하는 삶을 살 수 있게 됩니다. <br />
            그러므로 성령 충만한 예배, 감동과 은혜가 있는 예배, 하나님의 임재
            속에 헌신과 결단이 있는 예배를 통해 하나님의 교회를 세워가십니다.
          </p>
        </div>

        <div className={styles.number__content}>
          <h3>둘째</h3>

          <p>
            <span>건강한 소그룹을 통해 이루어 갑니다.</span> <br />
            풍성한 예배는 성도들의 영적 삶을 윤택하게 합니다. <br />
            하지만, 대그룹 모임만으로는 삶의 변화를 일으키는 것이 쉽지 않습니다.{" "}
            <br />
            하나님 사랑, 사람 사랑의 비전 실천사항들이 성도들의 개개인의 삶 속에
            잘 적용되기 위해서 건강한 소그룹 모임이 필수적입니다. <br />
            건강한 소그룹 모임 안에서 사랑과 선행을 격려하고, 서로의 문제를 위해
            뜨겁게 기도해 주고, 하나님의 위로와 소망을 전하며, 함께 기뻐하고
            함께 슬퍼하는 건강한 나눔이 있을 때에 우리의 신앙은 함께 자라갈 수
            있습니다.
          </p>
        </div>

        <div className={styles.number__content}>
          <h3>셋째</h3>

          <p>
            <span>삶의 훈련을 통해 이루어 갑니다. </span> <br />
            우리가 드려야 할 진정한 영적 예배는 삶의 예배입니다. <br />
            하나님의 뜻이 우리의 삶과 인격속에 적용되지 않으면 소용이 없습니다.{" "}
            <br />
            그러므로 서부교회는 지식을 쌓아가는 훈련을 지양합니다. <br />
            하나님의 뜻이 우리의 삶 속에 이루어지고, 실천되는 삶과 인격의 훈련을
            지향합니다. <br />
            매주 설교 말씀을 붙들고 기도하며 삶 속에 적용하고, 소그룹 훈련을
            통해서 삶과 인격의 변화가 이루어질 수 있도록 할 때 하나님 사랑, 사람
            사랑을 비전을 이루어 갈 수 있습니다.
          </p>
        </div>
      </div>

      <p className={styles.vision__conclusion}>
        마지막으로 이 세가지 축이 균형잡힌 모습으로 잘 돌아가도록 윤활유 역할을
        하는 것이 목회자의 리더십입니다. <br />
        예수님께서 제자들의 발을 씻기심같이 섬기는 리더십, 자기 희생의
        리더십으로 온 교회가 하나님 사랑, 사람 사랑의 비전을 이루어 갈 있도록
        섬기는 것이 비전을 이루어가는 윤활유 역할을 합니다.
      </p>
    </div>
  );
}
