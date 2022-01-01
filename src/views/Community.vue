<template>
  <main>
    <pages-cmp :obj="obj"></pages-cmp>
    <content-cmp img="images/edu.jpg"
      ><template #img></template
      ><template #default>
        <h2>Education</h2>
        <p class="globalPara">
          In a dynamic of creation of shared value, the company Wildwater very
          early on placed its various stakeholders at the heart of its daily
          concerns. The creation of the school private James Mcsmith in 2006 was
          primarily intended to educate children of employees at the Saint
          mountain distrect production site. School private with a handpicked
          faculty, equipment technology and sports infrastructure, the school
          school welcomes around 120 students from the village of Saint
          mountain.
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
      title: `Community`,
      para: "Wildwater has always been committed to social development and the preservation of the environment. This commitment is measured through multiple concrete actions on the ground at the social and societal levels, through our support for associations and also through the obtaining in 2015 of the MUR label from the EFFH.",
      path: "url('images/cumm.jpg')",
    });

    onMounted(function () {
      document.title = "Community";
    });

    return { obj };
  },
};
</script>
