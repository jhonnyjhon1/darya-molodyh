const contactText = `
        <h2 class="alert_h">Форма связи</h2>
        <input type="text" name="name" id="name" placeholder="Введите Ваше имя">
        <input type="text" name="email" id="email" placeholder="Введите Ваш email">
        <textarea name="quest" id="quest" placeholder="Введите Ваш вопрос"></textarea>
        <button class="alert_btn">Отправить</button>`

const profileText = `
 <h2 class="alert_h">Дарья Молодых</h2>
        <img src="img/узор.png" alt="узор">
        <p class="alert_p">Привет! Меня зовут Дарья Молодых. По образованию и призванию я учитель. 
            Ежедневно я вижу, как напряжение, стресс и эмоциональные перегрузки отражаются на самочувствии – 
            и у детей, и у взрослых.</p>
`

const projectText = `
    <img class="alert_img" src="img/komiks.jpg">
`;

const [linkOne, linkTwo, linkThree] = [
    document.querySelector('.link-1'),
    document.querySelector('.link-2'),
    document.querySelector('.link-3')
];

const cross = document.querySelector('.cross');
const [contacts, contactsArrow, profile, project] = [
    document.querySelector('.contacts'),
    document.querySelector('.contacts_arrow'),
    document.querySelector('.profile'),
    document.querySelector('.project')
];

contacts.addEventListener('click', () => {
    customAlert(contactText);
})

contactsArrow.addEventListener('click', () => {
    customAlert(contactText);
})

profile.addEventListener('click', () => {
    customAlert(profileText);
})

project.addEventListener('click', () => {
    customAlert(projectText);
})

const customAlert = (text) => {
    document.querySelector('.alert').style.top = '50%';
    document.querySelector('.alert').children[0].innerHTML = text;
    document.querySelector('main').style.filter = 'brightness(0.5)';
}

cross.addEventListener('click', () => {
    crossAlert();
});

const crossAlert = () => {
    document.querySelector('.alert').style.top = '-50%';
    document.querySelector('main').style.filter = 'brightness(1)';
}

linkOne.addEventListener('click', () => {
    document.querySelector('.video-1').style.display = "block";
    document.querySelector('.video-2').style.display = "none";
    document.querySelector('.video-3').style.display = "none";
})

linkTwo.addEventListener('click', () => {
    document.querySelector('.video-2').style.display = "block";
    document.querySelector('.video-1').style.display = "none";
    document.querySelector('.video-3').style.display = "none";
})

linkThree.addEventListener('click', () => {
    document.querySelector('.video-3').style.display = "block";
    document.querySelector('.video-1').style.display = "none";
    document.querySelector('.video-2').style.display = "none";
})