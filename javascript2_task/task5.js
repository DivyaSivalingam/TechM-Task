async function loadUsersAndPosts() {
    try {
        let userResponse = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await userResponse.json();

        let userPosts = await Promise.all(users.map(async (user) => {
            let postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
            let posts = await postResponse.json();
            return { ...user, posts: posts.map(post => post.title) };
        }));

        
        userPosts.forEach(user => {
            console.log(`User: ${user.name}`);
            user.posts.forEach(post => console.log(` - ${post}`));
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


loadUsersAndPosts();
