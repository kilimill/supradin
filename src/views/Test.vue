<template lang='pug'>
  .test.page__screen(:class="{testMob}")
    .test__content
      p.test__copy.copy БАД. НЕ ЯВЛЯЕТСЯ ЛЕКАРСТВЕННЫМ СРЕДСТВОМ
      .test__inner
        .test__counter.test__counter--first(v-if='questionSwitch == true' :class='{animCounter}') 
          p.test__counter-text {{coinTest}}
            span.test__counter-total /5
        .test__counter.test__counter--last(v-else) 
          p.test__counter-text Дополнительный вопрос
        .test__questions
          .test__question(
            v-for="(item, index) in questions[coinTest]",
            :key="item.id",
            :class="item.class",
            @click="testCheck(item.id, $event)"
          )
            a.test__link
              .test__question-img(v-html="item.img")
              p.test__question-title {{ item.title }}
        img.test__superhero(src="@/assets/img/test/superhero.png")
    .test__choice
      .test__choice-items
        Choice.test__choice-img
        p.test__choice-text {{ choice }}
      button.test__start(@click="startMobTest" v-if="mobile")
        p.test__start-text Понятно
</template>

<script>
import { mapState } from "vuex";
import Choice from "@/assets/img/test/choice.svg";
import { qs } from "@/helpers/index";
export default {
  data() {
    return {
      checkQestions: 0,
      noClick: '',
      questionSwitch: true,
      animCounter: false
    };
  },
  components: {
    Choice,
    qs,
  },
  mounted() {
    if (this.intervalPack == null || this.interval == null) {
      this.$store.dispatch("indexImg/startAnimImg");
    }
    this.questionSwitch = true;
    if (this.mobile) {
      this.$store.commit('common/classMob')
    } else {
      setTimeout(() => qs(".test").setAttribute("loaded", true), 100);
      setTimeout(() => qs(".test").classList.add("anim"), 1400);
    }
  },
  destroyed() {
    qs(".test").removeAttribute("loaded")
    if(qs(".test").classList.contains('anim')) {
      qs(".test").classList.remove("anim")
    }
  },
  computed: {
    ...mapState("test", {
      questions: "questions",
      coinTest: "coinTest",
      pointsSkill: "pointsSkill",
    }),
    ...mapState("indexImg", {
      intervalPack: "intervalPack",
      interval: 'interval'
    }),
    ...mapState("common", {
      mobile: "mobile",
      testMob: 'testMob',
      choice: 'choice'
    }),
  },
  methods: {
    startMobTest() {
      this.$root.sendGA("internal", "click", `ponyatno`);
      this.$store.commit('common/ok')
      setTimeout(() => qs(".test").setAttribute("loaded", true), 100);
      if(qs(".test")) {
        setTimeout(() => qs(".test").classList.add("anim"), 1400);
      }
    },
    animClick() {
      this.noClick = document.querySelectorAll(".test__question");
      this.noClick.forEach((item) => {
        item.classList.add("noClick");
      });
    },
    testCheck(id, event) {
      this.$root.sendGA(
        "internal",
        "click",
        `vopros_${this.coinTest}_variant_${id}`
      );
      if (this.checkQestions <= 3) {
        event.target
          .closest(".test__question")
          .classList.add("anim-question", "noClick");

        this.checkQestions++;
        this.$store.dispatch("test/testMath", id);
        if (this.checkQestions === 3) {
          this.animClick();
          this.next();
        }
        if (this.coinTest === 6) {
          if (this.checkQestions === 1) {
            this.animClick();
            this.next();
          }
        }
      }
    },
    next() {
      if (this.coinTest === 5) {
        this.animCounter = true
        setTimeout(() => {
          this.$store.commit('common/oneChoice')
          setTimeout(() => this.questionSwitch = false, 400)
        }, 600);
      }
      this.questionCounter++
      this.animateControl();
      this.checkQestions = 0;
      setTimeout(() => this.$store.dispatch("test/plus"), 600);
    },
    animateControl() {
      this.animClick();
      setTimeout(() => qs(".test").classList.add("resetAnim"), 300);
      setTimeout(() => {
        let papa = document.querySelectorAll(".test__question");
        papa.forEach((item) => {
          if (item.classList.contains("anim-question")) {
            item.classList.remove("anim-question");
          }
        });
        if (qs(".test")) {
          setTimeout(() => {
            setTimeout(() => {
              this.noClick.forEach((item) => {
                item.classList.remove("noClick");
              });
              if (qs(".test")) {
                qs(".test").classList.add("anim");
              }
            }, 1400);
            qs(".test").classList.remove("resetAnim");
            qs(".test").classList.remove("anim");
          }, 500);
        }
      }, 600);
    },
  },
};
</script>