import default_styles from "@/styles/default.module.css";
import styles from "@/styles/CreateSermon.module.css";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic"; // 이 줄을 추가
import Head from "next/head";

// ReactQuill과 ImageResize를 동적 import로 클라이언트 사이드에서만 로드
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <div>Loading editor...</div>,
});

const ImageResize = dynamic(() => import("quill-image-resize-module-react"), {
  ssr: false,
});

// 서버 사이드에서는 Quill을 사용하지 않음
let Quill;

if (typeof window !== "undefined") {
  Quill = require("quill"); // 클라이언트에서만 Quill을 로드
  import("quill-image-resize-module-react").then((ImageResize) => {
    Quill.register("modules/imageResize", ImageResize.default);
  });
}

export async function getServerSideProps(context) {
  const id = context.params["id"];
  console.log(id);

  let column;
  try {
    const res = await axios.get(`/column/${id}`);
    column = res.data;
  } catch {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id,
      column,
    },
  };
}

export default function EditColumn({ id, column }) {
  const router = useRouter();

  if (typeof window !== "undefined") {
    if (sessionStorage.getItem("refreshToken") == null) {
      router.push("/login");
    }
  }

  const [requesting, setRequesting] = useState(false);
  const [modules, setModules] = useState();
  const [content, setContent] = useState(column.content);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const title = form.elements.namedItem("title").value;
    const author = form.elements.namedItem("author").value;
    const createdAt = form.elements.namedItem("createdAt").value;

    if (
      title.trim() == "" ||
      author.trim() == "" ||
      content.trim() == "" ||
      createdAt.trim() == ""
    ) {
      window.alert("모든 항목을 입력해주세요.");
    } else {
      setRequesting(true);
      await axios
        .patch(`/column/${id}`, {
          title,
          author,
          content,
          createdAt,
        })
        .then((res) => {
          res.status == 200
            ? router.push(`/sermon-column/column/${id}`)
            : window.alert("문제가 생겼습니다. 잠시후 시도해주세요.");
        })
        .catch((err) => {
          window.alert("문제가 생겼습니다. 잠시후 시도해주세요.");
        });

      setRequesting(false);
    }
  };

  useEffect(() => {
    setModules({
      toolbar: {
        container: [
          ["image"],
          [{ header: [1, 2, 3, 4, 5, false] }],
          ["bold", "italic", "underline"],
          [{ align: [] }],
        ],
      },
      imageResize: {
        parchment: Quill.import("parchment"),
        modules: ["Resize", "DisplaySize"],
      },
    });
  }, []);

  const handleChange = (content, delta, source, editor) => {
    console.log("CHANGE");
    const text = editor.getHTML();
    setContent(text);
  };

  return (
    <div className={default_styles.default__main}>
      <Head>
        <title>칼럼 수정 - 서부교회</title>
      </Head>

      <form onSubmit={handleSubmit} className={styles.create__form}>
        <input
          name="title"
          type="text"
          placeholder="제목"
          defaultValue={column.title}
        />
        <input
          name="author"
          type="text"
          placeholder="작성자"
          defaultValue={column.author}
        />
        <input
          name="createdAt"
          type="text"
          placeholder="작성일"
          defaultValue={column.createdAt}
        />

        {typeof window === "undefined" || modules == undefined ? (
          <div>Loading editor...</div>
        ) : (
          <ReactQuill
            name="content"
            modules={modules}
            style={{ height: "350px" }}
            onChange={handleChange}
            defaultValue={column.content}
          />
        )}

        <button disabled={requesting} className={styles.form__upload}>
          업로드
        </button>
      </form>
    </div>
  );
}
