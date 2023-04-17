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
      <div className='container mx-auto px-8 md:px-10 lg:px-2'>
        <div className='header flex justify-between items-center py-12'>
          <div className='logo'>
            <img src='images/logo.svg' alt='Logo' />
          </div>
          <div className='language flex gap-3'>
            <button onClick={() => setLocale('tr-TR')}><img src='images/tr.png' alt='tr' /></button>
            <button onClick={() => setLocale('en-US')}><img src='images/en.png' alt='en' /></button>
          </div>
        </div>
        <div className='main grid items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 pt-0 md:pt-8 lg:pt-8'>
          <div className='images'>
            <img src='images/illustration-mockups.svg' alt='img' />
          </div>
          <div className='content mb-12'>
            <IntlProvider locale={locale} messages={messages[locale]}>
              <div className='headline leading-normal md:leading-normal lg:leading-normal text-3xl md:text-3xl lg:text-5xl text-center md:text-center lg:text-left font-bold text-white'>
                <FormattedMessage id="title" />
              </div>
              <div className='text text-lg md:text-lg lg:text-lg text-center md:text-center lg:text-left leading-normal text-white py-5'>
                <FormattedMessage id="description" />
              </div>
              <div className='main-btn flex justify-center md:justify-center lg:justify-start'>
                <button className='btn tracking-wider text-sm	md:text-lg lg:text-lg'>
                  <FormattedMessage id="button" />
                </button>
              </div>
            </IntlProvider>
          </div>
        </div>
        <div className='footer pt-0 md:pt-4 lg:pt-4 pb-4 md:pb-4 lg:pb-0'>
          <div className='social flex justify-center md:justify-center lg:justify-end items-center gap-2'>
            <img src='images/fb.png' alt='Logo' />
            <img src='images/tw.png' alt='Logo' />
            <img src='images/in.png' alt='Logo' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
