<template>
  <div class="page">
    <h1>SUMO MONEY (IV)</h1>
    <div class="wrapper">
      <div class="item">
        <p class="item-title"><router-link :to="{ name: link1, params: {} }">Refunds/Cancellations Cert</router-link></p>
      </div>
      <div class="item">
        <p class="item-title"><router-link :to="{ name: link2, params: {} }">Sales Funnel Cert</router-link></p>
      </div>
      <div class="item">
        <p class="item-title"><router-link :to="{ name: link3, params: {} }">Modifying Customer Billing Cert</router-link></p>
      </div>
      <div class="item">
        <p class="item-title"><router-link :to="{ name: link4, params: {} }">How Subscriptions Work/Purchases as Customer Cert</router-link></p>
      </div>
      <div class="item">
        <p class="item-title"><router-link :to="{ name: link5, params: {} }">Subscribing To And Changing Plans Cert</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      link1: 'sumo_core.sumo_money.refunds_cancellations',
      link2: 'sumo_core.sumo_money.sales_funnel',
      link3: 'sumo_core.sumo_money.modifying_customer_billing',
      link4: 'sumo_core.sumo_money.how_subscriptions_work_purchases_as_customer',
      link5: 'sumo_core.sumo_money.subscribing_to_and_changing_plans',
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
  text-align: center;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
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
