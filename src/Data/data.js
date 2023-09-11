//import urban from "../img/projects/UIProject.png";
import wellican from "../img/projects/wellican.jpg";
import ganttChartUrban from "../img/projects/ganttChartUrban.jpg";
import dashboardUrban from "../img/projects/dashboardUrban.jpg";
import researchPaperUrban from "../img/projects/researchPaperUrban.png";
import researchPaper2Urban from "../img/projects/researchPaper2Urban.gif";
import userStoriesUrban from "../img/projects/userStoriesUrban.jpg";
import mobileSketchUrban from "../img/projects/mobileSketchUrban.jpg";
import tabletSketchUrban from "../img/projects/tabletSketchUrban.jpg";
import desktopSketchUrban from "../img/projects/desktopSketchUrban.jpg";
import responsiveExampleUrban from "../img/projects/responsiveExampleUrban.jpg";
import finalUrban from "../img/projects/finalUrban.jpg";
import brainstormingIRE from "../img/projects/brainstormingIRE.jpg";
import wordCloudImg from "../img/projects/wordcloud.png";
import flowWellican from "../img/projects/flowWellican.png";
import interactionMapWellican from "../img/projects/interactionMapWellican.jpg";
import sketchesWellican from "../img/projects/sketchesWellican.jpg";
import dashboard1Wellican from "../img/projects/dashboard1Wellican.jpg";
import dashboard2Wellican from "../img/projects/dashboard2Wellican.jpg";

export const cardData = [
    {
        id: 0,
        title: "Habit Tracker",
        shortDescription: "A personal React-project ",
        src: wordCloudImg,
        url: "dev/habit-tracker"
    },
    {
        id: 1,
        title: "Wordcloud",
        shortDescription: "A personal React-project to create a wordcloud",
        src: wordCloudImg,
        url: "dev/music-project"
    },
    {
        id: 2,
        title: "InspectRealEstate",
        shortDescription: "Working with IRE's solutions to add on a vital feature.",
        period: "Dec 2020 - now",
        description: "Working with InspectRealEstate to create a new feature which will be groundbreaking in the way the clients manage their everyday life.",
        src: brainstormingIRE,
        url: "inspect-real-estate",
        role: "User Experience Designer",
        tags: ["UX", "User needs", "Research", "Testing", "Client expectations", "Client meetings", "Database design", "Compromises", "Complex systems"],
        phases: [
            {
                id: 1,
                name: "Discovery",
                description: "Starting December 2020, I had to familiarise myself with the concept. I worked with a contractor that had technical knowledge in the field, and we worked well together. I interviewed a large selection of clients to hear how they were using our software, what they were using in place for this feature and how we could improve their everyday life. ",
                images: []
            },
            {
                id: 2,
                name: "Sketching",
                description: "The technical person suggested things in a technical manner, and I worked on translating this into usable designs. After together getting our heads around what we wanted to do, I started sketching. The new feature had to work with the existing solution so I had to figure out what conventions were already followed in the system. I sketched, then reached out to clients to see what they thought, revisited the designs, removed and added features iteratvely. This went on for a while until I felt the designs were ready to reach the development team.",
                images: []
            },
            {
                id: 3,
                name: "Realising",
                description: "Because of my technical knowledge, I was able to have detailed conversations with the developer lead about how it would all work. We discussed back and forth, I provided database sketches of my thinking. Eventually, I came up with a list of 'first release' items, some based on what was necessary for the project to work and some based on what was realistic to be developed in the system at that stage.",
                images: []
            },
            {
                id: 4,
                name: "Ongoing project management",
                description: "Since then, we have had one release of a version of the new feature, and I am working on maintaining an updated version of both bugs and a prioritised list for a second release. I keep in touch with the clients to hear how they would be using it and what would be missing for them to start using it today so that we can constantly improve. I'm available for the developers when they have questions on where to place something, and I'm always open to changing my original designs when new information emerges. ",
                images: []
            }
        ]
    },
    {
        id: 3,
        title: "Urban Insitute",
        period: "Aug 2020 - Nov 2020",
        shortDescription: "Working with smart-city data to improve city planning with Brisbane City Council",
        description: "Creating useful and repornsive designs for EneHub and Brisbane City Council through the KX platform. A thesis project and intership Aug 2020 - Nov 2020.",
        src: "", //urban,
        url: "urban-institute",
        role: "User Experience Designer and Front End Developer",
        tags: ["UX", "User needs", "Research", "Responsiveness", "CSS", "KX Platform", "Thesis"],
        quote: "Tuva brought energy, initiative and out-of-the-box thinking to the problem, and came up with some excellent ideas. ",
        autor: "Simon Kaplan",
        phases: [
            {
                id: 1,
                name: "Discovery & Planning",
                description: "First, I took time to scope out the project. The project had a set timeline so I took the time to create a Gantt Chart to create transparency for the company and stakeholders. We agreed on what was the desired outcome of the project and where my focus had to be. The image shows the dashboard of the program that I was going to be working on.",
                images: [
                    { src: ganttChartUrban, alt:"Snapshot of Gantt chart" },
                    { src: dashboardUrban, alt:"Snapshot of dashboard in it's previous state" }
                ]
            },
            {
                id: 2,
                name: "Research & Analyse",
                description: "The project was facing a particular challenge in the sense that I was not able to talk to the end-users of the system. They were a client of our client and therefore not accessible to me. There was little knowledge around why we had the visualisations to begin with, so I started researching what other people had done with the information we had.",
                images: [
                    {src: researchPaperUrban, alt:"A way of visualising pedestrian data called PIRI"},
                    {src: researchPaper2Urban, alt:"A Melbourne project visualising pedestrian data"}
                ],
                descriptionP2: "From my findings, I created a set of user stories to make it easier to make the designs suitable for the clients and manage client expectations. This practice was later adopted by the company too! ", 
                imagesP2: [
                    {src: userStoriesUrban, alt:"A list of user stories"}
                ]
            },
            {
                id: 3,
                name: "Design & Implement",
                period: "Feb 2020 - June 2020",
                description: "Using the user stories from the previous phase, I created sketches to illustrate the concept. I re-arranged the tiles to show important information first and introduced new ways of presenting the data. ",
                images: [
                    {src: mobileSketchUrban, alt:"A mobile sketch of the new, useful visualisations", class: "mobile-sketches"},
                    {src: tabletSketchUrban, alt:"A tablet sketch of the new, useful visualisations"},
                    {src: desktopSketchUrban, alt:"A desktop sketch of the new, useful visualisations"},
                ],
                descriptionP2: "The project was not interactive, and I did not have access to the end-users, which means the project was not tested on any users. But, I used the sketches to implement the solution into the custom 'kx platform', which presented its own challenges. The main goal was to make the visualisations responsive, which the company had not managed before. As shown below, the system did not respond well to smaller screens!", 
                imagesP2: [
                    {src: responsiveExampleUrban, alt:"An example of how the software would look on smaller screens with multiple scrollbars showing up."}
                ]
            },
            {
                id: 4,
                name: "Review & Finalise",
                description: "I managed to make the visualisations responsive and created designs that had the potential to be more useful than the existing ones. As a general, the project would have benefited from having access to the end user to ensure the reason for visualising the data was properly met, but I found substantial evidence that this way would be beneficial. A very different project, I learned so much about smart city technology, custom made software and visualisations for analytic purposes!",
                images: [
                    {src: finalUrban, alt: "The final visualisations as they were implemented", class: "final-image"}
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Wellican Health and Fitness",
        shortDescription: "Working with a startup idea to create an MVP.",
        src: wellican,
        url: "wellican",
        role: "User Experience designer and Front End Developer",
        tags: ["UX", "Sketches", "Wireframes", "InVision", "Prototyping", "Testing", "Tailwind", "Thesis", "React JS"],
        description: "Realising a concept from idea stage to a full Minimum Viable Product, with the help of one Back End Developer: 'How to Create a Design That Encourages Regular, Active Use in a New Health and Fitness Platform'",
        phases: [
            {
                id: 1,
                name: "Discover & Plan",
                description: "The first part of the project was to scope out a timeline for the project and understand what the client wanted. The project had never been sketched before, and the goal was to have a working website in just under 15 weeks. A big part of this phase was to argue for having a longer design phase, so that the MVP would give proper value. I spent time scoping out the project, it early became apparent that we needed to re-prioritise the client's list of priorities to ensure the most important features were included.",
                images: [
                    {src: flowWellican, alt: "An illustration of the project workflow with introduction, design, develop, test, finalise"}
                ]
            },
            {
                id: 2,
                name: "Design & Evaluate",
                description: "For the next phase of the project, I spent a lot of time reading through the preliminary research that had been done by the client. Based on this, I sketched out a website structure for the client and we collaborated closely to make sure it matched his goals for the project. From this, I made a prototype through iPad sketches and made it interactive through InVision. ",
                images: [
                    {src: interactionMapWellican, alt: "A brief overview of the interaction map sketched for the project"},
                    {src: sketchesWellican, alt: "Sketches of how the wellican website could be structured."}
                ],
                descriptionP2: "I conducted user task testing on people from the target audience and obtained some interesting findings. Amongst these were re-wordings, structural change (e.g. the feed should be on the home page) and minor changes required. The user testing was really valuable."
            },
            {
                id: 3,
                name: "Implement",
                description: "Because of the time limitation and the nature of the project, the designs were only tested once before implementation started. For a future project, I would have loved to stay longer in the design & test phase to be able to learn more about user behaviour. I developed the MVP in React, and because the design aesthetics were not in focus I used Tailwind as a CSS framework, to speed up development time. I worked closely with a Back End Developer, who provided me with the relevant APIs.",
                images: [
                    {src: dashboard1Wellican, alt: "One of the screens from the developed prototype"},
                    {src: dashboard2Wellican, alt: "A different screen from the developed prototype"}
                ],
                descriptionP2: "Note: Project has a confidential nature"
            },
            {
                id: 4,
                name: "Evaluate & Finalise",
                description: "After developing the prototype I did another round of user testing. I used user tasks and semi-structured interviews to understand the users' pain points and goals. I discovered a range of possible improvements for the prototype which was handed over to the founder to work with for the next iteration. It was awesome to see a project come to life in such a short amount of time!",
                images: [
                    {src: '', alt: ""}
                ]
            },
        ]
    }
];

export const habitData = [
    {
        ID: 0,
        userID: 1,
        name: 'Meditate More',
        frequencyGoal: 'Every day', //Move this out later
        type: 'add', //Move this out later
        icon: 'yoga'
    },
    {
        ID: 1,
        userID: 1,
        name: 'Quit Smoking',
        frequencyGoal: 'Every day', //Move this out later
        type: 'remove', //Move this out later
        icon: 'no-smoking'
    }
];

export const habitTracking = [
    {
        ID: 0,
        dateTime: new Date('2022-11-19T23:00:00.000000')
    },
    {
        ID: 0,
        dateTime: new Date('2022-11-20T13:00:00.000000')
    }
];


export const urbanInstitute = {};