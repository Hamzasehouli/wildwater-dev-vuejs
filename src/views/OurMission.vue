<template>
  <main>
    <pages-cmp :obj="obj"></pages-cmp>
    <content-cmp img="images/ceo.jpg"
      ><template #img></template
      ><template #default>
        <h2>HAMZA SEHOULI, CEO</h2>
        <p class="globalPara">{{ obj.para }}</p></template
      >
    </content-cmp>
    <content-cmp :state="true" img="images/office.jpg"
      ><template #img></template
      ><template #default>
        <h2>Our mission in 5 words</h2>
        <ul class="globalPara">
          <li>
            <h4>Consumers:</h4>
            ring physical and emotional well-being through healthy hydration and
            unique moments of refreshment
          </li>
          <li>
            <h4>Employees:</h4>
            create a working environment that makes our employees grow and
            inspires young graduates
          </li>
          <li>
            <h4>Customers:</h4>
            being a first-class partner, who creates shared and lasting value
          </li>
          <li>
            <h4>capital:</h4>
            continue to reduce our environmental footprint and invest in our
            sustainable development
          </li>
          <li>
            <h4>Communities:</h4>
            supporting our communities in terms of education, employability, and
            civic solidarity Environmental
          </li>
        </ul></template
      >
    </content-cmp>
  </main>
</template>
<script>
import { reactive, onMounted } from "vue";
export default {
  setup() {
    const obj = reactive({
      title: `Our Mission`,
      para: "Our emblematic brands have been supporting our customers in their daily lives for nearly 90 years. Wildwater is a citizen company dedicated to the healthy hydration and refreshment of its consumers, through sustainable and responsible development and growth. ",
      path: "url('images/mission.jpg')",
    });

    onMounted(function () {
      document.title = "Mission";
    });

    return { obj };
  },
};
</script>
