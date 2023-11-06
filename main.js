const image = document.getElementById('image');
const canvas = document.getElementById('intCanvas');
const ctx = canvas.getContext('2d');

image.width = canvas.width;
image.Height = canvas.height;

imageArea = image.width * image.height;

window.addEventListener('load', function imageColorAverage(){
    console.log('function is running');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    console.log('canvas loaded');
    const scannedImage = ctx.getImageData(0,0, canvas.width, canvas.height).data;
    console.log(scannedImage);

    let sum = 0;
    for(var i = 0; i < scannedImage.length; i++){
        let currentNum = scannedImage[i];
        sum += currentNum;
    }
    const answer = sum/scannedImage.length;
    console.log(answer);
});