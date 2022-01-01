<template>
  <main>
    <pages-cmp :obj="obj"></pages-cmp>
    <content-cmp state="reverse" img="images/partn.jpg"
      ><template #img></template
      ><template #default>
        <h2>COMMITTED TO OUR PARTNERS</h2>
        <p class="globalPara">
          We have been able to develop a healthy and transparent relationship of
          trust with our suppliers, our depositories and our customers, who are
          always more likely to trust us (800 million bottles sold per year
          through more than 90,000 points of sales). These partnership is
          ethically respected by both parties. It is in this sense that we
          adopted the United Nations Global Compact, which commits us to having
          an uncompromising entrepreneurial policy against corruption.
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
      title: `Our Partners`,
      para: "In nearly 90 years, there is one value that we have continuously developed with our partners: loyalty. This is the foundation that has allowed us to build solid, long-standing partnership relationships that are our strength and credibility today.",
      path: "url('images/parners.jpg')",
    });

    onMounted(function () {
      document.title = "Partners";
    });

    return { obj };
  },
};
</script>
