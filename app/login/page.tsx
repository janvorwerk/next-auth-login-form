"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
    console.log("Sign-in response", response);
    if (response?.ok) {
      setError("");
      router.replace("/");
    } else {
      setError(`Could not login: ${response?.error} (${response?.status})`);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-2">
      <div className="bg-zinc-50 p-4 text-red-800">
        <div className="font-bold"> This is a dummy form</div>
        <div>The correct password is <span className="font-mono text-cyan-800">pass</span></div>
      </div>
      <label htmlFor="username" className="text-lg font-bold">
        Username
      </label>
      <input
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
        name="username"
        type="text"
        placeholder="Any name you like"
        className="bg-zinc-100 border p-2"
      />
      <label htmlFor="password" className="text-lg font-bold">
        Password
      </label>
      <input
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        name="password"
        type="password"
        placeholder="Should be 'pass'"
        className="bg-zinc-100 border p-2"
      />
      <button type="submit" className="bg-cyan-800 text-white border rounded p-2">
        Sign in
      </button>
      {error && <div className="bg-zinc-50 p-4 text-red-800">{error}</div>}
    </form>
  );
}
