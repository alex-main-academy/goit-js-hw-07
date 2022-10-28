import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryMainEl = document.querySelector(".gallery");
let renderHtmlMarkup = "";

// render photos from array to page
function renderPhotosOnPage() {
  galleryItems.map((elem) => {
    renderHtmlMarkup += `
        <div class="gallery__item">
            <a class="gallery__link" href="${elem.original}">
                <img
                class="gallery__image"
                src="${elem.preview}"
                data-source="${elem.original}"
                alt="${elem.description}"
            />
            </a>
        </div>
        `;
  });
}
renderPhotosOnPage();
galleryMainEl.innerHTML = renderHtmlMarkup;

// add Event liseter to photo
let instance;
function openModalWindow(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  instance = basicLightbox.create(`
    <img src="${event.target.getAttribute(
      "data-source"
    )}" width="800" height="600">
  `);

  instance.show();
  event.preventDefault();
}

galleryMainEl.addEventListener("click", openModalWindow);

// add close instanse with Escape
function closeModalWithEscape(event) {
  if (event.key === "Escape") {
    const modalWindowEl = document.querySelector(".basicLightbox");
    if (modalWindowEl) {
      instance.close();
    }
    return;
  }
}

document.addEventListener("keyup", closeModalWithEscape);
