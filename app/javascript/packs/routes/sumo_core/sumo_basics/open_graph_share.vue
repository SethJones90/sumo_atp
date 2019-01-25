<template>
  <div class="page">
    <h1>UNIT: OPEN GRAPH/SHARE CERT</h1>
    <div class="wrapper">
      <div class="item">
        <div class="intro">
          <p>This unit covers the functionality of our one of our most popular apps - the Share app, and it’s relation to Open Graph tags.</p>
          <p>Nothing to it, but to do it! Let’s go!</p>
        </div>

        <div class="content">
          <!-- SECTION START -->
          <div class="section">
            <h3>Open Graph & Basic Functionality</h3>

            <div class="paragraph">
              <p>Share is our app that makes it stupid-easy for your visitors to share content to friends, family, and others.</p>
              <p>Sumo Share relies on the content of your webpage to determine exactly what gets shared. This means Share will check your website's HTML to determine what content to share to various social networks.</p>
              <p>More specifically, the Sumo API looks at the URL pasted within the og:url meta tag within a site’s page. Share then sends that URL through the social network's API and essentially says “show us the share count.”</p>
              <p>Then the social network’s API returns that value and Share displays it. These are the numbers displayed on the Share bar.</p>
              <p>“So what is Open Graph anyway?” Glad you asked!</p>
              <p>The Open Graph protocol enables any web page to become a rich object in a social graph, allowing a degree of control over how information travels from a third-party website to Facebook or other major social networking sites when a page is shared (or liked, etc.).</p>
              <p>In other words, to turn your web pages into graph objects, you need to add basic metadata to your page (which means that you'll place additional &lt;meta&gt; tags in the &lt;heade&gt; of your web page).</p>
              <p>Some examples of Open Graph Tags are below:</p>

              <p>og:title - This is the title of your object as it should appear within the graph, e.g., "Sumo".</p>
              <p>og:url - This the Canonical URL of your object that will be used as its permanent ID in the graph, e.g., "http://www.sumo.com".</p>
              <p>og:image - This is the image URL which should represent your object within the graph.</p>


              <p>More on this at the link below:</p>


              <p>https://help.sumo.com/hc/en-us/articles/218518148-Share-and-Open-Graph</p>
              <p>**NOTE: Twitter actually has its own meta tags, called Twitter Cards.</p>
              <p>With Twitter Cards, you can attach rich photos, videos and media experience to Tweets that drive traffic to your website. This is essentially the same principle as adding Open Graph meta tags to your site. Simply add a few lines of HTML to your webpage and users who Tweet links to your content will have a “Card” added to the Tweet that’s visible to all of their followers.</p>
              <p>It is important to note that Twitter Cards are used in lieu of Open Graph tags. In other words, when your site is being shared to Twitter through Sumo Share, Share checks your site for any Twitter Cards embedded in the HTML before it checks for Open Graph Tags.</p>
              <p>So for example, a twitter:title twitter card would take precedence over the Open Graph title tag, but would still use the Open Graph URL if there is not a twitter:url defined.</p>
              <p>We support the following Twitter card tags:</p>


            </div>

            <div class="code-span">
              <p>&lt;meta name="twitter:title" content="Sumo"&gt;</p>
            </div>

            <div class="code-span">
              <p>&lt;meta name="twitter:creator" content="@username"&gt;</p>
            </div>


            <div class="code-span">
              <p>&lt;meta name="twitter:site" content="@username"&gt;</p>
            </div>

            <div class="code-span">
              <p>&lt;meta name="twitter:url" content="http://www.sumo.com"&gt;</p>
            </div>
          </div>

          <div class="section">
            <h3>Clicks vs Shares</h3>
            <div class="paragraph">
              <p>It is important to note that the clicks displayed in the “Clicks” tab in the Share app are not necessarily equal to the number of shares displayed on the Share bar.</p>
              <p>Clicks differ from Shares in that clicks are counted when one of your site's visitors clicks on the service buttons of the Share Bar. However, the visitor does not have to follow through the process of actually sharing the page to the social networks.</p>
              <p>When you view your stats within Share you are seeing "clicks."</p>
              <p>However, the numbers displayed on your Share bar are "Shares"</p>
            </div>
          </div>


          <div class="section">
            <h3>Custom Share Objects</h3>

            <div class="paragraph">
              <p>Our Custom Share Object feature is advanced feature and is recommended for use only by Share users who feel comfortable modifying their HTML files directly.</p>

              <p>Not only can you use Inline Sharing to customize how Share displays on your site, but you can choose to share content through Custom Share Objects. Through a custom Share data attribute, you can embed whatever Share data you choose in a link, button, or image.</p>

              <p>Share Object Examples</p>

              <p>Used as a link on a page:</p>

              <div class="code-block">
                <p>&lt;a href="" data-sumome-share="facebook" data-sumome-share-url="https://sumome.com/" data-sumome-share-text="Sumo is the Best" &gt;Share on Facebook&lt;/a&gt;</p>
              </div>

              <p>Used as an image:</p>

              <div class="code-block">
                <p>&lt;img data-sumome-share="facebook" data-sumome-share-url="https://sumome.com/" data-sumome-share-text="Sumo is the Best" src="images/facebook.jpg" alt=""&gt;</p>
              </div>

              <p>Displayed number of shares:</p>

              <div class="code-block">
                <p>&lt;strong data-sumome-share="Facebook" data-sumome-share-url="https://sumome.com/" data-sumome-share-text="Sumo is the Best"&gt;Facebook Shares: &lt;span data-sumome-share-count="share"&gt;&lt;/span&gt;&lt;/strong&gt;</p>
              </div>

              <p>As Text:</p>

              <div class="code-block">
                <p>&lt;strong data-sumome-share="facebook" data-sumome-share-url="https://sumome.com/" data-sumome-share-text="Sumo is the Best">Facebook Shares: &lt;span data-sumome-share-count="share"&gt;&lt;/span&gt;&lt;/strong&gt;</p>
              </div>

              <p>As a Button:</p>

              <div class="code-block">
                <p>&lt;button data-sumome-share="twitter" data-sumome-share-url="https://sumome.com/" data-sumome-share-text="Sumo is the Best"&gt;Twitter Shares: &lt;span data-sumome-share-count="share"&gt;&lt;/span&gt;&lt;/button&gt;</p>
              </div>

              <p>You can find more information about Custom Share Objects at the link below:</p>

              <p>https://help.sumo.com/hc/en-us/articles/219107217-Custom-Share-Objects-Data-Attributes</p>
            </div>
          </div>
          <div class="section">
            <h3>Common Issues</h3>

            <h4>Customer is confused about what connecting to Facebook in Share does</h4>
            <div class="paragraph">
              <p>It is common for customers to write in with a bit of confusion over the functionality of the “Connect” button within the “Services” tab of Share.</p>

              <p>When connecting to Facebook within the "Services" tab of Share, you are not connecting to Facebook in order to pull numbers for your Facebook Pages.</p>

              <p>You are actually connecting to your Facebook account in order to more accurately pull the Share information for the URL(s) within your og:url tag(s).</p>

              <p>Because of how Facebook’s API works, they only allow us to pull the consolidated Facebook numbers for the URL in your og:url tag by default (Shares and Likes combined).</p>

              <p>However, once you connect to your Facebook account within the Share app, Facebook allows us to pull the Likes and and Shares separately for whatever URL is within your page's og:url tag</p>

              <div class="example-ticket-container">
                <p>Example ticket:</p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/95257" target="_blank">https://sumome.zendesk.com/agent/tickets/95257</a></p>
              </div>
            </div>

            <h4>Customer is confused about clicks vs shares</h4>
            <div class="paragraph">
              <p>You will occasionally get a customer writing in asking the difference between “Clicks” and “Shares” within the Share app.</p>
              <p>Clicks differ from Shares in that clicks are counted when one of your site's visitors clicks on the service buttons on the Share Bar. However, the visitor does not have to follow through the process of actually sharing the page to the social networks.</p>

              <div class="example-ticket-container">
                <p>Example ticket:</p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/120880" target="_blank">https://sumome.zendesk.com/agent/tickets/120880</a></p>
              </div>
            </div>

            <h4>Customer is seeing “wrong” number of shares</h4>
            <div class="paragraph">

              <p>This is probably the most common issue in regards to Share.</p>
              <p>Sumo relies on your Open Graph tags to determine what is shared and what your share numbers are. If you don't have Open Graph tags setup, it will use your actual page URL/Title.</p>
              <p>The first thing you should do when a customer says their shares are wrong is check the Open Graph tags within their site’s page, then run that URL through the Facebook debugger and sharedcount.com. This will give you the amount of shares for the page.</p>
              <p>Depending on your findings in either the debugger or sharedcount.com, you will be able to detrmine the next course of action.</p>

              <div class="example-ticket-container">
                <p>Example tickets:</p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/84633" target="_blank">https://sumome.zendesk.com/agent/tickets/84633</a></p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/27635" target="_blank">https://sumome.zendesk.com/agent/tickets/27635</a></p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/114911" target="_blank">https://sumome.zendesk.com/agent/tickets/114911</a></p>
              </div>
            </div>


            <h4>Image not being shared to Twitter</h4>
            <div class="paragraph">

              <p>Every once in a while you will have a customer write in, saying that their image is not sharing in their tweet when using our Twitter Share button.</p>
              <p>In this situation, you should complete the share to Twitter, and check your Twitter feed to see if the image displays.</p>
              <p>Our tweet preview doesn’t always display an image, and depending on the version of twitter, or the device they are viewing on, the twitter image may or may not display.</p>
              <p>This is almost always an issue on the customer’s end, however. Thoroughly test this, then show the customer a screenshot of it working on your end before further troubleshooting with the customer.</p>

              <div class="example-ticket-container">
                <p>Example ticket:</p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/22902" target="_blank">https://sumome.zendesk.com/agent/tickets/22902</a></p>
              </div>
            </div>


            <h4>Show on Pages containing an article</h4>
            <div class="paragraph">

              <p>What Sumo determines an article varies. Because of this, sometimes the display rule, “Show on Pages containing an article,” does not function how the customer expects it to.</p>

              <p>If you are not seeing Share on certain pages, it is because Sumo is not detecting any articles on those pages.</p>

              <p>In order to manually make an article visible to Sumo, you can do one of the following:</p>

              <div class="list-container">
                <ul>
                  <li>Add role="main" to the div containing your article</li>
                  <li>Enclose your article in an &lt;article&gt; tag</li>
                </ul>
              </div>

              <p>If you are seeing Share on pages it's not supposed to display on you can add the following code in order to prevent Share from displaying:</p>

              <div class="list-container">
                <ul>
                  <li>Role="main" on main container</li>
                  <li>Add class="aside" on false positives</li>
                </ul>
              </div>

              <p>“How do I know what Sumo is detecting as an article on the page?”</p>

              <p>When you want to see what Sumo is detecting as an article on a page, you can pull an array of articles by doing the following:</p>

              <div class="list-container">
                <ul>
                  <li>Click “Debug mode” within the Sumo Chrome Extension</li>
                  <li>Type  ‘__smArticles.findAll();’ into the Google Chrome Dev Tools console.</li>
                </ul>
              </div>

              <p>Once this is done, Sumo will display an array of articles detected by Sumo in the console, and you can click each one to be directed to the exact element in the HTML that Sumo is detecting as the article.</p>

              <div class="example-ticket-container">
                <p>Example ticket:</p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/11338" target="_blank">https://sumome.zendesk.com/agent/tickets/11338</a></p>
              </div>
            </div>


            <h4>Share services displaying in random order no matter what</h4>
            <div class="paragraph">

              <p>It’s common for customers to write in saying that their Share services are displaying in a seemingly random order, no matter what.</p>
              <p>It is possible that the customer has overridden their global bar in a specific placement, but it is also possible that the services selected on the "Selected Services" of the Share bar are displaying randomly because the customer has selected "Smart" within the "Settings" tab of Share.</p>
              <p>"Smart" mode optimizes the order of the icons for the most shares.</p>
              <p>You must change "Smart" to "Manual." Once you have selected "Manual," the share icons will be in the order the customer set.</p>

              <div class="example-ticket-container">
                <p>Example ticket:</p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/30045" target="_blank">https://sumome.zendesk.com/agent/tickets/30045</a></p>
              </div>
            </div>

            <h4>Share bar not displaying where it should in article placement</h4>
            <div class="paragraph">

              <p>Similar to the issue where Sumo is not displaying on certain pages when an article Display Rule or layout position is selected, when Share bar is not displaying where the customer expects it to on their pages after selecting a layout position in relation to an article, this is generally because of what Sumo is determining as an article on the page.</p>
              <p>The customer will need to edit what Sumo is detecting as an article on the page.</p>
              <p>In order to manually make an article visible to Sumo, you can do one of the following:</p>

              <div class="list-container">
                <ul>
                  <li>Add role="main" to the div containing your article</li>
                  <li>Enclose your article in an &lt;article&gt; tag</li>
                </ul>
              </div>

              <p>Alternatively, you can add class="aside" to false positives</p>

              <div class="example-ticket-container">
                <p>Example ticket:</p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/29635" target="_blank">https://sumome.zendesk.com/agent/tickets/29635</a></p>
              </div>
            </div>


            <h4>Share bar overlapping content</h4>
            <div class="paragraph">

              <p>Customers sometimes write in, saying that their Share bar is overlapping the content on their site.</p>
              <p>What is most likely happening is that in certain screen resolutions, the Share bar is covering the text on the customer’s site.</p>
              <p>A few ways this issue can be resolved are below:

              <div class="list-container">
                <ul>
                  <li>Modifying your main margin in your HTML.</li>
                  <li>Using a higher mobile width trigger.</li>
                  <li>Using bottom placement for Share.</li>
                </ul>
              </div>

              <p>Some other options for resolving this issue include alternate Share Bar placements (other than the bottom placement) or alternate button sizes.</p>
              <p>However, out of the first three suggestions listed above, it is suggested to either change the placement of the Share bar to the bottom of the page, or changing the mobile width trigger.</p>
              <p>In the event that you choose to change the mobile width trigger, you can find this option in the "Settings" tab of Share.</p>
              <p>To do this, simply change the pixel value underneath the "Mobile Width" heading.
              <p>This will allow you to customize the width when your Share switches to mobile mode, and your Share bar will display on the bottom of the window instead of on the side.</p>

              <div class="example-ticket-container">
                <p>Example ticket:</p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/33580" target="_blank">https://sumome.zendesk.com/agent/tickets/33580</a></p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/119182" target="_blank">https://sumome.zendesk.com/agent/tickets/119182</a></p>
              </div>
            </div>


            <h4>Facebook error when sharing (bad url in og:url tags)</h4>
            <div class="paragraph">

              <p>This is a less common issue, but may save you the headache if you ever come across it.</p>
              <p>Sometimes a customer will write in saying that when attempting to share their site’s URL via the Facebook Share button, they are getting an error and the preview immediately closes.</p>
              <p>In order to successfully share a URL to a service via Share, the proper og:url syntax must be used.</p>
              <p>The proper syntax is below:</p>

              <div class="code-span">
                <p>&lt;meta property="og:url" content="https://www.mysite.com" /&gt;</p>
              </div>


              <p>If you see a tag like the one below, you will most likely experience errors.</p>

              <div class="code-span">
                <p>&lt;meta property="og:url" content="www.mysite.com" /&gt;</p>
              </div>

              <p>Notice how the “https://” is missing in the second of the two tags listed above.</p>
              <p>The proper syntax for URLs within the og:url meta tag must always include either “http://” or “https://”</p>
              <p>The meta tag should be corrected, so that it includes either “http://” or “https://”  in order to resolve the issue.</p>

            </div>


            <h4>Shares Not Displaying</h4>
            <div class="paragraph">

              <p>It is also common for customers to write in, saying that numbers are not displaying on the Share bar.</p>

              <p>In order to troubleshoot this, you will need to paste the URL in the page’s og:url tag within a service like sharedcount.com. Alternatively, you could use Facebook Debugger if the customer is concerned about Facebook counts specifically.</p>

              <p>That being said, there are a number of services that have deprecated their share counts, or do not allow shares to be displayed on our Share bar.</p>

              <p>They are as follows:</p>

              <p><i>Twitter:</i></p>

              <p>In November 2015, Twitter made the decision to remove the ability to see the Twitter share count. You can see more information here:</p>

              <p>https://blog.twitter.com/2015/hard-decisions-for-a-sustainable-platform</p>

              <p><i>LinkedIn:</i></p>

              <p>In 2018, LinkedIn made the decision to remove the ability to see the Linkedn share count. You can see more information here:</p>

              <p>https://developer.linkedin.com/blog/posts/2018/deprecating-the-inshare-counter</p>

              <p<i>Google+:</i></p>

              <p>In 2018, Google made the decision to remove the ability to see the Google+ share count. You can see more information here:</p>

              <p>https://blogpros.com/blog/2017/09/google-plus-removes-share</p>

              <p><i>Email:</i></p>

              <p>Unfortunately, there is no way to track this number of shares, so share numbers will not display.</p>

              <div class="example-ticket-container">
                <p>Example ticket:</p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/40125" target="_blank">https://sumome.zendesk.com/agent/tickets/40125</a></p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/90890" target="_blank">https://sumome.zendesk.com/agent/tickets/90890</a></p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/96099" target="_blank">https://sumome.zendesk.com/agent/tickets/96099</a></p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/123127" target="_blank">https://sumome.zendesk.com/agent/tickets/123127</a></p>
              </div>

            </div>

            <h4>Whatsapp on Desktop</h4>
            <div class="paragraph">

              <p>Every once in a while, a customer will write in saying that Whatsapp Share button is not working properly on desktop devices.

              <p>As of now, our Whatsapp Share button is only functional on mobile devices.

              <p>Simply let the customer know that we are working on resolving the issue, but the functionality is not currently available when you come across a ticket like this.


              <div class="example-ticket-container">
                <p>Example ticket:</p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/118485" target="_blank">https://sumome.zendesk.com/agent/tickets/118485</a></p>
              </div>

            </div>
          </div>


            <div class="section">
              <h3>Common Issues</h3>
              <div class="paragraph">
                <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/218518148-Share-and-Open-Graph</a></p>
                <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/218412527-Getting-Started-With-Share</a></p>
                <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/219107217-Custom-Share-Objects-Data-Attributes</a></p>
                <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/218515108--How-Sumo-Share-Statistics-Work-Canonical-URL</a></p>
              </div>
            </div>


            <div class="section">
              <h3>Certification Exam</h3>
              <div class="paragraph">
                <p><a href="" target="_blank">https://docs.google.com/forms/d/e/1FAIpQLSe6WYVFZ3JM7SDIw76Kq_DIWVHzuTFXqqAv8omh-lp1tK1z0w/viewform</a></p>
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
