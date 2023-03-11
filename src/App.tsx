import reactLogo from '@assets/react.svg';
import './App.css';
import { i18nextInitialization } from './i18n/i118n';
import { useDarkMode } from '@theme';

// This is here just to use i18next..init({...})
// or else the bundler will ignore it
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const i18nInit = i18nextInitialization;

export const App = () => {
  const toggleDarkMode = useDarkMode();
  return (
    <div className="container mx-auto bg-brand-primaryLight dark:bg-brand-primaryDark rounded-xl shadow border p-8 m-10">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-brand-secondaryDark dark:bg-brand-secondaryLight">
        Vite + React
      </h1>
      <div className="text-center bg-brand-secondaryLight dark:bg-brand-secondaryDark">
        <button onClick={toggleDarkMode}>toggle mode</button>
        <p className="text-brand-secondaryDark dark:bg-brand-secondaryLight">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-brand-secondaryDark dark:bg-brand-secondaryLight">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};
