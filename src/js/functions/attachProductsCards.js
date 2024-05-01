import generateProductCards from "./generateProductCards";
export default function attachProducts(dataArray, parentId) {
  const parentElement = document.getElementById(parentId);
  if (parentElement) {
    const cardsHtml = dataArray.map(generateProductCards).join("");
    parentElement.innerHTML = cardsHtml;
  }
}
