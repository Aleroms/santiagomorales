<template>
  <a :href="link" target="_blank">
    <font-awesome-icon :icon="icon" :size="size" />
    <span v-if="displayName">{{ name }}</span>
  </a>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { resumeURL } from '@/plugins/firebase'

const props = defineProps(['social', 'size', 'displayName'])
const link = ref('')

//needs default value or else it creates warning
const icon = ref('fa-brands fa-github')
const name = ref('')

onMounted(async () => {
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
    try {
      const url = await resumeURL()
      link.value = url
      icon.value = 'fa-solid fa-file'
      name.value = 'resume'
    } catch (error) {
      console.log(error)
    }
  } else if (props.social === 'threads') {
    link.value = 'https://www.threads.net/@just.santi_'
    icon.value = 'fa-brands fa-threads'
    name.value = '@just.santi_'
  }
})
</script>

<style lang="scss" scoped>
span {
  margin-left: 0.625rem;
  font-weight: 400;
}
</style>
