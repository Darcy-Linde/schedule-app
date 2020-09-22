<script>
  import { db } from "./firebase.js";
  // let tasks = ["read"];
  // $: count = tasks.length;
  let newTask = "";

  function addTask() {
    db.ref("tasks/" + Date.now()).set({
      task: newTask,
      complete: false,
      created: Date.now(),
    });
    newTask = "";
  }
</script>

<!-- <p>You have {count} {count === 1 ? 'item' : 'items'} on your list</p> -->
<input bind:value={newTask} />
<button on:click={() => addTask()}>Insert New Task</button>
<!-- <ul>
  {#each tasks as task}
    <li>{task}</li>
  {/each}
</ul> -->
