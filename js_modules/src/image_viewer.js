import '../styles/image_viewer.css';
import small from '../assets/small.jpg';    //  String of the image in base64

export default () => {
    const image = document.createElement('img');
    image.src = small;

    document.body.appendChild(image);
}
