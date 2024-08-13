
let isEnglish = true;
const filteredIds = [
  "updateTitle",
  "updateInfo",
  "availability-text-section1",
  "name-section1",
  "description-section1",
  "experience-2024-section1",
  "experience-2023-section1",
  "achievements-link-section1",
  "text-me-button-section1",
  "resume-button-section1",
  "h1-navbar",
  "li1-navbar",
  "digitalToolkit",
  "quote1",
  "badge1",
  "badge2",
  "badge3",
  "badge4", "badge5", "badge6", "badge7", 
  "badge8", "badge9", "badge10", "badge11", 
  "badge12", "badge13", "badge14", "badge15", 
  "badge16", "badge17", "badge18", "badge19", 
  "badge20", "badge21", "badge22", "badge23", 
  "badge24", "badge25", "badge26", "badge27", 
  "badge28", "badge29", "badge30", "badge31", 
  "badge32",
  "companiesIworked",
  "workAchievmentstitle",
  "quote2",
  "humanResources",
  "jobtitle1",
  "jobdesc1",
  "softwareedfapay",
  "jobtitle2",
  "jobdesc2",
  "edfapayProjectLink",
  "tourism-section4",
  "title1-section4",
  "description1-section4",
  "sales-section4",
  "title2-section4",
  "description2-section4",
  "tourism2-section4",
  "title3-section4",
  "description3-section4",
  "volunteer1-section4",
  "title4-section4",
  "volunteer2-section4",
  "title5-section4",
  "volunteer3-section4",
  "title6-section4",
  "volunteer4-section4",
  "title7-section4",
  "section5Header",
  "footer1",
  "footer2",
  "footerWhatsapp",
  "logofooter",
  "linkedinID",
  "githubID",



  
  
];

// Array of innerHTML content (filtered and without tags)
const filteredInnerHTMLContent = [
  "تحديث جديد:",
"  اللغة العربية عند دغط وائل حبيب ",
  "Available for work",
  "Wael Alkiyani",
  "I am a multilingual Saudi with a major in IT, specializing in software engineering. I have extensive experience as a full stack developer, proficient in both front-end and back-end technologies. I have had the privilege of working at prestigious events such as the Red Sea Film Festival (RSFF), Formula 1, and FIFA. My diverse skill set and international experience allow me to adapt quickly and excel in dynamic environments.",
  "2024: Full stack software developer @Edfapay",
  "2023: Head of volunteers @RedSeaFilmFestival",
  "All Work Achievements",
  "Text me",
  "Resume",
  "وائل حبيب",
  "Technologies",
  "My Digital Toolkit",
  "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  "Self-Taught",
  "5+ Years",
  "professional implementation",
  "Professional Implementation", // badge4
  "5+ Years", // badge5
  "Multiple Frameworks Learnt", // badge6
  "Self-Taught", // badge7
  "Professional Implementation", // badge8
  "5+ Years", // badge9
  "Multiple Frameworks Learnt", // badge10
  "Self-Taught", // badge11
  "Professional Implementation", // badge12
  "5+ Years", // badge13
  "Multiple Frameworks Learnt", // badge14
  "University curriculum", // badge15
  "Backend Usage Professionally", // badge16
  "2+ Years", // badge17
  "Multiple Libraries Learnt", // badge18
  "University curriculum", // badge19
  "Self-Taught", // badge20
  "1+ Years", // badge21
  "Multiple Libraries Learnt", // badge22
  "Professional Implementation", // badge23
  "Self-Taught", // badge24
  "Frontend Usage Professionally", // badge25
  "5+ Years", // badge26
  "Multiple Libraries Learnt", // badge27
  "Self-Taught", // badge28
  "2+ Years", // badge29
  "Professional Implementation", // badge30
  "1+ Years", // badge31
  "Self-Taught", // badge32,,
  "Companies I have Contributed to ",
  "Work Achievements",
  "The reward for work well done is the opportunity to do more.",
  "Human Resources",
  "Head of Volunteers",
  "As the Volunteers Head, I led the recruitment, allocation, and management of over 150 volunteers for various departments at theRed Sea Festival. I conducted interviews, matched volunteers with appropriate roles, and coordinated communication between departmentsand volunteers to ensure smooth operations. My role was pivotal in creating a positive and efficient volunteer experience,contributing to the overall success of the event.",
  "Software Developer Internship",
  "Full Stack Software Developer",
  "During my full stack software developer internship, I gained hands-on experience in building dynamic web applications using React for the front end and Java for the backend. I also worked extensively with MySQL for database management and Linux for DevOps tasks. Additionally, I honed my skills in designing and UI/UX, contributing to the creation of user-friendly interfaces and seamless user experiences.",
  "Check out my project",
  "Tourism",
  "Ticket Resolutions Manager",
  "The Ticket Resolutions Manager is responsible for overseeing and managing the resolution of ticketing issues and inquiries related to FIFA events. This role involves working closely with various internal departments, external stakeholders, and customers to ensure timely and effective resolution of ticket-related concerns, enhancing overall customer satisfaction and maintaining the integrity of FIFA’s ticketing operations.",
  "Sales",
  "Sales Employee",
  "Dynamic salesman with a month of invaluable experience in medical outfit sales. Swiftly adapted to the industry, acquiring a wealth of knowledge. Proven ability to engage clients and meet sales targets. Eager to leverage this experience in future roles, showcasing adaptability and a quick learning curve.",
  "Tourism",
  "Host - F1 Premium Hospitality",
  "As a Host in Formula 1 Premium Hospitality, you'll create memorable experiences for VIP guests, ensuring their comfort and satisfaction during events.",
  "Volunteer",
  "Wasm Society - Albalad",
  "Volunteer",
  "Red Sea Film Festival",
  "Volunteer",
  "Mohammed bin Salman College",
  "Volunteer",
  "كسوة السيدة عائشة",
  "Colleagues about me :",
  "Contact Me",
  "Let's Have a Chat",
  "Whatsapp",
  "وائل حبيب",
  "Linkedin",
  "Github"

  

  

];

// Array of Arabic translations (filtered and without tags)
const filteredArabicTranslations = [
"New Update :",

"English Language by clicking on Wael Habib",
  "متاح للعمل",
  "وائل الكياني",
  "أنا سعودي متعدد اللغات متخصص في تكنولوجيا المعلومات، أخصائي في هندسة البرمجيات. لدي خبرة واسعة كمطور برمجيات كامل، متمرس في تقنيات الواجهة الأمامية والخلفية. لقد حظيت بفرصة العمل في أحداث مرموقة مثل مهرجان البحر الأحمر السينمائي (RSFF)، الفورمولا 1، والفيفا. تتيح لي مجموعتي المتنوعة من المهارات والخبرة الدولية التكيف بسرعة والتفوق في البيئات الديناميكية.",
  "2024: مطور برمجيات كامل @إدفاباي",
  "2023: رئيس المتطوعين @مهرجان البحر الأحمر السينمائي",
  "جميع الإنجازات العملية",
  "أرسل لي رسالة",
  "السيرة الذاتية",
  " Wael Habib",
  "التقنيات",
  "أدواتي الرقمية",
  "عش كأنك تموت غدًا، وتعلم كأنك تعيش أبداً.",

  "علم النفس",
  "5+ سنوات",
  "التنفيذ الاحترافي",
  "تنفيذ احترافي", // badge4
  "5+ سنوات", // badge5
  "تعلمت عدة أطر عمل", // badge6
  "تعليم ذاتي", // badge7
  "تنفيذ احترافي", // badge8
  "5+ سنوات", // badge9
  "تعلمت عدة أطر عمل", // badge10
  "تعليم ذاتي", // badge11
  "تنفيذ احترافي", // badge12
  "5+ سنوات", // badge13
  "تعلمت عدة أطر عمل", // badge14
  "منهج الجامعة", // badge15
  "استخدام الواجهة الخلفية بشكل احترافي", // badge16
  "2+ سنوات", // badge17
  "تعلمت عدة مكتبات", // badge18
  "منهج الجامعة", // badge19
  "تعليم ذاتي", // badge20
  "1+ سنوات", // badge21
  "تعلمت عدة مكتبات", // badge22
  "تنفيذ احترافي", // badge23
  "تعليم ذاتي", // badge24
  "استخدام الواجهة الأمامية بشكل احترافي", // badge25
  "5+ سنوات", // badge26
  "تعلمت عدة مكتبات", // badge27
  "تعليم ذاتي", // badge28
  "2+ سنوات", // badge29
  "تنفيذ احترافي", // badge30
  "1+ سنوات", // badge31
  "تعليم ذاتي", // badge32
  "الشركات التي ساهمت فيها",
  "إنجازات العمل",
  "مكافأة العمل الجيد هي الفرصة لفعل المزيد.",
  "الموارد البشرية",
  "رئيس المتطوعين",
  "كرئيس للمتطوعين، قدت عملية التوظيف وتوزيع وإدارة أكثر من 150 متطوعًا لمختلف الأقسام في مهرجان البحر الأحمر. قمت بإجراء مقابلات، وتحديد المتطوعين في الأدوار المناسبة، وتنسيق التواصل بين الأقسام والمتطوعين لضمان سير العمليات بسلاسة. كان دوري محوريًا في خلق تجربة تطوعية إيجابية وفعالة، مما ساهم في النجاح العام للفعالية.",
  "تدريب مطور برمجيات",
  "مطور برمجيات متكامل",
  "أثناء فترة تدريبي كمطور برمجيات متكامل، اكتسبت خبرة عملية في بناء تطبيقات ويب ديناميكية باستخدام React للواجهة الأمامية وJava للواجهة الخلفية. عملت أيضًا بشكل مكثف مع MySQL لإدارة قواعد البيانات ومع Linux للمهام المتعلقة بعمليات DevOps. بالإضافة إلى ذلك، طورت مهاراتي في التصميم وتجربة المستخدم (UI/UX)، مما ساهم في إنشاء واجهات سهلة الاستخدام وتجارب مستخدم سلسة.",
  "اطّلع على مشروعي",
  "السياحة",
  "مدير حلول التذاكر",
  "مدير حلول التذاكر مسؤول عن الإشراف على إدارة حلول المشاكل والاستفسارات المتعلقة بالتذاكر في أحداث FIFA. يتضمن هذا الدور العمل بشكل وثيق مع مختلف الأقسام الداخلية، الجهات الخارجية، والعملاء لضمان حل فعال وفي الوقت المناسب لمشاكل التذاكر، مما يعزز رضا العملاء ويحافظ على نزاهة عمليات التذاكر الخاصة بـ FIFA.",
  "المبيعات",
  "موظف مبيعات",
  "بائع ديناميكي مع شهر من الخبرة القيمة في بيع الملابس الطبية. تأقلم بسرعة مع الصناعة واكتسب الكثير من المعرفة. قدرة مثبتة على التعامل مع العملاء وتحقيق أهداف المبيعات. متحمس لاستغلال هذه الخبرة في الأدوار المستقبلية، مما يظهر القدرة على التكيف والتعلم السريع.",
  "السياحة",
  "مضيف - الضيافة المتميزة في الفورمولا 1",
  "كمضيف في الضيافة المتميزة للفورمولا 1، ستقوم بخلق تجارب لا تُنسى للضيوف المهمين، وضمان راحتهم ورضاهم خلال الفعاليات.",
  "متطوع",
  "جمعية وسم - البلد",
  "متطوع",
  "مهرجان البحر الأحمر السينمائي",
  "متطوع",
  "كلية محمد بن سلمان",
  "متطوع",
  "كسوة السيدة عائشة",
  " : زملائي عني",
  "اتصل بي",
  "خلنا نتحدث",
  "واتساب",
  "Wael Habib",
  "لينكدإن ",
  "جيت هب "


];


document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.querySelector(".typing-animation");
    const words = JSON.parse(typingElement.getAttribute("data-words"));
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = "";
    let isDeleting = false;
    const typingSpeed = 50;
    const deletingSpeed = 60;
    const delay = 400;
  
    function type() {
      currentWord = words[wordIndex];
      if (isDeleting) {
        letterIndex--;
        typingElement.textContent = currentWord.substring(0, letterIndex);
        if (letterIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, delay);
        } else {
          setTimeout(type, deletingSpeed);
        }
      } else {
        letterIndex++;
        typingElement.textContent = currentWord.substring(0, letterIndex);
        if (letterIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(type, delay);
        } else {
          setTimeout(type, typingSpeed);
        }
      }
    }
  
    type();
  });
  const contactLink = document.getElementById('contactLink');
  const modalBg = document.getElementById('modalBg');
  const closeModal = document.getElementById('closeModal');





// translation


function changetypedata() {
    const element = document.getElementById('typing-animation-section1');
    const words = JSON.parse(element.getAttribute('data-words'));

    const arabicTranslations = {
        "Software Development": "تطوير البرمجيات",
        "HR Expertise": "خبرة الموارد البشرية",
        "Photographer": "مصور",
        "Project Management": "إدارة المشاريع",
        "Designer": "مصمم"
    };

    const translatedWords = words.map(word => arabicTranslations[word] || word);
    element.setAttribute('data-words', JSON.stringify(translatedWords));

    // Restart typing animation if it's being managed by a library or custom script
    if (typeof restartTypingAnimation === 'function') {
        restartTypingAnimation();
    }
}



// Array of IDs (filtered)
     

        

        // Variable to track the current language state
        

        // Event listener for the toggle button
        // document.getElementById('toggleBtn').addEventListener('click', function () {
        //   changetypedata()
        //   // Loop through each element and toggle its innerHTML
        //   for (let i = 0; i < filteredIds.length; i++) {
        //       const element = document.getElementById(filteredIds[i]);
        //       if (element) {
        //           element.innerHTML = isEnglish ? filteredArabicTranslations[i] : filteredInnerHTMLContent[i];
        //       }
        //   }
          
        //   // Toggle the language state
        //   isEnglish = !isEnglish;
        // });



        function toggleLanguage() {

          // Loop through each element and toggle its innerHTML
          for (let i = 0; i < filteredIds.length; i++) {
            const element = document.getElementById(filteredIds[i]);
            if (element) {
              element.innerHTML = isEnglish ? filteredArabicTranslations[i] : filteredInnerHTMLContent[i];
            }


            
          }

          
          // Toggle the language state
          isEnglish = !isEnglish;
        }

        

        // Set initial content to English
        window.onload = function () {
          for (let i = 0; i < filteredIds.length; i++) {
              const element = document.getElementById(filteredIds[i]);
              if (element) {
                  element.innerHTML = filteredInnerHTMLContent[i];
              }
          }
        };




