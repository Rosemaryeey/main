import { Link } from "react-router-dom";

function signup() {
  return (
    <div>
      <Link to="/">go back to home</Link>
      <form className="w-screen h-screen flex items-center justify-center">
        <section
          className="w-[35vw] h-[70vh]  border-2 bg-white  bg-opacity-10 rounded-md 
       border-r-4 flex items-center justify-between flex-col  shadow-2xl p-7  border-l-black"
        >
          <h1 className="text-4xl  font-semibold ">SIGN UP</h1>
          <div>
            <h4>NAME</h4>
            <input
              className="w-[25vw] h-[7vh]  hover:border-b-black border-2     border-transparent rounded-md
           "
              type="text"
              id="name"
              placeholder="enter your name"
              required
            />
          </div>

          <div>
            <h4>EMAIL</h4>
            <input
              className="w-[25vw] h-[7vh]  hover:border-b-black border-2     border-transparent rounded-md"
              id="email"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div>
            <h4>PASSWORD</h4>
            <input
              className="w-[25vw] h-[7vh]  hover:border-b-black border-2    border-transparent rounded-md "
              id="password"
              placeholder="......"
              required
            />
          </div>
          <div>
            <h4>COMFIRM PASSWORD</h4>
            <input
              className="w-[25vw] h-[7vh]  hover:border-b-black border-2    border-transparent rounded-md "
              id="comfrim"
              placeholder="....."
              required
            />
          </div>

          <div>
            <button className=" bg-blue-600  py-3 px-3 text-white hover:bg-blue-900 w-[20vw]   shadow-inner">
              SUBMIT
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}

export default signup;