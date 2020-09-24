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
    const time = Date.now();
    db.ref("tasks/" + time).set({
      task: newTask,
      complete: false,
      created: time,
    });
    newTask = "";
  }

  function deleteTask(event) {
    const { created } = event.detail;
    db.ref("tasks/" + created).remove();
  }
</script>

<p>You have {count} {count === 1 ? 'item' : 'items'} on your list</p>
<input bind:value={newTask} />
<button on:click={() => addTask()}>Insert New Task</button>
<ul>
  {#each $list as item}
    <TaskItem {...item} on:remove={deleteTask} />
  {/each}
</ul>
