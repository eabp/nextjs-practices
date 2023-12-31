import Container from "@components/Container/Container";
import Navbar from "@components/Navbar/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
      <footer>Esto es el footer</footer>
    </div>
  );
};

export default Layout;
