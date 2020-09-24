<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let complete;
  export let created;
  export let task;

  function remove() {
    dispatch("remove", { created });
  }
</script>

<style>
  .is-complete {
    /* text-decoration: line-through; */
    color: green;
  }
  li {
    display: flex;
    font-size: 1em;
    font-weight: bold;
  }
  span {
    margin-right: auto;
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

<li>
  {#if complete}
    <span class="is-complete">{task} | Created on {new Date(created).toLocaleDateString()}</span>
  {:else}
    <span>{task} | Created on {new Date(created).toLocaleDateString()}</span>
  {/if}
  <button on:click={remove}>
    <img class="delete" src="/icons/trash-alt-regular.svg" alt="trashcan" />
  </button>
</li>
