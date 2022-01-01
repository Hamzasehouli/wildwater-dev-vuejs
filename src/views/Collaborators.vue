<template>
  <main>
    <pages-cmp :obj="obj"></pages-cmp>
    <content-cmp img="images/gov.jpg"
      ><template #img></template
      ><template #default>
        <p class="globalPara">
          Our employees are integrated into a company that is based on strong
          values: loyalty, innovation, commitment, respect and solidarity. They
          have the opportunity to develop professionally by becoming actors in
          sustainable development. Each of our employees is committed to
          respecting our values by signing an internal charter which defines all
          responsibilities in terms of QHSE: Quality, Health, Safety and
          Environment.
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
      title: `Our Collaborators`,
      para: "Aware that human capital is our main resource, 2,000 men and women are committed on a daily basis to make the group a benchmark in its market and meet the challenges of the future.",
      path: "url('images/coll.jpg')",
    });
    onMounted(function () {
      document.title = "Collaborators";
    });

    return { obj };
  },
};
</script>
