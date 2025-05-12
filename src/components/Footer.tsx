import React from 'react';
import { Mail, Phone, MapPin, Clock, Shield, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Informações para contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-blue-400" />
                <span>daniphilipi379@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-blue-400" />
                <span>+55 (21) 97686-4083</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-blue-400" />
                <span>Rua Felício - 127<br />Cascadura, RJ</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-blue-400" />
                <span>Segunda - Sexta: 8h - 20h BR</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre nós</h3>
            <p className="mb-4 text-gray-400 leading-relaxed">
              Profissionais dedicados em entregas com excelência e praticidade. 
              Nosso time se atenta na sua entrega contínua e conexão com o mercado.
              Procuramos mostrar a cadência de evolução e caminhar junto com você.
            </p>
            <div className="flex items-center">
              <Heart className="h-5 w-5 mr-2 text-pink-500" />
              <span>Feito com carinho para nossos clientes</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Privacidade & Termos</h3>
            <p className="mb-4 text-gray-400 leading-relaxed">
              Sua privacidade é importante para nós. Coletamos informações exclusivamente para responder às suas perguntas e aprimorar nossos serviços.
            </p>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-green-500" />
              <span>Seus dados estão seguros conosco.</span>
            </div>
            <div className="mt-4 space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Política de privacidade</a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Termos de serviço</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} TechnoPhil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;