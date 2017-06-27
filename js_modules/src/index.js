import sum from './sum';
import './image_viewer';    //  Doesn't actually import any executable code. All it has to do is run in our module. That's why it's a different import.

const total = sum(10, 5);
console.log(total);
