<template>
  <div class="page">
    <h1>Sales Funnel</h1>
    <div class="wrapper">
      <div class="item">
        <p>
          UNIT: SALES FUNNEL

          In this unit we are going to discuss the process of passing customers to our Sales team.

          If you are working on a case with a user potentially interested in upgrading to Sumo Pro and they would need to be on Small Businesses or above, you can pass the user to the Sales team for assistance.  Use them as a resource when you aren't sure you can seal the deal.  They're badasses. :)

          Sales Funnel

          There are two different Contact Types when dealing with potential sales passes - Sales Inquiries and Non-sales inquiries.

          Sales Inquiries are customers writing in regarding our pricing - looking to buy a plan, and Non-sales Inquiries are customers not looking to buy, but can potentially be upsold.

          Sales Inquiries

          When dealing with a Sales Inquiry contact type, use the macro: "Sales Pass" and cut/paste the relevant information into the Sales Pass text field on the left-hand side of the ticket.

          Note: You do not need to change the requester or set a "Forward Target".  Just have the correct information in the Sales Pass Info field and set to pending/on-hold/resolved.

          Non-sales Inquiries

          When dealing with a Non-sales Inquiry contact type, follow the instructions below - depending on the plan they are on:

          Sumo Pro customers (legacy pricing):

          Sumo Pro customers on a current pricing plan (e.g. Sumo Pro Small) who have traffic 2 tiers above what they're paying should be passed to the Sales team as well

          Example: A Sumo Pro Small customer (5k limit) writes in and you see that they have 500k monthly traffic

          Sumo "Just Starting" (free) users

          If you encounter any Free users who have over 3 Million EVM, pass them to the sales team.  3 Million is the limit for Basic.

          Partnerships & Affiliate Inquiries

          Use the “Partnerships/Affiliates > Partner signup form” macro for anyone writing in interested in our partnership program

          Current Partner Sumo: Karol (@karol on Slack)

          Common Issues:

          A Customer writes in with high traffic

          It is common to see customers with a large amount of monthly traffic write in with an issue.

          If you encounter any Free users who have over 3 Million EVM, pass them to the sales team.  3 Million is the limit for Basic.

          A Customer writes in wanting a plan (and they need a big plan)

          You will also see customers writing in, specifically looking to purchase an agency plan - either for many sites or for a large amount of traffic.

          When this happens, use the macro: "Sales Pass" and cut/paste the relevant information into the Sales Pass text field on the left-hand side of the ticket.

          Note: You do not need to change the requester or set a "Forward Target".  Just have the correct information in the Sales Pass Info field and set to pending/on-hold/resolved.

          A Customer writes in with a partnership inquiry

          Our Partnership program is awesome, and from time to time, you will see a customer write in, asking for a bit more information about it.

          When you see this, use the “Partnerships/Affiliates > Partner signup form”  macro for anyone writing in interested in our partnership program.

          Helpful Links

          https://sites.google.com/appsumo.com/cx-process/support/money/sales-funnel?authuser=0

          CERTIFICATION EXAM:


          https://docs.google.com/forms/d/e/1FAIpQLSfGx5S8-dsxdmONu6XPiKthbMDbmL2yBK1t0Bg5UU0BqMOQjA/viewfor


        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {

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
