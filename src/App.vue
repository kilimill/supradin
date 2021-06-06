<template lang='pug'>
main.main(:class="{ fullheight: key == 3 }")
  .bg(v-if="!mobile")
    img.main__img.main__img-one(
      src="@/assets/img/background/bg.jpg",
      :class="{ show: key !== 3 }"
    )
    img.main__img.main__img-two(
      src="@/assets/img/background/bckgr.jpg",
      :class="{ show: key === 3 }"
    )
  .bg(v-else)
    img.main__img.main__img-one(
      src="@/assets/img/background/bg-mob.jpg",
      :class="{ show: key !== 3 }"
    )
    img.main__img.main__img-two(
      src="@/assets/img/background/bckgr-mob.jpg",
      :class="{ show: key === 3 }"
    )
  <Header :page='key' />
  .main__content
    <transition name='fade' mode='out-in'>
      router-view :key='key'
    </transition>
  <Footer :page='key' :class='{ edit: key == 3 }'/>
</template>

<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { on_load_mixin } from "./system/statistics";
import { mapState } from "vuex";
import { qs } from "@/helpers/index";

export default {
  mixins: [on_load_mixin],
  components: {
    Header,
    Footer,
  },
  created() {
    if(this.key !== 3) {
      this.$store.dispatch("indexImg/startAnimImg");
    } else {
      this.$store.commit("indexImg/clear");
    }
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.$store.dispatch("common/mobe");
      if (this.key == 2 && window.innerWidth > 660) {
        setTimeout(() => qs(".test").setAttribute("loaded", true), 100);
        setTimeout(() => qs(".test").classList.add("anim"), 1400);
      }
    },
  },
  computed: {
    ...mapState("common", {
      mobile: "mobile",
    }),
    key() {
      return this.$route.meta.key !== undefined
        ? this.$route.meta.key
        : this.$route;
    },
  },
};
</script>

<style lang='stylus'>
.main {
  pos: relative;
}
</style>
