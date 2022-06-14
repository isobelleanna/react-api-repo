import React from "react";
import "./ProfileCards.scss";
import ProfileCard from "../ProfileCard/ProfileCard";

const ProfileCards = (props) => {
  const { users } = props;
  return (
    <div className="profile-cards">
      {users &&
        users.map((user, index) => (
          <ProfileCard
            key={user.id.name + index}
            name={user.name.first}
            image={user.picture.large}
            email={user.email}
            phoneNumber={user.phone}
          />
        ))}
    </div>
  );
};

export default ProfileCards;
