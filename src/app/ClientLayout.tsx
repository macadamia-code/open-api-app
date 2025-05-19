'use client';

import { useCallback, useState } from 'react';
import EmotionProvider from './emotion';
import Providers from './providers';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';


export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerTransitionEnd = useCallback(() => {
    setIsClosing(false);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setIsClosing(true);
    setMobileOpen(false);
  }, []);
  
  const handleDrawerToggle = useCallback(() => {
    if (!isClosing) {
      setMobileOpen((prev) => !prev);
    }
  }, [isClosing]);

  return (
    <EmotionProvider>
      <Providers>
        <Header handleDrawerToggle={handleDrawerToggle} />
        <div style={{ display: 'flex', paddingTop: 64 }}>
          <SideMenu
            mobileOpen={mobileOpen}
            handleDrawerClose={handleDrawerClose}
            handleDrawerTransitionEnd={handleDrawerTransitionEnd}
          />
          <main style={{ flex: 1, padding: '20px' }}>{children}</main>
        </div>
      </Providers>
    </EmotionProvider>
  );
}
