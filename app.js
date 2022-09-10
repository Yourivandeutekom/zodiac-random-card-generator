// Zodiac reading generator program

const zodiac = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

const readingCard = ['love', 'mood', 'career'];

const loveCard = ['You will find the love of your live', 'You will find love', 'You will mary the love of your live', 'You will kiss a girl', 'You will go on a date', 'You will find a new love', 'Your current love is ending'];

const moodCard = ['You will find happiness', 'Darkness will find you', 'You will find anger', 'You will feel heartbroken', 'Stay hopefull your dreams will come true', 'Your loniless will end'];

const careerCard = ['You will lose your job', 'You will find your dreamjob', 'You should quit your job', 'Follow your dreams', 'Stay in your current job', 'Work harder and you will get a raise'];

const expectation = ['One week', 'One month', 'One year', 'One decade', 'One generation', 'One centennial'];

// Add your zodiac sign in this function
const prediction = (str) => {
    if(!validZodiac(str)) return 

    const readingCardDrawn = drawReadingCard();
    const fortuneCard = drawFortuneCard(readingCardDrawn);
};

// Check if the zodiac string given is valid.
const validZodiac = (str) => {
    const valid = zodiac.findIndex((element) => element === str);
    return valid >= 0 ? true : false;
};

// Select a random card from the readingCard array
const drawReadingCard = () => {
    const card = readingCard[Math.floor(Math.random() * readingCard.length)];

    return card;
};

// Select a random fortune card from the array which connects with the reading card.
const drawFortuneCard = (card) => {

    let fortuneCard;

    switch(card) {
        case 'love':
            fortuneCard = loveCard[Math.floor(Math.random() * loveCard.length)];
            break;
        case 'mood':
            fortuneCard = moodCard[Math.floor(Math.random() * moodCard.length)];
            break;
        case 'career':
            fortuneCard = careerCard[Math.floor(Math.random() * careerCard.length)];
            break;
    }

    return fortuneCard;
};

console.log(prediction('Aries'));