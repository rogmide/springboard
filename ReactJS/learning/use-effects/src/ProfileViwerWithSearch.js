import React, { useEffect, useState, useSyncExternalStore } from "react";
import axios from "axios";
import ProfileSearchForm from "./ProfileSearchForm";

const ProfileViwerSearch = () => {
  const [profile, setProfile] = useState(null);
  const [url, setUrl] = useState(`https://api.github.com/users/elie`);

  const search = (term) => {
    setUrl(`https://api.github.com/users/${term}`);
  };

  // You can have multiple useEffect
  useEffect(() => {
    console.log("Loading Data");
    async function loadProfile() {
      const res = await axios.get(url);
      setProfile(res.data.name);
    }
    loadProfile();
    // Clean function is basaclly returning a function
    // on the useEffect Scoope
    return () => console.log("Cleanning Up");
  }, [url]);

  return (
    <div>
      {profile ? <h1>Hi!!! {profile}</h1> : <h1>Loading...</h1>}
      <ProfileSearchForm search={search} />
    </div>
  );
};

export default ProfileViwerSearch;
