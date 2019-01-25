<template>
  <div class="page">
    <h1>UNIT: SUMO BASICS</h1>
    <div class="wrapper">
      <div class="item">
        <div class="intro">
          <p>This unit covers the basic features within Sumo’s apps, as well as the fundamentals of SiteID and account functionality and architecture. We know that’s a mouthful, but it’s easier than it sounds. You will be a Sumo expert in no time.</p>
          <p>Let’s dig in!</p>
        </div>

        <div class="content">
          <!-- SECTION START -->
          <div class="section">
            <h3>Sumo SiteIDs</h3>

            <div class="paragraph">
              <p>The Sumo SiteID is the perhaps one of the most important aspects of the Sumo product.</p>
              <p>When you first sign up with Sumo and successfully register your website, you're automatically generating something called a SiteID. A SiteID looks like this:</p>
            </div>

            <div class="code-span">
              <p>faa06c59cc517be52db82674fd82acf0ebc13a2b344a0c84baea5865cde14a91</p>
            </div>

            <div class="paragraph">
              <p>When implemented on a website, the SiteID lives inside of its installation code. An example installation code containing the SiteID above is below:</p>
            </div>

            <div class="code-block">
              <p>&ltscript async>(function(s,u,m,o,j,v){j=u.createElement(m);v=u.getElementsByTagName(m)[0];j.async=1;j.src=o;j.dataset.sumoSiteId='faa06c59cc517be52db82674fd82acf0ebc13a2b344a0c84baea5865cde14a91';v.parentNode.insertBefore(j,v)})(window,document,'script','//load.sumo.com/');
              &lt/script&gt;</p>
            </div>

            <div class="paragraph">
              <p>“Ok, so what’s the big deal? It’s just some numbers and letters.”</p>
              <p>Here’s the big deal,  your SiteID is associated with the following information:</p>

              <div class="list-container">
                <ul>
                  <li>Your site URL</li>
                  <li>Your site's Sumo App data</li>
                  <li>Any user data gathered from your site's Sumo Apps</li>
                  <li>Who has access to your site's Sumo Apps and whether they can make any modifications</li>
                  <li>Subscription status</li>
                </ul>
              </div>
            </div>

            <div class="paragraph">
              <p>Essentially, this is a key or identifier for all of your site-related information on Sumo.</p>

              <p>This is an important distinction from your User Account with Sumo, which deals with the following:</p>

              <div class="list-container">
                <ul>
                  <li>Your email address</li>
                  <li>Your name</li>
                  <li>Your phone number</li>
                  <li>All of the SiteIDs associated with your account</li>
                  <li>Any subscriptions/billing</li>
                  <li>Any credits to your account (refunds, referrals)</li>
                </ul>
              </div>

              <p>Now, some quick and dirty rules about Sumo SiteIDs:</p>

              <div class="list-container">
                <ul>
                  <li>No more than one SiteID should be installed on the same website (in MOST cases).</li>
                  <li>The same SiteID should only be installed on one website - the same SiteID should not be installed on multiple websites (in MOST cases).</li>
                  <li>Purchases, data, and settings cannot be transferred between SiteIDs</li>
                  <li>A purchase lives on a SiteID</li>
                </ul>
              </div>

              <p>Some more information about this at the link below:</p>

              <p><a href="https://help.sumo.com/hc/en-us/articles/115000365971-Sumo-SiteID" target="_blank">https://help.sumo.com/hc/en-us/articles/115000365971-Sumo-SiteID</a></p>

              <p>This is definitely pretty dry stuff, but incredibly important. Now, let’s move on to the (more) fun content.</p>
            </div>
          </div>

            <!-- SECTION START -->
          <div class="section">
            <h3>Sumo Apps</h3>
            <div class="paragraph">
              <p>When logging into Sumo on your website, you will notice the following apps on the left hand side of the Sumo Launcher.</p>
            </div>

            <h4>Analytics > Dashboard</h4>
            <div class="paragraph">
              The Sumo Dashboard allows users to easily see all of their website, email, and form stats at a glance. More specifically, easily compare how forms rank, view your best- and worst-performing forms at a glance, measure impressions, conversions, conversion rate, track the most important page stats.</p>
              Your new dashboard is an easier way for customers to measure their website stats and get opportunities to grow their website.</p>
            </div>

            <h4>Analytics > Google Analytics:</h4>
            <div class="paragraph">
              <p>The Sumo Google Analytics app was created for users who got tired of navigating the panes, windows, and views of Google Analytics, just to find the crucial stats for their website.</p>
              <p>Simply connect to Google Analytics in order to see your Google Analytics stats in a much more human-readable way!</p>
              <p><a href="https://help.sumo.com/hc/en-us/articles/219101377-Getting-Started-with-Google-Analytics" target="_blank">https://help.sumo.com/hc/en-us/articles/219101377-Getting-Started-with-Google-Analytics</a></p>
            </div>

            <h4>Shortcuts</h4>
            <div class="paragraph">
              <p>Shortcuts make it stupid easy to get started capturing email addresses and increasing sales. Better yet, they take less than three minutes to setup!</p>
              <p>With our new shortcuts feature, you can create multiple forms at once, in a simple, easy to use editor. This allows you to employ more advanced, multi-form strategies in a fraction of the time it took previously.</p>
              <p><a href="https://help.sumo.com/hc/en-us/articles/360013223272-Sumo-Shortcuts" target="_blank">https://help.sumo.com/hc/en-us/articles/360013223272-Sumo-Shortcuts</a></p>
            </div>

            <h4>Forms (List Builder)</h4>
            <div>
              <p>List Builder is Sumo’s email capture tool. List Builder converts one-time visitors into lifelong readers and customers. Create professional-looking pop-ups that appear on clicks, timers, as visitors are scrolling down your website’s pages and before people leave! With advanced drag-and-drop functionality, this is the most advanced (yet easiest to use) email capture tool on the internet.</p>
              <p>More info at the links below:</p>
              <p><a href="https://help.sumo.com/hc/en-us/articles/115006028767-Creating-List-Builder-Forms" target="_blank">https://help.sumo.com/hc/en-us/articles/115006028767-Creating-List-Builder-Forms</a></p>
              <p><a href="https://help.sumo.com/hc/en-us/articles/115006211128-Managing-List-Builder-Forms" target="_blank">https://help.sumo.com/hc/en-us/articles/115006211128-Managing-List-Builder-Forms</a></p>
            </div>

            <h4>Discounts</h4>
            <div class="paragraph">
              <p>In Sumo, customers can generate (or import) Discount Codes to offer subscribers when they subscribe through your Sumo forms. If the customer’s website is on Shopify or WooCommerce, they can use our Shopify or WooCommerce integrations to generate codes automatically as well.</p>
              <p>More info at the links below:</p>
              <p><a href="https://help.sumo.com/hc/en-us/articles/115002528471-Discount-Code-Campaigns" target="_blank">https://help.sumo.com/hc/en-us/articles/115002528471-Discount-Code-Campaigns</a></p>
              <p><a href="https://help.sumo.com/hc/en-us/articles/115001027152-Integrating-Discount-Codes-with-Shopify" target="_blank">https://help.sumo.com/hc/en-us/articles/115001027152-Integrating-Discount-Codes-with-Shopify</a></p>
              <p><a href="https://help.sumo.com/hc/en-us/articles/360014807012-Integrating-Discount-Codes-with-WooCommerce" target="_blank">https://help.sumo.com/hc/en-us/articles/360014807012-Integrating-Discount-Codes-with-WooCommerce</a></p>
              <p><a href="https://help.sumo.com/hc/en-us/articles/115003084191-Creating-a-Cart-Casino-Form" target="_blank">https://help.sumo.com/hc/en-us/articles/115003084191-Creating-a-Cart-Casino-Form</a></p>
            </div>

            <h4>Messages</h4>
            <div class="paragraph">
              <p>The Messages tab is one of the two tabs in our Message Center app, and allows you to create new email campaigns to the email addresses stores in your Subscribers app, as well as view the stats for previously sent email campaigns.</p>
            </div>

            <h4>Subscribers</h4>
            <div class="paragraph">
              <p>The subscribers tab is the second of the two tabs in our Message Center app. Here you can view all of your subscribers, import  CSV files containing a previously collected email list, and download the CSV file containing the email addresses collected within Sumo.  You can also target subscribers, and send them email or push notification campaigns here.</p>
              <p>More info at the link below:</p>
              <p><a href="https://help.sumo.com/hc/en-us/articles/115001166232-Getting-Started-with-Message-Center" target="_blank">https://help.sumo.com/hc/en-us/articles/115001166232-Getting-Started-with-Message-Center</a></p>
            </div>

            <h4>Social > Share</h4>
            <div class="paragraph">
              <p>Share makes it stupid-easy for your visitors to share your content to their friends, family, and others. The more people share your website and content, the more viral traffic goes back to your website.</p>
              <p><a href="https://help.sumo.com/hc/en-us/articles/218412527-Getting-Started-With-Share" target="_blank">https://help.sumo.com/hc/en-us/articles/218412527-Getting-Started-With-Share</a></p>
            </div>

            <h4>Social > Image Sharer</h4>
            <div class="paragraph">
              <p>Our Image Sharer app makes it dead simple for a website’s visitors to auto-magically share the images on a user’s website  and link back to the user’s website, driving them viral traffic.</p>
            </div>
          </div>

            <div class="section">
              <h3>Common Issues</h3>

              <h4>Customer wants to install on subdomain</h4>

              <div class="paragraph">
                <p>Your Sumo install code should only be used on 1 website domain.
                <p>Every Sumo registration is unique and given a SiteID alphanumeric string. While you can register as many SiteID's as you want, it's important to know which SiteID is used because it is tied to your subscription, campaigns, popups, and settings.</p>
                <p>If you have a subdomain, we recommend using the primary SiteID associated with your account, that way all emails we send on your behalf and your stats we share with you about your domain reflect all of the website.</p>
                <p>That being said, if you choose to do this, all of your data, settings, and purchases will be shared across your main website and your subdomains.</p>
                <p>If you would prefer that the data be separate, you will need to install separate SiteIDs on your website and its subdomains.</p>
                <p>“I’m not entirely sure what you mean by subdomain.” Ah, sorry about that.</p>
                <p>Let’s use the two websites below as an example.</p>

                <div class="list-container">
                  <ul>
                    <li>mysite.com</li>
                    <li>blog.mysite.com</li>
                  </ul>
                </div>

                <p>In the example above, mysite.com is the main domain and blog.mysite.com is the subdomain.</p>

                <p>More info on subdomains below:</p>

                <p><a href="https://www.godaddy.com/help/what-is-a-subdomain-296" target="_blank">https://www.godaddy.com/help/what-is-a-subdomain-296</a></p>
                <p><a href="https://domain.me/what-are-subdomains/" target="_blank">https://domain.me/what-are-subdomains/</a></p>


                <div class="example-ticket-container">
                  <p>Example ticket:</p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/126051" target="_blank">https://sumome.zendesk.com/agent/tickets/126051</a></p>
                </div>
              </div>

              <h4>Customer purchases on wrong SiteID</h4>
              <div class="paragraph">
                <p>In the event a customer purchases a plan on the “wrong” SiteID, you have two choices as an agent:</p>

                <p>If the customer purchased the plan on the same day, you can cancel the existing plan, and purchase the plan once more on the desired SiteID with refunded credit.</p>
                <p>Instruct the customer they will need to install the SiteID on the website of their choice.</p>

                <div class="example-ticket-container">
                  <p>Example tickets:</p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/80628" target="_blank">https://sumome.zendesk.com/agent/tickets/80628</a></p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/95311" target="_blank">https://sumome.zendesk.com/agent/tickets/95311</a></p>
                </div>
              </div>

              <h4>Customer wants to transfer purchase between SiteIDs</h4>
              <div class="paragraph">
                <p>Sumo purchases, data, and settings are linked to SiteIDs. Currently there isn’t a way to transfer purchases between SiteIDs. In order to use a subscription from one site to another, the customer would need to install the SiteID currently on the "old" website on to their new website.</p>
                <p>Alternatively, they would need to cancel their current subscription, and set up a new subscription on their desired SiteID.</p>

                <div class="example-ticket-container">
                  <p>Example ticket:</p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/127084" target="_blank">https://sumome.zendesk.com/agent/tickets/127084</a></p>
                </div>
              </div>

              <h4>Customer can’t access pro features on their site</h4>
              <div class="paragraph">
                <p>It is quite common for customers to write in saying that they can’t see their Pro features on their website, even though they have purchased a subscription.</p>
                <p>This is generally the case when the customer has installed a SiteID not tied to their subscription on to their website.</p>
                <p>If the customer replaces the current install code with the SiteID tied to their purchase, they will have access to their Pro features.</p>
              </div>

              <h4>Not authorized error</h4>
              <div class="paragraph">
                <p>The error “You are not authorized for this site” is shown because of one of two reasons:</p>
                <p>You're trying to log in with an account not listed as an Admin or User of the installed Sumo Site</p>
                <p>The Sumo install code is being modified by your website, or is incorrectly installed</p>
                <p>If after troubleshooting the website, you see the installation is good, you will want to provide the customer with email address they need to use to login to their website.</p>
                <p>More on troubleshooting this issue below:</p>

                <p><a href="https://help.sumo.com/hc/en-us/articles/218975807--You-are-not-authorized-for-this-site-error" target="_blank">https://help.sumo.com/hc/en-us/articles/218975807--You-are-not-authorized-for-this-site-error</a></p>

                <div class="example-ticket-container">
                  <p>Example ticket:</p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/56263" target="_blank">https://sumome.zendesk.com/agent/tickets/56263</a></p>
                </div>
              </div>

              <h4>Shares are not being displayed</h4>
              <div class="paragraph">
                <p>This is probably the most common issue in regards to Share.</p>
                <p>Sumo relies on your Open Graph tags to determine what is shared and what your share numbers are. If you don't have Open Graph tags setup, it will use your actual page URL/Title.
                <p>The first thing you should do when a customer says their shares are wrong, or are not displaying, is check the Open Graph tags within their website’s page, then run that URL through the Facebook debugger and sharedcount.com. This will give you the amount of shares for the page.</p>
                <p>Sharedcount.com is a third party service that reports the Share numbers for various services, and the Facebook Debugger is a tool provided by Facebook directly that allows you to check Share numbers for Facebook specifically.</p>
                <p>You can find the Facebook Debugger at the link below:</p>

                <p><a href="https://developers.facebook.com/tools/debug/" target="_blank">https://developers.facebook.com/tools/debug/</a></p>

                <p>From here, you can further troubleshoot the issue. There are a number of reasons that a customer is not seeing the Shares they expect to see on their website. We will go into this in greater detail in future units.</p>

                <div class="example-ticket-container">
                  <p>Example ticket:</p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/11776" target="_blank">https://sumome.zendesk.com/agent/tickets/11776</a></p>
                </div>
              </div>

              <h4>Customer wants welcome mat on a timer</h4>
              <div class="paragraph">
                <p>Every so often, a customer will write in asking if they can set a timer for their Welcome Mat.</p>

                <p>Unfortunately this is not possible at this time.</p>

                <p>Our “Popup” form type is the only form type that allows the user to configure a timer.</p>

                <div class="example-ticket-container">
                  <p>Example ticket:</p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/65093" target="_blank">https://sumome.zendesk.com/agent/tickets/65093</a></p>
                </div>
              </div>

              <h4>Clicks vs Shares</h4>
                <div class="paragraph">
                  <p>You will occasionally get a customer writing in asking the difference between “Clicks” and “Shares” within the Share app.</p>
                  <p>Clicks differ from Shares in that clicks are counted when one of your website's visitors clicks on a button on the Share Bar. However, the visitor does not have to follow through the process of actually sharing the page to the social networks.</p>

                  <div class="example-ticket-container">
                    <p>Example ticket:</p>
                    <p><a href="https://sumome.zendesk.com/agent/tickets/44608" target="_blank">https://sumome.zendesk.com/agent/tickets/44608</a></p>
                  </div>
              </div>

              <h4>Push notifications via CSV upload</h4>
              <div class="paragraph">
                <p>Occasionally a customer will say that they are not seeing the option to send the contacts within their Subscribers list a push notification.</p>
                <p>In the event that the customer uploaded their subscribers via a CSV file, or the subscriber subscribed through an Email Collection form, they will not have the option to send subscriber push notifications.</p>
                <p>Subscribers must opt in through a Push Notification popup in order to receive Push Notifications.</p>

                <div class="example-ticket-container">
                  <p>Example ticket:</p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/114886" target="_blank">https://sumome.zendesk.com/agent/tickets/114886</a></p>
                </div>
              </div>

              <h4>Customer is not receiving emails from Sumo</h4>
              <div class="paragraph">
                <p>It is common for customers to write in saying that they are not receiving emails from Sumo. When receiving these types of tickets, it is best to first have the customer first check their Email Preferences on the link below:</p>
                <p>https://sumo.com/account/email</p>

                <p>On this page customers can choose to allow Sumo to send emails, and which emails specifically they want to receive. Making sure all of the desired settings are selected should be the first step you take when troubleshooting these types of issues.</p>
                <p>Next, you want to make sure that the customer has checked their “Spam” and “Promotions” folders to ensure that they do not have any filters preventing them from seeing their emails.</p>
                <p>In the event that all of the above looks good, and the issue does not lie in filters within the customer’s inbox or in their Email Preferences, you can ask a senior agent to check SendGrid to see if the email was delivered. SendGrid is the platform we use to send emails to customers.</p>

                <div class="example-ticket-container">
                  <p>Example ticket:</p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/22349" target="_blank">https://sumome.zendesk.com/agent/tickets/22349</a></p>
                </div>
              </div>

              <h4>Customer does not want to receive emails from Sumo</h4>
              <div class="paragraph">
                <p>Alternatively, you may find that some customers do not want to receive emails from Sumo. When this is the case, you can remove the customer from the mailing list by entering in the desired email(s) into the text area in the “Bulk Unsubscriber” section of admin.</p>
                <div class="example-ticket-container">
                  <p>Example ticket:</p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/39029" target="_blank">https://sumome.zendesk.com/agent/tickets/39029</a></p>
                </div>
                <p>Customer is seeing an error in the Discounts tab when setting up their WooCommerce codes</p>
                <p>Sometimes things go wrong with our Discount Code integrations. When this happens, Sumo will display an error message within the Discounts tab within Sumo. See the list below for a guide on how to navigate our most common error codes:</p>
                <p>https://help.sumo.com/hc/en-us/articles/360014807012-Integrating-Discount-Codes-with-WooCommerce#common_errors</p>
                <div class="example-ticket-container">
                  <p>Example ticket:</p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/124343" target="_blank">https://sumome.zendesk.com/agent/tickets/124343</a></p>
                </div>
              </div>
            </div>

            <!-- SECTION START -->
            <div class="section">
              <h3>Helpful Links</h3>

              <div class="paragraph">
                <p><a href="https://help.sumo.com/hc/en-us/articles/115000365971-Sumo-SiteID" target="_blank">https://help.sumo.com/hc/en-us/articles/115000365971-Sumo-SiteID</a></p>
                <p><a href="https://help.sumo.com/hc/en-us/articles/218959027-Adding-users-to-my-Sumo-Site" target="_blank">https://help.sumo.com/hc/en-us/articles/218959027-Adding-users-to-my-Sumo-Site</a></p>
                <p><a href="https://help.sumo.com/hc/en-us/articles/218452008-Can-I-Install-Sumo-on-Multiple-Websites-" target="_blank">https://help.sumo.com/hc/en-us/articles/218452008-Can-I-Install-Sumo-on-Multiple-Websites-</a></p>
                <p><a href="https://help.sumo.com/hc/en-us/articles/115000310312-Managing-your-Account" target="_blank">https://help.sumo.com/hc/en-us/articles/115000310312-Managing-your-Account</a></p>
                <p><a href="https://help.sumo.com/hc/en-us/articles/218453168-Purchased-Items-Data-not-working-or-missing" target="_blank">https://help.sumo.com/hc/en-us/articles/218453168-Purchased-Items-Data-not-working-or-missing</a></p>
                <p><a href="https://help.sumo.com/hc/en-us/articles/115006211128-Managing-List-Builder-Forms" target="_blank">https://help.sumo.com/hc/en-us/articles/115006211128-Managing-List-Builder-Forms</a></p>
                <p><a href="https://help.sumo.com/hc/en-us/articles/115001931391-Create-Welcome-Mat-Scroll-Box-Smart-Bar" target="_blank">https://help.sumo.com/hc/en-us/articles/115001931391-Create-Welcome-Mat-Scroll-Box-Smart-Bar</a></p>
                <p><a href="https://help.sumo.com/hc/en-us/articles/115006028767-Creating-List-Builder-Forms" target="_blank">https://help.sumo.com/hc/en-us/articles/115006028767-Creating-List-Builder-Forms</a></p>
                <p><a href="https://help.sumo.com/hc/en-us/articles/115000249651-Features-Capabilities" target="_blank">https://help.sumo.com/hc/en-us/articles/115000249651-Features-Capabilities</a></p>
                <p><a href="https://help.sumo.com/hc/en-us/articles/218680998--Display-Rules" target="_blank">https://help.sumo.com/hc/en-us/articles/218680998--Display-Rules</a></p>
                <p><a href="https://help.sumo.com/hc/en-us/articles/115002528471-Discount-Code-Campaigns" target="_blank">https://help.sumo.com/hc/en-us/articles/115002528471-Discount-Code-Campaigns</a></p>
              </div>
            </div>

            <!-- SECTION START -->
            <div class="section">
              <h3>CERTIFICATION EXAM:</h3>
              <div class="paragraph">
                <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSfvkEgfz6ZSqj0FWB6cUopWE7IHkIRa6RDeEnDearPAkNQ2Zg/viewform" target="_blank">https://docs.google.com/forms/d/e/1FAIpQLSfvkEgfz6ZSqj0FWB6cUopWE7IHkIRa6RDeEnDearPAkNQ2Zg/viewform</a></p>
              </div>
            </div>
          </div>
        </div>
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

h3 {
  margin-bottom: 30px;
}


h4 {
  text-decoration: underline;
  font-size: 18px;
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

.intro {
  margin:auto;
  border-radius: 2px;
  width: 76%;
  text-align: left;
  font-weight: normal;
  background-color: #ecebeb;
  padding:20px;
  margin-bottom: 20px;
  font-style: italic;
}

.content {
  margin:auto;
  border-radius: 2px;
  width: 80%;
  text-align: left;
  font-weight: normal;
  /* background-color: #ecebeb; */
  padding:20px;
  margin-bottom: 20px;
  /* font-style: italic;   */
}

.code-block {
  border-radius: 2px;
  /* height: 100px; */
  width: 100%;
  /* border: 1px solid black; */
  padding:20px;
  margin-top:20px;
  margin-bottom:20px;
  word-wrap: break-word;
  color: #FFF;
  background-color: #5bc739;
  font-weight: bold;
}

.code-span {
  border-radius: 2px;
  /* height: 100px; */
  width: 100%;
  /* border: 1px solid black; */
  padding:20px;
  margin-top:20px;
  margin-bottom:20px;
  word-wrap: break-word;
  color: #FFF;
  background-color: #6c65c2;
  font-weight: bold;
}

.paragraph {
  margin-bottom:40px;
  margin-top:20px;
  word-wrap: break-word;
}

ul li {
  padding: 2px;
  list-style-type: square;
}

.list-container {
  padding-left: 40px;
  margin-bottom: 20px;
  word-wrap: break-word;
}

.section {
  border-radius: 2px;
  background-color: #fff;
  width: 100%;
  padding: 20px;
  word-wrap: break-word;
  margin-bottom: 30px;
}

.example-ticket-container {
  border-radius: 2px;
  /* height: 100px; */
  width: 100%;
  /* border: 1px solid black; */
  padding:20px;
  margin-top:20px;
  margin-bottom:20px;
  word-wrap: break-word;
  color: #FFF;
  background-color: #073A5A;
  font-weight: bold;
}

</style>
