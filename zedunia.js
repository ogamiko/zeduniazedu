function moveButton(button) {
    const container = button.parentElement;
    const randomX = Math.random() * (container.offsetWidth - button.offsetWidth);
    const randomY = Math.random() * (container.offsetHeight - button.offsetHeight);

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

function selectOption(option) {
    if (option === 'nuca') {
        alert('... აღარ დამელაპარაკო.');
        document.getElementById('question1').style.display = 'none';
        document.getElementById('question2').style.display = 'block';
    } else if (option === 'bozebi') {
        alert('გბლოკავ.');
        document.getElementById('question2').style.display = 'none';
    }
}

function moveSpider(spider) {
    const container = document.body;
    const randomX = Math.random() * (container.offsetWidth - spider.offsetWidth);
    const randomY = Math.random() * (container.offsetHeight - spider.offsetHeight);

    spider.style.left = `${randomX}px`;
    spider.style.top = `${randomY}px`;
}

function createSpiders() {
    for (let i = 0; i < 5; i++) {
        const spider = document.createElement('div');
        spider.classList.add('spider');

        for (let j = 0; j < 8; j++) {
            const leg = document.createElement('div');
            leg.classList.add('leg');
            spider.appendChild(leg);
        }

        document.body.appendChild(spider);
        setInterval(() => moveSpider(spider), 1000);
    }
}

createSpiders();
