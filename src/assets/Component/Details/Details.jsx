import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Filter, ReceiptIndianRupee, Minus, Plus, ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";

const Details = () => {
  const { id } = useParams();
  const router = useNavigate()
  const [card, setCard] = useState(null);
  const [pop, setPop] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState(null);
  const token = localStorage.getItem('token'); 

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://e-com-server-3u56.onrender.com/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = response.data.user;
        setUserId(userData.userId);
        console.log(userId)
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Failed to authenticate user. Please log in again.");
      }
    };

    fetchUser();
  }, [token,userId]);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/cards/${id}`);
        const data = response.data.data;
        setCard(data);
        setFilterData(data.items);
      } catch (error) {
        console.error("Error fetching card data:", error);
        alert("Failed to load card details. Please try again.");
      }
    };
    fetchCard();
  }, [id]);

  const toggle = () => setPop(!pop);

  const limitFilter = (a, b) => {
    const filteredData = filterData.filter(
      (item) => typeof item.rate === "number" && item.rate >= a && item.rate <= b
    );
    setFilterData(filteredData);
  };

  const handleAddToCart = async (item) => {
    const cartItem = cart.find(cartItem => cartItem.id === item.id);
    const quantity = cartItem ? cartItem.quantity : 1;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/cart`, 
        { cardItemId: item.id, quantity }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.msg) {
        toast.success("Item added to cart successfully");
        router("/cart")
      }
    } catch (error) {
      console.error("Failed to add item to cart:", error);
      alert("Failed to add item to cart. Please try again.");
    }
  };

  const updateQuantity = (item, delta) => {
    const newCart = [...cart];
    const cartItemIndex = newCart.findIndex(cartItem => cartItem.id === item.id);

    if (cartItemIndex !== -1) {
      const newQuantity = newCart[cartItemIndex].quantity + delta;
      if (newQuantity > 0) {
        newCart[cartItemIndex].quantity = newQuantity;
      } else {
        newCart.splice(cartItemIndex, 1); // Remove item if quantity goes below 1
      }
    } else if (delta > 0) {
      newCart.push({ ...item, quantity: 1 });
    }

    setCart(newCart);
  };

  if (!card) return <p>Loading...</p>;

  return (
    <div className="w-[90%] mx-auto flex flex-col">
      <h1 className="text-center text-4xl playfair-display mt-4 mb-4">{card.title}</h1>
      <div className="md:w-[80%] lg:w-[40%] mx-auto grid grid-cols-1 md:grid-cols-2 p-5 gap-5 shadow-lg rounded-lg mb-6">
        <div className="flex justify-center items-center">
          <img src={card.image} alt={card.title} className="w-48 h-48 object-cover rounded-t-lg" />
        </div>
        <p className="text-center text-black playfair-display">{card.para}</p>
      </div>

      <div className="w-[90%] mx-auto grid grid-cols-2 lg:grid-cols-3 items-center gap-2 p-2">
        <div className="flex border-2 rounded-full px-2 py-1 gap-1 items-center w-full md:w-[35%] lg:w-[32%]">
          <Filter className="w-5 text-[#FFD700]" />
          <button onClick={toggle} className="playfair-display">Filter By</button>
        </div>
        <div className="relative col-span-2 lg:col-span-1 order-3 lg:order-2">
          <div className={pop ? "block" : "hidden"}>
            <div className="flex-grow">
              <div className="grid grid-cols-3 gap-4 mt-2 md:mt-0">
                <button className="flex items-center gap-1 text-center playfair-display border-2 rounded-lg p-1 text-gray-700" onClick={() => limitFilter(200, 300)}>
                  <ReceiptIndianRupee className="text-[#FFD700] w-5" />
                  <p>200-300</p>
                </button>
                <button className="flex items-center gap-1 text-center playfair-display border-2 rounded-lg p-1 text-gray-700" onClick={() => limitFilter(300, 400)}>
                  <ReceiptIndianRupee className="text-[#FFD700] w-5" />
                  <p>300-400</p>
                </button>
                <button className="flex items-center gap-1 text-center playfair-display border-2 rounded-lg p-1 text-gray-700" onClick={() => limitFilter(400, 500)}>
                  <ReceiptIndianRupee className="text-[#FFD700] w-4" />
                  <p>400-500</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="order-2 lg:order-3 flex justify-end">
          <div className={pop ? "block" : "hidden"}>
            <button className="playfair-display flex items-center text-center border-2 rounded-lg p-1 mt-2 text-gray-700" onClick={() => setFilterData(card.items)}>
              All
            </button>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6">
        {filterData.map((item) => (
          <div key={item.id} className="bg-white flex flex-col justify-center items-center shadow-lg p-4 gap-2 rounded-lg">
            <LazyLoadImage alt={item.title} effect="opacity" src={item.image} className="w-full h-48 object-cover rounded-t-lg" />
            <p className="playfair-display text-center mt-2">{item.title}</p>
            <div className="flex gap-2 items-center justify-center">
              <ReceiptIndianRupee className="text-[#FFD700] w-5" />
              <p className="playfair-display text-center mt-1">{item.rate}</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <button onClick={() => updateQuantity(item, -1)} className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600">
                <Minus className="w-4 h-4" />
              </button>
              <p className="playfair-display text-center mt-1">{cart.find(cartItem => cartItem.id === item.id)?.quantity || 0}</p>
              <button onClick={() => updateQuantity(item, 1)} className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button onClick={() => handleAddToCart(item)} className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
