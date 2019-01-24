<template>
  <div class="page">
    <h1>How Subscriptions Work / Purchases As A Customer</h1>
    <div class="wrapper">
      <div class="item">
        <p>
          UNIT: HOW SUBSCRIPTIONS WORK

          How do Sumo subscriptions work? So glad you asked!

          Pull up a chair, we might be here for a while!

          Sumo Subscriptions, although a simple concept, might seem a bit complicated at first. Having a thorough understanding of the intricacies of our subscription system will make you far more effective in doing your job and assisting Sumolings.

          How they work

          It is incredibly important to note that even though Pro subscriptions “live” on SiteIDs, Sumo Pro subscriptions are tied to the one Sumo account that was used to purchase the subscription. Once an account is used to purchase a subscription, there is no way to change it.

          Furthermore, the only way to remove that subscription from the purchasing account and put it under a different account would be to cancel the subscription and re-purchase it under another account.

          An alternative would be to completely change the email of the account the subscription is under.  Keep in mind, though, that everything on the account will also be changed to whichever email address the account is changed to.  If you decide to do this, you'll also want to change the billing email.

          Uhhh, hold the phone! What? Yeah, let’s break this down:

          Let's say I have a website called http://website.com and there are 2 admin emails on that account: tj@sumo.com and paul@sumo.com.

          If I login to Sumo on that website http://website.com using tj@sumo.com and then purchase a Sumo Pro Small Pro subscription, that subscription is then applied to that site and both admin users on that Site can access the PRO features. However, the only way Paul would be able to view or manage that subscription in the Sumo Store would be to login using tj@sumo.com.

          Payment Methods

          This works the same way with payment methods. When a user logins in to Sumo with an admin email and adds a card on file under the payment methods, that card can ONLY be viewed and used by that email. So if paul@sumo.com adds a new card under his email in Sumo on http://website.com, but wants tj@sumo.com to purchase a Sumo Pro Medium subscription on http://website.com using that card, it would not be possible as the card is ONLY associated to paul@sumo.com email. The card Paul is using would have to be added under tj@sumo.com in order for TJ to make that purchase using that card.

          Purchases as Customer

          Sometimes we need to make a purchase for the customer. Here's how to do that.

          Note: We cannot make purchases for Shopify customers (will show Platform: Shopify on the Site Admin page).  They must make the purchase themselves.

          Sign in as User through User Admin (This method is good if the Site they want to sign up on is not yet activated.)

          Go to the user's User Admin page

          Click Sign in as User

          Go to sumo.com/sites and click on the Manage button next to the Site you're making the purchase on

          Go to the Sumo Store and purchase the plan they want to be on

          Sudo in as User (on their Site)

          Go to the user's Site

          Make sure you're logged out, then bring up the login dialog

          In the user email field, type "sumo" + up arrow

          This will open a third field called "Special"

          Log in as normal, and in the "Special" field enter the email address of the account the purchase will be made on

          Go into the Sumo Store and select the plan the customer wants to be on, then complete the purchase

          Common Issues

          A customer has multiple sites/cards

          As previously discussed, subscriptions are tied to accounts. Because each account can only have one default card setup at a time, this means that whatever card is selected as the default card on the account will be the card billed for every subscription tied to the email address.

          What does this mean? That if a user has multiple subscriptions, they cannot change the card being billed for each individual subscription.

          Because of this, if a customer wants to manage client subscriptions, so that each client manages their subscription with their own card, the customer will need to make sure that each client creates their own account with Sumo, and purchases the subscription with their own email address and card.

          This will allow the customer to let their clients independently manage their own subscriptions. Otherwise, the customer will need to set all clients under their own subscription, and handle the collection of fees on their end.

          A customer can’t see invoice/billing

          This is an issue that is quite common. As stated previously, only the email address associated with the user that purchased the subscription can view billing information.

          Because of this, if a customer writes in saying they cannot see their billing information, it is likely they are logging in with an email address that did not purchase the subscription.

          They will need to login with that email address instead.

          A customer wants to change the email associated with a subscription

          In the event that a customer wants to change the email associated with a subscription, you have two options as an agent:

          Change the user admin email address
          Cancel the existing subscription, then purchase a new one with the desired the email address

          It is important to note that if the email address is changed, the previous email address will no longer exist.

          A customer wants to change the email that receives invoices

          It is also common for a customer to want to change the email address that receives Sumo invoices.

          This can be done by navigating to the “Account” tab after clicking on Settings in the Sumo app, then toggling on the option, “Use separate email for billing”

          Helpful Links

          https://sites.google.com/appsumo.com/cx-process/support/money/how-subscriptions-work?authuser=0

          CERTIFICATION EXAM:

          https://docs.google.com/forms/d/e/1FAIpQLSdjfYrdqj8FHE6E5AUXUaZHsUWFJI4xiIfBRTZqApnlEBaiOg/viewform

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
