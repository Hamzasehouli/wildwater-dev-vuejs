<template>
  <main>
    <pages-cmp :obj="obj"></pages-cmp>
    <content-cmp img="images/office.jpg"
      ><template :state="true" #img></template
      ><template #default>
        <p class="globalPara">
          With its cultural heritage and the values transmitted by its founder,
          the group combines agility, performance, rigor, innovation and
          solidarity. The success of the company, in human and commercial terms,
          depends on the trust of customers but also on the professional and
          social development of its employees. This policy of transparency
          extends to shareholders and partners of the company.
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
      title: `Our Governance`,
      para: "Wildwater has opted for participatory management, involving an ethical mode of governance, based on an organization that is transparent to employees, customers and partners.",
      path: "url('images/gov.jpg')",
    });

    onMounted(function () {
      document.title = "Governance";
    });

    return { obj };
  },
};
</script>
