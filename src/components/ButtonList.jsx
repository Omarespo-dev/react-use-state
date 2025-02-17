// Importo array di ogetti
import data from "../data/languages"

// Importo react
import React from "react"

// Esporto funzione mappata 
export default function ButtonList() {
    
    return (<>

        {data.map(lista =>
            <React.Fragment key={lista.id}> 
             <div className="button-set">
                 <button><a href="#">{lista.title}</a></button>
             </div>
             <div className="content">
                 <h4>{lista.title}</h4>
                 <p>{lista.description}</p>
             </div>
         </React.Fragment>
        )}


    </>)
}