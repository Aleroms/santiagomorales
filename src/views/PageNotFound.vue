<template>
  <div class="page-not-found">
    <div class="not-found-wrapper">
      <div class="img-wrapper">
        <img src="/logo.png" alt="notFound" />
      </div>
      <div class="text-wrapper">
        <div class="text">
          <h1>Page Not Found</h1>
          <p>
            the resource <code>{{ codeText }}</code> requested was not found.
          </p>
        </div>
        <div class="buttons-wrapper">
          <ButtonLinks text="Go Home" path="home" type="filled" />
          <ButtonLinks text="Back" path="back" type="outline" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ButtonLinks from '../components/Utilities/buttons/ButtonLinks.vue'
import { useRoute } from 'vue-router'
const currentRoute = useRoute()
const codeText = ref('')
codeText.value = currentRoute.path.slice(0, 37)
codeText.value += '...'
</script>

<style lang="scss" scoped>
.not-found-wrapper {
  background-color: var(--secondary-soft);
  margin: 2rem auto;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  width: 640px;
  border-radius: 15px;
}
.img-wrapper {
  margin-right: 1rem;
  padding-right: 1rem;
  border-right: 1px solid var(--divider-dark-1);
}
.text-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .text {
    h1 {
      border-bottom: 1px solid var(--divider-dark-1);
      margin-bottom: 1rem;
    }
    code {
    }
  }
  .buttons-wrapper {
    display: flex;
    align-items: start;
    gap: 20px;
  }

  code {
    margin: 0 5px;
    padding: 0.225rem 0.625rem;
    background-color: var(--divider-dark-1);
    border-radius: 4px;
  }
}
@media (max-width: 690px) {
  .page-not-found {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .not-found-wrapper {
    flex-direction: column;
    min-width: 200px;
    max-width: 400px;
    margin: 1rem;
    .img-wrapper {
      border-right: none;
      margin: 1rem auto;
    }
    .text-wrapper {
      gap: 40px;
      .text h1 {
        padding-bottom: 1rem;
      }
    }
  }
}
</style>
