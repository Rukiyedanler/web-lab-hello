import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';

export default function UIKit() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showAlert, setShowAlert] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <div className={`min-h-screen p-8 transition-colors ${isDarkMode ? 'dark bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="max-w-5xl mx-auto space-y-12">
                <header className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-6">
                    <div>
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                            UI Kit Kutuphanesi
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                            Projede kullanilan bilesenlerin tum varyantlari
                        </p>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        aria-label="Temayi Degistir"
                    >
                        {isDarkMode ? 'Gunduz Modu (\u2600)' : 'Gece Modu (\u263D)'}
                    </button>
                </header>

                {/* Butonlar */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2">Butonlar (Button)</h2>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Renk Varyantlari</h3>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="primary">Primary Buton</Button>
                            <Button variant="secondary">Secondary Buton</Button>
                            <Button variant="danger">Danger Buton</Button>
                            <Button variant="ghost">Ghost Buton</Button>
                            <Button variant="primary" disabled>Disabled Buton</Button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Boyutlar</h3>
                        <div className="flex flex-wrap items-center gap-4">
                            <Button variant="primary" size="sm">Kucuk (sm)</Button>
                            <Button variant="primary" size="md">Normal (md)</Button>
                            <Button variant="primary" size="lg">Buyuk (lg)</Button>
                        </div>
                    </div>
                </section>

                {/* Inputlar */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2">Form Elemanlari (Input)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input id="default-input" label="Standart Input" placeholder="Metin giriniz..." />
                        <Input id="help-input" label="Yardim Metinli Input" placeholder="Parola giriniz..." type="password" helpText="Parolaniz en az 8 karakter olmalidir." />
                        <Input id="error-input" label="Hatali Input" placeholder="E-posta giriniz..." defaultValue="hatali-eposta" error="Gecerli bir e-posta adresi giriniz." />
                        <Input id="disabled-input" label="Disabled Input" placeholder="Bu alan degistirilemez" disabled />
                    </div>
                </section>

                {/* Kartlar */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2">Kartlar (Card)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card variant="elevated" title="Elevated Card">
                            <p>Kendinden golgeli, yukseltilmis gorunumlu standart kart varyantidir. Hover durumunda golgesi artar.</p>
                        </Card>

                        <Card variant="outlined" title="Outlined Card">
                            <p>Sadece kenarliklari olan, golgesiz, minimal gorunumlu kart varyantidir. Genellikle liste elemanlarinda kullanilir.</p>
                        </Card>

                        <Card variant="filled" title="Filled Card">
                            <p>Arka plan rengiyle diger iceriklerden ayrilan, kenarliksiz veya golgesiz kart varyantidir.</p>
                        </Card>
                    </div>
                </section>

                {/* Bildirimler */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2">Bildirimler (Alert)</h2>
                    <div className="space-y-4">
                        <Alert variant="info" title="Bilgilendirme">Sisteme yeni bir guncelleme eklendi. Detaylari incelemek icin tiklayin.</Alert>
                        <Alert variant="success" title="Basarili Islem">Ayarlariniz basariyla kaydedildi.</Alert>
                        <Alert variant="warning" title="Uyari">E-posta adresinizi henuz dogrulamadiniz. Lutfen isleme devam edin.</Alert>
                        <Alert variant="error" title="Hata Olustu">Sunucu ile baglanti kurulamadi. Lutfen internet baglantinizi kontrol edin.</Alert>

                        {showAlert && (
                            <Alert
                                variant="info"
                                title="Kapatilabilir Bildirim"
                                dismissible
                                onDismiss={() => setShowAlert(false)}
                            >
                                Bu bildirimi sagdaki carpi ikonuna(seklenecegine) tiklayarak kapatabilirsiniz.
                            </Alert>
                        )}
                    </div>
                </section>

            </div>
        </div>
    );
}
