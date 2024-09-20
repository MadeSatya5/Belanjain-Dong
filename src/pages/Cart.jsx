import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useState,useEffect } from "react";
import Footer from "../components/Footer";


const Cart = () => {
    const carts = useSelector((state) => state.cart.data);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const total = carts.reduce((acc, cart) => acc + cart.price * cart.qty, 0);
        setTotalPrice(total);
    }, [carts]);
  
    return(
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-semibold mb-4 text-center">Your Cart</h2>
                {carts.length === 0 ? (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                ) : (
                    <div className="w-full max-w-2xl mx-auto">
                        {carts.map((cart) => (
                            <div 
                                key={cart.id} 
                                className="flex justify-between items-center p-4 mb-4 bg-white rounded-lg shadow-md">
                                <img src={cart.image} alt="img-product" className="w-20 h-20 object-contain mr-4 rounded" />
                                <h4 className="text-lg font-medium">{cart.title}</h4>
                                <div className="flex items-center">
                                    <p className="mr-6">x{cart.qty}</p>
                                    <p className="text-lg font-semibold">${(cart.price * cart.qty).toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="w-full max-w-2xl mx-auto mt-6 p-4 bg-gray-800 rounded-lg shadow-md flex justify-between items-center">
                    <h2 className="text-white text-lg font-bold cursor-pointer">Total</h2>
                    <p className="text-white text-2xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</p>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Cart;