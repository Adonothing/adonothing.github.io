<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>console.log("头像")
var currentIndex = 0; // 当前显示的图片索引号
var newIndex = 0; // 下一张显示的图片索引号
var images = [
  "https://picture.adunas.top/AdunasAvatarCoolA.png", 
  "https://picture.adunas.top/AdunasAvatarSmileA.png", 
  "https://picture.adunas.top/AdunasAvatarJealousA.png",
  "https://picture.adunas.top/AdunasAvatarCorrectA.png"
]; // 图片列表，根据实际情况修改，要求第一图像和配置文件_config.butterfly.yml里的相同。

//------检索第一个容器--------//
// var imageContainer = document.getElementsByClassName("avatar-img")[0];
// var image = imageContainer.getElementsByTagName("img")[0];
// imageContainer.addEventListener("click", function() {
//   console.log("鼠标点击一次",image.src)
//   while (newIndex === currentIndex) { // 新的索引号不能等于旧的索引号
//     newIndex = Math.floor(Math.random() * images.length); // 随机生成新的索引号
//   }
//   currentIndex = newIndex;
//   image.src = images[currentIndex]; // 更新图片路径
// });

//------检索所有容器，检测到鼠标点击后，同时切换所有地方的图片--------//
var ContainerIndex = 0;
var ContainerLength = document.getElementsByClassName("avatar-img").length;
while(ContainerIndex !== ContainerLength){ //每个容器都要检查

  var imageContainer = document.getElementsByClassName("avatar-img")[ContainerIndex];
  imageContainer.addEventListener("click", function() { // 检查该容器是否被鼠标单击
  // imageContainer.addEventListener("dblclick", function() { // 检查该容器是否被鼠标双击

    while (newIndex === currentIndex) { // 新的索引号不能等于旧的索引号
      newIndex = Math.floor(Math.random() * images.length); // 随机生成新的索引号
    }
    currentIndex = newIndex;

    var NewContainerIndex = 0;
    while(NewContainerIndex !== ContainerLength){ // 每个容器都要切换相同的图片
      var NewImageContainer = document.getElementsByClassName("avatar-img")[NewContainerIndex];
      var image = NewImageContainer.getElementsByTagName("img")[0];
      image.src = images[currentIndex]; // 更新图片路径
      NewContainerIndex ++;
    }
  });

  ContainerIndex ++;
}