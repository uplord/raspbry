<template>
  <header class="header alignmax">
    <div class="container alignwide">
      <NuxtLink to="/" class="logo" aria-label="Home">
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
            <NuxtLink to="/">Work</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Info</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Store</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="right">
        <ul>
          <li>
            <NuxtLink to="mailto:dan@raspbry.design">Lets talk</NuxtLink>
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
