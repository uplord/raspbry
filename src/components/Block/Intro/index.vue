<template>
  <div class="block block-intro alignwide"
    :class="{
      'animate js_section': animate == 'true',
      visible: visible == true
    }"
  >
    <div class="image-wrap">
      <Image :image="{ url: '/assets/images/Image.png', width: 1384, height: 778 }" :title="'Alt'" />
    </div>
    <div class="text-wrap">
      <div class="inner-container">
        <div class="inner-container">
          <h4>More than a studio, we’re your long-term ally.</h4>
          <p>We specialize in human-centered design where technology serves humanity, not the other way around. This not only elevates your brand but also solves real-world problems.</p>
          <p>We see ourselves as your long-term partner – working closely with you for true collaboration, from initial concept to final product. This way, we’re invested in your success.</p>
          <p><a href="">Learn more about our studio</a></p>
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