export default function Notification({message}){
    if (!message) return null;
    return(
        <>
            <h1>Message Arrived</h1>
            <p>{message}</p>
        </>
        
    )
}