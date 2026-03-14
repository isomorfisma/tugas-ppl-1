# Book Management API (Tugas PPL 1)

[![CI & Security Scan](https://github.com/isomorfisma/tugas-ppl-1/actions/workflows/ci-cs.yml/badge.svg)](https://github.com/isomorfisma/tugas-ppl-1/actions)

## Deskripsi
Repository ini berisi tugas mata kuliah Proyek Perangkat Lunak 1. Sistem yang dibuat adalah REST API sederhana untuk manajemen data buku. API ini dibangun menggunakan Node.js (Express), dibungkus menggunakan Docker, dan sudah terintegrasi dengan GitHub Actions untuk CI (Unit Testing) dan CS (Security Scan).

Data disimpan sementara di dalam memori (array) sesuai kebutuhan minimal tugas.

---

## Dokumentasi API
Base URL: `http://localhost:3000/api`

### 1. Get All Books
- **URL:** `/books`
- **Method:** `GET`
- **Response Success (200 OK):**
```json
{
  "data": [
    {
      "id": 1,
      "title": "Belajar Docker",
      "author": "John Doe"
    }
  ]
}
```

### 2. Create New Book
- **URL:** `/books`
- **Method:** `POST`
- **Body Request (JSON):**
```json
{
  "title": "Buku PPL",
  "author": "Fulan"
}
```
- **Response Success (201 Created):**
```json
{
  "message": "Book created",
  "data": {
    "id": 2,
    "title": "Buku PPL",
    "author": "Fulan"
  }
}
```

### 3. Update Book
- **URL:** `/books/:id`
- **Method:** `PUT`
- **Body Request (JSON):**
```json
{
  "title": "Buku PPL Edisi Revisi"
}
```
- **Response Success (200 OK):**
```json
{
  "message": "Book updated",
  "data": {
    "id": 2,
    "title": "Buku PPL Edisi Revisi",
    "author": "Fulan"
  }
}
```
- **Response Error (404 Not Found):**
```json
{
  "message": "Book not found"
}
```

### 4. Delete Book
- **URL:** `/books/:id`
- **Method:** `DELETE`
- **Response Success (200 OK):**
```json
{
  "message": "Book deleted"
}
```
- **Response Error (404 Not Found):**
```json
{
  "message": "Book not found"
}
```

---

## Cara Menjalankan Aplikasi (Docker)
Pastikan sistem kamu sudah terinstall Docker dan Docker Compose.

1. Clone repo ini ke lokal:
```bash
git clone [https://github.com/](https://github.com/)isomorfisma/tugas-ppl-1.git
cd tugas-ppl-1
```
2. Build dan jalankan container API:
```bash
docker compose up -d --build
```
3. Test API via Postman, Insomnia, atau Curl di `http://localhost:3000/api/books`.
4. Untuk mematikan dan menghapus container:
```bash
docker compose down
```

---

## Git Workflow & Standar Commit
Repository ini menerapkan **Feature Branch Flow**:
- `main`: Kode stabil untuk production.
- `develop`: Branch integrasi utama.
- `feat/*`, `fix/*`, `docs/*`: Branch untuk pengerjaan tugas spesifik.

Format commit wajib mengikuti standar **Conventional Commits** (contoh: `feat: implementasi fungsi delete`, `fix: error handling di route books`).

---

## Otomatisasi (GitHub Actions)
Terdapat workflow di `.github/workflows/ci-cs.yml` yang akan tereksekusi otomatis setiap ada *Push* atau *Pull Request* ke branch `main` dan `develop`. 

Step yang dijalankan meliputi:
1. **Unit Test (CI):** Menguji fungsionalitas API menggunakan Jest dan Supertest.
2. **Security Scan (CS):** Memeriksa kerentanan library yang digunakan via `npm audit`.
3. **Docker Build Test:** Simulasi build Docker image untuk memastikan konfigurasi Dockerfile aman dan tidak error.