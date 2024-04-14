import './style.css'

function Input(props){
    return (
      <div className="divInput">
          <input  value={props.value} onChange={props.onChange} readOnly={props.readOnly} />
     </div>
    );

}

export default Input;