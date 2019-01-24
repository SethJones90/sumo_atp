<template>
  <div class="page">
    <h1>Advanced Troubleshooting Concepts</h1>
    <div class="wrapper">
      <div class="item">
        <p>
          UNIT: ADVANCED TROUBLESHOOTING & CONCEPTS

          In this section, we are going to discuss some more advanced troubleshooting concepts, as well as cover some basic programming principles that you may find useful during your support engineering pursuits.

          Time to do this!

          Google Chrome Dev Tools

          You have most likely learned about Dev Tools in some of the previous sections, but it is worth reiterating because it is quintessential to your transition from Sumo novice to Sumo Sensei.

          In order to open Developer Tools, first view a site in Google Chrome and click COMMAND + OPTION + i  or F12 for Windows

          Dev tools will allow you to view a site’s source code, view network requests, view event listeners, view articles on a site, edit a site’s CSS, and quickly see a website’s assets - all can be extremely helpful when troubleshooting a site.

          Console errors

          When viewing the console within Developer Tools, you will sometimes see warnings or errors that will give you an indication as to what may be going wrong on a customer’s site.

          When taking a look at these errors, you will encounter two types:

          Errors pointing to Sumo
          Errors not pointing to Sumo

          How do you know which category each error falls into? This is generally pretty simple.

          If you see ‘sumo’ in the URL path of the error, this indicates there is an error in our code. If not, the error lies either in the site’s files or another third party’s.

          Blocking scripts

          We previously discussed identifying a sumo related error vs others. That being said, even scripts not in relation to Sumo can cause Sumo to malfunction. In order to troubleshoot this, you will want to block the scripts on a customer’s site, one at a time, to identify the culprit.

          “How would I go about doing that?” Glad you asked!

          A great tool for doing this is the AdBlock Chrome extension. When you download the AdBlock extension, there will be an additional tab in Google Chrome Dev tools available entitled, “AdBlock.”

          You will want to make sure “Show all items of SCRIPT type” is selected in the left hand side of the area”

          Once this is done, you will have the option to block each script.

          Reload the page after blocking each individual script to see if the blocked script is causing the issue.

          Event listeners

          Another fairly common issue is a site’s event listeners interfering with Sumo’s click functions.

          “What in the heck is an event listener?”

          An event listener is a procedure or function in a computer program that waits for an event to occur; that event may be a user clicking or moving the mouse, pressing a key on the keyboard, or an internal timer or interrupt.

          So essentially, a site’s event listener may intercept our click functions, which causes our buttons or links to be unresponsive.

          In order to confirm this is happening, inspect the element that is not functioning properly (command + option + i, Ctrl + Shift + I on Windows), make sure you are in the “Elements” tab of dev tools, then select “Event Listeners” in the far right hand side of the area. Once this is done, select “Click” for the list of listeners on the click event.

          The idea here is to “Remove” event listeners that are not Sumo’s, until you find the culprit. If the button or link works when removing the listener, that’s the one!

          You can see if a listener is Sumo’s by hovering over each list item. You should see “sumo” in the path if it’s ours. Event listeners within GTM installations frequently cause conflict with Sumo.

          Variables for javascript display rules

          Another use for the dev tools console is for troubleshooting our javascript display rules.

          Our javascript display rules are set to trigger based off of the value or existence of a selected variable.
          “What’s a variable?”

          Variables, more specifically, JavaScript variables in this case are containers for storing data values.

          In the example below, a through f, are variables:

          var a = true;
          var b = false;
          var c = “cat”;
          var d = 5;
          var e = 6;
          var f = d + e;

          If a variable exists on a site, you can simply type the name of the variable denoted in the Display Rule into the “Console” tab of dev tools, and the value of the variable should be returned. If the variable is not defined, you will see “undefined” printed underneath the variable name you typed in.

          So for example, if the variable in the display rule is isUser, you would type isUser into the console.

          Seeing the value of a variable, or if it exists or not, will give you a good idea of why a form is not displaying as the customer intends. You can also ask follow up questions, such as, when is this variable being created? Can you explain how this variable is being created, and when?

          Sometimes a user might give you the exact function they are using to set variable and/or its value. This can be very helpful, especially if this needs to be escalated to a dev.

          “What is a function?” Boy, you sure do have a lot of questions today… kidding!

          A function is a JavaScript procedure—a set of statements that performs a task or calculates a value.

          An example of a function is below. In this example, this function, named “square,” takes argument (also called a parameter), in this case “number,” then returns the number multiplied by itself - hence the name square. Below the function, you will see it is invoked, and the number 2 is passed in. Can you guess what the “square” function will do? You guessed it, it will return the number 4.

          function square(number) {
            return number * number;
          }

          square(2); // returns 4


          How about the function below? The function below sets the value of the “result” variable to “number” multiplied by itself.

          &ltscript&gt;

          var result  = “”;

          function square(number) {
            result = number * number;
          };

          square(4); // sets result variable value to 16

          &lt/script&gt;

          So to apply this to troubleshooting javascript rules, in the example above, if the proper script has been written on the site, you should be able to type “result” into the console, and the number 16 will be returned. If it is returning an unexpected value, or it is undefined, you can safely assume that the script the customer wrote is not acting as it should.

          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

          Variables can be numbers, strings (anything between quotes), objects, arrays, or even other functions.

          You can find more information about some common data types below:

          String:

          A JavaScript string stores a series of characters like "John Doe".

          A string can be any text inside double or single quotes:

          var carName = "Volvo XC60";
          var carName = 'Volvo XC60';


          https://www.w3schools.com/jsref/jsref_obj_string.asp

          Number:

          JavaScript has only one type of number.

          Numbers can be written with, or without, decimals:

          Example:


          var x = 3.14;     // A number with decimals
          var y = 34;       // A number without decimals


          https://www.w3schools.com/jsref/jsref_obj_number.asp

          Array:

          The Array object is used to store multiple values in a single variable:


          var cars = ["Saab", "Volvo", "BMW"];


          https://www.w3schools.com/jsref/jsref_obj_array.asp

          Object:

          You have already learned that JavaScript variables are containers for data values.

          This code assigns a simple value (Fiat) to a variable named car:


          var car = "Fiat";


          Objects are variables too. But objects can contain many values.

          This code assigns many values (Fiat, 500, white) to a variable named car:


          var car = {
          type:"Fiat",
          model:"500",
          Color:"white”
          };


          The values are written as name:value pairs (name and value separated by a colon).

          JavaScript objects are containers for named values.

          Object Properties

          The name:values pairs (in JavaScript objects) are called properties.


          var person = {
          firstName:"John",
          lastName:"Doe",
          age:50,
          eyeColor:"blue"
          };

          To access the firstName of the person above, you would type the following into the console:


          person.firstName();


          Hopefully you have a better handle on javascript, and how you can use it to troubleshoot our Javascript rules :)

          https://www.w3schools.com/js/js_objects.asp

          Cookies

          An HTTP cookie (also called web cookie, Internet cookie, browser cookie, or simply cookie) is a small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing.

          In order to view the cookies issued on a customer’s site, you will need to navigate to the Application tab of Google Chrome Dev Tools, then select the file with the domain’s name under the “Cookies” directory on the left hand side.

          When a customer is setting a form to display based on a cookie, there are few things to consider - all of which are equally likely to be an issue when troubleshooting cookies.

          The cookie is not being set, or the value of the cookie is not what is defined in their Display Rule
          The cookie is HTTPOnly
          The cookie is being set after page load

          Let’s dive right into these issues.

          When troubleshooting a cookie related Display Rule, you should always check to see if the cookie is being set and the value of the cookie is what is defined in their Display Rule. You can check this within the “Application” tab of Google Chrome Dev Tools.

          When a cookie is properly set, you should be able to see it in the Application tab after clicking “Cookies,” then clicking on the URL of your site in the list of URLs in the Cookies folder. You should see the name of the cookie in the far left column of the table and its value in the column to the right of it, along with other information such as Domain, Path, Expires / Max-Age, etc.

          After you have verified that the cookie is being set and the value is correct, you will need to verify that the cookie is not HTTPOnly if the display rule is not working.

          HTTPOnly cookies cannot be accessed at all by Sumo via JavaScript. The customer will need to change the cookie to not be HttpOnly if they want it to be trackable by Sumo. You can check if a cookie is HTTPOnly within the “Application” tab of Google Chrome Dev Tools.  If the cookie is HTTPOnly, there will be a check mark in the HTTP column of the table your cookie is displayed in.

          If you have checked all of the above and the popup is still not functioning properly, you will need to verify that the cookie is not being set after page load.

          If this is the case, Sumo will not be able to see this cookie until the page is reloaded. Sumo will only check for cookies on initial page load.

          Pixel troubleshooting

          When troubleshooting pixel issues, a quick way to determine if the Sumo functionality is working properly is to insert a script with an expected output into the Tracking, Subscribe, or CTA text areas in Sumo.

          When everything is in working order, any javascript you write will be fired on one of three events - Tracking, Subscribe, or CTA, depending on which area you place the javascript in.

          Paste any of the following scripts within the pixel text areas to quickly determine if Sumo is working properly. If the javascript fires on the proper event, the issue is most likely not on the Sumo side.

          Console.log:


          &ltscript&gt;
             console.log(“TESTING SUMO PIXEL”);
          &lt/script&gt;


          The console.log() method will display whatever you place within the parentheses of the console.log in your Google Chrome Dev Tools console - in the example above it is the string, “TESTING SUMO PIXEL”

          Window Alert:


          &ltscript&gt;
            window.alert(“TESTING SUMO PIXEL”);
          &lt/script&gt;


          The window.alert() method will display whatever you place within the parentheses of the window.alert in an alert box - in the example above it is the string, “TESTING SUMO PIXEL”

          ** note: it is generally better to use console.log because the window alert will be visible to the site’s visitors, and that is not always optimal.


          Set A Cookie:


          &ltscript&gt;
             document.cookie =”name=oeschger”;
          &lt/script&gt;


          You can also choose to issue a cookie when on a certain event. This is a bit more time consuming, since you will need to navigate to the Application tab of Google Chrome Dev Tools in order to view it, but if you need to quickly test a cookie, this is a quick way to set one on a visitor’s site. However, for debugging purposes, you are most likely better off with console.log or window.alert.

          In the event that you need to perform a more thorough inspection, you will need to inspect the Network tab to see if the pixel the customer has pasted into Sumo is actually firing.

          In order to inspect more thoroughly, you will first need to open the dev tools console, and navigate to the “Network” tab in Dev tools. Once you have done this, trigger the event in question within Sumo (tracking, conversion, subscribe).

          [Scan for an event matching the pixel, i.e. facebook or google]. If you see a 200 OK message next to the event, everything is working properly.

          200 OK is the standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request, the response will contain an entity describing or containing the result of the action.

          If you do not, see a 200 OK, likely something is not working properly within their pixel.

          Knowing other HTTP codes may be helpful to you when attempting to troubleshoot an issue.

          Here’s a quick list of some of the more common codes:

          400 Bad Request
          The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing).

          401 Unauthorized
          Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource. See Basic access authentication and Digest access authentication. 401 semantically means "unauthenticated",[35] i.e. the user does not have the necessary credentials.
          Note: Some sites issue HTTP 401 when an IP address is banned from the website (usually the website domain) and that specific address is refused permission to access a website.

          403 Forbidden
          The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource, or may need an account of some sort.

          404 Not Found
          The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.

          500 Internal Server Error
          A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.

          502 Bad Gateway
          The server was acting as a gateway or proxy and received an invalid response from the upstream server.

          503 Service Unavailable
          The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.

          504 Gateway Timeout
          The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.

          https://en.wikipedia.org/wiki/List_of_HTTP_status_codes


          VPN

          Another troubleshooting tool is a VPN. VPN stands for "Virtual Private Network." Using encryption and other security measures, a VPN can scramble all the data sent through the wide area network, so the network is "virtually" private, and is great for encrypting your data and boosting security, but it's also useful to obscure your IP address. Your IP address is assigned to your internet connection by your service provider, and it can reveal who your service provider is and (in general) where you're located.

          How does this relate to troubleshooting in Sumo? If a customer is having an issue with our location-based display rules, because the rules function based of a database of IP address, you could use a VPN to obscure your IP address, and test from an IP address in another location.

          There are many VPNs with various levels of efficacy, but a free extension you could use is called Hola - not the best in the world, but could come in handy.

          https://chrome.google.com/webstore/detail/unlimited-free-vpn-hola/gkojfkhlekighikafcpjkiklfbnlmeio?hl=en

          https://techterms.com/definition/vpn

          GET/POST Variables:

          Another frequently asked question you will encounter is, “what is the POST/GET functionality I am seeing in the Success tab of List Builder? Do I need it?

          Most customers do not need this functionality, since Sumo already collects email addresses, and allows its users to connect to third party Email Service Providers. However, there may be special cases where a customer needs to pass an email address to a redirect URL for some custom functionality - an example of this might be creating a special coupon code that includes the user’s email address.

          For this functionality, you can pass the email address as either a POST or a GET Variable.

          In order to pass your email address as a POST/GET variable to your Success Redirect URL, you would simply need to do the following:

          1) Define your Success Redirect URL (you can do this within the Success Redirect URL text area)

          2) Choose whether you would like to send your visitors' email address as a POST or GET variable by choosing either "Pass email address as a GET variable" or "Pass email address as a POST variable"

          After that, you will have access to your visitors' email addresses on the Success Redirect URL.

          The difference between GET and POST variables are below:


          GET - Requests data from a specified resource
          POST - Submits data to be processed to a specified resource


          Essentially GET refers to retrieving a resource, such as a link, image, or any collection of resources.

          POST refers to creating/saving a resource in a collection.

          You can find more information about this at the link below:

          http://www.w3schools.com/tags/ref_httpmethods.asp

          Although we only touch on GET/POST variables in Sumo, you may find it useful to know the rest of the HTTP Actions as well. See below for more information:


          Method	Scope	            Semantics

          GET		collection	Retrieve all resources in a collection
          GET		resource	Retrieve a single resource
          HEAD		collection	Retrieve all resources in a collection (header only)
          HEAD		resource	Retrieve a single resource (header only)
          POST		collection	Create a new resource in a collection
          PUT		resource	Update a resource
          PATCH		resource	Update a resource
          DELETE	resource	Delete a resource
          OPTIONS	any		Return available HTTP methods and other options


          http://restful-api-design.readthedocs.io/en/latest/methods.html

          CNAME

          Another common issue, a bit more advanced, is when a customer has an issue with configuring their custom email address within our Auto Responder feature in List Builder.

          This can be a bit of a complex issue because CNAMEs will need to be configured within the customer’s DNS.

          A Canonical Name record (abbreviated as CNAME record) is a type of resource record in the Domain Name System (DNS) used to specify that a domain name is an alias for another domain (the 'canonical' domain).

          An example of CNAME records you will see in Sumo:

          sumomail.test.com  	       |   whitelabel.sumomail.com
          s1._domainkey.test.com   |   s1.whitelabel.sumomail.com
          s2._domainkey.test.com   |   s2.whitelabel.sumomail.com

          The customer will need to input the records above exactly into their DNS provider.

          In the event the customer claims they have done this, and it is still not validating properly, you will want to acquire a screenshot of their records, or possibly their credentials to verify the records have been entered correctly.

          If they have not, you will need to test with mxtool.

          https://mxtoolbox.com/SuperTool.aspx?action=cname%3asumomail.hoppedla.com&run=toolpage#
          https://mxtoolbox.com/SuperTool.aspx?action=cname%3as1._domainkey.hoppedla.com&run=toolpage#
          https://mxtoolbox.com/SuperTool.aspx?action=cname%3as2._domainkey.hoppedla.com&run=toolpage#

          When checking in MXTool, you will want to verify that the Domain Name and the Canonical Name in the CNAME record listed are identical to the records provided by Sumo, also, “DNS Record Published” should be present under the “Test” column, and “DNS Record found” should be displayed under the “Result” column.

          In the event that the names are still not validating in Sumo, and you see the information above in MXTool, this should be escalated to a senior agent.

          Local testing

          There may be times when you need to alter your customer’s source code on a page if you suspect something in their code is creating an issue with Sumo.

          When this is the case, you will want to copy the code of the page you are on, and paste it into an Integrated Development Environment (IDE), such as Brackets, then preview it live.

          http://brackets.io/

          Ideally, you will want to remove code that you suspect is a problem, one line (or chunk) at a time, until your find the culprit.


          CERTIFICATION EXAM:

          https://docs.google.com/forms/d/e/1FAIpQLScKR8hddVJCKl3-YjVivQuu0Jc26oHNhxvweoX34HEuJ0qBqg/viewform

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
