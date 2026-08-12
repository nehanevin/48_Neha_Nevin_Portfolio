/* =========================================
   PROJECT DATA
========================================= */

const projects = [

    {
        title: "Knowledge Graph-Based Ovarian Cancer Risk Prediction",

        category: "ai",

        image: "images/project2.jpg",

        description:
            "Machine learning system that uses gene expression data and a biomedical knowledge graph for ovarian cancer risk prediction.",

        technologies: [
            "Python",
            "Neo4j",
            "Machine Learning",
            "SHAP"
        ],

        link:
            "https://github.com/"
    },

    {
        title: "AI Mental Health Chatbot",

        category: "ai",

        image: "images/project1.jpg",

        description:
            "AI-powered mental health chatbot with conversational support, emotion detection and a web-based interface.",

        technologies: [
            "FastAPI",
            "React",
            "TypeScript",
            "NLP"
        ],

        link:
            "https://github.com/nehanevin/AI-Powered-Mental-Health-Chatbot"
    },


    {
        title: "Expense Tracker",

        category: "python",

        image: "images/project4.jpg",

        description:
            "Python-based desktop application for recording and managing personal expenses.",

        technologies: [
            "Python",
            "Tkinter"
        ],

        link:
            "https://github.com/"
    }

];


/* =========================================
   PROJECT RENDERING
========================================= */

const projectContainer =
    document.getElementById("projectContainer");


const displayProjects = (projectList) => {

    projectContainer.innerHTML = "";


    projectList.forEach((project) => {

        const card =
            document.createElement("article");


        card.className = "project-card";


        card.innerHTML = `

            <img
                src="${project.image}"
                alt="${project.title}"
            >


            <div class="project-content">

                <h3>
                    ${project.title}
                </h3>


                <p>
                    ${project.description}
                </p>


                <div class="tags">

                    ${project.technologies
                        .map(
                            (technology) => `
                                <span class="tag">
                                    ${technology}
                                </span>
                            `
                        )
                        .join("")}

                </div>


                <a
                    href="${project.link}"
                    target="_blank"
                    class="project-link"
                >
                    View Repository →
                </a>

            </div>

        `;


        projectContainer.appendChild(card);

    });

};


displayProjects(projects);


/* =========================================
   PROJECT FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-button");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const filter =
            button.dataset.filter;


        if (filter === "all") {

            displayProjects(projects);

            return;

        }


        const filteredProjects =
            projects.filter(
                (project) =>
                    project.category === filter
            );


        displayProjects(filteredProjects);

    });

});


/* =========================================
   DARK / LIGHT MODE
   Uses localStorage
========================================= */

const themeButton =
    document.getElementById("themeButton");


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeButton.textContent = "Light";

}


themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    const darkMode =
        document.body.classList.contains("dark-mode");


    if (darkMode) {

        themeButton.textContent = "Light";

        localStorage.setItem("theme", "dark");

    } else {

        themeButton.textContent = "Dark";

        localStorage.setItem("theme", "light");

    }

});


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuButton =
    document.getElementById("menuButton");


const navMenu =
    document.getElementById("navMenu");


menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


const navLinks =
    document.querySelectorAll(".nav-menu a");


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


/* =========================================
   CONTACT FORM VALIDATION
========================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();


    const email =
        document.getElementById("email").value.trim();


    const message =
        document.getElementById("message").value.trim();


    const nameError =
        document.getElementById("nameError");


    const emailError =
        document.getElementById("emailError");


    const messageError =
        document.getElementById("messageError");


    const successMessage =
        document.getElementById("successMessage");


    nameError.textContent = "";

    emailError.textContent = "";

    messageError.textContent = "";

    successMessage.textContent = "";


    let isValid = true;


    /* Name Regex */

    const namePattern =
        /^[A-Za-z ]{2,}$/;


    if (!namePattern.test(name)) {

        nameError.textContent =
            "Please enter a valid name.";

        isValid = false;

    }


    /* Email Regex */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;

    }


    /* Message validation */

    if (message.length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        isValid = false;

    }


    if (isValid) {

        successMessage.textContent =
            "Message submitted successfully.";

        contactForm.reset();

    }

});
