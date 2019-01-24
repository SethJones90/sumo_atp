<template>
  <div class="page">
    <h1>Sumo Load Time</h1>
    <div class="wrapper">
      <div class="item">
        <p>
          UNIT: SUMO LOAD TIME

          In this unit, we are going to discuss Sumo Load Time, asynchronous javascript, and how it relates to the Document Object Model (DOM) and document loading in general.

          If you’re feeling slightly intimidated, no worries! Although these concepts seem complex, they are actually fairly simple.

          Let’s get nerdy!

          Sumo Asynchronous Loading:

          It is common to see users writing in saying that Sumo is slowing down their site. Generally, when the customer sees Sumo taking a while to load on their site, they assume it’s because Sumo is slow to load, or their site’s loading in general has been slowed down with Sumo installed on their site.

          Sumo may appear to add time to your page load but what’s happening is something else entirely.

          Sumo loads asynchronously which means that it yields to a customer’s site, loading as passively as possible always giving precedence to the site.

          Sumo averages 15-20ms of loading. What the customer is seeing is Sumo waiting until the page loads before it loads to prevent any disruption of your natural UX to their visitors.

          Asynchronous loading

          “Yeah, ok, that’s great, but what is Asynchronous loading, exactly? I’m still a bit fuzzy.”

          Fair enough, let’s dig deeper.

          In synchronous programs, if you have two lines of code (L1 followed by L2), then L2 cannot begin running until L1 has finished executing.

          You can imagine this as if you are in a line of people waiting to buy train tickets. You can't begin to buy a train ticket until all the people in front of you have finished buying theirs. Similarly, the people behind you can't start buying their tickets until you have bought yours.

          In asynchronous programs, you can have two lines of code (L1 followed by L2), where L1 schedules some task to be run in the future, but L2 runs before that task completes.

          You can imagine as if you are eating at a sit-down restaurant. Other people order their food. You can also order your food. You don't have to wait for them to receive their food and finish eating before you order. Similarly, other people don't have to wait for you to get your food and finish eating before they can order. Everybody will get their food as soon as it is finished cooking.

          The sequence in which people receive their food is often correlated with the sequence in which they ordered food, but these sequences do not always have to be identical. For example, if you order a steak, and then I order a glass of water, I will likely receive my order first, since it typically doesn't take as much time to serve a glass of water as it does to prepare and serve a steak.

          Note that asynchronous does not mean the same thing as concurrent or multi-threaded. JavaScript can have asynchronous code, but it is generally single-threaded. This is like a restaurant with a single worker who does all of the waiting and cooking. But if this worker works quickly enough and can switch between tasks efficiently enough, then the restaurant seemingly has multiple workers.

          More on javascript and dining below:

          https://www.pluralsight.com/guides/introduction-to-asynchronous-javascript

          “Ok, I kind of get it, but what does this mean in a not-so-metaphorical context?”

          Usually &ltscript&gt; elements bring a browser’s HTML parser to a temporary halt until the contained or referenced script has been fetched and has also been fully executed.

          The async attribute decouples script fetching and execution from the main process of HTML parsing which enables the browser to continue rendering the underlying page at full speed.

          A script marked with the async attribute will be fetched and executed at some later point in time upon which the browser is free to decide.

          In most cases this will be as soon as the browser finds an opportunity to request it. In addition to that such a script will also no longer respect the order in which the &ltscript&gt; elements were initially declared in the HTML source.

          And finally, asynchronous scripts are no longer part of the content relevant to firing the DOMContentLoaded event. But they are still part of the global load event.

          “But wait, that doesn’t necessarily mean that Sumo is going to wait for a site’s content to load before loading.”

          You’re a smart cookie.

          Because this is technically true, our Sumo developer geniuses have explicitly added code to our script tag that waits for &ltbody&gt; to completely render, after all CSS and HTML has been loaded, which is after the “domContentLoaded” event - when a site’s visitors can interact with a page. This ensures that Sumo waits until a page is able to be interacted with before it loads.

          For reference:

          The ‘domInteractive’ event  in a page load lifecycle marks when DOM is ready, and visitors can interact with the page.

          The ‘domContentLoaded’ event in a page load lifecycle typically marks when both the DOM and CSSOM are ready (CSS is loaded).

          That being said "DOMInteractive" marks the time when enough of the page has loaded for the user to begin interacting with it, and is always before "DOMContentLoaded"

          Sumo loads after both events above.

          Document Object Model (DOM):

          “DOM... you keep saying this word. I don’t think it means what you think it means.”

          Sorry, kinda threw that one at you outta nowhere!

          The Document Object Model (DOM) is a cross-platform and language-independent application programming interface that treats an HTML, XHTML, or XML document as a tree structure wherein each node is an object representing a part of the document. The objects can be manipulated programmatically and any visible changes occurring as a result may then be reflected in the display of the document.

          In other words, the Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.

          https://en.wikipedia.org/wiki/Document_Object_Model
          https://www.w3schools.com/js/js_htmldom.asp


          With the object model, JavaScript gets all the power it needs to create dynamic HTML:

          JavaScript can change all the HTML elements in the page
          JavaScript can change all the HTML attributes in the page
          JavaScript can change all the CSS styles in the page
          JavaScript can remove existing HTML elements and attributes
          JavaScript can add new HTML elements and attributes
          JavaScript can react to all existing HTML events in the page
          JavaScript can create new HTML events in the page

          Ok, what does this have to do with load time?

          The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. A very different event load should be used only to detect a fully-loaded page

          You can find more information about this at the link below:

          https://varvy.com/performance/dominteractive.html
          https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

          More on document loading and DOM lifecycle events below:

          http://www.breck-mckye.com/blog/2014/04/document-loading-and-DOM-lifecycle-events/

          Sumo Content Delivery:

          Now we know when Sumo loads in relation to a webpage’s natural load cycle, but HOW is Sumo delivered?

          Our Sumo Scientists are always working on optimizing load times and file sizes, and we use a global CDN (Content Delivery Network) to deliver all of our assets, and utilize keep-alive requests. While there are "multiple requests" being made, they're using the same connection without disconnecting, which has the same net effect as a single connection.

          We utilize caching and build our CSS on a per-app basis instead of a singular CSS file for all apps because having you load only what you use is more efficient and optimal. Our CSS is combined per app (for the app and user-facing) because we never want to have your visitors loading the admin CSS. For admins in particular, there are a lot more assets that load compared to a normal visitor, because of all the additional Tools and UI for using Sumo.

          So with everything loading behind a CDN and with our use of caching, the majority of all your visitors will only load our files once. Rest assured, we're fully aware and make conscious choices to deliver Sumo asset's in the most optimal way.

          If a customer is caching Sumo, they will likely encounter issues as a result. This prevents the customer from seeing updates as they’re likely caching an outdated version. We send out fixes on a regular basis and caching causes version errors.


          Content Delivery Network (CDN):

          “You had me up until content delivery network...”

          CDN is short for content delivery network. A content delivery network (CDN) is a system of distributed servers (network) that deliver pages and other Web content to a user, based on the geographic locations of the user, the origin of the webpage and the content delivery server.

          This service is effective in speeding the delivery of content of websites with high traffic and websites that have global reach. The closer the CDN server is to the user geographically, the faster the content will be delivered to the user. CDNs also provide protection from large surges in traffic.

          API Load Error:

          You will occasionally see a customer write in about this error after doing a page speed test on their site.

          If you see this, you can tell the customer that they can safely ignore any warnings about http://sumome.com/api/load.

          We do not leverage caching for http://sumome.com/api/load because it is a dynamic response relative to the current logged in user/session/page/etc. It controls the behavior for the current page load. The actual code load.sumome.com/ is properly cached.

          Page speed test errors:

          As you may have gathered from the section above, Page Speed Tests, although helpful the majority of the time, do not always give entirely pertinent results.

          A lot of the times, the results they give customers is not applicable to dynamic javascript, such as Sumo.

          Because of this, you may receive a ticket with a customer disgruntled and frustrated, claiming that Sumo is slowing down their site.

          When this is the case, you will need to dig in to see if the results are being misinterpreted.

          Troubleshooting:

          When troubleshooting these types of tickets, you generally want to verify two things:

          Sumo’s assets are being loaded after the DOM is loaded.
          The DOMContentLoaded time in the Network tab is not being substantially increased by Sumo being loaded.

          Once this is done, you will want to provide a response similar to the following to the customer:

          Assure the customer that we are always looking into improving Sumo's performance, and are actively looking into decreasing Sumo file sizes and the number of requests made by Sumo.

          Then let the customer know that even though it does looks like their site’s total load time has been increased, the majority of Sumo's assets are not being loaded until after the DOM has been loaded - which means their users' experience will not be affected.

          Then you would send the customer a screenshot of Sumo loading after the DOM is loaded.

          You can find these results here:

          http://www.webpagetest.org/

          Simply click one of the waterfall diagrams, and look for the Sumo assets. They should be after the pink DOM Content Loaded line.

          You also want to run a quick test with Sumo installed on the customers’ site, and with it blocked (Block Production in Chrome Extension), and demonstrate the load time difference was negligible. You can view the “DOMContentLoaded” and “Load” times within the “Network” tab of Google Chrome Dev tools.

          Generally three loads (in new incognito windows each time), 3 with Sumo active and 3 with Sumo blocked, will be enough to draw an accurate conclusion.

          You would then send screenshots of these results to the customer.

          Then, in order to provide advice for speeding up the DOM being loaded on the site,

          You can then check Google PageSpeed Insights to make recommendations to the customer for speeding up the DOM load time on the site.

          You can run this test here:

          https://developers.google.com/speed/pagespeed/insights/

          Generally, Google PageSpeed Insights only references Sumo in the "Leverage Browser Caching" section of the results, and as stated in an earlier section, we do not leverage caching for sumome.com/api/load because it is a dynamic response relative to the current logged in user/session/page/etc. it controls the behavior for the current page load, the actual code load.sumome.com/ is cached.

          Then assure the customer that we know that every millisecond shaved off of their site's load time matters, and we are always looking to making Sumo as lean as possible on their site. Because of this, they can rest assured that we are actively looking into making improvements to how Sumo is loaded.

          Helpful Links

          For more information, check out the Google PageSpeed Insight's articles about asynchronous loading:

          https://developers.google.com/speed/docs/insights/UseAsync

          https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript#parser-blocking-vs-asynchronous-javascript

          https://developers.google.com/speed/docs/insights/BlockingJS

          Waterfall:

          http://www.webpagetest.org/result/170814_J7_VNE/1/details/

          Google Page Speed Insights:

          https://developers.google.com/speed/pagespeed/insights/?url=www.leonisa.com%2Fen%2F


          CERTIFICATION EXAM:

          https://docs.google.com/forms/d/e/1FAIpQLSdaTntbzQeUH3ahRh5sMdGGTGN4NchbHa2xHW7MoOk0_WvwHw/viewform

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
