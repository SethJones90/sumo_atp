<template>
  <div class="page">
    <h1>UNIT: DISPLAY RULES/BEHAVIOR</h1>
    <div class="wrapper">
      <div class="item">
        <div class="intro">
          <p>This unit covers some of Sumo’s most important functionality  - specifically Display Rules and Form Behavior.</p>
          <p>In order to truly understand the mechanics of how a Sumo app is configured to appear on a customer’s site, you must have a firm understanding of the intricacies of both Display Rules and Behavior.</p>
          <p>Let’s get after it!</p>
        </div>

        <div class="content">
          <!-- SECTION START -->
          <div class="section">
            <h3>Sumo Display Rules</h3>
            <p>Display Rules are rules that determine where various Sumo Apps will display on your site. The behavior of a Sumo app is split between Show and Don't Show rules.These rules can be set independently of one another, or set in conjunction with another to create more advanced conditional rules.</p>
            <p>It's important to note that Don't Show rules will always win if there is a conflict. Display Rule options are the same for Show and Don't Show rules. However, they will have the opposite effect.</p>
            <p>Some more information about this at the link below:</p>
            <p><a>https://help.sumo.com/hc/en-us/articles/218680998--Display-Rules</a></p>
          </div>

          <div class="section">
            <h3>Basic Settings</h3>
            <h4>When/Where</h4>
            <div class="paragraph">
              <p>This option allows you to choose when your form displays.</p>
              <p>In Popup form types, you can choose between displaying the form as a visitor leaves the website, or on a timer. You can also choose the frequency in which your visitors see your forms.</p>
              <p>List Builder's  behavior "User Leaves” sets the form to display as a visitor is a leaving a website.</p>
              <p>This takes into consideration a site’s users’ behavior and will appear if the user is attempting to leave the site. If a user lands on a page but clicks on a link and traverses WITHIN the site, the "User Leaves" Popup will not be triggered.</p>
              <p>To test, open an Incognito/Privacy mode browser window, bring up a URL where you have a "User Leaves" Popup set to appear.  Wait until the page fully loads, move your mouse up to the address bar and click.</p>
              <p>In Scroll Box form types, you can choose the percentage of the page that must be scrolled down by a visitor in order for the form to display, as well as the position of the Scroll box on the page. You can also choose the frequency in which your visitors see your forms.</p>
              <p>In Welcome Mat form types, you can choose the frequency in which your visitors see your forms, as well as how the Welcome Mat displays on your page (Normal, Embedded, or Parallax).</p>
              <p>Normal: This option will have Welcome Mat display regardless of whether the user tries to scroll down the page.</p>
              <p>Embedded: This option allows you to set where exactly your Welcome Mat should be placed on the page, with the user scrolling away from it. Simply put the following span tag in your code for wherever you want your Welcome Mat to display:</p>

              <div class="code-span">
                <p>&lt;script class="sumome-welcomemat-anchor"&gt;&lt;/span&gt;</p>
              </div>

              <p>Parallax: This option will slowly have Welcome Mat crawl upward as the user scrolls down the page.</p>
              <p>**Note: For both Embedded and Parallax, the highest that a Welcome Mat will ever show is below the fold. Make sure you put your embed code for the Embedded option where it will appear just below the fold on your site.</p>
              <p>You also have the option to toggle “Instant Landing Page” on or off. The Instant Landing Page option allows the user to remove the option to scroll out of the Welcome Mat without subscribing or opting out, thus creating an “Instant Landing Page.”</p>
              <p>In Smart Bar form types, you can choose the frequency in which your visitors see your forms, as well as, as well as how the smart bar behaves with page scrolling and where on the page the smart bar shows.</p>
            </div>

            <h4>Display Rules</h4>
            <div class="paragraph">
              <p>The behavior of a Sumo app is split between Show and Don't Show rules.These rules can be set independently of one another, or set in conjunction with another to create more advanced conditional rules.</p>
              <p>It's important to note that Don't Show rules will always win if there is a conflict. Display Rule options are the same for Show and Don't Show rules. However, they will have the opposite effect.</p>
              <p>More on this below:</p>
              <p>https://help.sumo.com/hc/en-us/articles/218680998--Display-Rules</p>
            </div>

            <h4>Advanced Settings</h4>
            <div class="paragraph">
              <p>There are 3 options here that you can toggle on or off:</p>
              <p>Show To Users Who Already Subscribed: This option allows you to decide whether or not you want your Forms to display to visitors who have already subscribed via Sumo.</p>
              <p>Hide From Users Who Opted Out: This options allows you to decide whether or not you want to hide the Form from visitors who have opted out. Users are opted out after using a button that has a Click Action set to Opt-out, which then sets a cookie on the user's browser to hide the Form.</p>
              <p>Although, we go into more detail regarding these settings in later units, you can find more information about these functionalities at the link below:</p>
              <p>https://help.sumo.com/hc/en-us/articles/115004671147-How-Sumo-Cookies-Work</p>
              <p>Yield Tech: This option is used to have your Form yield to other Sumo Forms on your site. Its purpose is to only allow one Form to show per page load to prevent annoying your visitors.</p>
              <p>Subscriber Notifications: This option allows you to receive notifications in the Sumo notification center when visitors subscribe. You can find your by either clicking on the bell icon to the left of your user profile image at the top of your dashboard, or by clicking the bell icon on your Sumo sidebar (after logging into to Sumo on your site.)</p>
            </div>
          </div>

            <div class="section">
              <h3>Common Issues</h3>
              <h4>Don’t Show Rules conflicting with Show Rules</h4>
              <div class="paragraph">
              <p>It is quite common for a customer to write saying that they are having issues with their Display Rule configuration.</p>
              <p>When troubleshooting Display Rule related issues, it is important to ask the customer what the intended functionality is for their forms, more specifically what pages exactly do the want their popups to display on.</p>
              <p>After you have this information, keep in mind that Don’t Show rules will always take precedence over Show rules, which means if there is ever a conflict, the Don’t Show rule will trump the Show rule.</p>
              <div class="example-ticket-container">
                <p>Example ticket:</p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/18647" target="_blank">https://sumome.zendesk.com/agent/tickets/18647</a></p>
              </div>
            </div>

            <h4>Referrer Rules</h4>
            <div class="paragraph">
              <p>You will find that customers want their popups to display based off of which URL or page their users visited before being directed to their site.</p>
              <p>Commonly, this is the URL of the domain, such as Facebook or Google, or the exact URL, such as the URL of the ad they are running that is set to send their visitors to their site.</p>
              <p>The customer can set this up with use of our Referrer Display Rules. Simply enter the domain or exact URL of the page the visitor is viewing before being directed to the site.</p>
              <p>In order to troubleshoot this, you can always type ‘document.referrer’ into the Google Chrome Dev tools console. This will display what the browser has recorded for the last document loaded before loading the current document.</p>
              <div class="example-ticket-container">
                <p>Example ticket:</p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/96712" target="_blank">https://sumome.zendesk.com/agent/tickets/96712</a></p>
              </div>
            </div>


            <h4>Query Parameter Rules</h4>
            <div class="paragraph">
              <p>Similar to our rules for targeting specific URLs, our Query Parameter rules allow users to target URLs that contain specific query parameters.</p>
              <p>“What in the heck is a query parameter?”</p>
              <p>Oh, that’s just a fancy name for the characters after a question mark in a URL. An example of this is below:</p>
              <p>https://mysite.com?iamaqueryparameter</p>
              <p>Alright, so say a customer wanted a form to display on the URL below, and any other URL on his/her site that contains the query parameter, “testing”</p>
              <p>https://mysite.com?testing</p>
              <p>The user could create the following rule:</p>
              <p>SHOW Query param named testing exists</p>
              <p>This allows the user to target the query parameter, “testing” specifically. Otherwise, if they created a rule targeting https://mysite.com, the form would display in the URL when the query parameter was not present as well.</p>
              <div class="example-ticket-container">
                <p>Example ticket:</p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/72467" target="_blank">https://sumome.zendesk.com/agent/tickets/72467</a></p>
              </div>
            </div>

          <h4>Meta Tag Rules</h4>
          <div class="paragraph">
            <p>Our Meta Tag Display Rule allows visitors to configure their forms to display based off of the meta tags present in their site’s pages.  This is especially helpful if the customer categorized blog posts or products by meta tags.</p>
            <p>For example, if the customer had the following meta tag within their site’s page(s):</p>
            <div class="code-span">
              <p>&lt;meta name="category" content="marketing" /span&gt;</p>
            </div>
            <p>You would use the meta tag rule below:</p>
            <p>SHOW Meta name equals category If Meta content equals marketing</p>
            <div class="example-ticket-container">
              <p>Example ticket:</p>
              <p><a href="https://sumome.zendesk.com/agent/tickets/52764" target="_blank">https://sumome.zendesk.com/agent/tickets/52764</a></p>
            </div>
          </div>


          <h4>Desktop rules showing on all pages</h4>
          <div class="paragraph">
            <p>Ah, the infamous device Display Rule. Our device display rule allows users to display their popups on mobile devices or desktop devices, which can be great for segmenting form results or optimizing forms for each device.</p>
            <p>Once common misconfiguration of this rule is that if you use either rule as a Show Rule, the rule will need to be nested within another Show Rule, or a Don’t Show for the inverse device will need to be used.</p>
            <p>Huh? Yeah, it can be a bit confusing at first. Let’s go over this.</p>
            <p>Our Show Rules act as OR conditions.</p>
            <p>Meaning if you have the rules below:</p>

            <div class="list-container">
              <ul>
                <li>Show On Homepage</li>
                <li>Show On Desktop Devices</li>
              </ul>
            </div>

            <p>The form with these rules will display on all pages on Desktop Devices, and the Homepage on both Mobile and Desktop devices.</p>

            <p>This is because Sumo reads the rules as follows:</p>

            <div class="list-container">
              <ul>
                <li>Show on Homepage - on either Mobile or Desktop devices</li>
                <li>OR</li>
                <li>Show on Desktop Devices - no matter which page is being viewed.</li>
              </ul>
            </div>

            <p>In order to have the popup only display on the Homepage if the page is viewed on a Desktop Device, the rules will need to be configured as follows:</p>

            <div class="list-container">
              <ul>
                <li>Show On Homepage</li>
                <li>IF On Desktop Devices</li>
              </ul>
            </div>

            <p>Alternatively, you can have the rules:</p>

              <div class="list-container">
                <ul>
                  <li>Show On Homepage</li>
                  <li>Don’t Show On Mobile Devices</li>
                </ul>
              </div>

            <p>This means that the popup will only show on the homepage, since popups will only display on pages where Show Rules are configured (if there are display rules), and the Don’t Show rule says, Don’t ever show on mobile devices, since Don’t Show rules trump and Show Rule created.</p>

            <div class="example-ticket-container">
              <p>Example ticket:</p>
              <p><a href="https://sumome.zendesk.com/agent/tickets/54937" target="_blank">https://sumome.zendesk.com/agent/tickets/54937</a></p>
            </div>
          </div>


          <h4>Multiple popups set to display on the same page</h4>
          <div class="paragraph">
            <p>Another issue that you will see quite frequently is popups acting not as the customer has intended because more than one popup is eligible to display on the same page at the same time.</p>
            <p>In the event that two popups of the same form type are set to display on the same page at the same time, it will be a complete tossup as to which popup actually displays.</p>
            <p>You will need to make sure that only one popup with a certain form type is eligible to display on a page at a time.</p>
            <div class="example-ticket-container">
              <p>Example ticket:</p>
              <p><a href="https://sumome.zendesk.com/agent/tickets/119881" target="_blank">https://sumome.zendesk.com/agent/tickets/119881</a></p>
            </div>
          </div>


          <h4>Visitor rules & session duration</h4>
          <div class="paragraph">
            <p>Sometimes users write in saying that they have seen their popups multiple times in a week, even though they have set up a visitor rule to only display the popup when their site has been viewed less than 2 times in a week - and they know for a fact they have viewed the site more than 2 times on the same browser/device without clearing the cache.</p>
            <p>This is because our visitor rules are session based, and a session lasts about 20 minutes. This means the session will expire in 20 minutes and the views will be reset.</p>
            <div class="example-ticket-container">
              <p>Example ticket:</p>
              <p><a href="https://sumome.zendesk.com/agent/tickets/54963" target="_blank">https://sumome.zendesk.com/agent/tickets/54963</a></p>
            </div>
          </div>

          <h4>Javascript rule (variable not set)</h4>
          <div class="paragraph">
            <p>One of our categories of Display Rules includes the javascript Display Rule. This allows customers to have a popup display if a certain javascript variable exists.</p>
            <p>It is common for customers to write in exclaiming that the rule is not working properly.</p>
            <p>When you come across these types of tickets, it is prudent to ask the customer when the variable is set, more specifically, the exact steps you should follow to get the variable to be set as the desired value, so you can further troubleshoot.</p>
            <p>Once this is done, you can check to see if the value exists by searching for the variable value in Google Chrome Dev tools (more on this in later units).</p>
            <div class="example-ticket-container">
              <p>Example ticket:</p>
              <p><a href="https://sumome.zendesk.com/agent/tickets/108766" target="_blank">https://sumome.zendesk.com/agent/tickets/108766</a></p>
            </div>
          </div>


          <h4>Customer asks what Smart Mode does</h4>
          <div class="paragraph">
            <p>You will undoubtedly come across a ticket where a customer asks what the “Smart Mode” option within the “Visibility” tab of our popups does.</p>
            <p>This will simply enable the default settings for the form type. In order to see what these are, create a new form with the desired form type and deselect Smart Mode.</p>
            <p>**Note: In legacy versions of our apps, Smart Mode set the popup to display when a visitor was leaving the page. This is no longer the case.**</p>

            <div class="example-ticket-container">
              <p>Example ticket:</p>
              <p><a href="https://sumome.zendesk.com/agent/tickets/54566" target="_blank">https://sumome.zendesk.com/agent/tickets/54566</a></p>
            </div>
          </div>


          <h4>Cookie rule (not set, httponly, page load)</h4>
          <div class="paragraph">
            <p>When a customer is setting a form to display based on a cookie, there are few things to consider - all of which are equally likely to be an issue when troubleshooting cookies.</p>

              <div class="list-container">
                <ul>
                  <li>The cookie is not being set, or the value of the cookie is not what is defined in their Display Rule</li>
                  <li>The cookie is HTTPOnly</li>
                  <li>The cookie is being set after page load</li>
                </ul>
              </div>
            <p>Let’s dive right into these issues.</p>
            <p>When troubleshooting a cookie related Display Rule, you should always check to see if the cookie is being set and the value of the cookie is what is defined in their Display Rule. You can check this within the “Application” tab of Google Chrome Dev Tools (more on this in later units).</p>
            <p>After you have verified that the cookie is being set and the value is correct, you will need to verify that the cookie is not HTTPOnly if the display rule is not working.</p>
            <p>HTTPOnly cookies cannot be accessed at all by Sumo via JavaScript. The customer will need to change the cookie to not be HttpOnly if they want it to be trackable by Sumo. You can check if a cookie is HTTPOnly within the “Application” tab of Google Chrome Dev Tools (more on this in later units).</p>
            <p>If you have checked all of the above and the popup is still not functioning properly, you will need to verify that the cookie is not being set after page load.</p>
            <p>If this is the case, Sumo will not be able to see this cookie until the page is reloaded. Sumo will only check for cookies on initial page load.</p>
            <div class="example-ticket-container">
              <p>Example ticket:</p>
              <p><a href="https://sumome.zendesk.com/agent/tickets/15763" target="_blank">https://sumome.zendesk.com/agent/tickets/15763</a></p>
              <p><a href="https://sumome.zendesk.com/agent/tickets/22353" target="_blank">https://sumome.zendesk.com/agent/tickets/22353</a></p>
            </div>
          </div>

          <h4>Yield Tech</h4>
          <p>Example tickets:
          <div class="paragraph">
            <p>There will be times when a customer either does not want two separate form types to display on a single page load, or they do.</p>
            <p>This is configured within the “Advanced Settings” in the Visibility tab of their desired form(s).
            <p>Yield Tech is a setting in the Scroll Box and List Builder form types that essentially dictates that only a single form type between the Welcome Mat, List Builder and Scroll Box form types can load on a single page load, so if Yield Tech is enabled in a Scroll Box and a popup form type and a Welcome Mat form type is set to load as well, the Welcome Mat will load on the first page load since it loads before any of the other two</p>
            <p>So, for example, if both a Scroll Box and a popup have Yield Tech enabled, only one of them will trigger on a given page load. More specifically, whichever form triggers first, would prevent the other from triggering.</p>
            <div class="example-ticket-container">
              <p>Example ticket:</p>
              <p><a href="https://sumome.zendesk.com/agent/tickets/129740" target="_blank">https://sumome.zendesk.com/agent/tickets/129740</a></p>
              <p><a href="https://sumome.zendesk.com/agent/tickets/129373" target="_blank">https://sumome.zendesk.com/agent/tickets/129373</a></p>
            </div>
          </div>
        </div>


            <!-- SECTION START -->
            <div class="section">
              <h3>Helpful Links</h3>

              <div class="paragraph">
                <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/218680998--Display-Rules</a></p>
                <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/218517288-List-Builder-Smart-Mode-and-Manual-Timer-Mode</a></p>
                <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/115006028767-Creating-List-Builder-Forms</a></p>
                <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/115000249651-Features-Capabilities</a></p>
              </div>
            </div>

            <!-- SECTION START -->
            <div class="section">
              <h3>Certification Exam</h3>
              <div class="paragraph">
                <p><a href="" target="_blank">https://docs.google.com/forms/d/e/1FAIpQLSei_Chl41COrCgpHXt8NgkuhMJRF7aLo0U5nMUF_WKo1bQFNg/viewform</a></p>
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
