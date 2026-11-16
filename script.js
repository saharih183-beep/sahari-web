const dataSoal = [
    {
        pertanyaan: "Benda apa yang kalau dinaiki malah turun?",
        pilihan: ["Lift", "Perosotan", "Tangga", "Sepeda"],
        jawabanBenar: 1
    },
    {
        pertanyaan: "Gajah apa yang belalainya pendek?",
        pilihan: ["Gajah semok", "Gajah ngantuk", "Gajah bengkak", "Gajah balita"],
        jawabanBenar: 3
    },
    {
        pertanyaan: "Hewan apa yang paling hening di dunia?",
        pilihan: ["Kucing", "Semut", "Ikan", "Kuda"],
        jawabanBenar: 2
    },
    {
        pertanyaan: "Kenapa anjing kalau lari selalu mendahulukan kaki depan?",
        pilihan: ["Karena lucu", "Karena kalau pakai kaki belakang namanya salto", "Bawaan dari lahir", "Supaya cepat"],
        jawabanBenar: 1
    },
    {
        pertanyaan: "Apa bedanya katedral sama katering?",
        pilihan: ["Kalau katedral doa, katering makan", "Kalau katedral dicari, katering ditunggu", "Kalau katedral 'dihimbau', kalau katering 'minta di-imbau'", "Jauh bedanya"],
        jawabanBenar: 2
    }
];

let indexSoal = 0;
let skor = 0;

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score-text");

function muatSoal() {
    nextBtn.classList.add("hidden");
    const soalAktif = dataSoal[indexSoal];
    
    questionNumber.innerText = `Pertanyaan ${indexSoal + 1} dari ${dataSoal.length}`;
    questionText.innerText = soalAktif.pertanyaan;
    
    optionsContainer.innerHTML = "";
    
    soalAktif.pilihan.forEach((pilihan, index) => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.innerText = pilihan;
        btn.onclick = () => cekJawaban(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function cekJawaban(pilihanPemain, tombolPilihan) {
    const soalAktif = dataSoal[indexSoal];
    const semuaTombol = document.querySelectorAll(".option-btn");
    
    semuaTombol.forEach(btn => btn.disabled = true);
    
    if (pilihanPemain === soalAktif.jawabanBenar) {
        tombolPilihan.classList.add("correct");
        skor += 20;
    } else {
        tombolPilihan.classList.add("wrong");
        semuaTombol[soalAktif.jawabanBenar].classList.add("correct");
    }
    
    nextBtn.classList.remove("hidden");
}

function lanjutPertanyaan() {
    indexSoal++;
    if (indexSoal < dataSoal.length) {
        muatSoal();
    } else {
        tampilkanHasil();
    }
}

function tampilkanHasil() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreText.innerText = `Skor kamu: ${skor} dari 100`;
}

function mulaiUlang() {
    indexSoal = 0;
    skor = 0;
    resultBox.classList.add("hidden");
    quizBox.classList.remove("hidden");
    muatSoal();
}

muatSoal();
