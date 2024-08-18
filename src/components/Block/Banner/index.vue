<template>
  <div class="block block-banner alignwide"
    :class="{
      'animate js_section': animate == 'true',
      visible: visible == true
    }"
  >
    <div clas="slides">
      <div class="slide">

        <div class="placeholder"></div>

        <div 
          class="text-content"
        >
          <div class="text-wrap inner-container">
            <div class="icon-logo inner-container">
              <span class="svg-wrap">
                <nuxt-icon name="icon" filled />
              </span>
            </div>
            <h1>We craft products,<br>interactions & <span>experiences.</span></h1>
            <BaseButtons :buttons="[{
              text: 'How we can help you',
              url: '/',
              class: 'primary'
            },{
              icon: 'arrow-right',
              text: 'How we can help you',
              url: '/',
              class: 'primary'
            }]" />
            <div class="inner-container">
              <h2 class="h4">raspbry is a user experience and digital design boutique studio that creates products, services, and experiences for good companies.</h2>
            </div>

            <div class="floating-wrap"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps([
  'animate',
  'visible'
])

onMounted(() => {})
</script>

<style lang="scss">
@import "style";
</style>