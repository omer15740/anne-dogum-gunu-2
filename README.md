# Anneme Mutlu Yıllar — Doğum Günü Sayfası

Bu klasördeki dosyalar statik bir doğum günü sayfası içerir:

- `123.html` — ana sayfa
- `1233.css` — stil dosyası
- `123.js` — etkileşimler (kalpler, iltifat, pasta)
- `open_in_chrome.bat` — (isteğe bağlı) Chrome ile açmak için launcher

Herkese açık hale getirmek için (GitHub Pages):

1. Yeni bir GitHub deposu oluşturun (ör. `anne-dogum-gunu`).
2. Bu klasörde terminal açın ve aşağıdaki komutları çalıştırın:

```bash
git init
git add .
git commit -m "Initial birthday page"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

3. GitHub'da depoya gidin; `.github/workflows/deploy-pages.yml` bulunduğunda push sonrası GitHub Actions otomatik olarak sayfayı yayınlayacaktır.
4. Yayın URL'si genellikle `https://USERNAME.github.io/REPO/` olacaktır.

İsterseniz sizin için GitHub'a bir repo açıp (izin verirseniz) doğrudan push etmemi sağlayacak yönergeleri hazırlayabilirim.
