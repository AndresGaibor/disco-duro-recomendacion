import React, { ReactNode } from "react";

interface ContenedorProps {
  children: ReactNode;
}

const Contenedor: React.FC<ContenedorProps> = ({ children }) => {
  return (
    <div className="p-5">
      {children}
    </div>
  );
};

export default Contenedor;

