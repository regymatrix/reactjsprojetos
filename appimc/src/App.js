import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from  './components/Input';


function App() {

  const [resultado, setResultado ] = useState(0);
  const [altura, setAltura ] = useState(0);
  const [peso, setPeso ] = useState(0);

  const handClickButton = () =>{  
      setResultado(parseFloat(altura)*parseFloat(peso));
  }
  
  function handClear(){
    setResultado("");
    setAltura("");
    setPeso("");
  }
  return (
    <div className="App">
      <h2>Calculadroa IMC</h2>
      <div><Input value={altura} onChange={(e) => setAltura(e.target.value)} /></div>
      <div><Input value={peso} onChange={(e) => setPeso(e.target.value)} /></div>
      <div className='btnDiv'>    
          <Button  label="Calcular" cor="verde" onClick={handClickButton}/>
          <Button label="Limpar" cor="vermelho" onClick={handClear}/>
      </div> 
   
      <Input  value={resultado} readOnly/>
    </div>
  );
}

export default App;
