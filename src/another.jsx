// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function Another() {
//   const { Another } = useParams();
//   const [data, setData] = useState([]);

//   const api = `https://fakestoreapi.com/products/${Another}`;

//   useEffect(() => {
//     const FetchData = async () => {
//       const response = await fetch(api);
//       const data = await response.json();
//       console.log(data);
//       setData(data);
//     };

//     FetchData();
//   }, []);
//   return (
//     <>
//       <figure className="w-[50vw]  bg-white h-fit shadow-md">
//         <img src={data.image} className="w-full h-64 " alt="product image" />
//         <figcaption className="py-5 space-y-4 px-3">
//           <span className="text-sm">{data.title}</span>
//           <p>price: {data.price}</p>
//           <p> {data.description}</p>
//           <p> {data.category}</p>
//         </figcaption>
//       </figure>
//     </>
//   );
// }
// export default Another;
