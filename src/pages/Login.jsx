import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FaApple, FaGoogle, FaFacebook } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0b3d3d] to-[#1e293b] flex items-center justify-center px-6">
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-white">
          <h1 className="text-5xl font-bold leading-tight">
            Expert level Cybersecurity <br />
            in <span className="text-teal-400">hours</span> not weeks.
          </h1>

          <div className="mt-8 space-y-4 text-gray-300">
            <p>✔ Effortlessly spider and map targets to uncover hidden security flaws</p>
            <p>✔ Deliver high-quality, validated findings in hours, not weeks</p>
            <p>✔ Generate professional, enterprise-grade security reports automatically</p>
          </div>

          <div className="mt-10 text-sm text-gray-400">
            ⭐ Rated 4.5/5.0 (100k+ reviews)
          </div>
        </div>

        {/* RIGHT FORM CARD */}
        <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md mx-auto">
          <h2 className="text-3xl font-semibold text-center">Sign up</h2>

          <p className="text-center text-sm text-gray-500 mt-2">
            Already have an account? <span className="text-teal-600 cursor-pointer">Log in</span>
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="First name"
              required
            />
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Last name"
              required
            />
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              type="email"
              placeholder="Email address"
              required
            />
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              type="password"
              placeholder="Password (8+ characters)"
              required
            />

            <label className="flex items-start text-sm text-gray-600">
              <input type="checkbox" required className="mr-2 mt-1" />
              I agree to Terms & Conditions and Privacy Policy
            </label>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
            >
              Create account
            </button>

            {/* Social Buttons */}
            <div className="flex gap-3 mt-6">
  <button
    type="button"
    className="flex-1 flex items-center justify-center border rounded-lg py-2 hover:bg-gray-50 transition"
  >
    <FaApple className="text-xl" />
  </button>

  <button
    type="button"
    className="flex-1 flex items-center justify-center border rounded-lg py-2 hover:bg-gray-50 transition"
  >
    <FaGoogle className="text-xl text-red-500" />
  </button>

  <button
    type="button"
    className="flex-1 flex items-center justify-center border rounded-lg py-2 hover:bg-gray-50 transition"
  >
    <FaFacebook className="text-xl text-blue-600" />
  </button>
</div>
          </form>
        </div>

      </div>
    </div>
  );
}