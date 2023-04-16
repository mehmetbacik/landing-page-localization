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
          <div className='language'>
            <button onClick={() => setLocale('tr-TR')}>TR</button>
            <button onClick={() => setLocale('en-US')}>EN</button>
          </div>
        </div>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <FormattedMessage id="title" />
          <p>
            <FormattedMessage id="description" />
          </p>
          <FormattedMessage id="button" />
          <br /><br />

        </IntlProvider>
      </div>
    </div>
  );
}

export default App;
