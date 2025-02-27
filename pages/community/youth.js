import default_styles from "@/styles/default.module.css";
import styles from "@/styles/Community.module.css";

export default function Youth() {
  return (
    <div className={default_styles.default__main}>
      <h1 className={default_styles.default__title}>중•고등부</h1>
      <hr className={default_styles.default__hr} />

      <div className={styles.community__borderbox}>
        <p>
          청소년 시기에 삶의 주인되신 예수님을 인격적으로 만나고, 건강한
          신앙인격을 형성할 수 있도록 돕습니다.
        </p>

        <p>
          예배시간 및 장소: 주일 오후 12시 30분, 지하 1층 청년부실 <br />
          대상: 중등부, 고등부 <br />
          담당: 김혜수 목사
        </p>
      </div>
    </div>
  );
}
