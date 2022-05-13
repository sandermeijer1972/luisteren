const calculate_age = (dob) => { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);   
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const ageMom = calculate_age(new Date(1984,11,7));
const ageBoy = calculate_age(new Date(2018,8,19));
const ageGirl = calculate_age(new Date(2016,6,17));

const listenText = [
    'Wat is een Luisterkind Afstemming?',
    'Een luisterkind afstemming is een gesprek met een ziel op afstand. Je zult denken dat dit alleen voor kinderen is, maar niets is minder waar. Namelijk op alles wat energie heeft kan worden afgestemd.',
    'Denk daarbij aan je huisdieren die onrustig zijn, of een dierbare die je heel graag nog wat wilt vragen omdat hij of zij plotseling overleden is. Of wanneer je een vraag hebt over jezelf kun je ook gewoon bij mij terecht.',
    'Wat ik doe? Ik maak contact met jou, met jouw ziel. Of met de persoon of huisdier voor wie je de afstemming aanvraagt. Alles wat ik voel, weet of zie schrijf ik op. Daar komt een verhaal uit en dat krijg jij op papier. Binnen 14 dagen heb jij een mooi document in je mailbox met alle antwoorden op jouw vragen. Misschien zul je niet alles direct herkennen, maar lees het na een aantal maanden nog eens. En wellicht zul je de verandering ineens wel zien!',
    'Dàt is luisterkind!',
    'Het tarief van een Luisterkind Afstemming is € 60,00',
];

const birthText = [
    'Geboorte Begeleiding',
    'Ben je ongeveer 28 weken zwanger? En ben je nieuwsgierig naar je kindje in je buik? Dan kun je een Geboortebegeleiding Afstemming aanvragen.',
    'Deze Afstemming is net even wat anders als een Luisterkind Afstemming. Samen maken we 4 afspraken in een maand tijd voor 4 Afstemmingen, zodat ik rustig naar jouw baby-tje in je buik kan luisteren.',
    [
        'Aan welke vragen om te stellen in de Afstemmingen kun je denken?',
        'Hoe voelt mijn kind zich?',
        'Ik ben vaak misselijk en chagrijnig. Merkt ons kind daar iets van?',
        'We hebben een enorm drukke tijd achter de rug. Heeft het kind daar last van?',
        'Zijn er dingen waar we op kunnen letten als ons kind geboren is?',
        'Ik heb het idee dat we al eerder samen zijn geweest, klopt dit?',
        'Mijn man is vaak weg en bemoeit zich niet zo met de zwangerschap. Voelt de kleine dat ook? Hoe is de band tussen baby en vader?',
    ],
    'Dit zijn nog maar enkele voorbeelden van vragen die je kan stellen. Maar iedere vraag van jou mag worden gesteld. Let wel op, ik kan niet het geslacht van het kindje voorspellen. Ik ben geen gynaecoloog.',
    [
        'Hoe ziet het verloop van de Afstemmingen er uit',
        'Een kennismaking met het kindje en eventueel vragen (niet verplicht)',
        'Er wordt teruggekeken op de afgelopen week. Ouders kunnen vragen stellen.',
        'Ouders kunnen opnieuw vragen stellen. Ik kijk waar het kindje tegenaan loopt en of er vragen zijn.',
        'Een brief vanuit het kindje aan de ouders. Ik schrijf volledig op wat er gezegd wordt.',
    ],
    'Iedere keer ontvang je na 30 minuten de Afstemming in je mail.',
    'Het tarief van een Geboortebegeleiding is € 145,00 (betaling in 2 termijnen is mogelijk)',
];

const accessText = [
    'Wat is Access Bars?',
    'Hier komt het verhaal over Access Bars',
];

const infoText = [
    'Wie ben ik?',
    'Ik ben Marieke Onderwater, 37 jaar en moeder van 2 prachtige kinderen. Een koningsgezin, een jongen en meid van 3 en 5 jaar oud. Daarnaast werk ik nog 2 dagen in de kinderopvang.',
    'Toen ik hoorde van Luisterkind, heb ik zelf direct een aantal keer een afstemming aangevraagd voor mijn eigen kinderen. Direct zag ik verschil, aan de energie van mijn kinderen en antwoorden van mijn vragen werden opgelost. Dit vond ik zo iets bijzonders! Na enige tijd hoorde ik van de opleiding Luisterkind, en dacht meteen: “Ja, dit ben ik en dit wil ik worden!”',
    'Altijd al help ik graag anderen, geef ik tips vanuit mijn eigen intuïtie. Het zit in de aard van het beestje zeggen ze dan. Nu ik deze opleiding heb kunnen afronden kan ik er mijn werk van maken. En ik ben dankbaar en blij dat ik meer moeders en vaders mag gaan helpen. Want ik weet als geen ander dat het niet altijd makkelijk is, het opvoeden van je eigen kinderen.',
];

const recensiesText = [
    [
        'Marieke wist dingen te vertellen die zij niet kon weten, welke wel klopten. Ze liet me dingen van een andere kant af bekijken wat me aan het denken zette. Zo vielen er weer nieuwe puzzelstukjes op de plaats, waardoor ik dingen ging snappen, welke er weer voor zorgen dat ik er nu aan kan werken.',
        'Ik ben erg onder de indruk geweest van de afstemming, en ben er ook echt een paar dagen stil van geweest.',
        'Marieke, dankjewel, dat velen maar dit pad naar jouw afstemming mogen vinden.',
    ],
    [
        'Luisterkind? Afstemming? Iets waar ik nog nooit van had gehoord. Tot ik de berichten op facebook voorbij zag komen van Marieke. Toch me er eens een beetje in verdiept en contact gezocht met Marieke.',
        'Alle vragen kon ik "afvuren" op Marieke en geduldig en uitgebreid beantwoordde ze elke vraag.',
        'Eerst een afstemming van mij door middel van een foto. Wohhh Marieke wist precies dingen over mij te vertellen die ze niet kon weten. En dingen waar ze gelijk in heeft en ik zeker wat mee moet doen. Zo bijzonder.',
        'Daarna een luisterkind afstemming voor onze dochter waarbij ik een specifieke vraag had neergelegd bij Marieke. Ongelooflijk de mail die Marieke mij toen stuurde met alle informatie die ze van onze dochter heeft gekregen door een afstemming. En wat verhelderend wat er in de mail stond, wat fijn dat we door heel veel dingen die in de mail stonden nu verder kunnen. Dat is de volgende stap... bespreken met onze dochter en actie uitzetten. Dat gaat zeker goed komen met alles wat Marieke ons verteld heeft.',
        'Ook na het krijgen van de mail de dagen erna nog contact met Marieke hoe het gaat, of we iets merken etc. Heel fijn dat het contact met Marieke zo laagdrempelig is.',
        'Wij gaan zeker nog eens terug komen bij Marieke.',
    ],
    [
        'Marieke kwam op ons pad en vertelde over haar ontwikkelingen. Toen zij vertelde over luisterkind was ik meteen enthousiast en nieuwsgierig.',
        'Met onze jongste zoon hebben wij wat problemen en konden wel wat hulp gebruiken. Na haar afstemming en haar verhaal en antwoorden van onze zoon, konden wij zeker weer wat stappen verder. Het bracht duidelijkheid over het gedrag van onze zoon.',
        'En het gekke is dat hij zelf ook meer momenten van rust heeft die hij voorheen niet had.',
        'Het was een bijzondere ervaring met een positieve kracht. Bedankt Marieke!',
    ],
];