<template>
  <div class="contact-me">
    <article class="contact">
      <h2>Send Me a DM</h2>
      <h4 class="subtitle">{{ props.contact }}</h4>
      <div class="icons">
        <SocialMedia social="linkedin" size="xl" :displayName="true" />
        <SocialMedia social="github" size="xl" :displayName="true" />
        <SocialMedia social="email" size="xl" :displayName="true" />
      </div>
      <h2>download <a :href="resume">resume</a></h2>
    </article>
    <div class="img-wrapper">
        <img src="/logo.png" alt="logo">
    </div>
  </div>
</template>

<script setup>
import SocialMedia from '@/components/socials/SocialMedia.vue'
import { onBeforeMount, ref } from 'vue'
import { resumeURL } from '@/plugins/firebase.js'
const resume = ref('')
const props = defineProps({
  contact: {
    type: String,
    required: true
  }
})

onBeforeMount(async () => {
  try {
    resume.value = await resumeURL()
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="scss" scoped>
.icons {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 1rem 0;
  max-width: 300px;
}
.contact {
  a {
    color: var(--primary);
  }
  h4{
    max-width: 400px;
  }
}
.contact-me{
    display: flex;
    align-items: center;
    justify-content: space-around;
    
}
@media(max-width: 828px){
    .contact-me{
        flex-direction: column;
        gap: 50px;
    }
}
</style>
