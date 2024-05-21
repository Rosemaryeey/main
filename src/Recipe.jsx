import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

function Recipe() {
  const APP_ID = "6d6a83db";
  const APP_KEY = "2301e231e5cf4dc8ba58fb8966ba46d3";
  const [query, setQuery] = useState("chicken");
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  const API = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true)
      const response = await fetch(API);
      const recipe = await response.json();
      
      console.log(recipe.hits);
      setRecipe(recipe.hits);
      setLoading(false);
      
    };
    
    fetchRecipe();
  }, [query]);
  
  const handleChange = (e) => {
    setSearch(e.target.value);
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  
  // try {
  //    const recipe = await response.json();
  //    setRecipe(recipe);
  //    setLoading(false)
   
  //  } 
  return (
    <div className="  bg-blue-500 min-h-[90vh] h-fit py-10">                                
      <form onSubmit={handleSubmit} className=" gap-2 flex justify-center">
        <input
          onChange={handleChange}
          className=" h-11  w-[30vw] border-[1px] bg-none border-gray-500 pl-3  rounded-md py-3 px-5 outline-none"
          type="text"
          placeholder="Search Recipe.... "
          value={search}
        />
        <button
          type="submit"
          className=" bg-gray-500 text-white px-7 rounded-md hover:bg-gray-700"
        >
          search
        </button>
      </form>

      {loading && <div className=" flex items-center justify-center  "> 
        <ThreeDots 
          visible={true}
          height="20vh"
          width="20vw"
          color="#000"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>}
      <section className="flex justify-around flex-wrap space-y-10">
        {recipe.map((item, index) => (
          <figure
            className="w-[30%] rounded-3xl overflow-y-auto h-[70vh]   grid gap-3 shadow-2xl content-start p-5"
            key={index}
          >
            <img
              className="w-full rounded-3xl  h-44 "
              src={item.recipe.image}
              alt="item.recipe.image"
            />
            <span>{item.recipe.label}</span>
            <b>Ingredients</b>
            <ul>
              {item.recipe.ingredientLines.map((ingre, index) => (
                <li key={index}>
                  <small>{ingre}</small>
                </li>
              ))}
            </ul>
          </figure>
        ))}
      </section>
    </div>
  );
}

export default Recipe;
