<template>
  <div class="container py-10 flex flex-col items-center">
    <img class="w-[400px] mb-10" src="/img/notfound.svg" alt="Not Found">
    <h1 class="text-grey-50 text-5xl font-semibold mb-4 leading-[56px]">Lost your way?</h1>
    <p class="text-grey-300">Oops! This is awkward. You are looking for something that doesn't actually exist.</p>

    <Btn
      type="RouterLink"
      class="mt-6"
      :to="{ name: 'HomePage' }"
    >
      Go Home
    </Btn>
  </div>
</template>

<script>
import Btn from '../components/Btn.vue';

export default {
  components: {
    Btn
  }
}
</script>