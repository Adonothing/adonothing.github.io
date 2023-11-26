var imageContainer = document.getElementById("image-container");
var image = imageContainer.getElementsByTagName("img")[0];
 
imageContainer.addEventListener("click", function() {
  if (image.src === "image1.jpg") {
    image.src = "image2.jpg";
  } else {
    image.src = "image1.jpg";
  }
});