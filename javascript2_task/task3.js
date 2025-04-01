class User {
    constructor(username, age, email) {
        this.username = username;
        this.age = age;
        this.email = email;
    }
}

function createUser(username, age, email) {
    return new User(username, age, email);
}


const userObj = createUser("Divya", 22, "divya@example.com");

console.log(`User: ${userObj.username}, Age: ${userObj.age}, Email: ${userObj.email}`);
