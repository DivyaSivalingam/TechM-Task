import UserStatus from "./UserStatus"
import Age from "./Age"
import Loading from "./Loading"
import Notification from "./Notification"
import Feedback from "./Feedback"

function App() {
  return (
    <>
      <UserStatus isOnline={true} />
      <UserStatus isOnline={false} />
      <Age age={20}/>
      <Age age={7}/>
      <Loading isLoading={true}/>
      <Loading isLoading={false}/>
      <Notification message="You have a new message! 📩" />
      <Notification message="" />
      <Feedback message="Great job! 🎉 Keep it up!" type="positive" />
      <Feedback message="Error: Something went wrong. ❌" type="negative" />
    </>
  )
}

export default App
