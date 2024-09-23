import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
function Header() {
  return (
    <header className="flex justify-between border-b-4 border-r-4 border-gray-200 bg-yellow-500 p-3 text-left uppercase tracking-widest">
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
