import React, { useState } from "react";
import "./App.css";

const prompts = [
  "Describe a world where no one can lie.",
  "Write a scene where a forgotten memory suddenly resurfaces.",
  "Imagine a city that floats in the clouds.",
  "A mysterious letter arrives from the future.",
  "A stranger tells you something only you should know."
];

export default function App() {
  const [prompt, setPrompt] = useState("");

  const getPrompt = () => {
    const random = prompts[Math.floor(Math.random() * prompts.length)];
    setPrompt(random);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>AI Writing Prompt Generator</h2>
        <button onClick={getPrompt}>Generate Prompt</button>
        {prompt && <p className="prompt">✍️ {prompt}</p>}
      </div>
    </div>
  );
}
