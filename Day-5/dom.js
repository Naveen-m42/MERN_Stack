// 1
document.getElementById("header-title").textContent = "My Awesome Page";

// 2
document.querySelectorAll(".product-card")
  .forEach(card => card.style.border = "2px solid red");

// 3
document.querySelectorAll("ul.menu li")
  .forEach(li => li.style.backgroundColor = "lightblue");

// 4
const btn = document.createElement("button");
btn.textContent = "Click me!";
document.getElementById("controls").appendChild(btn);

// 5
const cartItem = document.createElement("div");
cartItem.className = "item";
cartItem.innerHTML = `
  <span>Apple</span>
  <button>Remove</button>
`;
document.getElementById("cart").appendChild(cartItem);

// 6
document.querySelector("img.avatar").src =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d";

// 7
document.querySelectorAll(".article-body > p")
  .forEach(p => p.classList.add("highlight"));

// 8
document.getElementById("theme-toggle")
  .addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

// 9
document.querySelectorAll('button[data-action="delete"]')
  .forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".card").remove();
    });
  });

// 10 TODO LIST
const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector("#todo-list");

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;

  const del = document.createElement("button");
  del.textContent = "Delete";
  del.onclick = () => li.remove();

  li.appendChild(del);
  list.appendChild(li);
  input.value = "";
});

// 11 Event Delegation
document.getElementById("users-list")
  .addEventListener("click", e => {
    if (e.target.tagName === "LI") {
      console.log("Clicked user ID:", e.target.dataset.userId);
    }
  });

// 12 Counter
let count = 0;
const countSpan = document.getElementById("count");

document.getElementById("inc").onclick = () => {
  count++;
  countSpan.textContent = count;
};

document.getElementById("dec").onclick = () => {
  if (count > 0) count--;
  countSpan.textContent = count;
};

// 13 Live Search
document.getElementById("search")
  .addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    document.querySelectorAll(".country")
      .forEach(li => {
        li.style.display =
          li.textContent.toLowerCase().includes(value)
            ? "block" : "none";
      });
  });

// 14 Color Picker
document.querySelectorAll(".swatch")
  .forEach(s => {
    s.addEventListener("click", () => {
      document.body.style.backgroundColor = s.dataset.color;
    });
  });

// 15 Sortable List (Basic Swap)
let dragged;
document.querySelectorAll("#sortable li")
  .forEach(item => {
    item.addEventListener("dragstart", () => dragged = item);
    item.addEventListener("dragover", e => e.preventDefault());
    item.addEventListener("drop", function () {
      this.parentNode.insertBefore(dragged, this);
    });
  });

// 16 Modal
document.getElementById("open-modal")
  .addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
      <h2>Modal Title</h2>
      <p>Modal content here</p>
      <button id="close-modal">Close</button>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    overlay.onclick = () => overlay.remove();
    modal.querySelector("#close-modal").onclick =
      () => overlay.remove();
  });
