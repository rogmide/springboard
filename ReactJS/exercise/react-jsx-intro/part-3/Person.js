const Person = ({ name, age, hobbies = [] }) => {
  let res;
  let nam;
  age >= 18 ? (res = "“please go vote!”") : (res = "You must be 18 to vote");
  name.length >= 8 ? (nam = name.slice(0, 6)) : (nam = name);

  // Setting up css style in line
  let myStyle = { width: "fit-content", margin: "25px" };

  return (
    <div className="card" style={myStyle}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Learn some information about {name}
        </h6>
        <p className="card-text">
          How old are you {nam}?<br></br>I am {age}
          <br></br>
          <span>{res}</span>
        </p>
        <p>Hobbies</p>
        <ul>
          {hobbies.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
