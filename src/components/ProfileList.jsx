import "../styles/ProfileList.css"

export default function ProfileList({ filteredList }) {
  const userProfiles = filteredList.map((profile) => {
    return (
      <li key={profile.id} className="profile-list">
        <div>
          <img src={profile.picture} alt={profile.firstName} />
        </div>
        <div className="profile-wrapper">
          <div className="profile-id">{profile.id}</div>
          <div className="profile-details">
            <p className="profile-title">{profile.title}</p>
            <p className="profile-name">{profile.firstName}</p>
            <p className="profile-name">{profile.lastName}</p>
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
