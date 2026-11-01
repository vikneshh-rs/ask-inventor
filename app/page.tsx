"use client";

import React from "react";

export default function Home() {
  return (
    <main className="fixed inset-0 w-screen h-screen overflow-hidden bg-[#f4f7fc]">
      <iframe
        src="/AskInventors_UI_Demo.html"
        title="ASK INVENTORS — Interactive UI Demo"
        className="w-full h-full border-0 m-0 p-0 block"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          margin: 0,
          padding: 0,
        }}
      />
    </main>
  );
}
