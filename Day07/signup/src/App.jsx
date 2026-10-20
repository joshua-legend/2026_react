import { useState } from "react";
import EmailField from "./molecules/EmailField";
import PasswordCheckField from "./molecules/PasswordCheckField";
import PasswordField from "./molecules/PasswordField";
import Field from "./molecules/Field";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  return (
    <>
      <Field
        title={"이메일"}
        warnTitle={"@가 빠졌어요."}
        type={"email"}
        cond={!email.includes("@")}
        func={(e) => {
          setEmail((prev) => e.target.value);
        }}
      />
      <Field
        title={"비밀번호"}
        warnTitle={"8글자 이상어야해요."}
        type={"password"}
        cond={password.length < 8}
        func={(e) => {
          setPassword((prev) => e.target.value);
        }}
      />
      <Field
        title={"비밀번호 확인"}
        warnTitle={"비밀번호가 다릅니다."}
        type={"password"}
        cond={password != passwordCheck}
        func={(e) => {
          setPasswordCheck((prev) => e.target.value);
        }}
      />
    </>
  );
}

export default App;
