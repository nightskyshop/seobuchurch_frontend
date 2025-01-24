import default_styles from "@/styles/default.module.css";
import styles from "@/styles/Greetings.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Greetings() {
  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>담임목사 인사말 - 서부교회</title>
      </Head>

      <h1 className={default_styles.default__title}>담임목사 인사말</h1>
      <hr className={default_styles.default__hr} />

      <Image
        className={styles.greetings__image}
        src="/images/담임목사님.jpeg"
        width={300}
        height={380}
      />

      <h3 className={styles.greetings__title}>
        김혜수 <span>목사</span>
      </h3>

      <div className={styles.greetings__borderbox}>
        <p>
          “하나님이 우리를 사랑하시는 사랑을 우리가 알고 믿었노니 하나님은
          사랑이시라 <br />
          사랑 안에 거하는 자는 하나님 안에 거하고 하나님도 그의 안에
          거하시느니라”
        </p>
        <span>(요일4:16)</span>
      </div>

      <div className={styles.greetings__textbox}>
        <p>
          <span>하나님은 사랑이십니다.</span> 신앙생활은 하나님께서 사랑이심을
          알고, 믿고, 그 사랑 안에 거하는 삶입니다.{" "}
          <span>
            하나님의 사랑은 예수그리스도를 통해 우리에게 주어졌습니다.
          </span>{" "}
          우리가 연약할 때에, 죄인되었을 때에, 하나님과 원수되었을 때에 예수님을
          보내주셨고, 그리스도께서 우리의 죄를 대신하여 십자가에 죽으시고
          부활하심으로 우리를 향한 하나님의 사랑을 확실히 증명하셨습니다. 우리는
          하나님 사랑의 결정체이신 예수님을 통해 하나님이 사랑이심을 알고, 믿게
          됩니다.
        </p>

        <p>
          {" "}
          <span>
            예수그리스도를 통해 하나님의 사랑을 알고, 믿게 된 하나님의 백성들은
            사랑이신 하나님을 닮아, 사랑으로 화답하는 삶을 살게 됩니다.
          </span>{" "}
          우리를 향하신 하나님의 사랑에 우리도 하나님 사랑으로 화답하고,
          그리스도를 통해 베풀어주신 사랑을 본받아 이웃을 사랑하는 삶을 삽니다.
          <span>
            그래서 성경은 하나님의 사랑을 입은 하나님의 백성들의 삶을 [하나님
            사랑, 사람 사랑]으로 정리합니다.
          </span>
        </p>

        <p>
          {" "}
          <span>서부교회는 하나님의 사랑을 입고 세워진 교회입니다.</span> 우리는
          하나님의 사랑의 결과로 자녀됨의 은혜를 입었습니다.{" "}
          <span>사랑을 받은 자로서</span>
          우리도 <span>하나님을 사랑하여</span> 영과 진리로 예배하며, 사람을
          사랑하여 영혼 구원하여 제자를 삼고, 성령의 풍성한 교제를 누리며,
          하나님의 말씀을 가르쳐 지키게 하고, 하나님께 받은 사랑으로 이웃을
          섬기는 <span>한 가족 공동체가 되길 소망합니다.</span>
        </p>
      </div>
    </div>
  );
}
