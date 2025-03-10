import Link from "next/link";
import styles from "./ChurchNewsList.module.css";

export default function ChurchNewsList({ churchNewsList }) {
  if (churchNewsList.length == 0) {
    return (
      <div className={styles.no_churchNews}>
        아직 업로드된 게시물이 없습니다 :(
      </div>
    );
  }

  return (
    <table className={styles.churchNews_table}>
      <thead className={styles.churchNews_thead}>
        <tr>
          <th scope="col">제목</th>
          <th scope="col">작성자</th>
        </tr>
      </thead>

      <tbody className={styles.churchNews_tbody}>
        {churchNewsList.map((churchNews) => (
          <tr key={churchNews.id}>
            <td>
              <Link href={`/koinonia/church-news/${churchNews.id}`}>
                {churchNews.title}
              </Link>
            </td>
            <td>
              <Link href={`/koinonia/church-news/${churchNews.id}`}>
                {churchNews.author}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
