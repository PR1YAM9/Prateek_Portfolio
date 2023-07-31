import img1 from '../../images/Rectangle 10.png'
import img2 from '../../images/Rectangle 11 (1).png'
import img3 from '../../images/Rectangle 12.png'
import img4 from '../../images/Rectangle 13.png'
import img5 from '../../images/Rectangle 19.png'
import img6 from '../../images/Rectangle 20.png'
import img7 from '../../images/Rectangle 21.png'
import img8 from '../../images/Rectangle 18.png'
import img9 from '../../images/Property 1=Default.png'
import img10 from '../../images/Property 1=Default (1).png'
import img11 from '../../images/Property 1=Default (2).png'
import img12 from '../../images/Property 1=Default (3).png'


const data = [
  {
    id:1,
    sno: "PROJECT 1",
    projectTitle: "Cable Driven Parallel Robot",
    location: "Summer Project Intern at eYantra IIT Bombay",
    about:
      "The bot utilizes cables or strings to manipulate a payload, offering high precision and flexibility",
    techStack: ["Python", "Open CV", "ESP32", "Kinematics", "CAD"],
    backgroundColor:'#081E48',
    snoColor:'#246AFD',
    projectTitleColor:'#FFFFFF',
    techColor:'#637AAA',
    aboutColor:'#99BAF9',
    border:'#23488E',
    locationColor:'#637AAA',
    img:img1,
    img2:img5,
    img3:img9,
    
  },
  {
    id:2,
    sno: "PROJECT 2",
    projectTitle: "IN-PIPE BOT",
    location: "Project for Robotix IITH",
    about:
      "The bot detects cracks in the pipes while traversing through it.",
    techStack: ["Python", "Open CV", "Image Processing", "Neutral Networks"],
    backgroundColor:'#084848',
    snoColor:'#1AAEAE',
    projectTitleColor:'#FFFFFF',
    techColor:'#63AA9D',
    aboutColor:'#61ACB1',
    border:'#238E7A',
    locationColor:'#4F8285',
    img:img2,
    img2:img6,
    img3:img11,
  },
  {id:3,
    sno: "PROJECT 3",
    projectTitle: "Heart Rate Monitor using TCRT",
    location: "For course EE2301",
    about:
      "The device uses the amount of IR rays reflected from ones finger to estimate the rate of blood flow and hence, the heart rate",
    techStack: ["Analog Filters", "Electronics", "Arduino Microcontrollers"],
    backgroundColor:'#482E08',
    snoColor:'#FDC024',
    projectTitleColor:'#FFFFFF',
    techColor:'#AAA363',
    aboutColor:'#F9E499',
    border:'#8E8323',
    locationColor:'#AA9663',
    img:img3,
    img2:img7,
    img3:img10,
  },
  {
    id:4,
    sno: "PROJECT 4",
    projectTitle: "Thermometer using PT100",
    location: "For course EE2301",
    about:
      "Mapping the resistance of PT100 sensor to corresponding temperature using regression.",
    techStack: ["Polynomial Regression", "Machine Learning", "Microcontrollers"],
    backgroundColor:'#082948',
    snoColor:'#24BCFD',
    projectTitleColor:'#FFFFFF',
    techColor:'#6395AA',
    aboutColor:'#99DCF9',
    border:'#23678E',
    locationColor:'#6395AA',
    img:img4,
    github:true,
    img2:img8,
    img3:img12,  }
];
export default data;
