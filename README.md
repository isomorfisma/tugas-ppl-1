# 📚 Book Management API (Tugas PPL 1)

![CI & Security Scan](https://github.com/isomorfisma/tugas-ppl-1/actions/workflows/ci-cs.yml/badge.svg)

## 1. Deskripsi Project
Proyek ini adalah RESTful API sederhana untuk **Manajemen Buku (Book API)** yang dibangun menggunakan **Node.js dan Express**. Proyek ini merupakan tugas mata kuliah Proyek Perangkat Lunak 1 yang terintegrasi penuh dengan ekosistem Docker untuk *containerization* dan GitHub Actions untuk otomatisasi *Continuous Integration* (CI) serta *Continuous Security* (CS).

---

## 2. Dokumentasi API

API ini menerapkan standar RESTful dengan format respons menggunakan JSON. Data disimpan menggunakan *in-memory array* (sementara) untuk keperluan demonstrasi CRUD.

### Endpoint List
| Method | Endpoint | Deskripsi |
| :--- | :--- | :--- |
| `GET` | `/api/books` | Mengambil daftar semua buku |
| `POST` | `/api/books` | Menambahkan buku baru |
| `PUT` | `/api/books/:id` | Memperbarui data buku berdasarkan ID |
| `DELETE` | `/api/books/:id` | Menghapus buku berdasarkan ID |

### Format Response (JSON)

**✅ Contoh Success Response (200 OK / 201 Created):**
```json
{
  "message": "Book created",
  "data": {
    "id": 1,
    "title": "Belajar Docker dan CI/CD",
    "author": "John Doe"
  }
}
```

**❌ Contoh Error Response (404 Not Found):**
```json
{
  "message": "Book not found"
}
```

---

## 3. Panduan Instalasi (Docker)

Aplikasi ini sudah di-docker-isasi sepenuhnya. Kamu tidak perlu menginstal Node.js di mesin lokal, cukup pastikan **Docker** dan **Docker Compose (V2)** sudah terinstal di sistem Linux Mint kamu.

### Langkah-langkah menjalankan aplikasi:
1. *Clone* repositori ini:
   ```bash
   git clone [https://github.com/](https://github.com/)isomorfisma/tugas-ppl-1.git
   cd tugas-ppl-1
   ```
2. Jalankan perintah Docker Compose:
   ```bash
   docker compose up -d --build
   ```
3. API siap diakses melalui: `http://localhost:3000/api/books`
4. Untuk mematikan *container*, jalankan:
   ```bash
   docker compose down
   ```

### Informasi Port:
* **Host Port:** `3000` (Port yang diakses dari komputermu)
* **Container Port:** `3000` (Port yang diekspos oleh aplikasi Node.js di dalam Docker)

---

## 4. Alur Kerja Git (Git Workflow)

Proyek ini menggunakan **Feature Branch Flow** untuk kolaborasi dan manajemen versi yang rapi:
* `main`: Berisi kode *production-ready* yang stabil.
* `develop`: Branch integrasi utama untuk pengujian sebelum rilis ke `main`.
* `feat/api-crud`: Branch fitur tempat pengembangan API CRUD, Docker, dan CI/CD dilakukan.

### Bukti Penggunaan Conventional Commits
Semua *commit* di repositori ini mematuhi standar *Conventional Commits*. Contoh riwayat *commit*:
* `feat: implementasi CRUD API buku beserta unit test`
* `chore: menambahkan konfigurasi Docker dan docker-compose`
* `ci: menambahkan GitHub Actions untuk unit test dan security scan`
* `fix: update perintah docker compose pada workflow github actions`
* `docs: menambahkan file README.md dengan dokumentasi lengkap`

---

## 5. Status Automasi (GitHub Actions)

Proyek ini dilengkapi dengan *pipeline* otomatisasi menggunakan file `.github/workflows/ci-cs.yml` yang berjalan setiap kali ada *Push* atau *Pull Request* ke branch `main` dan `develop`.

Alur kerjanya meliputi:
1.  **Unit Testing (CI):** Menjalankan *script* `npm test` (menggunakan Jest dan Supertest) untuk memastikan endpoint API berfungsi dengan baik tanpa *bug*.
2.  **Security Scan (CS):** Menjalankan `npm audit --audit-level=high` untuk memindai kerentanan keamanan (*vulnerabilities*) pada *dependencies* Node.js yang digunakan.
3.  **Docker Build Test:** Memastikan `Dockerfile` dapat di-*build* dengan sukses di *environment* server tanpa error.