let currentStep = 0;
const steps = document.querySelectorAll(".step");

function showStep(index) {
  steps.forEach(step => step.classList.remove("active"));
  steps[index].classList.add("active");
  document.getElementById("progress").style.width = ((index + 1) / steps.length) * 100 + "%";
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

showStep(currentStep);

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

document.getElementById("name").addEventListener("input", e => {
  document.getElementById("p-name").innerText = e.target.value;
});
document.getElementById("email").addEventListener("input", e => {
  document.getElementById("p-email").innerText = e.target.value;
});
document.getElementById("phone").addEventListener("input", e => {
  document.getElementById("p-phone").innerText = e.target.value;
});
document.getElementById("linkedin").addEventListener("input", e => {
  document.getElementById("p-linkedin").innerText = e.target.value;
});
document.getElementById("github").addEventListener("input", e => {
  document.getElementById("p-github").innerText = e.target.value;
});
document.getElementById("summary").addEventListener("input", e => {
  document.getElementById("p-summary").innerText = e.target.value;
});

document.getElementById("photo").addEventListener("change", function() {
  const reader = new FileReader();
  reader.onload = function() {
    document.getElementById("previewPhoto").src = reader.result;
  };
  reader.readAsDataURL(this.files[0]);
});

function addSkill() {
  const skill = document.getElementById("skillInput").value;
  const level = document.getElementById("skillLevel").value;

  if (!skill || !level) return;

  const skillDiv = document.createElement("div");
  skillDiv.innerHTML = `
    <p>${skill}</p>
    <div class="skill-bar">
      <div class="skill-fill" style="width:${level}%"></div>
    </div>
  `;
  document.getElementById("p-skills").appendChild(skillDiv);
}

function addProject() {
  const title = document.getElementById("projectTitle").value;
  const desc = document.getElementById("projectDesc").value;

  if (!title || !desc) return;

  const li = document.createElement("li");
  li.innerText = title + " - " + desc;
  document.getElementById("p-projects").appendChild(li);
}

function downloadPDF() {
  html2pdf().from(document.getElementById("resume")).save("resume.pdf");
}
const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");

photoInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            photoPreview.setAttribute("src", this.result);
            photoPreview.style.display = "block";
        });

        reader.readAsDataURL(file);
    }
});
const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", function () {

    document.getElementById("resumeForm").reset();

    document.getElementById("photoPreview").style.display = "none";
    document.getElementById("previewPhoto").src = "";

});
