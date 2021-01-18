const striptags = (content) => {
  var frag = document.createDocumentFragment();
  var innerEl = document.createElement("div");
  frag.appendChild(innerEl);
  innerEl.innerHTML = content;
  return frag.firstChild.innerText;
};
export default striptags;
