document.addEventListener('DOMContentLoaded', function () {
  boldifyText();
});

function boldifyText() {
  let textNodes = document.body.childNodes;

  for (let i = 0; i < textNodes.length; i++) {
    processNode(textNodes[i]);
  }
}

function processNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.nodeValue = boldifyWords(node.nodeValue);
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    for (let i = 0; i < node.childNodes.length; i++) {
      processNode(node.childNodes[i]);
    }
  }
}

function boldifyWords(text) {
  return text.replace(/\b(\w{2})\w*\b/g, (match, group) => `<b>${group}</b>`);
}
