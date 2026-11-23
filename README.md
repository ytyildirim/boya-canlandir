# Viko'nun Salda Gölü Macerası

Boyama kitabının sayfalarını, çocuğun boyadığı renklerle seslendirmeli 2D animasyona çeviren web uygulaması. 10 sahnenin hepsi var: anlatıcı, Viko, Bilge Baykuş ve Tavşan senaryodaki konuşmaları söyler.

- `index.html`: uygulamanın tamamı (sayfa tanıma, renk okuma, karakter animasyonları, seslendirme, müzik)
- `sayfalar/`: 10 sahnenin boyama sayfaları (PNG) ve hepsi bir arada yazdırmak için `viko-boyama-kitabi.pdf`
- `manifest.webmanifest`, `sw.js`, `icon-*.png`: telefonda ana ekrana ekleme ve çevrimdışı çalışma

Sunucu gerektirmez; her şey telefonda çalışır, fotoğraflar hiçbir yere gönderilmez. Seslendirme tarayıcının Türkçe sesiyle yapılır; Türkçe ses yoksa sadece altyazı görünür.
Yayın: GitHub Pages, `.github/workflows/pages.yml` ile her `main` güncellemesinde otomatik.
