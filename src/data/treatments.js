// Data treatment dipakai bersama oleh halaman Treatment (daftar) dan TreatmentDetail (detail).
// Letakkan file ini di: src/data/treatments.js
import tt1 from "../assets/treatment/t1.jpg";
import tt2 from "../assets/treatment/t2.jpg";
import tt3 from "../assets/treatment/t3.jpg";
import tt4 from "../assets/treatment/t4.jpg";
import tt5 from "../assets/treatment/t5.jpg";
import tt6 from "../assets/treatment/t6.jpg";

export const treatments = [
  {
    id: 1,
    category: "Treatment",
    title: "Benang Hidung",
    desc: "Nose Threadlift (Tanam Benang Hidung) merupakan treatment yang berguna untuk membuat jembatan hidung lebih tinggi dengan menggunakan benang.",
    image: tt1,
  },
  {
    id: 2,
    category: "Treatment",
    title: "Dermatox",
    desc: "Dermatox merupakan treatment yang berguna untuk merileksasikan otot. Dermatox bekerja dengan cara memblokir aktivitas saraf.",
    image: tt2,
  },
  {
    id: 3,
    category: "Treatment",
    title: "Dermafiller",
    desc: "Dermafiller merupakan treatment yang berguna untuk mengisi daerah-daerah yang rentan kendur dan mengisi bagian yang kosong pada wajah.",
    image: tt3,
  },
  {
    id: 4,
    category: "Treatment",
    title: "Acne Scar",
    desc: "Acne scar adalah bekas jerawat yang menyerupai bopeng di kulit wajah. Acne scar merupakan masalah kulit dalam suatu proses penyembuhan.",
    image: tt4,
  },
  {
    id: 5,
    category: "Treatment",
    title: "Facial",
    desc: "Facial adalah perawatan wajah non-invasif yang umum dilakukan di klinik kecantikan, meliputi ekstraksi komedo, eksfoliasi, dan mask.",
    image: tt5,
  },
  {
    id: 6,
    category: "Treatment",
    title: "Jeju White Peel",
    desc: "Jeju White Peel merupakan facial yang berguna untuk mengangkat sel kulit mati, membersihkan pori-pori, dan mencerahkan kulit.",
    image: tt6,
  },
];

export const getTreatmentById = (id) =>
  treatments.find((item) => String(item.id) === String(id));
