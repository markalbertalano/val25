document.getElementById('no').addEventListener('click', () =>{

    const yes = document.getElementById('yes');
    const Currwidth = yes.offsetWidth;
    const Currheight = yes.offsetHeight;

    yes.style.width = Currwidth * 1.1 + 'px';
    yes.style.height = Currheight * 1.1 + 'px';

});

document.getElementById('yes').addEventListener('click', () => {

    const body = document.body;
    body.innerHTML = '';

    const gif = document.createElement('img');
    gif.src = 'images/froglove.gif';
    gif.alt = 'Celebration GIF';
    gif.style.width = '100%';
    gif.style.height = '100%';
    gif.style.objectFit = 'cover';

    body.appendChild(gif)

});