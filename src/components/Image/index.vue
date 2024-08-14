<template>
  <!-- <NuxtImg
    :provider="image.data.attributes.provider === 'ipx' ? '' : 'strapi'"
    :src="image.data.attributes.url"
    format="webp"
    fit="outside"
    :alt="title"
    :width="image.data.attributes.width"
    :height="image.data.attributes.height"
  /> -->
  <NuxtImg
    :src="image.url"
    format="webp"
    fit="outside"
    :alt="title"
  />
</template>

<script setup>
const props = defineProps({
  image: {
    type: Object,
  },
  title: {
    type: String,
  },
})
</script>