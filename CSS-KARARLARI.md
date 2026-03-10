# CSS Kararlari

## 1. Breakpoint Secimi
- **Neden 640px ve 1024px sectim?** 
  Genel olarak yaygin kullanilan mobil (<640px), tablet (640px-1024px) ve masaustu (>1024px) kirilim noktalaridir. Icerigim bu noktalarda en iyi okuma ve duzen deneyimi sundugu icin bu standardi tercih ettim.
- **Icerigim bu noktalarda nasil degisiyor?** 
  Mobilde (varsayilan) her sey alt alta ve %100 genislikte dizilir (mobile-first). 640px'i gecince "Hakkimda" kismi yan yana gecer ve kenar bosluklari (padding) artar. 1024px'i asinca icerik genisligi 1200px ile sinirlanir ve ortalanir; ayrica proje kartlari tam 3 sutunlu bir Grid yapisina burunur.

## 2. Layout Tercihleri
- **Header icin neden Flexbox sectim?** 
  Header, logo ve navigasyon menusu gibi tek boyutlu bir eksende (yatayda) hizalanmasi gereken elemanlara sahip. `justify-content: space-between` ve `align-items: center` ile bu dikey ve yatay ortalamayi en pratik Flexbox sagliyordu.
- **Proje kartlari icin neden Grid sectim?** 
  Proje kartlari satirlari ve sutunlari olan iki boyutlu bir yapi gerektiriyor. Esit yukseklik ve genislikte hucrelere sahip bir kart dizilimi yaratmak Grid ile cok daha dogal ve kontrolluydu.
- **auto-fit mi auto-fill mi kullandim, neden?** 
  `auto-fit` kullandim. Cunku eger genis bir ekranda daha az kart (ornekte 3 adet) varsa kalan bosluklari degerlendirip mevcut kartlari buyuterek sutunlari doldurmasini istedim (`minmax()` icindeki `1fr` dagiimi ile beraber en esnek sonuc alinir).

## 3. Design Tokens
- **Hangi renk paletini sectim ve neden?** 
  Guvendiren, okunabilir, temiz ve profesyonel gozuktugu icin ana renk olarak koyu mavi (`#1E3A8A`), vurgu olarak daha acik mavi tonlari ve acik gri arpalan renkleri kullandim. 
- **Spacing skalasini nasil belirledim?** 
  4'un katlari mantigi ile (`0.25rem = 4px`) olusturdum. Bu, gorsel bir ritm ve tutarlilik sagliyor. Ornegin margin ve padding'ler boylece "goz karari" degil, `var(--space-md)` gibi matematiksel olarak orantili oluyor.
- **Fluid typography icin clamp degerlerini nasil ayarladim?** 
  Ornegin temel yazi (base type) icin `clamp(1rem, 0.9rem + 0.5vw, 1.125rem)` sectim. Bu sayede yazilar en dar ekranda bile okunabilir minimum bir sinirda (16px) kalirken, ekran genisledikce gozu yormamak uzere maksimum bir sinira kadar pruzsuz sekilde (media query kullanmadan) buyuyebiliyor.

## 4. Responsive Stratejiler
- **Mobile-first yaklasimini nasil uyguladim?** 
  CSS'i oncelikle hicbir `@media` sorgusu olmadan dar ekranlara (mobil) gore, satirlarin alt alta gelecegi sekilde (div ve block mantigi ile) yazdim. Ardindan ekranin genisleyebilecegini var sayarak sadece `min-width` iceren `@media` kurallariyla duzeni genislettim.
- **Hangi elemanlar breakpoint'lerde degisiyor?** 
  Sayfa genel padding'i (`section`), "Hakkimda" bolumu Flex yonu (`column`'dan `row`'a), iletisim formundaki gonder butonu boyutlari ve Grid hucrelerinin sayilari (otomatikten sabit 3'e) breakpoint tarafindan degistiriliyor.
- **Gorsel boyutlari nasil yonettim?** 
  Tasarimin patlamamasi icin tum HTML'e sifirlama kuralari dahilinde `img { max-width: 100%; height: auto; }` uyguladim. Proje gorselleri icin orani korumak adina `object-fit: cover;` verdim, boylece gorseller sigdirilmaya calisilirken ezilmedi.
