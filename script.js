function generateSnippet() {
  var mobileNumber = document.getElementById("mobileNumber").value;
  var imgUrl = document.getElementById("imgUrl").value;

  if (mobileNumber === "") {
    alert("Please enter a mobile number");
    return;
  }

  var snippet = `<button onclick="window.open('https://api.whatsapp.com/send?phone=${mobileNumber}', '_blank')">Chat with us on WhatsApp</button>
<script 
  type="text/javascript"
  src="integration-plugin.js"
  id="aisensy-wa-widget"
  widget-id="${mobileNumber}"
></script>`;

  document.getElementById("snippetContainer").style.display = "block";

  document.getElementById("snippet").textContent = snippet;
}

function copySnippet() {
  var snippetText = document.getElementById("snippet");
  var range = document.createRange();
  range.selectNode(snippetText);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Snippet copied!");
}
