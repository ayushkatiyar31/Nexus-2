import { useEffect, useState } from "react";

export default function useFetch() {
  const [Profile, setProfile] = useState([]);
  const [numberofProfile, setnumberofProfile] = useState(10);

  async function generateProfile(count) {
    try {
      const ran = Math.floor(1 + Math.random() * 10000);
      const url = `https://api.github.com/users?since=${ran}&per_page=${count}`;

      const response = await fetch(url);

      const data = await response.json();

      setProfile(data);
    } catch (err) {
      console.log("Error:", err);
    }
  }

  useEffect(() => {
    generateProfile(numberofProfile);
  }, []);

  return {
    generateProfile,
    numberofProfile,
    setnumberofProfile,
    Profile,
  };
}
