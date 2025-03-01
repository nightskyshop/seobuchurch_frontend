import Link from "next/link";
import styles from "./ColumnList.module.css";
import Pagination from "./Pagination";

export default function columnList({
  columnList,
  totalPages,
  handlePageChange,
  pageNo,
}) {
  if (columnList.length == 0) {
    return (
      <div className={styles.no_column}>아직 업로드된 게시물이 없습니다 :(</div>
    );
  }

  return (
    <>
      <table className={styles.column_table}>
        <thead className={styles.column_thead}>
          <tr>
            <th scope="col">제목</th>
            <th scope="col">작성자</th>
            <th scope="col">날짜</th>
          </tr>
        </thead>

        <tbody className={styles.column_tbody}>
          {columnList.map((column) => (
            <tr key={column.id}>
              <td>
                <Link href={`/sermon-column/column/${column.id}`}>
                  {column.title}
                </Link>
              </td>
              <td>
                <Link href={`/sermon-column/column/${column.id}`}>
                  {column.author}
                </Link>
              </td>
              <td>
                <Link href={`/sermon-column/column/${column.id}`}>
                  {column.createdAt}
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
