<template>
  <div class="page">

    <h1>UNIT: INSTALLING SUMO & COMMON INSTALLATION ISSUES</h1>
    <div class="wrapper">
      <div class="item">
        <div class="intro">
          <p>This unit covers the basics of installing Sumo on a variety of different platforms, and some of the common issues you may experience along the way. By the end of this unit, you will be well on your way to installing Sumo on any site, and will be able to successfully troubleshoot the majority of cases you will encounter with installation related issues.</p>
          <p>So, let’s get to it!</p>
        </div>

        <div class="content">
          <!-- SECTION START -->
          <div class="section">
            <h3>Installing Sumo Manually</h3>
            <div class="paragraph">
              <p>In most cases, in order to install Sumo on a site, all you need to do is paste the Sumo installation code provided after registering for Sumo in between the &ltbody&gt; tags inside of the main page (usually an index file) of the website.</p>
              <p>Our most recent installation code looks similar to the following:</p>

              <div class="code-block">
                <p>&ltscript async>(function(s,u,m,o,j,v){j=u.createElement(m);v=u.getElementsByTagName(m)[0];j.async=1;j.src=o;j.dataset.sumoSiteId='YOUR SITEID HERE';v.parentNode.insertBefore(j,v)})(window,document,'script','//load.sumo.com/');&lt/script&gt;</p>
              </div>

              <p>See below for some more information on our installation instructions:</p>
              <p>https://help.sumo.com/hc/en-us/articles/218076807-Register-and-Install-Sumo</p>
              <p>NOTE: This method only works if you have access to your website's files.</p>
              <p>You can find more information about installing Sumo manually on various platforms at the link below:</p>
              <p>https://help.sumo.com/hc/en-us/categories/202628458-Install-Sumo</p>
              <p>**the most recent version of our script tag (released February 22nd of 2018) needs to be placed within the &lt;body&gt; tags of the customer’s site, but previous versions require the code to be placed within the &lthead&gt; tags of the site**</p>
            </div>
          </div>

          <div class="section">
            <h3>Installing Sumo with Apps and Plugins</h3>
            <p>If you are using a CMS platform like Shopify, Wordpress, Drupal, Joomla! or any other CMS/E-Commerce platform, the installation process may vary.</p>
            <p>Many of these platforms have simplified install process, which allow the customer to simply install Sumo by installing an app or plugin. More on this below:</p>

            <p>https://help.sumo.com/hc/en-us/articles/218428077-Installing-Sumo-on-Shopify</p>
            <p>https://help.sumo.com/hc/en-us/articles/218533198-Installing-Sumo-on-Wordpress</p>
            <p>https://help.sumo.com/hc/en-us/articles/115005255888-Installing-Sumo-on-Magento</p>
            <p>https://help.sumo.com/hc/en-us/categories/202628458-Install-Sumo</p>
          </div>

          <div class="section">
            <h3>Installing Sumo With Google Tag Manager</h3>
            <p>Google Tag Manager allows its users to insert javascript into their sites by placing snippets of code into “tags,” which all are housed in a “container” within GTM. As long as the container code is placed within the source code of a customer’s site, any tags within the container will be fired on the site.</p>
            <p>The installation code that would need to be placed in the container is as follows:</p>

            <div class="code-block">
              <p>&ltscript&gt;document.write("<scr"+"ipt async>(function(s,u,m,o,j,v){j=u.createElement(m);v=u.getElementsByTagName(m)[0];j.async=1;j.src=o;j.dataset.sumoSiteId='YOUR_SITEID_HERE';v.parentNode.insertBefore(j,v)})(window,document,'script','//load.sumo.com/');</scr"+"ipt>");&lt/script&gt;&lt/script&gt;</p>
            </div>

            <p>This is helpful for customers who want to manage their site’s code in one place, without having to edit their site’s source code specifically.</p>

            <p>This means that the Sumo installation code will need to be installed within a GTM tag, instead of on the site directly.</p>

            <p>If the customer wants to install Sumo through GTM with a couple of clicks, they can do this with our GTM app by following the instructions at the link below:</p>

            <p>https://help.sumo.com/hc/en-us/articles/218410357-Installing-Sumo-on-Google-Tag-Manager#link1</p>

            <p>Alternatively, they can install Sumo manually by following the steps below:</p>

            <p>https://help.sumo.com/hc/en-us/articles/218410357-Installing-Sumo-on-Google-Tag-Manager#link3</p>

            <p>TGTM is a great tool for our customers, but can sometimes make troubleshooting a bit more difficult, since the Sumo installation code is not directly viewable on the customer’s site - but within their GTM account.</p>
          </div>


            <div class="section">
              <h3>Common Issues</h3>
              <p>Some common issues you may run into when Sumo is not installed properly on a site are as follows:</p>

              <h4>No Global header</h4>
              <div class="paragraph">
                <p>In the event that a site doesn’t utilize a global header, Sumo will only be displayed on the homepage of the site, assuming the installation code was placed on the homepage. If the installation code was placed on a page other than the homepage, the Sumo installation code would only be present on that page.</p>
                <p>When this is the case, you should suggest that the customer look for a global method of installation. It is possible that they are using the incorrect method.</p>
                <p>In the event that they are unable to find a global installation method, it is best that the customer reach out to their theme creator, as they would be able to better assist the customer with installing script tags globally.</p>
                <p>However, if the theme doesn't have a global header or doesn't utilize one, the customer will need to manually install Sumo on each page.</p>

                <div class="example-ticket-container">
                  <p>Example ticket:</p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/27142" target="_blank">https://sumome.zendesk.com/agent/tickets/27142</a></p>
                </div>
              </div>

              <h4>Not authorized Error</h4>
              <div class="paragraph">
                <p>The error, “You are not authorized for this site” is shown for one of three reasons:</p>
                <p>customer is trying to log in with an email address not listed as an Admin or User on the SiteID currently installed on their site.</p>
                <p>The Sumo install code is being modified by the website or plugins installed on the site, or is incorrectly installed.</p>
                <p>The user has made a typo in their email address when creating their account.</p>
                <div class="example-ticket-container">
                  <p>Example ticket:</p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/56263" target="_blank">https://sumome.zendesk.com/agent/tickets/56263</a></p>
                </div>
              </div>

              <h4>Plugin conflicts (modified code)</h4>
              <div class="paragraph">
                <p>You cannot cache or modify the Sumo install code, or Sumo will not work properly and result in errors like the "not authorized" one.</p>
                <p>If you are running a plugin that modifies JavaScript, you'll need to either disable it or add an exception for the Sumo install code, otherwise the installation code can be modified and Sumo will not work properly.</p>
                <p>Here's a list of known plugins that can cause conflicts with Sumo:</p>

                <div class="list-container">
                  <ul>
                    <li>Above the Fold Optimization</li>
                    <li>JCH Optimize</li>
                    <li>W3 Total Cache</li>
                    <li>WP Fastest Cache</li>
                    <li>WP Super Cache</li>
                    <li>Plugins that include MooTools</li>
                  </ul>
                </div>

                <p>More info on this is available below:</p>
                <p><a>https://help.sumo.com/hc/en-us/articles/218975807--You-are-not-authorized-for-this-site-error</a></p>


                <div class="example-ticket-container">
                  <p>Example ticket:</p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/13147" target="_blank">https://sumome.zendesk.com/agent/tickets/13147</a></p>
                </div>
              </div>


              <h4>More Than One Instance of Sumo is Attempting to Start on this Page</h4>
              <div class="paragraph">
                <p>If you are seeing the "More Than One Instance of Sumo is Attempting to Start on this Page" warning message on your page, that means there are more than one Sumo script installed on that page. There can only be one Sumo installation code per page.</p>
                <p>You will usually see this because you have a manual install of Sumo along with a plugin/app install or multiple manual installs.</p>
                <p>More info here:</p>
                <p><a>https://help.sumo.com/hc/en-us/articles/115000101491-More-Than-One-Instance-of-Sumo-is-Attempting-to-Start-on-this-Page</a></p>
                <div class="example-ticket-container">
                  <p>Example ticket:</p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/23679" target="_blank">https://sumome.zendesk.com/agent/tickets/23679</a></p>
                </div>
              </div>


              <h4>Incompatible sites</h4>
              <div class="paragraph">
                <p>Unfortunately, Sumo is not compatible with the following website platforms:</p>

                <div class="list-container">
                  <ul>
                    <li>Wordpress.com</li>
                    <li>Wix</li>
                    <li>Single Page App</li>
                    <li>Joomla.com</li>
                  </ul>
                </div>

                <p>It is also important to note that Sumo cannot be installed on closed platforms such as the ones below:</p>

                <div class="list-container">
                  <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Etsy</li>
                    <li>Amazon</li>
                  </ul>
                </div>

                <p>A customer would need to be able to add custom JavaScript with the &ltbody&gt; tags of a webpage in order to install Sumo there.</p>
                <p>Some services, such as the ones above, do not allow you to do this. Because of this restriction, customers won't be able to install Sumo on these services.</p>
                <p>More on wordpress.com vs wordpress.org: if you must login to your website using Wordpress.com, then it's a Wordpress.com website and Sumo will not work.</p>
                <p>If your website is self-hosted (Wordpress.org), Sumo will work for you.</p>
                <p>If your website is a single-page app we don't guarantee compatibility with all Sumo features.</p>
                <p>Because pages are typically loaded via javascript in single-page apps, anytime there is a URL change, your browser doesn't actually reload the new page, and Sumo isn't aware that the page has actually changed. This will cause certain features to not work properly, as the events taking place on your page are essentially invisible to Sumo.</p>
                <p>More on that here:</p>

                <p>https://help.sumo.com/hc/en-us/articles/219100867-Website-platforms-incompatible-with-Sumo</p>

                <div class="example-ticket-container">
                  <p>Example ticket:</p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/123249" target="_blank">https://sumome.zendesk.com/agent/tickets/123249</a></p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/102420" target="_blank">https://sumome.zendesk.com/agent/tickets/102420</a></p>
                </div>
              </div>

              <h4>Sumo Chrome Extension Badge not blue (Manual GTM Installation)</h4>
              <div class="paragraph">
                <p>Customers utilizing our GTM manual installation method sometimes will have issues logging into Sumo on their site if they have not installed Sumo via GTM properly.</p>
                <p>If the customer has installed Sumo through GTM, and the Sumo extension badge is not blue, it is likely that Sumo was not installed properly.</p>
                <p>When this is the case, we highly recommend using the Sumo GTM Installer (http://gtm.sumo.com) to install Sumo with. It will detect any mistakes made with a manual installation and will allow you to reinstall Sumo properly.</p>
                <p>Otherwise, you will need to troubleshoot the customer’s manual GTM installation which may take longer. You would then ask the customer to attach a screenshot of how they have the Sumo install code implemented within Google Tag Manager, in edit mode.</p>
                <p>If you see an issue with the install code, you will need to instruct the customer to modify the code, so that it looks identical to the code in our help article.</p>
                <p>It is important to note that the customer must publish the most recent container in Google Tag Manager in order to make the change live. If they do not do this, they will still see the error.</p>
              </div>


              <h4>Sumo code being modified (plugin conflict)</h4>
              <div class="paragraph">

                <p>Customers will occasionally write in, saying that they cannot login to Sumo on their site. If after checking the code, you notice the SiteID looks modified, it’s likely that there is a setting on their site, or a plugin/app installed on the site that is modifying the SiteID.</p>
                <p>Here’s an example of a modified installation code:</p>

                <div class="code-block">
                  <p>&ltscript type="text/javascript" src="https://load.sumome.com/">&lt/script&gt;</p>
                </div>

                <p>The customer will need to remove these plugins, or edit their site’s settings in order for Sumo to work correctly on your site.</p>
                <p>A specific example of a setting causing this issue is in the platform, Prestashop. When the option, "Cache" to is set to “Yes” in the Force Compilation section in the admin of Prestashop, the Sumo install code will be stripped.</p>
                <p>You can find more information about this in our Prestashop install guide below:</p>
                <p>https://help.sumo.com/hc/en-us/articles/217901428-Installing-Sumo-on-Prestashop</p>

                </p>
              </div>

              <h4>SPA issues</h4>
              <div class="paragraph">

                <p>With Single Page Applications (SPA’s) being more prominent in today’s day and age, it’s inevitable that you will come across an issue with an SPA and Sumo.</p>
                <p>What’s a Single Page Application?</p>
                <p>A Single Page Application is a web application or web site that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server.</p>
                <p>Because Sumo only checks for data on page load, a lot of functionality within Sumo will not work properly if the customer is using an SPA.</p>
                <p>A good indicator that a site’s pages are being loaded via javascript, rather than full page refresh is that, you will not see the browser tab’s favicon reloading.</p>

                <div class="example-ticket-container">
                  <p>Example ticket:</p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/13134" target="_blank">https://sumome.zendesk.com/agent/tickets/13134</a></p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/61653" target="_blank">https://sumome.zendesk.com/agent/tickets/61653</a></p>
                </div>
              </div>

              <h4>Blogger mobile</h4>
              <div class="paragraph">
                <p>It is common for our customers using Blogger/Blogspot to write in saying they cannot see their Sumo apps when viewing their Blogger/Blogspot site on a mobile device.</p>
                <p>This happens when the customer has not chosen a custom mobile template within Blogger. You should send them a link to the Blogger/Blogspot Installation help article and verify they have done this on their end in order to verify this is the case.</p>
              </div>

              <h4>Rocket Loader</h4>
              <div class="paragraph">
                <p>Another common issue you may run into when troubleshooting a site’s installation code is the use of Rocketscript.</p>
                <p>Rocketscript causes Sumo to be cached, which breaks it. When you see a Sumo installation code similar to the one below, you should suggest manually installing Sumo or switching to the Wordpress plugin (if the customer’s site is built on Wordpress):</p>

                <div class="code-block">
                  <p>&ltscript async type="text/rocketscript">(function(s,u,m,o,j,v){j=u.createElement(m);v=u.getElementsByTagName(m)[0];j.async=1;j.src=o;j.dataset.sumoSiteId='4e8d2be4366daf7524588ac3ed71e819075ab03aed3fab95bb60454194368a3a';j.dataset.sumoPlatform='wordpress';v.parentNode.insertBefore(j,v)})(window,document,'script','//load.sumo.com/');&lt/script&gt;;</p>
                </div>

                <p>The goal is to remove ‘type="text/rocketscript"’ from the installation script, so that it looks similar to the following:</p>

                <div class="code-block">
                  <p>&ltscript async>(function(s,u,m,o,j,v){j=u.createElement(m);v=u.getElementsByTagName(m)[0];j.async=1;j.src=o;j.dataset.sumoSiteId='4e8d2be4366daf7524588ac3ed71e819075ab03aed3fab95bb60454194368a3a';v.parentNode.insertBefore(j,v)})(window,document,'script','//load.sumo.com/');&lt/script&gt;</p>
                </div>

                <p>In the event the customer does not know how rocketscript is being added, they will need to reach out to their platform or theme creator in order to get this removed.</p>
                <p>You can find more information on rocketscript at the link below:</p>
                <p><a>https://support.cloudflare.com/hc/en-us/articles/200169436-How-can-I-have-Rocket-Loader-ignore-my-script-s-in-Automatic-Mode-</a></p>

                <div class="example-ticket-container">
                  <p>Example ticket:</p>
                  <p><a href="https://sumome.zendesk.com/agent/tickets/93798" target="_blank">https://sumome.zendesk.com/agent/tickets/93798</a></p>
                </div>
              </div>
            </div>


            <!-- SECTION START -->
            <div class="section">
              <h3>Helpful Links</h3>
              <div class="paragraph">

                <p>Installing Sumo Guide:</p>
                <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/218076807-Register-and-Install-Sumo</a></p>
                <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/115000101491-More-Than-One-Instance-of-Sumo-is-Attempting-to-Start-on-this-Page</a></p>

                <p>Wordpress:</p>
                <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/218533198-Installing-Sumo-on-Wordpress</a></p>
                <p>Manually</p>
                <p>Plugin</p>

                <p>GTM:</p>
                <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/218410357-Installing-Sumo-on-Google-Tag-Manager</a></p>
                <p>Manually</p>
                <p>Plugin</p>

                <p>Shopify:</p>
                <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/218428077-Installing-Sumo-on-Shopify</a></p>
                <p>Manually</p>
                <p>Plugin</p>

                <p>BigCommerce:</p>
                <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/115005427568-Installing-Sumo-On-BigCommerce</a></p>
                <p>Manually (in footer)</p>
                <p>Plugin</p>

                <p>Blogger/Blogspot:</p>
                <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/217899588-Installing-Sumo-on-Blogger-Blogspot</a></p>
                <p>Manually (in both mobile and desktop)</p>

                <p>Magento:</p>
                <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/115005255888-Installing-Sumo-on-Magento</a></p>
                <p>Manually (1.x & 2.x)</p>
                <p>App (1.x & 2.x)</p>

                <p>Incompatible platforms:</p>
                <p><a href="" target="_blank">https://help.sumo.com/hc/en-us/articles/219100867-Website-platforms-incompatible-with-Sumo</a></p>
                <p>Wordpress.com</p>
                <p>Wix</p>
                <p>Single Page App</p>
                <p>Joomla.com</p>
                <p>Facebook</p>

              </div>
            </div>

            <!-- SECTION START -->
            <div class="section">
              <h3>CERTIFICATION EXAM:</h3>
              <div class="paragraph">
                <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSebaxlZyLczLt8szQNNABmgul1ztJBwbmevbrSV6j52YNr8dw/viewform" target="_blank">https://docs.google.com/forms/d/e/1FAIpQLSebaxlZyLczLt8szQNNABmgul1ztJBwbmevbrSV6j52YNr8dw/viewform</a></p>
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
