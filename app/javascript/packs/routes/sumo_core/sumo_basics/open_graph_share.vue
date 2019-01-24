<template>
  <div class="page">
    <h1>Open Graph Share</h1>
    <div class="wrapper">
      <div class="item">
        <p>
          UNIT: OPEN GRAPH/SHARE CERT

          This unit covers the functionality of our one of our most popular apps - the Share app, and it’s relation to Open Graph tags.

          Nothing to it, but to do it! Let’s go!

          Open Graph & Basic Functionality

          Share is our app that makes it stupid-easy for your visitors to share content to friends, family, and others.

          Sumo Share relies on the content of your webpage to determine exactly what gets shared. This means Share will check your website's HTML to determine what content to share to various social networks.

          More specifically, the Sumo API looks at the URL pasted within the og:url meta tag within a site’s page. Share then sends that URL through the social network's API and essentially says “show us the share count.”

          Then the social network’s API returns that value and Share displays it. These are the numbers displayed on the Share bar.

          “So what is Open Graph anyway?” Glad you asked!

          The Open Graph protocol enables any web page to become a rich object in a social graph, allowing a degree of control over how information travels from a third-party website to Facebook or other major social networking sites when a page is shared (or liked, etc.).

          In other words, to turn your web pages into graph objects, you need to add basic metadata to your page (which means that you'll place additional &lt;meta&gt; tags in the &lt;heade&gt; of your web page).

          Some examples of Open Graph Tags are below:

          og:title - This is the title of your object as it should appear within the graph, e.g., "Sumo".


          og:url - This the Canonical URL of your object that will be used as its permanent ID in the graph, e.g., "http://www.sumo.com".

          og:image - This is the image URL which should represent your object within the graph.


          More on this at the link below:


          https://help.sumo.com/hc/en-us/articles/218518148-Share-and-Open-Graph


          **NOTE: Twitter actually has its own meta tags, called Twitter Cards.

          With Twitter Cards, you can attach rich photos, videos and media experience to Tweets that drive traffic to your website. This is essentially the same principle as adding Open Graph meta tags to your site. Simply add a few lines of HTML to your webpage and users who Tweet links to your content will have a “Card” added to the Tweet that’s visible to all of their followers.

          It is important to note that Twitter Cards are used in lieu of Open Graph tags. In other words, when your site is being shared to Twitter through Sumo Share, Share checks your site for any Twitter Cards embedded in the HTML before it checks for Open Graph Tags.

          So for example, a twitter:title twitter card would take precedence over the Open Graph title tag, but would still use the Open Graph URL if there is not a twitter:url defined.

          We support the following Twitter card tags:


          <meta name="twitter:title" content="Sumo">


          <meta name="twitter:creator" content="@username">


          <meta name="twitter:site" content="@username">


          <meta name="twitter:url" content="http://www.sumo.com">


          Clicks vs Shares

          It is important to note that the clicks displayed in the “Clicks” tab in the Share app are not necessarily equal to the number of shares displayed on the Share bar.

          Clicks differ from Shares in that clicks are counted when one of your site's visitors clicks on the service buttons of the Share Bar. However, the visitor does not have to follow through the process of actually sharing the page to the social networks.

          When you view your stats within Share you are seeing "clicks."

          However, the numbers displayed on your Share bar are "Shares"


          Custom Share Objects

          Our Custom Share Object feature is advanced feature and is recommended for use only by Share users who feel comfortable modifying their HTML files directly.

          Not only can you use Inline Sharing to customize how Share displays on your site, but you can choose to share content through Custom Share Objects. Through a custom Share data attribute, you can embed whatever Share data you choose in a link, button, or image.

          Share Object Examples

          Used as a link on a page:

          <a href="" data-sumome-share="facebook" data-sumome-share-url="https://sumome.com/" data-sumome-share-text="Sumo is the Best" >Share on Facebook</a>


          Used as an image:

          <img data-sumome-share="facebook" data-sumome-share-url="https://sumome.com/" data-sumome-share-text="Sumo is the Best" src="images/facebook.jpg" alt="">


          Displayed number of shares:

          <strong data-sumome-share="Facebook" data-sumome-share-url="https://sumome.com/" data-sumome-share-text="Sumo is the Best">Facebook Shares: <span data-sumome-share-count="share"></span></strong>

          As Text:

          <strong data-sumome-share="facebook" data-sumome-share-url="https://sumome.com/" data-sumome-share-text="Sumo is the Best">Facebook Shares: <span data-sumome-share-count="share"></span></strong>


          As a Button:


          <button data-sumome-share="twitter" data-sumome-share-url="https://sumome.com/" data-sumome-share-text="Sumo is the Best">Twitter Shares: <span data-sumome-share-count="share"></span></button>

          You can find more information about Custom Share Objects at the link below:

          https://help.sumo.com/hc/en-us/articles/219107217-Custom-Share-Objects-Data-Attributes

          Common Issues

          Customer is confused about what connecting to Facebook in Share does

          It is common for customers to write in with a bit of confusion over the functionality of the “Connect” button within the “Services” tab of Share.

          When connecting to Facebook within the "Services" tab of Share, you are not connecting to Facebook in order to pull numbers for your Facebook Pages.

          You are actually connecting to your Facebook account in order to more accurately pull the Share information for the URL(s) within your og:url tag(s).

          Because of how Facebook’s API works, they only allow us to pull the consolidated Facebook numbers for the URL in your og:url tag by default (Shares and Likes combined).

          However, once you connect to your Facebook account within the Share app, Facebook allows us to pull the Likes and and Shares separately for whatever URL is within your page's og:url tag

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/95257

          Customer is confused about clicks vs shares

          You will occasionally get a customer writing in asking the difference between “Clicks” and “Shares” within the Share app.

          Clicks differ from Shares in that clicks are counted when one of your site's visitors clicks on the service buttons on the Share Bar. However, the visitor does not have to follow through the process of actually sharing the page to the social networks.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/120880


          Customer is seeing “wrong” number of shares

          This is probably the most common issue in regards to Share.

          Sumo relies on your Open Graph tags to determine what is shared and what your share numbers are. If you don't have Open Graph tags setup, it will use your actual page URL/Title.

          The first thing you should do when a customer says their shares are wrong is check the Open Graph tags within their site’s page, then run that URL through the Facebook debugger and sharedcount.com. This will give you the amount of shares for the page.

          Depending on your findings in either the debugger or sharedcount.com, you will be able to detrmine the next course of action.

          Example tickets:
          https://sumome.zendesk.com/agent/tickets/84633
          https://sumome.zendesk.com/agent/tickets/27635
          https://sumome.zendesk.com/agent/tickets/114911


          Image not being shared to Twitter

          Every once in a while you will have a customer write in, saying that their image is not sharing in their tweet when using our Twitter Share button.

          In this situation, you should complete the share to Twitter, and check your Twitter feed to see if the image displays.

          Our tweet preview doesn’t always display an image, and depending on the version of twitter, or the device they are viewing on, the twitter image may or may not display.

          This is almost always an issue on the customer’s end, however. Thoroughly test this, then show the customer a screenshot of it working on your end before further troubleshooting with the customer.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/22902


          Show on Pages containing an article

          What Sumo determines an article varies. Because of this, sometimes the display rule, “Show on Pages containing an article,” does not function how the customer expects it to.

          If you are not seeing Share on certain pages, it is because Sumo is not detecting any articles on those pages.

          In order to manually make an article visible to Sumo, you can do one of the following:

          Add role="main" to the div containing your article
          Enclose your article in an &ltarticle&gt; tag

          If you are seeing Share on pages it's not supposed to display on you can add the following code in order to prevent Share from displaying:

          Role="main" on main container
          Add class="aside" on false positives

          “How do I know what Sumo is detecting as an article on the page?”

          When you want to see what Sumo is detecting as an article on a page, you can pull an array of articles by doing the following:

          Click “Debug mode” within the Sumo Chrome Extension
          Type  ‘__smArticles.findAll();’ into the Google Chrome Dev Tools console.

          Once this is done, Sumo will display an array of articles detected by Sumo in the console, and you can click each one to be directed to the exact element in the HTML that Sumo is detecting as the article.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/11338
          https://sumome.zendesk.com/agent/tickets/93620
          Share services displaying in random order no matter what

          It’s common for customers to write in saying that their Share services are displaying in a seemingly random order, no matter what.

          It is possible that the customer has overridden their global bar in a specific placement, but it is also possible that the services selected on the "Selected Services" of the Share bar are displaying randomly because the customer has selected "Smart" within the "Settings" tab of Share.

          "Smart" mode optimizes the order of the icons for the most shares.

          You must change "Smart" to "Manual." Once you have selected "Manual," the share icons will be in the order the customer set.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/30045


          Share bar not displaying where it should in article placement

          Similar to the issue where Sumo is not displaying on certain pages when an article Display Rule or layout position is selected, when Share bar is not displaying where the customer expects it to on their pages after selecting a layout position in relation to an article, this is generally because of what Sumo is determining as an article on the page.

          The customer will need to edit what Sumo is detecting as an article on the page:

          In order to manually make an article visible to Sumo, you can do one of the following:

          Add role="main" to the div containing your article
          Enclose your article in an &ltarticle&gt; tag

          Alternatively, you can add class="aside" to false positives

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/29635


          Share bar overlapping content

          Customers sometimes write in, saying that their Share bar is overlapping the content on their site.

          What is most likely happening is that in certain screen resolutions, the Share bar is covering the text on the customer’s site.

           A few ways this issue can be resolved are below:

          Modifying your main margin in your HTML.
          Using a higher mobile width trigger.
          Using bottom placement for Share.

          Some other options for resolving this issue include alternate Share Bar placements (other than the bottom placement) or alternate button sizes.

          However, out of the first three suggestions listed above, it is suggested to either change the placement of the Share bar to the bottom of the page, or changing the mobile width trigger.

          In the event that you choose to change the mobile width trigger, you can find this option in the "Settings" tab of Share.

          To do this, simply change the pixel value underneath the "Mobile Width" heading.

          This will allow you to customize the width when your Share switches to mobile mode, and your Share bar will display on the bottom of the window instead of on the side.

          Example tickets:
          https://sumome.zendesk.com/agent/tickets/33580
          https://sumome.zendesk.com/agent/tickets/119182


          Facebook error when sharing (bad url in og:url tags)

          This is a less common issue, but may save you the headache if you ever come across it.

          Sometimes a customer will write in saying that when attempting to share their site’s URL via the Facebook Share button, they are getting an error and the preview immediately closes.

          In order to successfully share a URL to a service via Share, the proper og:url syntax must be used.

          The proper syntax is below:


          <meta property="og:url" content="https://www.mysite.com" />


          If you see a tag like the one below, you will most likely experience errors.


          <meta property="og:url" content="www.mysite.com" />


          Notice how the “https://” is missing in the second of the two tags listed above.

           The proper syntax for URLs within the og:url meta tag must always include either “http://” or “https://”

          The meta tag should be corrected, so that it includes either “http://” or “https://”  in order to resolve the issue.


          Shares Not Displaying

          It is also common for customers to write in, saying that numbers are not displaying on the Share bar.

          In order to troubleshoot this, you will need to paste the URL in the page’s og:url tag within a service like sharedcount.com. Alternatively, you could use Facebook Debugger if the customer is concerned about Facebook counts specifically.

          That being said, there are a number of services that have deprecated their share counts, or do not allow shares to be displayed on our Share bar.

          They are as follows:

          Twitter:

          In November 2015, Twitter made the decision to remove the ability to see the Twitter share count. You can see more information here:

          https://blog.twitter.com/2015/hard-decisions-for-a-sustainable-platform

          LinkedIn:

          In 2018, LinkedIn made the decision to remove the ability to see the Linkedn share count. You can see more information here:

          https://developer.linkedin.com/blog/posts/2018/deprecating-the-inshare-counter

          Google+:

          In 2018, Google made the decision to remove the ability to see the Google+ share count. You can see more information here:

          https://blogpros.com/blog/2017/09/google-plus-removes-share

          Email:

          Unfortunately, there is no way to track this number of shares, so share numbers will not display.

          Example tickets:
          https://sumome.zendesk.com/agent/tickets/40125
          https://sumome.zendesk.com/agent/tickets/90890
          https://sumome.zendesk.com/agent/tickets/96099
          https://sumome.zendesk.com/agent/tickets/123127


          Whatsapp on Desktop

          Every once in a while, a customer will write in saying that Whatsapp Share button is not working properly on desktop devices.

          As of now, our Whatsapp Share button is only functional on mobile devices.

          Simply let the customer know that we are working on resolving the issue, but the functionality is not currently available when you come across a ticket like this.

          Example ticket:
          https://sumome.zendesk.com/agent/tickets/118485


          Helpful Links

          https://help.sumo.com/hc/en-us/articles/218518148-Share-and-Open-Graph
          https://help.sumo.com/hc/en-us/articles/218412527-Getting-Started-With-Share
          https://help.sumo.com/hc/en-us/articles/219107217-Custom-Share-Objects-Data-Attributes
          https://help.sumo.com/hc/en-us/articles/218515108--How-Sumo-Share-Statistics-Work-Canonical-URL


          CERTIFICATION EXAM:

          https://docs.google.com/forms/d/e/1FAIpQLSe6WYVFZ3JM7SDIw76Kq_DIWVHzuTFXqqAv8omh-lp1tK1z0w/viewform


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
