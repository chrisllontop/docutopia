<script lang="ts">
export let name: string | null = "World";
</script>

<style>
  div {
    font-family: Arial, sans-serif;
    padding: 1rem;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
  }
</style>

<div>
  <p>Hello, {name}!</p>
</div>
