// Data klinik dipakai bersama oleh ClinicLocation (daftar) dan
// ClinicDetail (detail). Letakkan file ini di: src/data/clinics.js
import bsdImg from "../assets/cliniclocations/bsd.jpg";
import test from "../assets/cliniclocations/test1.jpg";

// TODO: ganti nomor telepon, alamat lengkap, jam operasional per hari,
// rating, dan review di bawah ini dengan data asli tiap cabang.
// Semuanya masih contoh/placeholder.
const defaultBusinessHours = [
  { day: "Sen", hours: "10.00 - 20.00" },
  { day: "Sel", hours: "10.00 - 20.00" },
  { day: "Rab", hours: "10.00 - 20.00" },
  { day: "Kam", hours: "10.00 - 20.00" },
  { day: "Jum", hours: "10.00 - 20.00" },
  { day: "Sab", hours: "10.00 - 20.00" },
  { day: "Min", hours: "10.00 - 16.00" },
];

export const clinics = [
  {
    id: 1,
    name: "Derma Express BSD",
    city: "Tangerang",
    desc: "Jl. Gading Golf Boulevard, Ruko Diamond III No.12-15, Gading Serpong",
    image: bsdImg,
    status: "Buka Sekarang",
    phone: "+62 21 3190 3768",
    hoursSummary: "Buka sampai 20:00 (Setiap Hari)",
    businessHours: defaultBusinessHours,
    rating: 4.9,
    reviews: [
      {
        name: "Amalia Salabi",
        date: "07-04-2026",
        stars: 5,
        text: "Baru sekali perawatan di sini. Waktu itu konsul dengan dokter. Dokternya ramah dan penjelasannya baik. Dokternya juga kasih aku pilihan terbaik untuk treatment pertama di tengah budget yang terbatas. Saat treatment pun…",
      },
    ],
  },
  {
    id: 2,
    name: "Derma Express Pekanbaru",
    city: "Pekanbaru",
    desc: "Jl. Gading Golf Boulevard, Ruko Diamond III No.12-15, Gading Serpong, Pakulonan Barat, Kelapa dua Tangerang, Banten.",
    image: test,
    status: "Buka Sekarang",
    phone: "+62 761 123 4567",
    hoursSummary: "Buka sampai 20:00 (Setiap Hari)",
    businessHours: defaultBusinessHours,
    rating: 4.8,
    reviews: [
      {
        name: "Budi Hartono",
        date: "02-03-2026",
        stars: 5,
        text: "Pelayanan ramah, ruang tunggunya juga bersih dan nyaman. Dokternya menjelaskan treatment dengan detail sebelum tindakan.",
      },
    ],
  },
  {
    id: 3,
    name: "Derma Express Cibubur",
    city: "Jakarta",
    desc: "Jl. Gading Golf Boulevard, Ruko Diamond III No.12-15, Gading Serpong, Pakulonan Barat, Kelapa dua Tangerang, Banten.",
    image: bsdImg,
    status: "Buka Sekarang",
    phone: "+62 21 456 7890",
    hoursSummary: "Buka sampai 20:00 (Setiap Hari)",
    businessHours: defaultBusinessHours,
    rating: 4.7,
    reviews: [
      {
        name: "Citra Dewi",
        date: "15-02-2026",
        stars: 4,
        text: "Hasil treatment-nya terasa setelah beberapa sesi, staf-nya juga informatif soal perawatan di rumah.",
      },
    ],
  },
  {
    id: 4,
    name: "Derma Express Bekasi",
    city: "Bekasi",
    desc: "Jl. Gading Golf Boulevard, Ruko Diamond III No.12-15, Gading Serpong, Pakulonan Barat, Kelapa dua Tangerang, Banten.",
    image: test,
    status: "Buka Sekarang",
    phone: "+62 21 789 0123",
    hoursSummary: "Buka sampai 20:00 (Setiap Hari)",
    businessHours: defaultBusinessHours,
    rating: 4.9,
    reviews: [
      {
        name: "Dian Permata",
        date: "28-01-2026",
        stars: 5,
        text: "Klinik favorit keluarga, lokasinya strategis dan parkirnya luas. Dokternya sabar jawab pertanyaan.",
      },
    ],
  },
  {
    id: 5,
    name: "Derma Express PIK",
    city: "Jakarta",
    desc: "Jl. Gading Golf Boulevard, Ruko Diamond III No.12-15, Gading Serpong, Pakulonan Barat, Kelapa dua Tangerang, Banten.",
    image: bsdImg,
    status: "Buka Sekarang",
    phone: "+62 21 234 5678",
    hoursSummary: "Buka sampai 20:00 (Setiap Hari)",
    businessHours: defaultBusinessHours,
    rating: 4.8,
    reviews: [
      {
        name: "Eka Saputra",
        date: "10-01-2026",
        stars: 5,
        text: "Tempatnya nyaman dan higienis, hasil treatment sesuai ekspektasi. Pasti balik lagi.",
      },
    ],
  },
  {
    id: 6,
    name: "Derma Express Pluit",
    city: "Jakarta",
    desc: "Jl. Gading Golf Boulevard, Ruko Diamond III No.12-15, Gading Serpong, Pakulonan Barat, Kelapa dua Tangerang, Banten.",
    image: test,
    status: "Buka Sekarang",
    phone: "+62 21 345 6789",
    hoursSummary: "Buka sampai 20:00 (Setiap Hari)",
    businessHours: defaultBusinessHours,
    rating: 4.6,
    reviews: [
      {
        name: "Fitri Ramadhani",
        date: "22-12-2025",
        stars: 4,
        text: "Antriannya kadang agak lama di akhir pekan, tapi hasil dan pelayanan dokternya memuaskan.",
      },
    ],
  },
];

// Tim dokter perusahaan (tampil sama di tiap halaman detail klinik).
// `photo` sengaja null dulu -> tampil sebagai avatar inisial.
// TODO: isi `photo` dengan import foto asli, mis.:
//   import drSarah from "../assets/doctors/dr-sarah.jpg";
//   { name: "Dr. Sarah Wijaya", title: "Chief Aesthetic Doctor", photo: drSarah }
export const doctors = [
  { name: "Dr. Sarah Wijaya", title: "Chief Aesthetic Doctor", photo: null },
  { name: "Dr. Andi Pratama", title: "Skin Specialist", photo: null },
  { name: "Dr. Lisa Tanaka", title: "Laser Expert", photo: null },
  { name: "Dr. Budi Santoso", title: "Dermatologist", photo: null },
];

export const getClinicById = (id) =>
  clinics.find((item) => String(item.id) === String(id));
