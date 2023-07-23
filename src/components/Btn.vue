<template>
    <component
      :is="type"
      class="text-white inline-flex px-8 py-4 bg-primary-400 hover:bg-primary-500 rounded-xl"
    >
      <slot />
    </component>
  </template>
  
  <script>
  export default {
    props: {
      type: { type: String, default: 'a' }
    }
  }
  </script>
  