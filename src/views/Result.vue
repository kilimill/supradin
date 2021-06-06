<template lang='pug'>
  section.result
    .result__inner
      .result__info.result__first
        .result__head-elems
          .result__head
            p.result__head-name Результат
            .result__head-img(v-html="result[resultCoins].imgSkill")
          p.result__info-title Поздравляем, у вашего ребенка явные <span>{{ result[resultCoins].subtitle }}</span>
          p.result__info-text {{ result[resultCoins].text }}
        .result__box
          .result__product
            a.result__product-link(:href='result[resultCoins].btnHref' target='_blank' @click="$root.sendGA('external', 'click', `${result[resultCoins].btnGa}`)")
              img.result__product-img(:src="result[resultCoins].imgSupradin")
            a.result__product-btn(:href='result[resultCoins].btnHref' target='_blank' :class="result[resultCoins].btnClass" @click="$root.sendGA('external', 'click', 'kupit')")
              p.result__product-text Купить
                arrowProduct.result__product-arrow
          .result__elem
            .result__advice.result__advice--one
              p.result__advice-text(v-html="result[resultCoins].adviceFirst")
            a.result__box-link(href='http://www.supradyn.ru/kids/?utm_source=letidor&utm_medium=cpm&utm_content=know_more&utm_campaign=supradyn_kids_2021' target='_blank' @click="$root.sendGA('external', 'click', 'uznat_bolshe')")
              p.result__box-link-text Узнать больше
                arrowMore.result__box-more.result__box-more--dis
                arrowMoreHover.result__box-more.result__box-more--hov
        .result__social
          <Social :correct='resultCoins' />
          a.result__restart(@click="reset") Начать заново
      .result__info
        .result__elems
          .result__advice.result__advice--two
            p.result__advice-text(v-html="result[resultCoins].adviceSecond")
          .result__advice-info
            .result__advice-about
              p.result__advice-autor Мария Баулина
              p.result__advice-profession Психолог
            img.result__autor-img(src="@/assets/img/result/autorImg/autor.jpg")
        .result__elems.result__elems--last
          .result__advice.result__advice--three
            p.result__advice-text(v-html="result[resultCoins].adviceThird")
          .result__advice-info
            .result__advice-about
              p.result__advice-autor Светлана Пятницкая
              p.result__advice-profession Психолог
            img.result__autor-img(src="@/assets/img/result/autorImg/autor1.png") 
    .result__mail(:class='{thanksAnim}')
      .result__mail-inner
        p.result__mail-title Как полезно проводить время с ребенком?
        p.result__mail-text Узнайте из еженедельной рассылки
        form.result__mail-form(@submit.prevent="submitForm")
          input.result__mail-input(
            placeholder="Введите свой e-mail",
            v-model.lazy="mail"
          )
          button.btn.result__mail-button(:disabled="disBtn == true")
            p.btn__text.result__mail-button-text Подписаться
              arrowMail.btn__arrow.result__mail-button-arrow.result__arr--dis
              arrowMailHover.btn__arrow.result__mail-button-arrow.result__arr--hov
      .result__mail-thanks
        p.result__mail-thanks-text Спасибо, что подписались на нашу рассылку!
    Article
</template>

<script>
import { mapState } from "vuex";
import Article from "@/components/Article";
import Social from "@/components/layout/Social";
import arrowMail from "@/assets/img/result/svg/arrow-mail.svg";
import arrowMailHover from "@/assets/img/result/svg/arrow-mail.svg";
import arrowProduct from "@/assets/img/result/svg/arrow-product.svg";
import arrowMore from "@/assets/img/result/svg/arrow-more.svg";
import arrowMoreHover from "@/assets/img/result/svg/arrow-more_hover.svg";
import axios from "axios";
import { SITE_URL } from "@/helpers/index";
export default {
  data() {
    return {
      disBtn: true,
      thanksAnim: false,
      mail: "",
    };
  },
  components: {
    Article,
    Social,
    arrowProduct,
    arrowMail,
    arrowMailHover,
    axios,
    arrowMore,
    arrowMoreHover
  },
  mounted() {
    this.$store.commit("indexImg/clear");
  },
  computed: {
    ...mapState("result", {
      result: "result",
    }),
    ...mapState("test", {
      resultCoins: "resultCoins",
    }),
    validation: function() {
      var val = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return val.test(String(this.mail).toLowerCase())
    }
  },
  watch: {
    mail: 'stateBtn',
  },
  methods: {
    stateBtn() {
      if(this.validation) {
        this.disBtn = false
      } else {
        this.disBtn = true
      }
    },
    submitForm() {
      this.$root.sendGA("external", "click", `podpisatsya`);
      this.disBtn = true;
      axios
        .post(
          `${SITE_URL}/api/sender`,
          {
            email: this.mail,
          },
          {
            headers: {
              Authorization: "Bearer 7fZKU#Qy9gZ!_put",
            },
          }
        )
        .then(({data}) => {
          this.disBtn = false;
          this.thanksAnim = true;
          console.log({data})
        })
        .catch((error) => {
          this.disBtn = false;
          console.log(error.response);
        })
        .finally(() => {
          this.mail = ''
        });
    },

    reset() {
      this.$store.dispatch("indexImg/startAnimImg");
      this.$root.sendGA("internal", "click", `nachat_zanovo`);
      setTimeout(() => this.$router.push({ name: "Test" }), 300);
      this.$store.commit("test/reset");
      this.$store.commit('common/startChoice');
    },
  },
};
</script>