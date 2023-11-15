// Template de email

const generateEmailTemplate = (data) => {
  return `
    <h1>Hola ${data.name},</h1>
    <p>Gracias por ponerte en contacto con nosotros. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
    <h2>Detalles del mensaje:</h2>
    <ul>
      <li><strong>Nombre:</strong> ${data.name}</li>
      <li><strong>Correo Electrónico:</strong> ${data.email}</li>
      <li><strong>Asunto:</strong> ${data.subject}</li>
    </ul>
    <p><strong>Mensaje:</strong></p>
    <p>${data.message}</p>
    <p>¡Gracias de nuevo y que tengas un excelente día!</p>
  `;
};

module.exports = { generateEmailTemplate };