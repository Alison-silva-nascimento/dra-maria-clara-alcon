/*
 * Central de conteúdo da landing page.
 * Preencha os campos vazios após validação da profissional.
 */
window.SITE_CONFIG = {
  professional: {
    name: "Maria Clara Alcon",
    displayName: "Dra. Maria Clara Alcon",
    role: "Cirurgiã-Dentista",
    cro: "", // Ex.: "CRO-UF 00000" — só publicar após confirmação.
    whatsapp: "", // Somente números com DDI + DDD. Ex.: "5511999999999".
    whatsappMessage: "Olá, Dra. Maria Clara! Gostaria de saber mais sobre o atendimento e solicitar um agendamento.",
    instagram: "",
    email: "",
    location: "", // Não preencher sem autorização para divulgação.
    bio: [
      "Um atendimento odontológico pensado para que você se sinta à vontade desde o primeiro contato.",
      "Com escuta atenta e explicações claras, cada plano de cuidado é construído de forma individual, respeitando seu momento, suas necessidades e seus objetivos."
    ]
  },
  treatments: [
    { number: "01", title: "Avaliação e prevenção", text: "Acompanhamento cuidadoso para compreender sua saúde bucal e prevenir problemas." },
    { number: "02", title: "Saúde e função", text: "Cuidados voltados ao conforto, à mastigação e ao equilíbrio do sorriso." },
    { number: "03", title: "Estética do sorriso", text: "Possibilidades avaliadas com naturalidade, critério e respeito às suas características." }
  ],
  steps: [
    { title: "Primeiro contato", text: "Envie uma mensagem pelo WhatsApp para tirar dúvidas iniciais e solicitar um horário." },
    { title: "Avaliação cuidadosa", text: "Uma conversa atenta e uma avaliação clínica para compreender suas necessidades." },
    { title: "Plano individual", text: "Você recebe orientações claras sobre as possibilidades indicadas para o seu caso." },
    { title: "Cuidado e acompanhamento", text: "O atendimento segue com atenção a cada etapa e orientações para manter os resultados." }
  ],
  differences: [
    { icon: "heart", title: "Escuta de verdade", text: "Tempo para entender suas dúvidas, expectativas e prioridades." },
    { icon: "spark", title: "Cuidado individual", text: "Cada plano é construído a partir das necessidades de cada pessoa." },
    { icon: "message", title: "Comunicação clara", text: "Explicações simples para que você participe das decisões com segurança." },
    { icon: "leaf", title: "Leveza em cada etapa", text: "Uma experiência acolhedora, respeitosa e sem pressa." }
  ],
  faq: [
    { question: "Como faço para agendar uma avaliação?", answer: "O agendamento é solicitado pelo WhatsApp. Após o contato, você recebe as orientações e as opções de horário disponíveis." },
    { question: "Quais tratamentos são indicados para mim?", answer: "A indicação depende de uma avaliação individual. Nela, suas necessidades e objetivos são considerados antes de qualquer plano de cuidado." },
    { question: "Posso tirar dúvidas antes de marcar?", answer: "Sim. Você pode enviar uma mensagem pelo WhatsApp para receber as primeiras orientações sobre o atendimento." }
  ]
};
