<svelte:options tag="svelte-empty" />

<script>
  export let text;
</script>

<style>
	:host {
    border: 1px solid red;
    padding: 0.5em;
  }
</style>

<span>{text}</span>
