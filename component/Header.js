import getUser from "@/lib/getUser";
import styles from "./Header.module.css";
import { useQuery } from "@tanstack/react-query";

export default function Header() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  console.log(user);

  return (
    <header className={styles.header__border}>
      <div className={styles.header}>
        <h1>헤더</h1>
      </div>
    </header>
  );
}
