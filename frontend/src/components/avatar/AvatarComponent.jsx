import defaultAvatar from "../../assets/images/defaultAvatar.png";

const Avatar = ({ avatar, username }) => {
  return (
    <>
      {!avatar && <img src={defaultAvatar} alt={username} />}
      {avatar && (
        <img
          src={`${process.env.REACT_APP_API_URL}/avatars/${avatar}`}
          alt={username}
        />
      )}
    </>
  );
};

export default Avatar;
