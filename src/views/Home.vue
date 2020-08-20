<template>
  <div class="home">
    <div class="page-title">
      <div
        v-if="showBack"
        @click="$router.back()"
        class="back-button"
      >Back</div>

      <h2>{{pageTitle | pageTitleFormat}}</h2>
    </div>

    <transition
      :name="transitionName"
      mode="out-in"
    >
      <router-view
        class="child-view"
        :key="$route.name ||
        $route.params.technique ||
        $route.params.subcategory ||
        $route.params.category"
      ></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: "slide-left",
      categories: {
        topLevel: [
          {
            name: "Yakusoku Kumite",
            path: "yakusoku-kumite",
            img: "",
          },
          {
            name: "Bunkai",
            path: "bunkai",
            img: "",
          },
          {
            name: "Throws",
            path: "throws",
            img: "",
          },
          {
            name: "Takedowns",
            path: "takedowns",
            img: "",
          },
        ],
        "yakusoku-kumite": [
          {
            name: "Set One",
            path: "set-one",
            img: "",
          },
          {
            name: "Set Two",
            path: "set-two",
            img: "",
          },
          {
            name: "Set three",
            path: "set-three",
            img: "",
          },
          {
            name: "Set four",
            path: "set-four",
            img: "",
          },
        ],
      },
    };
  },
  beforeRouteUpdate(to, from, next) {
    const toDepth = to.path.split("/").length;
    const fromDepth = from.path.split("/").length;
    this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    console.log(this.transitionName, toDepth, fromDepth);
    next();
  },
  filters: {
    pageTitleFormat(str) {
      const words = str.split("-");
      return words
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
    },
  },
  computed: {
    showBack() {
      return this.$route.fullPath.split("/").length > 2;
    },
    routeCategories() {
      if (this.$route.name == "Categories") return this.categories.topLevel;

      return this.categories[this.$route.params.category];
    },
    pageTitle() {
      return (
        this.$route.name ||
        this.$route.params.technique ||
        this.$route.params.category
      );
    },
  },
};
</script>


<style>
.page-title {
  position: relative;
}
.page-title h2 {
  margin-top: 0;
}

.back-button {
  height: 22px;
  position: absolute;
  bottom: 0px;
  left: 10px;
  border-bottom: 1px solid;
  width: 45px;
}
</style>
