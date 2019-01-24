<template>
  <div class="page">
    <h1>Sumo Basics</h1>
    <div class="wrapper">
      <div class="item">
        <p>
          UNIT: SUMO BASICS

          This unit covers the basic features within Sumo’s apps, as well as the fundamentals of SiteID and account functionality and architecture. We know that’s a mouthful, but it’s easier than it sounds. You will be a Sumo expert in no time.

          Let’s dig in!

          Sumo SiteIDs

          The Sumo SiteID is the perhaps one of the most important aspects of the Sumo product.

          When you first sign up with Sumo and successfully register your website, you're automatically generating something called a SiteID. A SiteID looks like this:


          faa06c59cc517be52db82674fd82acf0ebc13a2b344a0c84baea5865cde14a91


          When implemented on a website, the SiteID lives inside of its installation code. An example installation code containing the SiteID above is below:


          &ltscript async>(function(s,u,m,o,j,v){j=u.createElement(m);v=u.getElementsByTagName(m)[0];j.async=1;j.src=o;j.dataset.sumoSiteId='faa06c59cc517be52db82674fd82acf0ebc13a2b344a0c84baea5865cde14a91';v.parentNode.insertBefore(j,v)})(window,document,'script','//load.sumo.com/');
          &lt/script&gt;


          “Ok, so what’s the big deal? It’s just some numbers and letters.”

          Here’s the big deal,  your SiteID is associated with the following information:

          Your site URL
          Your site's Sumo App data
          Any user data gathered from your site's Sumo Apps
          Who has access to your site's Sumo Apps and whether they can make any modifications
          Subscription status

          Essentially, this is a key or identifier for all of your site-related information on Sumo.

          This is an important distinction from your User Account with Sumo, which deals with the following:

          Your email address
          Your name
          Your phone number
          All of the SiteIDs associated with your account
          Any subscriptions/billing
          Any credits to your account (refunds, referrals)

          Now, some quick and dirty rules about Sumo SiteIDs:

          No more than one SiteID should be installed on the same website (in MOST cases).
          The same SiteID should only be installed on one website - the same SiteID should not be installed on multiple websites (in MOST cases).
          Purchases, data, and settings cannot be transferred between SiteIDs.
          A purchase lives on a SiteID

          Some more information about this at the link below:

          https://help.sumo.com/hc/en-us/articles/115000365971-Sumo-SiteID

          This is definitely pretty dry stuff, but incredibly important. Now, let’s move on to the (more) fun content.

          Sumo Apps

          When logging into Sumo on your website, you will notice the following apps on the left hand side of the Sumo Launcher.

          Analytics > Dashboard

          The Sumo Dashboard allows users to easily see all of their website, email, and form stats at a glance. More specifically, easily compare how forms rank, view your best- and worst-performing forms at a glance, measure impressions, conversions, conversion rate, track the most important page stats.

          Your new dashboard is an easier way for customers to measure their website stats and get opportunities to grow their website.


          Analytics > Google Analytics:

          The Sumo Google Analytics app was created for users who got tired of navigating the panes, windows, and views of Google Analytics, just to find the crucial stats for their website.

          Simply connect to Google Analytics in order to see your Google Analytics stats in a much more human-readable way!

          https://help.sumo.com/hc/en-us/articles/219101377-Getting-Started-with-Google-Analytics


          Shortcuts

          Shortcuts make it stupid easy to get started capturing email addresses and increasing sales. Better yet, they take less than three minutes to setup!

          With our new shortcuts feature, you can create multiple forms at once, in a simple, easy to use editor. This allows you to employ more advanced, multi-form strategies in a fraction of the time it took previously.

          https://help.sumo.com/hc/en-us/articles/360013223272-Sumo-Shortcuts


          Forms (List Builder)

          List Builder is Sumo’s email capture tool. List Builder converts one-time visitors into lifelong readers and customers. Create professional-looking pop-ups that appear on clicks, timers, as visitors are scrolling down your website’s pages and before people leave! With advanced drag-and-drop functionality, this is the most advanced (yet easiest to use) email capture tool on the internet.

          More info at the links below:

          https://help.sumo.com/hc/en-us/articles/115006028767-Creating-List-Builder-Forms

          https://help.sumo.com/hc/en-us/articles/115006211128-Managing-List-Builder-Forms


          Discounts

          In Sumo, customers can generate (or import) Discount Codes to offer subscribers when they subscribe through your Sumo forms. If the customer’s website is on Shopify or WooCommerce, they can use our Shopify or WooCommerce integrations to generate codes automatically as well.

          More info at the links below:

          https://help.sumo.com/hc/en-us/articles/115002528471-Discount-Code-Campaigns
          https://help.sumo.com/hc/en-us/articles/115001027152-Integrating-Discount-Codes-with-Shopify
          https://help.sumo.com/hc/en-us/articles/360014807012-Integrating-Discount-Codes-with-WooCommerce
          https://help.sumo.com/hc/en-us/articles/115003084191-Creating-a-Cart-Casino-Form


          Messages

          The Messages tab is one of the two tabs in our Message Center app, and allows you to create new email campaigns to the email addresses stores in your Subscribers app, as well as view the stats for previously sent email campaigns.


          Subscribers

          The subscribers tab is the second of the two tabs in our Message Center app. Here you can view all of your subscribers, import  CSV files containing a previously collected email list, and download the CSV file containing the email addresses collected within Sumo.  You can also target subscribers, and send them email or push notification campaigns here.

          More info at the link below:

          https://help.sumo.com/hc/en-us/articles/115001166232-Getting-Started-with-Message-Center


          Social > Share

          Share makes it stupid-easy for your visitors to share your content to their friends, family, and others. The more people share your website and content, the more viral traffic goes back to your website.

          https://help.sumo.com/hc/en-us/articles/218412527-Getting-Started-With-Share


          Social > Image Sharer

          Our Image Sharer app makes it dead simple for a website’s visitors to auto-magically share the images on a user’s website  and link back to the user’s website, driving them viral traffic.

          Common Issues

          Customer wants to install on subdomain

          Your Sumo install code should only be used on 1 website domain.

          Every Sumo registration is unique and given a SiteID alphanumeric string. While you can register as many SiteID's as you want, it's important to know which SiteID is used because it is tied to your subscription, campaigns, popups, and settings.

          If you have a subdomain, we recommend using the primary SiteID associated with your account, that way all emails we send on your behalf and your stats we share with you about your domain reflect all of the website.

          That being said, if you choose to do this, all of your data, settings, and purchases will be shared across your main website and your subdomains.

          If you would prefer that the data be separate, you will need to install separate SiteIDs on your website and its subdomains.

          “I’m not entirely sure what you mean by subdomain.” Ah, sorry about that.

          Let’s use the two websites below as an example.

          mysite.com
          blog.mysite.com

          In the example above, mysite.com is the main domain and blog.mysite.com is the subdomain.

          More info on subdomains below:

          https://www.godaddy.com/help/what-is-a-subdomain-296
          https://domain.me/what-are-subdomains/

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/126051


          Customer purchases on wrong SiteID

          In the event a customer purchases a plan on the “wrong” SiteID, you have two choices as an agent:

          If the customer purchased the plan on the same day, you can cancel the existing plan, and purchase the plan once more on the desired SiteID with refunded credit.
          Instruct the customer they will need to install the SiteID on the website of their choice.

          Example tickets:
          https://sumome.zendesk.com/agent/tickets/80628
          https://sumome.zendesk.com/agent/tickets/95311


          Customer wants to transfer purchase between SiteIDs

          Sumo purchases, data, and settings are linked to SiteIDs. Currently there isn’t a way to transfer purchases between SiteIDs. In order to use a subscription from one site to another, the customer would need to install the SiteID currently on the "old" website on to their new website.

          Alternatively, they would need to cancel their current subscription, and set up a new subscription on their desired SiteID.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/127084


          Customer can’t access pro features on their site

          It is quite common for customers to write in saying that they can’t see their Pro features on their website, even though they have purchased a subscription.

          This is generally the case when the customer has installed a SiteID not tied to their subscription on to their website.

          If the customer replaces the current install code with the SiteID tied to their purchase, they will have access to their Pro features.


          Not authorized error

          The error “You are not authorized for this site” is shown because of one of two reasons:

          You're trying to log in with an account not listed as an Admin or User of the installed Sumo Site
          The Sumo install code is being modified by your website, or is incorrectly installed

          If after troubleshooting the website, you see the installation is good, you will want to provide the customer with email address they need to use to login to their website.

          More on troubleshooting this issue below:

          https://help.sumo.com/hc/en-us/articles/218975807--You-are-not-authorized-for-this-site-error

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/56263


          Shares are not being displayed

          This is probably the most common issue in regards to Share.

          Sumo relies on your Open Graph tags to determine what is shared and what your share numbers are. If you don't have Open Graph tags setup, it will use your actual page URL/Title.

          The first thing you should do when a customer says their shares are wrong, or are not displaying, is check the Open Graph tags within their website’s page, then run that URL through the Facebook debugger and sharedcount.com. This will give you the amount of shares for the page.

          Sharedcount.com is a third party service that reports the Share numbers for various services, and the Facebook Debugger is a tool provided by Facebook directly that allows you to check Share numbers for Facebook specifically.

          You can find the Facebook Debugger at the link below:

          https://developers.facebook.com/tools/debug/

          From here, you can further troubleshoot the issue. There are a number of reasons that a customer is not seeing the Shares they expect to see on their website. We will go into this in greater detail in future units.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/117768


          Customer wants welcome mat on a timer

          Every so often, a customer will write in asking if they can set a timer for their Welcome Mat.

          Unfortunately this is not possible at this time.

          Our “Popup” form type is the only form type that allows the user to configure a timer.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/65093


          Clicks vs Shares
          You will occasionally get a customer writing in asking the difference between “Clicks” and “Shares” within the Share app.

          Clicks differ from Shares in that clicks are counted when one of your website's visitors clicks on a button on the Share Bar. However, the visitor does not have to follow through the process of actually sharing the page to the social networks.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/44608


          Push notifications via CSV upload

          Occasionally a customer will say that they are not seeing the option to send the contacts within their Subscribers list a push notification.

          In the event that the customer uploaded their subscribers via a CSV file, or the subscriber subscribed through an Email Collection form, they will not have the option to send subscriber push notifications.

          Subscribers must opt in through a Push Notification popup in order to receive Push Notifications.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/114886


          Customer is not receiving emails from Sumo

          It is common for customers to write in saying that they are not receiving emails from Sumo. When receiving these types of tickets, it is best to first have the customer first check their Email Preferences on the link below:


          https://sumo.com/account/email

          On this page customers can choose to allow Sumo to send emails, and which emails specifically they want to receive. Making sure all of the desired settings are selected should be the first step you take when troubleshooting these types of issues.

          Next, you want to make sure that the customer has checked their “Spam” and “Promotions” folders to ensure that they do not have any filters preventing them from seeing their emails.

          In the event that all of the above looks good, and the issue does not lie in filters within the customer’s inbox or in their Email Preferences, you can ask a senior agent to check SendGrid to see if the email was delivered. SendGrid is the platform we use to send emails to customers.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/22349


          Customer does not want to receive emails from Sumo

          Alternatively, you may find that some customers do not want to receive emails from Sumo. When this is the case, you can remove the customer from the mailing list by entering in the desired email(s) into the text area in the “Bulk Unsubscriber” section of admin.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/39029


          Customer is seeing an error in the Discounts tab when setting up their WooCommerce codes

          Sometimes things go wrong with our Discount Code integrations. When this happens, Sumo will display an error message within the Discounts tab within Sumo. See the list below for a guide on how to navigate our most common error codes:

          https://help.sumo.com/hc/en-us/articles/360014807012-Integrating-Discount-Codes-with-WooCommerce#common_errors

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/124343


          Helpful Links

          https://help.sumo.com/hc/en-us/articles/115000365971-Sumo-SiteID
          https://help.sumo.com/hc/en-us/articles/218959027-Adding-users-to-my-Sumo-Site
          https://help.sumo.com/hc/en-us/articles/218452008-Can-I-Install-Sumo-on-Multiple-Websites-
          https://help.sumo.com/hc/en-us/articles/115000310312-Managing-your-Account
          https://help.sumo.com/hc/en-us/articles/218453168-Purchased-Items-Data-not-working-or-missing
          https://help.sumo.com/hc/en-us/articles/115006211128-Managing-List-Builder-Forms
          https://help.sumo.com/hc/en-us/articles/115001931391-Create-Welcome-Mat-Scroll-Box-Smart-Bar
          https://help.sumo.com/hc/en-us/articles/115006028767-Creating-List-Builder-Forms
          https://help.sumo.com/hc/en-us/articles/115000249651-Features-Capabilities
          https://help.sumo.com/hc/en-us/articles/218680998--Display-Rules
          https://help.sumo.com/hc/en-us/articles/115002528471-Discount-Code-Campaigns




          CERTIFICATION EXAM:

          https://docs.google.com/forms/d/e/1FAIpQLSfvkEgfz6ZSqj0FWB6cUopWE7IHkIRa6RDeEnDearPAkNQ2Zg/viewform




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
