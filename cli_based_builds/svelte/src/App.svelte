<svelte:options customElement="svelte-empty" />

<script>
  import { VERSION } from 'svelte/src/version.js';
  let { text } = $props();
  let lastPing = $state(null);

  function ping() {
    window.dispatchEvent(new CustomEvent('framework-ping', {
      detail: 'svelte-empty', bubbles: true, composed: true
    }));
  }

  $effect(() => {
    function onPing(e) { lastPing = e.detail; }
    window.addEventListener('framework-ping', onPing);
    return () => window.removeEventListener('framework-ping', onPing);
  });
</script>

<style>
	:host {
    display: inline-block;
    border: 1px solid red;
    padding: 0.5em;
    min-width: 20em;
  }
</style>

<span>
  {text}<br>
  <button onclick={ping}>Ping</button>
  {#if lastPing}<span> ← {lastPing}</span>{/if}<br>
  <small style="text-align: right; display: block;">Svelte {VERSION}</small>
</span>
