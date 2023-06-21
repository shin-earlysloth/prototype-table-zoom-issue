import "./App.css";
import TrBorderExample from "./components/TrBorderExample";
import TdBorderExample from "./components/TdBorderExample";
import TrOutlineExample from "./components/TrOutlineExample";

function App() {
  return (
    <>
      <h1>문제 있는 버전: border-collapse: collapse & tr에 border 적용</h1>
      <TrBorderExample />

      <h1>
        문제 일부 있는 버전: border-collapse: collapse & td에 last,first of type
        처리
      </h1>
      <TdBorderExample />

      <h1>문제 없는 버전: border-collapse: collapse & outline</h1>
      <TrOutlineExample />
    </>
  );
}

export default App;
