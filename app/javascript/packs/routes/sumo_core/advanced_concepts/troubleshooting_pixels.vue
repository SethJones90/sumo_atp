<template>
  <div class="page">
    <h1>Troubleshooting Pixels</h1>
    <div class="wrapper">
      <div class="item">
        <p>
          UNIT: TROUBLESHOOTING PIXELS

          Pixels may seem like a bit of a black magic at first, but no need to worry, the concept of a pixel is actually a simple one.

          This would probably be considered more of an advanced topic, but this is something you will see frequently nonetheless, so it is important to be aware the mechanics of pixels, at a basic level, in order to properly assist your customers.

          So what are we waiting for? Nothing to it, but to do it!

          What is a tracking pixel?

          A tracking pixel (also called 1x1 pixel or pixel tag) is a graphic with dimensions of 1x1 pixels that is loaded when a user visits a website or opens an email, and is used to track certain user activities.

          With a tracking pixel, you can acquire data for online marketing, web analysis or email marketing.

          Because a tracking pixel is a graphic that mostly has dimensions of only 1x1 pixels, it can hardly be seen by visitors of a website or email recipients. These tracking pixels are partly or fully designed to be transparent, or camouflaged in the background color of the website so that they don't stand out to users. Users are usually not supposed to see the tracking pixel. The focus is mainly on the processes that are initiated by downloading the tracking pixel.

          The website operator or sender of an email adds the tracking pixel using a code in the website’s HTML code or email. This code contains an external link to the pixel server. If a user visits the destination website, the HTML code is processed by the client – usually the user’s browser. The browser follows the link and opens the (invisible) graphic. This call is registered and noted in the server’s log files.

          In addition, various information about the user is also transmitted using this method. To some extent, combination with JavaScript is necessary in order to collect information about the operating system or browser type.

          The following data can be acquired and analyzed with a tracking pixel.

          operating system used (gives information on the use of mobile devices)
          Type of website or email used, for example on mobile or desktop
          Type of client used, for example a browser or mail program.
          client’s screen resolution
          time the email was read or website was visited
          activities on the website during a session (when using multiple tracking pixels)
          IP address (gives information on the Internet Service Provider and location)

          What is a conversion pixel?

          In the previous section, we discussed what a pixel is, and how it works in the tracking pixel context.

          You have probably gathered that the definition of pixel depends on the context it’s being used in. In this section, we’ll focus on the conversion pixel, a code a customer can paste into a form or thank you page, for example, to be sure the user completed the action you had determined.

          A conversion pixel is a JavaScript code usually created within the service the tracking pixel  information is being sent to (i.e. Facebook or Google).

          What does ‘conversion’ mean?

          A ‘conversion’ is when the user takes a relevant action on an Internet channel. The conversion varies according to the goal of each strategy, such as:

          Filling out a subscription form
          Watching a video
          Sharing your post on social media
          Making a purchase
          Clicking on a call to action

          The term, ‘conversion’ is broad and depends a lot on the action you want your visitor to take. From the moment a customer does what you wanted them to, you can call it a conversion.

          So how does the conversion pixel code work?

          The pixel code is used to track actions that users on your website are taking. This means that the conversion pixel can show you actions such as redirection to other pages, an additional product added to the cart, or a product actually bought -  the information tracked and sent depends entirely on how the creator of the pixel designed it (generally services like Facebook and Google).

          This tracking is only possible because of the invisible image added to your website when you inserted the conversion pixel. What happens is that, every time someone performs the action there’s a conversion pixel acting, the invisible image sends a message to the server of the service that created the pixel.

          After these messages are sent, you can have access to information sent to the service - generally within the service itself (i.e. Facebook or Google).

          Why use a pixel?

          If you’re an entrepreneur/business owner, you know how important it is to measure everything you do for your investment to grow more and more. So, having a better understanding of how people act when visiting a site or interacting with a Sumo form is a very efficient way to quantify your ROI.

          From the moment you start measuring your campaign/form results, it will be possible to come up with strategies to spend less/more efficiently, thus increasing your profits.

          Sumo pixels

          So, we have already discussed the mechanics of both the tracking pixel and the conversion pixel. What does this have to do with Sumo? Glad you asked.

          Sumo allows for three separate events to be tracked in the Success tab of the form of your choice - tracking, subscribe, and CTA.

          More on these below:

          Tracking = when the form is displayed
          Subscribe = when a visitor subscribes through the form
          CTA = when a visitor clicks a CTA button on the form

          In other words, Sumo simply executes javascript placed within the "Tracking Pixel," "Subscribe Pixel," or "Click Pixel" text areas upon the popup displaying (Tracking Pixel), user subscribing via your Sumo popup (Subscribe Pixel), or user clicking the CTA button within your popup (Click Pixel)

          That being said, whatever javascript you write will fire upon one of those three events. Sumo does not alter the javascript in any way.


          Facebook

          https://help.sumo.com/hc/en-us/articles/115003801888-Using-Facebook-pixels-in-Sumo

          Google

          https://help.sumo.com/hc/en-us/articles/218672138-Tracking-Pixel-Google-Analytics

          Troubleshooting Pixels

          When troubleshooting pixel issues, a quick way to determine if the Sumo functionality is working properly is to insert a console.log(), window.alert(), or create a cookie within the pixel text area in Sumo.

          When everything is in working order, any javascript you write will be fired on one of three events - Tracking, Subscribe, or CTA, depending on which area you place the javascript in.

          Paste any of the following scripts within the pixel text areas to quickly determine if Sumo is working properly. If the javascript fires on the proper event, the issue is most likely not on the Sumo side.

          Console.log:


          &ltscript&gt;
             console.log(“TESTING SUMO PIXEL”);
          &lt/script&gt;


          The console.log() method will display whatever you place within the parentheses of the console.log in your Google Chrome Dev Tools console - in the example above it is the string, “TESTING SUMO PIXEL”

          Window Alert:


          &ltscript&gt;
            window.alert(“TESTING SUMO PIXEL”);
          &lt/script&gt;


          The window.alert() method will display whatever you place within the parentheses of the window.alert in an alert box - in the example above it is the string, “TESTING SUMO PIXEL”

          ** note: it is generally better to use console.log because the window alert will be visible to the site’s visitors, and that is not always optimal.

          Set A Cookie:


          &ltscript&gt;
             document.cookie =”name=sumo”;
          &lt/script&gt;


          You can also choose to issue a cookie when on a certain event. This is a bit more time consuming, since you will need to navigate to the network tab of dev tools in order to view it, but if you need to quickly test a cookie, this is a quick way to set one on a visitor’s site. However, for debugging purposes, you are most likely better off with console.log or window.alert.


          In the event that you need to perform a more thorough inspection, you will need to inspect the Network tab to see if the pixel the customer has pasted into Sumo is actually firing.

          &lt/example&gt;

          Common Issues

          Pixel is not firing

          A common issue you will see is a customer writing in, saying their pixels are not firing, but they know it’s correct.

          When troubleshooting pixel issues, a quick way to determine if the Sumo functionality is working properly is to insert a script with an expected output into the Tracking, Subscribe, or CTA text areas in Sumo.

          Console.log(), window.alert(), or setting a cookie will all work fine.

          When everything is in working order, any javascript you write will be fired on one of three events - Tracking, Subscribe, or CTA, depending on which area you place the javascript in.

          More on this in later units.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/83534


          Does Sumo alter my javascript in pixel text areas?

          You will commonly get the question, “does Sumo alter my javascript in pixel text areas?” The answer is no. Sumo will fire whatever javascript is placed within the text area without any alteration.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/15416


          Which pixel do I use?

          Sometimes customers are confused which pixel they need to use - Tracking, Subscribe, or Click Pixel. The answer depends on what the customer wants to accomplish.

          Sumo simply executes javascript placed within the "Tracking Pixel," "Subscribe Pixel," or "Click Pixel" text areas upon the popup displaying (Tracking Pixel), user subscribing via your Sumo popup (Subscribe Pixel), or user clicking the CTA button within your popup (Click Pixel)

          Whatever javascript you write will fire upon one of those three events. Sumo does not alter the javascript in any way.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/87347


          Do pixels work in custom forms?

          Only the tracking pixel will work in Custom Forms.

          When a using a Custom Form, a good deal of behavior in our templates is not available. Some examples of missing functionality are below:

          ESP integrations
          Conversions and Views Stats within the Forms Tab or List Builder
          Stats in the Stats tab of List Builder
          Use of Conversion and Click Pixels
          Emails being passed to a downloadable CSV file

          It is important to let a customer know that this is the case if they are confused as to why these functionalities are not available to them when using a Custom Form.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/57051

          Wrong GA tracking pixel code being used

          One common issue you will come across is when customers have not setup the proper Google Analytics Tracking Pixel.

          Many times they will forget to add the analytics.js method above the last three lines in the example below. For reference, this is what their tracking pixel should look like:


          &ltscript&gt;
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-4030315-2', 'auto');
          ga('send', 'event', 'WelcomeMat01', 'Displayed', 'Sumo');
          &lt/script&gt;


          And their subscribe pixel should look like the following:


          &ltscript&gt;
          ga('send', 'event', 'WelcomeMat01', 'conversion', 'Sumo');
          &lt/script&gt;

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/15939
          https://sumome.zendesk.com/agent/tickets/82914


          Helpful Links

          https://help.sumo.com/hc/en-us/articles/115003801888-Using-Facebook-pixels-in-Sumo
          https://help.sumo.com/hc/en-us/articles/218672138-Tracking-Pixel-Google-Analytics

          CERTIFICATION EXAM:

          https://docs.google.com/forms/d/e/1FAIpQLSdBn1ECcvD3gcYgYg1t7qJl-6L4Xmz1tOXP-z_C5aAUBAbd3Q/viewform


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
