<script>
  export let complete;
  export let created;
  export let task;
</script>

<style>
  .is-complete {
    /* text-decoration: line-through; */
    color: green;
  }
  li {
    display: flex;
    font-size: 1.2em;
    font-weight: bold;
  }
  span {
    margin-right: auto;
  }
  .delete {
    width: 0.75em;
  }
</style>

<li>
  {#if complete}
    <span class="is-complete">{task} | Created on {new Date(created).toLocaleDateString()}</span>
  {:else}
    <span>{task} | Created on {new Date(created).toLocaleDateString()}</span>
  {/if}
  <button>
    <img class="delete" src="/icons/trash-alt-regular.svg" alt="trashcan" />
  </button>
</li>
