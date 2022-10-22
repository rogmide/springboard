const Person = ({ name, age, hobbies = [] }) => {
  let res;
  let nam;
  age >= 18 ? (res = "“please go vote!”") : (res = "You must be 18 to vote");
  name.length >= 8 ? (nam = name.slice(0, 6)) : (nam = name);
  return (
    <div>
      <p>Learn some information about {name}.</p>
      How old are you {nam}?<br></br>I am {age}
      <br></br>
      <span>{res}</span>
      <p>Hobbies</p>
      <ul>
        {hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
    </div>
  );
};
