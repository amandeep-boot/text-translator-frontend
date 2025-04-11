import React, { useState } from "react";

const InputForm = ({ onTranslate }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim()) {
      onTranslate(text);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here to translate..."
        rows="4"
        className="w-full p-4 bg-transparent border border-white/40 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-200 ease-in-out shadow-inner"
      />
      <button
        type="submit"
        className="mt-4 w-full py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-md shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 active:scale-100"
      >
        Translate
      </button>
    </form>
  );
};

export default InputForm;
