
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-zinc-500 text-sm">
          <p className="mb-2">
            Bot não oficial criado por fãs. Não afiliado à FURIA Esports.
          </p>
          <p>
            Desenvolvido por <a 
              href="https://github.com/bernardoalvesc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-furia-purple hover:underline"
            >
              Bernardo Alves
            </a>
          </p>
          <p className="mt-4">
            © {currentYear} FURIA CS Bot
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
