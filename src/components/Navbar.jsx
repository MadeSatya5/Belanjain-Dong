import CartIcon from './CartIcon';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl">
        <div className="text-white text-lg font-bold cursor-pointer">BelanjainDong.</div>
        <ul className="flex space-x-4">
          <li>
            <CartIcon />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
