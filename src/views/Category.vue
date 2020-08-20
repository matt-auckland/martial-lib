<template>
  <div>
    <div class="cat-grid">
      <router-link
        v-for="cat in routeCategories"
        :key="cat.name"
        class="category"
        :to="$route.path + cat.path + '/'"
      >
        <div class="text">
          {{cat.name}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: "Kata",
          path: "kata",
          img: "",
        },
        {
          name: "Bunkai",
          path: "bunkai",
          img: "",
        },
        {
          name: "Techniques",
          path: "techniques",
          img: "",
        },
        {
          name: "Footwork and Stances",
          path: "footwork-and-stances",
          img: "",
        },
        {
          name: "Yakusoku Kumite",
          path: "yakusoku-kumite",
          img: "",
        },
        {
          name: "Renzoku Bunkai",
          path: "renzoku-bunkai",
          img: "",
        },
        {
          name: "Combinations and Sparring",
          path: "combinations-and-sparring",
          img: "",
        },
        {
          name: "Kakie",
          path: "kakie",
          img: "",
        },
        {
          name: "Hojo Undo",
          path: "hojo-undo",
          img: "",
        },
        {
          name: "Misc",
          path: "misc",
          img: "",
        },
      ],
      subcategories: {
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
            name: "Set Three",
            path: "set-three",
            img: "",
          },
          {
            name: "Set Four",
            path: "set-four",
            img: "",
          },
          {
            name: "Set Five",
            path: "set-five",
            img: "",
          },
          {
            name: "Set Six",
            path: "set-six",
            img: "",
          },
          {
            name: "Set Seven",
            path: "set-seven",
            img: "",
          },
          {
            name: "Set Eight",
            path: "set-eight",
            img: "",
          },
          {
            name: "Set Nine",
            path: "set-nine",
            img: "",
          },
          {
            name: "Set Ten",
            path: "set-ten",
            img: "",
          },
          {
            name: "Set Eleven",
            path: "set-eleven",
            img: "",
          },
          {
            name: "Set Twelve",
            path: "set-twelve",
            img: "",
          },
        ],
        kata: [
          {
            name: "Gekisai Dai Ichi",
            path: "gekisai-dai-ichi",
            img: "",
          },
          {
            name: "Gekisai Dai Ni",
            path: "gekisai-dai-ni",
            img: "",
          },
          {
            name: "Sanseiru",
            path: "Sanseiru",
            img: "",
          },
          {
            name: "Seipai",
            path: "seipai",
            img: "",
          },
          {
            name: "Saifa",
            path: "saifa",
            img: "",
          },
          {
            name: "Shisochin",
            path: "shisochin",
            img: "",
          },
          {
            name: "Seiyunchin",
            path: "seiyunchin",
            img: "",
          },
          {
            name: "Kururunfa",
            path: "kururunfa",
            img: "",
          },
          {
            name: "Seisan",
            path: "seisan",
            img: "",
          },
          {
            name: "Suparinpei",
            path: "suparinpei",
            img: "",
          },
          {
            name: "Sanchin",
            path: "sanchin",
            img: "",
          },
          {
            name: "Tensho",
            path: "tensho",
            img: "",
          },
        ],
        bunkai: [
          {
            name: "Gekisai Dai Ichi",
            path: "gekisai-dai-ichi",
            img: "",
          },
          {
            name: "Gekisai Dai Ni",
            path: "gekisai-dai-ni",
            img: "",
          },
          {
            name: "Sanseiru",
            path: "Sanseiru",
            img: "",
          },
          {
            name: "Seipai",
            path: "seipai",
            img: "",
          },
          {
            name: "Saifa",
            path: "saifa",
            img: "",
          },
          {
            name: "Shisochin",
            path: "shisochin",
            img: "",
          },
          {
            name: "Seiyunchin",
            path: "seiyunchin",
            img: "",
          },
          {
            name: "Kururunfa",
            path: "kururunfa",
            img: "",
          },
          {
            name: "Seisan",
            path: "seisan",
            img: "",
          },
          {
            name: "Suparinpei",
            path: "suparinpei",
            img: "",
          },
        ],
        techniques: [
          {
            name: "Strikes",
            path: "strikes",
            img: "",
          },
          {
            name: "Blocks",
            path: "blocks",
            img: "",
          },
          {
            name: "Throws and Takedowns",
            path: "throws-and-takedowns",
            img: "",
          },
        ],
      },
      techniques: {
        "gekisai-dai-ichi": [
          {
            name: "Head Punch",
            path: "bunkai-one",
            img: "",
          },
          {
            name: "Gedan Maegeri",
            path: "bunkai-two",
            img: "",
          },
          {
            name: "Inside Attack",
            path: "bunkai-three",
            img: "",
          },
          {
            name: "Block and Sweep",
            path: "bunkai-four",
            img: "",
          },
          {
            name: "Double Punch",
            path: "bunkai-five",
            img: "",
          },
        ],
      },
    };
  },
  filters: {
    pageTitle(str) {
      const words = str.split("-");
      return words
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
    },
  },
  computed: {
    routeCategories() {
      if (this.$route.name == "Categories") return this.categories;

      if (this.$route.params.subcategory)
        return this.techniques[this.$route.params.subcategory];

      if (this.$route.params.category)
        return this.subcategories[this.$route.params.category];

      return this.categories[
        this.$route.params.technique ||
          this.$route.params.subcategory ||
          this.$route.params.category
      ];
    },
    pageTitle() {
      return (
        this.$route.name ||
        this.$route.params.technique ||
        this.$route.params.subcategory ||
        this.$route.params.category
      );
    },
  },
};
</script>

<style>
.cat-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 200px));
  gap: 15px;
}

.category {
  background: grey url("../assets/sensei_ewan.jpg");
  background-position: top;
  background-size: cover;
  border-radius: 6px;

  height: 150px;
  padding: 0 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  text-decoration: none;
}

.text {
  font-size: 24px;
  text-decoration: none;
  color: white;
  z-index: 2;
  font-weight: bold;
}

.category::after {
  position: absolute;
  background: #000;
  content: " ";
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.3;
}
</style>