'use client'
import { useState } from "react";

export default function Card() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => {
        setCount(prev => prev + 1)
      }}>Count me</button>
      <p>{count}</p>
    </div>
  );
}
