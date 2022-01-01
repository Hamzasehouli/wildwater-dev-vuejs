<template>
  <main>
    <pages-cmp :obj="obj"></pages-cmp>
    <content-cmp img="images/waterfall.jpg"
      ><template #img></template
      ><template #default>
        <p class="globalPara">
          We value this precious heritage that we have continuously developed
          since then by making the quality and preservation of natural resources
          our marks of excellence. A requirement that has allowed us to build an
          innovative and ambitious company and to maintain a privileged
          relationship with our consumers. True to its values, Wildwater intends
          to bring this heritage to life and share it with future generations.
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
      title: `Our History`,
      para: "It was in 1933 with the discovery of the Velenia source spring and under the leadership of the late Abdellah Sehouli in the 1960s, that the long history of Wildwater began with three generations of Leadership.",
      path: "url('images/history.jpg')",
    });

    onMounted(function () {
      document.title = "History";
    });

    return { obj };
  },
};
</script>
