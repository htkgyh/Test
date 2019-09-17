<template>
  <Container title @close="$emit('close')">
    <div class="demo">
      <BioEcoSwiper></BioEcoSwiper>
    </div>
  </Container>
</template>

<script>
import Container from "@/DESP/base/Container";
import GenericWidget from "@/DESP/generic/GenericWidget.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import BioEcoSwiper from "./BioEcoSwiper";

export default {
  name: "BioEcoDemob",
  extends: GenericWidget,
  // components: { Container, BioEcoVeg, BioEcoBiodiv, BioEcoAsf },
  components: { Container, BioEcoSwiper },
  data() {
    return {};
  }
};
</script>

<style scoped>
.demo {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 4600px;
  height: 1200px;
}

.swiper {
  width: 100%;
  height: 100%;
}
</style>
