const Tweet = ({
  username,
  tweet,
  date = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
}) => {
  return (
    <div>
      <h3>{username}</h3>
      <p>
        <b>Message:</b> {tweet}
      </p>
      <b>Date:</b> {date}
    </div>
  );
};
