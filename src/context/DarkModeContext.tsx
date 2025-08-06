import React, { createContext, useState, useEffect, ReactNode } from 'react';

export interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getSystemPreference = () => {
    // Get system theme preference
    console.log( 'window.matchMedia', window.matchMedia);
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      return JSON.parse(savedMode);
    }
    // Default to system preference if no saved mode
    return getSystemPreference();
  });

  useEffect(() => {
    // Save the theme preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Optional: For consuming context elsewhere
// export const useDarkMode = () => {
//   const context = useContext(DarkModeContext);
//   if (context === undefined) {
//     throw new Error('useDarkMode must be used within a DarkModeProvider');
//   }
//   return context;
// };

export { DarkModeContext };
