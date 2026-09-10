
const studentName = document.getElementById("studentName");
const course = document.getElementById("course");
const language = document.getElementById("language");

const createBtn = document.getElementById("createBtn");
const changeBgBtn = document.getElementById("changeBgBtn");
const removeBtn = document.getElementById("removeBtn");
const addSkillBtn = document.getElementById("addSkillBtn");

const displayName = document.getElementById("displayName");
const displayCourse = document.getElementById("displayCourse");
const displayLanguage = document.getElementById("displayLanguage");

const skillInput = document.getElementById("skillInput");
const skillsList = document.getElementById("skillsList");
const profileCard = document.getElementById("profileCard");


const message = document.createElement("p");
message.id = "message";
document.querySelector(".form-container").appendChild(message);



createBtn.addEventListener("click", function () {

    if (
        studentName.value.trim() === "" ||
        course.value.trim() === "" ||
        language.value.trim() === ""
    ) {
        message.textContent = "Please complete all student information.";
        message.style.color = "#8b2e2e";
        return;
    }

    displayName.textContent = studentName.value;
    displayCourse.textContent = course.value;
    displayLanguage.textContent = language.value;

    message.textContent = "Profile created successfully.";
    message.style.color = "#2e6b4f";
});



addSkillBtn.addEventListener("click", function () {

    const skill = skillInput.value.trim();

    if (skill === "") {
        message.textContent = "Please enter a skill.";
        message.style.color = "#8b2e2e";
        return;
    }

    const newSkill = document.createElement("li");
    newSkill.textContent = skill;

    skillsList.appendChild(newSkill);

    skillInput.value = "";

    message.textContent = "New skill added.";
    message.style.color = "#2e6b4f";
});



skillInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        addSkillBtn.click();
    }
});


changeBgBtn.addEventListener("click", function () {

    const backgrounds = [
        "#ffffff",
        "#eef2f7",
        "#e8edf3",
        "#f4f5f7",
        "#e7ebef"
    ];

    const randomBackground =
        backgrounds[Math.floor(Math.random() * backgrounds.length)];

    profileCard.style.backgroundColor = randomBackground;

    message.textContent = "Profile background changed.";
    message.style.color = "#2e6b4f";
});



removeBtn.addEventListener("click", function () {

    displayName.textContent = "Student Name";
    displayCourse.textContent = "Not specified";
    displayLanguage.textContent = "Not specified";

    skillsList.innerHTML = "";

    studentName.value = "";
    course.value = "";
    language.value = "";
    skillInput.value = "";

    profileCard.style.backgroundColor = "#ffffff";

    message.textContent = "Profile information removed.";
    message.style.color = "#2e6b4f";
});
