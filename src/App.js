import React, { useState } from 'react'
import Gif from './components/Gif'

function App() {

  const [mostrarGif, adicionarGif] = useState(false)

  const mostrar =()=> {
    adicionarGif(true)
  }

  const esconder =()=> {
    adicionarGif(false)
  }
  return (
    <>
      <div>
        <button onClick={mostrar}>Mostrar gif</button>
        {mostrarGif && <Gif />}
      </div>
      <>
        {mostrarGif && <img src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif" alt="Gif" onClick={esconder}/>}
        
        </>
    </>
  );
}

export default App;
