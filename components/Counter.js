import { useState } from "react";

export default function Counter() {
  const [cnt, setCnt] = useState(0);

  return (
    <div>
      <h2>카운터 {cnt}</h2>
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCnt(cnt - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
