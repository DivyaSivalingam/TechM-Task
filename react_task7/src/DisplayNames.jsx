export default function DisplayNames({list}){
    
    return (
        <div>
          <h1>Names</h1>
          <ul>
            {list.map((name, index) => (<li key={index}>{name}</li>))}
          </ul>
        </div>
      );

} 