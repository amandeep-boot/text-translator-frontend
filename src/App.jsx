import React, { useState } from "react";
import InputForm from "./components/InputForm";
import TranslationDisplay from "./components/TranslationDisplay";

const App = () => {
  const [translation, setTranslation] = useState("");

  const handleTranslate = async (text) => {
    try {
      const response = await fetch("https://text-translator-hjzx.vercel.app//translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ query: text }),
      });

      if (response.ok) {
        const translatedText = await response.json();
        setTranslation(translatedText);
      } else {
        console.error("Translation failed:", response.statusText);
        setTranslation("Error: Unable to translate text.");
      }
    } catch (error) {
      console.error("Error:", error);
      setTranslation("Error: Unable to translate text.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-6">
      <div className="w-full max-w-2xl bg-white/20 backdrop-blur-lg rounded-xl shadow-lg border border-white/30 p-8">
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-center text-white drop-shadow-lg">
            🌐 Text Translator
          </h1>
        </header>
        <main>
          <InputForm onTranslate={handleTranslate} />
          <TranslationDisplay translation={translation} />
        </main>
      </div>
    </div>
  );
};

export default App;
