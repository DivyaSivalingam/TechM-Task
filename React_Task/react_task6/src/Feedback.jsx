export default function Feedback({message,type}){
    return(
       // <p>{type=="positive" ? <p styles={{color:"green"}}>{message} </p>:<p styles={{color:"red"}}>{message} </p>}</p>
       <p style={{color:type=="positive"?"green":"red"}}>{message}</p>
    )

}