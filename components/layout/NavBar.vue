<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n, useCookie } from "#imports";
import arweqaLogo from "@/assets/images/logos/arweqa-logo.svg";
import saudiFlag from "@/assets/images/logos/saudi-flag.svg";
import unitedkingdomFlag from "@/assets/images/logos/united-kingdom-flag.svg";

const { t, locale } = useI18n({ useScope: "global" });

const route = useRoute();

// Detecting active section and changing navbar depending on scrolling
const isScrolled = ref(false);
onMounted(() => {
  isScrolled.value = window.scrollY > 50;
});

interface Section {
  url: string;
  name: string;
}
const sections: Section[] = [
  { url: "home", name: t("Home") },
  { url: "new-feeds", name: t("NewFeeds") },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Language handling
const pickedLanguage = useCookie("preferred-language");
function changeLanguage() {
  pickedLanguage.value = pickedLanguage.value === "ar" ? "en" : "ar";

  const toRoute = route.path.includes("/ar/")
    ? route.path.replace("/ar/", "/en/")
    : route.path.replace("/en/", "/ar/");

  location.pathname = toRoute;
}
</script>

<template>
  <nav
    class="active"
    :class="{
      'bg-[#efb81a]': !isScrolled,
      'bg-black': !!isScrolled,
    }"
  >
    <div class="container nav-container">
      <div class="nav-links">
        <div class="img-con">
          <img
            :src="arweqaLogo"
            alt="logo"
            @click="$router.push(`/${locale}/home`)"
          />
        </div>
        <div class="router-links">
          <ul>
            <!-- Links -->
            <li v-for="section in sections" :key="section.id">
              <NuxtLink :to="localePath({ name: section.url })">
                <span class="text-white">
                  {{ $t(section.name) }}
                </span>
              </NuxtLink>
            </li>
            <!-- language -->
            <li class="lang" @click="changeLanguage">
              <div class="image-con">
                <img
                  :src="$i18n.locale === 'en' ? saudiFlag : unitedkingdomFlag"
                  alt="lang-icon"
                />
              </div>
              <span>
                {{ $i18n.locale === "en" ? "AR" : "EN" }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0px 4px 6px -1px #0a0d120f;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 17px 0;
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    position: relative;
    padding-top: 17px;
    padding-bottom: 17px;

    .nav-links {
      display: flex;
      justify-content: center;
      gap: 16px;
      .img-con {
        width: 120px;
        height: 37px;
        cursor: pointer;

        @media (max-width: 768px) {
          width: 100px;
          height: 32px;
          margin-top: 5px;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .router-links {
        ul {
          display: flex;
          gap: 16px;

          @media (max-width: 768px) {
            gap: 4px;
          }
          li {
            color: #181d27;
            font-weight: 500;
            white-space: nowrap;
            line-height: 28px;
            padding: 8px 7px;
            .router-link-active {
              span {
                cursor: pointer;
                &::after {
                  content: "";
                  background-color: white;
                  margin: 0 auto;
                  width: calc(100% - 11px);
                  height: 4px;
                  border-style: solid;
                  border-width: 0px;
                  border-radius: 200px 200px 0px 0px;
                  margin-top: 3px;
                  display: block;
                }
              }
            }
            &.lang {
              display: flex;
              padding-top: 2px;
              gap: 4px;
              align-items: center;
              cursor: pointer;
              .image-con {
                width: 26px;
                height: 20px;
                border-radius: 4px;
                cursor: pointer;
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
              span {
                font-size: 14px;
                line-height: 20px;
                font-weight: 500;
                color: white;
              }
            }
          }
        }
      }
    }
  }
}
</style>
