import { StyledProfile } from "./styledProfile";

const Profile = ({ img, icon, username, Navigate, profile }) => {
  return (
    <StyledProfile>
      <div
        onClick={profile ? () => Navigate("/user-profile") : null}
        className="img_wrapper"
      >
        <img src={`Images/${img}`} alt="avater" loading="lazy" />
      </div>
      <div className="text tac">
        <p>{username}</p>
      </div>
      {icon ? <span className="add">{icon}</span> : null}
    </StyledProfile>
  );
};

export default Profile;
