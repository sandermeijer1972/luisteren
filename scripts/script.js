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

const clearMenu = () => {
    main.innerHTML = '';
    luisterNav.classList.remove('active');
    accessNav.classList.remove('active');
    overNav.classList.remove('active');
    recensiesNav.classList.remove('active');
    contactNav.classList.remove('active');
};

const addLuisterkindToDOM = () => {    
    clearMenu();
    luisterNav.classList.add('active');
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
    main.appendChild(newArticle);
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
    firstSection.innerText = infoText[1];
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
