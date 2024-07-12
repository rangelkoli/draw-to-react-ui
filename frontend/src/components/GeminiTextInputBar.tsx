import React, { useState } from "react";

const GeminiTextInputBar = ({ placeholder = "", onSubmit = () => {} }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    onSubmit(); // Call the provided onSubmit function with the input value
    setInputValue(""); // Clear the input field after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default GeminiTextInputBar;
