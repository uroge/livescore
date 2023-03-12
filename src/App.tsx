import { i18nextInitialization } from './i18n/i118n';
import { AppBar, Main, Sidebar, Screen } from '@core/ui';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

// This is here just to use i18next..init({...})
// or else the bundler will ignore it
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const i18nInit = i18nextInitialization;

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route index element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export const AppShell = () => {
  return (
    <div className="bg-brand-primaryLight dark:bg-brand-primaryDark">
      <AppBar />
      <Main>
        {/* <Sidebar></Sidebar> */}
        <Screen>
          <Outlet />
        </Screen>
      </Main>
    </div>
  );
};
