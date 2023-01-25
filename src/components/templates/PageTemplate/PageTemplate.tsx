import React from 'react';
import { Header, Wrapper } from '@/components';

// PageTemplate types
type PageTemplateProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
};

export const PageTemplate = ({ children, header } : PageTemplateProps) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};