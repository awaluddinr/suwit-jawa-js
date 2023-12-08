const skorP = document.querySelector(".skorP p");
const skorC = document.querySelector(".skorC p");
const menang = document.querySelectorAll(".m");
const seriUser = document.querySelector(".skorP .s");
const seriComp = document.querySelector(".skorC .s");
const menangUser = document.querySelector(".skorP .m");
const menangComp = document.querySelector(".skorC .m");
const kalahUser = document.querySelector(".skorP .k");
const kalahComp = document.querySelector(".skorC .k");
let poinC = 0;
let poinP = 0;
let m = 0;
let k = 0;
let seriU = 0;
let seriC = 0;
let menangU = 0;
let menangC = 0;
let kalahU = 0;
let kalahC = 0;

function getNama(nama) {
  const namaku = document.querySelector(".player");
  namaku.textContent = nama;
  return namaku;
}
let identitas = prompt("Masukkan Nama Anda :");

getNama(identitas);

function getpilihanKomputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "seri";
  if (player == "gajah") return comp === "orang" ? "menang" : "kalah";
  if (player == "orang") return comp == "gajah" ? "kalah" : "menang";
  if (player == "semut") return comp == "orang" ? "kalah" : "menang";
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}

// const arr = Array.from(seri);

const pilihan = document.querySelectorAll("ul li img");

pilihan.forEach(function (e) {
  e.addEventListener("click", function () {
    const pilihanKomputer = getpilihanKomputer();
    const pilihanPlayer = e.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    putar();

    setTimeout(function tambahSkor() {
      if (hasil == "seri") {
        poinP += 1;
        poinC += 1;
        skorP.textContent = poinP;
        skorC.textContent = poinC;
        seriUser.textContent = seriU += 1;
        seriComp.textContent = seriC += 1;
      } else if (hasil == "menang") {
        poinP += 3;
        skorP.textContent = poinP;
        menangUser.textContent = menangU += 1;
        kalahComp.textContent = kalahC += 1;
      } else {
        poinC += 3;
        skorC.textContent = poinC;
        menangComp.textContent = menangC += 1;
        kalahUser.textContent = kalahU += 1;
      }
    }, 1000);

    setTimeout(function () {
      const gambarKomputer = document.querySelector(".img-komputer");
      gambarKomputer.setAttribute("src", "img/" + pilihanKomputer + ".png");
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});
