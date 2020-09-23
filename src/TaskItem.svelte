<script>
  export let complete;
  export let created;
  export let task;
</script>

<li>
  <span>{task}</span>
  <span>{complete}</span>
  <span>{new Date(created).toLocaleDateString()}</span>
</li>
