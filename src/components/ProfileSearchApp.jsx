import { useState } from "react";
import SearchBar from "./SearchBar";
import ProfileList from "./ProfileList";
import profiles from "./Data";

function ProfileSearchApp() {
  const [filteredList, setFilteredList] = useState(profiles);

  const handleChange = (event) => {
    const query = event.target.value;

    let updatedList = [...profiles];

    updatedList = updatedList.filter((profile) => {
      return (
        profile.firstName.toLowerCase() == query.toLowerCase() ||
        profile.lastName.toLowerCase() == query.toLowerCase()
      );
    });

    setFilteredList(updatedList);
  };

  return (
    <div>
      <SearchBar onChange={handleChange} />
      <ProfileList filteredList={filteredList} />
    </div>
  );
}

export default ProfileSearchApp;
