import default_styles from "@/styles/default.module.css";
import styles from "@/styles/HowToCome.module.css";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import Head from "next/head";

export default function HowToCome() {
  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>오시는 길 - 서부교회</title>
      </Head>

      <h1 className={default_styles.default__title}>오시는 길</h1>
      <hr className={default_styles.default__hr} />

      <Map
        center={{
          lat: 37.6020610895306,
          lng: 126.922139592195,
        }}
        style={{
          width: "100%",
          height: "450px",
          marginTop: "1.5em",
        }}
        level={3}
      >
        <MapMarker
          position={{
            lat: 37.6020610895306,
            lng: 126.922139592195,
          }}
          image={{
            src: "/images/서부교회.png",
            size: {
              width: 64,
              height: 69,
            }, // 마커이미지의 크기입니다
            options: {
              offset: {
                x: 32,
                y: 52,
              }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            },
          }}
        ></MapMarker>
      </Map>

      <div className={styles.howToCome__box}>
        <h3>• 주소</h3>

        <p>
          서울 은평구 응암로 345-1 <span>(서부교회)</span>
        </p>
      </div>

      <div className={styles.howToCome__box}>
        <h3>• 대중교통 이용</h3>

        <div className={styles.howToCome__textbox1}>
          <p>
            6호선 역촌역 <span>: 4번 출구 (도보 6분)</span>
          </p>
          <p>
            6호선 응암역 <span>: 4번 출구 (도보 13분)</span>
          </p>
        </div>

        <div className={styles.howToCome__textbox1}>
          <div className={styles.howToCome__textbox1}>
            <p className={styles.howToCome__bus}>버스:</p>
            <div>
              <p>
                서부경찰서 후문 정류소 <span>761, 7722, 8774</span> <br />
              </p>

              <p className={styles.howToCome__textbox2}>
                본서부병원 정류소{" "}
                <span className={styles.howToCome__linespan}>
                  702A, 702B, 7025, 7212, 7719, 7722, 7730, 은평05
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
