import { useCallback } from 'react';

const CLASS_NAME = 'dark';
const bodyClass = window.document.body.classList;

export const useDarkMode = () => {
  return useCallback(() => {
    bodyClass.toggle(CLASS_NAME);
  }, []);
};
