<template>
  <div class="block block-banner alignwide">
    <div clas="slides">
      <div class="slide">

        <div class="placeholder"></div>

        <div 
          class="text-content"
        >
          <div class="text-wrap inner-container">
            <h1>We craft products,<br>interactions & <span>experiences.</span></h1>
            <BaseButtons :buttons="[{
              text: 'How we can help you',
              url: '/',
              class: 'primary'
            },{
              text: 'How we can help you',
              url: '/',
              class: 'primary'
            }]" />
            <h3>raspbry is a user experience and digital design boutique studio that creates products, services, and experiences for good companies.</h3>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps([])

onMounted(() => {})
</script>

<style lang="scss">
@import "style";
</style>