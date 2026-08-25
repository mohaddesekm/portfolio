export const en = {
    nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
    },

    hero: {
        greeting: `Hello! I'm`,
        name: 'Mohaddese',
        family: 'Karimi',
        stack: 'Frontend Developer',
        description: 'I build modern and responsive web experiences.',
        projectsButton: 'View Projects',
        contactButton: 'Contact Me',
    },

    about: {
        title: 'About Me',
        heading: 'A little about me',
        description:
            'Front-End Developer with a focus on JavaScript, React, and responsive UI design. Experienced in building web applications using React, React Router, Hooks, and Tailwind CSS. Currently learning TypeScript and Next.js.',
        Education: 'Education',
        course: 'BSc in Engineering Physics',
        university: 'Arak Univercity',
        name: 'Mohaddese Karimi',
        stack: 'Frontend Developer',
        resume: 'Download Resume',
    },

    projects: {
        title: 'Projects',
        description: `Here are some of the projects I've worked on, showcasing my skills in various technologies and problem domains.`,
        showAll: 'Show All',
        showLess: 'Show Less',
        demo: 'Live Demo',

        items: [
            {
                id: 1,
                title: 'Portfolio Website',
                description:
                    'A personal portfolio website for showcasing projects, skills, experience, and professional background.',
                githubUrl: 'https://github.com/mohaddesekm/portfolio',
                // demoUrl: 'http://localhost:5173/#projects',
                image: '/img/portfolio.png',
                skills: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive'],
            },
            {
                id: 2,
                title: 'Coffee Shop',
                description:
                    'A coffee shop web application for browsing and purchasing coffee products, allowing users to explore different categories, add items to their cart, and place orders.',
                githubUrl: 'https://github.com/mohaddesekm/coffee-shop',
                demoUrl: 'https://coffee-shop-ajas.vercel.app/',
                image: '/img/coffee shop.png',
                skills: ['html', 'css', 'Tailwind CSS', 'js', 'Responsive'],
            },
            {
                id: 3,
                title: 'Task Manager',
                description:
                    'A task management web application that allows users to create, complete, delete, and filter their tasks.',
                githubUrl:
                    'https://github.com/mohaddesekm/react-hooks-task-manager',
                demoUrl: 'https://task-manager-km.vercel.app/',
                image: '/img/task manager.png',
                skills: [
                    'React',
                    'React Hooks',
                    'Tailwind CSS',
                    'LocalStorage',
                    'Responsive',
                ],
            },
            {
                id: 4,
                title: 'Educational Website',
                description:
                    'A learning platform for browsing and exploring programming courses, allowing users to discover courses, view course details, and access educational content.',
                githubUrl: 'https://github.com/mohaddesekm/sabzlearn-react',
                demoUrl: 'https://sabzlearn-react-phi.vercel.app/',
                image: '/img/Educational Website.png',
                skills: [
                    'React',
                    'React Router',
                    'Hooks',
                    'Fetch API',
                    'Context API',
                    'REST API',
                    'Responsive',
                ],
            },
        ],
    },
    skills: {
        title: 'Skills',
        description:
            'Focused on building modern, scalable, and user‑friendly webapplications.',
    },
    contact: {
        title: 'Get In Touch',
        description: 'Have a project in mind?',
        description2: 'Let\'s build something useful.',
        contactInfo : 'Contact Information'
    },
};
