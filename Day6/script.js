document.addEventListener("DOMContentLoaded", () => {

  const button = document.querySelector(".play-btn");
  const goalsContent = document.getElementById("goalsContent");
  const todayDate = document.getElementById("todayDate");

  const addBtn = document.getElementById("addGoalBtn");
  const modal = document.getElementById("goalModal");
  const saveBtn = document.getElementById("saveGoal");

  const typeSelect = document.getElementById("newType");
const customInput = document.getElementById("customCategory");

typeSelect.addEventListener("change", () => {
  if (typeSelect.value === "custom") {
    customInput.classList.remove("hidden");
  } else {
    customInput.classList.add("hidden");
  }
});
let type = typeSelect.value;
if (type === "custom") {
  type = customInput.value;
}

  // Hide goals initially
  goalsContent.style.display = "none";

  // Button click
  button.addEventListener("click", () => {

    goalsContent.style.display = "block";
    button.style.display = "none";

    showTodayDate();
    loadGoals(); 
  });

  // Open Modal
  addBtn.addEventListener("click", () => {

    modal.classList.remove("hidden");
  });

  // Save Goal
  saveBtn.addEventListener("click", async () => {

    const title = document.getElementById("newTitle").value;
    const type = document.getElementById("newType").value;
    const reminder = document.getElementById("newReminder").value;

    if (!title) return;

    await fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        type,
        reminder,
        completed: false
      })
    });

    modal.classList.add("hidden");
    loadGoals(); // refresh without page reload
  });

});


// ======================
// LOAD GOALS FROM SERVER
// ======================
async function loadGoals() {

  const response = await fetch("http://localhost:3000/goals");
  const data = await response.json();

  const booksList = document.getElementById("booksList");
  const projectsList = document.getElementById("projectsList");

  booksList.innerHTML = "";
  projectsList.innerHTML = "";

  document.querySelectorAll(".dynamic-category").forEach(el => el.remove());

  const categoryMap = {};
  const container = document.getElementById("goalsContent");

  data.forEach(goal => {

    const type = goal.type.toLowerCase();

    if (type === "book") {
      appendToList(booksList, goal);
      return;
    }

    if (type === "project") {
      appendToList(projectsList, goal);
      return;
    }

    if (!categoryMap[type]) {

      const skillsCard = container.querySelector(".glass-card:last-of-type");

      const newCard = document.createElement("div");
      newCard.classList.add("glass-card", "dynamic-category");

      newCard.innerHTML = `
        <h2>${goal.type}</h2>
        <ul id="category-${type}"></ul>
      `;

      container.insertBefore(newCard, skillsCard);

      categoryMap[type] = newCard.querySelector("ul");
    }

    appendToList(categoryMap[type], goal);
  });
}

function appendToList(list, goal) {

  const li = document.createElement("li");
  li.textContent = goal.title;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = goal.completed;

  checkbox.addEventListener("change", () => {
    updateGoal(goal.id, checkbox.checked);
  });

  const wrapper = document.createElement("div");
  wrapper.classList.add("task-item");
  wrapper.appendChild(li);
  wrapper.appendChild(checkbox);

  if (goal.completed) {
    li.classList.add("completed");
  }

  list.appendChild(wrapper);
}

// ======================
// CREATE NEW GLASS CARD
// ======================
function createDynamicGlassCard(goal) {

  const container = document.getElementById("goalsContent");

  const newCard = document.createElement("div");
  newCard.classList.add("glass-card", "dynamic-card");

  newCard.innerHTML = `
    <h2>${goal.title}</h2>
    <p>Category: ${goal.type}</p>
    ${goal.reminder ? `<p>Reminder: ${goal.reminder}</p>` : ""}
  `;

  container.appendChild(newCard);

  arrangeDynamicCards();
}


// ======================
// ARRANGE NEW CARDS
// ======================
function arrangeDynamicCards() {

  const dynamicCards = document.querySelectorAll(".dynamic-card");

  if (dynamicCards.length === 1) {
    dynamicCards[0].style.width = "60%";
    dynamicCards[0].style.margin = "40px auto";
  }

  if (dynamicCards.length >= 2) {

    const wrapper = document.createElement("div");
    wrapper.classList.add("dual-section");

    dynamicCards.forEach(card => {
      wrapper.appendChild(card);
    });

    document.getElementById("goalsContent").appendChild(wrapper);
  }

}


// ======================
// UPDATE GOAL (PATCH)
// ======================
async function updateGoal(id, completed) {

 await fetch("http://localhost:3000/goals", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    type: type.toLowerCase(),
    title: title,
    reminder: reminder,
    completed: false
  })
});
}


// ======================
// SHOW DATE
// ======================
function showTodayDate() {

  const today = new Date();

  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
  };

  const todayDate = document.getElementById("todayDate");
  todayDate.innerText = "Today: " + today.toLocaleDateString("en-US", options);
  todayDate.style.display = "block";

}