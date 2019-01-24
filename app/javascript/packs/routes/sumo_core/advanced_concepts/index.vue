<template>
  <div class="page">
    <h1>ADVANCED CONCEPTS (III)</h1>
    <div class="wrapper">
      <div class="item">
        <p class="item-title"><router-link :to="{ name: link1, params: {} }">Troubleshooting Pixels Cert</router-link></p>
      </div>
      <div class="item">
        <p class="item-title"><router-link :to="{ name: link2, params: {} }">Advanced Troubleshooting & Concepts Cert</router-link></p>
      </div>
      <div class="item">
        <p class="item-title"><router-link :to="{ name: link3, params: {} }">Article Detection Cert</router-link></p>
      </div>
      <div class="item">
        <p class="item-title"><router-link :to="{ name: link4, params: {} }">FormSync/Custom Form Cert</router-link></p>
      </div>
      <div class="item">
        <p class="item-title"><router-link :to="{ name: link5, params: {} }">Sumo Load Time Cert</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      link1: 'sumo_core.advanced_concepts.troubleshooting_pixels',
      link2: 'sumo_core.advanced_concepts.advanced_troubleshooting_concepts',
      link3: 'sumo_core.advanced_concepts.article_detection',
      link4: 'sumo_core.advanced_concepts.formsync_custom_form',
      link5: 'sumo_core.advanced_concepts.sumo_load_time',
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
