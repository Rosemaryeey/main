// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Promise() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState();
//    const [loading, setLoading] = useState();

//   const api = "https://fakestoreapi.com/products";
//   useEffect(() => {
//     // const fetchData = () => {
//     //   fetch(api)
//     //     .then((res) => res.json())
//     //     .then((data) => setData(data))
//     //     .catch((error) => console.error(error));
//     //   console.log(data);
//     // };
//     const fetchData = async () => {
//       const response = await fetch(api);
     
//       // setLoading ("Loading....")

//       setLoading(true)
//       try {
//         const data = await response.json();
//         setData(data);
//         setLoading(false)
      
//       } 
//       catch(err){
//         setError("404 ! incorrect API Route");

//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <h1>Fetch Product Api</h1>
//       <section className=" flex  justify-around flex-wrap gap-5">
//         <h1 className="text-5xl">{error}</h1>

//         {loading && <h1 className="text-5xl "> Loading....</h1>}

//         {data.map((item, index) => (
//           <Link to={`/${item.id}`} key={index}>
//             <figure className="w-[20vw] bg-white h-fit shadow-md">
//               <img
//                 src={item.image}
//                 className="w-full h-64 "
//                 alt="product image"
//               />
//               <figcaption className="py-5 space-y-4 px-5">
//                 <span className="text-sm">{item.title}</span>
//                 <p>price: {item.price}</p>
//               </figcaption>
//             </figure>
//           </Link>
//         ))}
//       </section>
//     </>
//   );
// }

// export default Promise;
