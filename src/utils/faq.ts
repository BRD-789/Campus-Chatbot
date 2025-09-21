// FAQ data structure for campus chatbot
export interface FAQ {
  category: string;
  questions: {
    en: string;
    hi: string;
    dh: string;
    mw: string;
    me: string;
  };
  answers: {
    short: {
      en: string;
      hi: string;
      dh: string;
      mw: string;
      me: string;
    };
    detailed: {
      en: string;
      hi: string;
      dh: string;
      mw: string;
      me: string;
    };
  };
}

export const FAQ_DATA: FAQ[] = [
  {
    "category": "Admission",
    "questions": {
      "en": "What are the admission requirements?",
      "hi": "प्रवेश के लिए क्या आवश्यकताएँ हैं?",
      "dh": "दाखले री शर्ता काय है?",
      "mw": "दाखला री शर्ता काई है?",
      "me": "दाखले री कंडीशन काय है?"
    },
    "answers": {
      "short": {
        "en": "10+2 with required subjects.",
        "hi": "प्रवेश के लिए 10+2 आवश्यक है।",
        "dh": "10+2 जरूरी है।",
        "mw": "10+2 जरूरी है।",
        "me": "10+2 जरूरी है।"
      },
      "detailed": {
        "en": "Admission requires passing 10+2 with the specified subjects and minimum marks set by the university.",
        "hi": "प्रवेश हेतु 10+2 और विश्वविद्यालय द्वारा तय अंक आवश्यक हैं।",
        "dh": "10+2 अणि तय अंक जरूरी है।",
        "mw": "10+2 अणि अंक जरूरी है।",
        "me": "10+2 अणि तय अंक जरूरी है।"
      }
    }
  },
  {
    "category": "Fees",
    "questions": {
      "en": "What is the annual fee?",
      "hi": "वार्षिक शुल्क कितना है?",
      "dh": "सालाणो फीस काई है?",
      "mw": "सालाणी फी काई है?",
      "me": "एक साल री फीस काई है?"
    },
    "answers": {
      "short": {
        "en": "Around 50,000 INR.",
        "hi": "लगभग 50,000 रुपये।",
        "dh": "५०,०००।",
        "mw": "५०,०००।",
        "me": "५०,०००।"
      },
      "detailed": {
        "en": "The annual fee is approx. 50,000 INR, may vary by course and semester.",
        "hi": "वार्षिक शुल्क लगभग 50,000, कोर्स के अनुसार बदल सकता है।",
        "dh": "५०,०००, कोर्स पाछो बदलै।",
        "mw": "५०,०००, कोर्स पाछो बदलै।",
        "me": "५०,०००, कोर्स पाछो बदलै।"
      }
    }
  },
  {
    "category": "Scholarship",
    "questions": {
      "en": "Is there any scholarship available?",
      "hi": "क्या कोई छात्रवृत्ति उपलब्ध है?",
      "dh": "कोई स्कॉलरशिप है के?",
      "mw": "स्कॉलरशिप मळे है के?",
      "me": "कोई वजीफा आहे के?"
    },
    "answers": {
      "short": {
        "en": "Yes, available for meritorious students.",
        "hi": "हाँ, मेधावी छात्रों को मिलती है।",
        "dh": "हाँ, होशियार खातर।",
        "mw": "हाँ, मेधावी खातर।",
        "me": "हाँ, मेधावी खातर।"
      },
      "detailed": {
        "en": "Scholarships are given to meritorious and needy students based on academic performance and government norms.",
        "hi": "छात्रवृत्ति मेधावी और जरूरतमंद छात्रों को दी जाती है।",
        "dh": "होशियार अणि गरीब ने स्कॉलरशिप मळे।",
        "mw": "होशियार अणि गरीब ने स्कॉलरशिप मळे।",
        "me": "होशियार अणि गरीब ने स्कॉलरशिप मळे।"
      }
    }
  },
  {
    "category": "Exams",
    "questions": {
      "en": "When are exams conducted?",
      "hi": "परीक्षाएँ कब होती हैं?",
      "dh": "इम्तिहान कदे होवे?",
      "mw": "इम्तिहान कदे होवे?",
      "me": "इम्तिहान कदे होवे?"
    },
    "answers": {
      "short": {
        "en": "Twice a year.",
        "hi": "साल में दो बार।",
        "dh": "दो बार।",
        "mw": "दो बार।",
        "me": "दो बार।"
      },
      "detailed": {
        "en": "University exams are conducted semester-wise, usually twice a year in winter and summer sessions.",
        "hi": "विश्वविद्यालय की परीक्षाएँ सेमेस्टर अनुसार साल में दो बार होती हैं।",
        "dh": "इम्तिहान सेमेस्टर पाछो बे वार होवे।",
        "mw": "इम्तिहान सेमेस्टर पाछो बे वार होवे।",
        "me": "इम्तिहान सेमेस्टर पाछो बे वार होवे।"
      }
    }
  },
  {
    "category": "Timetable",
    "questions": {
      "en": "Where can I see the class timetable?",
      "hi": "कक्षा का समय सारणी कहाँ देखी जा सकती है?",
      "dh": "क्लास टाइमटेबल किथे देखूं?",
      "mw": "क्लास टाइमटेबल किथे देखूं?",
      "me": "क्लास टाइमटेबल किथे देखूं?"
    },
    "answers": {
      "short": {
        "en": "On notice board / website.",
        "hi": "सूचना पट्ट / वेबसाइट पर।",
        "dh": "नोटिस बोर्ड पर।",
        "mw": "नोटिस बोर्ड पर।",
        "me": "नोटिस बोर्ड पर।"
      },
      "detailed": {
        "en": "Class timetable is displayed on the college notice board and also uploaded on the official website.",
        "hi": "कक्षा समय सारणी नोटिस बोर्ड और वेबसाइट पर उपलब्ध है।",
        "dh": "टाइमटेबल नोटिस बोर्ड अणि वेबसाइट पर है।",
        "mw": "टाइमटेबल नोटिस बोर्ड अणि वेबसाइट पर है।",
        "me": "टाइमटेबल नोटिस बोर्ड अणि वेबसाइट पर है।"
      }
    }
  }
];

// Language mapping for FAQ responses
export const LANGUAGE_MAP: { [key: string]: string } = {
  'en': 'en',
  'hi': 'hi',
  'marwari': 'dh',
  'mewari': 'mw',
  'dhundhari': 'dh',
  'harauti': 'dh',
  'mewati': 'me'
};

// Get FAQ answer based on category and language
export function getFAQAnswer(category: string, language: string, detailed: boolean = false): string | null {
  const faq = FAQ_DATA.find(f => f.category.toLowerCase() === category.toLowerCase());
  if (!faq) return null;
  
  const langKey = LANGUAGE_MAP[language] || 'en';
  return detailed ? faq.answers.detailed[langKey] : faq.answers.short[langKey];
}

// Check if message is asking about FAQ categories
export function isFAQQuestion(message: string): string | null {
  const messageLower = message.toLowerCase();
  
  // Admission keywords
  if (messageLower.includes('admission') || messageLower.includes('admit') || messageLower.includes('प्रवेश') || messageLower.includes('दाखला')) {
    return 'Admission';
  }
  
  // Fees keywords
  if (messageLower.includes('fee') || messageLower.includes('cost') || messageLower.includes('price') || messageLower.includes('शुल्क') || messageLower.includes('फीस') || messageLower.includes('पैसा')) {
    return 'Fees';
  }
  
  // Scholarship keywords
  if (messageLower.includes('scholarship') || messageLower.includes('scholar') || messageLower.includes('छात्रवृत्ति') || messageLower.includes('स्कॉलरशिप') || messageLower.includes('वजीफा')) {
    return 'Scholarship';
  }
  
  // Exams keywords
  if (messageLower.includes('exam') || messageLower.includes('test') || messageLower.includes('परीक्षा') || messageLower.includes('इम्तिहान') || messageLower.includes('टेस्ट')) {
    return 'Exams';
  }
  
  // Timetable keywords
  if (messageLower.includes('timetable') || messageLower.includes('schedule') || messageLower.includes('time') || messageLower.includes('समय') || messageLower.includes('टाइमटेबल') || messageLower.includes('क्लास')) {
    return 'Timetable';
  }
  
  return null;
}
