<svelte:options customElement="svelte-empty" />

<script>
  import { VERSION } from 'svelte/src/version.js';
  let { text } = $props();
</script>

<style>
	:host {
    display: inline-block;
    border: 1px solid red;
    padding: 0.5em;
  }
</style>

<span>{text}<br><small>Svelte {VERSION}</small></span>
