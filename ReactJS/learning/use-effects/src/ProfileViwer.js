import React, { useEffect, useState } from "react";
import axios from "axios";
// 'https://api.github.com/users/rogmide'

const ProfileViwer = ({ name = "elie", color = "purple" }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function loadProfile() {
      const res = await axios.get(`https://api.github.com/users/${name}`);
      setData(res.data.name);
    }
    loadProfile();
    // If you using a useState on the useEffect you should
    // added as a dependency on the useEffect
    // that way if the useState change
    // the useEffect is run again
  }, [name]);

  return (
    <div>
      <h3 style={{ color }}>{data ? data : "Loading..."}</h3>
    </div>
  );
};

export default ProfileViwer;
