export default function UserList(){
    const users=[
        { id: 1, username: "raj", email: "raj@gmail.com" },
        { id: 2, username: "ram", email: "ram@gmail.com" },
        { id: 3, username: "sam", email: "sam@gmail.com"  },
        { id: 4, username: "arjun", email: "arjun@gmail.com" },
    ]
    return(
        <div>
            <h1>User Name list</h1>
            <ul>
                {users.map((user)=>(<li>{user.username}-{user.email}</li>))}
            </ul>
        </div>
    )
}