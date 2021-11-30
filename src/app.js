import './app.less';
import doge from './assets/images/doge.jpg';

const root = document.querySelector('#root');
root.innerHTML = 'hello, webpack!';

const img = document.createElement('img');
img.setAttribute('src', doge);
root.append(img);
