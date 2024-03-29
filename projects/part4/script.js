//Form management
const showEmailResult = async (e) => {
    e.preventDefault();
    const result = document.getElementById("result");
    let response = await getEmailResult();
    if (response.status == 200) {
      result.innerHTML = "Email Successfully Sent";
    } else {
      result.innerHTML = "Sorry, your email was not sent.";
    }
  };
  
  const getEmailResult = async (e) => {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "Please wait...";
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      return response;
    } catch (error) {
      console.log(error);
      document.getElementById("result").innerHTML =
        "Sorry your email couldn't be sent";
    }
  };

//parse JSON
const getprojects = async () => {
  const url = "https://IsaacNetti.github.io/projects/part4/projects.json";

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
const getexperiences = async () => {
  const url = "https://IsaacNetti.github.io/projects/part4/experience.json";

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const showprojects = async () => {
  const projects = await getprojects();
  const projectSection = document.getElementById("main-content-projects");
  const classSection = document.getElementById("main-content-college-class");
  const activitySection = document.getElementById("main-content-college-activity");

  projects.forEach((project) =>{
    if (project.type == "project" && projectSection){
      projectSection.append(getProjectItem(project))
    }
    if(project.type == "class" && classSection){
      classSection.append(getClassItem(project))
    }
    if(project.type == "activity" && activitySection){
      activitySection.append(getActivityItem(project))
    }
  }
  );
};

const getProjectItem = (project) => {
  const div = document.createElement("div");
  div.classList.add("col1of4");
  const a = document.createElement("a");
  a.href = "project-page.html";
  div.append(a);

  const h2 = document.createElement("h2");
  h2.innerHTML = project.title;
  a.append(h2);

  const img = document.createElement("img");
  img.src = project.img;
  a.append(img);

  const p = document.createElement("p");
  p.innerHTML = project.description;
  a.append(p);  

  return div;
}

const getClassItem = (project) => {
  const div = document.createElement("div");
  div.classList.add("col1of4");
  const a = document.createElement("a");
  a.href = "college-class.html";
  div.append(a);

  const h2 = document.createElement("h2");
  h2.innerHTML = project.title;
  a.append(h2);

  const img = document.createElement("img");
  img.src = project.img;
  a.append(img);

  const p = document.createElement("p");
  p.innerHTML = project.description;
  a.append(p);  

  return div;
}

const getActivityItem = (project) => {
  const div = document.createElement("div");
  div.classList.add("col1of4");
  const a = document.createElement("a");
  a.href = "college-activity.html";
  div.append(a);

  const h2 = document.createElement("h2");
  h2.innerHTML = project.title;
  a.append(h2);

  const img = document.createElement("img");
  img.src = project.img;
  a.append(img);

  const p = document.createElement("p");
  p.innerHTML = project.description;
  a.append(p);  

  return div;
}

const showexperience = async () => {
  const experiences = await getexperiences();
  const experienceSection = document.getElementById("main-content-experiences");

  experiences.forEach((experience) =>{
    if (experienceSection){
      experienceSection.append(getExperienceItem(experience))
    }
  }
  );
};

const getExperienceItem = (project) => {
  const div = document.createElement("div");
  div.classList.add("col1of4");
  const a = document.createElement("a");
  a.href = "experiences-page.html";
  div.append(a);

  const h1 = document.createElement("h1");
  h1.innerHTML = project.title;
  a.append(h1);

  const img = document.createElement("img");
  img.src = project.img;
  a.append(img);

  const h21 = document.createElement("h2");
  h21.innerHTML = "Job Description";
  a.append(h21);
  
  const p = document.createElement("p");
  p.innerHTML = project.description;
  a.append(p); 

  const h22 = document.createElement("h2");
  h22.innerHTML = "Skills Acquired";
  a.append(h22);

  const ul = document.createElement("ul");
  a.append(ul);

  project.skills.forEach((skill)=>{
    let li = document.createElement("li");
    li.innerHTML = skill;
    ul.append(li);
  })

  return div;
}
window.onload = () => {
    showprojects();
    showexperience();
    document.getElementById("contact-form").onsubmit = showEmailResult;
}