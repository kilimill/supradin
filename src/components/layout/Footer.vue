<template lang='pug'>
footer.footer(
  :class="{ basicPage: this.page === 1, pageCurrent: this.page !== 3 }"
)
  .footer__inner
    social
    .footer__box
      .footer__info Ваш ребенок — самый лучший!
      .footer__supradin
        .footer__links(v-if="!mobile")
          a.footer__link(
            href="https://ad.doubleclick.net/ddm/trackclk/N39402.1871634LETIDOR.RU/B25225005.297079227;dc_trk_aid=490025684;dc_trk_cid=146841364;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=$%7BGDPR%7D;gdpr_consent=$%7BGDPR_CONSENT_755%7D;ltd="
            :class="{ activeImgPack }"
            target="_blank"
            @click="$root.sendGA('external', 'click', `${packImg[packImgPoint].GA1}`)"
          )
            img.footer__box-img(:src="packImg[packImgPoint].src1")
          a.footer__link(
            :class="{ activeImgPack }",
            href="https://ad.doubleclick.net/ddm/trackclk/N39402.1871634LETIDOR.RU/B25225005.297079227;dc_trk_aid=490025684;dc_trk_cid=146841364;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=$%7BGDPR%7D;gdpr_consent=$%7BGDPR_CONSENT_755%7D;ltd=",
            target="_blank",
            @click="$root.sendGA('external', 'click', `${packImg[packImgPoint].GA2}`)"
          )
            img.footer__box-img(:src="packImg[packImgPoint].src2")
        a.footer__link(
          :class="{ activeImg }",
          href="https://ad.doubleclick.net/ddm/trackclk/N39402.1871634LETIDOR.RU/B25225005.297079227;dc_trk_aid=490025684;dc_trk_cid=146841364;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=$%7BGDPR%7D;gdpr_consent=$%7BGDPR_CONSENT_755%7D;ltd=",
          target="_blank",
          @click="$root.sendGA('external', 'click', `${packImgMob[imgPoint].GA}`)",
          v-else
        )
          img.footer__box-img(:src="packImgMob[imgPoint].src")
  p.footer__copy БАД. НЕ ЯВЛЯЕТСЯ ЛЕКАРСТВЕННЫМ СРЕДСТВОМ
  p.footer__number L.RU.MKT.CC.02.2021.3618
</template>

<script>
import social from "@/components/layout/Social.vue";
import { mapState } from "vuex";
export default {
  props: {
    page: {
      type: Number,
    },
  },
  computed: {
    ...mapState("common", {
      mobile: "mobile",
    }),
    ...mapState("indexImg", {
      packImg: "packImg",
      packImgPoint: "packImgPoint",
      packImgMob: "packImgMob",
      imgPoint: "imgPoint",
      activeImg: "activeImg",
      activeImgPack: "activeImgPack",
    }),
  },
  components: {
    social,
  },
};
</script>
