<template>
  <div class="page">
    <h1>SUMO CORE</h1>
    <div class="wrapper">
      <div class="item">
        <img class="item-image" src="assets/account_billing.png" />
        <p class="item-title"><router-link :to="{ name: link, params: {} }">Sumo Basics (I)</router-link></p>
      </div>
      <div class="item">
        <img class="item-image" src="assets/account_billing.png" />
        <p class="item-title"><router-link :to="{ name: link2, params: {} }">Troubleshooting Fundamentals (II)</router-link></p>
      </div>
      <div class="item">
        <img class="item-image" src="assets/account_billing.png" />
        <p class="item-title"><router-link :to="{ name: link3, params: {} }">Advanced Concepts (III)</router-link></p>
      </div>
      <div class="item">
        <img class="item-image" src="assets/account_billing.png" />
        <p class="item-title"><router-link :to="{ name: link4, params: {} }">Sumo Money (IV)</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      link: "sumo_core.sumo_basics",
      link2: 'sumo_core.troubleshooting_fundamentals',
      link3: 'sumo_core.advanced_concepts',
      link4: 'sumo_core.sumo_money'
    }
  }
}
</script>

<style scoped>

h1 {
  color: #073A5A;
}

.page {
  position: relative;
  top: 100px;
  margin: 0 auto;
  width: 100%;
}

.wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;
  top:50px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.item {
  height: 180px;
  width: 200px;
  /* border: 1px solid black; */
  color: #7A7A7A;
  padding-top: 5px;
  font-weight: bold;
  margin: 10px;
  background-color: white;
  box-shadow: 1px 1px #E0E0E0;
  /* padding: 10px; */
}

.item-title {
  position: relative;
  /* bottom: 2px; */
}

.item-image {
  position: relative;
  width: 100%;
  max-height: 130px;
  border: 0;
  vertical-align: top;
  display: table-cell;
  bottom: 5px;
}


</style>
