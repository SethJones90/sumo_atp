<template>
  <div class="page">
    <h1>Refunds / Cancellations</h1>
    <div class="wrapper">
      <div class="item">
        <p>
          UNIT: REFUNDS/CANCELLATIONS

          You are about to begin the most rigorous unit in the Sumo Agent Training program. Billing!

          Are you ready? Joking, no need to sweat it.

          Refunds and cancellations are two of the most important concepts that you can learn as a Sumo Support Engineer.

          This section will make sure you are not only prepared, but masterful at executing refunds and cancellations.

          Money money money money, Monaayyyyy!

          Cancellations

          Cancellations are pretty self explanatory - this is when a customer writes in looking to discontinue their Sumo plan.

          How to cancel a subscription

          Go to the Site Admin page where a subscription is set up.

          Active subscriptions will have their "Status" set to either active, trialing, or past_due.

          The "Set for Cancellation" column should not say true

          Click on the Refund Central link at the top of the page

          Select the most recent Product link for that subscription

          Select whether you want to Revoke the subscription immediately, or Cancel at end of billing period. Never select Cancel subscription.

          Do not revoke the subscription immediately.  Only use Cancel at end of billing period.

          Make sure that if the plan has an accompanying Overages plan (e.g. "SumoMe Pro Tier 1 Overages"), it is also set to cancel.

          For a simple cancellation, make sure that a $0 Cash/Credit Refund is input.

          For refunds, check out the Refunds section to determine whether a refund is appropriate.

          Enter a cancellation reason, then click Refund/Revoke.  This is why the user does not want to use Sumo anymore.  Reasons like "I didn't know it would automatically re-charge my card" are not cancel reasons. If the user did not provide you with a cancel reason, indicate that.

          If this cancellation is a result of an RTC ticket, directly paste in both the cancel reason supplied along with the improvement suggestion.

          If this cancellation is the result of a non-RTC ticket, you should have followed up with the customer to get a legitimate cancel reason.  If not, just put "User didn't provide a cancel reason" as the reason.

          We're not done yet!  Go back to the Site Admin page and enter the following:

          Name of the plan that was canceled (e.g. Sumo Pro Small ($49/mo))

          Amount of cash or credit refunded (e.g. $49 cash)

          The same cancel reason you used in Refund Central

          A link to the ticket that resulted in cancelling the subscription

          Back in the ticket, there's a dropdown list Ticket Field called Cancel Reason -- make sure to select a reason or the ticket will re-open once you've submitted it.

          It's extremely important to set this field properly, as our churn reporting relies on the reason being accurate.  Reach out to @paul if you have any questions about the Cancel Reason.

          Respond back to the customer in that ticket, using the macro Billing::Cancellations::Set for cancellation.

          Handling cancel requests (RTC and direct email)

          As of late January 2017 we have Sumo Pro subscriptions have a cancellation flow that goes directly through support.  It's extremely important to understand how to properly handle cancellations in order to ensure that we receive good feedback, attempt to save the customer from churning and make sure their subscription is canceled.

          All incoming cancellation requests contain the subject line: [Action Required] - Subscription Cancellation for url.com.

          Saving Customers

          We have one chance to save customers before we have to cancel the subscription.  If their complaint is that Sumo is too expensive, we can offer a discount (up to a 20% discount on a yearly plan) to keep them.  If they're having an issue with the product, try to solve it so they want to stay.

          Types of Cancellation Reasons

          Actionable reason: Cancel reason we can engage the requester on. Examples:
          Sumo too expensive.  Don't want Sumo branding on a paid plan.  Bug in the product.

          Non-actionable reason: Cancel reason we have no effect on, and so cannot engage them on.
          Business closing, Client canceling, Switching plans (non-churn), Sumo not compatible with website (Wix, WP.com, Single-page apps only)

          No reason: Requester provides no reason, or an unclear reason.,

          If you open one of these tickets, follow these steps:

          Go to the UserID admin page for the User with the subscription set up on it.

          Verify if this customer has been closed by the sales team (see the section "Handling Cancel Requests for Sales Closes")

          If the customer is a sales close, and they have an assigned CSM, reassign the case to the CSM indicated on the SiteID admin note. If not, proceed to Step #4.

          Do not cancel the subscription yet.

          If they're on a legacy plan, use the Billing::Cancellations::Pre-cancel save attempt (legacy plans) macro. Otherwise, use the Billing::Cancellations::Pre-cancel save attempt (current plans) macro.

          If they reply back and have a Non-actionable reason or No reason then cancel the subscription

          If they reply back and have an Actionable reason, engage with the customer and try to save them.

          24 hours after your response, if the customer does not write back the ticket will automatically re-open with a note for you to cancel the subscription.

          You have one response to try and save the customer.  Make it count.  If they're having problems with Sumo that we may be able to address, reach out and let them know we want to help them.

          Example: User's cancellation feedback mentions that they were having trouble with the MailChimp integration.

          Reach out and let them know that we'll be happy to help with any problems they're having with the integration.  Make sure that you ask for any necessary information in your response that would help solve their problem.

          Focus on the customer - saving them is a byproduct of this

          Show empathy — but be earnest. It is obvious when you're faking it

          Get specifics on exactly why they’re leaving — what was difficult? Why did they hate it? What are they leaving us for? You should be able to tailor these questions based on their cancellation response

          Get specifics on what would change their mind or what they’re looking for in the service

          Handling Cancel Requests for Sales Closes

          Go to the User Admin page of the customer (example)

          Look under the list of Sites for any with a Sales Status showing "Closed", which means that the listed Sales Rep is the person who closed this customer.

          Sales customers will always have a "Sales Rep" assigned to them. This lets you know which rep this customer belongs to

          Sales customers will have a "Lead Status" that indicates the state that customer is in, within the sales funnel process.

          Not Contacted - This customer is not a sales close
          Contacted - This customer has been reached out to by the Sales team
          Maybe - Potential customer further down pipeline
          Demo - SDR has booked a demo
          Not Qualified - This customer does not meet the requirements to be a sales customer
          Closed - This customer has been closed by Sales
          Lost - Sales was unable to close


          If and only if the customer has a "Lead Status" of Closed,  move to step #3. For all other "Lead Status" you can ignore below

          Check the user's cancellation reason.

          If they are cancelling for one of the reasons in the "Valid Cancellation Reasons for Sales Closes" section below, Forward the ticket to either the Sales Rep indicated above and ping them in Slack letting them know that one of their customers is looking to cancel due to an issue we cannot address, asking whether they want to handle the customer or if we should cancel their subscription, OR if there is a CSM assigned, forward the customer to the assigned CSM.

          Starting in April of 2018, all Sales Closes were assigned a CSM. Because CSM's have a more direct relationship with the customer, simply pass the cancellation request directly to the CSM (instead of Sales) if there is a CSM assigned. In order to determine if a CSM is assigned to a customer, simply look at the dropdown to the right of "CSM:" If there is not a CSM assigned, the box will read, "None." If there is, the CSM's name will be present instead.

          Valid Cancellation Reasons for Sales Closes

          Unresolvable issues with the Product (e.g. bugs, missing features)

          If this is a high-paying customer, evaluate whether it's viable for us to implement the feature they want. If you're not sure, escalate.

          The user's client is cancelling, so they have no further need of the subscription]

          The user is adding that SiteID to an existing multi-site subscription, or are upgrading/downgrading to a different subscription plan (not Free/Basic)

          The user is closing their website/business/changing ownership and can no longer make use of their subscription

          Sumo is not compatible with their website platform (e.g. Wix, WordPress.com)

          If they are cancelling for any reason other than the above:

          Set the Sales Rep ticket field to the appropriate person:

          Now, use the macro [General Inquiry::Sales Funnel::Sales Close RTC], fill in the sales rep's name, and set the ticket to Solved.  The Sales Rep will receive a Slack message with the details:

          If the Sales Rep decides to move forward with the cancellation, they will let you know.  If you end up canceling the subscription, leave a note on both the ticket and the user's Admin page detailing what they said.

          Handling Cancel Requests for Purchases Made Through Shopify

          Go to the Site Admin page where a subscription is set up.

          Active subscriptions will have their "Status" set to either active, trialing, or past_due.

          The "Set for Cancellation" column should not say true

          Click on the Refund Central link at the top of the page

          Select the most recent Product link for that subscription

          Select Cancel at end of billing period.

          -OR-

          Instruct the customer to uninstall the Sumo Shopify app. This will automatically cancel the user's Sumo subscription.


          Refunds

          Refunds are exactly like cancellations, with one added component - the customer would also like a portion or all of what they paid for Sumo to be credited back to their card, in adddition to cancelling their Sumo plan.

          The process for issuing a refund:

          Determine if a refund is appropriate

          According to our Terms of Service we have 30-day, money back guarantee.  A refund is appropriate if the customer asks for one, or if one of the following circumstances is true:

          The customer wants to switch from a yearly plan to a monthly plan
          We can verify that the customer has not been using Sumo during the period of time they're requesting a refund for.
          The customer has a purchase on two Sumo Sites for the same website (unintended extra purchase).
          The customer's subscription is a yearly plan and they want to end the subscription early
          Fraudulent charge on the requester's card where the user doesn't know what Sumo is.

          If the customer still wants a refund and the situation does not call for one:

          Use the macro: Billing::Cancellation::No refund

          Determine the refund amount

          The refund amount depends on the reason the user wants a refund:

          The purchase has been made within the past 30 days

          Refund amount: Full amount for the purchase

          The customer wants to switch from a yearly plan to a monthly plan

          Refund amount: When following the process of switching from yearly to monthly in Admin, you'll determine the refund amount and refund it automatically

          We can verify that the customer has not been using Sumo during the period of time they're requesting a refund for

          Refund amount:

          If on a monthly plan, refund the sum of any payments made since the last time Sumo was in use
          Example: $49/mo plan. Last billing date was 10/1.  Sumo has not been used since 8/15.  Refund amount would be the sum of the last 2 payments (9/1 and 10/1), so $98.

          If on a yearly plan, check the Partial refunds of yearly plans section below.

          The customer has a purchase on two Sumo Sites for the same website (unintended extra purchase)

          Refund amount: Heavily depends on situation.  If you need help, ask.

          The customer's subscription is a yearly plan and they want to end the subscription early

          Refund amount: Check the Partial refunds of yearly plans section below.

          Fraudulent charge on the requester's card where the user doesn't know what Sumo is

          Refund amount: If we determine this is a valid request, all fraudulent charges on the card should be refunded

          FOR REFUNDS OVER $99 AND LESS THAN OR EQUAL TO $999:

          Requires approval from @tj or @seth

          FOR REFUNDS OVER $999:

          Requires approval from @paul

          Partial refunds of yearly plans

          In this example, we've determined that a customer has used 3 months of their 12-month plan.  They're on Sumo Pro Small yearly ($348/yr), and the monthly Sumo Pro Small plan is $49/mo.

          For any partial yearly refunds, any used months are valued at the full monthly price.  In this example, the full monthly price for Sumo Pro Small is $49.  Since they've used 3 months, that's $49 * 3 = $147.

          Now subtract that from the value of their yearly plan.  Sumo Pro Small is $348/yearly, so $348 - $147 = $201.  So the refund amount would be $201 in this example.

          How to process a refund

          Determine the amount of cash that will be refunded. For all refunds:

          When the cash refund is in more than $99 and less than or equal to $999, it must be cleared by TJ or Seth before proceeding

          When the cash refund is in excess of $999, it must be cleared by Paul before proceeding

          Follow the cancellation process

          Set the correct refund amount and type:

          Refund Cash: This is where you put the cash value of what you're refunding to the customer. If no cash is being refunded set it to 0

          Refund Credit: This is where you put the credit value of what you're refunding to the customer. If no credit is being refunded set it to 0

          Once the cancellation completes, copy and paste the refund post data back to customer

          Remove the lines for Available for refund, View on Stripe, Billing Date and Total Refunded (as Credit) only if $0.  So in the above example:

          In the ticket, fill in the following Ticket Fields on the left: Refund reason, Refund: total amount

          Send a response to the customer with the trimmed refund info above as confirmation of the cancellation/refund

          Partial yearly refund? Use the Billing::Cancellation::Partial refund (yearly) macro
          Full refund? Use the Billing::Cancellation::Full refund macro

          How to process a refund for customers who purchase through Shopify

          In the event the customer has already cancelled their Shopify subscription, they will need to reconnect to Shopify in order for us to issue them Shopify credit in Refund Central. In order to do this, provide the customer with the link below. If the customer has not yet cancelled, skip to the next step.

          https://sumo.com/shopify/connect?site_id=[site_id]&return_url=https://sumo.com/sites

          *NOTE: the [site_id] in the URL above needs to be replaced with the SiteID that the Sumo Pro subscription is setup on.

          Determine the amount of cash that will be refunded. For all refunds:

          When the cash refund is in below $800, must be cleared by TJ or Seth before proceeding

          When the cash refund is in excess of $800, must be cleared by Paul before proceeding

          Follow the cancellation process for users that have purchased through Shopify

          Set the correct refund amount and type:
          Refund Shopify Credit: This is where you put the Shopify credit value of what you're refunding to the customer. *NOTE: Be sure to check if the customer is on a MONTHLY or YEARLY subscription. For YEARLY  Shopify subscriptions, we still bill each month, but at the Yearly rate.

          Once the cancellation completes, copy and paste the refund post data back to customer


          How Past Due plan payment retries work

          Failed payments work like this:

          1st failed attempt: Payment fails, email sent, and subscription is set to "past due"

          2nd failed attempt: 7 days later we try again, email sent if payment fails (7 days after original failed payment)

          3nd failed attempt: 7 days later we re-attempt, email sent if payment fails (14 days after original failed payment)

          4th (final) failed attempt: 7 days later we try again.  If it fails, we cancel the subscription and set the status to "delinquent" (21 days after original failed payment)

          If a charge is successful, they're charged based on the date of the 1st failed attempt.  So if the 1st failed payment date was on Jan 1st, and payments fail until Jan 15th, they will be charged again on Feb 1st.

          Technically users could fail 4 consecutive payments and then re-sign up, essentially getting 21 free days before having to pay.

          Interaction with Credits

          If the subscription owner of a past due plan has credits on their account, those credits will not be applied to any repayment attempts.  We will attempt to charge them for the full amount.

          In order to manually set the status of the account back to active, the following must happen:

          The Stripe invoice must be set to Forgiven in Stripe (requires someone with write access in Stripe)
          Go to Close in the top-right, then Forgive
          Message @eric in Slack to let him know so he can set the inventory item back to active on our end.


          Common Issues:

          Prorated Refunds

          You will find yourself manually issuing prorated refunds just as much as (or more than) full refunds.

          There are two common situations where you need to issue a prorated refund.

          The customer is moving to another plan, and needs credit applied.
          The customer is cancelling their plan before the end of the billing period.

          Although the concept for both of these situations is the same, there is one main difference - how you calculate the prorated refund.

          In the event a customer cancels an annual plan early, they will need to be charged at the monthly rate for time used, and refunded the difference.

          For example, if a customer is cancelling their Sumo Pro Small Business Yearly ($59/mo) plan, and they have used approximately 3 months of that plan, they should be charged $219 for the three months ($73/mo * 3), then refunded the difference.

          If a customer is moving to another plan, especially a larger plan, it is appropriate to refund the customer at the annual rate.

          For example, if a customer is looking to upgrade their Sumo Pro Small Yearly ($348/yr) plan to a Sumo Pro Small Business Yearly plan, and and they have used approximately 3 months of Sumo Pro Small Yearly, they should be charged $87 for the three months ($29/mo * 3), then refunded the difference in credit, which would be applied to their Sumo Pro Small Business plan.

          Setting a subscription to cancel (cancel at the end of the billing period)

          When a customer writes in wanting to cancel their plan, when they still have unused time on their plan, and they have not specified that they want their services terminated immediately, it is common practice to set the plan to cancel at the end of the billing period.

          The main difference between this and revoking the subscription and cancelling, is that the features will be available to the customer until the billing period ends.

          Customer writes in and wants a discount

          It is very common for customers to write in, inquiring about a discount of some sort. When customers write in inquiring about the discounts we offer, we can offer them up to 20% off our yearly plan.

          Alternatively, if they agree to sign up for our webinar, they will receive 20% off of either the monthly or annual plans, and they will receive the bonuses offered in the email.

          Simply provide the link to the webinar to the customer.

          https://events.genndi.com/register/169105139238464026/eafbef300c

          A customer writes in wanting a cancellation (on Shopify plan)

          When a customer writes in, wanting a cancellation on the Sumo Pro plan, purchased through Shopify, you have two options.

          You can either choose to cancel the plan, like you would any non-Shopify plan, or you can let the customer know that they can cancel the plan by simply uninstalling Sumo from their site.

          If the customer has no interest of uninstalling Sumo, it may be better to simply cancel the plan from admin.

          A customer writes in wanting a refund (on Shopify plan)

          The process for refunding a customer for a payment purchased through Shopify is a bit more complicated.

          There are two scenarios that you will encounter when a Shopify customer is requesting a refund.

          The Shopify Oauth token is not expired

          	If the Shopify Oauth token is not expired, you can simply refund the customer in Shopify credit, just as you would refund a customer who is looking for a refund on a non-Shopify plan

          The Shopify Oauth token is expired

          	If the Shopify Oauth token is expired, the customer will need to first reauthenticate before you can refund the Shopify credit.

          In order to do this, simply have the customer follow the link below:

          https://sumo.com/shopify/connect?site_id=[site_id]&return_url=https://sumo.com/sites

          *NOTE: the [site_id] in the URL above needs to be replaced with the SiteID that the Sumo Pro subscription is setup on.
          It is important to note, once again, that a customer cannot be refunded in cash for a payment made through Shopify billing. They can only be refunded in Shopify credit.

          A customer writes in wanting to cancel a redundant sub/refund

          Another common occurrence is when customers write in asking for a refund because they are being billed twice.

          The most common reason for this is that the customer has accidentally purchased Pro plans on two separate SiteIDs.

          When this is the case, simply refund the customer for the unused time on the plan that is not currently in use.

          A customer writes in with a delinquent plan

          It is also common for a customer to write in, asking to repurchase their delinquent plan. In the event that a plan has become delinquent, it is automatically cancelled.

          When the plan is marked as delinquent, the only way for the customer to access their Pro features once again is to purchase a new Sumo Pro plan.

          In the event that the plan cancelled was a current plan, simply purchase the plan once again.

          In the event the plan was a legacy plan, the customer will need to purchase a current plan instead.

          NOTE: There are cases where a product replacement can be made or a legacy plan may be purchased, but these need to be approved by a senior agent, and these should only be considered if the delinquent plan was marked delinquent recently. Customer’s plans who have been delinquent for weeks or months should not be put back on that plan.

          Helpful Links

          https://sites.google.com/appsumo.com/cx-process/support/money/refunds?authuser=0
          https://sites.google.com/appsumo.com/cx-process/support/money/cancellations?authuser=0

          CERTIFICATION EXAM:

          https://docs.google.com/forms/d/e/1FAIpQLSf3F1uiq0HSh088b3SOH0os2r_b1IHh09dcGMObO5Ym7yXnHg/viewform


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
