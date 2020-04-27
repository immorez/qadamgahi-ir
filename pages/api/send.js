const sgMail = require('@sendgrid/mail');

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const {
    name,
    email,
    business_information,
    job_title,
    business_name,
  } = req.body;

  const content = {
    to: 'qadamgahiii@gmail.com',
    from: 'qadamgahiii@gmail.com',
    subject: `New Message From - ${business_name}`,
    html: `<p>${job_title}, ${business_information}, ${name}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}
