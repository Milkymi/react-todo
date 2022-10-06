function Form(props) {
    return(
        <div className="form">
        <input 
        placeholder="Add text..." 
        type="text" 
        value={props.text}
        onChange = {(e)=> props.setText(e.target.value)}
        />
        <button onClick={()=> props.addTodo()}>add</button>
      </div>
    )
}

export default Form;