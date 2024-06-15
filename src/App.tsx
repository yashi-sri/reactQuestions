import Counter from "./pages/Counter";
import List from "./pages/List";
import ShowInput from "./pages/ShowInput";
import ToggleBtn from "./pages/ToggleBtn";

function App() {
  return (
    <>
      <div className="flex bg-slate-800 justify-center items-center w-screen h-screen text-white">
        {/* <Counter /> */}
        <ShowInput />
        {/* <List /> */}
        {/* <ToggleBtn /> */}
      </div>
      {/* <h1>Hello World</h1> */}
    </>
  );
}

export default App;
