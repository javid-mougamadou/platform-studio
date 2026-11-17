import { Header, Hero, Stack, Footer } from './components';
import { useTheme } from './hooks/useTheme';
import { usePageTracking } from './hooks/useAnalytics';
import { THEME_GRADIENT_CLASSES } from './constants';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  usePageTracking('/', 'Platform Studio | Javid Mougamadou');

  return (
    <div className={`flex min-h-screen flex-col ${THEME_GRADIENT_CLASSES[theme]}`}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="flex flex-1 flex-col items-center px-4 pt-20 pb-12">
        <Hero theme={theme} />
        <Stack theme={theme} />
        <Footer theme={theme} />
      </main>
    </div>
  );
};

export default App;
