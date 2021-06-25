<template>
  <div>
    <select v-model="selectedCountry" @change="onChange()">
      <option value="">Select Country</option>
      <option :value="country.ID" v-for="country in countries" :key="country">
        {{ country.Country }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["countries"],
  data() {
    return {
      selectedCountry: "",
    };
  },
  methods: {
    onChange() {
      const country = this.countries.find(
        (item) => item.ID === this.selectedCountry
      );
      console.log(country);
      this.$emit("getCountry", country);
    },
  },
};
</script>

<style  scoped>
div {
  padding: 40px;
  text-align: center;
}
select {
  width: 50%;
  padding: 1rem;
  border: 2px solid teal;
  border-radius: 12px;
}
</style>