if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}

// Language Support
let lang = 'en';
const translations = {
    en: {
        title: 'Farm Irrigation Guide',
        cropLabel: 'Select Crop:',
        locationLabel: 'Village/District:',
        gpsBtn: 'Use GPS',
        soilLabel: 'Soil Type:',
        submitBtn: 'Get Guidance',
        guidanceTitle: 'Irrigation Guidance',
        tipsTitle: 'Extra Tips',
        crops: ['Choose', 'Wheat', 'Rice', 'Vegetables'],
        soils: ['Choose', 'Sandy', 'Loamy', 'Clay'],
        waterTip: 'Use slow water method to save 50% water.',
        fertTip: 'Apply fertilizer 10 days after watering.',
        pestTip: 'Check for pests weekly; use neem oil.',
        whatsappLink: 'Share via WhatsApp',
        emailLink: 'Share via Email',
        langLabel: 'Bhasha (Language)'
    },
    hi: {
        title: 'कृषि सिंचाई मार्गदर्शिका',
        cropLabel: 'फसल चुनें:',
        locationLabel: 'गाँव/जिला:',
        gpsBtn: 'GPS इस्तेमाल करें',
        soilLabel: 'मिट्टी का प्रकार:',
        submitBtn: 'मार्गदर्शिका प्राप्त करें',
        guidanceTitle: 'सिंचाई मार्गदर्शिका',
        tipsTitle: 'अतिरिक्त टिप्स',
        crops: ['चुनें', 'गेहूं', 'चावल', 'सब्जियाँ'],
        soils: ['चुनें', 'रेतीली', 'दोमट', 'चिकनी'],
        waterTip: '50% पानी बचाने के लिए धीमी पानी विधि इस्तेमाल करें।',
        fertTip: 'पानी देने के 10 दिन बाद उर्वरक लगाएं।',
        pestTip: 'साप्ताहिक रूप से कीटों की जांच करें; नीम का तेल इस्तेमाल करें।',
        whatsappLink: 'WhatsApp पर साझा करें',
        emailLink: 'ईमेल पर साझा करें',
        langLabel: 'भाषा (Language)'
    }
};

function updateLang() {
    const t = translations[lang];
    document.getElementById('title').textContent = t.title;
    document.getElementById('cropLabel').textContent = t.cropLabel;
    document.getElementById('locationLabel').textContent = t.locationLabel;
    document.getElementById('gpsBtn').textContent = t.gpsBtn;
    document.getElementById('soilLabel').textContent = t.soilLabel;
    document.getElementById('submitBtn').textContent = t.submitBtn;
    document.getElementById('guidanceTitle').textContent = t.guidanceTitle;
    document.getElementById('tipsTitle').textContent = t.tipsTitle;
    document.getElementById('waterTip').textContent = t.waterTip;
    document.getElementById('fertTip').textContent = t.fertTip;
    document.getElementById('pestTip').textContent = t.pestTip;
    document.getElementById('whatsappLink').textContent = t.whatsappLink;
    document.getElementById('emailLink').textContent = t.emailLink;
    document.getElementById('langLabel').textContent = t.langLabel;

    // Populate select options
    const cropSelect = document.getElementById('crop');
    const soilSelect = document.getElementById('soil');
    cropSelect.innerHTML = '';
    soilSelect.innerHTML = '';
    t.crops.forEach(c => cropSelect.add(new Option(c, c.toLowerCase())));
    t.soils.forEach(s => soilSelect.add(new Option(s, s.toLowerCase())));
}

document.getElementById('langBtn').addEventListener('click', () => {
    lang = lang === 'en' ? 'hi' : 'en';
    updateLang();
});

updateLang();

// GPS integration
document.getElementById('gpsBtn').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            const lat = pos.coords.latitude.toFixed(2);
            const lon = pos.coords.longitude.toFixed(2);
            document.getElementById('location').value = `Lat: ${lat}, Lon: ${lon}`;
        }, () => alert('Unable to get location'));
    } else {
        alert('Geolocation not supported');
    }
});

// Form submission (dummy guidance logic)
document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    const crop = document.getElementById('crop').value;
    const soil = document.getElementById('soil').value;
    const loc = document.getElementById('location').value;

    const text = `For ${crop} on ${soil} soil at ${loc}, irrigate twice a week.`;
    document.getElementById('guidanceText').textContent = text;
    document.getElementById('guidance').style.display = 'block';
});
