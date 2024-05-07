import "./App.css";
// import sun from "./assets/sun.jpg"
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Button from "./components/Button.jsx";
// import Increment from "./components/Increment.jsx";
import Homework from "./components/Bulb.jsx"

function App() {
  const text = "welcome to my first React app";

  return (
    // react fragment
    <>
      <main className="bg-gray-700">
        <Header />
        <section className="h-[70vh] flex justify-center items-center gap-3 flex-col text-white">
          <h1 className="text-[55px] font-mono font-bold">{text}</h1>
          {/* <img src={sun} alt="img" width={500} height={300}  /> */}

          <section className="flex gap-3">
            <Button bg={"bg-blue-500"} name={"Get started"} />
            <Button
              bg={"bg-[whitesmoke] text-black"}
              name={"See Documentation"}
            />
          </section>
          <Homework/>

          {/* <Increment /> */}
        </section>
        <Footer />
      </main>
    </>
  );
}
export default App;
