interface skill{
    title:string;
    percent:number;
}
interface projects{
    image:string;
    github?:string;
    title:string;
    description:string;
    tools:string[];
}

interface socialLink{
    title:string;
    url:string;
    iconUrl:string;
    
}

const about:string = "I’m Saeed PK, a passionate web developer focused on creating timeless digital experiences. With expertise in the MERN stack, Next.js, and React, I bring ideas to life through clean, scalable code and intuitive design. Whether it's building dynamic applications or optimizing performance, my goal is to deliver high-quality solutions that leave a lasting impact.";


const skills:skill[] = [
    {
        title:"JavaScript",
        percent:80
    },
    {
        title:"TypeScript",
        percent:50
    },
    {
        title:"Next Js",
        percent:75
    },
    {
        title:"React js",
        percent:85
    },
    {
        title:"MongoDb",
        percent:70
    },
    {
        title:"TailwindCSS",
        percent:85
    },
    {
        title:"GIT",
        percent:70
    },
    {
        title:"Express js",
        percent:90
    },
    {
        title:"Handlebars",
        percent:95
    },
    {
        title:"HTML",
        percent:95
    },
    {
        title:"CSS",
        percent:85
    },
    {
        title:"Bootstrap",
        percent:90
    },
    
];

const services:string[] = [
    'Responsive Web Design',
    'Full-Stack Applications',
    'UI/UX Design',
    'Performance Optimization',
    'API Integrations'

]


const projectIntro:string = "Explore a selection of my web development projects, showcasing my expertise in building full-stack applications, seamless user interfaces, and engaging digital experiences. Each project is crafted using modern technologies like the MERN stack, Next.js, React, and TailwindCSS  with a focus on performance, scalability, and intuitive design.";

const projects:projects[] = [
    {
        image:'/images/netflix-1.png',
        github:'https://github.com/saeed-wx-pk/Netflix-project',
        title:'Netflix project',
        description:"Netflix-inspired: Clearly states the project's visual and functional resemblance to Netflix. OMDB API: Specifies the data source for movie and TV show information. React: Highlights the technology used to build the frontend.",
        tools:[
            'React js',
            'CSS',
            'JavaScript',
        ]
    },
    {
        image:'/images/shopping.png',
        github:'https://github.com/saeed-wx-pk/Shopping-cart',
        title:'Shopping Cart',
        description:'A shopping cart app built with the MEN stack (MongoDB, Express.js, Node.js) featuring user profiles, promotional offers, cart management, and order tracking, showcasing MEN stack capabilities.',
        tools:[
            'Mongodb',
            'Express',
            'JavaScript',
        ]
    },
    {
        image:'/images/olx.png',
        github:'https://github.com/saeed-wx-pk/olx-project',
        title:'Olx Project',
        description:'OLX Clone Project: A dynamic platform for buying and selling, built with Firebase. Users can browse listings, post ads, and manage accounts with secure, real-time updates and image handling.',
        tools:[
            'React js',
            'Firebase',
            'JavaScript',
        ]
    },
    {
        image:'/images/portfolio.png',
        github:'github.com/saeed-wx-pk/portfolio',
        title:'Portfolio Website',
        description:'This is my personal portfolio website, built to showcase my skills and projects. Designed with Next.js and featuring a modern, responsive layout, it highlights my expertise in web development and provides an intuitive user experience.',
        tools:[
            'Next js',
            'TailwindCSS',
            'TypeScript',
        ]
    },
    
]

const contactIntro:string = "I’d love to hear from you! Whether you have a project in mind, need help with web development, or just want to connect, feel free to reach out. Let’s create something amazing together!";

const socialMedia:socialLink[] = [
    {
        title:"instagram",
        url:"https://www.instagram.com/saeedpk.in",
        iconUrl:"/icons/instagram.svg"
    },
    {
        title:"linkedin",
        url:"https://www.linkedin.com/in/saeed-pk",
        iconUrl:"/icons/linkedin.svg"
    },
    {
        title:"x",
        url:"https://www.x.com/saeed_pk_",
        iconUrl:"/icons/x.svg"
    },
    {
        title:"github",
        url:"https://www.github.com/saeed-wx-pk",
        iconUrl:"/icons/github.svg"
    },
    {
        title:"mail",
        url:"mailto:saeedpk781@gmail.com",
        iconUrl:"/icons/mail.svg"
    },
    {
        title:"facebook",
        url:"https://www.facebook.com/profile.php?id=61559616818067",
        iconUrl:"/icons/facebook.svg"
    },
    {
        title:"whatsapp",
        url:"https://wa.me/7510830593?text=Hello!%20Can%20I%20get%20more%20info%20on%20this?%20",
        iconUrl:"/icons/whatsapp.svg"
    }
]

export  {
    about,
    skills,
    services,
    projectIntro,
    projects,
    contactIntro,
    socialMedia
}

