$(".delete_todo").on("click", deleteTodo);

async function deleteTodo() {
  /*Delet a todo from the DB*/

  const id = $(this).data("id");
  res = await axios.delete(`/api/todos/${id}`);
  alert("Deleted!!!");
  $(this).parent().remove();
}
