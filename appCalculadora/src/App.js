import Button from './components/Button'
import Input from './components/Input'
import './styleapp.css'
import { useState } from 'react';

function App() {
  const [visorResultado, setVisorResultado] = useState('0');
  const [valorAtual, setValorAtual] = useState(0);
  const [operador, setOperador] =useState('');
 
  const handClickButton = (value)=>{  
    switch (value) {
      case 'C':
        setVisorResultado('0');
        break;
      case '+': 
        setValorAtual(visorResultado);
        setVisorResultado('');
        setOperador('+');
        break;
      case '-':        
        setValorAtual(visorResultado);
        setVisorResultado('');
        setOperador('-');
        break;
      case '*':        
        setValorAtual(visorResultado);
        setVisorResultado('');
        setOperador('*');
        break;
      case '/':        
        setValorAtual(visorResultado);
        setVisorResultado('');
        setOperador('/');
        break;
     
      case '=':  
        
        if (operador=="+"){
          const soma = parseFloat(valorAtual) + parseFloat(visorResultado) 
          setValorAtual(soma);                    
          setVisorResultado(soma);         
        } 
        
        if (operador=="*"){
          const soma = parseFloat(valorAtual) * parseFloat(visorResultado) 
          setValorAtual(soma);                    
          setVisorResultado(soma);         
        }   

        if (operador=="/"){
          const soma = parseFloat(valorAtual) / parseFloat(visorResultado) 
          setValorAtual(soma);                    
          setVisorResultado(soma);         
        } 

        if (operador=="-"){
          const soma = parseFloat(valorAtual) - parseFloat(visorResultado) 
          setValorAtual(soma);                    
          setVisorResultado(soma);         
        }
        setOperador("=");
        break;

      default:

        if (visorResultado=='0' || operador=="=")        {
          setVisorResultado(value);
          setOperador("");
        }else {
          setVisorResultado(visorResultado + value);
        }
    }
    
  }
   
  return (
    <div className="app">  
        <div className='itemApp'>
            <Input value={visorResultado} />
        </div>
       <div className='itemApp'>
         <Button classeColor="darkgrey" numero="1" onClick={handClickButton}></Button>
         <Button classeColor="darkgrey"numero="2" onClick={handClickButton}></Button>
         <Button classeColor="darkgrey" numero="3" onClick={handClickButton}></Button>
         <Button classeColor="orange" numero="/" onClick={handClickButton}></Button>
        </div>   
        <div className='itemApp'>
         <Button classeColor="darkgrey"  numero="4" onClick={handClickButton}></Button>
         <Button classeColor="darkgrey" numero="5" onClick={handClickButton}></Button>
         <Button classeColor="darkgrey" numero="6" onClick={handClickButton}></Button>
         <Button classeColor="orange" numero="*" onClick={handClickButton}></Button>
        </div>
        <div className='itemApp'>
         <Button classeColor="darkgrey"  numero="7" onClick={handClickButton}></Button>
         <Button classeColor="darkgrey" numero="8" onClick={handClickButton}></Button>
         <Button classeColor="darkgrey" numero="9" onClick={handClickButton}></Button>
         <Button classeColor="orange" numero="+" onClick={handClickButton}></Button>
        </div>
        <div className='itemApp'>
         <Button classeColor="darkgrey" numero="=" onClick={handClickButton}></Button>
         <Button classeColor="darkgrey" numero="0" onClick={handClickButton}></Button>
         <Button classeColor="darkgrey" numero="C" onClick={handClickButton}></Button>
         <Button classeColor="orange" numero="-" onClick={handClickButton}  ></Button>
        </div>      
       
    </div>
  );
}

export default App;
