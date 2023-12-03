<template>
  <a :href="link" target="_blank">
    <font-awesome-icon :icon="icon" :size="size" />
    <span v-if="displayName">{{ name }}</span>
  </a>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps(['social', 'size', 'displayName'])
const link = ref('')
const icon = ref('')
const name = ref('')

onMounted(() => {
  if (props.social === 'github') {
    link.value = 'https://github.com/Aleroms'
    icon.value = 'fa-brands fa-github'
    name.value = 'Github'
  } else if (props.social === 'linkedin') {
    link.value = 'https://www.linkedin.com/in/santiago-morales-14b466194/'
    icon.value = 'fa-brands fa-linkedin'
    name.value = 'Linkedin'
  } else if (props.social === 'email') {
    link.value = 'mailto:santiagomorales333@yahoo.com'
    icon.value = 'fa-solid fa-envelope'
    name.value = 'email'
  } else if (props.social === 'resume') {
    link.value = '/resume.pdf'
    icon.value = 'fa-solid fa-file'
    name.value = 'resume'
  }
})
</script>

<style lang="scss" scoped>
span {
  margin-left: 0.625rem;
  font-weight: 400;
}
</style>
