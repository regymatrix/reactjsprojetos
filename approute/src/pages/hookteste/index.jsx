import React, { useEffect } from 'react'
import { useState, useMemo} from 'react'

function Hookteste() {

  const [name, setName] = useState('Reginaldo');
  const handChangeName = () =>{
    setName(prev => prev=== "Reginaldo" ?  'Sueni' : 'Reginaldo');
  }

//   const handChangeUser = ()=>{
//     handChangeName();
//   }

  useEffect(()=>{
    handChangeName();
    // alert("renderizou");
    // return () =>{
    //     alert('desmontei');
    //}
  },[]);


  const calculo = useMemo(()=> {
    console.log("calculou");
    return 18*2500;
  },[]);
  console.log("renderizou",calculo)

  return (
    <>    
    <div>
        <p>{name}   </p>
    </div>
    <button onClick={handChangeName}>Alterar</button>
    </>
  )
}


export default Hookteste;

