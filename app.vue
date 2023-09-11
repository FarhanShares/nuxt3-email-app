<script type="ts" setup>
// redirect to default page (let's say, we don't have any homepage!)
if (['', '/'].includes(useRoute().fullPath )) {
  navigateTo('/inbox')
}
</script>

<template>
  <div>
    <NuxtLayout>
       <NuxtPage />
    </NuxtLayout>
  </div>
</template>
