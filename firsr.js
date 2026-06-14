const profile = {
    name: "Mrunal Dayanand Lamture",
    age: 19,
    city: "Nanded",

    skills: ["HTML", "CSS", "JavaScript", "GitHub"],

    hobbies: ["Singing", "cooking", "Learning New Things"],

    address: {
        area: "nanded",
        state: "Maharashtra",
        country: "India"
    }
};function getGreeting() {
    return `Hello, I am ${profile.name}`;
}

function getSkillsList() {
    return profile.skills.join(", ");
}

function getHobbyCount() {
    return profile.hobbies.length;
}

function getFullAddress() {
    return `${profile.address.area}, ${profile.address.state}, ${profile.address.country}`;
}

console.log(getGreeting()),
console.log(getSkillsList()),
console.log(getHobbyCount()),
console.log(getFullAddress()),

document
.getElementById("contactForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let name =
    document.getElementById("name").value;

    alert(`Thanks ${name}, your message was sent!`);
});