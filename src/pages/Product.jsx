import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { getProducts } from '../services/product';
import { useDispatch, useSelector } from "react-redux";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { addToCart } from "../redux/slices/cartSlices";


const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handleAddToCart = (data) => {
    dispatch(addToCart({ id: data.id, qty: 1, title: data.title, price: data.price, image: data.image}))
  };
  return(
    <>
    <Navbar />
    <section className="container mx-auto px-10">
      <h1 className="text-2xl font-semibold mb-2 text-center">Product Catalogue</h1>
      <div className="flex gap-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <Card 
              key = {product.id}
              data = {product}
              onClick={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </div>

    </section>
    <Footer />
    </>
  );
};

export default Product
