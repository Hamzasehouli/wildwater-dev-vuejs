<template>
  <main>
    <pages-cmp :obj="obj"></pages-cmp>
    <content-cmp img="images/velenia.jpg"
      ><template #img></template
      ><template #default>
        <p class="globalPara">
          Velenia has adapted to all consumers with a wide range of innovative
          containers. The sport cap launched the fashion for the nomadic bottle
          that you take with you everywhere. Its elegant, slender glass bottle
          is featured on all high-end catering tables.
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
      title: `Velenia`,
      para: "Since 1978, Velenia has been offering you natural mineral water of original purity and perfect mineral balance, ideal for everyone. It is the water with which all generations identify. Perfectly pure, it is the only natural mineral water not to contain nitrates, thanks to the preservation of more than 140 hectares of land around its source from any polluting activity.",
      path: "url('images/history.jpg')",
    });

    onMounted(function () {
      document.title = "Valenia";
    });

    return { obj };
  },
};
</script>
