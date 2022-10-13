import { useEffect, useState } from "react";

export default function List({ countrtList, updatedList }) {
  const [listResult, setListResult] = useState([]);
  const [noResult, setNoResult] = useState("");
  useEffect(
    function () {
      let result = [];
      for (let i = 0; i < countrtList.length; i++) {
        if (
          countrtList[i].substr(0, updatedList.length).toUpperCase() ===
          updatedList.toUpperCase()
        ) {
          result.push(countrtList[i]);
        } else {
          setNoResult("No data found");
        }
      }
      if (noResult) {
        setListResult([]);
      }
      if (result.length > 0) {
        setListResult(result);
        setNoResult("");
      } else {
        setListResult(countrtList);
      }
    },
    [updatedList, countrtList, noResult]
  );

  return (
    <>
      <ul>
        {noResult
          ? noResult
          : listResult &&
            listResult.map((item, index) => (
              <li key={item + index}>{item}</li>
            ))}{" "}
      </ul>
    </>
  );
}
