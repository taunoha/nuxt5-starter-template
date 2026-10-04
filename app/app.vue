<script lang="ts" setup></script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator :height="2" />
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
