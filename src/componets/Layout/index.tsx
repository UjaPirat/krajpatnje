import React, { ReactNode } from 'react';

// Components
import { Header } from './header';
import { Footer } from './footer';

// Style
import './index.css';

interface LayoutProps {
  children: ReactNode;
}

// Layout je funkcionalna komponenta
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="layout-main">{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
