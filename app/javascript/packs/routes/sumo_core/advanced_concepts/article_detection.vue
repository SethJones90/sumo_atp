<template>
  <div class="page">
    <h1>Article Detection</h1>
    <div class="wrapper">
      <div class="item">
        <p>
          UNIT: ARTICLE DETECTION

          Article Detection in Sumo is a tricky subject, which can be absolutely brutal when you are not familiar with this Sumo “treasure”

          In this unit, we will be discussing the fundamentals of article detection within Sumo.

          Let’s get to it. X marks the spot!

          Sumo Article Detection. What?

          What Sumo determines as an article varies - it’s actually a pretty complex algorithm. That being said, whether Sumo is detecting articles on a page, if it’s not detecting articles on a page, or what articles it’s detecting specifically can result in some unwanted behavior for users.

          So let’s dig a little deeper into this.

          Making Articles Visible to Sumo

          Sometimes Sumo will not detect articles on a page, even though it should. When this occurs we recommend you do the following:

          * Add role="main" to the div containing your article

          * Enclose your article in an &ltarticle&gt; tag

          Making Articles Invisible to Sumo

          Sumo article detection will sometimes return "False positives" and flag something as an article, even if it isn't. When this occurs we recommend you do the following:

          * Add role="main" to the primary container.

          * Add our specialized class "aside" which will allow Sumo to ignore the false positive

          Common Issues

          Share bar is not displaying on pages containing more than one article

          A common issue you will encounter is the Share bar not displaying on pages containing more than one article.

          You are seeing this because Share is detecting more than one articles on the page(s) in question. Share can only detect one article on the page - otherwise the bar will not display.

          When this occurs, you will need to first confirm the articles that Sumo is detecting, then apply the “aside” class to the undesired articles.

          Share bar is not displaying on any pages in article rule

          A common issue you will encounter is the Share bar not displaying on any pages when the customer has setup a Show Rule saying, “Show on Pages Containing an Article”

          You are seeing this because Share is not detecting articles on pages where the customer wants it to.

          When this occurs, you will need to first confirm that no articles are being detected on the page(s) in question. Once this has been confirmed, you will need to do one of the following:

          * Add role="main" to the div containing your article

          * Enclose your article in an &ltarticle&gt; tag

          Share bar is displaying on unwanted pages in article rule

          A common issue you will encounter is the Share bar displaying on undesired pages when the customer has setup a Show Rule saying, “Show on Pages Containing an Article”

          You are seeing this because Share is detecting articles on pages where the customer doesn’t want it to.

          When this occurs, you will need to first confirm that articles are being detected on the page(s) in question. Once this has been confirmed, you will need to do the following:

          * Add role="main" to the primary container.

          * Add our specialized class "aside" which will allow Sumo to ignore the false positive

          Example tickets:
          https://sumome.zendesk.com/agent/tickets/11338
          https://sumome.zendesk.com/agent/tickets/93620
          https://sumome.zendesk.com/agent/tickets/29635


          Troubleshooting Tools:

          Debug Mode and  __smArticles.findAll();

          One of the most useful tools in your Sumo toolkit is the Sumo Chrome extension.

          When you want to see what Sumo is detecting as an article on a page, you can pull an array of articles by doing the following:

          Click “Debug mode” within the Sumo Chrome Extension
          Type  ‘__smArticles.findAll();’ into the Google Chrome Dev Tools console.

          Once this is done, Sumo will display an array of articles detected by Sumo in the console, and you can click each one.

          This can be helpful when troubleshooting article related issues. You can also copy and paste the exact articles being detected by Sumo, and relay these to the customer.

          Detect Articles

          Another tool available in the Chrome Extension is the “Detect Articles” option.

          Select this when you would like to see the articles Sumo is detecting, visually highlighted, on the current page.

          Google Chrome Dev Tools Console

          Developer Tools in Google Chrome is one of the most useful tools in the Sumo Support Engineer’s bag of tricks.

          In order to open this up, first view a site in Google Chrome and click COMMAND + OPTION + i  or F12 in Windows

          Dev tools will allow you to view a site’s source code, view network requests, view event listeners, view articles on a site, edit a site’s CSS, and quickly see a website’s assets - all can be extremely helpful when troubleshooting a site.


          CERTIFICATION EXAM:

          https://docs.google.com/forms/d/e/1FAIpQLScp6QkjprAS49PAk_xeJMCntYqzPREA1zEWhqlEYSjpWIvsBA/viewform
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
