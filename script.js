// ── DATOS DE LOS PROYECTOS ──
// Para añadir imágenes a cada proyecto, agrega las rutas en el array "images".
// La primera imagen de cada array es la portada (cover).
// Puedes añadir o quitar imágenes simplemente editando estos arrays.

const projectData = {
  concept: [
    {
      title: '"La reina de los mares del sur"',
      images: [
        "images/concept/project1/cover.jpg",
        "images/concept/project1/img2.jpg",
        "images/concept/project1/img3.jpg"
      ]
    },
    {
      title: '"Sueño"',
      images: [
        "images/concept/project2/cover.jpg",
        "images/concept/project2/img2.jpg",
        "images/concept/project2/img3.jpg"
      ]
    },
    {
      title: '"Retro Future Lab"',
      images: [
        "images/concept/project3/cover.jpg",
        "images/concept/project3/img2.jpg",
        "images/concept/project3/img3.jpg"
      ]
    },
    {
      title: '"Exploradora"',
      images: [
        "images/concept/project4/cover.jpg",
        "images/concept/project4/img2.jpg",
        "images/concept/project4/img3.jpg"
      ]
    },
    {
      title: '"Universo"',
      images: [
        "images/concept/project5/cover.jpg",
        "images/concept/project5/img2.jpg",
        "images/concept/project5/img3.jpg"
      ]
    }
  ],
  modeling: [
    {
      title: "Ramen stall",
      images: [
        "images/modeling/project1/cover.jpg",
        "images/modeling/project1/img2.jpg",
        "images/modeling/project1/img3.jpg"
      ]
    },
    {
      title: "CCTV",
      images: [
        "images/modeling/project2/cover.jpg",
        "images/modeling/project2/img2.jpg",
        "images/modeling/project2/img3.jpg"
      ]
    },
    {
      title: "Love potion",
      images: [
        "images/modeling/project3/cover.jpg",
        "images/modeling/project3/img2.jpg",
        "images/modeling/project3/img3.jpg"
      ]
    },
    {
      title: "Halloween pumpkin",
      images: [
        "images/modeling/project4/cover.jpg",
        "images/modeling/project4/img2.jpg",
        "images/modeling/project4/img3.jpg"
      ]
    },
    {
      title: "Barriletes",
      images: [
        "images/modeling/project5/cover.jpg",
        "images/modeling/project5/img2.jpg",
        "images/modeling/project5/img3.jpg"
      ]
    },
    {
      title: "Chair",
      images: [
        "images/modeling/project6/cover.jpg",
        "images/modeling/project6/img2.jpg",
        "images/modeling/project6/img3.jpg"
      ]
    }
  ],
  drawing: [
    {
      title: "Color studies",
      images: [
        "images/drawing/project1/cover.jpg",
        "images/drawing/project1/img2.jpg",
        "images/drawing/project1/img3.jpg"
      ]
    },
    {
      title: "Storyboard",
      images: [
        "images/drawing/project2/cover.jpg",
        "images/drawing/project2/img2.jpg",
        "images/drawing/project2/img3.jpg"
      ]
    },
    {
      title: "Life drawing",
      images: [
        "images/drawing/project3/cover.jpg",
        "images/drawing/project3/img2.jpg",
        "images/drawing/project3/img3.jpg"
      ]
    },
    {
      title: "Portraits",
      images: [
        "images/drawing/project4/cover.jpg",
        "images/drawing/project4/img2.jpg",
        "images/drawing/project4/img3.jpg"
      ]
    },
    {
      title: "Miscellaneous",
      images: [
        "images/drawing/project5/cover.jpg",
        "images/drawing/project5/img2.jpg",
        "images/drawing/project5/img3.jpg"
      ]
    }
  ]
};

// ── ESTADO DEL MODAL ──
let currentImages = [];
let currentIndex = 0;

function openModal(category, projectIndex) {
  const project = projectData[category][projectIndex];
  currentImages = project.images;
  currentIndex = 0;

  renderModal();

  const modal = document.getElementById("modal");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function renderModal() {
  const mainImg = document.getElementById("modalMainImg");
  const counter = document.getElementById("modalCounter");
  const thumbsContainer = document.getElementById("modalThumbs");

  // Imagen principal
  mainImg.src = currentImages[currentIndex];
  mainImg.alt = "Project image " + (currentIndex + 1);

  // Contador
  counter.textContent = (currentIndex + 1) + " / " + currentImages.length;

  // Miniaturas
  thumbsContainer.innerHTML = "";
  currentImages.forEach(function(src, i) {
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.alt = "Thumbnail " + (i + 1);
    thumb.className = "modal-thumb" + (i === currentIndex ? " active" : "");
    thumb.onclick = function() {
      currentIndex = i;
      renderModal();
    };
    thumbsContainer.appendChild(thumb);
  });
}

function changeSlide(direction) {
  currentIndex = (currentIndex + direction + currentImages.length) % currentImages.length;
  renderModal();
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
}

function closeModalOutside(event) {
  if (event.target === document.getElementById("modal")) {
    closeModal();
  }
}

// Cerrar modal con tecla Escape y navegar con flechas del teclado
document.addEventListener("keydown", function(e) {
  const modal = document.getElementById("modal");
  if (!modal.classList.contains("open")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowRight") changeSlide(1);
  if (e.key === "ArrowLeft") changeSlide(-1);
});

// ── BOTÓN VOLVER ARRIBA ──
window.onscroll = function() {
  const button = document.getElementById("toTop");
  if (document.documentElement.scrollTop > 300) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("toTop").onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
});

// ── MENÚ HAMBURGUESA ──
function toggleMenu() {
  const menu = document.getElementById("navList");
  menu.classList.toggle("active");
}

function closeMenu() {
  const menu = document.getElementById("navList");
  menu.classList.remove("active");
}
