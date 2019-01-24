<template>
  <div class="page">
    <h1>Cookies</h1>
    <div class="wrapper">
      <div class="item">
        <p>
          UNIT: COOKIES

          Most likely when you think of cookies, you think of chocolate chip, peanut butter, and oatmeal, but in this case, although unfortunate, we are referring to a different type of cookie.

          An HTTP cookie (also called web cookie, Internet cookie, browser cookie, or simply cookie) is a small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing.

          Alright, now that that’s cleared up, let’s do this!

          Om Nom Nom Nom!

          What Sumo Cookies Do

          Sumo uses cookies to control many different things in users browsers. These cookies control everything from determining if a visitor is opted-out of a certain popup to telling Sumo whether or not to display a Welcome Mat or Smart Bar.  Once a user has seen your popup, until this cookie expires they will not be able to see it again (depending on your settings).

          Types of Sumo Cookies

          __smShown
          The __smShown cookie is set when any of the List Builder, Welcome Mat, Scroll Box or Smart Bars are shown on your website. If you have any of your Popups/Mats set to "Don't Show to a visitor until X days have passed", and Sumo detects this cookie in the visitors browser, it will not show that certain Popup/Mat.

          This cookie is unique to the email apps and will display in your browser cookie list like this:

          __smListBuilderShown
          __smSmartBarShown
          __smScrollBoxShown
          __smWelcomeMatShown

          __smOptOut
          The __smOptOut cookie is set when a visitor clicks an "Opt-Out" button on any of the List Builder, Welcome Mat, Scroll Box or Smart Bars they are shown on your website. If you have any of your Popups/Mats set to "Hide From Users Who Opted Out", and Sumo detects this cookie in the visitors browser, it will not show that certain Popup/Mat.

          This cookie is unique to the email apps and will display in your browser cookie list like this:

          __smListBuilderOptOut
          __smSmartBarOptOut
          __smScrollBoxOptOut
          __smWelcomeMatOptOut

          __smSubscribed
          The __smSubscribed cookie is set when a visitor subscribes via any of the List Builder, Welcome Mat, Scroll Box or Smart Bars they are shown on your website. If you have any of your Popups/Mats set to "Not Show To Users Who Already Subscribed", and Sumo detects this cookie in the visitors browser, it will not show that certain Popup/Mat.

          __smUser
          The __smUser cookie is set when you login to Sumo on your website and the cookie value is your User ID

          __smToken
          The __smToken is set once you login to Sumo and is checked to verify whether you are logged into Sumo or not.

          __smDashView
          The __smDashView cookie restores the same tab you were last in when you go back into the "Dashboard" app. For example, if you close the Dashboard app while in the "Subscriber Stats" tab, the next time you open the app, the cookie will allow the app to be opened in the exact tab you were last in.

          __smVID
          The __smVID cookie stores a unique visitor ID, which is available within a session. This is used to discern, whether page views on a site should be attributed to one or many users (i.e. whether 4 page views were 4 users, or 1 user who viewed 4 pages)

          The __smVID cookie is also used for the live chat app, so Sumo can keep a chat session going as the user traverses within a website.

          Common Issues

          HTTP only cookies

          When checking cookies on a user’s site, it is important to verify that these cookies are not HttpOnly. This can be verified within the Application tab of Google Chrome Dev Tools.

          HttpOnly cookies cannot be accessed at all by Sumo via JavaScript. A customer will need to change the cookie to not be HttpOnly if they want it to be trackable by Sumo.

          HttpOnly cookies can only be used when transmitted via HTTP (or HTTPS). They are not accessible through non-HTTP APIs such as JavaScript. This restriction eliminates the threat of cookie theft via cross-site scripting (XSS), while leaving the threats of cross-site tracing (XCT) and cross-site request forgery (CSRF) intact.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/15763


          Cookie only being checked on page load

          Another important thing to note about troubleshooting the functionality of Sumo and a customer’s site’s cookies, is that Sumo Display Rules will only run their check to see if the conditions are met or not for a form to display on page load. This means that if a cookie is issued after a button is clicked, for example, Sumo will not be able to detect that cookie until the page is reloaded.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/22353

          Setting a cookie/in a pixel

          In addition to a customer being able to set cookies on their end, if the customer wants a cookie to be issued on Sumo popup event, this is also possible.

          To quickly recap the events that Sumo monitors with its pixels, Sumo has the ability to execute javascript placed within the "Tracking Pixel," "Subscribe Pixel," or "Click Pixel" text areas upon the form displaying (Tracking Pixel), user subscribing via your Sumo form (Subscribe Pixel), or user clicking the CTA button within the popup (Click Pixel)

          Whatever javascript a you or a customer writes write will fire upon one of those three events, depending on where the javascript is placed. Sumo does not alter the javascript in any way.

          In order to have a cookie set on one of the three events above, you will need to paste javascript similar to the following within one of the three pixel text areas:

          &lt;script&gt;
              document.cookie = "formShown=true";
          &lt;/script&gt;

          Example tickets:
          https://sumome.zendesk.com/agent/tickets/44151
          https://sumome.zendesk.com/agent/tickets/33410
          https://sumome.zendesk.com/agent/tickets/120257


          Helpful Links

          https://help.sumo.com/hc/en-us/articles/115004671147-How-Sumo-Cookies-Work
          https://help.sumo.com/hc/en-us/articles/218680998--Display-Rules

          CERTIFICATION EXAM:

          https://docs.google.com/forms/d/e/1FAIpQLScM4fbk4e-4ITnpmRKVvMqjKN-Ok40_TWp19vKSgYSHCachpg/viewform


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
