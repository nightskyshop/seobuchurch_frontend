import default_styles from "@/styles/default.module.css";
import Head from "next/head";

export default function NotReady() {
  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>아직 준비 되지 않은 페이지입니다.</title>
      </Head>
      <h1 className={default_styles.default__title}>
        아직 준비 되지 않은 페이지입니다.. :(
      </h1>
    </div>
  );
}
