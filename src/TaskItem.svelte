<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let complete;
  export let created;
  export let task;

  function remove() {
    dispatch("remove", { created });
  }

  function toggleStatus() {
    const newStatus = !complete;
    dispatch("toggle", { created, newStatus });
  }
</script>

<style>
  .is-complete {
    color: green;
  }
  span {
    font-size: 1em;
    font-weight: bold;
  }
  span:hover {
    opacity: 0.3;
  }
  .delete {
    width: 0.75em;
  }
  button:hover {
    opacity: 0.3;
  }
</style>

<tr>
  <td>
    <button on:click={remove}>
      <img class="delete" src="/icons/trash-alt-regular.svg" alt="trashcan" />
    </button>
  </td>
  <td>
    {#if complete}
      <span class="is-complete" on:click={toggleStatus}>{task}</span>
    {:else}<span on:click={toggleStatus}>{task}</span>{/if}
  </td>
</tr>
