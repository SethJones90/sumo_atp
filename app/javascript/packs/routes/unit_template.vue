<template>
  <div class="page">
    <h1>UNIT: NAME</h1>
    <div class="wrapper">
      <div class="item">
        <div class="intro">
          <p>Intro Content</p>
        </div>

        <div class="content">
          <!-- SECTION START -->
          <div class="section">
            <h3>SECTION HEADING</h3>

            <div class="paragraph">
              <p>PARAGRAPH CONTENT</p>
            </div>

            <div class="code-span">
              <p>CODE SPAN</p>
            </div>

            <div class="code-block">
              <p>CODE BLOCK</p>
            </div>

            <div class="paragraph">
              <p>PARAGRAPH CONTENT</p>

                <div class="list-container">
                  <ul>
                    <li>LIST ITEM</li>
                    <li>LIST ITEM</li>
                  </ul>
                </div>
              </div>
              <div class="example-ticket-container">
                <p>Example ticket:</p>
                <p><a href="https://sumome.zendesk.com/agent/tickets/126051" target="_blank">https://sumome.zendesk.com/agent/tickets/126051</a></p>
              </div>
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
