import React from 'react';
import { useSelector } from 'react-redux';
import shoppingCart from '../images/shopping-cart.png';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const cartItems = useSelector((state) => state.cart.data); // Ambil jumlah item dari Redux store
  const totalItems = cartItems.reduce((total, item) => total + item.qty, 0); // Hitung total item dalam keranjang

  return (
    <Link to="/Cart" className="text-gray-300 hover:text-white flex items-center">
      <img src={shoppingCart} alt="cart" className="w-8 invert " />
      {totalItems > 0 && ( // Tampilkan jumlahitem jika ada item
        <span className="bg-blue-600 text-white text-xs font-bold px-1 rounded-full">
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
