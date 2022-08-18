$(".cancel_edit").on("click", async (e) => {
  window.location = `/users/${user_id}`;
});

// $(".delete_user").on("click", async (e) => {
//   let res = await axios.post(`/users/${user_id}/delete`);
// });
