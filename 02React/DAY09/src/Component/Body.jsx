import useFetch from "../usefetch";

function Body() {
  const { 
    generateProfile, 
    numberofProfile, 
    setnumberofProfile, 
    Profile 
  } = useFetch();

  return (
    <div className="but">

      <input 
        type="number"
        className="inpu"
        placeholder="Enter number"
        value={numberofProfile}
        onChange={(e) => setnumberofProfile(Number(e.target.value))}
      />

      <button onClick={() => generateProfile(numberofProfile)}>
        Search Profile
      </button>

      <div className="profiles">
        {Profile.length === 0 && <h3>No Profiles Loaded</h3>}

        {Profile.map((value) => (
          <div key={value.id} className="cards">
            <img src={value.avatar_url} alt="profile" />
            <h2>{value.login}</h2>
            <a href={value.html_url} target="_blank">
              View Profile
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Body;
