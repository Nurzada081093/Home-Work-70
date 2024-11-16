import React, { PropsWithChildren } from 'react';
import ToolBar from '../ToolBar/ToolBar.tsx';
import { Container } from '@mui/joy';

const Layout:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <header>
        <ToolBar/>
      </header>
      <main>
        <Container>
          {children}
        </Container>
      </main>
    </>
  );
};

export default Layout;