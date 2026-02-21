document.addEventListener("DOMContentLoaded", () => {

  // ===== Select Elements =====
  const button = document.querySelector(".play-btn");
  const goalsContent = document.getElementById("goalsContent");
  const todayDate = document.getElementById("todayDate");

  // ===== Hide goals initially =====
  if (goalsContent) {
    goalsContent.style.display = "none";
  }

  // ===== Task Checkbox Toggle =====
  document.querySelectorAll(".glass-card ul li").forEach(li => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("task-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", () => {
      li.classList.toggle("completed");
    });

    li.parentNode.replaceChild(wrapper, li);
    wrapper.appendChild(li);
    wrapper.appendChild(checkbox);
  });

  // ===== Start Journey Button =====
  if (button) {
    button.addEventListener("click", () => {

      // Show goals
      if (goalsContent) {
        goalsContent.style.display = "block";
      }

      // Hide button
      button.style.display = "none";

      // Show today's date
      showTodayDate();
    });
  }

  // ===== Date Function =====
  function showTodayDate() {
    if (!todayDate) return;

    const today = new Date();

    const options = {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric"
    };

    todayDate.innerText =
      "Today: " + today.toLocaleDateString("en-US", options);

    todayDate.style.display = "block";
  }

});
