<template>
  <div>
    <Suspense>
      <AsyncCityVue />
      <template #fallback>
        <p >Loading</p>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncCityVue from "../components/AsyncCityVue.vue";
</script>
