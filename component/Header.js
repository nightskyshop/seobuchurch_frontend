import getUser from "@/lib/getUser";
import styles from "./Header.module.css";
import { useQuery } from "@tanstack/react-query";
import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  const router = useRouter();

  return (
    <header className={styles.header__border}>
      <div className={styles.header}>
        <Link href="/">
          <Logo />
        </Link>

        <ul className={styles.header__btns}>
          <li>
            <Link
              href="/"
              className={
                router.asPath.includes("church-info") ? styles.selected : null
              }
            >
              교회소개
            </Link>

            <div className={styles.header__btns_dropdown}>
              <Link
                href="/church-info/church-vision"
                className={
                  router.asPath.includes("church-vision")
                    ? styles.selected
                    : null
                }
              >
                교회 비전
              </Link>
              <Link href="/">교회연혁</Link>
              <Link href="/">담임목사 소개</Link>
              <Link href="/">섬기는 분들</Link>
              <Link href="/">예배안내</Link>
              <Link
                href="/church-info/how-to-come"
                className={
                  router.asPath.includes("how-to-come") ? styles.selected : null
                }
              >
                오시는 길
              </Link>
            </div>
          </li>
          <li>
            <Link
              href="/sermon-column/sunday-sermon"
              className={
                router.asPath.includes("sermon-column") ? styles.selected : null
              }
            >
              설교 및 칼럼
            </Link>

            <div className={styles.header__btns_dropdown}>
              <Link
                href="/sermon-column/sunday-sermon"
                className={
                  router.asPath.includes("sunday-sermon")
                    ? styles.selected
                    : null
                }
              >
                주일설교
              </Link>
              <Link
                href="/sermon-column/wednesday-sermon"
                className={
                  router.asPath.includes("wednesday-sermon")
                    ? styles.selected
                    : null
                }
              >
                수요예배
              </Link>
              <Link
                href="/sermon-column/friday-prayer"
                className={
                  router.asPath.includes("friday-prayer")
                    ? styles.selected
                    : null
                }
              >
                금요기도회
              </Link>
              <Link
                href="/sermon-column/special-sermon"
                className={
                  router.asPath.includes("special-sermon")
                    ? styles.selected
                    : null
                }
              >
                특별집회
              </Link>
              <Link
                href="/sermon-column/columns"
                className={
                  router.asPath.includes("/columns") ? styles.selected : null
                }
              >
                칼럼
              </Link>
            </div>
          </li>
          <li>
            <Link href="/">공동체</Link>

            <div className={styles.header__btns_dropdown}>
              <p>다음세대</p>
              <Link href="/">유•초등부</Link>
              <Link href="/">청소년부</Link>
              <Link href="/">청년부</Link>

              <p className={styles.marginTop}>엘더세대</p>
              <Link href="/">사랑방</Link>
              <Link href="/">엘더모임</Link>
            </div>
          </li>
          <li>
            <Link href="/">선교 및 훈련</Link>

            <div className={styles.header__btns_dropdown}>
              <p>선교</p>
              <Link href="/">협력 선교사</Link>
              <Link href="/">협력 교회&단체</Link>
              <Link href="/">기도후원</Link>

              <p className={styles.marginTop}>훈련</p>
              <Link href="/">새가족반</Link>
              <Link href="/">제자반</Link>
              <Link href="/">사랑방 섬김이 모임</Link>
            </div>
          </li>
          <li>
            <Link href="/">코이노이아</Link>

            <div className={styles.header__btns_dropdown}>
              <Link href="/">주요일정</Link>
              <Link href="/">교회소식</Link>
              <Link href="/">나눔터</Link>
              <Link href="/">갤러리</Link>
              <Link href="/">자료실</Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
