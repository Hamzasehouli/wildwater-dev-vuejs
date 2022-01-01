<template>
  <main>
    <pages-cmp :obj="obj"></pages-cmp>

    <content-cmp img="images/rop.jpg"
      ><template :state="true" #img></template
      ><template #default>
        <h2>LOYALTY</h2>
        <p class="globalPara">
          At the basis of any lasting and solid relationship, Wildwater has made
          loyalty a pillar that binds it to its consumers by offering them
          excellent quality products that meet their needs in every way.
          Wildater develops a good working environment for its employees, and
          establishes a lasting relationship with its partners.
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
      title: `Our Value`,
      para: "We are proud to mobilize all of our employees around five unifying values that are inseparable from the human, family and entrepreneurial culture that we have maintained for nearly 90 years.",
      path: "url('images/value.jpg')",
    });

    onMounted(function () {
      document.title = "Values";
    });

    return { obj };
  },
};
</script>
<style lang="scss" scoped></style>
