const Animal = (props) => {
  console.log(props);
  return (
    <div>
      <ul>
        <li>emoji: {props.emoji}</li>
        <li>Name: {props.name}</li>
        <li>Species: {props.species}</li>
      </ul>
    </div>
  );
};
