import "./Navbar.css";
import React from "react";
import { GlobalHeader, HeaderBlock, IconAccountCircle, IconButton, IconHelp, IconLogoDarkBg, IconSettings, IconNotification } from "cdk-radial";
import { ThemeProvider } from 'styled-components';
import { theme } from 'cdk-radial';

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalHeader isTopMenubar>
        <HeaderBlock placement="left">
          <IconLogoDarkBg height="43" viewBox="0 0 300 77" width="120" style={{ paddingLeft: '19px' }} />
        </HeaderBlock>
        <HeaderBlock placement="right">
          <IconButton icon={<IconHelp />} iconColor="primary" text="test" backgroundAppearance="dark" />
          <IconButton icon={<IconAccountCircle />} text="test" backgroundAppearance="dark" />
          <IconButton icon={<IconSettings />} text="test" backgroundAppearance="dark" />
          <IconButton icon={<IconNotification />} text="test" backgroundAppearance="dark" />
        </HeaderBlock>
      </GlobalHeader>
    </ThemeProvider>
    );
  };

export default Navbar;
// `npm i --save-dev @types/cdk-radial`