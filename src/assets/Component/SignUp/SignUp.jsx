import { useState } from "react";
import axios from "axios";
import { useNavigate,} from "react-router-dom";
import toast from "react-hot-toast";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  
  const router = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    
    } else {
      try {
        const response = await axios.post("https://e-com-server-3u56.onrender.com/signup", formData);
        if (response.data.token) {

      
          toast.success("Registered User")
          router("/login")
  
          setFormData({ name: "", email: "", password: "" });
          setErrors({});
        }
      } catch (error) {
        console.error("Error during sign up:", error);
        if (error.response && error.response.data && error.response.data.error) {
          setErrors({ general: error.response.data.error });
        } else {
          setErrors({ general: "Sign up failed. Please try again later." });
        }
   
      }
    }
  };

  return (
    <div className="w-[90%] mx-auto max-w-md mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

    
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Sign Up
        </button>

        <h1 className="text-sm text-muted-foreground text-center">Already a user ? <span onClick={()=>router("/login")} className="cursor-pointer text-yellow-500 underline">Login</span></h1>
      </form>
    </div>
  );
};

export default SignUp;
