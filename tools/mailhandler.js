var nodemailer = require('nodemailer');

const sendmail = (qualification) => {

const output = `
    <p>Bonjour ${qualification.contact.firstname},<br/>Veuillez trouver ci-joint la qualification de votre besoin de mobilité électrique validée aujourd'hui.</p>
    <h3>Détails :</h3>
    <ul>
      <li>Entreprise: ${qualification.corporatename}</li>
      <li>Adresse: </li>
      <li> ${qualification.street} </li>
      <li> ${qualification.code} </li>
      <li> ${qualification.city} </li>
      <li>Nombre de bornes: ${qualification.charger_needs.nb_s_7kw_c}</li>
      <li>Date d'installation souhaitée: ${qualification.works_conditions.installation_date}</li>
    </ul>
    <p>Nous vous remercions pour votre confiance.</p>
    <p>Equipe Mobilité Electrique - Engie E&C</p>
  `;



  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: process.env.EMAIL_USER, // generated ethereal user
        pass: process.env.EMAIL_PASS  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: process.env.EMAIL_USER, // sender address
      to: qualification.contact.email, // list of receivers
      subject: 'Nouvelle qualification validée de votre besoin', // Subject line
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return false;
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      return true;
  });

  };

exports.sendmail = sendmail;
