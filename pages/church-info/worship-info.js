import default_styles from "@/styles/default.module.css";
import styles from "@/styles/WorshipInfo.module.css";
import Head from "next/head";

export default function WorshipInfo() {
  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>예배안내 - 서부교회</title>
      </Head>

      <h1 className={default_styles.default__title}>예배안내</h1>
      <hr className={default_styles.default__hr} />

      <table className={styles.worshipInfo_table}>
        <thead className={styles.worshipInfo_thead}>
          <tr>
            <th scope="col">예배</th>
            <th scope="col">시간</th>
            <th scope="col">장소</th>
          </tr>
        </thead>

        <tbody className={styles.worshipInfo_tbody}>
          <tr>
            <td>
              <div>
                <span>주</span>
                <span>일</span>
                <span>낮</span>
                <span>예</span>
                <span>배</span>
              </div>
            </td>
            <td>
              <div>
                <span>주</span>
                <span>일</span>
                <span>1</span>
                <span>1</span>
                <span>:</span>
                <span>0</span>
                <span>0</span>
              </div>
            </td>
            <td>2층 예배실</td>
          </tr>

          <tr>
            <td>
              <div>
                <span>구</span>
                <span>역</span>
                <span>모</span>
                <span>임</span>
              </div>
            </td>
            <td>
              <div>
                <span>주</span>
                <span>일</span>
                <span>1</span>
                <span>4</span>
                <span>:</span>
                <span>0</span>
                <span>0</span>
              </div>
            </td>
            <td className={styles.red}>미정</td>
          </tr>

          <tr>
            <td>
              <div>
                <span>중</span>
                <span>•</span>
                <span>고</span>
                <span>•</span>
                <span>청</span>
                <span>예</span>
                <span>배</span>
              </div>
            </td>
            <td>
              <div>
                <span>주</span>
                <span>일</span>
                <span>1</span>
                <span>3</span>
                <span>:</span>
                <span>3</span>
                <span>0</span>
              </div>
            </td>
            <td>B1층 예배실</td>
          </tr>

          <tr>
            <td>
              <div>
                <span>유</span>
                <span>초</span>
                <span>등</span>
                <span>부</span>
                <span>예</span>
                <span>배</span>
              </div>
            </td>
            <td>
              <div>
                <span>주</span>
                <span>일</span>
                <span>1</span>
                <span>1</span>
                <span>:</span>
                <span>0</span>
                <span>0</span>
              </div>
            </td>
            <td>B1층 유치부실</td>
          </tr>

          <tr>
            <td>
              <div>
                <span>새</span>
                <span>벽</span>
                <span>예</span>
                <span>배</span>
              </div>
            </td>
            <td>
              <div>
                <span>월</span>
                <span>~</span>
                <span>금</span>
                <span>,</span>
                <span>주</span>
                <span>일</span>
                <span>5</span>
                <span>:</span>
                <span>0</span>
                <span>0</span>
              </div>
            </td>
            <td>B1층 예배실</td>
          </tr>

          <tr>
            <td>
              <div>
                <span>수</span>
                <span>요</span>
                <span>예</span>
                <span>배</span>
              </div>
            </td>
            <td>
              <div>
                <span>수</span>
                <span>요</span>
                <span>일</span>
                <span>1</span>
                <span>9</span>
                <span>:</span>
                <span>3</span>
                <span>0</span>
              </div>
            </td>
            <td>B1층 예배실</td>
          </tr>

          <tr>
            <td>
              <div>
                <span>금</span>
                <span>요</span>
                <span>예</span>
                <span>배</span>
              </div>
            </td>
            <td>
              <div>
                <span>금</span>
                <span>요</span>
                <span>일</span>
                <span>2</span>
                <span>1</span>
                <span>:</span>
                <span>0</span>
                <span>0</span>
              </div>
            </td>
            <td>B1층 예배실</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
