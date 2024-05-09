import { NavLink, Outlet } from "react-router-dom";

function product() {
  return (
    <div className="px-10">
      <h1 className="text-4xl">product</h1>

      <nav
        className="w-full h-[10vh] border-[0.5px] 
      border-gray-900 flex items-center justify-around"
      >
        <NavLink to="/products/shoes">Shoes</NavLink>
        <NavLink to="/products/clothes">Clothes</NavLink>
        <NavLink to="/products/electronics">Electronics</NavLink>
        <NavLink to="/products/jewelries">Jewelries</NavLink>
        <NavLink to="/products/bag">Bag</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default product;
