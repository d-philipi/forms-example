import React, { useState } from 'react';
import { Check, AlertCircle, ArrowRight } from 'lucide-react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormTextarea from './FormTextarea';

const QueryForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    category1: '',
    category2: '',
    message: '',
    dominion: '',
    idvisual: '',
    hospedagem: '',
    sustentacao: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Digite um email válido';
    }

    if (!formState.category1) {
      newErrors.category1 = 'Por favor, selecione uma das opções!';
    }

    if (!formState.category2) {
      newErrors.category2 = 'Por favor, selecione uma das opções!';
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Deixe uma mensagem! Preciso entender melhor o seu processo! ';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setIsSubmitting(true);

    const token = "EAATRBKPW6F4BOyKBNNLX2PdrxgWTOHwFKwTZCrlqZAjEhSbPaCTJ5ZC69RYPyJKJwRhqerw9dya4MMZBRyce7I5qJChhccpcf0hJbaqVkr3Pb5qHVeX2tjr14qWZABlJfhPJKVsjZCravqe6dCf7zvk5Kr8jNny4FWbNVJQkfI00eKU5MRfxzqI0YzasEkD0n7lVRGLKhZCAvmYS8YJmK3u7K9e7kkZD";
    try {
      const response = await fetch(
        'https://graph.facebook.com/v22.0/667598549766490/messages',
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: '5521976864083',
            type: 'template',
            template: {
              name: 'hello_world',
              language: { code: 'en_US' },
              components: [
                {
                  type: "body",
                  parameters: [
                    { type: "text", text: formState.name },
                    { type: "text", text: formState.email },
                    { type: "text", text: formState.phone },
                    { type: "text", text: formState.category1 },
                    { type: "text", text: formState.category2 },
                    { type: "text", text: formState.message },
                    { type: "text", text: formState.dominion },
                    { type: "text", text: formState.idvisual },
                    { type: "text", text: formState.hospedagem },
                    { type: "text", text: formState.sustentacao }
                  ]
                }
              ]
            }
          })
        }
      );

      if (!response.ok) throw new Error('Falha no envio');

      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      alert('Ocorreu um erro ao enviar. Tente novamente mais tarde. Sinalize ao proprietário da página sobre o erro. Obrigado!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const categoryOptionsService = [
    { value: '', label: 'Selecione um serviço' },
    { value: 'macroweb', label: 'Sites institucionais' },
    { value: 'microweb', label: 'Landing Pages' },
    { value: 'sistemas', label: 'Sistemas funcionais' },
    { value: 'edicão', label: 'Imagens e Vídeos' },
    { value: 'suporte', label: 'Sustentação de aplicação' },
    { value: 'feedback', label: 'Feedback' },
  ];

  const categoryOptionsProject = [
    { value: '', label: 'Selecione uma categoria' },
    { value: 'legado', label: 'Projeto legado' },
    { value: 'zero', label: 'Construção do zero' },
    { value: 'continuacao', label: 'Continuar construção' },
    { value: 'atualizacao', label: 'Atualização de projeto' },
  ];

  if (isSubmitted) {
    return (
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-8 animate-fade-in">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-green-100 p-4 mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Obrigado!</h2>
          <p className="text-gray-600 mb-6">
            Sua requisição foi enviada com sucesso. Nós iremos retornar a você assim que possível.
          </p>
          <button
            onClick={() => {
              setFormState({
                name: '',
                email: '',
                phone: '',
                category1: '',
                category2: '',
                message: '',
                dominion: '',
                idvisual: '',
                hospedagem: '',
                sustentacao: ''
              });
              setIsSubmitted(false);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-6 py-2.5 transition-colors"
          >
            Envie outra requisição!
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">SUA REQUISIÇÃO</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Nome completo"
          id="name"
          name="name"
          type="text"
          value={formState.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Digite seu nome completo"
          required
        />

        <FormInput
          label="Endereço de email"
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Digite seu endereço de email"
          required
        />

        <FormInput
          label="Número de telefone (Opcional)"
          id="phone"
          name="phone"
          type="tel"
          value={formState.phone}
          onChange={handleChange}
          placeholder="Digite seu número de telefone"
        />

        <FormSelect
          label="Selecione uma categoria"
          id="category1"
          name="category1"
          value={formState.category1}
          onChange={handleChange}
          error={errors.category1}
          options={categoryOptionsService}
          required
        />

        <FormTextarea
          label="Sua mensagem"
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          error={errors.message}
          placeholder="Descreva o projeto com detalhes..."
          required
        />

        <FormInput
          label="Possui domínio?"
          id="dominion"
          name="dominion"
          type="text"
          value={formState.dominion}
          onChange={handleChange}
          placeholder="Digite sim/não e o seu domínio."
        />

        <FormInput
          label="Possui identidade visual?"
          id="idvisual"
          name="idvisual"
          type="text"
          value={formState.idvisual}
          onChange={handleChange}
          placeholder="Digite sim/não, caso necessário."
        />

        <FormInput
          label="Possui hospedagem?"
          id="hospedagem"
          name="hospedagem"
          type="text"
          value={formState.hospedagem}
          onChange={handleChange}
          placeholder="Digite sim/não e o seu provedor."
        />

        <FormInput
          label="Precisará de sustentação de aplicação?"
          id="sustentacao"
          name="sustentacao"
          type="text"
          value={formState.sustentacao}
          onChange={handleChange}
          placeholder="Digite sim/não, caso necessário."
        />

        <FormSelect
          label="Selecione uma categoria de projeto"
          id="category2"
          name="category2"
          value={formState.category2}
          onChange={handleChange}
          error={errors.category2}
          options={categoryOptionsProject}
          required
        />

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium text-white transition-all duration-300 ${isSubmitting
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
              }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processando...
              </>
            ) : (
              <>
                Enviar requisição
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default QueryForm;