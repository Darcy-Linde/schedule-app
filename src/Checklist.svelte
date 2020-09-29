<script>
  import { db } from "./firebase.js";
  import { list } from "./stores.js";
  import TaskItem from "./TaskItem.svelte";

  $: count = $list.length;
  let newTask = "";

  let query = db.ref("tasks");
  query.on("value", (snapshot) => {
    const data = snapshot.val();
    list.update(() => []);
    for (let i in data) {
      list.update((list) => [...list, data[i]]);
    }
  });

  function addTask() {
    if (newTask.trim() !== "") {
      const time = Date.now();
      db.ref("tasks/" + time).set({
        task: newTask.trim(),
        complete: false,
        created: time,
      });
      newTask = "";
    }
  }

  function deleteTask(event) {
    const { created } = event.detail;
    db.ref("tasks/" + created).remove();
  }

  function updateStatus(event) {
    const { created, newStatus } = event.detail;
    db.ref("tasks/" + created).update({ complete: newStatus });
  }

  function inputEnter(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("addTaskBtn").click();
    }
  }
</script>

<style>
  section {
    margin-left: auto;
    margin-right: auto;
    width: 20em;
  }

  input {
    width: 10em;
  }
</style>

<section>
  <p>You have {count} {count === 1 ? 'item' : 'items'} on your list</p>
  <input bind:value={newTask} on:keypress={(e) => inputEnter(e)} />
  <button id="addTaskBtn" on:click={() => addTask()}>Add Task</button>
  <table>
    {#each $list as item}
      <TaskItem {...item} on:remove={deleteTask} on:toggle={updateStatus} />
    {/each}
  </table>
</section>
