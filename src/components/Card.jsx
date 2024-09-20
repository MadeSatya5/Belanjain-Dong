const Card = (props) => {
    const { data, onClick, key } = props;
    return (
      <div key={key} className="border border-gray-400 w-50 rounded-xl ">
        <div className="flex justify-center">
          <img src={data.image} alt="image-product" className="h-60 w-auto object-contain "/>
        </div>
        <div className="p-2">
          <h2 className="text-lg line-clamp-1 mb-2">{data.title}</h2>
          <p className="mb-3 text-gray-900">$ {data.price}</p>
          <button
            className="px-3 py-2 text-sm font-medium bg-gray-700 text-white hover:bg-sky-700"
            onClick={onClick}
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  };
  
  export default Card;
  