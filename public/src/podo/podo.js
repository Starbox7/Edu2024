const imageFolderPath = "../../asset/podo";
const totalImages = 20;

const imageGallery = document.querySelector(".image-gallery");

for (let i = 1; i <= totalImages; i++) {
  const imgElement = document.createElement("img");
  imgElement.src = `${imageFolderPath}/podo${i}.jpeg`;
  imgElement.alt = `Gallery image ${i}`;
  imageGallery.appendChild(imgElement);
}
