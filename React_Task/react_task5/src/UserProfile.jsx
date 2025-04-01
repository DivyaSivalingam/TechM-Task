function UserProfile(){
    const Profile={
        name :"john",
        age:25,
        address:"12/A Raj Nagar Coimbatore"
    };
   // console.log(Profile)
   return (
    <>
        <p>{Profile.name}</p>
        <p>{Profile.age}</p>
        <p>{Profile.address}</p>
    </>
   )
}

export default UserProfile