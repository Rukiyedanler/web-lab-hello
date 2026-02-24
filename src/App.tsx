import './App.css';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ana icerige atla</a>
      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            {/* Alt text is provided, but since we don't have an actual image yet, we use a placeholder or empty src. Leaving it empty might cause a broken image icon, so let's put a dummy image or just empty. */}
            <img src="" alt="Rukiye Nur DANLER'in vesikalik fotografi" />
            <figcaption>Rukiye Nur DANLER</figcaption>
          </figure>
          <p>Ad Soyad: Rukiye Nur DANLER</p>
          <p>Ogrenci No: 230542013</p>
          <p>Bolum: Yazilim Muhendisligi</p>
          <p>Hobiler: Kod yazmak, kitap okumak, seyahat etmek.</p>
          <h3>Kullandigim Teknolojiler</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <article>
            <h3>E-Ticaret Sitesi</h3>
            <p>Kullanicilarin urunleri inceleyip satin alabildigi bir web uygulamasi.</p>
            <p><strong>Teknolojiler:</strong> React, Node.js</p>
          </article>
          <article>
            <h3>Blog Uygulamasi</h3>
            <p>Kisisel yazilarin paylasildigi dinamik bir blog platformu.</p>
            <p><strong>Teknolojiler:</strong> HTML, CSS, JavaScript</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input type="email" id="email" name="email" required aria-describedby="email-error" />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error"></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Rukiye Nur DANLER. Tum haklari saklidir.</p>
      </footer>
    </>
  )
}

export default App;
