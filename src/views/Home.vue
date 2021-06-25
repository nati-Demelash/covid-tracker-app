<template>
  <main v-if="!loading">
    <data-title :text="title" :dataDate="dataDate" />
    <data-boxes :stat="status" />
    <country-select :countries="countries" @getCountry="getCountryData" />
  </main>
  <main v-else class="loading">
    <div>
      <h2>Fetching Data</h2>
    </div>
    <img :src="isLoading" alt="" />
  </main>

  <button v-if="status.Country" @click="clearCountryData">Clear Data</button>
</template>

<script>
import DataTitle from "../components/DataTitle.vue";
import DataBoxes from "../components/DataBoxes.vue";
import CountrySelect from "../components/CountrySelect.vue";
export default {
  emits: ["getCountry"],
  components: {
    DataTitle,
    DataBoxes,
    CountrySelect,
  },
  data() {
    return {
      loading: true,
      title: "Global",
      status: {},
      countries: [],
      dataDate: "",
      isLoading: require("../assets/hourglass.gif"),
    };
  },
  methods: {
    async fetchCovidData() {
      const res = await fetch("https://api.covid19api.com/summary");
      const data = await res.json();
      return data;
    },
    getCountryData(country) {
      this.status = country;
      this.title = country.Country;
    },
    async clearCountryData() {
      this.loading = true;
      const data = await this.fetchCovidData();
      this.title = "Global";
      this.status = data.Global;
      this.loading = false;
    },
  },
  async created() {
    const data = await this.fetchCovidData();
    console.log(data);
    this.dataDate = data.Date;
    this.status = data.Global;
    this.countries = data.Countries;
    this.loading = false;
  },
};
</script>

<style  scoped>
h1 {
  font-family: monospace;
}
.loading {
  padding: 2rem;
  text-align: center;
}
.loading img {
  border-radius: 12px;
  width: 15%;
  margin-top: 20px;
}
button {
  background: teal;
  color: #fff;
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 5px;
  margin-left: 20.8rem;
  cursor: pointer;
}
</style>