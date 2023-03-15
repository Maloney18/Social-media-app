import { StyledProfile } from "./styledProfile";

const Profile = ({ img, icon, username }) => {
  return (
    <StyledProfile>
      <div className="img_wrapper">
        <img src={`Images/${img}`} alt="avater" />
      </div>
      <div className="text tac">
        <p>{username}</p>
      </div>
      {icon ? <span className="add">{icon}</span> : null}
    </StyledProfile>
  );
};

export default Profile;
