<script lang="ts"></script>

<div class="card">
  <slot></slot>
</div>

<style>
  .card {
    background-color: var(--tertiary-color-50);
    border: 0.0625rem solid var(--secondary-color-200);
    box-shadow: var(--card-box-shadow);
    border-radius: calc(0.31rem * 1.5);
  }
</style>
