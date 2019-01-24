<template>
  <div class="page">
    <h1>Basic Troubleshooting</h1>
    <div class="wrapper">
      <div class="item">
        <p>

          UNIT: BASIC TROUBLESHOOTING

          As a Sumo support engineer, you will be required to setup testing environments on the fly.

          In this unit, we will be going over basic troubleshooting techniques that will help you solve a majority of the issues you will encounter in your cases.

          Get pumped!

          Troubleshooting Process

          Something common that users will write in with is:

          "&lt;X&gt; feature in Sumo is not working when I try to use it."

          When investigating these types of issues, some general troubleshooting processes should be followed.

          Make sure you understand the issue

          If you aren't 100% certain that you understand the issue the user is having, don't guess -- ask for clarification. You don't want to spend time solving an issue the user is not having.

          Sometimes users will not provide you with all of the information you need to troubleshoot as well as you can.  You need to accurately judge whether or not you can come up with a solution with what you've been provided.  Here are some valuable pieces of info that will help troubleshoot most issues:

          Exact URL to a page on the user's website where the issue is happening
          A full-browser screenshot (including the address bar) showing the issue
          A screencast video showing the issue in action (useful for issues that aren't best illustrated via static images)
          Full list of steps to reproduce the issue
          If this is a mobile-specific issue, which OS version + browser + device the issue is happening on

          If you're going to spend a response asking for additional information, make sure to ask for anything you'll need up front.  Spending multiple responses gathering more info tends to aggravate people, affecting satisfaction.

          If the user presents no information on the issue (e.g. Offline Chat tickets saying "Help"), use the macro: Apps::Troubleshooting::Need more info.

          If the user presents some information but not enough, use the macro:

          Apps::Troubleshooting::Need more info and tailor the response to fit the situation.

          Try to reproduce the issue

          This is an important step, because it will help determine whether the issue is a global one (affects all users), or a local one (affects only this user, or a smaller subset of users).  Global issues are prioritized higher than local issues when fixing issues.

          Reproduce the issue on the user's website

          This assumes that the user has Sumo installed on their website currently.  Go to their website and test to see whether you encounter the same issue the user is writing in about.  If they've already provided you with steps to reproduce it, follow them. If not, create a list of steps yourself and write those steps down in case the issue needs to be escalated later.

          If you're unable to reproduce the issue, it's likely local to the user's specific setup (browser, computer, network).  In that case use the Apps::Troubleshooting::Can't reproduce issue macro.

          Reproduce the issue on a test site

          If you were able to reproduce the issue on the user's website, try checking the same issue on a separate test site.  If you have your own website you can test on, this is ideal.  If not, you can use https://sumo.com/demo/site/SITE_ID_GOES_HERE to test with.  Example:

          https://sumo.com/demo/site/1afac5f05ae39db1dfaf5a511d9fe0480cc42e2e0737311facc7b6b5e57c9d1c

          If you are able to reproduce the issue on your test site, then you know this is a global issue.  Escalate the ticket to Level 2 (if you're a Level 1 agent).  If you're a Level 2 agent, when making a bug report you now know whether the issue is global or local.

          Determine if the issue is caused by Sumo by blocking Sumo from loading

          This is a great tool to use when the user sees an issue on their site, and wants to know if Sumo is causing it.  First, verify the issue is happening as they've explained on their site.  If you're able to confirm that, go ahead and block Sumo from loading via the Chrome extension and check again.

          If the issue persists when Sumo is blocked from loading, then the issue is not caused by Sumo.


          Come up with a solution and present it

          If the issue isn't a bug and just requires some explanation, look to see if the solution already exists as a Common Issue.  Make liberal use of screenshots and/or screencast videos to illustrate the solution.  This makes it much easier for people to digest, and increases overall satisfaction.

          Check the Common Issues for a solution

          Start Here:
          https://sites.google.com/appsumo.com/cx-process/support/common-issues?authuser=0

          You can see a brief description of each issue in the top-level page
          e.g. on the Common Issues top-level page, you can see a brief description of each issue in the Billing section

          Go to the appropriate section

          (e.g. Product > List Builder for issues with Click Triggers)

          Make sure the "situation" lines up with the issue the user is having
          Follow the troubleshooting steps there to come up with an appropriate solution

          Solutions using general product knowledge

          Not all issues can be solved via the Common Issues troubleshooting section.  Some require you to know the product well enough to provide a custom response to the user.  Be prepared to utilize your knowledge of the product to provide a solution.

          For example, a user writes in asking what the differences between two different Sumo Pro plans are.  You should be able to use the resources available (Pricing page and our Help Center article on Pricing plans) to come up with an answer to their question.

          Solutions using Help Center articles

          Sometimes users will write in looking for information that's already available in our Help Center articles.

          Example: "How can I create a List Builder form?"

          In this case, you can simply send a simple response explaining what they're looking to accomplish directly from the article, and accompany that with a link to the article for reference.

          Additional Concerns/Tools:

          Isolating The Issue

          When testing an issue that a customer is having, it’s important to isolate the cause of the issue. It is bad form to escalate a case where you can identify there is an issue, but multiple variables are still in play that cause a senior agent to spend time isolating the root cause.

          Some things to consider before escalating:

          Make sure you are certain of the form/app that is affecting by this issue - make sure variants aren’t being displayed
          Console errors being reported are pertinent to the issue, and there are no other console errors not related to Sumo that could be an indication of another issue.
          The issue is present with or without Sumo installed
          The Sumo installation is correct

          The idea is to make sure you have done diligence and nothing else can be causing the issue the customer is experiencing except your hypothesized cause.

          Injecting SiteIDs

          An effective functionality offered in the Sumo chrome extension is being able to inject SiteIDs into your site.

          In order to do this, first “Block Production” of Sumo on your site if you currently have Sumo running on your site, then click “Auto Inject (Staging).”

          This will allow you to inject the SiteID of your customer’s Sumo installation on to your site.

          Why is this helpful? Because if you want to quickly determine if an issue a customer is experiencing is being caused by their site or by Sumo, if you inject the SiteID on to your site and the issue still appears, the customer’s individual site is very likely not the cause of the issue.

          Google Chrome Dev Tools Console

          Developer Tools in Google Chrome is one of the most useful tools in the Sumo Support Engineer’s bag of tricks.

          In order to open this up, first view a site in Google Chrome and click COMMAND + OPTION + i (F12 in Windows)

          Dev tools will allow you to view a site’s source code, view network requests, view event listeners, edit a site’s CSS, and quickly see a website’s assets - all can be extremely helpful when troubleshooting a site.

          SiteID Detection

          By clicking the Sumo Chrome extension, the selecting Get SiteID(s) from the dropdown menu, you can see the SiteID(s) currently installed on the customer’s site.

          Quirks Mode detection

          By clicking the Sumo Chrome extension, the selecting Detect Quirks Mode from the dropdown menu, you can see if the customer’s site is in Quirksmode. You can find more about that below:

          https://help.sumo.com/hc/en-us/articles/218478408-Sumo-Display-Issues

          Quirks Mode sets your browser to support older standards and jQuery does not work correctly when a page is rendered in Quirks Mode.

          In most cases, if a customer is using this DOCTYPE or one similar to it, the site will be rendered in Quirks Mode, which will cause Sumo to not work correctly:


          <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">


          Article Detection

          By clicking the Sumo Chrome extension, the selecting Detect Articles from the dropdown menu, you will be able to see the articles being detected by Sumo on a customer’s site.

          Alternatively, you can select “Debug Mode” from the extension’s dropdown menu, then paste __smArticles.findAll() into the Dev Tools console. An array of articles being detected by Sumo will be returned in the console. Simply click the article in the console in order to view the exact element on the customer’s site that Sumo is recognizing as the article.

          DOCTYPE Detection

          By clicking the Sumo Chrome extension, then selecting Get DocType from the dropdown menu, you will be able to see the exact DOCTYPE in the site’s source code.

          This is especially helpful if you suspect a customer’s DocType is forcing the site to be rendered in Quirks Mode.

          SiteID Placement

          You can view the location of the Sumo installation code by viewing the site’s source (Command + Option + u in Google Chrome on a Mac), and searching for ‘sumo’ (Crtl+U in Windows)

          View GTM SiteID

          Viewing the installation code within a GTM tag can be a bit tricky, but definitely doable. In order to do this:

          First view the site’s source code (Command + Option + u )
          Search for “GTM” in the site’s source code

          Enter the GTM ID into the end of the URL below:

          https://www.googletagmanager.com/gtm.js?id=GTM-IDHERE

          Search “Sumo” and copy paste the SiteID (ignoring ‘x22’ in the front of the ID).

          CSS issues (basic)

          You can view the CSS files on a customer’s site by:

          Opening up Google Chrome Dev tools (COMMAND + OPTION + i)
          Clicking on “Sources”
          Delete .css file contents (one by one)
          If fixed, it’s the site’s CSS

          More on this in CSS troubleshooting

          Event Listeners

          You can view the event listeners on a customer’s site by:

          Right clicking (or CTRL + click on mac) on the element that is not responding (Ctrl+Shift+ I on windows)
          Select “Event Listeners” in the right hand side of the dev tools console.
          Select “Click”
          Select “Remove” next to listener you think is the issue .

          If after being removed, the issue is resolved, the customer will need to remove that event listener from their site.

          Network Tab

          Useful for troubleshooting GTM and Pixel issues, as well as viewing POST variables sent on redirect in our forms.

          Can be viewed by:

          Opening up Google Chrome Dev tools (COMMAND + OPTION + i)
          Clicking on “Network”

          Mobile View in Dev Tools

          Although not always a true representation of what would be experienced when viewing a site on a mobile device, this can be helpful if you can replicate an issue on a mobile device. For example, checking a site’s mobile source code or inspecting an element.

          Can be viewed by:

          Opening up Google Chrome Dev tools (COMMAND + OPTION + i)
          Clicking on the device icon to the left of “Elements”

          Pixel Troubleshooting (console.log)

          The console.log(); is a great way to determine if our pixels are firing properly, and rule out a malfunction on Sumo’s side. Just drop that hot fire in between a pair of script tags in a subscribe, tracking, or click pixel text area and check the console on one of those events, and you should see the output of your console.log();

          Example use case:

          Paste the following in the tracking pixel text area of the form:


          &lt;script&gt;
             console.log(“TRACKING PIXEL FIRING”);
          &lt;/script&gt;


          Trigger the popup on the site
          View the console (COMMAND + OPTION + i and click “Console”), and look for “TRACKING PIXEL FIRING”
          If you see “TRACKING PIXEL FIRING” the pixel is working properly. If you do not, the pixel functionality is not working properly.

          Referrer  (document.referrer)

          Not sure if our Referrer Display Rule is working properly or not? No worries, just simulate the path a visitor would take in order to trigger the display rule, and type “document.referrer” into the console and click enter/return. The console will then return what the browser is recording as the referrer URL.

          Common Issues

          More Than One Instance of Sumo is Loading on Site Error

          When troubleshooting a customer’s site, you will sometimes see the error, “More Than One Instance of Sumo is Loading on Site”

          This is generally an indication that the customer has more than one Sumo installation code within their site’s source code.

          When this is the case, you will need to inspect the customer’s source code, and direct them to remove the redundant installation code on their site.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/42655


          Share Bar Is Not Displaying Properly

          It is common to see customers writing in, saying that their Share Bar is not displaying exactly where they want it to on their page after selecting a placement in relation to an article within the “Layout” tab of Share.

          By clicking the Sumo Chrome extension, the selecting Detect Articles from the dropdown menu, you will be able to see the articles being detected by Sumo on a customer’s site, and give them a bit better insight as to why the bar is displaying where it is displaying.

          Alternatively, you can select “Debug Mode” from the extension’s dropdown menu and pasting __smArticles.findAll() into the Dev Tools console, and array will be returned with the articles being detected by Sumo. Simply click the article in the console in order to view the exact element on the customer’s site that Sumo is recognizing as the article.

          Once you know what articles are being detected by Sumo, you can give the customer directions on how to change which articles are being detected.

          More on this in later lessons.

          Referrer Display Rule Not Functioning Properly

          It is common to see customers writing in saying our display rules are not functioning properly. One of which is the Referrer Display Rule.

          Generally when this is the case, you will want to ask the customer for the exact URL they are getting to their site from, then type ‘document.referrer’ into the Google Chrome Dev Tools console after being directed to the customer’s site.

          This will give you the referrer URL the browser is detecting, and will give you good insight as to why the rule may not be working properly.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/37592


          Event Listeners Interfering With Sumo

          Sometimes when viewing the Sumo dashboard on a customer’s site, you will be unable to click on certain links within the dashboard, such as “Edit,” the form’s name, the “Stats” tab, etc.

          When this is the case, generally what is happening is there is an event listener blocking the Sumo click function.

          You can view the event listeners on a customer’s site by:


          Right clicking (or CTRL + click on mac) on the element that is not responding
          Select “Event Listeners” in the right hand side of the dev tools console.
          Select “Click”
          Select “Remove” next to listener you think is the issue .

          If after being removed, the issue is resolved, the customer will need to remove that event listener from their site.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/66707


          Helpful Links:

          https://sites.google.com/appsumo.com/cx-sup-wiki/common-issues/troubleshooting
          https://support.google.com/chrome/answer/157179?hl=en

          CERTIFICATION EXAM:

          https://docs.google.com/forms/d/e/1FAIpQLSdjnu7vY0q6ntOujILORJXbIy-EfhrpBda-RrRzPACc63Nokg/viewform


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
