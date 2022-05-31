const main = document.getElementById('main');
const luisterNav = document.getElementById('luisternav');
const luisterHome = document.getElementById('luisterhome');
const accessNav = document.getElementById('accessnav');
const accessHome = document.getElementById('accesshome');
const overNav = document.getElementById('overnav');
const overHome = document.getElementById('overhome');
const recensiesNav = document.getElementById('recensiesnav');
const recensiesHome = document.getElementById('recensieshome');
const contactNav = document.getElementById('contactnav');
const contactHome = document.getElementById('contacthome');

const clearMenu = () => {
    main.innerHTML = '';
    luisterNav.classList.remove('active');
    accessNav.classList.remove('active');
    overNav.classList.remove('active');
    recensiesNav.classList.remove('active');
    contactNav.classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const makeListeningArticle = () => {
    const newArticle = document.createElement('article');
    newArticle.classList.add('listening');
    const newH1 = document.createElement('h1');
    newH1.innerText = listenText[0];
    newArticle.appendChild(newH1);
    const firstSection = document.createElement('section');
    firstSection.innerText = listenText[1];
    newArticle.appendChild(firstSection);
    const newDiv = document.createElement('div');
    newDiv.classList.add('logo');
    const newImg = document.createElement('img');
    newImg.src = "./images/Logo-Luisterkind-werkers[3344].png";
    newDiv.appendChild(newImg);
    newArticle.appendChild(newDiv);
    for (i=2; i<5; i++) {
        const newSection = document.createElement('section');
        newSection.innerText = listenText[i];
        newArticle.appendChild(newSection);
    };
    const newPrice = document.createElement('div');
    newPrice.classList.add('price');
    newPrice.innerText = listenText[5];
    newArticle.appendChild(newPrice);
    return newArticle;
};

const makeBirthArticle = () => {
    const newArticle = document.createElement('article');
    newArticle.classList.add('birth');
    const newH1 = document.createElement('h1');
    newH1.innerText = birthText[0];
    newArticle.appendChild(newH1);
    const firstSection = document.createElement('section');
    firstSection.innerText = birthText[1];
    newArticle.appendChild(firstSection); 
    const newDiv = document.createElement('div');
    newDiv.classList.add('pregnant');   
    const newImg = document.createElement('img');
    newImg.src = './images/buik.jpg';
    newDiv.appendChild(newImg);    
    newArticle.appendChild(newDiv);
    const secondSection = document.createElement('section');
    secondSection.innerText = birthText[2];
    newArticle.appendChild(secondSection);
    const questionsH4 = document.createElement('h4');
    questionsH4.innerText = birthText[3][0];
    newArticle.appendChild(questionsH4);
    const newUL = document.createElement('ul');
    for (i=1; i<birthText[3].length; i++) {
        const newLi = document.createElement('li');
        newLi.innerText = birthText[3][i];
        newUL.appendChild(newLi);
    };
    newArticle.appendChild(newUL);
    const questionsSection = document.createElement('section');
    questionsSection.innerText = birthText[4];
    newArticle.appendChild(questionsSection);
    const tuningH4 = document.createElement('h4');
    tuningH4.innerText = birthText[5][0];
    newArticle.appendChild(tuningH4);
    const newOL = document.createElement('ol');
    for (i=1; i<birthText[5].length; i++) {
        const newLi = document.createElement('li');
        newLi.innerText = birthText[5][i];
        newOL.appendChild(newLi);
    };
    newArticle.appendChild(newOL);
    const tuningSection = document.createElement('section');
    tuningSection.innerText = birthText[6];
    newArticle.appendChild(tuningSection);
    const newPrice = document.createElement('div');
    newPrice.classList.add('price');
    newPrice.innerText = birthText[7];
    newArticle.appendChild(newPrice);
    return newArticle;
};

const addLuisterkindToDOM = () => {    
    clearMenu();
    luisterNav.classList.add('active');
    const listenArticle = makeListeningArticle();
    main.appendChild(listenArticle);
    const birthArticle = makeBirthArticle();
    main.appendChild(birthArticle);
};

luisterNav.addEventListener('click', addLuisterkindToDOM);
luisterHome.addEventListener('click', addLuisterkindToDOM);


const addAccessBarsToDOM = () => {
    clearMenu();
    accessNav.classList.add('active');
    const newArticle = document.createElement('article');
    newArticle.classList.add('bars');
    const newH1 = document.createElement('h1');
    newH1.innerText = accessText[0];
    newArticle.appendChild(newH1);    
    const firstSection = document.createElement('section');
    firstSection.innerText = accessText[1];
    newArticle.appendChild(firstSection);
    const firstDiv = document.createElement('div');
    firstDiv.classList.add('photobars');
    const firstImg = document.createElement('img');
    firstImg.src = './images/bars1.png';
    firstDiv.appendChild(firstImg);
    newArticle.appendChild(firstDiv);
    const secSection = document.createElement('section');
    secSection.innerText = accessText[2];
    newArticle.appendChild(secSection);
    const secDiv = document.createElement('div');
    secDiv.classList.add('photobars');
    const secImg = document.createElement('img');
    secImg.src = './images/bars2.png';
    secDiv.appendChild(secImg);
    newArticle.appendChild(secDiv);
    const thirdSection = document.createElement('section');
    thirdSection.innerText = accessText[3];
    newArticle.appendChild(thirdSection);
    const thirdDiv = document.createElement('div');
    thirdDiv.classList.add('photobars');
    const thirdImg = document.createElement('img');
    thirdImg.src = './images/bars3.png';
    thirdDiv.appendChild(thirdImg);
    newArticle.appendChild(thirdDiv);
    const fourthSection = document.createElement('section');
    fourthSection.innerText = accessText[4];
    newArticle.appendChild(fourthSection);
    const newPrice = document.createElement('ul');
    newPrice.classList.add('pricelist');
    for (i=0; i<4; i++) {
        const newLi = document.createElement('li');
        const newProduct = document.createElement('div');
        newProduct.classList.add('product');
        newProduct.innerText = '• ' + accessText[5][i];
        newLi.appendChild(newProduct);
        const newPriceTag = document.createElement('div');
        newPriceTag.classList.add('pricetag');
        const euroSign = document.createElement('div');
        euroSign.classList.add('euro');
        euroSign.innerText = '€';
        newPriceTag.appendChild(euroSign);
        const newItemPrice = document.createElement('div');
        newItemPrice.classList.add('itemprice');
        newItemPrice.innerText = accessText[6][i];
        newPriceTag.appendChild(newItemPrice);
        newLi.appendChild(newPriceTag);
        newPrice.appendChild(newLi);
    };
    newArticle.appendChild(newPrice);
    main.appendChild(newArticle);
};

accessNav.addEventListener('click', addAccessBarsToDOM);
accessHome.addEventListener('click', addAccessBarsToDOM);


const addOverMijToDOM = () => {
    clearMenu();
    overNav.classList.add('active');
    const newArticle = document.createElement('article');
    newArticle.classList.add('info');
    const newH1 = document.createElement('h1');
    newH1.innerText = infoText[0];
    newArticle.appendChild(newH1);
    const firstSection = document.createElement('section');
    firstSection.innerText = infoText[1][0] + ageMom + infoText[1][1] + ageBoy + ' en ' + ageGirl + infoText[1][2];
    newArticle.appendChild(firstSection);
    const newDiv = document.createElement('div');
    newDiv.classList.add('photo');
    const newImg = document.createElement('img');
    newImg.src = "./images/marieke-info.jpg";
    newDiv.appendChild(newImg);
    newArticle.appendChild(newDiv);
    for (i=2; i<4; i++) {
        const newSection = document.createElement('section');
        newSection.innerText = infoText[i];
        newArticle.appendChild(newSection);
    };
    main.appendChild(newArticle);
};

overNav.addEventListener('click', addOverMijToDOM);
overHome.addEventListener('click', addOverMijToDOM);


const addRecensiesToDOM = () => {
    clearMenu();    
    recensiesNav.classList.add('active');
    recensiesText.forEach(recensie => {
        const newArticle = document.createElement('article');
        newArticle.classList.add('reviews');
        recensie.forEach(item => {
            const newSection = document.createElement('section');
            newSection.innerText = item;
            newArticle.appendChild(newSection);
        });
        main.appendChild(newArticle);
    });
};

recensiesNav.addEventListener('click', addRecensiesToDOM);
recensiesHome.addEventListener('click', addRecensiesToDOM);


const makeAdresSection = () => {
    const newSection = document.createElement('section');
    newSection.classList.add('adres');
    const newH2 = document.createElement('h2');
    newH2.innerText = 'Contact:';
    newSection.appendChild(newH2);
    const firstP = document.createElement('p');
    const firstDiv = document.createElement('div');
    firstDiv.innerText = 'Marieke Onderwater';
    firstP.appendChild(firstDiv);
    const secondDiv = document.createElement('div');
    secondDiv.innerText = 'Haagwinde 16';
    firstP.appendChild(secondDiv);
    const thirdDiv = document.createElement('div');
    thirdDiv.innerText = '2435 WG Zevenhoven';
    firstP.appendChild(thirdDiv);
    newSection.appendChild(firstP);
    const phoneP = document.createElement('p');
    phoneP.innerHTML = '<i class="fas fa-phone"></i>' + ' 06 - 1277 8732';
    newSection.appendChild(phoneP);
    const mailP = document.createElement('p');
    mailP.innerHTML = '<i class="far fa-envelope"></i>' + ' mariekeonderwater@hotmail.com';
    newSection.appendChild(mailP);
    const facebookDiv = document.createElement('div');
    facebookDiv.classList.add('facebook');
    const newA = document.createElement('a');
    newA.href = 'https://www.facebook.com/Mariekeonderwater0712';
    newA.target = '_blank';
    const newSpan = document.createElement('span');
    newSpan.innerHTML = '<i class="fab fa-facebook-f"></i>';
    newA.appendChild(newSpan);
    facebookDiv.appendChild(newA);
    newSection.appendChild(facebookDiv);
    const lastP = document.createElement('p');
    lastP.innerText = 'Je kan ook onderstaand formulier invullen om in contact te komen met Marieke.';
    newSection.appendChild(lastP);
    return newSection;
};

const makeForm = () => {
    const newForm = document.createElement('form');
    newForm.action = 'https://formsubmit.co/4564fe4985257c8ce294915104ab4196';
    newForm.method = 'POST';
    const honeyInput = document.createElement('input');
    honeyInput.type = 'text';
    honeyInput.name = '_honey';
    honeyInput.style = 'display: none;';
    newForm.appendChild(honeyInput);
    const captchaInput = document.createElement('input');
    captchaInput.type = 'hidden';
    captchaInput.name = '_captcha';
    captchaInput.value = false;
    newForm.appendChild(captchaInput);
    const nextInput = document.createElement('input');
    nextInput.type = 'hidden';
    nextInput.name = '_next';
    nextInput.value = 'https://www.mariekeonderwater.nl/index1.html'; //https://distracted-nightingale-627e05.netlify.app/index1.html
    newForm.appendChild(nextInput);
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'naam';
    nameInput.placeholder = 'je naam *';
    nameInput.required = true;
    newForm.appendChild(nameInput);
    const mailInput = document.createElement('input');
    mailInput.type = 'email';
    mailInput.name = 'emailadres';
    mailInput.placeholder = 'je email *';
    mailInput.required = true;
    newForm.appendChild(mailInput);
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.name = 'telefoonnummer';
    phoneInput.placeholder = 'je telefoonnummer';
    newForm.appendChild(phoneInput);
    const newTextArea = document.createElement('textarea');
    newTextArea.name = 'bericht';
    newTextArea.placeholder = 'je bericht';
    newTextArea.cols = 30;
    newTextArea.rows = 6;
    newForm.appendChild(newTextArea);
    const newButton = document.createElement('button');
    newButton.type = 'submit';
    newButton.innerText = 'verstuur';
    newForm.appendChild(newButton);
    return newForm;
};

const addContactToDOM = () => {
    clearMenu();
    contactNav.classList.add('active');
    const newArticle = document.createElement('article');
    newArticle.classList.add('contact');
    const adresSection = makeAdresSection();
    newArticle.appendChild(adresSection);
    const contactForm = makeForm();
    newArticle.appendChild(contactForm);
    main.appendChild(newArticle);
};

contactNav.addEventListener('click', addContactToDOM);
contactHome.addEventListener('click', addContactToDOM);
