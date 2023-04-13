import "../styles/ProfileList.css";

export default function ProfileList({ filteredList }) {
  const userProfiles = filteredList.map((profile) => {
    const { picture, id, title, firstName, lastName } = profile;
    return (
      <li key={id} className="profile-list">
        <div className="profile-picture-wrapper">
          <img src={picture} alt={profile.firstName} />
        </div>
        <div className="profile-wrapper">
          <div className="profile-id">{id}</div>
          <div className="profile-details">
            <p className="profile-title">{title}</p>
            <p className="profile-name">{firstName}</p>
            <p className="profile-name">{lastName}</p>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="profile-list-container">
      <ul className="profile-list-wrapper">{userProfiles}</ul>;
    </div>
  );
}
