import '../styles/image_viewer.css';
import big from '../assets/big.jpg';    //  URL to file
import small from '../assets/small.jpg';    //  String of the image in base64

const image = document.createElement('img');
image.src = small;

document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big;

document.body.appendChild(bigImage);