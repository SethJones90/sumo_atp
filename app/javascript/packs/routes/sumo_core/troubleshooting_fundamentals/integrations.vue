<template>
  <div class="page">
    <h1>Integrations</h1>
    <div class="wrapper">
      <div class="item">
        <p>
          UNIT: INTEGRATIONS

          Third party Integrations are one of the most important pillars in the foundation of Sumo. Although we are looking to make our own email service provider (also abbreviated as ESP) more robust, in order to prevent the need for customers having to integrate with third party email service providers, these integrations are still necessary for our customers who have already committed, and are paying a lot of money, for these services. This is why it is imperative to have a strong understanding of how these integrations function, and the nuances within each. This is no easy task, but if you press forward, you will be on your way to Sumo mastery.

          Onward, Sumos!

          “Bravery is not the absence of fear but the forging ahead despite being afraid” - Robert Liparulo

          What Services Do We Integrate With?

          You can find a list of the services we integrate with at the link below:

          https://help.sumo.com/hc/en-us/articles/218486798-Integrated-Email-Service-Providers

          Pro Integrations

          The following integrations are considered "Pro Integrations" and are available with Ecommerce or higher Pro plans:

          Sailthru
          Infusionsoft
          HubSpot
          Klaviyo
          Pardot
          Ontraport
          Sales Force Marketing Cloud (formerly Exact Target)

          What makes them "Pro"? These are the most expensive integrations to develop, maintain and support.

          Finding Information Regarding ESPs

          Because it’s nearly impossible to memorize all of the nuances to each of these services, we have created some resources regarding each service that are available in the links below:

          https://docs.google.com/spreadsheets/d/1oOi7Mj7o-Qwn6yO8fowCNACcOgONSLDzBlsGxsX-bLE/edit#gid=0

          https://docs.google.com/spreadsheets/d/1bWzI2blKpoY-h_0CZAX7QsqFDtfgBu33qhBcYrpXI1Q/edit#gid=0

          You can also find details regarding the credentials for each of our test accounts.

          Primary Concerns When Connecting With ESPs

          When connecting a Sumo form to a third party ESP, the primary concern here is to make sure that Sumo field variable names match the field names in the ESP.

          With each ESP, the nomenclature used for field names is a bit different, and there are some nuances to consider in each ESP.

          We will go over some of these a little later on.

          Error Log

          A useful tool for troubleshooting if an integration is working properly on a site is the Error Log on a user’s Site Admin page.

          If you check the error log after sending a test email, and you see an error, you may be able to get a hint at what is faulty in a setup just by looking at the error. If an error is not displayed, the integration may be working properly.

          Double Opt In vs Single Opt In

          For many Email Service Providers, the option to enable or disable Double Opt In is available.

          With Double Opt In enabled, subscribers are required to take an extra step and authenticate through email, after successfully signing up through the customer’s popup, before they can be added to their mailing list.

          **This will generally drop your success rate of getting them into your list by 50%.

          If Double Opt In is disabled (which would be then know as Single Opt In) of the email signups will pass directly to the customer’s list in their ESP.

          Nuances

          In one of the previous sections in this unit, we discussed certain nuances you will need to be aware of in order to be proficient. Let’s dive a bit deeper into these!

          Mailchimp

          Mailchimp is one of our most common integrations, so it is imperative that you are familiar with integrating Sumo and Mailchimp.

          The most important nuance to be aware of is that our First Name and Last Name fields must map to the FNAME and LNAME Merge Tags in Mailchimp. This is a bit counterintuitive because normally the Merge Tags within Mailchimp must match the Field Variable Names within Sumo exactly, but these two are the exception.

          It is also important to note that the “Required” toggle for the field in Sumo matches the “Required” checkbox corresponding to the field in Mailchimp.

          Active Campaign

          Active Campaign is another ESP that has some field mapping nuances. This one is a bit tricky.

          Our First Name and Last Name fields will, by default, map to the %FULL_NAME% field within Active Campaign, and the Name Field in Sumo will need to be mapped to a custom %NAME% fields within Active Campaign.

          MyNewsletterBuilder (MNB)

          Because Sumo acts as a third party tool to add subscribers to MNB, MNB does not automatically send a confirmation message to Sumo subscribers, and the subscribers that make it into MNB from Sumo, are displayed with an "unconfirmed" status.

          This, however, does not affect the customer’s ability to send emails to those subscribers.

          If a customer would like to send a confirmation email, they can do so by clicking into a particular subscriber list and selecting "Confirm List".

          This can be done by adding a MyNewsletterBuilder confirmation link within the Sumo AutoResponder.

          An example below:

          https://www.mynewsletterbuilder.com/my/subscribers/groups/522424

          (The customer will need to be logged into this account)

          Then the customer can customize the confirmation message here.

          https://www.mynewsletterbuilder.com/my/subscribers/confirmations


          Zapier

          Zapier is different from our other integrations in that it is designed to “glue” two tools together, and does not have a standard configuration like the others.

          The best way to handle questions about Zapier is to try to replicate a setup locally, or test the customer’s setup, since there are many variations of connections that can be created.

          iContact

          Our iContact app is different in that the user needs to use our specific App ID when setting up the integration. You can find more about at this at the link below:

          https://help.sumo.com/hc/en-us/articles/115001539252-Integrating-with-iContact

          FormSync

          FormSync works by taking a form from an email service provider and "syncs" Sumo to it when visitors subscribe. This is particularly valuable if Sumo doesn’t directly integrate with an ESP, but the customer can provide a custom form from that ESP.

          Sumo collects a visitor’s Email and additional fields with its apps then it writes those to the Sumo "Form" through FormSync. Sumo then submits the form to pass that information to the email service.

          FormSync is not a way to import customized forms to be displayed with Sumo. It is a way to map Sumo apps to a form, using Sumo as the front-facing opt-in that a site’s visitors will see.

          FormSync does not currently support dynamic fields, only static fields.

          Sales Force Marketing Cloud (formerly Exact Target)

          When working with Sales Force Marketing Cloud, it is important to note that it was formerly named Exact Target, so sometimes the names will be used interchangeably.

          That being said, Salesforce CRM is not the same as Salesforce Marketing Cloud, and Sumo does not currently integrate with Salesforce CRM.

          Here’s a quick breakdown of Salesforce terminology:

          Salesforce Marketing Cloud = Exact Target = integrates with Sumo
          Salesforce = Salesforce CRM = does not integrate with Sumo

          Hubspot

          If you ever run into any issue where a list is displaying in a customer’s Hubspot account, but Sumo is not displaying the list, but is displaying other lists within the account, it is possible that the list not displaying is a “Smart LIst.”

          Sumo's Hubspot integration only supports Static Lists at the moment.

          We’re looking into options to add support for Smart Lists. It's definitely on our radar but not on the immediate development roadmap.

          Marketo

          When connecting to Marketo through Sumo, a Marketo instance is required.

          One fairly common issue Marketo users write in about is not being able to locate their Marketo Instance.

          If the customer needs help getting the Client ID, Client Secret and Instance, you can point them to this article:

          http://developers.marketo.com/blog/quick-start-guide-for-marketo-rest-api/

          The instance will be the first part of their end-point URL that will be formatted like this:

          100-AEK-913

          Troubleshooting process

          A general troubleshooting process you can follow to diagnose an issue with an Email Service Provider configuration is below:

          Check to see if Sumo is installed properly on the customer’s site
          Verify the form’s Submit button’s click action is set to submit emails.
          Check to see if the list is selected globally, and within the popup’s “Connect To Email Service” tab
          If it is not, instruct the customer to connect to the list properly
          If it is, send a test email, and check the error log
          If there are no errors, ask the customer if the email went through
          If there are errors, inform the customer, and ask for their ESP credentials and check to see if they have their fields setup properly

          Common Issues:

          Merge Tags are wrong

          A common issue you will see with our Mailchimp integration is improperly mapped fields between Sumo and Mailchimp.

          When troubleshooting these types of issues, the Merge Tags within Mailchimp must match the Field Variable Names in Sumo exactly, with the exception of the First Name and Last Name fields.

          For example, if the Field Variable Name in Sumo is Food, then the Merge Tag within Mailchimp must be FOOD. It is also important to note that if the field is marked as “Required” in either Mailchimp or Sumo, that value must match between the two as well.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/98974
          https://sumome.zendesk.com/agent/tickets/27499


          Active Campaign fields are wrong

          Our customers using Active Campaign will generally write in with some confusion regarding the field mapping between Sumo and Active Campaign. It is a general rule of thumb to make sure the field variable names in Sumo match the fields within the ESP. This is true for Active Campaign as well, except for the First Name and Last Name fields.

          Our First Name and Last Name fields will, by default, map to the %FULL_NAME% field within Active Campaign. This generally causes some confusion with customers, so you will need to make sure that they are aware of this, and let them know what their options are.

          It is also important to note that if customers want to use the “Name” Field in Sumo, they will need to create a custom %NAME% field within Active Campaign.

          Example tickets:
          https://sumome.zendesk.com/agent/tickets/27090
          https://sumome.zendesk.com/agent/tickets/128894


          Smart Lists - Hubspot

          Occasionally you will have a customer write in saying they are not seeing all of their Hubspot lists in the dropdown of lists within Sumo after connecting to Hubspot.

          More likely than not, this is because the lists not being displayed are Smart Lists. Sumo will not display Smart Lists because they are dynamic, it will only display Static Lists.

          Example tickets:
          https://sumome.zendesk.com/agent/tickets/99700
          https://sumome.zendesk.com/agent/tickets/64084


          Global vs Campaign connection

          Another common issue you will see is customers forgetting to select a list in their “Global” integration settings in Sumo. Many times you will see that they have connected to a list, but they have not selected a list, so the dropdown within the modal is set to “Don’t Push To List.” When this is the case, simply instruct the customer to select their desired list.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/26756
          https://sumome.zendesk.com/agent/tickets/32438


          iContact App ID

          Customers trying to integrate with iContact generally trouble connecting because they are not using our specific App ID.

          Remember, our iContact app is different in that the user needs to use our specific App ID when setting up the integration. You can find more about at this at the link below:

          https://help.sumo.com/hc/en-us/articles/115001539252-Integrating-with-iContact

          In order to resolve this, let them know to use the proper App ID.

          Exammple ticket:
          https://sumome.zendesk.com/agent/tickets/123506


          Zapier multiple fields

          Customer using our Zapier integration will occasionally run into an issue passing multiple field values from Sumo to Zapier.

          If this happens, once you have verified that Zapier has been setup properly, you will need to make sure that when they create their Zap in Zapier and get to the "Test This Step" section of the Sumo side, the customer makes the test submission through a popup that has all of the fields they want to collect set.

          Otherwise, if they use a popup with only an Email field, or use the "Test Settings" button they will only pass the email address.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/56853
          https://sumome.zendesk.com/agent/tickets/67340


          Double Opt In vs Single Opt In

          Customers using our ESP integrations will occasionally ask why not all of of their subscribers are being added to their Mailchimp list. Once you have confirmed that they have connected to Mailchimp, and a list is selected, you will next want to make sure they have Double Opt In disabled. Having this enabled will require their subscribers to take an extra step before being added to their Mailchimp list, and will reduce the amount of subscribers passed by nearly 50%.

          Advise them to disable Double Opt-In if this is a concern of theirs.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/102076
          https://sumome.zendesk.com/agent/tickets/84530


          Aweber Double Opt-In

          In relation to the common issue above, some of our Aweber customers may have a similar issue. However, they cannot edit their Double Opt In settings within Sumo.

          As of 2014, AWeber has begun to allow users to remove Double Opt-in, and they will now enable Single Opt-in through their API on a case by case basis.

          If a customer wants to have their account and lists enabled for this, they would need to contact AWeber through their online form:

          https://www.aweber.com/contact-us.htm

          Alternatively, they can email help@aweber.com, and tell them they want to enable single opt-in for their lists for use through their API. AWeber will then either approve or deny the request after they review the customer’s account.

          Once single opt-in has been enabled all of the customer’s email signups will pass directly to their Aweber list.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/14039


          Customer wants to pass UTM parameters to their ESP

          Every once in a while you will see a customer that wants to parse the query parameters out of the URL their visitor subscribed through a Sumo form on, and pass that data to their ESP.

          If the customer wants to pass the UTM params to his ESP, or just collect them in his CSV, he can use the following hidden field values:

          In the event you would like pass the UTM Campaign, you would create the variable value {query_utm_campaign}.

          In the event you would like pass the UTM Medium, you would create the variable value {query_utm_medium}.

          If you would like pass the UTM Source, you would create the variable value {query_utm_source}.

          It is important to note that the variable names created within Sumo must match the fields in their ESP.

          If they want to pass the UTM values from a referrer URL, they will need to pass the {referrer} value in the hidden field. unfortunately those UTM values won't be parsed in the referrer value though, and they will only have the option to pass the entire referrer URL.

          **IMPORTANT: Our {query} hidden fields will work for any query parameter in the customer’s URL**

          For example, if a customer had the URL below:

          http://www.mysite.com/contact-us?fromSumo=true

          They would create the hidden field value below to pass “true” to their ESP:

          {query_fromSumo}

          Essentially, put the query parameter after “query_” in the hidden field in order to successfully pass the param.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/66414


          Helpful Links:

          https://docs.google.com/spreadsheets/d/1oOi7Mj7o-Qwn6yO8fowCNACcOgONSLDzBlsGxsX-bLE/edit#gid=0

          https://docs.google.com/spreadsheets/d/1bWzI2blKpoY-h_0CZAX7QsqFDtfgBu33qhBcYrpXI1Q/edit#gid=0

          https://help.sumo.com/hc/en-us/articles/218486798-Integrated-Email-Service-Providers


          CERTIFICATION EXAM:

          https://docs.google.com/forms/d/e/1FAIpQLSdTssT6WrL9xhTaDLtlHAbhEkXn-OKFpexLbsCqFAaDJG1-Tw/viewform
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
