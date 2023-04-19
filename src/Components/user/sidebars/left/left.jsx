import Notification from "./notification"
import Explore from "./explore"
import './left.css'

const Left = () => {
  return (
    <div className="left">
      <Notification />
      <Explore />
    </div>
  )
}

export default Left