<template>
  <main>
    <pages-cmp :obj="obj"></pages-cmp>
    <content-cmp img="images/labo.jpg"
      ><template #img></template
      ><template #default>
        <p class="globalPara">
          As one of our priority commitments, quality is scrupulously checked at
          every phase in our value chain. It is attached to the technical
          aspects of our businesses: from the extraction of water to its
          distribution, including bottling departments and laboratories which
          are at the forefront of hygiene. Quality is also in our governance, in
          the hygiene, health and safety processes at work and in our social and
          environmental responsibility.
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
      title: `Quality`,
      para: "Quality is our company's priority commitment. It is a mark of excellence and also the first of our responsibilities since we contribute to the health and well-being of our customers.",
      path: "url('images/quality.jpg')",
    });

    onMounted(function () {
      document.title = "Quality";
    });

    return { obj };
  },
};
</script>
