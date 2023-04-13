import { useState } from "react";
import SearchBar from "./SearchBar";
import ProfileList from "./ProfileList";
import profiles from "./Data";
import "../styles/ProfileSearchApp.css"

function ProfileSearchApp() {
  const [filteredList, setFilteredList] = useState(profiles);

  const handleChange = (event) => {
    const query = event.target.value;

    let updatedList = [...profiles];

    updatedList = updatedList.filter((profile) => {
      return (
        profile.firstName.toLowerCase().includes(query) ||
        profile.lastName.toLowerCase().includes(query)
      );
    });

    setFilteredList(updatedList);
  };

  return (
    <div className="container">
      <SearchBar onChange={handleChange} />
      <ProfileList filteredList={filteredList} />
    </div>
  );
}

export default ProfileSearchApp;
