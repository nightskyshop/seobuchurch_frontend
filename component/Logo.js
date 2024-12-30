import styles from "./Logo.module.css";
import Image from "next/image";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image
        src="/images/고신로고.svg"
        alt="고신로고"
        priority={true}
        width={40}
        height={50}
      />

      <div>
        <h3 className={styles.logo__group}>
          <span>대</span>
          <span>한</span>
          <span>예</span>
          <span>수</span>
          <span>교</span>
          <span>장</span>
          <span>로</span>
          <span>회</span>
        </h3>
        <h1 className={styles.logo__name}>서부교회</h1>
      </div>
    </div>
  );
}
