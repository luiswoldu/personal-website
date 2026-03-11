"use client";
import Link from "next/link"
import { DoubleArrowRightIcon } from "@radix-ui/react-icons"

export default function Navigation() {
  return (
    <div
      style={{
        position: "fixed",
        top: "1.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        backgroundColor: "#fff",
        padding: "0.5rem 1rem",
        borderRadius: "9999px",
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        zIndex: 100,
      }}
    >
      {/* Left circle button */}
      <Link href="/menu">
        <div
          style={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            backgroundColor: "#E8E8E8",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <DoubleArrowRightIcon 
            style={{
              width: "1rem",
              height: "1rem",
              color: "#fff",
            }}
          />
        </div>
      </Link>

      {/* Centered text */}
      <Link href="/home">
        <span
          style={{
            color: "#000",
            fontSize: "1rem",
            fontWeight: "300",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          luiswoldu
        </span>
      </Link>

      {/* Right circle button */}
      <Link href="/profile">
        <div
          style={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            backgroundColor: "#FF6B00",
            flexShrink: 0,
            cursor: "pointer",
          }}
        >
        </div>
      </Link>
    </div>
  );
}