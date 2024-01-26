function loadImages() {
  document.getElementById("loader").style.display = "block";
  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then(response => response.json())
    .then(data => {
      document.getElementById("loader").style.display = "none";
      const btnNode = document.querySelector('.btn');
btnNode.addEventListener('click', function() {
loadImages()
})
      const gallery = document.querySelector(".gallery");
     gallery.innerHTML = "";
     data.forEach(photo => {
       const img = document.createElement("img");
       img.src = photo.url;
       gallery.appendChild(img);
     });
   })
   .catch(error => {
     console.error("Ошибка загрузки фотографий:", error);
     document.getElementById("loader").style.display = "none";
   });
}