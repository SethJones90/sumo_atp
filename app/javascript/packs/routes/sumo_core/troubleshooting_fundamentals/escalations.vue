<template>
  <div class="page">
    <h1>Escalations</h1>
    <div class="wrapper">
      <div class="item">
        <p>
          UNIT: ESCALATIONS

          Saddle up! In this unit, you will be learning how to properly escalate issues to L2 and L3 agents.

          It’s important to become masterful at escalating these issues because this is the last step before sending an issue to a developer. This leaves a great deal of responsibility on the agent escalating the issue at hand, so it is important to be thorough and follow process.

          Yeehaw!

          How escalations work:

          Ideally when escalating issues from an L1 to an L2 agent, the report from the L1 agent should be able to be pasted into #ask-a-dev, without edit (or very little edits).

          #ask-a-dev is a Slack channel we have that provides access to our developers. Communicating with developers directly is a privilege, so all of the legwork must be done before asking a developer for assistance to ensure their time is not wasted.

          Because of this, when escalating to an L2 agent, the format you should follow is the one outlined at the link below (also listed later in this unit):

          https://sites.google.com/appsumo.com/cx-process/support/responsibilities/reporting-bugs

          Escalation process

          When you run into issues that are unable to be resolved through basic troubleshooting, escalate to a Level 2 or 3 Agent.

          Escalation/Response review process

          IMPORTANT: Add a note to the ticket including all relevant information to the case:
          Whether the issue is global or local to the user's website
          The plan the user is on
          A URL where the issue is reproducible
          A detailed description of the issue
          A detailed list of steps that can be used to reproduce the issue

          Use the "L1 > L2" Macro  and change the group of the ticket to ""L1 > L2 Escalations"
          or use the “L1 > L2 Escalation (no response)” macro and change the group of the ticket to ""L1 > L2 Escalations"

          Which you use depends on the situation.

          First response? Use the “L1 > L2 Escalation (no response)” macro and change the group of the ticket to ""L1 > L2 Escalations"

          Second+ response?  Use the L1 > L2 Escalations macro and change the group of the ticket to ""L1 > L2 Escalations"

          Click the "Submit as Open" or "Submit as New" button to escalate.

          Which you use depends on the current status on the ticket

          Open ticket = "Submit as Open"

          New ticket = "Submit as New"

          Troubleshooting steps to follow when writing a bug report:

          Do a complete site verification to make sure Sumo is installed on the page the user is having an issue with. This should have been done automatically when you were diagnosing the issue to begin with.

          Be able to replicate the issue 100% of the time so that when a developer looks at it, they can see the same exact thing that you're seeing. If it's an intermittent issue, make sure to mention this along with the approximate probability of the issue occurring.

          Take screenshots and/or a screencast video of the issue to clearly illustrate what's happening.

          Come up with a well-thought out summary of the issue, including as much accurate technical detail as possible. Include:
          Whether the issue is global or local to the user's website
          The plan the user is on
          A URL where the issue is reproducible
          A detailed description of the issue
          A detailed list of steps that can be used to reproduce the issue
          A screenshot or screencast, if helpful in further troubleshooting the issue
          Any admin credentials you have received from the user, if they are needed to further troubleshoot the issue.

          An example of a bug report containing all of the content above is below:





          Customer's Inline Forms Not Sending Auto Responder

          Reported by Sumo Pro Professionals Aug 2018 Monthly customer (https://sumo.com/admin/sites/id/9c1fe200e1a77b00baa2200012b50a0070f7f30082c6ec00f2033200dd2b2b00)

          Case being handled by: [AGENT NAME]

          Customer has two inline forms on their site that are not sending Auto Responder emails.

          The Sumo Double Opt In is on, and the email meant for confirming the subscription is sent properly, but the Welcome Email is not.

          You can replicate this by signing up through the inline form, “Crowdfunding inscription En,” on the URL below.

          Autoresponder emails are not being sent to subscribers for both inline forms, but the subscriber information is being collected and the sumo double opt-in email is being sent.

          The inline forms appear to be set up correctly and Sumo is also installed correctly on their website. There are no relevant console errors nor any issues in the network tab. I tested the inline forms on my test site as well with the same result.

          All other forms, popup and inline work on my test site, and test forms work on the customer's site, so this doesn’t look to be global.

          The issue seems to be with these two inline forms specifically. A discount code is not applied to the Welcome Email and the Auto Responder setting is set to the "ON" position.

          Link to live example: https://fundraising.bplatform.fr/index.php/en/b-platform-fundraising-en/#section_IlEu4

          Link to Zendesk ticket: https://sumome.zendesk.com/agent/tickets/129242



          Escalations Do’s and Don’ts


          Do:

          Be concise:
          Be thorough
          List steps to reproduce
          Report one issue at a time (unless two issues are related)


          Do Not:

          Write novels
          Cut corners
          Assume anything
          List multiple issues in one ticket (unless you believe they are related)


          Common Issues

          When writing bug reports, it’s important to avoid these common pitfalls:

          Reporting issues that aren’t actual bugs

          This is self explanatory. You should be escalating issues that are examples of Sumo malfunctioning or conflicting with a customer’s site. These issues should not be caused by Sumo functionality that is intended.

          If you are unsure if the Sumo functionality is intended. You should ask a senior agent before escalating an issue.

          Escalated prematurely

          Another common issue that is self explanatory - escalating tickets prematurely. It is absolutely imperative that you do the legwork before escalating an issue to a senior agent. In the event that an issue has not been properly vetted and troubleshot, the senior agent will assign back to you and give you a poor escalation score.

          If you ever have any questions about how to thoroughly troubleshoot an issue, feel free to ask a senior agent in Slack or Zoom first. They would be happy to help.

          Finding a workaround for the issue before fixing it (not having reproducible error)

          This issue is less common, but sometimes agents troubleshoot issues after providing a workaround for a customer. This ok, unless the workaround makes it so that the agent cannot replicate the original issue.

          When an issue is being escalated, the issue must be able to be reproduced, so that the agent can confidently pass this to a developer. Without seeing an example of the “broken” functionality, the developer will have a hard time resolving it. Always make sure to pass issues that can be reliably reproduced.

          Helpful Links
          https://sites.google.com/appsumo.com/cx-process/support/responsibilities/reporting-bugs

          CERTIFICATION EXAM:


          https://docs.google.com/forms/d/e/1FAIpQLSfhJwyblScfYGF-4CaT8SAfTTZtwihVAYFYBXUwZsPf2q6BSA/viewform


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
