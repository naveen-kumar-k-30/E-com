import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const router = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  // const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
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
        const response = await axios.post("https://e-com-server-3u56.onrender.com/login", formData);
        if (response.data.token) {
   
          localStorage.setItem('token', response.data.token); 

          toast.success("Login successful")
          router("/")
          setFormData({ email: "", password: "" });
          setErrors({});
        }
      } catch (error) {
        console.error("Error during login:", error);
        toast.error("Invalid Email or Password")
        if (error.response && error.response.data && error.response.data.error) {
          setErrors({ general: error.response.data.error });
        } else {
          setErrors({ general: "Login failed. Please try again later." });
        }
        
      }
    }
  };

  return (
    <div className="w-[90%] mx-auto max-w-md mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

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
          Login
        </button>
        <h1 className="text-sm text-muted-foreground text-center">New user ? <span onClick={()=>router("/SignUp")} className="cursor-pointer text-yellow-500 underline">Register</span></h1>
      </form>
    </div>
  );
};

export default Login;
