import getUser from "@/lib/getUser";
import styles from "./Header.module.css";
import { useQuery } from "@tanstack/react-query";
import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const router = useRouter();

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  const [hamburger, setHamberger] = useState(false);
  const [nav, setNav] = useState(true);

  const handleNavClick = () => {
    setNav((prevNav) => !prevNav);
  };

  const handleClick = () => {
    if (hamburger) {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1050) {
        setHamberger(true);
        setNav(false);
      } else {
        setHamberger(false);
        setNav(true);
      }
    });
    if (window.innerWidth < 1050) {
      setHamberger(true);
      setNav(false);
    }
  }, []);

  return (
    <header className={styles.header__border}>
      <div className={styles.header}>
        <Link onClick={handleClick} href="/">
          <Logo />
        </Link>

        {hamburger ? (
          <FontAwesomeIcon
            icon={faBars}
            onClick={handleNavClick}
            className={`${styles.header__hamberger} fa-2xl`}
          />
        ) : null}

        {nav ? (
          <ul className={styles.header__btns}>
            <li>
              <Link
                href="/church-info/church-vision"
                className={
                  router.asPath.includes("church-info") ? styles.selected : null
                }
                onClick={handleClick}
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
                  onClick={handleClick}
                >
                  교회 비전
                </Link>
                <Link
                  href="/church-info/church-history"
                  className={
                    router.asPath.includes("church-history")
                      ? styles.selected
                      : null
                  }
                  onClick={handleClick}
                >
                  교회연혁
                </Link>
                <Link
                  href="/church-info/greetings"
                  className={
                    router.asPath.includes("greetings") ? styles.selected : null
                  }
                  onClick={handleClick}
                >
                  담임목사 인사말
                </Link>
                <Link
                  href="/church-info/workers"
                  className={
                    router.asPath.includes("workers") ? styles.selected : null
                  }
                  onClick={handleClick}
                >
                  섬기는 분들
                </Link>
                <Link
                  href="/church-info/worship-info"
                  className={
                    router.asPath.includes("worship-info")
                      ? styles.selected
                      : null
                  }
                  onClick={handleClick}
                >
                  예배안내
                </Link>
                <Link
                  href="/church-info/church-news"
                  className={
                    router.asPath.includes("/church-news")
                      ? styles.selected
                      : null
                  }
                  onClick={handleClick}
                >
                  교회소식
                </Link>
                <Link
                  href="/church-info/how-to-come"
                  className={
                    router.asPath.includes("how-to-come")
                      ? styles.selected
                      : null
                  }
                  onClick={handleClick}
                >
                  오시는 길
                </Link>
              </div>
            </li>
            <li>
              <Link
                href="/sermon-column/sunday-sermon"
                className={
                  router.asPath.includes("sermon-column")
                    ? styles.selected
                    : null
                }
                onClick={handleClick}
              >
                말씀 및 찬양
              </Link>

              <div className={styles.header__btns_dropdown}>
                <Link
                  href="/sermon-column/sunday-sermon"
                  className={
                    router.asPath.includes("sunday-sermon")
                      ? styles.selected
                      : null
                  }
                  onClick={handleClick}
                >
                  주일예배
                </Link>
                <Link
                  href="/sermon-column/wednesday-sermon"
                  className={
                    router.asPath.includes("wednesday-sermon")
                      ? styles.selected
                      : null
                  }
                  onClick={handleClick}
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
                  onClick={handleClick}
                >
                  금요기도회
                </Link>
                <Link
                  href="/sermon-column/morning-prayer"
                  className={
                    router.asPath.includes("morning-prayer")
                      ? styles.selected
                      : null
                  }
                  onClick={handleClick}
                >
                  새벽기도회
                </Link>
                <Link
                  href="/sermon-column/special-sermon"
                  className={
                    router.asPath.includes("special-sermon")
                      ? styles.selected
                      : null
                  }
                  onClick={handleClick}
                >
                  특별집회
                </Link>
                <Link
                  href="/sermon-column/columns"
                  className={
                    router.asPath.includes("/columns") ? styles.selected : null
                  }
                  onClick={handleClick}
                >
                  칼럼
                </Link>
                <Link
                  href="/sermon-column/choir"
                  className={
                    router.asPath.includes("choir") ? styles.selected : null
                  }
                  onClick={handleClick}
                >
                  찬양대
                </Link>
                <Link href="/not-ready" onClick={handleClick}>
                  *경배와 찬양
                </Link>
              </div>
            </li>
            <li>
              <Link
                href="/community"
                className={
                  router.asPath.includes("/community") ? styles.selected : null
                }
                onClick={handleClick}
              >
                공동체
              </Link>

              <div className={styles.header__btns_dropdown}>
                <p>다음세대</p>
                <Link
                  href="/community/elementary"
                  className={
                    router.asPath.includes("/elementary")
                      ? styles.selected
                      : null
                  }
                  onClick={handleClick}
                >
                  유•초등부
                </Link>
                <Link
                  href="/community/youth"
                  className={
                    router.asPath.includes("/youth") ? styles.selected : null
                  }
                  onClick={handleClick}
                >
                  중•고등부
                </Link>
                <Link
                  href="/community/young-adult"
                  className={
                    router.asPath.includes("/young-adult")
                      ? styles.selected
                      : null
                  }
                  onClick={handleClick}
                >
                  청년부
                </Link>

                <p className={styles.marginTop}>사랑방</p>
                <Link href="/not-ready" onClick={handleClick}>
                  *사랑방 이야기
                </Link>
                <Link href="/not-ready" onClick={handleClick}>
                  *사랑방 자료
                </Link>
              </div>
            </li>
            <li>
              <Link href="/not-ready" onClick={handleClick}>
                *선교 및 훈련
              </Link>

              <div className={styles.header__btns_dropdown}>
                <p>선교</p>
                <Link href="/not-ready" onClick={handleClick}>
                  *협력 선교사
                </Link>
                <Link href="/not-ready" onClick={handleClick}>
                  *협력 교회&단체
                </Link>
                <Link href="/not-ready" onClick={handleClick}>
                  *기도후원
                </Link>

                <p className={styles.marginTop}>훈련</p>
                <Link href="/not-ready" onClick={handleClick}>
                  *새가족반
                </Link>
                <Link href="/not-ready" onClick={handleClick}>
                  *제자반
                </Link>
                <Link href="/not-ready" onClick={handleClick}>
                  *사랑방 섬김이 모임
                </Link>
              </div>
            </li>
            <li>
              <Link href="/not-ready">*코이노니아</Link>

              <div className={styles.header__btns_dropdown}>
                <Link href="/not-ready" onClick={handleClick}>
                  *주요일정
                </Link>
                <Link href="/not-ready" onClick={handleClick}>
                  *문화교실
                </Link>
                <Link href="/not-ready" onClick={handleClick}>
                  *나눔터
                </Link>
                <Link href="/not-ready" onClick={handleClick}>
                  *갤러리
                </Link>
                <Link href="/not-ready" onClick={handleClick}>
                  *자료실
                </Link>
              </div>
            </li>
          </ul>
        ) : null}
      </div>
    </header>
  );
}
