import { useState } from "react";
import AllChecker from "./molecules/AllChecker";
import Checker from "./molecules/Checker";
import FieldList from "./organism/FieldList";

function App() {
  const [checkList, setCheckList] = useState([false, false, false]);

  return (
    <>
      {/* <FieldList /> */}
      <AllChecker
        func={() => {
          setCheckList((prev) => {
            const isAllChecked = prev.every((v) => v);
            return isAllChecked ? [false, false, false] : [true, true, true];
          });
        }}
        isChecked={checkList.every((v) => v)}
      />
      <Checker
        checked={checkList[0]}
        func={(e) => {
          setCheckList((prev) =>
            prev.map((v, i) => (i == 0 ? e.target.checked : v)),
          );
        }}
        isNecessary={true}
        text={"이용 약관 동의"}
      />
      <Checker
        checked={checkList[1]}
        func={(e) => {
          setCheckList((prev) =>
            prev.map((v, i) => (i == 1 ? e.target.checked : v)),
          );
        }}
        isNecessary={true}
        text={"개인 정보 수집 이용 동의"}
      />
      <Checker
        checked={checkList[2]}
        func={(e) => {
          setCheckList((prev) =>
            prev.map((v, i) => (i == 2 ? e.target.checked : v)),
          );
        }}
        isNecessary={false}
        text={"마케팅 수신 동의"}
      />
    </>
  );
}

export default App;
