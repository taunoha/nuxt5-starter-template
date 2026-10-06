<script lang="ts" setup>
const posts = ref<Post[]>([]);

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});

const { data, error } = await useFetch("/api/v1/posts");

if (error.value) {
  throw createError({ ...error.value, statusMessage: "Posts Not Found" });
}

if (data.value) {
  posts.value = data.value.slice(0, 3);
}

useSeoMeta({
  title: "Posts",
});
</script>

<template>
  <div class="flex min-h-dvh flex-col justify-center text-center">
    <main class="container mx-auto">
      <div class="mb-6 flex justify-center">
        <Icon name="logos:nuxt-icon" size="80" />
      </div>
      <h1 class="mb-6 text-center font-sans text-5xl font-bold">
        Hello, World!
      </h1>
      <p class="mb-12">Can you see me?</p>
      <div class="flex flex-wrap justify-center gap-4">
        <UButton label="Toggle Dark/Light" @click="isDark = !isDark" />
        <UModal title="Modal with title">
          <UButton label="Open Dialog" />
          <template #body>
            <p v-for="i in 20" :key="i" class="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              architecto, enim vitae quibusdam culpa facilis assumenda expedita
              aspernatur ut, dolore numquam quidem obcaecati? Dolorem ab ipsa,
              earum voluptate id ullam.
            </p>
          </template>
        </UModal>
        <UDrawer title="Drawer with title">
          <UButton label="Open Drawer" />
          <template #body>
            <p v-for="i in 20" :key="i" class="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              architecto, enim vitae quibusdam culpa facilis assumenda expedita
              aspernatur ut, dolore numquam quidem obcaecati? Dolorem ab ipsa,
              earum voluptate id ullam.
            </p>
          </template>
        </UDrawer>
      </div>
      <p
        class="mx-auto flex max-w-xl flex-wrap justify-center gap-2 pt-8 text-sm"
      >
        <span v-for="item in posts" :key="item.title">
          {{ item.title }}
        </span>
      </p>
    </main>
  </div>
</template>
