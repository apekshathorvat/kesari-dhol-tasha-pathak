/**
 * ====================================================================
 * केसरी ढोल ताशा पथक, इचलकरंजी - मुख्य सेटिंग्ज आणि माहिती (Config File)
 * ====================================================================
 * 
 * 📌 सूचना:
 * नवशिक्यांसाठी हा सर्वात सोपा भाग आहे!
 * - फोटो बदलण्यासाठी: तुमचे फोटो /public/images/ मध्ये ठेवून खालील gallery लिस्ट अपडेट करा.
 * - व्हिडिओ बदलण्यासाठी: YouTube लिंक किंवा /public/videos/ मधील MP4 फाईल खालील videos लिस्टमध्ये टाका.
 * - फोन नंबर, इंस्टाग्राम, पत्ता बदलण्यासाठी खालील contact ऑब्जेक्ट अपडेट करा.
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'ganeshotsav' | 'aagman' | 'vadan' | 'practice' | 'procession' | 'memories';
  categoryLabel: string;
  caption: string;
  dateOrYear: string;
  imageUrl?: string; // उदा. "/images/photo1.jpg" किंवा ऑनलाइन URL
  aspect?: 'square' | 'wide' | 'tall';
}

export interface VideoItem {
  id: string;
  title: string;
  category: 'all' | 'ganeshotsav' | 'vadan' | 'practice' | 'procession';
  categoryLabel: string;
  description: string;
  duration?: string;
  // व्हिडिओ प्रकार: 'youtube' किंवा 'mp4' (स्थानिक फाईल)
  type: 'youtube' | 'mp4';
  // जर YouTube असेल तर व्हिडिओ आयडी (उदा. "dQw4w9WgXcQ") किंवा पूर्ण लिंक
  youtubeId?: string;
  // जर स्थानिक MP4 फाईल असेल तर त्याचा पाथ (उदा. "/videos/vadan_2025.mp4")
  videoUrl?: string;
  // व्हिडिओचे थंबनेल पोस्टर (स्थानिक फोटो किंवा YouTube आपोआप दाखवेल)
  thumbnailUrl?: string;
}

export const PATHAK_CONFIG = {
  // अधिकृत लोगो पाथ (Uploaded official logo)
  logoPath: "/assets/aistudio/image_f93bc7dd.png",

  // पथकाचे नाव व ब्रीदवाक्य
  pathakName: "केसरी ढोल ताशा पथक",
  locationBadge: "इचलकरंजी",
  historicNote: "कोल्हापूर जिल्ह्यातील पहिले ढोल ताशा पथक",
  sanskritMotto: "॥ स्वयमेव मृगेन्द्रता ॥",
  
  // मुख्य शीर्षक आणि घोषणा
  slogan: "नाद केसरीचा, अभिमान महाराष्ट्राचा!",
  heroDescription: "परंपरा, शिस्त, एकजूट आणि महाराष्ट्राच्या संस्कृतीचा अभिमान!",
  welcomeText: "केसरी ढोल ताशा पथक, इचलकरंजी (कोल्हापूर जिल्ह्यातील पहिले ढोल ताशा पथक) च्या अधिकृत संकेतस्थळावर आपले सहर्ष स्वागत! बाप्पाच्या चरणी ढोलाचा गंभीर गजर आणि ताशाचा रोमांचक कडकडाट यांच्या संगमाने आम्ही महाराष्ट्राची पवित्र वादन परंपरा अभिमानाने पुढे नेत आहोत.",

  // संपर्क माहिती (अधिकृत संपर्क क्रमांक: 7588228543 / 9356171856)
  contact: {
    phone1: "7588228543",
    phone1Display: "+91 75882 28543",
    phone2: "9356171856",
    phone2Display: "+91 93561 71856",
    whatsappRaw: "917588228543",
    whatsappRaw2: "919356171856",
    location: "इचलकरंजी, जि. कोल्हापूर, महाराष्ट्र",
    locationDetails: "मुख्य सराव मैदान, इचलकरंजी (जि. कोल्हापूर)",
    instagramHandle: "@kesari_dhol_tasha_pathak",
    instagramUrl: "https://instagram.com/",
    whatsappMessage: "नमस्कार, मला केसरी ढोल ताशा पथक, इचलकरंजीबद्दल माहिती हवी आहे.",
  },

  // आमच्याबद्दल (About Us)
  about: {
    title: "आमच्याबद्दल",
    badge: "कोल्हापूर जिल्ह्यातील पहिले ढोल ताशा पथक",
    mainHeading: "परंपरा, शिस्त, एकजूट आणि समर्पण",
    descriptionP1: "केसरी ढोल ताशा पथक, इचलकरंजी हे कोल्हापूर जिल्ह्यातील पहिले आणि मानाचे ढोल ताशा पथक आहे. महाराष्ट्राच्या लोकसंस्कृतीचे जतन आणि संवर्धन करण्याच्या पवित्र उद्देशाने स्थापन झालेले हे पथक आज हजारो रसिकांच्या हृदयात आदराचे स्थान मिळवून आहे.",
    descriptionP2: "गणेशोत्सवातील बाप्पाच्या आगमनाची ओढ असो, भव्य मिरवणुकीतील एकाग्र वादन असो किंवा शिवजयंतीचा जयघोष असो; केसरी पथकाचा प्रत्येक नाद हा शिवरायांच्या शौर्याला आणि महाराष्ट्राच्या स्वाभिमानाला वंदन करतो. कडक शिस्त, सर्व वादकांची अभेद्य एकजूट आणि निस्वार्थ समर्पण हीच केसरीची ओळख आहे.",
    pillars: [
      {
        title: "महाराष्ट्राच्या संस्कृतीचे जतन",
        desc: "पारंपारिक लोककला, वाद्यसंस्कृती आणि छत्रपती शिवरायांच्या पराक्रमाचा तेजस्वी वारसा पुढील पिढीकडे सोपवणे.",
      },
      {
        title: "ढोल-ताशा वादनाची परंपरा",
        desc: "पारंपारिक तीन ताल, कडकडाट, कल्लोळ आणि शिस्तबद्ध टिपऱ्यांच्या साथीने अस्सल व कर्णमधुर वादन.",
      },
      {
        title: "शिस्त, एकजूट आणि समर्पण",
        desc: "लहान-मोठे, स्त्री-पुरुष असा कोणताही भेद न बाळगता एकाच लयीत वादनाचे भान आणि कडक आचारसंहिता.",
      },
      {
        title: "गणेशोत्सव व बाप्पा आगमनातील सहभाग",
        desc: "इचलकरंजी, कोल्हापूर आणि आसपासच्या मानाच्या गणपती बाप्पांच्या आगमनात आणि विसर्जन मिरवणुकीत मानाचे वादन.",
      },
    ],
    stats: [
      { number: "१५०+", label: "सक्रिय वादक" },
      { number: "१ ले", label: "कोल्हापूर जिल्ह्यातील पहिले पथक" },
      { number: "५०+", label: "भव्य मिरवणुका" },
      { number: "१००%", label: "अखंड समर्पण" },
    ],
  },

  // फोटो गॅलरी (वास्तविक केसरी पथक फोटो)
  gallery: [
    {
      id: "gal-padwa",
      title: "गुढीपाडवा शोभायात्रा - वादन जल्लोष",
      category: "procession",
      categoryLabel: "शोभायात्रा",
      caption: "इचलकरंजी हिंदू नववर्षारंभ पाडवा मिरवणुकीत केसरी पथकाचे पारंपारिक वादन.",
      dateOrYear: "पाडवा २०२६",
      imageUrl: "/images/thumb_padwa.jpg",
      aspect: "wide",
    },
    {
      id: "gal-shubharambh",
      title: "सराव शुभारंभ पूजन व दीपप्रज्वलन",
      category: "practice",
      categoryLabel: "सराव शुभारंभ",
      caption: "केसरी ढोल ताशा पथक, इचलकरंजी - मान्यवरांच्या हस्ते सराव शुभारंभ आणि वाद्यपूजन.",
      dateOrYear: "सराव शुभारंभ २०२६",
      imageUrl: "/images/thumb_sarav_shubharambh.jpg",
      aspect: "wide",
    },
    {
      id: "gal-sarav-2026",
      title: "२०२६ सराव - केसरी पथक रचना",
      category: "practice",
      categoryLabel: "सराव",
      caption: "इचलकरंजी मैदानावर २०२६ मधील शिस्तबद्ध वादन सराव आणि वादकांची भव्य रचना.",
      dateOrYear: "सराव २०२६",
      imageUrl: "/images/sarav_2026_thumb.jpg",
      aspect: "wide",
    },
    {
      id: "gal-mahila-sarav",
      title: "महिला वादन सराव - केसरी रणरागिणी",
      category: "practice",
      categoryLabel: "महिला वादन",
      caption: "आपला इतिहास सांगतो पोरींनी कणखर असले पाहिजे - केसरी रणरागिणींचा दमदार ढोल सराव.",
      dateOrYear: "सराव २०२६",
      imageUrl: "/images/thumb_mahila_sarav.jpg",
      aspect: "tall",
    },
    {
      id: "gal-sarav-2025",
      title: "सराव २०२५ - मैदानातील नाद",
      category: "practice",
      categoryLabel: "सराव",
      caption: "केसरी ढोल ताशा पथक, इचलकरंजी - २०२५ वादन सराव सत्र.",
      dateOrYear: "सराव २०२५",
      imageUrl: "/images/thumb_sarav_2025.jpg",
      aspect: "wide",
    },
    {
      id: "gal-gettogether",
      title: "गेट टुगेदर २०२५ - वादक परिवार",
      category: "memories",
      categoryLabel: "स्नेहसंमेलन",
      caption: "केसरी वादक परिवार - गेट टुगेदर २०२५ दांडिया व सांस्कृतिक स्नेहसंमेलन.",
      dateOrYear: "स्नेहसंमेलन २०२५",
      imageUrl: "/images/thumb_gettogether.jpg",
      aspect: "wide",
    },
  ] as GalleryItem[],

  // व्हिडिओ गॅलरी (फक्त प्रत्यक्ष केसरी पथकाचे खरे व्हिडिओ - नो डेमो व्हिडिओ)
  videos: [
    {
      id: "vid-padwa",
      title: "पाडवा",
      category: "procession",
      categoryLabel: "शोभायात्रा",
      description: "इचलकरंजी हिंदू नववर्षारंभ गुढीपाडवा भव्य शोभायात्रा - केसरी पथकाचा वादन जल्लोष.",
      duration: "००:२८",
      type: "mp4",
      videoUrl: "/videos/padwa.mp4",
      thumbnailUrl: "/images/thumb_padwa.jpg",
    },
    {
      id: "vid-saravshubharambh-2026",
      title: "सराव शुभारंभ २०२६",
      category: "practice",
      categoryLabel: "सराव",
      description: "केसरी ढोल ताशा पथक, इचलकरंजी - २०२६ वादन सराव शुभारंभ सोहळा, पूजन व मान्यवरांचा सत्कार.",
      duration: "०१:२२",
      type: "mp4",
      videoUrl: "/videos/sarav_shubharambh_2026.mp4",
      thumbnailUrl: "/images/thumb_sarav_shubharambh.jpg",
    },
    {
      id: "vid-gettogether-2025",
      title: "गेट टुगेदर २०२५",
      category: "memories",
      categoryLabel: "स्नेहसंमेलन",
      description: "केसरी वादक परिवार - गेट टुगेदर २०२५ दांडिया व सांस्कृतिक स्नेहसंमेलन.",
      duration: "००:२६",
      type: "mp4",
      videoUrl: "/videos/gettogether_2025.mp4",
      thumbnailUrl: "/images/thumb_gettogether.jpg",
    },
    {
      id: "vid-sarav-2025",
      title: "सराव २०२५",
      category: "practice",
      categoryLabel: "सराव",
      description: "केसरी ढोल ताशा पथक, इचलकरंजी - २०२५ वादन सराव (ताशा वाले ढोल ला, ढोल वाले ताशा ला).",
      duration: "००:५५",
      type: "mp4",
      videoUrl: "/videos/sarav_2025.mp4",
      thumbnailUrl: "/images/thumb_sarav_2025.jpg",
    },
    {
      id: "vid-sarav-2026",
      title: "२०२६ सराव",
      category: "practice",
      categoryLabel: "सराव",
      description: "केसरी ढोल ताशा पथक, इचलकरंजी - २०२६ चा भव्य वादन सराव. शिस्तबद्ध रचना व ढोलांचा गजर.",
      duration: "०२:१४",
      type: "mp4",
      videoUrl: "/videos/2026_sarav.mp4",
      thumbnailUrl: "/images/sarav_2026_thumb.jpg",
    },
    {
      id: "vid-mahila-sarav",
      title: "महिला वादन सराव",
      category: "practice",
      categoryLabel: "सराव",
      description: "आपला इतिहास सांगतो पोरींनी कणखर असले पाहिजे - केसरी रणरागिणींचा वादन सराव.",
      duration: "००:२३",
      type: "mp4",
      videoUrl: "/videos/mahila_sarav.mp4",
      thumbnailUrl: "/images/thumb_mahila_sarav.jpg",
    },
  ] as VideoItem[],

  // वारंवार विचारले जाणारे प्रश्न (FAQ)
  faqs: [
    {
      q: "केसरी ढोल ताशा पथक, इचलकरंजी मध्ये सामील होण्यासाठी काही फी आहे का?",
      a: "नाही! केसरी ढोल ताशा पथक ही संस्कृतीची निस्वार्थ सेवा आहे. कोणत्याही वादकाकडून किंवा नवशिक्याकडून कोणतीही फी घेतली जात नाही. फक्त मनामध्ये निष्ठा, शिस्त आणि शिकण्याची जिद्द हवी.",
    },
    {
      q: "मला आधी वादन येत नाही, तरी मी शिकू शकेन का?",
      a: "होय, नक्कीच! आमचे ज्येष्ठ व अनुभवी वादक अगदी सुरुवातीपासून ढोल पकडणे, टिपरी चालवणे आणि ताशाच्या काड्या मारणे शिकवतात.",
    },
    {
      q: "इचलकरंजीमध्ये सराव कधी आणि कुठे होतो?",
      a: "दर शनिवार आणि रविवारी सायंकाळी ६ ते ९ या वेळेत मुख्य सराव मैदानावर सराव होतो. गणेशोत्सवाच्या दोन महिने आधी रोज संध्याकाळी कसून सराव घेतला जातो.",
    },
    {
      q: "आमच्या घरच्या किंवा सार्वजनिक उत्सवात वादनासाठी कसे संपर्क साधावे?",
      a: "खाली दिलेल्या 'आमच्याशी संपर्क साधा' फॉर्मद्वारे किंवा थेट WhatsApp / फोन कॉल करून तुम्ही कार्यक्रमाची तारीख आणि वेळ निश्चित करू शकता.",
    },
  ],
};
