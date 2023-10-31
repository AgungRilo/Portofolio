// constant data
var menu = [
  { id: "profile", name: "Profile" },
  { id: "skills", name: "Skills" },
  { id: "education", name: "Education" },
  { id: "experience", name: "Experience" },
  { id: "project", name: "Projects" },
  { id: "resume", name: "Resume", url: "https://drive.google.com/file/d/1Y8Yvop3a8cJKHqxGaOWoADPjque3-r0E/view?usp=sharing" },
];

var profile = [
  "Experienced React.js developer with 2 years in web development, known for strong problem-solving,communication, and collaboration skills. Committed to continual learning and responsive design,dedicated to delivering high-quality web solutions.",
  "My journey in web development has equipped me with a profound understanding of React.js, enabling meto create dynamic and user-friendly web applications. I thrive in problem-solving, always seeking innovative solutions to technical challenges. My adept communication skills allow me to collaborate seamlessly with cross-functional teams, translating complex technical concepts into plain language, ensuring everyone is on the same page.",
  "What sets me apart is my unwavering commitment to ongoing learning. In the ever-evolving world of web development, I constantly stay updated with the latest trends and best practices. This drive for knowledge empowers me to deliver cutting-edge solutions that adapt to the evolving needs of the digital landscape.",
  "One of my core focuses is responsive design. I believe that a great web application should provide a seamless user experience across all devices. Therefore, I meticulously ensure that the projects I work on are not only visually appealing but also fully functional on various screen sizes and platforms.",
  "I take immense pride in the quality of work I deliver. The web applications I build are not just functional but also reliable and efficient, catering to the specific needs of my clients.",
  "In summary, I bring a holistic approach to web development, combining technical expertise, problem-solving, communication skills, and a commitment to staying ahead of the curve. I'm here to help you create exceptional web solutions that resonate with your audience and stand the test of time."
]

var skills = [
  {
    id: 1,
    title: "Language & Database",
    data: [
      {
        title: "Java",
        src: "./asset/java.png",
        alt: "java",
      },
      {
        title: "MySQL",
        src: "./asset/mysql.png",
        alt: "mysql",
      },
      {
        title: "JavaScript",
        src: "./asset/js.png",
        alt: "javascript",
      },
      {
        title: "TypeScript",
        src: "./asset/ts.png",
        alt: "typescript",
      },
      {
        title: "Nextjs",
        src: "./asset/nextjs.png",
        alt: "nextjs",
      },
    ]
  },
  {
    id: 2,
    title: "Framework & Technologies",
    data: [
      {
        title: "React",
        src: "./asset/react.png",
        alt: "react",
      },
      {
        title: "Nodejs",
        src: "./asset/nodejs.png",
        alt: "nodejs",
      },
    ]
  },
  {
    id: 3,
    title: "Framework & Technologies",
    data: [
      {
        title: "Visual Studio Code",
        src: "./asset/vscode.png",
        alt: "vscode",
      },
      {
        title: "Git",
        src: "./asset/git.png",
        alt: "git",
      },
      {
        title: "Postman",
        src: "./asset/postman.png",
        alt: "postman",
      }
    ]
  },
]

var education = [
  {id:1, title: "Bachelor Degree", name:"Universitas Singaperbangsa Karawang",year:"2016 - 2020", location:"Karawang, Indonesia", major:"Informatics Engineering", gpa:"GPA 3.56"},
  {id:2, title: "Vocational High School", name:"SMA Negeri 1 Setu",year:"2013 - 2016", location:"Bekasi, Indonesia", major:"Scince Major", gpa: null},
]

var experience = [
  {
    id: 1,
    company: "PT. Paramadaksa Teknologi Nusantara",
    jobTitle: "Frontend Developer",
    date:"2020 - present",
    location:"Tangerang, Indonesia",
    detail: [
     "Developed reusable components to minimize redundancy and simplify future upkeep.",
     "Employed CSS-in-JS for styling, ensuring a uniform UI appearance.",
     "Established a responsive design to facilitate cross-device usage with minimal adjustments.",
     "Utilized the Context API to enhance application state control."
    ]
  },
  {
    id: 2,
    company: "PT. Fortuna Mediatama (Internship)",
    jobTitle: "Software Engineer",
    date:"08/2018 – 10/2018",
    location:"Tangerang, Indonesia",
    detail: [
     "Application maintenance.",
     "Entering data backups on the application.",
    ]
  },  
]

let project = [
  {
    id:1,
    title:"Nexchief 2 (User)",
    description:"Web application that functions as a SAP module for reporting, monitoring, scheduling, profit calculations, etc. for principals (user site)",    
    date:"10/2022  - 10/2023",
    jobTitle:"as Frontend for developing and maintenance web (ReactJS, Antd, etc.)"
  },
  {
    id:1,
    title:"Nexchief 2 (Admin)",
    description:"Web application that functions as a SAP module for mapping user and principals, monitoring, role mapping, etc. for principals (admin site)",    
    date:"06/2021 - 10/2022",
    jobTitle:"as Frontend for developing and maintenance web (ReactJS, Antd, etc.)"
  },
  {
    id:2,
    title:"Gropoint",
    description:"Web application that functions as a collection and exchange point for GroMart customer buyers for PT Paramadaksa Teknologi Nusantara",    
    date:"03/2021 - 06/2021",
    jobTitle:"as Frontend Engineer (React JS, ChakraUI, etc.)"
  }
]

var card = [
  {
    id:1, 
    title:"Agung Rilo Pambudi",
    jobTitle:"Frontend Developer",
    src:"./asset/profile.jpg",
    alt:"profile.jpg",
    email:"agungrilo1@gmail.com",
    phone:"081288054010"
  },
]

// Title for header
var title = document.getElementById("header")
var titlePortofolio = document.createElement("h1")
titlePortofolio.textContent = "Portofolio"
title.appendChild(titlePortofolio)
// Text for Footer
var footer = document.getElementById("footer");
footer.textContent = "@ 2023 Dicoding. All rights reserved"
// Mapping data for menu nav
var menuDiv = document.getElementById("menu");
menu.forEach(function (item) {
  var a = document.createElement("a");
  a.href = "#" + item.id;
  a.textContent = item.name;
  if (item.url) {
    a.href = item.url;
    a.target = "_blank";
  }
  menuDiv.appendChild(a);
});
// Mapping Profile
var profileParagraph = document.getElementById("profile");
var h1Profile = document.createElement("h1");
h1Profile.textContent = menu[0].name
profileParagraph.appendChild(h1Profile)
profile.forEach(function (item) {
  var p = document.createElement("p");
  p.textContent = item
  profileParagraph.appendChild(p)
})
// Mapping Skills
var skillsContainer = document.getElementById("skills");
var h1Skills = document.createElement("h1");
h1Skills.textContent = menu[1].name
skillsContainer.appendChild(h1Skills)
skills.forEach(function (skillGroup) {
  var skillsContainer = document.getElementById("skills");
  var h2Elem = document.createElement("h2");
  h2Elem.className = "sub-title";
  h2Elem.textContent = skillGroup.title;
  var skillContainer = document.createElement("div");
  skillContainer.className = "skill-container";
  skillGroup.data.forEach(function (skillData) {
    var skillElem = document.createElement("div");
    skillElem.className = "skill";
    var imgElem = document.createElement("img");
    imgElem.src = skillData.src;
    if (skillData.alt === "nextjs") {
      imgElem.width = 130;
      imgElem.height = 100;
    } else if (skillData.alt === "postman") {
      imgElem.width = 170;
      imgElem.height = 100;
    } else {
      imgElem.width = 100;
      imgElem.height = 100;
    }
    imgElem.alt = skillData.alt;
    var h4Elem = document.createElement("h4");
    h4Elem.textContent = skillData.title;
    skillElem.appendChild(imgElem);
    skillElem.appendChild(h4Elem);
    skillContainer.appendChild(skillElem);
  });
  skillsContainer.appendChild(h2Elem);
  skillsContainer.appendChild(skillContainer);
})
// Mapping Education
var educationContainer = document.getElementById("education");
var h1EduElem = document.createElement("h1");
h1EduElem.textContent = menu[2].name;
var customTimeline = document.createElement("div")
customTimeline.className = "custom-timeline";
education.forEach(function (elemEdu){
  var customTimelineItem = document.createElement("div");
  customTimelineItem.className = "custom-timeline-item";
  var customTimelineIcon = document.createElement("div");
  customTimelineIcon.className = "custom-timeline-icon";
  var customTimelineContent = document.createElement("div");
  customTimelineContent.className = "custom-timeline-content";
  var h3ElemEdu=document.createElement("h3");
  h3ElemEdu.textContent = elemEdu.title;
  var pName=document.createElement("p");
  pName.textContent = elemEdu.name;
  var pYearLocation=document.createElement("p");
  pYearLocation.textContent = `${elemEdu.year} | ${elemEdu.location}`;
  customTimeline.appendChild(customTimelineItem);
  customTimelineContent.appendChild(h3ElemEdu);
  customTimelineContent.appendChild(pName);
  customTimelineContent.appendChild(pYearLocation);
  if (elemEdu.gpa) {
        var pGpa = document.createElement("p");
        pGpa.textContent = elemEdu.gpa;
        customTimelineContent.appendChild(pGpa);
      }
  customTimelineItem.appendChild(customTimelineIcon);
  customTimelineItem.appendChild(customTimelineContent);
})
educationContainer.appendChild(h1EduElem);
educationContainer.appendChild(customTimeline);
//Mapping Experience
var experienceContainer = document.getElementById("experience");
var h1Exp = document.createElement("h1");
h1Exp.textContent = menu[3].name;
var timeline = document.createElement("div");
timeline.className = "timeline";
experience.forEach(function(eleExp){
  var timelineItem = document.createElement("div");
  timelineItem.className = "timeline-item";
  var timelineIcon = document.createElement("div");
  timelineIcon.className = "timeline-icon";
  var timelineContent = document.createElement("div");
  timelineContent.className = "timeline-content";
  var h3Exp = document.createElement("h3");
  h3Exp.textContent = eleExp.company;
  var jobTitle = document.createElement("p");
  jobTitle.textContent = eleExp.jobTitle;
  var dateLocation = document.createElement("p");
  dateLocation.textContent = `${eleExp.date} | ${eleExp.location}`
  var listContainer = document.createElement("ul");
  eleExp.detail.forEach(function(eleDetail){
    var list = document.createElement("li");
    list.className = "portofolio-item";
    var paragraphList = document.createElement("p");
    paragraphList.textContent = eleDetail;
    list.appendChild(paragraphList);
    listContainer.appendChild(list)
  })
  timeline.appendChild(timelineItem);
  timelineItem.appendChild(timelineIcon);
  timelineItem.appendChild(timelineContent);
  timelineContent.appendChild(h3Exp);
  timelineContent.appendChild(jobTitle);
  timelineContent.appendChild(listContainer);
})
experienceContainer.appendChild(h1Exp);
experienceContainer.appendChild(timeline);
//Mapping Projects
var projectContainer = document.getElementById("project");
var h1Project = document.createElement("h1");
h1Project.textContent = menu[4].name;
var customTimeline = document.createElement("div")
customTimeline.className = "custom-timeline";
project.forEach(function(eleProject){
  var customTimelineItem = document.createElement("div");
  customTimelineItem.className = "custom-timeline-item";
  var customTimelineIcon = document.createElement("div");
  customTimelineIcon.className = "custom-timeline-icon";
  var customTimelineContent = document.createElement("div");
  customTimelineContent.className = "custom-timeline-content";
  var h3Project = document.createElement("h3");
  h3Project.textContent = eleProject.title;
  var paragraphDesc = document.createElement("p");
  paragraphDesc.textContent = eleProject.description;
  var date = document.createElement("p");
  date.textContent = eleProject.date;
  var jobTitleProject = document.createElement("p");
  jobTitleProject.textContent = eleProject.jobTitle;

  customTimeline.appendChild(customTimelineItem);
  customTimelineItem.appendChild(customTimelineIcon);
  customTimelineItem.appendChild(customTimelineContent);
  customTimelineContent.appendChild(h3Project);
  customTimelineContent.appendChild(paragraphDesc);
  customTimelineContent.appendChild(date);
  customTimelineContent.appendChild(jobTitleProject);

})
projectContainer.appendChild(h1Project);
projectContainer.appendChild(customTimeline);
