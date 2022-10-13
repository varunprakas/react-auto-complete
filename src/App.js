import "./styles.css";
import { response } from "./resource";
import Search from "./search";
import List from "./list";
import { useState } from "react";
export default function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Search onQuery={setQuery} />
      <List countrtList={response} updatedList={query} />
    </div>
  );
}
