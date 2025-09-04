/* Carousel */
let index = 0;
function showSlide() {
  const carousel = document.getElementById("projectCarousel");
  carousel.style.transform = `translateX(${-index * 320}px)`;
}
function prevSlide() { if(index>0) index--; showSlide(); }
function nextSlide() {
  const total = document.querySelectorAll(".project.card").length;
  if(index<total-1) index++;
  showSlide();
}

/* Modal */
const projectDetails = {
  food: {
    title: "Online Food Delivery System (May 2025)",
    details:[
      "React Native app allowing users to browse restaurants, add items to a cart, and place orders.",
      "Backend APIs using Node.js/Express with JWT authentication.",
      "MongoDB collections for restaurants, orders, and users.",
      "TypeScript used for scalable code."
    ]
  },
  task: {
    title: "Task Management App (Dec 2024)",
    details:[
      "Cross-platform task app in React Native with CRUD and real-time sync.",
      "Backend in Node.js/Express for data sync.",
      "Reusable TypeScript components.",
      "Deployed on Heroku; tested APIs with Postman."
    ]
  },
  portal: {
    title:"Student Portal System (May 2024)",
    details:[
      "React web portal for student assignments, grades, and announcements.",
      "Role-based access control (Admin, Teacher, Student).",
      "Secure login flows and session management.",
      "Optimized client-server communication."
    ]
  }
};
function openModal(project){
  const modal=document.getElementById("projectModal");
  document.getElementById("modalTitle").textContent = projectDetails[project].title;
  const detailsList = document.getElementById("modalDetails");
  detailsList.innerHTML = "";
  projectDetails[project].details.forEach(d=>{
    const li=document.createElement("li"); li.textContent=d;
    detailsList.appendChild(li);
  });
  modal.style.display="flex";
}
function closeModal(){ document.getElementById("projectModal").style.display="none"; }
window.onclick = function(event){ if(event.target===document.getElementById("projectModal")) closeModal(); }
