import { useState } from "react";
import Field from "../molecules/Field";

const FieldList = () => {
  const fields = [
    {
      name: "email",
      title: "이메일",
      warnTitle: "@가 빠졌어요.",
      type: "email",
      value: "",
      cond: (v) => !v.includes("@"),
    },
    {
      name: "password",
      title: "비밀번호",
      warnTitle: "8글자 이상이여야 해요.",
      type: "password",
      value: "",
      cond: (v) => v.length < 8,
    },
    {
      name: "passwordCheck",
      title: "비밀번호 확인",
      warnTitle: "비밀번호가 다릅니다.",
      type: "password",
      value: "",
      cond: (v, get) => v != get("password"),
    },
  ];

  const [list, setList] = useState(fields);

  return (
    <>
      {list.map((v, i) => (
        <Field
          key={i}
          {...v}
          func={(e) => {
            setList((prev) =>
              prev.map((f) =>
                f.name == v.name ? { ...f, value: e.target.value } : f,
              ),
            );
          }}
        />
      ))}
    </>
  );
};

export default FieldList;
