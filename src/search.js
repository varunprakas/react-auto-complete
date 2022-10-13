import "./styles.css";
export default function Search({ onQuery }) {
  const getKeyword = (e) => {
    console.log(e.target.value);
    setTimeout(function () {
      onQuery(e.target.value);
    }, 500);
  };
  return (
    <input
      type="text"
      placeholder={"Search"}
      onChange={getKeyword}
      className="input"
    />
  );
}
