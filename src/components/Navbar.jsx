import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector((store) => store.basket.amount);
  return (
    <div className="flex flex-grow justify-evenly mt-2 pt-4 text-lg font-medium">
      <p>Home</p>
      <p>
        Basket
        <span className="text-xs align-top bg-red-500 text-white rounded-full py-1 px-2 mx-1">
          {amount}
        </span>
      </p>
    </div>
  );
};

export default Navbar;
