<template lang='pug'>
.index.page__screen
  img.index__img(
    :src="images[imgPoint].img",
    :class="[images[imgPoint].class, { activeImg }]",
    v-if="!mobile"
  )
  img.index__img(
    :src="images[imgPoint].imgMob",
    :class="[images[imgPoint].class, { activeImg }]",
    v-else
  )
  .index__content
    p.index__copy.copy БАД. НЕ ЯВЛЯЕТСЯ ЛЕКАРСТВЕННЫМ СРЕДСТВОМ
    img.index__title(src="@/assets/img/index/title.png")
    p.index__text(v-if="!mobile")
      span Каждая мама хочет, чтобы ее ребенок стал лучшим среди сверстников и достиг максимального успеха. Для этого нужны суперспособности, и у вашего малыша они есть! Осталось их определить и прокачать навыки ребенка.
      <br>
      <br>
      span Специально для этого мы сделали карту решений. Отметьте на карте интересы   и увлечения вашего малыша и узнайте, кем он или она может стать. А наши специалисты по суперспособностям подскажут, как их развивать.
    p.index__text(v-else) Каждая мама хочет, чтобы ее ребенок стал лучшим среди сверстников и достиг максимального успеха. Для этого нужны суперспособности, и у вашего малыша они есть! Отметьте на карте интересы <br> и увлечения вашего малыша <br> и узнайте, кем он или она может стать. <br> А наши специалисты по <br> суперспособностям подскажут, <br> как их развивать.
    button.btn.index__start(@click="start")
      p.btn__text.index__start-text Начать
        Arrow.btn__arrow.index-start-arrow
</template>

<script>
import { mapState } from "vuex";
import Arrow from "@/assets/img/index/svg/arrow-start.svg";
export default {
  components: {
    Arrow,
  },
  mounted() {
    if (this.intervalPack == null || this.interval == null) {
      this.$store.dispatch("indexImg/startAnimImg");
    }
  },
  computed: {
    ...mapState("indexImg", {
      images: "images",
      imgPoint: "imgPoint",
      activeImg: "activeImg",
      intervalPack: "intervalPack",
      interval: "interval",
    }),
    ...mapState("common", {
      mobile: "mobile",
      desktop: "desktop",
    }),
  },
  methods: {
    start() {
      this.$router.push({ name: "Test" });
      this.$root.sendGA("internal", "click", "nachat");
    },
  },
};
</script>