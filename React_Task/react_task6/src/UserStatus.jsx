function UserStatus({isOnline})
{
    return(
        <>
            <h1>User Status</h1>
            <p>{isOnline ? "Online" : "Offline"}</p>
        </>
    )

}
export default UserStatus