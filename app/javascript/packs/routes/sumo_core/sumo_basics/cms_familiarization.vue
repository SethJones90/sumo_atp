<template>
  <div class="page">
    <h1>UNIT: CMS FAMILIARIZATION</h1>
    <div class="wrapper">
      <div class="item">
        <div class="intro">
          <p>Nowadays, folks are not building their sites from scratch now that Content Management Systems have become so robust.</p>
          <p>Nearly 50% of Sumo users have their sites built on a CMS, which means you better be familiar with them.</p>
          <p>“What in the heck is a Content Management System?” Ah, great question!</p>
          <p>Hold on to your britches! You’re about to become an expert around these here parts.</p>
        </div>

        <div class="content">
          <!-- SECTION START -->
          <div class="section">
            <h3>What is a CMS?</h3>

            <div class="paragraph">
              <p>Content Management Systems (CMS) are web-based applications that are designed for the creation and updating of websites. They may have themes or plugins to extend functionality, and make the management of a website simple.</p>
              <p>Some popular CMS’s are below:</p>

              <div class="list-container">
                <ul>
                  <li>WordPress</li>
                  <li>Joomla</li>
                  <li>Drupal</li>
                  <li>Shopify</li>
                  <li>Squarespace</li>
                  <li>Weebly</li>
                  <li>BigCommerce</li>
                  <li>Prestashop</li>
                  <li>Magento</li>
                </ul>
              </div>
              <p>...and more</p>
            </div>
            <p>In order to become the best of the best, you will need to know some of the nuances in each of the CMS’s, so let’s begin!</p>
            <p>Here is a quick cheat sheet for identifying the installation method and some of the nuances for each CMS:</p>


            <h4>Wordpress</h4>
            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/218533198-Installing-Sumo-on-Wordpress</a></p>
              <p>Installation: Manually in the &lt;body&gt; tags of the site, or with the Sumo plugin</p>
              <p>Nuances: Sumo cannot be installed on wordpress.com sites - only wordpress.org</p>
            </div>

            <h4>Joomla</h4>
            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/218410587-Installing-Sumo-on-Joomla</a></p>
              <p>Installation: Manually within the &lt;body&gt; tags of their index.php file.</p>
              <p>Nuances: Sumo cannot be installed on joomla.com sites - only joomla.org.</p>
            </div>

            <h4>Drupal</h4>

            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/217900018-Installing-Sumo-on-Drupal</a></p>
              <p>Installation: With Drupal Sumo module</p>
              <p>Nuances: You must be using Drupal 7 and NOT Drupal 8. There is only a Sumo module for Drupal 7.</p>
            </div>

            <h4>Shopify</h4>
            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/218428077-Installing-Sumo-on-Shopify</a></p>
              <p>Installation: Manually in the &lt;body&gt; tags of the site, or with the Sumo app</p>
              <p>Nuances:  In order to add Sumo to the checkout pages of a Shopify site, you will need to paste the Sumo installation code within the checkout.liquid page (A Shopify Plus subscription - a Shopify paid plan - is required to edit checkout.liquid)</p>
            </div>

            <h4>Squarespace</h4>
            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/218531098-Installing-Sumo-on-Squarespace</a></p>
              <p>Installation: Manually within the “Footer” text area in the “Code Injection” section of the site</p>
              <p>Nuances: You will see the following error if attempting to access Sumo from your Squarespace backend.</p>
              <p>"We detected an error loading your site preview. This is usually caused by injected code"</p>
            </div>

            <h4>Weebly</h4>
            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/218428277-Installing-Sumo-on-Weebly</a></p>
              <p>Installation:  Manually within the “Footer Code” section of the site</p>
              <p>Nuances: N/A</p>
            </div>

            <h4>BigCommerce</h4>
            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/115005427568-Installing-Sumo-On-BigCommerce</a></p>
              <p>Installation: Manually within the “Footer“ section, or via Sumo app in the “Scripts” section</p>
              <p>Nuances: If you are having trouble installing Sumo on checkout pages, and are using Optimized One-Page Checkout, you may need to update your theme to enable support for footer scripts. See Applying Storewide Footer/Scripts in BigCommerce's developer documentation for more details.</p>
            </div>

            <h4>PrestaShop</h4>
            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/217901428-Installing-Sumo-on-Prestashop</a></p>
              <p>Installation: Manually within the &lt;body&gt; tags of the index.tpl file of the site</p>
              <p>Nuances: You may experience caching issues if the "Cache" is not set to “No” in the “Force Compilation” option.</p>
            </div>

            <h4>Magento</h4>
            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/115005255888-Installing-Sumo-on-Magento</a></p>
              <p>Installation: Manually or by Magento extension on Magento 1.x or 2.x</p>
              <p>Nuances: Process for installing manually and via extension differs based on Magento version</p>
            </div>

            <h4>Click Funnels</h4>
            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/115001830212-Installing-Sumo-on-Clickfunnels</a></p>
              <p>Installation: Manually by pasting in the “Body Tracking Code” section</p>
              <p>Nuances: N/A</p>
            </div>

            <h4>Blogger/Blogspot</h4>
            <div class="paragraph">
              <p>https://help.sumo.com/hc/en-us/articles/217899588-Installing-Sumo-on-Blogger-Blogspot</a></p>
              <p>Installation: Manually within the &lt;body&gt; tags of theme file.</p>
              <p>Nuances: “Yes. Show mobile templates on mobile devices” must be selected or Sumo will not display on mobile devices.</p>
            </div>

            <h4>Jumpseller</h4>
            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/229833567-Installing-Sumo-on-Jumpseller</a></p>
              <p>Installation: Manually within Code Editor section.</p>
              <p>Nuances: N/A</p>
            </div>

            <h4>Tumblr</h4>
            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/218531928-Installing-Sumo-on-Tumblr</a></p>
              <p>Installation: Manually within the &lt;body&gt; tags of theme files</p>
              <p>Nuances: Must disable “Use default mobile theme” within Advanced options in order for Sumo to display on mobile devices.</p>
            </div>

            <h4>Jimdo</h4>
            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/217900458-Installing-Sumo-on-Jimdo</a></p>
              <p>Installation: Manually inside of the Edit Head text area</p>
              <p>Nuances: N/A</p>
            </div>

            <h4>Rainmaker</h4>
            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/218411657-Installing-Sumo-on-Rainmaker</a></p>
              <p>Installation: Manually within the Header Scripts text area</p>
              <p>Nuances: N/A</p>
            </div>

            <h4>Teachable</h4>
            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/219032227-Installing-Sumo-on-Teachable-formerly-UseFedora-</a></p>
              <p>Installation: Via the Sumo integration</p>
              <p>Nuances: Formerly was named UseFedora</p>
            </div>

            <h4>LeadPages</h4>
            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/115001831792-Installing-Sumo-on-Leadpages</a></p>
              <p>Installation: Manually within “Immediately after the opening &lt;body&gt; tag” text area in “Analytics” tab.</p>
              <p>Nuances: N/A</p>
            </div>

            <h4>Volusion</h4>
            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/218428207-Installing-Sumo-on-Volusion</a></p>
              <p>Installation: Manually within the &lt;body&gt; tags of site’s index file in “File Editor” section</p>
              <p>Nuances:</p>
            </div>

            <h4>SEOshop</h4>
            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/217901808-Installing-Sumo-on-SEOshop</a></p>
              <p>Installation: Manually within the &lt;body&gt; tags of the custom.rain file.</p>
              <p>Nuances: N/A</p>
            </div>

            <h4>Convertri</h4>
            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/229792507-Installing-Sumo-On-Convertri</a></p>
              <p>Installation: Manually within the Scripts text area. </p>
              <p>Nuances: N/A</p>
            </div>

            <h4>Cratejoy</h4>
            <div class="paragraph">
              <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/218633588-Installing-Sumo-on-Cratejoy</a></p>
              <p>Installation: Via the Cratejoy app</p>
              <p>Nuances: N/A</p>
            </div>
          </div>

            <!-- SECTION START -->
            <div class="section">
              <h3>Common Issues</h3>

              <h4>Extension Badge is not glowing blue on Shopify:</h4>
              <div class="paragraph">
                <p>It is common to see the Sumo Chrome Extension badge not glowing blue when visiting a Shopify site.</p>
                <p>When troubleshooting a site, it is important to note that this is not necessarily indicative of Sumo not being installed on the site. As of now, the Sumo extension does not glow blue, even if the Sumo is installed on the site. You must manually search for the code in the site’s source code in order to determine if Sumo is installed on the site.</p>
              </div>
            </div>

            <!-- SECTION START -->
            <div class="section">
              <h3>Certification Exam:</h3>
              <div class="paragraph">
                <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSdIHP3EtQcKX4Qm9hopuQNboLrd4rBNKVju7N9ER2HEvdojsg/viewform" target="_blank">https://docs.google.com/forms/d/e/1FAIpQLSdIHP3EtQcKX4Qm9hopuQNboLrd4rBNKVju7N9ER2HEvdojsg/viewform</a></p>
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
