import { FormEvent, useState } from "react";
import { getLambdaStatus } from "../lib/lamda";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, LogIn, Mail } from "lucide-react";
import axios from "axios";

import { Button } from "@/components/ui/Button";
import { RavenLogo } from "@/components/layout/RavenLogo";
import { FloatingBloodCells } from "@/components/background/FloatingBloodCells";

export function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const checkLambda = async () => {
  try {
    const data = await getLambdaStatus();

    console.log("Lambda Response:", data);

    alert(
      `Status: ${data.status}\nMessage: ${data.message}`
    );
  } catch (error) {
    console.error(error);
    alert("Failed to call Lambda");
  }
};

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post("http://54.252.151.45:5000/login", {
        email,
        password,
      });

      alert(res.data.message);

      navigate("/dashboard");
    } catch (error: any) {
      alert(error.response?.data?.message || "Login Failed");
    }

    setLoading(false);
  }

  return (
    <div className="relative mx-auto flex min-h-[80vh] max-w-md items-center px-4 py-16 sm:px-6">
      <FloatingBloodCells count={8} className="opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card w-full p-8"
      >
        <div className="flex justify-center">
          <RavenLogo />
        </div>

        <h1 className="mt-6 text-center font-display text-2xl font-bold">
          Welcome Back
        </h1>

        <p className="mt-1 text-center text-sm text-slate-500">
          Log in to continue saving lives.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {/* Email */}
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="email"
              required
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white/70 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-red-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white/70 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-red-500"
            />
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="text-red-500">
              Forgot Password?
            </a>
          </div>

          <button type="button" onClick={checkLambda}>
            Check Lambda
          </button>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            loading={loading}
          >
            <LogIn className="h-4 w-4" />
            Log In
          </Button>
        </form>

        <p className="mt-6 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="font-semibold text-red-500">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
