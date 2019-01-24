<template>
  <div class="page">
    <h1>CSS Troubleshootings</h1>
    <div class="wrapper">
      <div class="item">
        <p>

          UNIT: CSS TROUBLESHOOTING

It is inevitable that you will encounter CSS related issues during your journey as a Sumo Support Engineer. Being proficient in troubleshooting CSS related issues will ensure that your journey, although perilous, will be successful and bountiful.

In this unit, we will be going over CSS troubleshooting techniques that will take you from CSS grasshopper to CSS Sensei.

Wax on…

What is CSS?

In order to first understand CSS, you will need to know a little bit about HTML (Hyper Text Markup Language).

HTML is the standard markup language for creating Web pages.

The skeleton of every page on the web looks similar to the following:

<pre>
  <!DOCTYPE html>
  &lt;html&gt;
  &lt;head&gt;
  &lt;title>Page Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
</pre>

<pre>
  &lt;h1>My First Heading&lt;/h1&gt;
  &lt;p>My first paragraph.&lt;/p&gt;

  &lt;/body&gt;
  &lt;/html&gt;
</pre>

The <!DOCTYPE html> declaration defines this document to be HTML5
The &lt;html&gt;element is the root element of an HTML page
The &lt;head&gt;element contains meta information about the document
The &lt;title&gt;element specifies a title for the document
The &lt;body&gt;element contains the visible page content
The &lt;h1&gt;element defines a large heading
The &lt;p&gt;element defines a paragraph

You can find more information about this at the link below:
https://www.w3schools.com/html/default.asp

Ok, so back to CSS. CSS stands for Cascading Style Sheets, and describes how HTML elements are to be displayed on a customer’s site.

CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.

The example above on its own, is pretty basic and will simply be black times new roman text on a white background

(Go ahead, create a .html file on your device and paste the code above into the file. Once this is done, drag the file over the Chrome icon in your dock to see what it looks like in your browser).

In order to change the appearance of the elements on the page above, you would use CSS. This will allow you to change the color, size, shape, and position of the visible elements on the page.

That being said, there are three ways to insert CSS into a customer’s site:

External style sheet
Internal style sheet
Inline style

More on each:

External Style Sheet

With an external style sheet, you can change the look of an entire website by changing just one file.

Each page must include a reference to the external style sheet file inside the <link> element. The <link> element goes inside the &lt;head&gt;section:

Example of link to external style sheet:

<pre>
  <head>
  <link rel="stylesheet" type="text/css" href="mystyle.css">
  </head>
</pre>


The mystyle.css file might look like the file below:


<pre>
  body {
      background-color: lightblue;
  }

  h1 {
      color: navy;
  }
</pre>

The file above configures the background of the page’s body to be ‘lightblue’ in color, and the h1 heading color to navy bue.

You can find more about CSS at the link below:

https://www.w3schools.com/html/html_css.asp

Internal Style Sheet
An internal style sheet may be used if one single page has a unique style.

Internal styles are defined within the &lt;style&gt; element, inside the &lt;head&gt;section of an HTML page:

Example:

<pre>
  &lt;head&gt;
  &lt;style&gt;
  body {
      background-color: linen;
  }

  h1 {
      color: maroon;
      margin-left: 40px;
  }
  &lt;/style&gt;
  &lt;/head&gt;
</pre>


Inline Styles

An inline style may be used to apply a unique style for a single element.

To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.

The example below shows how to change the color and the left margin of a &lt;h1&gt;element:

Example:


&lt;h1 style="color:blue;margin-left:30px;">This is a heading&lt;/h1&gt;


The placement of the CSS affecting an element is important to keep in mind when troubleshooting a CSS related issue, as this may dictate how you go about troubleshooting the issue.

What is a CSS related issue?

So what is a CSS related issue? Great question! A CSS related issue is generally when a customer writes in saying that an element within Sumo is not displaying properly, and the cause is their site’s CSS is overriding Sumo’s.

Wait, hold the phone. How is that possible?

A couple of reasons this may be happening:

Use of the !important rule
Use of global namespacing
Use of universal selectors

Use of the !Important Rule

!important is basically a keyword you can add to the end of a CSS property/value pair to give more weight to that CSS value.

Example:

Styling in mystyle.css:



p {
    color: red !important;
}

#thing {
    color: green;
}

Element in html file:


&lt;p id="thing">Will be RED.&lt;/p&gt;


The reason it is used is due to the nature of CSS, which assigns weight to values according to where they appear in the “cascade”.

When the !important keyword is used on a specific property/value pair, it will cause that particular value to escape the cascade and become, as the name suggests, the most important value for that property, overriding any others.

More on this at the link below:

https://www.impressivewebs.com/everything-you-need-to-know-about-the-important-css-declaration/

Use of Global Namespacing

When writing CSS, it is generally best practice to target a specific CSS class or id, instead of targeting all divs or images on your site, for example.

In the example used below, targeting all images or divs is what is known as using a Global CSS Namespace (styling ALL elements of a certain type - in this case images and divs).


div {
  color: green;
}

img {
    width: 80px;
}


This is not best practice because this practice can have consequences, such as overriding certain elements when it is not desired.

More on this at the link below:

http://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace

Use of Universal Selectors

Another not-so-great practice is to use the CSS universal selector. The CSS universal selector (*) matches elements of any type, and applies the style defined in your CSS to those elements. For example, the example below applies the color green to ALL elements on a website’s pages. You could see how this would be problematic.


* {
  color: green;
}


CSS Troubleshooting Process

Determining if the issue is Global vs local

This is an important step, because it will help determine whether the issue is a global one (affects all users), or a local one (affects only this user, or a smaller subset of users).  Global issues are prioritized higher than local issues when fixing issues.

Reproduce the issue on the user's website

This assumes that the user has Sumo installed on their website currently.  Go to their website and test to see whether you encounter the same issue the user is writing in about.  If they've already provided you with steps to reproduce it, follow them. If not, create a list of steps yourself and write those steps down in case the issue needs to be escalated later.

If you're unable to reproduce the issue, it's likely local to the user's specific setup (browser, computer, network).  In that case use the Apps::Troubleshooting::Can't reproduce issue macro.

Reproduce the issue on a test site

If you were able to reproduce the issue on the user's website, try checking the same issue on a separate test site.  If you have your own website you can test on, this is ideal.  If not, you can use https://sumo.com/demo/site/SITE_ID_GOES_HERE to test with.  Example:

https://sumo.com/demo/site/1afac5f05ae39db1dfaf5a511d9fe0480cc42e2e0737311facc7b6b5e57c9d1c

If you are able to reproduce the issue on your test site, then you know this is a global issue.  Escalate the ticket to Level 2 (if you're a Level 1 agent).  If you're a Level 2 agent, when making a bug report you now know whether the issue is global or local.

Broad strokes

If you find that the issue is not global, and you suspect that the site’s CSS may be causing the issue, you can usually quickly determine this by viewing “Sources” in Google Chrome Dev tools, and deleting the contents of the .css files in the site’s directory of files. If deleting the contents of one file fixes the issue, you know that the issue lies in the CSS, and you can investigate further.

The other strokes

Once you determine that a site’s CSS is the issue, you can inspect the element individually and view all of the styling being applied to the element.

In order to do this, right click on the element being affected within Sumo and click “Inspect” (make sure the “Elements” tab is selected in dev tools once it appears), then look at the CSS listed under “Styles” to the right of the list of elements.

The idea is to look for styling that doesn’t originate from sumo, and uncheck the box next to the left of the line with the property/value pair to remove the styling temporarily. If unchecking the box resolves the issue, you have found the line of code that is causing the issue (NOTE: it is important to make sure that the styling is not Sumo’s but the CSS on the customer’s site).

Once this done, let the customer know the exact file and line that is causing the issue, and let them know they will need to modify their CSS to resolve the issue.

If they are unsure how to do this, they will need to reach out to their platform or theme creator in order to resolve the issue.

Additional Concerns/Tools:

Google Chrome Dev Tools Console

Developer Tools in Google Chrome is one of the most useful tools in the Sumo Support Engineer’s bag of tricks.

In order to open this up, first view a site in Google Chrome and click COMMAND + OPTION + i

Dev tools will allow you to view a site’s source code, view network requests, view event listeners, edit a site’s CSS, and quickly see a website’s assets - all can be extremely helpful when troubleshooting a site.

CSS issues (basic)

You can view the CSS files on a customer’s site by:
Opening up Google Chrome Dev tools (COMMAND + OPTION + i) (or F12 for Windows)
Clicking on “Sources”
Delete .css file contents (one by one)
If fixed, it’s the site’s CSS

Common issues:

Z-index:

The z-index property specifies the stack order of an element.

An element with greater stack order is always in front of an element with a lower stack order.

If a Sumo element is overlaying a customer’s navigation menu, or a site’s element is overlaying an element in the Sumo dashboard, this is most likely a z-index issue, and inspecting the site’s affected element, and modifying the element’s z-index, so that it’s higher or lower, will most likely resolve the issue.

Example tickets:
https://sumome.zendesk.com/agent/tickets/45264
https://sumome.zendesk.com/agent/tickets/71371
https://sumome.zendesk.com/agent/tickets/113724

Hardcoded Sumo Styling:

Another issue that’s less common, and for this reason can be overlooked, is when a customer takes a Sumo class, and attempts to add their own custom styling to the class in their own CSS. You can generally find this added styling in their index file, but sometimes it is buried within an external stylesheet.

Manually overriding Sumo styling with custom css will generally cause issues with Sumo, and when you run into this, it is best to tell the customer to remove the styling if they want us to be able to further troubleshoot this issue.

Example ticket:
https://sumome.zendesk.com/agent/tickets/37288
https://sumome.zendesk.com/agent/tickets/58957


Inline form container:

From time to time, a customer will write in saying that their Sumo inline form is displaying with a different width than intended.

Our Inline Forms are set to conform to the dimensions of the container they are placed in.

That being said, you will need to have the customer modify the styling applied to the container their Inline form has been placed within to resolve the issue.

Example ticket:
https://sumome.zendesk.com/agent/tickets/51365


Open Sans issue:

In some cases, Sumo users will write in saying that when Sumo is activated on their site, the weight of their font on their site changes.

When this happens, it is likely that the version of Open Sans their site is using is conflicting with the version of Open Sans that Sumo uses from the Google Font library.

When you encounter these types of issues, you will need to first verify that the font being used on the customer’s site is Open Sans. To do this, inspect the text on the customer’s site and view the styling applied to the text. If the text is Open Sans, you will see a line similar to the following:

font-family: Open Sans;

If this is the case, let the customer know that this is a known issue that we're aware of, and we can't resolve it until we can easily detect if a font-face is already defined and/or namespace the fonts we load from Google as to not conflict.

Example ticket:
https://sumome.zendesk.com/agent/tickets/19592


Helpful Links:

https://help.sumo.com/hc/en-us/articles/115004671147-How-Sumo-Cookies-Work
https://help.sumo.com/hc/en-us/articles/218680998--Display-Rules
https://www.w3schools.com/html/default.asp

CERTIFICATION EXAM:

https://docs.google.com/forms/d/e/1FAIpQLSft7R4XtpfGrU9ZM-t9AXiqhPv4wkNz1ZRfTLgr24yp9mNAVQ/viewform


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
