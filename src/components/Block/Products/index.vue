<template>
  <div class="block block-products alignwide"
    :class="{
      'animate js_section': animate == 'true',
      visible: visible == true
    }"
  >
    <div class="text-wrap">
      <h2>At raspbry, we believe in a connected approach.</h2>
    </div>
    <div class="products">
      <div class="product">
        <div class="title">Product</div>
        <div class="info">User Research & Testing, Interactive Prototyping, Software Design, Visual Design Systems, Mobile App Design</div>
      </div>
      <div class="product">
        <div class="title">Product</div>
        <div class="info">User Research & Testing, Interactive Prototyping, Software Design, Visual Design Systems, Mobile App Design</div>
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