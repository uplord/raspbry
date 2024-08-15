<template>
  <div class="block block-section alignwide">
    <div class="image-wrap">
      <Image :image="{ url: '/assets/images/Image2.png', width: 506, height: 586 }" :title="'Alt'" />
    </div>
    <div class="text-wrap">
      <div class="inner-container">
        <h2>We believe in the power of quality, direct and honest communication.</h2>
        <p><a href="">Learn more about our studio</a></p>
        <h4>Small design team from Dundee, Scotland.</h4>
        <p>We’re small by design – allowing us to effectively communicate with your team. By fostering an environment of clear dialogue, we’re able to fully understand your unique vision and how to achieve your project goals.</p>
        <p>Not only does this make the process smoother – it ensures the best end product for you and your audience.</p>
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