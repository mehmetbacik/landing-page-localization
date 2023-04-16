import './App.css';
import {useState, useEffect} from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl'

const messages = {
  'tr-TR': {
    title: "Hayranlarınızın Seveceği Topluluğu Oluşturun",
    description: "Huddle, topluluk oluşturma yöntemimizi yeniden tasarlıyor. Bir sesiniz var, ancak izleyicilerinizin de var. Gerçek bir tartışmaya girerken kullanıcılarınızla bağlantılar oluşturun.",
    button: "Kayıt Ol",
  },
  'en-US': {
    title: "Build The Community Your Fans Will Love",
    description: "Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.",
    button: "Register",
  }
}

function App() {
  const isLocale = localStorage.getItem('locale');
  const defaultLocale = isLocale ? isLocale :  navigator.language;
  const [locale, setLocale] = useState(defaultLocale);
  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale])
  return (
    <div className="App">
      <div className='container mx-auto px-2'>
        <div className='header flex justify-between items-center py-10'>
          <div className='logo'>
            <img src='images/logo.svg' alt='Logo' />
          </div>
          <div className='language flex gap-3'>
            <button onClick={() => setLocale('tr-TR')}><img src='images/tr.png' alt='tr' /></button>
            <button onClick={() => setLocale('en-US')}><img src='images/en.png' alt='en' /></button>
          </div>
        </div>
        <div className='main grid grid-cols-2 gap-4 pt-6'>
          <div className='images'>
            <img src='images/illustration-mockups.svg' alt='img' />
          </div>
          <div className='content'>
            <IntlProvider locale={locale} messages={messages[locale]}>
              <div className='headline text-5xl font-bold text-white'>
                <FormattedMessage id="title" />
              </div>
              <div className='text text-lg text-white py-5'>
                <FormattedMessage id="description" />
              </div>
              <button className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-10 rounded-full'>
                <FormattedMessage id="button" />
              </button>
            </IntlProvider>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
