<template>
  <div class="banner-template">
    <!-- mainly the image slot  -->
    <slot name="card">
      <p>Loading . . .</p>
    </slot>
    <div class="info">
      <div class="primary">
        <slot name="primary">
          <p>Loading . . .</p>
        </slot>
      </div>
      <div class="secondary">
        <slot name="secondary">
          <p>Loading . . .</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 400px;
}
.primary {
  max-width: 500px;
}

.secondary {
  max-width: 560px;
}
.banner-template {
  display: flex;
  flex-direction: row-reverse;
  margin: 3rem;
  justify-content: space-evenly;
  gap: 10px;
}

@media (max-width: 845px) {
  .banner-template {
    flex-direction: column;
    align-items: center;
  }
}
</style>
