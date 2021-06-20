import urban from "../../images/projects/UIProject.png";
import wellican from "../../public/img/projects/wellican.jpg";
import ganttChartUrban from "../../public/img/projects/ganttChartUrban.jpg";
import dashboardUrban from "../../public/img/projects/dashboardUrban.jpg";
import researchPaperUrban from "../../public/img/projects/researchPaperUrban.png";
import researchPaper2Urban from "../../public/img/projects/researchPaper2Urban.gif";
import userStoriesUrban from "../../public/img/projects/userStoriesUrban.jpg";
import mobileSketchUrban from "../../public/img/projects/mobileSketchUrban.jpg";
import tabletSketchUrban from "../../public/img/projects/tabletSketchUrban.jpg";
import desktopSketchUrban from "../../public/img/projects/desktopSketchUrban.jpg";
import responsiveExampleUrban from "../../public/img/projects/responsiveExampleUrban.jpg";
import finalUrban from "../../public/img/projects/finalUrban.jpg";
import IRElogo from "../../public/img/projects/IRElogo.png";
import flowWellican from "../../public/img/projects/flowWellican.png";
/* import flowWellican from "../../public/img/projects/flowWellican.png"; */

export const cardData = [
    {
        id: 1,
        title: "InspectRealEstate *Ongoing*",
        shortDescription: "Working with IRE's solutions to add on a vital feature.",
        description: "Dec 2020 - now, working with InspectRealEstate to create a new feature which will be revolutionary in the way the clients manage their everyday life.",
        src: IRElogo,
        url: "inspect-real-estate",
        role: "User Experience Designer",
        tags: ["UX", "User needs", "Research", "Testing", "Client expectations", "Client meetings", "Database design", "Compromises", "Complex systems"],
        phases: [
            {
                id: 1,
                name: "Discovery",
                description: "Starting December 2020, I had to familiarise myself with the concept. I worked with a contractor that had technical knowledge in the field, and we worked well together. I intervied a large selection of clients to hear how they were using our software, what they were using in place for this feature and how we could improve their everyday life. ",
                images: []
            },
            {
                id: 2,
                name: "Sketching",
                description: "The technical person suggested things in a technical manner, and I worked on translating this into usable designs. After together getting our heads around what we wanted to do, I started sketching. The new feature had to work with the existing solution so I had to figure out what conventions were already followed in the system. I sketched, then reached out to clients to see what they thought, revisited the designs, removed features, added features in an iterative manner. This went on for a while, until I felt the designs were ready to reach the development team.",
                images: []
            },
            {
                id: 3,
                name: "Realising",
                description: "Because of my technical knowledge, I was able to have detailed conversations with the developer lead about how it would all work. We discussed back and forth, I provded database sketches of my thinking. Eventually, I came up with a list of 'first release' items, some based on what was necessary for the project to work and some based on what was realistic to be developed in the system at that stage.",
                images: []
            },
            {
                id: 4,
                name: "Ongoing project management",
                description: "Since then, we have had one release of a version of the new featue, and I am working on maintaining an updated version of both bugs and a prioritised list for a second release. I keep in touch with the clients to hear how they would be using it and what would be missing for them to start using it today, so that we can constantly improve. I'm available for the developers when they have questions on where to place something, and I'm always open to changing my original designs when new information emerges. ",
                images: []
            }
        ]
    },
    {
        id: 2,
        title: "Urban Insitute",
        shortDescription: "Working with smart-city data to improve city planning with Brisbane City Council",
        description: "Creating useful and repornsive designs for EneHub and Brisbane City Council through the KX platform. A thesis project and intership Aug 2020 - Nov 2020.",
        src: urban,
        url: "urban-institute",
        role: "User Experience Designer and Front End Developer",
        tags: ["UX", "User needs", "Research", "Responsiveness", "CSS", "KX Platform", "Thesis"],
        quote: "Tuva brought energy, initiative and out-of-the-box thinking to the problem, and came up with some excellent ideas. ",
        autor: "Simon Kaplan",
        phases: [
            {
                id: 1,
                name: "Discovery & Planning",
                description: "First, I took time to scope out the project. The project had a set timeline so I took the time to create a Gantt Chart to create transparency for the company and stakeholders. We agreed on what was the desired outcome of the project and where my focus had to be. Image shows the dashboard of the program that I was going to be working on.",
                images: [
                    { src: ganttChartUrban, alt:"Snapshot of Gantt chart" },
                    { src: dashboardUrban, alt:"Snapshot of dashboard in it's previous state" }
                ]
            },
            {
                id: 2,
                name: "Research & Analyse",
                description: "The project was facing a particular challenge in the sense that I was not able to talk to the end users of the system. They were a client of our client and therefore not accessible to me. There was little knowledge around why we had the visualisations to begin with, so I started doing research on what other people had done with the information we had.",
                images: [
                    {src: researchPaperUrban, alt:"A way of visualising pedestrian data called PIRI"},
                    {src: researchPaper2Urban, alt:"A Melbourne project visualising pedestrian data"}
                ],
                descriptionP2: "From my findings I created a set of user stories to make it easier to make the designs suitable for the clients and manage client expectations. This practice was later adopted by the company too! ", 
                imagesP2: [
                    {src: userStoriesUrban, alt:"A list of user stories"}
                ]
            },
            {
                id: 3,
                name: "Design & Implement",
                description: "Using the user stories from the previous phase, I created sketches to illustrate the concept. I re-arranged the tiles to show important information first and introduced new ways of presenting the data. ",
                images: [
                    {src: mobileSketchUrban, alt:"A mobile sketch of the new, useful visualisations", class: "mobile-sketches"},
                    {src: tabletSketchUrban, alt:"A tablet sketch of the new, useful visualisations"},
                    {src: desktopSketchUrban, alt:"A desktop sketch of the new, useful visualisations"},
                ],
                descriptionP2: "The project was not interactive, and I did not have access to the end users, which means the project was not tested on any users. But, I used the sketches to implement the solution into the custom 'kx platform', which presented it's own challenges. The main goal was to make the visualisations responsive, which the company had not managed before. As shown below, the system did not respond well to smaller screens!", 
                imagesP2: [
                    {src: responsiveExampleUrban, alt:"An example of how the software would look on smaller screens with multiple scrollbars showing up."}
                ]
            },
            {
                id: 4,
                name: "Review & Finalise",
                description: "I managed to make the visualistaions responsive and created designs that had potential to be more useful than the existing ones. As a general, the project would have benefited from having access to the end user to ensure the reason for visualising the data was properly met, but I found substantial evidence that this way would be beneficial. A very different project, I learned so much about smart city technology, custom made softwares and visualisations for analytic purposes!",
                images: [
                    {src: finalUrban, alt: "The final visualisations as they were implemented", class: "final-image"}
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Wellican Health and Fitness",
        shortDescription: "Working with a startup idea to create an MVP.",
        src: wellican,
        url: "wellican",
        role: "User Experience designer and Front End Developer",
        tags: ["UX", "Sketches", "Wireframes", "InVision", "Prototyping", "Testing", "Tailwind", "Thesis", "React JS"],
        description: "Realising a concept from idea stage to a full Minimum Viable Product, with the help of one Back End Developer",
        phases: [
            {
                id: 1,
                name: "Discover & Plan",
                description: "First part of the project was to scope out a timeline for the project and understand what the client wanted. The project had never been sketched before, and the goal was to have a working website in just under 15 weeks. A big part of this phase was to argue for having a longer design phase, so that the MVP ended up right, not just working. I spent time scoping out the project, ",
                images: [
                    {src: flowWellican, alt: "An illustration of the project workflow with introduction, design, develop, test, finalise"}
                ]
            },
            {
                id: 2,
                name: "Discover & Plan",
                description: "",
                images: [
                    {src: '', alt: ""}
                ]
            },
            {
                id: 3,
                name: "Discover & Plan",
                description: "",
                images: [
                    {src: '', alt: ""}
                ]
            },
            {
                id: 4,
                name: "Discover & Plan",
                description: "",
                images: [
                    {src: '', alt: ""}
                ]
            },
        ]
    }
];



export const urbanInstitute = {};