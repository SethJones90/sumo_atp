<template>
  <div class="page">
    <h1>FormSync Custom & Forms</h1>
    <div class="wrapper">
      <div class="item">
        <p>
          UNIT: FORMSYNC/CUSTOM FORMS

          While Sumo does integrate with a number of Email Service Providers out-of-the box, there will be cases where customers want to integrate with services not currently directly  integrated with Sumo.

          When you run into these types of requests, you have two options.

          Recommend they try Zapier

          Zapier is an online automation tool that is used to connect apps. You can connect two or more apps to automate repetitive tasks without coding or relying on developers to build the integration, or move info between your web apps automatically.

          For example, you could setup a “zap” to automatically pass email addresses collected within Sumo to an email service provider not currently directly integrated with Sumo.

          Because Sumo is directly integrated with Zapier, this is often a great option.

          2) When Zapier is not a viable option for the customer, you have the option to recommend our FormSync feature if the customer’s desired ESP provides custom forms.

          Alright, you’re a FormSync master! Next lesson… kidding.

          Fasten your seatbelts, kids. It’s going to be a bumpy ride (also kidding, hopefully).

          What is a FormSync?

          FormSync works by taking a form from an email service provider and "syncs" Sumo to it when visitors subscribe.

          Sumo collects a visitor’s Email and additional fields with its apps then it writes those to the Sumo "Form" through FormSync. Sumo then submits the form to pass that information to the email service.

          FormSync is not a way to import customized forms to be displayed with Sumo. It is a way to map Sumo apps to a form, using Sumo as the front-facing opt-in that a site’s visitors will see.

          FormSync does not currently support dynamic fields, only static fields.


          Your Form:
          Pushes collected information to your service
          Has an Email field
          Can have additional fields (optional)

          Sumo:
          Collects Email
          Collects any additional fields
          Takes these fields and syncs them to your form.

          Setting Up FormSync:

          First, you'll need an opt-in form provided by your email service provider. Once you have that, here's how to add it into Formsync:

          Log into Sumo

          Open the Launcher Settings menu at the top-right of the Launcher and select Settings

          Click on the Integrations tab at the top

          Click the "Connect" button

          Enter your form code into the top section

          Select the email field from your form

          Custom Forms:

          Not to be confused with FormSync, Custom Forms are a functionality that can be found within the “My Goal” tab in your List Builder form. Custom forms, unlike FormSync are meant to be the front facing form, and can only contain HTML and CSS (no JavaScript). Custom Forms also bypass the majority of Sumo's functionality aside from popup behavior and Display Rules.

          Similarly, any integrated Email Service Providers you're using will not function and the customer will need to implement integration into your form.

          Redirect Hack

          By default, FormSync will redirect to whatever page has been specified within the ESP you are connecting with. This can be undesirable, as it tends to disrupt the user’s user experience a bit.

          Because of this, we have created a “hack” that bypasses the redirect URL by opening it in an invisible iframe instead of the current window.

          In order to set this up, add the line below to the opening form tag of the ESP’s form.


          target="sumo-hidden-magic"


          Then add iFrame (below) directly above closing form tag:


           <iframe id="sumo-hidden-magic" name="sumo-hidden-magic" style="width:0;height:0;border:0;border:none;"></iframe>


          To understand this a bit better the target attribute specifies a name or a keyword that indicates where to display the response that is received after submitting the form.

          And an iframe (short for inline frame) is an HTML element that allows an external webpage to be embedded in an HTML document. Unlike traditional frames, which were used to create the structure of a webpage, iframes can be inserted anywhere within a webpage layout.


          Common Issues:

          Customer doesn’t see their ESP in list of integrations

          One of the most common reasons for using FormSync or Zapier is that the customer does not see their Email Service Provider within our list of integrated service providers below:

          https://help.sumo.com/hc/en-us/articles/218486798-Integrated-Email-Service-Providers

          When this occurs, simply let the customer know about their options. They could potentially use Zapier, FormSync, or even a Custom Form.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/118171
          https://sumome.zendesk.com/agent/tickets/110100


          Customer doesn’t want FormSync to redirect on success page

          While our FormSync integration is awesome, and provides the ability for customers to connect to ESPs not on our integrated email service provider list, many of our customer would prefer for their customers to be redirected to a thank you page after a successful form submission.

          This generally is configured within the customer’s ESP, and in most cases cannot be disabled.

          When a customer writes in looking to bypass this functionality, you should suggest our “Redirect hack” or “FormSync hack”

          In order to set this up, add the line below to the opening form tag of the ESP’s form.


          target="sumo-hidden-magic"


          Then add iFrame (below) directly above closing form tag:


           <iframe id="sumo-hidden-magic" name="sumo-hidden-magic" style="width:0;height:0;border:0;border:none;"></iframe>


          It is important that you test this before providing it as a solution to the customer. This works with many ESPs, but not all of them.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/63418


          Mixed content (https error)

          When testing a FormSync integration after implementing the “Redirect Hack” it’s common to see that emails are not passing to FormSync, even though prior to setting up the hack, everything was working properly.

          This is generally because the customer’s site is an https site, but the URL within the customer’s form action (in the ESP’s form) is http.

          If you open up the console, and see an error similar to the one below, you will need to advise the customer to change the URL within their form to an ‘https’ address.


          `Mixed Content: The page at 'https://mysite.com/milestones/' was loaded over HTTPS, but contains a form whose 'action' attribute is 'http://www.esptesting.com/'. This form should not submit data to insecure endpoints.`


          My custom form isn’t working - javascript

          Our custom form is great for customers who want to completely customize their form’s look and functionality with HTML and CSS. However, our Custom Forms will not support javascript, and if javascript is included in the form, it will not work properly.

          In the event that a customer writes in saying the Custom Form they are using is not displaying or functioning properly, you should check the form for javascript. If it is present, they will need to remove it.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/70848


          Custom form bypassing behavior (visibility/display rules)

          Another common issue you may see with Custom Forms are certain functionalities “missing” or “not working properly”

          When a using a Custom Form, a good deal of behavior in our templates is not available. Some examples of missing functionality are below:

          ESP integrations
          Conversions and Views Stats within the Forms Tab or List Builder
          Stats in the Stats tab of List Builder
          Use of Conversion and Click Pixels
          Emails being passed to a downloadable CSV file

          It is important to let a customer know that this is the case if they are confused as to why these functionalities are not available to them when using a Custom Form.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/26083
          https://sumome.zendesk.com/agent/tickets/16272


          Helpful Links

          https://docs.google.com/document/d/1MMUL2gQNe5hhsK6vVWa62T1XExWP53r1OU5plx085g4/edit

          https://help.sumo.com/hc/en-us/articles/218486798-Integrated-Email-Service-Providers

          https://help.sumo.com/hc/en-us/articles/219012397-Using-Custom-Code-with-List-Builder-Forms

          CERTIFICATION EXAM:

          https://docs.google.com/forms/d/e/1FAIpQLSfRuXPzROpxcq9VKqPN_C1qk6DZiSZiFXAYiwbZ9txSz6WPIw/viewform

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
