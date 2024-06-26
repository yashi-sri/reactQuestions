// import Counter from "./pages/Counter";
// import List from "./pages/List";
// import ShowInput from "./pages/ShowInput";
// import Timer from "./pages/Timer";
// import ToggleBtn from "./pages/ToggleBtn";
// import BgChange from "./pages/BgChange";
// import Todo from "./pages/Todo";
// import RandomQutoes from "./pages/RandomQutoes";
// import FileUpload from "./pages/FileUpload";

import Searchbar from "./pages/Searchbar";

function App() {
  return (
    <>
      <div className="flex bg-slate-800 justify-center items-center w-screen h-screen text-white">
        {/* <Counter />     //2 */}
        {/* <ShowInput />   //3  */}
        {/* <List />   //4 */}
        {/* <ToggleBtn /> //5 */}
        {/*  <Timer /> //6 */}
        {/* <Todo />  //7*/}
        {/* <BgChange /> //8 */}
        {/* <RandomQutoes /> //9 */}
        {/* <FileUpload /> //10 */}
        <Searchbar />
      </div>
      {/* <h1>Hello World</h1>  //1*/}
    </>
  );
}

export default App;
