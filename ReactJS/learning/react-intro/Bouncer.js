const Bouncer = (props) => {
  let replay;
  if (props.age < 18) {
    replay = "Sorry can't come in";
  } else if (props.age < 21) {
    replay = "You can come in, but no drinking";
  } else {
    replay = (
      <p>
        You can come in, GO DRINK
        <br></br>
        <img src="https://cdn.britannica.com/07/190707-050-3B712C76/types-alcohol-shelves-Bucharest-pub-Romania.jpg" />
      </p>
    );
  }

  return (
    <div>
      <b>Bouncer: </b> How old are you?
      <p>
        <b>You: </b> I am {props.age} year old
      </p>
      <b>Bouncer: </b> {replay}
    </div>
  );
};
