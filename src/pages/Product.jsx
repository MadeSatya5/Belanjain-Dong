import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { getProducts } from '../services/product';
import { getCategories } from '../services/product';
import { useDispatch, useSelector } from "react-redux";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { addToCart } from "../redux/slices/cartSlices";


const Product = () => {
  const [products, setProducts] = useState([]); //arraykosong [] digunakan untuk mengambil data produk ketika pertama kali dipanggil
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    getProducts((data) => { //memanggil callback untuk mengupdate state products dengan data yang diterima.
      setProducts(data);
    });

    getCategories((data) => {
      setCategories(data)
    })
  }, []);
  
  const addCategory = (category) => {
    if(!selectedCategories.includes(category)){
      setSelectedCategories(prev => ([...prev, category]));
    }
  }
  const removeCategory = (category) => {
    if(selectedCategories.includes(category)){
      const removedList = selectedCategories.filter((data) => (data !== category));
      setSelectedCategories(removedList);
    }
  }
  const resetCategory = () => {
    setSelectedCategories([]);
  }

  const [filteredProductList, setFilteredProductList] = useState([]);

  useEffect(() => {
    if(selectedCategories.length === 0){
      setFilteredProductList(products);
    }
    else{
      setFilteredProductList(products.filter((data) => (selectedCategories.includes(data.category))));
    }
  }, [selectedCategories, products])

  const handleAddToCart = (data) => {  //Menerima data produk dan mengirim action addToCart ke Redux store
    dispatch(addToCart({ id: data.id, qty: 1, title: data.title, price: data.price, image: data.image}))
  };

  // const handleRemoveCart = (data) => {
  //   dispatc
  // }

  return(
    <>
    <Navbar />
    <section className="container mx-auto px-10">
      <h1 className="text-2xl font-semibold mb-2 text-center">Product Catalogue</h1>
      <div className="relative w-full flex justify-center items-center overflow-x-auto">
        <span className="mx-3 my-5 ml-5 font-medium">Categories: </span>
        {
           categories.map((category) => (
            <div
                onClick={() => {
                    if(selectedCategories.includes(category)){
                        removeCategory(category);
                    } else{
                        addCategory(category);
                    }
                }} 
                className={`w-fit min-w-fit h-8 mx-2 px-5 py-2 flex flex-row justify-center items-center text-sm border break-keep rounded-3xl cursor-pointer transition-all duration-300 
                ${(selectedCategories.includes(category))?'border-gray-800 bg-gray-800 text-white':' border-gray-500 bg-white text-gray-900'} `}>
                {category.split("-").join(" ")}
            </div>
          ))
        }
        <div
            onClick={() => resetCategory()} 
            className={`${(selectedCategories.length>0)?'opacity-100':'opacity-0 pointer-events-none'} sticky right-0 w-fit h-full px-5 flex justify-center 
            items-center text-blue-500 bg-white backdrop-blur-lg cursor-pointer hover:text-blue-700 transition-all duration-300`}
        >
        Clear
        </div>
      </div>
      <div className="flex gap-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          {filteredProductList.map((product) => (
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
