import { createContext, useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

const AuthContext: any = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [authReady, setAuthReady] = useState<boolean>(false);

  useEffect(() => {
    netlifyIdentity.on('login', (user) => {
      setUser(user);
      netlifyIdentity.close();
      console.log('Login event', user);
    });
    netlifyIdentity.on('logout', () => {
      setUser(null);
      console.log('logout event');
    });

    netlifyIdentity.on('init', (user) => {
      setUser(user);
      setAuthReady(true);
    });
    //init netlify identity connection
    netlifyIdentity.init();

    return () => {
      netlifyIdentity.off('login');
      netlifyIdentity.off('logout');
    };
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };
  const register = () => {
    netlifyIdentity.open('signup');
  };
  const logout = () => {
    netlifyIdentity.logout();
  };

  const context = { user, login, logout, authReady, register };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
