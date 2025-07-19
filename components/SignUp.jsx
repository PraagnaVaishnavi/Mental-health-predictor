import "../src/index.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Sign up successful!");
        navigate("/answer");
      } else {
        alert(data.msg || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-100 via-green-50 to-teal-100">
      {/* Particle background animation layer */}
      <div className="absolute inset-0 -z-10 animate-background bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-200 via-teal-100 to-white opacity-80" />

      {/* Particle dots (floating) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-1 h-1 bg-green-400 rounded-full top-[20%] left-[25%] animate-pulse" />
        <div className="absolute w-1 h-1 bg-teal-500 rounded-full top-[70%] left-[70%] animate-ping" />
        <div className="absolute w-1 h-1 bg-emerald-300 rounded-full top-[40%] left-[80%] animate-bounce" />
      </div>

      {/* Sign-up card */}
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="backdrop-blur-lg bg-white/40 shadow-xl rounded-2xl p-8 w-full max-w-md border border-white/30">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-1 w-full rounded-md bg-white/70 px-3 py-2 text-gray-800 shadow-sm outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-800">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="new-password"
                  className="w-full rounded-md bg-white/70 px-3 py-2 text-gray-800 shadow-sm outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-2 text-sm text-indigo-500 hover:text-indigo-700"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-white font-semibold transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              className="text-indigo-600 font-semibold hover:underline"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
