<template>
  <div class="page">
    <h1>SUMO SUPPLEMENTS</h1>
    <div class="wrapper">
      <div class="item">
        <p class="item-title"><router-link :to="{ name: link1, params: {} }">Shortcuts</router-link></p>
      </div>
      <div class="item">
        <p class="item-title"><router-link :to="{ name: link2, params: {} }">Discounts</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      link1: 'sumo_supplements.shortcuts',
      link2: 'sumo_supplements.discount_codes',
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
  align-items: left;
  display: flex;
  justify-content: left;
  height: 100%;
  width: 100%;
  position: relative;
  top:30px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.item {
  /* border: 1px solid black; */
  color: #7A7A7A;
  padding-top: 5px;
  font-weight: bold;
  margin: 10px;
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
