// import type { NextApiRequest, NextApiResponse } from 'next'

import { mailOptions, transporter } from "../../config/nodemailer";
import { sendEmail } from "../../config/emailService";

const handler = async (req,res) =>{
  
  if (req.method === 'POST') {
    const data = req.body;
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ message: 'Bad request' });
    }

    try {
      const result = await sendEmail(transporter, mailOptions, data);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(400).json({ message: 'Bad request' });
  }
}

export default handler;