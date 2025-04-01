function Age({age}){
    return(
        <>
            <h1>Age Status</h1>
            <p>You are an:{age>=18 ? "Adult" : "Minor"}</p>
        </>
    )

}

export default Age