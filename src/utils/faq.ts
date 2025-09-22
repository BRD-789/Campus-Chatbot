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
      "en": "How do I apply for admission?",
      "hi": "प्रवेश के लिए कैसे आवेदन करूँ?",
      "dh": "दाखिला खातर केसरें अरजी देवौ?",
      "mw": "दाखलो खातर केसरें अरजी करूं?",
      "me": "दाखलो देवा खातर केसरें अरजी करूं?"
    },
    "answers": {
      "short": {
        "en": "Apply via the admissions portal or the specified entrance exam.",
        "hi": "विश्वविद्यालय के प्रवेश पोर्टल या प्रवेश परीक्षा के माध्यम से आवेदन करें।",
        "dh": "यूनिवर्सिटी री वेबसाइट/पोर्टल पै अरजी देवौ या प्रवेश परीक्षा देवौ।",
        "mw": "यूनिवर्सिटी पोर्टल या प्रवेश परीक्षा सूं आवेदन करजो।",
        "me": "यूनिवर्सिटी पोर्टल पै अरजी करो या परीक्षा आपो।"
      },
      "detailed": {
        "en": "Submit your application through the admissions portal or register for the specified entrance exam as applicable.",
        "hi": "अपना आवेदन प्रवेश पोर्टल पर जमा करें या निर्धारित प्रवेश परीक्षा के लिए पंजीकरण करें।",
        "dh": "प्रवेश पोर्टल पै अरजी देवौ या ठरायल परीक्षा खातर रजिस्ट्रेशन करौ।",
        "mw": "प्रवेश पोर्टल पै आवेदन करजो या ठहरायल परीक्षा खातर रजिस्ट्रेशन करजो।",
        "me": "प्रवेश पोर्टल पर अरजी करो वा बतावेल प्रवेश परीक्षा मां भाग लो।"
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
        "en": "Pay via the student portal or designated bank.",
        "hi": "छात्र पोर्टल या निर्दिष्ट बैंक से भुगतान करें।",
        "dh": "पोर्टल या ठरायल बैंक सूं फीस भरो।",
        "mw": "पोर्टल या बैंक तें शुल्क जमा करजो।",
        "me": "पोर्टल या बतावेल बैंक मां फीस भरी दो।"
      },
      "detailed": {
        "en": "Use the student portal for online payment or deposit at the designated bank as instructed.",
        "hi": "ऑनलाइन भुगतान छात्र पोर्टल से करें या निर्दिष्ट बैंक में जमा करें।",
        "dh": "ऑनलाइन पोर्टल सूं भरो या ठरायल बैंक में जमा करौ।",
        "mw": "ऑनलाइन पोर्टल सूं भरजो या बतावेल बैंक में जमा करजो।",
        "me": "पोर्टल सूं ऑनलाइन भरवां या बतावेल बैंक मां जमा करवां।"
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
        "en": "December and May.",
        "hi": "दिसंबर और मई।",
        "dh": "दिसम्बर अणि मई।",
        "mw": "दिसम्बर अर मई।",
        "me": "दिसम्बर अने मई।"
      },
      "detailed": {
        "en": "Semester exams are typically held in December and May.",
        "hi": "सेमेस्टर परीक्षाएँ सामान्यतः दिसंबर और मई में होती हैं।",
        "dh": "सेमेस्टर री परीक्षा अमूमन दिसम्बर अणि मई में होवे।",
        "mw": "सेमेस्टर री परीक्षा साधारणत: दिसम्बर अर मई में होवे।",
        "me": "सेमेस्टर नी परीक्षा सामान्य रिते दिसम्बर अने मई मां थाय छे।"
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
  ,
  {
    "category": "Hostel",
    "questions": {
      "en": "Is hostel facility available for outstation students?",
      "hi": "क्या बाहर से आने वाले छात्रों के लिए हॉस्टल है?",
      "dh": "बाहरां छात्रां खातर हॉस्टल सुविधा है के?",
      "mw": "बाहरां सूं आवेला छात्रां खातर हॉस्टल छे के?",
      "me": "बाहरां खातर हॉस्टल नी सुविधा छे के?"
    },
    "answers": {
      "short": {
        "en": "Yes, available on a first-come-first-serve basis.",
        "hi": "हाँ, पहले आओ पहले पाओ आधार पर उपलब्ध है।",
        "dh": "हाँ, पहला आवे-ओनो पावे आधार पै।",
        "mw": "हाँ, पहला आवै-ओनो पावै आधार पै छे।",
        "me": "हाँ, पहिला आवे-पहिलो पावे।"
      },
      "detailed": {
        "en": "Hostel facility is provided on a first-come-first-serve basis for eligible students.",
        "hi": "पात्र छात्रों के लिए हॉस्टल सुविधा पहले आओ पहले पाओ आधार पर दी जाती है।",
        "dh": "पात्र छात्रां खातर हॉस्टल पहला आवे-ओनो पावे आधार पै मिलै।",
        "mw": "पात्र छात्रां खातर हॉस्टल पहला आवै-ओनो पावै आधार पै छे।",
        "me": "પાત્ર વિદ્યાર્થી માટે હોસ્ટેલ પહેલી આવો પહેલી પાવો ધોરણે મળે छे।"
      }
    }
  },
  {
    "category": "Library",
    "questions": {
      "en": "What are the library timings?",
      "hi": "पुस्तकालय के समय क्या हैं?",
      "dh": "लाइब्रेरी रो टैम कद है?",
      "mw": "लाइब्रेरी रा समय कया छे?",
      "me": "लाइब्रेरी केवा वेला सुधी खुले छे?"
    },
    "answers": {
      "short": {
        "en": "Open 9 AM to 8 PM on weekdays.",
        "hi": "सप्ताह के दिनों में सुबह 9 से शाम 8 बजे।",
        "dh": "हफ्ता के दिनां में 9 तैं 8 सांय।",
        "mw": "वीकडेज़ मां सवेरां 9 तें सांझ 8 वगे।",
        "me": "वर्कિંગ ડેઝે 9 વાગ્યે થી 8 વાગ્યા સુધી।"
      },
      "detailed": {
        "en": "The library is open from 9 AM to 8 PM on weekdays.",
        "hi": "पुस्तकालय सप्ताह के कार्यदिवसों में सुबह 9 से शाम 8 बजे तक खुला रहता है।",
        "dh": "लाइब्रेरी हफ्ता के कामकाजी दिनां में 9 तैं 8 सांय खुली रहसी।",
        "mw": "लाइब्रेरी वीकडेज़ मां 9 तें 8 वगे सुधी खुली रहसी।",
        "me": "લાઇબ્રેરી કામકાજી દિવસો માં 9 થી 8 સુધી ખુલ્લી રહે છે।"
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
  
  // Hostel keywords
  if (messageLower.includes('hostel') || messageLower.includes('हॉस्टल') || messageLower.includes('हॉस्टेल') || messageLower.includes('छात्रावास') || messageLower.includes('रहائش')) {
    return 'Hostel';
  }

  // Library keywords
  if (messageLower.includes('library') || messageLower.includes('पुस्तकालय') || messageLower.includes('लाइब्रेरी') ) {
    return 'Library';
  }
  
  // Timetable keywords
  if (messageLower.includes('timetable') || messageLower.includes('schedule') || messageLower.includes('time') || messageLower.includes('समय') || messageLower.includes('टाइमटेबल') || messageLower.includes('क्लास')) {
    return 'Timetable';
  }
  
  return null;
}
