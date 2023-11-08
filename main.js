//image & int canvas set up
const image = document.getElementById('image');
const canvas = document.getElementById('intCanvas');
const ctx = canvas.getContext('2d');
//assigning the width & height of the int canvas; defining the area of the image
image.width = canvas.width;
image.Height = canvas.height;
imageArea = image.width * image.height;
// the imageColorAverage functiont that runs upon page load
window.addEventListener('load', function imageColorAverage(){
    console.log('function is running');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    console.log('canvas loaded');
    //getting image data 
    const scannedImage = ctx.getImageData(0,0, canvas.width, canvas.height).data;
    //separating r,g,b, and a
    //creating empty arrays for each color so i can use for loop to push into them
    var Red = [];
    var Green =[];
    var Blue = [];
    var Alpha = [];

    for(var i = 0; i < scannedImage.length; i+=4){
        Red.push(scannedImage[i+0]);
        Green.push(scannedImage[i+1]);
        Blue.push(scannedImage[i+2]);
        Alpha.push(scannedImage[i+3]);
    }
    // Color Averages
    const redAverage = average(Red);
    const greenAverage = average(Green);
    const blueAverage = average(Blue);
    const alphaAverage = average(Alpha);
    // Color Average Array
    var colorBlend = [];
    colorBlend.push(redAverage);
    colorBlend.push(greenAverage);
    colorBlend.push(blueAverage);
    colorBlend.push(alphaAverage);
    console.log(colorBlend); // document the array 
    //Setting nextCanvas
    const nextCanvas = document.getElementById('nextCanvas');
    const nCtx = nextCanvas.getContext('2d');
    const style = `rgba(${redAverage},${greenAverage},${blueAverage},${alphaAverage})`
    nCtx.fillStyle = style
    nCtx.fillRect(0, 0 , canvas.width, canvas.height);
    //average function
    function average(input){
        var total = 0;
        for (var i = 0; i < input.length; i++){
            total += input[i]
        };
        var avg = total/input.length;
        return avg;
    }
});