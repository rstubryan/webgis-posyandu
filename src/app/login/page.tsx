"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import users from "@/data/users.json";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password,
    );
    if (user) {
      Cookies.set("isLoggedIn", "true", { expires: 1 });
      window.location.href = "/arsip/pendataan";
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="w-full max-w-md p-8 space-y-4">
        <h1 className="text-2xl font-semibold text-center">Login</h1>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <Button className={`w-full`} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
