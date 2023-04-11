export default function ProfileList({ filteredList }) {
  const userProfiles = filteredList.map((profile) => {
    return (
      <li key={profile.id}>
        <div>
          <img src={profile.picture} alt={profile.firstName} />
        </div>
        <div>
          <div>{profile.id}</div>
          <div>
            <p>{profile.title}</p>
            <p>{profile.firstName}</p>
            <p>{profile.lastName}</p>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div>
      <ul>{userProfiles}</ul>;
    </div>
  );
}
