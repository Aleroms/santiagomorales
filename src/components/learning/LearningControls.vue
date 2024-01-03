<template>
  <swiper
    :slidesPerView="slidesPerView"
    @slideChange="onSlideChange"
    :centeredSlides="true"
    :spaceBetween="30"
    :slideToClickedSlide="true"
    :pagination="{
      clickable: true
    }"
    :navigation="true"
    :modules="modules"
    :lazy="true"
    class="mySwiper"
  >
    <swiper-slide v-for="item in data" :key="item.id">
      <img :src="item.image.url" :alt="item.image.name" loading="lazy" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import { computed } from 'vue'
import { useWindowWidth } from '@/composables/windowWidth'
import { useLearningStore } from '@/stores/learning.js'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const { windowWidth } = useWindowWidth()
const learningStore = useLearningStore()

const slidesPerView = computed(() =>
  windowWidth.value < 600 ? 3 : windowWidth.value < 1024 ? 5 : props.data.length - 1
)

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const onSlideChange = (swiper) => {
  const activeSlideId = props.data.at(swiper.activeIndex).id
  learningStore.setActive(activeSlideId)
}

const modules = [Pagination, Navigation]
</script>

<style lang="scss" scoped>
.mySwiper {
  border-radius: 15px;
  border: 1px solid var(--divider-dark-1);
}
</style>
