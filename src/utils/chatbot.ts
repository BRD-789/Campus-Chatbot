// Message type for conversation history
export interface Message {
  id: number;
  role: 'user' | 'bot';
  text: string;
}

// Import FAQ functions
import { getFAQAnswer, isFAQQuestion } from './faq';

// Conversational AI logic for the campus chatbot
export function generateBotResponse(userMessage: string, language: string, notices: any[], conversationHistory: Message[] = []): string {
  const message = userMessage.toLowerCase().trim();
  
  // Get recent conversation context (last 5 messages)
  const recentHistory = conversationHistory.slice(-5);
  const context = recentHistory.map(msg => msg.text).join(' ').toLowerCase();
  
  // Response templates for different languages
  const responses = {
    en: {
      greeting: [
        "Hello! I'm your campus assistant. How can I help you today?",
        "Hi there! What would you like to know about campus?",
        "Welcome! I'm here to help with any campus-related questions."
      ],
      notices: [
        "Here are the latest campus notices. You can view them in the sidebar for more details.",
        "I've got the current campus announcements ready for you. Check the notices panel!",
        "The latest campus updates are available in the notices section."
      ],
      exam: [
        "Mid-semester exams start from October 15th. Make sure to check the portal for your specific timetable!",
        "Exam schedules are now available. Don't forget to prepare well and check your exam dates.",
        "The exam period is approaching. Visit the academic portal for detailed scheduling."
      ],
      library: [
        "The library is open from 8 AM to 10 PM on weekdays. Perfect for your study sessions!",
        "Library hours are 8 AM to 10 PM during weekdays. Great place to focus on your studies.",
        "You can use the library from 8 AM to 10 PM on weekdays for studying and research."
      ],
      sports: [
        "Football and basketball tryouts are happening this weekend! Make sure to register by Friday.",
        "Sports team selections are coming up. Don't miss the registration deadline this Friday!",
        "Exciting sports opportunities await! Register for tryouts before Friday."
      ],
      hostel: [
        "There's scheduled water maintenance in Hostel Block B on Saturday from 2-5 PM.",
        "Hostel Block B will have water maintenance this Saturday afternoon. Plan accordingly!",
        "Water supply will be temporarily interrupted in Hostel Block B on Saturday 2-5 PM."
      ],
      help: [
        "I can help you with campus notices, exam schedules, library hours, sports activities, and hostel information. What interests you?",
        "I'm here to assist with campus life! Ask me about academics, facilities, events, or any campus services.",
        "Feel free to ask about exams, library, sports, hostels, or any other campus-related topics!"
      ],
      default: [
        "That's interesting! Could you tell me more about what you'd like to know regarding campus life?",
        "I'd be happy to help! Could you be more specific about what campus information you need?",
        "I'm here to assist with campus-related questions. What would you like to know more about?"
      ],
      thanks: [
        "You're welcome! Happy to help with anything else you need.",
        "Glad I could help! Feel free to ask if you have more questions.",
        "My pleasure! I'm always here to assist with campus information."
      ]
    },
    hi: {
      greeting: [
        "नमस्ते! मैं आपका कैंपस सहायक हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ?",
        "हैलो! कैंपस के बारे में आप क्या जानना चाहते हैं?",
        "स्वागत है! मैं कैंपस से जुड़े किसी भी सवाल में आपकी मदद के लिए यहाँ हूँ।"
      ],
      notices: [
        "यहाँ नवीनतम कैंपस सूचनाएँ हैं। अधिक जानकारी के लिए साइडबार देखें।",
        "वर्तमान कैंपस घोषणाएँ तैयार हैं। सूचना पैनल देखें!",
        "नवीनतम कैंपस अपडेट सूचना अनुभाग में उपलब्ध हैं।"
      ],
      exam: [
        "मध्य सेमेस्टर परीक्षा 15 अक्टूबर से शुरू होगी। अपना टाइम टेबल पोर्टल पर जरूर देखें!",
        "परीक्षा कार्यक्रम अब उपलब्ध है। अच्छी तैयारी करना न भूलें।",
        "परीक्षा का समय नजदीक आ रहा है। विस्तृत शेड्यूल के लिए पोर्टल देखें।"
      ],
      library: [
        "पुस्तकालय सप्ताह के दिनों में सुबह 8 बजे से रात 10 बजे तक खुला रहता है।",
        "लाइब्रेरी का समय सप्ताह के दिनों में 8 AM से 10 PM तक है।",
        "आप सप्ताह के दिनों में सुबह 8 से रात 10 बजे तक पुस्तकालय का उपयोग कर सकते हैं।"
      ],
      sports: [
        "फुटबॉल और बास्केटबॉल ट्रायआउट इस सप्ताहांत हो रहे हैं! शुक्रवार तक रजिस्ट्रेशन जरूर कराएं।",
        "खेल टीम का चयन आ रहा है। शुक्रवार की रजिस्ट्रेशन डेडलाइन न चूकें!",
        "रोमांचक खेल के अवसर इंतजार कर रहे हैं! शुक्रवार से पहले ट्रायआउट के लिए रजिस्टर करें।"
      ],
      hostel: [
        "हॉस्टल ब्लॉक B में शनिवार को दोपहर 2-5 बजे पानी की मरम्मत है।",
        "हॉस्टल ब्लॉक B में इस शनिवार दोपहर पानी की मेंटेनेंस होगी।",
        "शनिवार 2-5 PM हॉस्टल ब्लॉक B में पानी की आपूर्ति अस्थायी रूप से बंद रहेगी।"
      ],
      help: [
        "मैं कैंपस सूचनाओं, परीक्षा कार्यक्रम, पुस्तकालय समय, खेल गतिविधियों और हॉस्टल जानकारी में आपकी मदद कर सकता हूँ।",
        "मैं कैंपस जीवन में सहायता के लिए यहाँ हूँ! शिक्षा, सुविधाएं, कार्यक्रम या कैंपस सेवाओं के बारे में पूछें।",
        "परीक्षा, पुस्तकालय, खेल, हॉस्टल या कैंपस से जुड़े किसी भी विषय के बारे में बेझिझक पूछें!"
      ],
      default: [
        "दिलचस्प! कैंपस जीवन के बारे में आप और क्या जानना चाहते हैं?",
        "मैं मदद करने को तैयार हूँ! कैंपस की कौन सी जानकारी चाहिए?",
        "मैं कैंपस से जुड़े सवालों में मदद के लिए यहाँ हूँ। आप क्या जानना चाहते हैं?"
      ],
      thanks: [
        "आपका स्वागत है! और भी कुछ चाहिए तो बताएं।",
        "खुशी हुई मदद करके! और सवाल हों तो पूछिए।",
        "मेरी खुशी! कैंपस की जानकारी के लिए मैं हमेशा यहाँ हूँ।"
      ]
    },
    marwari: {
      greeting: [
        "राम राम! म्हैं थारो कैंपस सहायक हूँ। आज म्हैं थारी कैसी मदद कर सकूं?",
        "नमस्कार! कैंपस के बारे में थे क्या जाणना चावो?",
        "पधारो! म्हैं कैंपस के सगळे सवालां में थारी मदद करूंगो।"
      ],
      notices: [
        "आं हैं नवी कैंपस सूचनावां। ज्यादा जाणकारी खातर साइडबार देखो।",
        "हाल की कैंपस घोषणावां तैयार हैं। सूचना पैनल देखो!",
        "नवी कैंपस अपडेट सूचना भाग में मिलैगी।"
      ],
      exam: [
        "बीच सेमेस्टर परीक्षा 15 अक्टूबर सूं शुरू होसी। अपणो टाइम टेबल पोर्टल पर देखणो।",
        "परीक्षा कार्यक्रम अब मिल गयो है। बढ़िया तैयारी करजो।",
        "परीक्षा को समय आ रह्यो है। विस्तार सूं शेड्यूल देखो।"
      ],
      library: [
        "पुस्तकालय हफ्ते के दिनां में सवेरे 8 सूं रात 10 बजे तक खुल्लो रहै।",
        "लाइब्रेरी को समय हफ्ते के दिनां में 8 AM सूं 10 PM तक है।",
        "थे हफ्ते के दिनां में सवेरे 8 सूं रात 10 बजे तक पुस्तकालय इस्तेमाल कर सको।"
      ],
      sports: [
        "फुटबॉल अर बास्केटबॉल ट्रायआउट इस हफ्ते के अंत में हैं! शुक्रवार तक रजिस्ट्रेशन करवाजो।",
        "खेल टीम को चुनाव आ रह्यो है। शुक्रवार की डेडलाइन मत भूलजो!",
        "मजेदार खेल के मौके इंतजार कर रह्ये हैं! शुक्रवार सूं पहले रजिस्टर करो।"
      ],
      hostel: [
        "हॉस्टल ब्लॉक B में शनिवार दोपहर 2-5 बजे पाणी की मरम्मत है।",
        "हॉस्टल ब्लॉक B में इस शनिवार दोपहर पाणी की देखभाल होसी।",
        "शनिवार 2-5 PM हॉस्टल ब्लॉक B में पाणी की सप्लाई बंद रहैसी।"
      ],
      help: [
        "म्हैं कैंपस सूचना, परीक्षा कार्यक्रम, पुस्तकालय समय, खेल गतिविधि अर हॉस्टल जाणकारी में मदद कर सकूं।",
        "म्हैं कैंपस जीवन में सहायता खातर हूँ! पढ़ाई, सुविधा, कार्यक्रम के बारे में पूछो।",
        "परीक्षा, पुस्तकालय, खेल, हॉस्टल या कैंपस के किसी भी विषय के बारे में पूछो!"
      ],
      default: [
        "बढ़िया! कैंपस जीवन के बारे में थे अर क्या जाणना चावो?",
        "म्हैं मदद करण को तैयार हूँ! कैंपस की कुण सी जाणकारी चाहिए?",
        "म्हैं कैंपस के सवालां में मदद खातर हूँ। थे क्या जाणना चावो?"
      ],
      thanks: [
        "थारो स्वागत है! अर भी कुछ चाहिए तो बताजो।",
        "खुशी होई मदद करके! अर सवाल हों तो पूछजो।",
        "म्हारी खुशी! कैंपस की जाणकारी खातर म्हैं हमेशा हूँ।"
      ]
    },
    mewari: {
      greeting: [
        "नमस्कार! म्हैं थारो कैंपस सहायक हूँ। आज म्हैं थारी कैसी मदद करूं?",
        "राम राम! कैंपस के बारे में थे क्या जाणना चावो?",
        "पधारो म्हारे! म्हैं कैंपस के सगळे सवालां में थारी मदद करूंगो।"
      ],
      notices: [
        "ये हैं नवी कैंपस सूचनावां। ज्यादा जाणकारी खातर साइडबार देखो।",
        "हाल की कैंपस घोषणावां तैयार हैं। सूचना पैनल देखो!",
        "नवी कैंपस अपडेट सूचना हिस्से में मिलैगी।"
      ],
      exam: [
        "बीच सेमेस्टर परीक्षा 15 अक्टूबर सूं शुरू होसी। अपणो टाइम टेबल पोर्टल पर देखो।",
        "परीक्षा कार्यक्रम अब मिल गयो है। बढ़िया तैयारी करो।",
        "परीक्षा को समय आ रह्यो है। विस्तार सूं शेड्यूल देखो।"
      ],
      library: [
        "पुस्तकालय हफ्ते के दिनां में सवेरे 8 सूं रात 10 बजे तक खुल्लो रहै।",
        "लाइब्रेरी को समय हफ्ते के दिनां में 8 AM सूं 10 PM तक है।",
        "थे हफ्ते के दिनां में सवेरे 8 सूं रात 10 बजे तक पुस्तकालय इस्तेमाल कर सको।"
      ],
      sports: [
        "फुटबॉल अर बास्केटबॉल ट्रायआउट इस हफ्ते के अंत में हैं! शुक्रवार तक रजिस्ट्रेशन करवाओ।",
        "खेल टीम को चुनाव आ रह्यो है। शुक्रवार की डेडलाइन मत भूलो!",
        "मजेदार खेल के मौके इंतजार कर रह्ये हैं! शुक्रवार सूं पहले रजिस्टर करो।"
      ],
      hostel: [
        "हॉस्टल ब्लॉक B में शनिवार दोपहर 2-5 बजे पाणी की मरम्मत है।",
        "हॉस्टल ब्लॉक B में इस शनिवार दोपहर पाणी की देखभाल होसी।",
        "शनिवार 2-5 PM हॉस्टल ब्लॉक B में पाणी की सप्लाई बंद रहैसी।"
      ],
      help: [
        "म्हैं कैंपस सूचना, परीक्षा कार्यक्रम, पुस्तकालय समय, खेल गतिविधि अर हॉस्टल जाणकारी में मदद कर सकूं।",
        "म्हैं कैंपस जीवन में सहायता खातर हूँ! पढ़ाई, सुविधा, कार्यक्रम के बारे में पूछो।",
        "परीक्षा, पुस्तकालय, खेल, हॉस्टल या कैंपस के किसी भी विषय के बारे में पूछो!"
      ],
      default: [
        "बढ़िया! कैंपस जीवन के बारे में थे अर क्या जाणना चावो?",
        "म्हैं मदद करण को तैयार हूँ! कैंपस की कुण सी जाणकारी चाहिए?",
        "म्हैं कैंपस के सवालां में मदद खातर हूँ। थे क्या जाणना चावो?"
      ],
      thanks: [
        "थारो स्वागत है! अर भी कुछ चाहिए तो बताओ।",
        "खुशी होई मदद करके! अर सवाल हों तो पूछो।",
        "म्हारी खुशी! कैंपस की जाणकारी खातर म्हैं हमेशा हूँ।"
      ]
    },
    dhundhari: {
      greeting: [
        "नमस्ते! म्हैं थारो कैंपस सहायक हूँ। आज म्हैं थारी कैसी मदद करूं?",
        "राम राम! कैंपस के बारे में थे क्या जाणना चावो?",
        "आओ! म्हैं कैंपस के सगळे सवालां में थारी मदद करूंगो।"
      ],
      notices: [
        "ये हैं नवी कैंपस सूचनावां। ज्यादा जाणकारी खातिर साइडबार देखो।",
        "हाल की कैंपस घोषणावां तैयार हैं। सूचना पैनल देखो!",
        "नवी कैंपस अपडेट सूचना हिस्से में मिलैगी।"
      ],
      exam: [
        "बीच सेमेस्टर परीक्षा 15 अक्टूबर सूं शुरू होसी। अपणो टाइम टेबल पोर्टल पर देखो।",
        "परीक्षा कार्यक्रम अब मिल गयो है। बढ़िया तैयारी करो।",
        "परीक्षा को समय आ रह्यो है। विस्तार सूं शेड्यूल देखो।"
      ],
      library: [
        "पुस्तकालय हफ्ते के दिनां में सवेरे 8 सूं रात 10 बजे तक खुल्लो रहै।",
        "लाइब्रेरी को समय हफ्ते के दिनां में 8 AM सूं 10 PM तक है।",
        "थे हफ्ते के दिनां में सवेरे 8 सूं रात 10 बजे तक पुस्तकालय इस्तेमाल कर सको।"
      ],
      sports: [
        "फुटबॉल अर बास्केटबॉल ट्रायआउट इस हफ्ते के अंत में हैं! शुक्रवार तक रजिस्ट्रेशन करवाओ।",
        "खेल टीम को चुनाव आ रह्यो है। शुक्रवार की डेडलाइन मत भूलो!",
        "मजेदार खेल के मौके इंतजार कर रह्ये हैं! शुक्रवार सूं पहले रजिस्टर करो।"
      ],
      hostel: [
        "हॉस्टल ब्लॉक B में शनिवार दोपहर 2-5 बजे पाणी की मरम्मत है।",
        "हॉस्टल ब्लॉक B में इस शनिवार दोपहर पाणी की देखभाल होसी।",
        "शनिवार 2-5 PM हॉस्टल ब्लॉक B में पाणी की सप्लाई बंद रहैसी।"
      ],
      help: [
        "म्हैं कैंपस सूचना, परीक्षा कार्यक्रम, पुस्तकालय समय, खेल गतिविधि अर हॉस्टल जाणकारी में मदद कर सकूं।",
        "म्हैं कैंपस जीवन में सहायता खातिर हूँ! पढ़ाई, सुविधा, कार्यक्रम के बारे में पूछो।",
        "परीक्षा, पुस्तकालय, खेल, हॉस्टल या कैंपस के किसी भी विषय के बारे में पूछो!"
      ],
      default: [
        "बढ़िया! कैंपस जीवन के बारे में थे अर क्या जाणना चावो?",
        "म्हैं मदद करण को तैयार हूँ! कैंपस की कुण सी जाणकारी चाहिए?",
        "म्हैं कैंपस के सवालां में मदद खातिर हूँ। थे क्या जाणना चावो?"
      ],
      thanks: [
        "थारो स्वागत है! अर भी कुछ चाहिए तो बताओ।",
        "खुशी होई मदद करके! अर सवाल हों तो पूछो।",
        "म्हारी खुशी! कैंपस की जाणकारी खातिर म्हैं हमेशा हूँ।"
      ]
    },
    harauti: {
      greeting: [
        "राम राम! म्हैं थारो कैंपस सहायक हूँ। आज म्हैं थारी कैसी मदद करूं?",
        "नमस्कार! कैंपस के बारे में थे क्या जाणना चावो?",
        "आओ! म्हैं कैंपस के सगळे सवालां में थारी मदद करूंगो।"
      ],
      notices: [
        "ये हैं नवी कैंपस सूचनावां। ज्यादा जाणकारी वास्ते साइडबार देखो।",
        "हाल की कैंपस घोषणावां तैयार हैं। सूचना पैनल देखो!",
        "नवी कैंपस अपडेट सूचना हिस्से में मिलैगी।"
      ],
      exam: [
        "बीच सेमेस्टर परीक्षा 15 अक्टूबर सूं शुरू होसी। अपणो टाइम टेबल पोर्टल पर देखो।",
        "परीक्षा कार्यक्रम अब मिल गयो है। बढ़िया तैयारी करो।",
        "परीक्षा को समय आ रह्यो है। विस्तार सूं शेड्यूल देखो।"
      ],
      library: [
        "पुस्तकालय हफ्ते के दिनां में सवेरे 8 सूं रात 10 बजे तक खुल्लो रहै।",
        "लाइब्रेरी को समय हफ्ते के दिनां में 8 AM सूं 10 PM तक है।",
        "थे हफ्ते के दिनां में सवेरे 8 सूं रात 10 बजे तक पुस्तकालय इस्तेमाल कर सको।"
      ],
      sports: [
        "फुटबॉल अर बास्केटबॉल ट्रायआउट इस हफ्ते के अंत में हैं! शुक्रवार तक रजिस्ट्रेशन करवाओ।",
        "खेल टीम को चुनाव आ रह्यो है। शुक्रवार की डेडलाइन मत भूलो!",
        "मजेदार खेल के मौके इंतजार कर रह्ये हैं! शुक्रवार सूं पहले रजिस्टर करो।"
      ],
      hostel: [
        "हॉस्टल ब्लॉक B में शनिवार दोपहर 2-5 बजे पाणी की मरम्मत है।",
        "हॉस्टल ब्लॉक B में इस शनिवार दोपहर पाणी की देखभाल होसी।",
        "शनिवार 2-5 PM हॉस्टल ब्लॉक B में पाणी की सप्लाई बंद रहैसी।"
      ],
      help: [
        "म्हैं कैंपस सूचना, परीक्षा कार्यक्रम, पुस्तकालय समय, खेल गतिविधि अर हॉस्टल जाणकारी में मदद कर सकूं।",
        "म्हैं कैंपस जीवन में सहायता वास्ते हूँ! पढ़ाई, सुविधा, कार्यक्रम के बारे में पूछो।",
        "परीक्षा, पुस्तकालय, खेल, हॉस्टल या कैंपस के किसी भी विषय के बारे में पूछो!"
      ],
      default: [
        "बढ़िया! कैंपस जीवन के बारे में थे अर क्या जाणना चावो?",
        "म्हैं मदद करण को तैयार हूँ! कैंपस की कुण सी जाणकारी चाहिए?",
        "म्हैं कैंपस के सवालां में मदद वास्ते हूँ। थे क्या जाणना चावो?"
      ],
      thanks: [
        "थारो स्वागत है! अर भी कुछ चाहिए तो बताओ।",
        "खुशी होई मदद करके! अर सवाल हों तो पूछो।",
        "म्हारी खुशी! कैंपस की जाणकारी वास्ते म्हैं हमेशा हूँ।"
      ]
    },
    mewati: {
      greeting: [
        "नमस्ते! म्हैं थारो कैंपस सहायक हूँ। आज म्हैं थारी कैसी मदद करूं?",
        "राम राम! कैंपस के बारे में थे क्या जाणना चावो?",
        "आओ! म्हैं कैंपस के सगळे सवालां में थारी मदद करूंगो।"
      ],
      notices: [
        "ये हैं नवी कैंपस सूचनावां। ज्यादा जाणकारी खातर साइडबार देखो।",
        "हाल की कैंपस घोषणावां तैयार हैं। सूचना पैनल देखो!",
        "नवी कैंपस अपडेट सूचना हिस्से में मिलैगी।"
      ],
      exam: [
        "बीच सेमेस्टर परीक्षा 15 अक्टूबर सूं शुरू होसी। अपणो टाइम टेबल पोर्टल पर देखो।",
        "परीक्षा कार्यक्रम अब मिल गयो है। बढ़िया तैयारी करो।",
        "परीक्षा को समय आ रह्यो है। विस्तार सूं शेड्यूल देखो।"
      ],
      library: [
        "पुस्तकालय हफ्ते के दिनां में सवेरे 8 सूं रात 10 बजे तक खुल्लो रहै।",
        "लाइब्रेरी को समय हफ्ते के दिनां में 8 AM सूं 10 PM तक है।",
        "थे हफ्ते के दिनां में सवेरे 8 सूं रात 10 बजे तक पुस्तकालय इस्तेमाल कर सको।"
      ],
      sports: [
        "फुटबॉल अर बास्केटबॉल ट्रायआउट इस हफ्ते के अंत में हैं! शुक्रवार तक रजिस्ट्रेशन करवाओ।",
        "खेल टीम को चुनाव आ रह्यो है। शुक्रवार की डेडलाइन मत भूलो!",
        "मजेदार खेल के मौके इंतजार कर रह्ये हैं! शुक्रवार सूं पहले रजिस्टर करो।"
      ],
      hostel: [
        "हॉस्टल ब्लॉक B में शनिवार दोपहर 2-5 बजे पाणी की मरम्मत है।",
        "हॉस्टल ब्लॉक B में इस शनिवार दोपहर पाणी की देखभाल होसी।",
        "शनिवार 2-5 PM हॉस्टल ब्लॉक B में पाणी की सप्लाई बंद रहैसी।"
      ],
      help: [
        "म्हैं कैंपस सूचना, परीक्षा कार्यक्रम, पुस्तकालय समय, खेल गतिविधि अर हॉस्टल जाणकारी में मदद कर सकूं।",
        "म्हैं कैंपस जीवन में सहायता खातर हूँ! पढ़ाई, सुविधा, कार्यक्रम के बारे में पूछो।",
        "परीक्षा, पुस्तकालय, खेल, हॉस्टल या कैंपस के किसी भी विषय के बारे में पूछो!"
      ],
      default: [
        "बढ़िया! कैंपस जीवन के बारे में थे अर क्या जाणना चावो?",
        "म्हैं मदद करण को तैयार हूँ! कैंपस की कुण सी जाणकारी चाहिए?",
        "म्हैं कैंपस के सवालां में मदद खातर हूँ। थे क्या जाणना चावो?"
      ],
      thanks: [
        "थारो स्वागत है! अर भी कुछ चाहिए तो बताओ।",
        "खुशी होई मदद करके! अर सवाल हों तो पूछो।",
        "म्हारी खुशी! कैंपस की जाणकारी खातर म्हैं हमेशा हूँ।"
      ]
    }
  };

  // Get responses for current language, fallback to English
  const langResponses = responses[language] || responses.en;

  // Check for FAQ questions first
  const faqCategory = isFAQQuestion(message);
  if (faqCategory) {
    const faqAnswer = getFAQAnswer(faqCategory, language, message.includes('detail') || message.includes('more') || message.includes('explain'));
    if (faqAnswer) {
      return faqAnswer;
    }
  }

  // Context-aware response generation
  const contextualResponse = generateContextualResponse(message, context, langResponses, language);
  if (contextualResponse) {
    return contextualResponse;
  }

  // Determine response category based on user input
  if (isGreeting(message)) {
    return getRandomResponse(langResponses.greeting);
  }
  
  if (isAboutNotices(message)) {
    return getRandomResponse(langResponses.notices);
  }
  
  if (isAboutExams(message)) {
    return getRandomResponse(langResponses.exam);
  }
  
  if (isAboutLibrary(message)) {
    return getRandomResponse(langResponses.library);
  }
  
  if (isAboutSports(message)) {
    return getRandomResponse(langResponses.sports);
  }
  
  if (isAboutHostel(message)) {
    return getRandomResponse(langResponses.hostel);
  }
  
  if (isAskingForHelp(message)) {
    return getRandomResponse(langResponses.help);
  }
  
  if (isThanking(message)) {
    return getRandomResponse(langResponses.thanks);
  }

  // Default response
  return getRandomResponse(langResponses.default);
}

function getRandomResponse(responses: string[]): string {
  return responses[Math.floor(Math.random() * responses.length)];
}

// Intent detection functions
function isGreeting(message: string): boolean {
  const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'namaste', 'namaskar', 'ram ram', 'राम राम', 'नमस्ते', 'नमस्कार'];
  return greetings.some(greeting => message.includes(greeting));
}

function isAboutNotices(message: string): boolean {
  const keywords = ['notice', 'notices', 'announcement', 'news', 'update', 'suchna', 'khabar', 'सूचना', 'खबर', 'घोषणा'];
  return keywords.some(keyword => message.includes(keyword));
}

function isAboutExams(message: string): boolean {
  const keywords = ['exam', 'test', 'examination', 'schedule', 'timetable', 'pariksha', 'परीक्षा', 'टेस्ट'];
  return keywords.some(keyword => message.includes(keyword));
}

function isAboutLibrary(message: string): boolean {
  const keywords = ['library', 'book', 'study', 'reading', 'pustkalaya', 'kitab', 'पुस्तकालय', 'किताब', 'लाइब्रेरी'];
  return keywords.some(keyword => message.includes(keyword));
}

function isAboutSports(message: string): boolean {
  const keywords = ['sport', 'football', 'basketball', 'game', 'team', 'tryout', 'khel', 'खेल', 'फुटबॉल', 'बास्केटबॉल'];
  return keywords.some(keyword => message.includes(keyword));
}

function isAboutHostel(message: string): boolean {
  const keywords = ['hostel', 'room', 'accommodation', 'maintenance', 'water', 'block', 'हॉस्टल', 'कमरा', 'पानी', 'पाणी'];
  return keywords.some(keyword => message.includes(keyword));
}

function isAskingForHelp(message: string): boolean {
  const keywords = ['help', 'assist', 'support', 'what can you do', 'madad', 'sahayata', 'मदद', 'सहायता'];
  return keywords.some(keyword => message.includes(keyword));
}

function isThanking(message: string): boolean {
  const keywords = ['thank', 'thanks', 'dhanyawad', 'shukriya', 'धन्यवाद', 'शुक्रिया'];
  return keywords.some(keyword => message.includes(keyword));
}

// Generate contextual responses based on conversation history
function generateContextualResponse(message: string, context: string, langResponses: any, language: string): string | null {
  // Follow-up questions about previously discussed topics
  if (context.includes('exam') && (message.includes('when') || message.includes('time') || message.includes('date'))) {
    return language === 'en' 
      ? "The mid-semester exams start from October 15th. Make sure to check the portal for your specific timetable!"
      : "मध्य सेमेस्टर परीक्षा 15 अक्टूबर से शुरू होगी। अपना टाइम टेबल पोर्टल पर जरूर देखें!";
  }

  if (context.includes('library') && (message.includes('open') || message.includes('close') || message.includes('time'))) {
    return language === 'en'
      ? "The library is open from 8 AM to 10 PM on weekdays. Perfect for your study sessions!"
      : "पुस्तकालय सप्ताह के दिनों में सुबह 8 बजे से रात 10 बजे तक खुला रहता है।";
  }

  if (context.includes('sport') && (message.includes('register') || message.includes('join') || message.includes('sign'))) {
    return language === 'en'
      ? "You can register for sports tryouts by Friday. Don't miss the deadline!"
      : "आप शुक्रवार तक खेल ट्रायआउट के लिए रजिस्टर कर सकते हैं। डेडलाइन न चूकें!";
  }

  if (context.includes('hostel') && (message.includes('water') || message.includes('maintenance') || message.includes('block'))) {
    return language === 'en'
      ? "There's water maintenance in Hostel Block B on Saturday from 2-5 PM. Plan accordingly!"
      : "हॉस्टल ब्लॉक B में शनिवार को दोपहर 2-5 बजे पानी की मरम्मत है।";
  }

  // Clarification requests
  if (message.includes('what') && message.includes('mean') || message.includes('explain')) {
    return language === 'en'
      ? "I'd be happy to explain! Could you be more specific about what you'd like me to clarify?"
      : "मैं समझाने में खुशी होगी! क्या आप मुझे बता सकते हैं कि आप क्या समझना चाहते हैं?";
  }

  // Continuation of previous topic
  if (context.includes('notice') && (message.includes('more') || message.includes('other') || message.includes('else'))) {
    return language === 'en'
      ? "I have more campus updates available. Check the notices panel for all the latest information!"
      : "मेरे पास और भी कैंपस अपडेट हैं। सभी नवीनतम जानकारी के लिए सूचना पैनल देखें!";
  }

  // Questions about previous responses
  if (message.includes('really') || message.includes('sure') || message.includes('confirm')) {
    return language === 'en'
      ? "Yes, I'm confident about that information. Is there anything specific you'd like me to double-check?"
      : "हाँ, मुझे उस जानकारी पर भरोसा है। क्या आप चाहते हैं कि मैं कुछ विशेष जानकारी को दोबारा जांचूं?";
  }

  return null; // No contextual response found
}