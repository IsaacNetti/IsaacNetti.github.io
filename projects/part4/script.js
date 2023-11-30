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
const showprojects = async () => {
  const projects = await getprojects();
  const projectSection = document.getElementById("main-content-projects");

  projects.forEach((project) =>{
    if (project.type == "project"){
      projectSection.append(getProjectItem(project))
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

  const img = document.createElement("img");
  img.src = project.img;
  a.append(img);

  return div;
}


window.onload = () => {
    showprojects();
    document.getElementById("contact-form").onsubmit = showEmailResult;
}