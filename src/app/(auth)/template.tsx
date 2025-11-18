"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";

const navLinks = [
  { href: "/register", label: "Register" },
  { href: "/login", label: "Login" },
  { href: "/forgot-password", label: "ForgotPassword" },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [input, setInput] = useState("");
  const pathname = usePathname();
  return (
    <div className="auth-nav">
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search..."
        />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname === link.href ||
        (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link className={isActive ? "font-bold mr-4" : " text-blue-500 mr-4"}
            href={link.href} key={link.label}>
              {link.label}
            </Link>
        );
      })}
      {children}
    </div>
  );
}