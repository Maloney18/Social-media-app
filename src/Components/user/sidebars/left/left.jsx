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

// const LeftSideBar = () => {
//   return (
//     <StyledLeftSideBar>
//       <div className="wrapper grid">
//         <div className="item">
//           <Activity />
//         </div>
//         <div className="item">
//           <Explore />
//         </div>
//       </div>
//     </StyledLeftSideBar>
//   );
// };

export default Left;
