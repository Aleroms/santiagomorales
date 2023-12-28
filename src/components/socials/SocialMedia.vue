<template>
  <a :href="link" target="_blank">
    <font-awesome-icon :icon="icon" :size="size" />
    <span v-if="displayName" :style="{ fontSize: `${fsize}px` }">{{ name }}</span>
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
const fsize = ref(18)

const setSize = () => {
  if (props.size === 'sm') {
    fsize.value = 15
  } else if (props.size === 'xl') {
    fsize.value = 21
  } else if (props.size === '2xl') {
    fsize.value = 25
  }
}
const setIcon = async () => {
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
}

onMounted(async () => {
  setIcon()
  setSize()
})
</script>

<style lang="scss" scoped>
a{
  display: inline-block;
  align-items: center;
}
span {
  
  margin-left: 0.625rem;
  font-weight: 400;
}
svg {
  transition: 0.3s ease-in;
  margin-bottom: 0.125rem;
  &:hover {
    color: var(--fa-light);
  }
}
</style>
