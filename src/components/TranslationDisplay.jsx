import React from "react";

const TranslationDisplay = ({ translation }) => {
  return (
    <div className="p-6 bg-white/10 backdrop-blur-sm rounded-md border border-white/20 shadow-inner">
      <h3 className="text-xl font-semibold text-white mb-3">Translated Text:</h3>
      <p className={`text-lg ${translation ? "text-white" : "text-white/70 italic"}`}>
        {translation || "Your translation will appear here..."}
      </p>
    </div>
  );
};

export default TranslationDisplay;
