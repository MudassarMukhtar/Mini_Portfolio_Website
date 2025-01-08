// click event for buttons

const portfolio = document.getElementById('portfolio');
const portfolioBtn = document.getElementById('portfolio-btn');
const skills = document.getElementById('skills');
const skillsBtn = document.getElementById('skills-btn');

portfolioBtn.addEventListener("click", (event) => {
    skills.style.display = "none";
    portfolio.style.display = "flex"
    skillsBtn.classList.remove('active-btn');
    portfolioBtn.classList.add('active-btn');
});

skillsBtn.addEventListener("click", (event) => {
    portfolio.style.display = "none";
    skills.style.display = "flex"
    portfolioBtn.classList.remove('active-btn');
    skillsBtn.classList.add('active-btn');
});

// light and dark mode 
document.addEventListener('DOMContentLoaded', () => {
    const ToggleThemeButton = document.getElementById('toggleTheme');
    const themeicon = document.querySelector('img[alt="theme icon"]');
    const githublogo = document.querySelector('img[alt="github logo"]')
    const linkedinlogo = document.querySelector('img[alt="linkedin logo"]')
    const emaillogo = document.querySelector('img[alt="email logo"]')

    const lightLogos = {
        github: "assets/github_light.png",
        linkedin: "assets/linkedin_light.png",
        email: "assets/email_light.png",
        theme: "assets/theme_light.png",

    };
    const darkLogos = {
        github: "assets/github_dark.png",
        linkedin: "assets/linkedin_dark.png",
        email: "assets/email_dark.png",
        theme: "assets/theme_dark.png",

    }
    function setTheme(isDark) {
        githublogo.src = isDark ? darkLogos.github : lightLogos.github;
        linkedinlogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
        emaillogo.src = isDark ? darkLogos.email : lightLogos.email;
        themeicon.src = isDark ? darkLogos.theme : lightLogos.theme;
    }
    ToggleThemeButton.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-theme");
        localStorage.setItem("isDark", isDark);
        setTheme(isDark);
    });
    
    const loadtheme = () => {
        const isDark = localStorage.getitem("isDark") === "true";
        document.body.classList.toggle("dark-theme", isDark);
        setTheme(isDark);
    };
    loadtheme()
})

