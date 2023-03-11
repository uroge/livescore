import { i18nextInitialization } from './i18n/i118n';
// import { useDarkMode } from '@theme';
import { AppBar, Sidebar, SidebarGroup, Main } from '@core/ui';

// This is here just to use i18next..init({...})
// or else the bundler will ignore it
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const i18nInit = i18nextInitialization;

const myArray: string[] = [];

for (let i = 0; i < 200; i++) {
  myArray.push(`${i}`);
}

export const App = () => {
  // const toggleDarkMode = useDarkMode();
  return (
    <div className="bg-brand-primaryLight dark:bg-brand-primaryDark">
      <AppBar />
      <Main>
        <Sidebar></Sidebar>
      </Main>
    </div>
  );
};
