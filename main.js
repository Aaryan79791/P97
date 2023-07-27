
var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:block_y,
	left:block_x
	});
	canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '49') 
	{
		block_image_width = 350;
		block_image_height = 430;
		block_x = 10;
		new_image('Avatar.jpg');
		console.log("1");
	}
	if(keyPressed == '50')
	{
		block_image_width = 350;
		block_image_height = 430;
		block_y = 500;
		block_x = 10
		new_image('Avengers Endgame Poster.jpg')
		console.log("2");
	}
	
	if(keyPressed == '51')
	{
		block_image_width = 350;
		block_image_height = 430;
		block_y =1000;
		block_x = 10;
		new_image('Avatar the Way of Water.jpg')
		console.log("3")
	}
	if(keyPressed == '52')
	{
		block_image_width = 350;
		block_image_height = 430;
		block_y = 1500;
		block_x = 10;
		new_image('Star Wars.jpg')
		console.log("4")
	}
	if(keyPressed == '53')
	{
		block_image_width = 350;
		block_image_height = 430;
		block_y = 2000;
		block_x = 10;
	    new_image('Spiderman 3.jpg')
		console.log("5")
	}
	if(keyPressed == '81')
	{
		block_image_width = 10;
		block_image_height = 150;
		block_x = 350;
	    new_image('Avatar_info.png')
		console.log("q")
	}
	if(keyPressed == '87')
	{
		block_image_width = 280;
		block_image_height = 280;
		block_x = 350;
		block_y = 500;
	    new_image('Avengers_Endgame_Info.png')
		console.log("w")
	}
	if(keyPressed == '69')
	{
		block_image_width = 225;
		block_image_height = 225;
		block_x = 350;
		block_y = 1000;
	    new_image('Avatar_Way_of_Water_info.png')
		console.log("e")
	}
	if(keyPressed == '82')
	{
		block_image_width = 75;
		block_image_height = 170;
		block_x = 350;
		block_y = 1500;
	    new_image('Star_Wars_info.png')
		console.log("r")
	}
	if(keyPressed == '84')
	{
		block_image_width = 250;
		block_image_height = 250;
		block_x = 350;
		block_y = 2000;
	    new_image('Spiderman_Info.png')
		console.log("t")
	}
}

