// emailService.js

const { generateEmailTemplate } = require('.././templates/emailTemplate');

const sendEmail = async (transporter, mailOptions, data) => {
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: data.subject,
      text: 'esto es una cadena de prueba',
      html: generateEmailTemplate(data),
    });
    return { success: true };
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

module.exports = { sendEmail };