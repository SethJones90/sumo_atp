<template>
  <div class="page">
    <h1>Display Rules/Behavior</h1>
    <div class="wrapper">
      <div class="item">
        <p>

          UNIT: DISPLAY RULES/BEHAVIOR

This unit covers some of Sumo’s most important functionality  - specifically Display Rules and Form Behavior.

In order to truly understand the mechanics of how a Sumo app is configured to appear on a customer’s site, you must have a firm understanding of the intricacies of both Display Rules and Behavior.

Let’s get after it!

Sumo Display Rules

Display Rules are rules that determine where various Sumo Apps will display on your site. The behavior of a Sumo app is split between Show and Don't Show rules.These rules can be set independently of one another, or set in conjunction with another to create more advanced conditional rules.

It's important to note that Don't Show rules will always win if there is a conflict. Display Rule options are the same for Show and Don't Show rules. However, they will have the opposite effect.

Some more information about this at the link below:

https://help.sumo.com/hc/en-us/articles/218680998--Display-Rules

Basic Settings

When/Where

This option allows you to choose when your form displays.

In Popup form types, you can choose between displaying the form as a visitor leaves the website, or on a timer. You can also choose the frequency in which your visitors see your forms.

List Builder's  behavior "User Leaves” sets the form to display as a visitor is a leaving a website.

This takes into consideration a site’s users’ behavior and will appear if the user is attempting to leave the site. If a user lands on a page but clicks on a link and traverses WITHIN the site, the "User Leaves" Popup will not be triggered.

To test, open an Incognito/Privacy mode browser window, bring up a URL where you have a "User Leaves" Popup set to appear.  Wait until the page fully loads, move your mouse up to the address bar and click.

In Scroll Box form types, you can choose the percentage of the page that must be scrolled down by a visitor in order for the form to display, as well as the position of the Scroll box on the page. You can also choose the frequency in which your visitors see your forms.

In Welcome Mat form types, you can choose the frequency in which your visitors see your forms, as well as how the Welcome Mat displays on your page (Normal, Embedded, or Parallax).

Normal: This option will have Welcome Mat display regardless of whether the user tries to scroll down the page.

Embedded: This option allows you to set where exactly your Welcome Mat should be placed on the page, with the user scrolling away from it. Simply put the following span tag in your code for wherever you want your Welcome Mat to display:


<span class="sumome-welcomemat-anchor"></span>


Parallax: This option will slowly have Welcome Mat crawl upward as the user scrolls down the page.

**Note: For both Embedded and Parallax, the highest that a Welcome Mat will ever show is below the fold. Make sure you put your embed code for the Embedded option where it will appear just below the fold on your site.

You also have the option to toggle “Instant Landing Page” on or off. The Instant Landing Page option allows the user to remove the option to scroll out of the Welcome Mat without subscribing or opting out, thus creating an “Instant Landing Page.”

In Smart Bar form types, you can choose the frequency in which your visitors see your forms, as well as, as well as how the smart bar behaves with page scrolling and where on the page the smart bar shows.

Display Rules

The behavior of a Sumo app is split between Show and Don't Show rules.These rules can be set independently of one another, or set in conjunction with another to create more advanced conditional rules.

It's important to note that Don't Show rules will always win if there is a conflict. Display Rule options are the same for Show and Don't Show rules. However, they will have the opposite effect.

More on this below:

https://help.sumo.com/hc/en-us/articles/218680998--Display-Rules

Advanced Settings

There are 3 options here that you can toggle on or off:

Show To Users Who Already Subscribed: This option allows you to decide whether or not you want your Forms to display to visitors who have already subscribed via Sumo.

Hide From Users Who Opted Out: This options allows you to decide whether or not you want to hide the Form from visitors who have opted out. Users are opted out after using a button that has a Click Action set to Opt-out, which then sets a cookie on the user's browser to hide the Form.

Although, we go into more detail regarding these settings in later units, you can find more information about these functionalities at the link below:

https://help.sumo.com/hc/en-us/articles/115004671147-How-Sumo-Cookies-Work

Yield Tech: This option is used to have your Form yield to other Sumo Forms on your site. Its purpose is to only allow one Form to show per page load to prevent annoying your visitors.

Subscriber Notifications: This option allows you to receive notifications in the Sumo notification center when visitors subscribe. You can find your by either clicking on the bell icon to the left of your user profile image at the top of your dashboard, or by clicking the bell icon on your Sumo sidebar (after logging into to Sumo on your site.)

Common Issues:

Don’t Show Rules conflicting with Show Rules

It is quite common for a customer to write saying that they are having issues with their Display Rule configuration.

When troubleshooting Display Rule related issues, it is important to ask the customer what the intended functionality is for their forms, more specifically what pages exactly do the want their popups to display on.

After you have this information, keep in mind that Don’t Show rules will always take precedence over Show rules, which means if there is ever a conflict, the Don’t Show rule will trump the Show rule.

Example ticket:
https://sumome.zendesk.com/agent/tickets/18647


Referrer Rules

You will find that customers want their popups to display based off of which URL or page their users visited before being directed to their site.

Commonly, this is the URL of the domain, such as Facebook or Google, or the exact URL, such as the URL of the ad they are running that is set to send their visitors to their site.

The customer can set this up with use of our Referrer Display Rules. Simply enter the domain or exact URL of the page the visitor is viewing before being directed to the site.

In order to troubleshoot this, you can always type ‘document.referrer’ into the Google Chrome Dev tools console. This will display what the browser has recorded for the last document loaded before loading the current document.

Example ticket:
https://sumome.zendesk.com/agent/tickets/96712


Query Parameter Rules

Similar to our rules for targeting specific URLs, our Query Parameter rules allow users to target URLs that contain specific query parameters.

“What in the heck is a query parameter?”

Oh, that’s just a fancy name for the characters after a question mark in a URL. An example of this is below:

https://mysite.com?iamaqueryparameter


Alright, so say a customer wanted a form to display on the URL below, and any other URL on his/her site that contains the query parameter, “testing”

https://mysite.com?testing


The user could create the following rule:

SHOW Query param named testing exists


This allows the user to target the query parameter, “testing” specifically. Otherwise, if they created a rule targeting https://mysite.com, the form would display in the URL when the query parameter was not present as well.

Example ticket:
https://sumome.zendesk.com/agent/tickets/72467

Meta Tag Rules

Our Meta Tag Display Rule allows visitors to configure their forms to display based off of the meta tags present in their site’s pages.  This is especially helpful if the customer categorized blog posts or products by meta tags.

For example, if the customer had the following meta tag within their site’s page(s):


<meta name="category” content=”marketing" />


You would use the meta tag rule below:


SHOW Meta name equals category If Meta content equals marketing

Example ticket:
https://sumome.zendesk.com/agent/tickets/52764

Desktop rules showing on all pages

Ah, the infamous device Display Rule. Our device display rule allows users to display their popups on mobile devices or desktop devices, which can be great for segmenting form results or optimizing forms for each device.

Once common misconfiguration of this rule is that if you use either rule as a Show Rule, the rule will need to be nested within another Show Rule, or a Don’t Show for the inverse device will need to be used.

Huh? Yeah, it can be a bit confusing at first. Let’s go over this.

Our Show Rules act as OR conditions.

Meaning if you have the rules below:


Show On Homepage
Show On Desktop Devices


The form with these rules will display on all pages on Desktop Devices, and the Homepage on both Mobile and Desktop devices.

This is because Sumo reads the rules as follows:


Show on Homepage - on either Mobile or Desktop devices
OR
Show on Desktop Devices - no matter which page is being viewed.


In order to have the popup only display on the Homepage if the page is viewed on a Desktop Device, the rules will need to be configured as follows:


Show On Homepage
IF On Desktop Devices


Alternatively, you can have the rules:


Show On Homepage
Don’t Show On Mobile Devices


This means that the popup will only show on the homepage, since popups will only display on pages where Show Rules are configured (if there are display rules), and the Don’t Show rule says, Don’t ever show on mobile devices, since Don’t Show rules trump and Show Rule created.

Example ticket:
https://sumome.zendesk.com/agent/tickets/54937


Multiple popups set to display on the same page

Another issue that you will see quite frequently is popups acting not as the customer has intended because more than one popup is eligible to display on the same page at the same time.

In the event that two popups of the same form type are set to display on the same page at the same time, it will be a complete tossup as to which popup actually displays.

You will need to make sure that only one popup with a certain form type is eligible to display on a page at a time.

Example ticket:
https://sumome.zendesk.com/agent/tickets/119881

Visitor rules & session duration

Sometimes users write in saying that they have seen their popups multiple times in a week, even though they have set up a visitor rule to only display the popup when their site has been viewed less than 2 times in a week - and they know for a fact they have viewed the site more than 2 times on the same browser/device without clearing the cache.

This is because our visitor rules are session based, and a session lasts about 20 minutes. This means the session will expire in 20 minutes and the views will be reset.

Example ticket:
https://sumome.zendesk.com/agent/tickets/54963
Javascript rule (variable not set)

One of our categories of Display Rules includes the javascript Display Rule. This allows customers to have a popup display if a certain javascript variable exists.

It is common for customers to write in exclaiming that the rule is not working properly.

When you come across these types of tickets, it is prudent to ask the customer when the variable is set, more specifically, the exact steps you should follow to get the variable to be set as the desired value, so you can further troubleshoot.

Once this is done, you can check to see if the value exists by searching for the variable value in Google Chrome Dev tools (more on this in later units).

Example ticket:
https://sumome.zendesk.com/agent/tickets/108766

Customer asks what Smart Mode does

You will undoubtedly come across a ticket where a customer asks what the “Smart Mode” option within the “Visibility” tab of our popups does.

This will simply enable the default settings for the form type. In order to see what these are, create a new form with the desired form type and deselect Smart Mode.

**Note: In legacy versions of our apps, Smart Mode set the popup to display when a visitor was leaving the page. This is no longer the case.**

Example ticket:
https://sumome.zendesk.com/agent/tickets/54566

Cookie rule (not set, httponly, page load)

When a customer is setting a form to display based on a cookie, there are few things to consider - all of which are equally likely to be an issue when troubleshooting cookies.

The cookie is not being set, or the value of the cookie is not what is defined in their Display Rule
The cookie is HTTPOnly
The cookie is being set after page load

Let’s dive right into these issues.

When troubleshooting a cookie related Display Rule, you should always check to see if the cookie is being set and the value of the cookie is what is defined in their Display Rule. You can check this within the “Application” tab of Google Chrome Dev Tools (more on this in later units).

After you have verified that the cookie is being set and the value is correct, you will need to verify that the cookie is not HTTPOnly if the display rule is not working.

HTTPOnly cookies cannot be accessed at all by Sumo via JavaScript. The customer will need to change the cookie to not be HttpOnly if they want it to be trackable by Sumo. You can check if a cookie is HTTPOnly within the “Application” tab of Google Chrome Dev Tools (more on this in later units).

If you have checked all of the above and the popup is still not functioning properly, you will need to verify that the cookie is not being set after page load.

If this is the case, Sumo will not be able to see this cookie until the page is reloaded. Sumo will only check for cookies on initial page load.

Example tickets:
https://sumome.zendesk.com/agent/tickets/15763
https://sumome.zendesk.com/agent/tickets/22353


Yield Tech

There will be times when a customer either does not want two separate form types to display on a single page load, or they do.

This is configured within the “Advanced Settings” in the Visibility tab of their desired form(s).

Yield Tech is a setting in the Scroll Box and List Builder form types that essentially dictates that only a single form type between the Welcome Mat, List Builder and Scroll Box form types can load on a single page load, so if Yield Tech is enabled in a Scroll Box and a popup form type and a Welcome Mat form type is set to load as well, the Welcome Mat will load on the first page load since it loads before any of the other two

So, for example, if both a Scroll Box and a popup have Yield Tech enabled, only one of them will trigger on a given page load. More specifically, whichever form triggers first, would prevent the other from triggering.

Example tickets:
https://sumome.zendesk.com/agent/tickets/129740
https://sumome.zendesk.com/agent/tickets/129373
Helpful Links

https://help.sumo.com/hc/en-us/articles/218680998--Display-Rules
https://help.sumo.com/hc/en-us/articles/218517288-List-Builder-Smart-Mode-and-Manual-Timer-Mode
https://help.sumo.com/hc/en-us/articles/115006028767-Creating-List-Builder-Forms
https://help.sumo.com/hc/en-us/articles/115000249651-Features-Capabilities


CERTIFICATION EXAM:

https://docs.google.com/forms/d/e/1FAIpQLSei_Chl41COrCgpHXt8NgkuhMJRF7aLo0U5nMUF_WKo1bQFNg/viewform



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
