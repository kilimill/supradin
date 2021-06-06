<template lang='pug'>
.article
  p.article__title Смотрите также
  .article__inner(v-if='!mobile')
    a.article__item(
      v-for='item in articles[resultCoins]',
      :key='item.id',
      :href='item.href'
      @click="$root.sendGA('external', 'click', `rezultat_${resultCoins}_statya_${item.id}`)"
      target='_blank'
    )
      .article__linke
        img.article__img(:src='item.articleImg')
      .article__box
        p.article__box-title {{ item.articleTitle }}
        p.article__box-text(v-html='item.articleText')
  .article__inners(v-else)
    swiper(ref='mySwiper', :options='swiperOptions')
      <swiperSlide v-for='item in articles[resultCoins]' :key='item.id' class='article__item'>
        a(:href='item.href' target='_blank' @click="$root.sendGA('external', 'click', `rezultat_${resultCoins}_statya_${item.id}`)")
          .article__linke
            img.article__img(:src='item.articleImg')
          .article__box
            p.article__box-title {{ item.articleTitle }}
            p.article__box-text(v-html='item.articleText')
      </swiperSlide>
</template>


<script>
import { mapState } from 'vuex';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      disBtn: false,
      disBack: true,
      swiperOptions: {
        initialSlide: true,
        slidesPerView: 1,
        spaceBetween: -56,
      },
    };
  },
  computed: {
    ...mapState('article', {
      articles: 'articles',
    }),
    ...mapState('common', {
      mobile: 'mobile',
    }),
    ...mapState('test', {
      resultCoins: 'resultCoins',
    }),
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
};
</script>