// For main title image, hover to see GIF.  

var titleBMP = new Image;
var titleGIF = new Image;
titleBMP.src = "images/title.bmp";
titleGIF.src = "images/title.gif";

function turnMessage()
	{
	document.title.src = titleBMP.src;
	return;
}

function turnPicture()
{
	document.title.src = titleGIF.src;
	return;
}


// For randomization display of the left color bands.  

var imageArrayLeft = new Array(7);
imageArrayLeft[0] = new Image;
imageArrayLeft[0].src = "Images/band_blue.bmp";
imageArrayLeft[1] = new Image;
imageArrayLeft[1].src = "Images/band_green.bmp";
imageArrayLeft[2] = new Image;
imageArrayLeft[2].src = "Images/band_indigo.bmp";
imageArrayLeft[3] = new Image;
imageArrayLeft[3].src = "Images/band_orange.bmp";
imageArrayLeft[4] = new Image;
imageArrayLeft[4].src = "Images/band_red.bmp";
imageArrayLeft[5] = new Image;
imageArrayLeft[5].src = "Images/band_violet.bmp";
imageArrayLeft[6] = new Image;
imageArrayLeft[6].src = "Images/band_yellow.bmp";

var index = 0;

function select() {
	index = Math.floor(Math.random() * 7);
	document.band1.src = imageArrayLeft[index].src;
	setTimeout("select()", 1000);
	return;
}


// For rotational (cycle) display of the right color bands.  
var imageArrayRight = new Array(7);
imageArrayRight[0] = new Image;
imageArrayRight[0].src = "Images/band_blue.bmp";
imageArrayRight[1] = new Image;
imageArrayRight[1].src = "Images/band_green.bmp";
imageArrayRight[2] = new Image;
imageArrayRight[2].src = "Images/band_indigo.bmp";
imageArrayRight[3] = new Image;
imageArrayRight[3].src = "Images/band_orange.bmp";
imageArrayRight[4] = new Image;
imageArrayRight[4].src = "Images/band_red.bmp";
imageArrayRight[5] = new Image;
imageArrayRight[5].src = "Images/band_violet.bmp";
imageArrayRight[6] = new Image;
imageArrayRight[6].src = "Images/band_yellow.bmp";

var index = 0;

function cycle() {
	document.band2.src = imageArrayRight[index].src;
	index++;
	if (index == 7) {
		index = 0;
	}
	setTimeout("cycle()", 1000);
	return;
}