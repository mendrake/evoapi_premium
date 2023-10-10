// Modulos
const nodemailer = require("nodemailer");

//config email
const CONFIG = require("./config-email");

// Função para envio do email
const sendMail = async (email, name) => {
  // configuração do modulo
  const transporter = nodemailer.createTransport({
    host: CONFIG.host,
    port: CONFIG.port,
    secure: false,
    auth: {
      user: CONFIG.user,
      pass: CONFIG.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  // template do email
  html = `
        <style>
        /* Estilos para o corpo do e-mail */
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }

        /* Estilos para o conteúdo */
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        /* Estilos para o cabeçalho */
        .header {
            text-align: center;
            padding: 20px 0;
        }

        /* Estilos para os links */
        a {
            color: #007BFF;
            text-decoration: none;
            font-weight: bold;
        }

    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Bem-vindo à EvoAPI!</h1>
            <p>Obrigado por se cadastrar em nosso site.</p>
        </div>
        
        <p>Prezado ${name},</p>
        
        <p>Esperamos que esta mensagem o encontre bem. Gostaríamos de lhe estender as boas-vindas calorosas à comunidade EvoAPI!</p>
        
        <p>É com grande alegria que agradecemos por ter escolhido se cadastrar em nosso site. Acreditamos firmemente que a EvoAPI é o lugar perfeito para você descobrir, explorar e aproveitar as nossas incríveis APIs. Com nossos recursos avançados e documentação detalhada, estamos comprometidos em fornecer a você a melhor experiência possível.</p>
        
        <p>Aqui estão algumas maneiras de começar a explorar a EvoAPI:</p>
        
        <ol>
            <li><strong>Acesse sua conta:</strong> Faça login em sua conta <a href="[Inserir Link de Login]">aqui</a> para começar a navegar por nossas APIs e documentação.</li>
            <li><strong>Explore nossas APIs:</strong> Descubra uma variedade de APIs emocionantes que podem ser úteis para os seus projetos. Temos recursos para todas as suas necessidades.</li>
            <li><strong>Suporte e Recursos:</strong> Caso precise de ajuda ou tenha alguma dúvida, nossa equipe de suporte estará sempre à disposição para ajudar. Além disso, certifique-se de explorar nossos recursos educacionais em <a href="[Inserir Link para Recursos Educacionais]">aqui</a>.</li>
        </ol>
        
        <p>Estamos ansiosos para ver como você aproveitará a EvoAPI e como nossas APIs poderão enriquecer seus projetos. Seja você um desenvolvedor experiente ou alguém que está apenas começando, estamos aqui para apoiá-lo em cada passo do caminho.</p>
        
        <p>Mais uma vez, obrigado por se juntar à nossa comunidade. Seu interesse e confiança significam muito para nós. Se tiver alguma dúvida ou precisar de assistência, não hesite em entrar em contato conosco.</p>
        
        <p>Bem-vindo à EvoAPI - onde a inovação e a criatividade se encontram!</p>
        
    </div>
</body>
      `;
  // info do email
  const mailSent = await transporter.sendMail({
    html: html,
    text: "EvoApi",
    subject: `Cadastro EvoApi`,
    from: `EvoAPI <${CONFIG.user}>`,
    to: [`${email}`],
  });
};

module.exports = sendMail;
