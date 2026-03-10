import { useState, useEffect } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"
      >
        Ana icerige atla
      </a>

      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden" aria-hidden="true">&#9790;</span>
        <span className="hidden dark:inline" aria-hidden="true">&#9728;</span>
      </button>

      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Rukiye Nur DANLER
          </div>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2 text-sm sm:text-base">
              <li>
                <a
                  href="#hakkimda"
                  className="px-3 py-1.5 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2"
                >
                  Hakkimda
                </a>
              </li>
              <li>
                <a
                  href="#projeler"
                  className="px-3 py-1.5 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="px-3 py-1.5 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2"
                >
                  Iletisim
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0 group">
              <div className="w-40 h-40 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg overflow-hidden flex items-center justify-center border-4 border-white dark:border-gray-700 transition-transform group-hover:scale-105">
                {/*  placeholder avatar */}
                <span className="text-4xl text-gray-400 dark:text-gray-500">&#128100;</span>
              </div>
              <figcaption className="sr-only">Rukiye Nur DANLER</figcaption>
            </figure>
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Hakkimda
              </h2>
              <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">
                <p><strong>Ad Soyad:</strong> Rukiye Nur DANLER</p>
                <p><strong>Ogrenci No:</strong> 230542013</p>
                <p><strong>Bolum:</strong> Yazilim Muhendisligi</p>
                <p><strong>Hobiler:</strong> Kod yazmak, kitap okumak, seyahat etmek.</p>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Kullandigim Teknolojiler</h3>
                <ul className="flex flex-wrap gap-2 justify-center md:justify-start" role="list" aria-label="Beceri etiketleri">
                  <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm transition-colors hover:bg-blue-700">HTML5</li>
                  <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm transition-colors hover:bg-blue-700">CSS3</li>
                  <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm transition-colors hover:bg-blue-700">JavaScript</li>
                  <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm transition-colors hover:bg-blue-700">React</li>
                  <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm transition-colors hover:bg-blue-700">TypeScript</li>
                  <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm transition-colors hover:bg-blue-700">Tailwind CSS</li>
                  <li className="bg-gray-800 dark:bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm transition-colors">Git</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card
                variant="elevated"
                title="E-Ticaret Sitesi"
                footer={<div className="flex gap-2"><span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-medium">React</span><span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-medium">Node.js</span></div>}
              >
                <p>React ve Node.js ile gelistirilmis tam kapsamli bir e-ticaret uygulamasi.</p>
              </Card>

              <Card
                variant="elevated"
                title="Blog Uygulamasi"
                footer={<div className="flex gap-2"><span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-medium">Next.js</span><span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-medium">TypeScript</span></div>}
              >
                <p>Kisisel blog platformu. Markdown destekli yazi editoru.</p>
              </Card>

              <Card
                variant="elevated"
                title="Hava Durumu Uygulamasi"
                footer={<div className="flex gap-2"><span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-medium">JavaScript</span><span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-medium">API</span></div>}
              >
                <p>OpenWeather API ile anlik hava durumu bilgisi sunar.</p>
              </Card>
            </div>
          </div>
        </section>

        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Iletisim
            </h2>
            <form action="#" method="POST" noValidate className="space-y-6">
              <div className="space-y-4">
                <Input id="name" name="name" label="Ad Soyad" placeholder="Orn: Ahmet Yilmaz" required />
                <Input id="email" name="email" type="email" label="E-posta" placeholder="ad@mail.com" required />

                <div className="space-y-1">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:text-gray-100 transition-colors"
                  >
                    <option value="">-- Seciniz --</option>
                    <option value="is">Is Teklifi</option>
                    <option value="soru">Soru</option>
                    <option value="oneri">Oneri</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Mesajiniz
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:text-gray-100 transition-colors resize-y"
                  ></textarea>
                </div>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Gonder
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center py-8 px-4 text-gray-500 dark:text-gray-400 text-sm transition-colors">
        <p>&copy; 2026 Rukiye Nur DANLER. Tum haklari saklidir.</p>
      </footer>
    </div>
  )
}

export default App;
