const Animal = (props) => {
  return (
    <div>
      <ul>
        <li>emoji: {props.emoji}</li>
        <li>Name: {props.name}</li>
        <li>Species: {props.species}</li>
        <li>IsCute: {props.isCute ? "Y" : "N"}</li>
      </ul>
    </div>
  );
};
