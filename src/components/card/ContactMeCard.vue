<template>
  <div class="contact-me">
    <article class="contact">
      <h2>Send Me a DM</h2>
      <h3 class="subtitle">{{ props.contact }}</h3>
      <div class="icons">
        <SocialMedia social="linkedin" size="xl" :displayName="true" />
        <SocialMedia social="github" size="xl" :displayName="true" />
        <SocialMedia social="email" size="xl" :displayName="true" />
      </div>
      <ButtonExternalLink type="filled" :path="resume" text="resume" />
    </article>
    <div class="img-wrapper">
      <img src="/logo.png" alt="logo" width="160" height="160" />
    </div>
  </div>
</template>

<script setup>
import SocialMedia from '@/components/socials/SocialMedia.vue'
import ButtonExternalLink from '@/components/Utilities/buttons/ButtonExternalLink.vue'
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
  h3 {
    max-width: 400px;
    font-size: 16px;
  }
  p {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 24px;
  }
}
.contact-me {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
@media (max-width: 828px) {
  .contact-me {
    flex-direction: column;
    gap: 50px;
  }
}
</style>
