<template>
  <div class="page">
    <h1>UNIT: BASIC TROUBLESHOOTING</h1>
    <div class="wrapper">
      <div class="item">
        <div class="intro">
          <p>As a Sumo support engineer, you will be required to setup testing environments on the fly.</p>
          </p>In this unit, we will be going over basic troubleshooting techniques that will help you solve a majority of the issues you will encounter in your cases.</p>
          </p>Get pumped!</p>
        </div>

        <div class="content">
          <!-- SECTION START -->
          <div class="section">
            <h3>Troubleshooting Process</h3>
            <div class="paragraph">
              <p>Something common that users will write in with is:</p>
              <p>"&lt;X&gt; feature in Sumo is not working when I try to use it."</p>
              <p>When investigating these types of issues, some general troubleshooting processes should be followed.</p>
            </div>

            <h4>Make sure you understand the issue</h4>
            <div class="paragraph">
              <p>If you aren't 100% certain that you understand the issue the user is having, don't guess -- ask for clarification. You don't want to spend time solving an issue the user is not having.</p>
              <p>Sometimes users will not provide you with all of the information you need to troubleshoot as well as you can.  You need to accurately judge whether or not you can come up with a solution with what you've been provided.  Here are some valuable pieces of info that will help troubleshoot most issues:</p>

              <div class="list-container">
                <ul>
                  <li>Exact URL to a page on the user's website where the issue is happening</li>
                  <li>A full-browser screenshot (including the address bar) showing the issue</li>
                  <li>A screencast video showing the issue in action (useful for issues that aren't best illustrated via static images)</li>
                  <li>Full list of steps to reproduce the issue</li>
                  <li>If this is a mobile-specific issue, which OS version + browser + device the issue is happening on</li>
                </ul>
              </div>

              <p>If you're going to spend a response asking for additional information, make sure to ask for anything you'll need up front.  Spending multiple responses gathering more info tends to aggravate people, affecting satisfaction.</p>
              <p>If the user presents no information on the issue (e.g. Offline Chat tickets saying "Help"), use the macro: Apps::Troubleshooting::Need more info.</p>
              <p>If the user presents some information but not enough, use the macro:</p>
              <p>Apps::Troubleshooting::Need more info and tailor the response to fit the situation.</p>

            </div>

            <h4>Try to reproduce the issue</h4>
            <div class="paragraph">
              <p>This is an important step, because it will help determine whether the issue is a global one (affects all users), or a local one (affects only this user, or a smaller subset of users).  Global issues are prioritized higher than local issues when fixing issues.</p>
            </div>

            <h4>Reproduce the issue on the user's website</h4>
            <div class="paragraph">
              <p>This assumes that the user has Sumo installed on their website currently.  Go to their website and test to see whether you encounter the same issue the user is writing in about.  If they've already provided you with steps to reproduce it, follow them. If not, create a list of steps yourself and write those steps down in case the issue needs to be escalated later.</p>
              <p>If you're unable to reproduce the issue, it's likely local to the user's specific setup (browser, computer, network).  In that case use the Apps::Troubleshooting::Can't reproduce issue macro.</p>
            </div>

            <h4>Reproduce the issue on a test site</h4>
            <div class="paragraph">
              <p>If you were able to reproduce the issue on the user's website, try checking the same issue on a separate test site.  If you have your own website you can test on, this is ideal.  If not, you can use https://sumo.com/demo/site/SITE_ID_GOES_HERE to test with.  Example:</p>
              <p>https://sumo.com/demo/site/1afac5f05ae39db1dfaf5a511d9fe0480cc42e2e0737311facc7b6b5e57c9d1c</p>
              <p>If you are able to reproduce the issue on your test site, then you know this is a global issue.  Escalate the ticket to Level 2 (if you're a Level 1 agent).  If you're a Level 2 agent, when making a bug report you now know whether the issue is global or local.</p>
            </div>

            <h4>Determine if the issue is caused by Sumo by blocking Sumo from loading</h4>
            <div class="paragraph">
              <p>This is a great tool to use when the user sees an issue on their site, and wants to know if Sumo is causing it.  First, verify the issue is happening as they've explained on their site. If you're able to confirm that, go ahead and block Sumo from loading via the Chrome extension and check again.</p>
              <p>If the issue persists when Sumo is blocked from loading, then the issue is not caused by Sumo.</p>
            </div>

            <h4>Come up with a solution and present it</h4>
            <div class="paragraph">
              <p>If the issue isn't a bug and just requires some explanation, look to see if the solution already exists as a Common Issue.  Make liberal use of screenshots and/or screencast videos to illustrate the solution.  This makes it much easier for people to digest, and increases overall satisfaction.</p>
            </div>

            <h4>Check the Common Issues for a solution</h4>
            <div class="paragraph">
              <p>Start Here:</p>
              <p><a href="https://sites.google.com/appsumo.com/cx-process/support/common-issues?authuser=0" target="_blank">https://sites.google.com/appsumo.com/cx-process/support/common-issues?authuser=0</a></p>
              <p>You can see a brief description of each issue in the top-level page. e.g. on the Common Issues top-level page, you can see a brief description of each issue in the Billing section</p>
              <p>Go to the appropriate section</p>
              <p>(e.g. Product > List Builder for issues with Click Triggers)</p>
              <p>Make sure the "situation" lines up with the issue the user is having</p>
              <p>Follow the troubleshooting steps there to come up with an appropriate solution</p>
            </div>

            <h4>Solutions using general product knowledge</h4>
            <div class="paragraph">
              <p>Not all issues can be solved via the Common Issues troubleshooting section.  Some require you to know the product well enough to provide a custom response to the user.  Be prepared to utilize your knowledge of the product to provide a solution.</p>
              <p>For example, a user writes in asking what the differences between two different Sumo Pro plans are.  You should be able to use the resources available (Pricing page and our Help Center article on Pricing plans) to come up with an answer to their question.</p>
            </div>

            <h4>Solutions using Help Center articles</h4>
            <div class="paragraph">
              <p>Sometimes users will write in looking for information that's already available in our Help Center articles.</p>
              <p>Example: "How can I create a List Builder form?"</p>
              <p>In this case, you can simply send a simple response explaining what they're looking to accomplish directly from the article, and accompany that with a link to the article for reference.</p>

            </div>

          </div>


          <!-- SECTION START -->
          <div class="section">
            <h3>Additional Concerns/Tools</h3>

            <h4>Isolating The Issue</h4>
            <div class="paragraph">
              <p>When testing an issue that a customer is having, it’s important to isolate the cause of the issue. It is bad form to escalate a case where you can identify there is an issue, but multiple variables are still in play that cause a senior agent to spend time isolating the root cause.</p>

              <p>Some things to consider before escalating:</p>

              <div class="list-container">
                <ul>
                  <li>Make sure you are certain of the form/app that is affecting by this issue - make sure variants aren’t being displayed</li>
                  <li>Console errors being reported are pertinent to the issue, and there are no other console errors not related to Sumo that could be an indication of another issue.</li>
                  <li>The issue is present with or without Sumo installed</li>
                  <li>The Sumo installation is correct</li>
                </ul>
              </div>

              <p>The idea is to make sure you have done diligence and nothing else can be causing the issue the customer is experiencing except your hypothesized cause.</p>

            </div>

            <h4>Injecting SiteIDs</h4>
            <div class="paragraph">
              <p>An effective functionality offered in the Sumo chrome extension is being able to inject SiteIDs into your site.</p>
              <p>In order to do this, first “Block Production” of Sumo on your site if you currently have Sumo running on your site, then click “Auto Inject (Staging).”</p>
              <p>This will allow you to inject the SiteID of your customer’s Sumo installation on to your site.</p>
              <p>Why is this helpful? Because if you want to quickly determine if an issue a customer is experiencing is being caused by their site or by Sumo, if you inject the SiteID on to your site and the issue still appears, the customer’s individual site is very likely not the cause of the issue.</p>
            </div>

            <h4>Google Chrome Dev Tools Console</h4>
            <div class="paragraph">
              <p>Developer Tools in Google Chrome is one of the most useful tools in the Sumo Support Engineer’s bag of tricks.</p>
              <p>In order to open this up, first view a site in Google Chrome and click COMMAND + OPTION + i (F12 in Windows)</p>
              <p>Dev tools will allow you to view a site’s source code, view network requests, view event listeners, edit a site’s CSS, and quickly see a website’s assets - all can be extremely helpful when troubleshooting a site.</p>
            </div>

            <h4>SiteID Detection</h4>
            <div class="paragraph">
              <p>By clicking the Sumo Chrome extension, the selecting Get SiteID(s) from the dropdown menu, you can see the SiteID(s) currently installed on the customer’s site.</p>
            </div>

            <h4>Quirks Mode detection</h4>
            <div class="paragraph">
              <p>By clicking the Sumo Chrome extension, the selecting Detect Quirks Mode from the dropdown menu, you can see if the customer’s site is in Quirksmode. You can find more about that below:</p>
              <p>https://help.sumo.com/hc/en-us/articles/218478408-Sumo-Display-Issues</p>
              <p>Quirks Mode sets your browser to support older standards and jQuery does not work correctly when a page is rendered in Quirks Mode.</p>
              <p>In most cases, if a customer is using this DOCTYPE or one similar to it, the site will be rendered in Quirks Mode, which will cause Sumo to not work correctly:</p>

              <div class="code-span">
                <p>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"&gt;</p>
              </div>

            </div>

            <h4>Article Detection</h4>
            <div class="paragraph">
              <p>By clicking the Sumo Chrome extension, the selecting Detect Articles from the dropdown menu, you will be able to see the articles being detected by Sumo on a customer’s site.</p>
              <p>Alternatively, you can select “Debug Mode” from the extension’s dropdown menu, then paste __smArticles.findAll() into the Dev Tools console. An array of articles being detected by Sumo will be returned in the console. Simply click the article in the console in order to view the exact element on the customer’s site that Sumo is recognizing as the article.</p>
            </div>

            <h4>DOCTYPE Detection</h4>
            <div class="paragraph">
              <p>By clicking the Sumo Chrome extension, then selecting Get DocType from the dropdown menu, you will be able to see the exact DOCTYPE in the site’s source code.</p>
              <p>This is especially helpful if you suspect a customer’s DocType is forcing the site to be rendered in Quirks Mode.</p>
            </div>

            <h4>SiteID Placement</h4>
            <div class="paragraph">
              <p>You can view the location of the Sumo installation code by viewing the site’s source (Command + Option + u in Google Chrome on a Mac), and searching for ‘sumo’ (Crtl+U in Windows)</p>
            </div>

            <h4>View GTM SiteID</h4>
            <div class="paragraph">
              <p>Viewing the installation code within a GTM tag can be a bit tricky, but definitely doable. In order to do this:</p>
              <div class="list-container">
                <ul>
                  <li>First view the site’s source code (Command + Option + u )</li>
                  <li>Search for “GTM” in the site’s source code </li>
                </ul>
              </div>
              <p>Enter the GTM ID into the end of the URL below:</p>
              <p>https://www.googletagmanager.com/gtm.js?id=GTM-IDHERE</p>
              <p>Search “Sumo” and copy paste the SiteID (ignoring ‘x22’ in the front of the ID).</p>
              </div>

              <h4>CSS issues (basic)</h4>
              <div class="paragraph">
                <p>You can view the CSS files on a customer’s site by:</p>
                <div class="list-container">
                  <ul>
                    <li>Opening up Google Chrome Dev tools (COMMAND + OPTION + i)</li>
                    <li>Clicking on “Sources”</li>
                    <li>Delete .css file contents (one by one)</li>
                    <li>If fixed, it’s the site’s CSS</li>
                  </ul>
                </div>
                <p>More on this in CSS troubleshooting</p>
              </div>

              <h4>Event Listeners</h4>
              <p>You can view the event listeners on a customer’s site by:</p>

              <div class="list-container">
                <ul>
                  <li>Right clicking (or CTRL + click on mac) on the element that is not responding (Ctrl+Shift+ I on windows)</li>
                  <li>Select “Event Listeners” in the right hand side of the dev tools console.</li>
                  <li>Select “Click”</li>
                  <li>Select “Remove” next to listener you think is the issue.</li>
                </ul>
              </div>

              <p>If after being removed, the issue is resolved, the customer will need to remove that event listener from their site.</p>
            </div>


            <!-- SECTION START -->
            <div class="section">
              <h3>Helpful Links</h3>

              <div class="paragraph">
                <p><a href="" target="_blank"></a></p>
                <p><a href="" target="_blank"></a></p>
                <p><a href="" target="_blank"></a></p>
                <p><a href="" target="_blank"></a></p>
                <p><a href="" target="_blank"></a></p>
                <p><a href="" target="_blank"></a></p>
                <p><a href="" target="_blank"></a></p>
              </div>
            </div>

            <!-- SECTION START -->
            <div class="section">
              <h3>Certification Exam:</h3>
              <div class="paragraph">
                <p><a href="" target="_blank"</a></p>
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
