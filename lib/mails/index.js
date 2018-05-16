'use strict';

const nodemailer = require('nodemailer');
const config = require('../../config/index');
const Mail = require('./Mail');

const router = require('express').Router();

// routes
router.post('/send', async (req, res) => {
    const body = req.body;

    send(body)
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(err.status || 503);
        res.send(err);
    })
});

// functions 
function send(body) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.mail_user,
            pass: config.mail_psw
        }
    });

    const mailParsed = new Mail(body.name, body.email, body.subject, body.message);

    return new Promise((resolve, reject) => {

        const mailOptions = {
            from: mailParsed.email,
            to: config.mail_to,
            subject: getSubject(mailParsed.name, mailParsed.subject),
            text: getText(mailParsed.name, mailParsed.email, mailParsed.message)
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return reject({success: false, status: 503, message: error.message });                    
            } 
            
            return resolve( { success: true });
        });
    });
}

function getSubject(name, subject) {
    return `[Contato Site] De: ${name} - ${subject}`;
}

function getText(name, from, message) {
    return `
        de: ${name}
        email: ${from}
        mensagem: ${message}
    `;
}

module.exports = router;