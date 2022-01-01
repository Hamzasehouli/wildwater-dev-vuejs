<template>
  <main>
    <pages-cmp :obj="obj"></pages-cmp>
    <content-cmp img="images/rop.jpg"
      ><template #img></template
      ><template #default>
        <p class="globalPara">
          Wildwater is aware that it is not only working for the present, but
          also investing in the future. As climate change and other
          environmental issues take center stage and impact all areas of our
          lives, Wildwater is committed and taking initiatives to reduce its
          environmental footprint. In an effort to preserve the attributes of
          nature and to guarantee the purity of the water, the company has
          established a security perimeter of 140 ha of land around the sources
          of saint mountain source, protecting them from all polluting human
          activities. This initiative was also accompanied by regular awareness
          sessions with surrounding populations on the risk of underground
          pollution linked to the use of pesticides in agriculture.
        </p></template
      >
    </content-cmp>
  </main>
</template>
<script>
import { reactive, onMounted } from "vue";
export default {
  setup() {
    const obj = reactive({
      title: `Environment`,
      para: "Water is nature's most precious gift and it is essential to preserve it.",
      path: "url('images/envir.jpg')",
    });

    onMounted(function () {
      document.title = "Environment";
    });

    return { obj };
  },
};
</script>
