<template>
  <div id="app" class="antialiased font-nototc relative flex flex-col items-center">
    <header class="header relative w-full px-4 py-2 header--white">
      <div class="container mx-auto flex items-center justify-between">
        <div>
          <img
            class="logo logo--green"
            src="https://api.greenpeace.org.hk/general/logo/GP-logo-2019-TC-green-%5bweb%5d-01.png"
            alt="logo"
          />
          <img
            class="logo logo--white"
            src="https://api.greenpeace.org.hk/general/logo/GP-logo-2019-TC-white-%5bweb%5d-01.png"
            alt="logo"
          />
        </div>
        <div class="bg-cyan nav-button">
          <button v-scroll-to="'#enform'" class="btn">立即聯署</button>
        </div>
      </div>
    </header>
    <!-- end of header -->
    <!-- main -->
    <main class="main relative">
      <div class="grid gap-4">
        <div class="content bg-gray-100">
          <section class="section-hero relative">
            <img
              class="w-full"
              src="https://storage.googleapis.com/planet4-hongkong-stateless/2020/06/934d12df-2020_climate_petition_banner_1200x628-02.jpg"
              alt
            />
            <div class="green-banenr">
              <div class="col-xs-12">
                <h1
                  class="text-green mt-8 mb-4 flex flex-wrap align-center justify-center tracking-wider text-4xl font-bold"
                >
                  <div>爭分奪秒</div>
                  <div class="mx-2"></div>
                  <div>拯救氣候危機</div>
                </h1>
              </div>
            </div>
          </section>
          <Climate />
        </div>
        <slide-x-right-transition :duration="400">
          <aside class="aside-enform enform relative">
            <div id="enform" class="form-container form-container--sticky sticky">
              <div class="form-header mt-2 mb-4 text-2xl text-center font-bold" v-if="!formSubmitted">
                <h2 class="mb-2">爭分奪秒 拯救氣候危機</h2>
                <p class="font-normal text-sm">
                  一同發聲，告訴政府「香港人關注氣候議題」
                  <br />凝聚力量要求正視氣候危機！
                </p>
              </div>
              <div class="enform-progress my-4">
                <div class="overflow-hidden rounded shadow w-full bg-gray-200">
                  <div>{{this.participants ? this.participants.toLocaleString()+"人已聯署" : "-"}}</div>
                  <div
                    class="bg-cyan transition-all font-bold text-white py-1 text-center"
                    v-bind:style="{width: `${this.signupProgress || 0}%` }"
                  > </div>
                </div>
              </div>
              <div class="form-body enform">
                <MCForm v-if="!formSubmitted" @onSubmit="_onSubmit"/>
                <ThankYouBlock v-if="formSubmitted"/>
              </div>
            </div>
          </aside>
        </slide-x-right-transition>
      </div>
      <div
        class="mobile-button md:hidden tracking-wide shadow overflow-hidden fixed w-full flex items-center justify-center px-4 py-2"
      >
        <div class="scroll-indicator">
          <div class="progress-bar" v-bind:style="{ width: `${this.scrollDepth}%` }"></div>
        </div>
        <button class="form-button" v-scroll-to="'#enform'">{{ mobileBtnText }}</button>
      </div>
    </main>
    <!-- end of main -->
    <!-- footer -->
    <footer class="z-10 footer relative w-full px-4 py-12 bg-gpdarkblue text-white text-sm">
      <div class="container mx-auto">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 mb-8">
            <img
              class="logo mb-8"
              src="https://api.greenpeace.org.hk/general/logo/GP-logo-2019-TC-white-%5bweb%5d-01.png"
              alt="Greenpeace 綠色和平"
            />
            <p
              class="text-sm"
            >綠色和平是獨立的國際環保組織，通過科學研究、政策倡議及和平行動，揭露全球環境問題並提出相應解決方案。我們從不接受任何政府、企業或政治團體的資助，只接受個人的直接捐款，以維持公正獨立。</p>
          </div>
          <div class="w-full md:w-1/2 mb-8">
            <ul
              class="footer-links leading-loose flex flex-col justify-between items-start md:items-end text-right list-none list-inside"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.greenpeace.org/hongkong/"
                alt="主頁"
              >主頁</a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.greenpeace.org/hongkong/policies/privacy-and-cookies/"
                alt="私隱政策與個人資料收集聲明"
              >私隱政策與個人資料收集聲明</a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.greenpeace.org/hongkong/about/contact/"
                alt="聯絡我們"
              >聯絡我們</a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.greenpeace.org/hongkong/about/overview/"
                alt="關於綠色和平"
              >關於綠色和平</a>
            </ul>
          </div>
          <div class="w-full mb-8">
            <div class="border-t border-gray-400 px-4"></div>
            <div class="text-sm mt-4">© GREENPEACE 2020</div>
          </div>
        </div>
      </div>
    </footer>
    <!-- end of footer -->

    <FullLoadingPage :isActive="isLoading"/>
  </div>
</template>

<script>

import NProgress from "nprogress";
NProgress.configure({
  showSpinner: false
});

import { mainShare, whatsAppShare } from "@/share.js";
import { supermarkets, supermarketLogos } from "@/supermarkets.js";
import Climate from "./components/Climate.vue";

import MCForm from "./components/MCForm.vue"
import ThankYouBlock from "./components/ThankYouBlock.vue"
import FullLoadingPage from "./components/FullLoadingPage.vue"
import * as mcHelper from "@/mc.form-helper.js"

export default {
  name: "App",
  components: {
    Climate,
    MCForm,
    ThankYouBlock,
    FullLoadingPage
  },
  data() {
    return {
      supermarkets: supermarkets,
      supermarketLogos: supermarketLogos,
      isMobile: false,
      scrollDepth: 0,
      currentPage: 0,
      showMobileButton: true,
      showFormModal: true,
      formSubmitted: false, // wether to show the succ page or not
      participants: 0,
      goal: 0,
      isLoading: false
    };
  },
  methods: {
    scrollIntoView(evt) {
      evt.preventDefault();
      const href = evt.target.getAttribute("href");
      const el = href ? document.querySelector(href) : null;
      if (el) {
        this.$refs.content.scrollTop = el.offsetTop;
      }
    },
    checkMobile() {
      var isMobile = window.matchMedia("screen and (max-width:767px)").matches;
      this.isMobile = isMobile;
      return isMobile;
    },
    getDocumentHeight() {
      return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
    },
    getWindowHeight() {
      return (
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.getElementsByTagName("body")[0].clientHeight
      );
    },
    getScrollTop() {
      return window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    },
    handleScroll() {
      let scroll = this.getScrollTop() / this.innerHeight;
      this.scrollDepth = Math.round(scroll * 100);
    },

    /**
     * Handle the form submission
     * @return {[type]} [description]
     */
    _onSubmit: function (formDataObj) {
      try {
        this.isLoading = true

        // prepare the submit data
        let postData = mcHelper.fetchFormInputs("#mc-form")
        for (let k in formDataObj) {
          if (k in postData) {
            postData[k] = formDataObj[k]
          }
        }

        fetch(mcHelper.getPostURL(), {
          method: 'POST',
          body: Object.keys(postData).reduce((formData, k) => {
            formData.append(k, postData[k]);
            return formData;
          }, new FormData())
        })
        .then(response => response.json())
        .then(response => {
          this.isLoading = false

          if (response.Supporter) { // ok, go to next page
            mcHelper.sendPetitionTracking("2020-climate")
            this.formSubmitted = true
            this.participants += 1
            document.querySelector(".enform").scrollIntoView();
          } else {
            console.error(response)
          }
        })
        .catch(error => {
          this.isLoading = false // something wrong
          alert(error)
          console.error(error)
        })

      } catch (e) {
        console.error(e)
      }
    }
  },
  computed: {
    mobileBtnText() {
      return this.formSubmitted ? "感謝您聯署發聲" : "立即聯署";
    },
    innerHeight() {
      return this.getDocumentHeight() - this.getWindowHeight();
    },
    signupProgress() {
      return this.participants
        ? Math.round((this.participants / this.goal) * 100)
        : 0;
    }
  },
  created() {
    NProgress.start();
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.checkMobile();

    // render the peition status bar
    const {numSignupTarget, numSignup} = mcHelper.getNumSignupsAndTarget()
    this.goal = numSignupTarget;
    this.participants = 0;
    setTimeout(() => { // for the animation
      this.participants = numSignup;
    }, 1000)

    this.$nextTick(() => {
      NProgress.done();
    });
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
    console.warn("Please refresh the page");
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>
