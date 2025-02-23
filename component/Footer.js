import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__box}>
        <li>
          <p>
            <span>교회명</span> : 서부교회
          </p>
        </li>
        <li>
          <p>
            <span>주소</span> : 서울 은평구 응암로 345-1 (우.03458) Seoboo
            Presbyterian Church. 354-1 Eungamro Eunpyung-gi, Seoul, Korea
          </p>
        </li>
        <li className={styles.footer__content_box}>
          <p>
            <span>Mobile</span>: 010-4227-2866
          </p>
          <p>
            <span>Tel</span> : 352-6969
          </p>
          <p>
            <span>Fax</span> : 358-2766
          </p>
        </li>

        <li>
          <span>
            <Link href="/login">Login</Link> /{" "}
            <Link href="/signup">Create account</Link>
          </span>
        </li>
      </ul>
    </footer>
  );
}
