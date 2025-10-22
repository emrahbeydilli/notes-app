# Not Defteri Uygulaması 📝

Bu proje, kullanıcıların **not ekleyebileceği, düzenleyebileceği ve silebileceği** basit bir web tabanlı not defteri uygulamasıdır.  
Vanilla JavaScript (ES6+), Bootstrap 5 ve LocalStorage kullanılarak geliştirilmiştir.


## ⚡ Özellikler

- Not ekleme, düzenleme ve silme
- Tüm notlar **LocalStorage** üzerinde saklanır, sayfa yenilense bile korunur
- Bootstrap 5 kullanılarak responsive ve modern tasarım
- Edit işlemleri **modal** ile yapılır
- Event delegation ve data-attribute kullanımı ile performanslı yapı
- Vanilla JS ile modüler ES6+ kod yapısı
  - `storage.js` → CRUD işlemleri
  - `ui.js` → DOM render ve modal yönetimi
  - `events.js` → Event listener’lar
  - `app.js` → Uygulama başlangıcı ve initialization


## 📁 Dosya Yapısı

/project-root
│
├─ index.html # Uygulama ana sayfası
├─ /css
│ └─ styles.css # Özel stil dosyası
├─ /js
│ ├─ app.js # Uygulama başlatma
│ ├─ storage.js # LocalStorage CRUD fonksiyonları
│ ├─ ui.js # DOM render ve modal yönetimi
│ └─ events.js # Event listener’lar
└─ README.md


## 🚀 Kurulum ve Kullanım

1. Proje dosyalarını bilgisayarınıza indirin veya klonlayın: git clone <repository-url>

2. index.html dosyasını tarayıcıda açın.

3. Başlık ve içerik girip Kaydet butonuna basarak not ekleyin.

4. Notları düzenlemek için kalem ikonuna, silmek için çöp ikonuna tıklayın.

5. Düzenleme işlemleri modal üzerinden yapılır ve değişiklikler LocalStorage’a kaydedilir.

🛠 Teknolojiler

HTML5 & CSS3

Bootstrap 5 (responsive tasarım ve modal)

Vanilla JavaScript (ES6+)

LocalStorage (tarayıcıda veri saklama)
