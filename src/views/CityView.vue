<template>
  <div>
    <Suspense>
      <AsyncCityVue />
      <template #fallback>
        <CityViewSkeleton />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncCityVue from "../components/AsyncCityVue.vue";
import CityViewSkeleton from "../components/CityViewSkeleton.vue";
</script>
