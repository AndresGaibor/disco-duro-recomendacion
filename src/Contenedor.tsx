import React, { ReactNode } from "react";

interface ContenedorProps {
  children: ReactNode;
}

const Contenedor: React.FC<ContenedorProps> = ({ children }) => {
  return <div className="p-5 bg-white">{children}</div>;
};

export default Contenedor;
