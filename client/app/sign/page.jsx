"use client";
import Container from "@/app/component/layers/Container";
import { Contex } from "@/app/contexapi/Rights";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { BarLoader } from "react-spinners";
import { toast } from "react-toastify";

const page = () => {
  let [loading, setLoading] = useState(false);
  const router = useRouter();
  let { setValidated } = useContext(Contex);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    address: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Further form submission logic
    console.log(formData);
    savedata();
  };

  let savedata = () => {
    setLoading(true);
    axios
      .post("https://billmanagement-server.vercel.app/create", formData, {
        withCredentials: true,
      })
      .then(function (response) {
        let token = response.data.token;
        console.log(response);

        localStorage.setItem("token", token);
        localStorage.setItem("login", "true");
        setValidated(true);
        router.push("/dashboard");
        toast.success("SignUp Success!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center h-full bg-[var(--bg1)]">
      <Container className="w-full md:w-[800px] py-[40px] px-[56px] bg-[var(--bg20)] shadow-lg">
        {/* <h1 className="text-3xl font-bold text-center text-[var(--bg1)] mb-6 capitalize">Estore SignUp</h1> */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-between gap-x-3 items-center">
            {/* Name Field */}
            <div className="w-1/2">
              <label
                className="block text-lg font-medium text-[var(--bg1)]"
                htmlFor="name"
              >
                Enter your name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your name"
              />
            </div>
            {/* Company Name */}
            <div className="w-1/2">
              <label
                className="block text-lg font-medium text-[var(--bg1)]"
                htmlFor="companyName"
              >
                Enter your Company/Store name:
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full inline-block mt-1 px-4 py-2 border border-[var(--bg21)] rounded-md shadow-sm focus:ring-[var(--high1)] focus:border-[var-(--high1)]"
                placeholder="Enter your company/store name"
              />
            </div>
          </div>
          {/* Address */}
          <div className="flex justify-between items-center gap-x-3">
            <div className="w-1/2">
              <label
                className="block text-lg font-medium text-[var(--bg1)]"
                htmlFor="address"
              >
                Enter your company/store address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                placeholder="example address"
              />
            </div>
            {/* Email */}
            <div className="w-1/2">
              <label
                className="block text-lg font-medium text-gray-700"
                htmlFor="email"
              >
                Enter your email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                placeholder="example@me.com"
              />
            </div>
          </div>
          <div className="flex justify-between items-center gap-x-3">
            {/* Phone */}
            <div className="w-1/2">
              <label
                className="block text-lg font-medium text-gray-700"
                htmlFor="phone"
              >
                Enter your phone number:
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border text-[var(--text7)] border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                placeholder="+880 123 456 7890"
              />
            </div>
            {/* Fax */}
            <div className="w-1/2">
              <label
                className="block text-lg font-medium text-gray-700"
                htmlFor="fax"
              >
                Enter your fax number:
              </label>
              <input
                type="tel"
                id="fax"
                name="fax"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 text-[var(--text7)] border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                placeholder="+1 907 555 1234"
              />
            </div>
          </div>
          <div className="flex justify-between items-center gap-x-3">
            {/* Password */}
            <div className="w-1/2">
              <label
                className="block text-lg font-medium text-gray-700"
                htmlFor="password"
              >
                Set your password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 text-[var(--text7)] border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                placeholder="example@123"
              />
            </div>
            {/* Confirm Password */}
            <div className="w-1/2">
              <label
                className="block text-lg font-medium text-gray-700"
                htmlFor="confirmPassword"
              >
                Confirm your password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full mt-1 text-[var(--text7)] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                placeholder="example@123"
              />
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 relative text-[var(--text6)] bg-[var(--bg15)] border-[1px] inline-block capitalize  border-[var(--bor1)] overflow-hidden z-10 rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            <div className="absolute left-0 top-0 w-full h-full z-[-1]">
              <BarLoader
                height={50}
                width={700}
                color="#F97316"
                loading={loading ? true : false}
              />
            </div>
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-[var(--text7)]">
            Already have an account?{" "}
            <Link href="/" className="text-[var(--bg1)] hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default page;
