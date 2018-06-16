var btn = document.querySelector('button');
btn.onclick = function() {
    displayMessage('Brian: Hi there, how are you today?', 'warning');
}

function displayMessage(msgText, msgType) {
    var html = document.querySelector('html');

    var panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    var msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);

    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);

    closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel);
    }
    if (msgType === 'warning') {
        msg.style.backgroundImage = 'url(icons/warning.png)';
        panel.style.background = 'linear-gradient(to right, red, purple)';
    } else if (msgType === 'chat') {
        msg.style.backgroundImage = 'url(icons/chat.png)';
        panel.style.background = 'linear-gradient(blue, aqua)';
    } else {
        msg.style.padding.left = '20px';
    }
}