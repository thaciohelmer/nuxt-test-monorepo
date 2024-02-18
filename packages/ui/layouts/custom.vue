<template>
  <div class="ui-grid">
    <div class="ui-message">
      This is a custom layout from: <span>PACKAGES/UI</span>
    </div>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.ui-grid {
  @apply flex items-center justify-center h-screen;
}

.ui-message {
  @apply fixed top-6 left-6 text-zinc-900 font-medium text-xl;

  span {
    @apply text-zinc-500 font-bold font-mono;
  }
}
</style>
