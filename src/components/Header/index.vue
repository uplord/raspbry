<template>
  <header class="header alignmax">
    <div class="container alignwide">
      <NuxtLink to="/" class="logo">
        <span class="svg-wrap desktop-icon">
          <nuxt-icon name="logo" filled />
        </span>
        <span class="svg-wrap mobile-icon">
          <nuxt-icon name="logo_mobile" filled />
        </span>
      </NuxtLink>

      <div class="navigation">
        <ul>
          <li>
            <NuxtLink to="mailto:michael@uplord.co.uk">Lets talk</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

<style lang="scss">
@import "style";
</style>
