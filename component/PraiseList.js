import Link from "next/link";
import styles from "./SermonList.module.css";
import Pagination from "./Pagination";

export default function PraiseList({
  praiseList,
  totalPages,
  handlePageChange,
  pageNo,
}) {
  if (praiseList.length == 0) {
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
            <th scope="col">날짜</th>
          </tr>
        </thead>

        <tbody className={styles.sermon_tbody}>
          {praiseList.map((praise) => (
            <tr key={praise.id}>
              <td>
                <Link href={`/sermon-column/praise/${praise.id}`}>
                  {praise.title}
                </Link>
              </td>
              <td>
                <Link href={`/sermon-column/praise/${praise.id}`}>
                  {praise.createdAt}
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
