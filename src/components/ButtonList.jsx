// Importo array di oggetti
import data from "../data/languages";

// Importo react
import React from "react";

// Importo lo stato
import { useState } from "react";

// Esporto funzione mappata
export default function ButtonList() {
  
    const [isOpen, setIsOpen] = useState(null); 

  return (
    <div className="container">
      <div className="button-container">
        {data.map((lista) => (
          <div className="button-set" key={lista.id}>
            <button onClick={() => setIsOpen(isOpen === lista.id ? null : lista.id)}>
              {lista.title}
            </button>
          </div>
        ))}
      </div>

      <div className="content-container">
        {data.map((lista) => (
          <div
            className={`content ${isOpen === lista.id ? "active" : "none"}`}
            key={lista.id}>
                
            <h4>{lista.title}</h4>
            <p>{lista.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

}