<template>
  <section>
    <div class="cases">
      <h3>Cases</h3>
      <div>
        <span>New:</span>
        {{ stat.NewConfirmed }}
      </div>
      <div>
        <span>Total:</span>
        {{ stat.TotalConfirmed }}
      </div>
    </div>
    <div class="deaths">
      <h3>Deaths</h3>
      <div>
        <span>New:</span>
        {{ stat.NewDeaths }}
      </div>
      <div>
        <span>Total:</span>
        {{ stat.TotalDeaths }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["stat"],
};
</script>

<style  scoped>
section {
  display: flex;
  justify-content: space-evenly;
}
.cases,
.deaths {
  background: lightblue;
  border-radius: 12px;
  padding: 1rem 3rem;
  width: 20%;
  margin-top: 10px;
}
span {
  padding: 20px;
  margin: 15px;
  font-family: monospace;
}
</style>