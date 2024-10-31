// app/routes/index.tsx
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [count, setCount] = useState(0);
  return (
    <button
      type="button"
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      Add 1 to {count}?
    </button>
  );
}
