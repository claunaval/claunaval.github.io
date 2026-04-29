// ── DATOS DE LOS PROYECTOS ──
const projectData = {
  concept: [
    {
      title: '"La reina de los mares del sur"',
      images: [
        "images/concept/project1/cover.jpg",
        "images/concept/project1/img2.jpg",
        "images/concept/project1/img3.jpg",
        "images/concept/project1/img4.jpg",
        "images/concept/project1/img5.jpg",
        "images/concept/project1/img6.jpg",
        "images/concept/project1/img7.jpg",
        "images/concept/project1/img8.jpg"
      ]
    },
    {
      title: '"Sueño"',
      images: [
        "images/concept/project2/cover.jpg",
        "images/concept/project2/img5.jpg",
        "images/concept/project2/img6.jpg",
        "images/concept/project2/img3.jpg",
        "images/concept/project2/img2.jpg",
        "images/concept/project2/img4.jpg"
      ]
    },
    {
      title: '"Retro Future Lab"',
      images: [
        "images/concept/project3/cover.jpg",
        "images/concept/project3/img2.jpg"
      ]
    },
    {
      title: '"Exploradora"',
      images: [
        "images/concept/project4/cover.jpg",
        "images/concept/project4/img2.jpg",
        "images/concept/project4/img3.jpg",
        "images/concept/project4/img4.jpg"
      ]
    },
    {
      title: '"Universo"',
      images: [
        "images/concept/project5/cover.jpg",
        "images/concept/project5/img2.jpg"
      ]
    }
  ],
  modeling: [
    {
      title: "Ramen stall",
      images: [
        "images/modeling/project1/cover.jpg",
        "images/modeling/project1/img2.jpg",
        "images/modeling/project1/img3.jpg",
        "images/modeling/project1/video.mp4",
        "images/modeling/project1/img5.jpg",
        "images/modeling/project1/img6.jpg",
        "images/modeling/project1/img7.jpg",
        "images/modeling/project1/img8.jpg",
        "images/modeling/project1/img9.jpg",
        "images/modeling/project1/img4.jpg"
      ]
    },
    {
      title: "CCTV",
      images: [
        "images/modeling/project2/cover.jpg",
        "images/modeling/project2/img2.jpg",
        "images/modeling/project2/img3.jpg",
        "images/modeling/project2/img4.jpg",
        "images/modeling/project2/img5.jpg",
        "images/modeling/project2/video.mp4"
      ]
    },
    {
      title: "Love potion",
      images: [
        "images/modeling/project3/cover.jpg",
        "images/modeling/project3/video.mp4",
        "images/modeling/project3/img3.jpg",
        "images/modeling/project3/img4.jpg",
        "images/modeling/project3/img5.jpg",
        "images/modeling/project3/img2.jpg"
      ]
    },
    {
      title: "Halloween pumpkin",
      images: [
        "images/modeling/project4/cover.jpg",
        "images/modeling/project4/video.mp4"
      ]
    },
    {
      title: "Barriletes",
      images: [
        "images/modeling/project5/cover.jpg",
        "images/modeling/project5/img2.jpg",
        "images/modeling/project5/img3.jpg",
        "images/modeling/project5/video.mp4"
      ]
    }
  ],
  drawing: [
    {
      title: "Color studies",
      images: [
        "images/drawing/project1/cover.jpg",
        "images/drawing/project1/img2.jpg",
        "images/drawing/project1/img3.jpg",
        "images/drawing/project1/img4.jpg",
        "images/drawing/project1/img5.jpg",
        "images/drawing/project1/img6.jpg",
        "images/drawing/project1/img7.jpg"
      ]
    },
    {
      title: "Storyboard",
      images: [
        "images/drawing/project2/cover.jpg",
        "images/drawing/project2/img2.jpg"
      ]
    },
    {
      title: "Life drawing",
      images: [
        "images/drawing/project3/cover.jpg",
        "images/drawing/project3/img2.jpg",
        "images/drawing/project3/img3.jpg",
        "images/drawing/project3/img4.jpg",
        "images/drawing/project3/img5.jpg",
        "images/drawing/project3/img6.jpg",
        "images/drawing/project3/img7.jpg",
        "images/drawing/project3/img8.jpg",
        "images/drawing/project3/img9.jpg",
        "images/drawing/project3/img10.jpg",
        "images/drawing/project3/img11.jpg",
        "images/drawing/project3/img12.jpg",
        "images/drawing/project3/img13.jpg",
        "images/drawing/project3/img14.jpg",
        "images/drawing/project3/img15.jpg",
        "images/drawing/project3/img16.jpg",
        "images/drawing/project3/img17.jpg",
        "images/drawing/project3/img18.jpg",
        "images/drawing/project3/img19.jpg"
      ]
    },
    {
      title: "Portraits",
      images: [
        "images/drawing/project4/cover.jpg",
        "images/drawing/project4/img2.jpg",
        "images/drawing/project4/img3.jpg",
        "images/drawing/project4/img4.jpg",
        "images/drawing/project4/img5.jpg",
        "images/drawing/project4/img6.jpg",
        "images/drawing/project4/img7.jpg",
        "images/drawing/project4/img8.jpg",
        "images/drawing/project4/img9.jpg"
      ]
    },
    {
      title: "Miscellaneous",
      images: [
        "images/drawing/project5/cover.jpg",
        "images/drawing/project5/img2.jpg",
        "images/drawing/project5/img3.jpg",
        "images/drawing/project5/img4.jpg",
        "images/drawing/project5/img5.jpg",
        "images/drawing/project5/img6.jpg",
        "images/drawing/project5/img7.jpg",
        "images/drawing/project5/img8.jpg"
      ]
    }
  ]
};

// ── ESTADO DEL MODAL ──
let currentImages = [];
let currentIndex = 0;

function isVideo(src) {
  return /\.(mp4|webm|ogg)$/i.test(src);
}

function openModal(category, projectIndex) {
  currentImages = projectData[category][projectIndex].images;
  currentIndex = 0;
  renderModal();
  document.getElementById("modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function renderModal() {
  var wrap = document.getElementById("modalImgWrap");
  var src = currentImages[currentIndex];

  var oldVideo = wrap.querySelector("video");
  if (oldVideo) oldVideo.pause();

  if (isVideo(src)) {
    wrap.innerHTML = '<video controls autoplay loop style="max-width:100%;max-height:100%;border-radius:8px;"><source src="' + src + '" type="video/mp4"></video>';
  } else {
    wrap.innerHTML = '<img src="' + src + '" alt="Project image" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:8px;" />';
  }

  document.getElementById("modalCounter").textContent = (currentIndex + 1) + " / " + currentImages.length;

  var thumbsContainer = document.getElementById("modalThumbs");
  thumbsContainer.innerHTML = "";
  currentImages.forEach(function(s, i) {
    var thumb;
    if (isVideo(s)) {
      thumb = document.createElement("div");
      thumb.className = "modal-thumb modal-thumb-video" + (i === currentIndex ? " active" : "");
      thumb.innerHTML = "▶";
    } else {
      thumb = document.createElement("img");
      thumb.src = s;
      thumb.alt = "Thumbnail " + (i + 1);
      thumb.className = "modal-thumb" + (i === currentIndex ? " active" : "");
    }
    thumb.onclick = function() { currentIndex = i; renderModal(); };
    thumbsContainer.appendChild(thumb);
  });
}

function changeSlide(direction) {
  currentIndex = (currentIndex + direction + currentImages.length) % currentImages.length;
  renderModal();
}

function closeModal() {
  var video = document.querySelector("#modalImgWrap video");
  if (video) video.pause();
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
}

function closeModalOutside(event) {
  if (event.target === document.getElementById("modal")) closeModal();
}

document.addEventListener("keydown", function(e) {
  if (!document.getElementById("modal").classList.contains("open")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowRight") changeSlide(1);
  if (e.key === "ArrowLeft") changeSlide(-1);
});

// ── BOTÓN VOLVER ARRIBA ──
window.onscroll = function() {
  var button = document.getElementById("toTop");
  button.style.display = (document.documentElement.scrollTop > 300) ? "block" : "none";
};

document.getElementById("toTop").onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// ── MENÚ HAMBURGUESA ──
function toggleMenu() {
  document.getElementById("navList").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("navList").classList.remove("active");
}
