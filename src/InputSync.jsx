import { useState } from "react";

export default function InputSync() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <Input label="First input" text={text} handleChange={handleChange} />
      <Input label="Second input" text={text} handleChange={handleChange} />
    </>
  );
}

function Input({ label, text, handleChange }) {
  return (
    <label>
      {label} <input value={text} onChange={handleChange} />
    </label>
  );
}

export { InputSync };
