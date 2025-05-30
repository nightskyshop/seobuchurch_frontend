import Link from "next/link";
import styles from "./SermonList.module.css";
import Pagination from "./Pagination";

export default function SermonList({
  sermonList,
  totalPages,
  handlePageChange,
  pageNo,
}) {
  if (sermonList.length == 0) {
    return (
      <div className={styles.no_sermon}>아직 업로드된 게시물이 없습니다 :(</div>
    );
  }

  return (
    <>
      <table className={styles.sermon_table}>
        <thead className={styles.sermon_thead}>
          <tr>
            <th scope="col">제목</th>
            <th scope="col">본문</th>
            <th scope="col">설교자</th>
            <th scope="col">날짜</th>
          </tr>
        </thead>

        <tbody className={styles.sermon_tbody}>
          {sermonList.map((sermon) => (
            <tr key={sermon.id}>
              <td>
                <Link href={`/sermon-column/sermon/${sermon.id}`}>
                  {sermon.title}
                </Link>
              </td>
              <td>
                <Link href={`/sermon-column/sermon/${sermon.id}`}>
                  {sermon.verse}
                </Link>
              </td>
              <td>
                <Link href={`/sermon-column/sermon/${sermon.id}`}>
                  {sermon.pastor}
                </Link>
              </td>
              <td>
                <Link href={`/sermon-column/sermon/${sermon.id}`}>
                  {sermon.createdAt}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        pageCount={totalPages}
        onPageChange={handlePageChange}
        currentPage={pageNo}
      />
    </>
  );
}
