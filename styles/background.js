function changeImg(imgNumber) {
	var myImages = ["images/banner0.jpg", "images/banner1.jpg", "images/banner2.jpg", "images/banner3.jpg", "images/banner4.jpg", "images/banner5.jpg", "images/banner6.jpg", "images/banner7.jpg"]; 
	var imgShown = document.getElementById('banner').style.backgroundImage;
	var newImgNumber =Math.floor(Math.random()*myImages.length);
	document.getElementById('banner').style.backgroundImage = 'url('+myImages[newImgNumber]+')';
}
window.onload=changeImg;