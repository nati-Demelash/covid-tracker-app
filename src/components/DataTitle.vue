<template>
  <section>
    <div>
      <h2>{{ text }}</h2>
    </div>
    <h2>{{ timeStamp }}</h2>
  </section>
</template>

<script>
import moment from "moment";
export default {
  props: ["text", "dataDate"],
  computed: {
    timeStamp() {
      return moment(this.dataDate).format("MMMM Do YYYY, hh:mm:ss");
    },
  },
};
</script>

<style  scoped>
section {
  text-align: center;
  padding: 1rem;
  font-family: cursive;
}
</style>