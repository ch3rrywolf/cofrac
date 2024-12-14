const pdf = require('html-pdf');
const path = require('path');
const nodemailer = require('nodemailer');
const fs = require('fs');
const env = require('dotenv');
env.config();

const pdfDirectory = path.join(__dirname, '../pdfs');
const pdfTemplate = require("../documents/document");

if (!fs.existsSync(pdfDirectory)) {
    fs.mkdirSync(pdfDirectory);
}

class pdfController {
    createPdf = (req, res) => {
        const pdfPath = path.join(__dirname, '../pdfs/formulaire.pdf');

        pdf.create(pdfTemplate(req.body), {}).toFile(pdfPath, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error generating PDF');
            }
            res.send('PDF generated');
        });
    };

    fetchPdf = (req, res) => {
        const pdfPath = path.join(__dirname, '../pdfs/formulaire.pdf');
        if (!fs.existsSync(pdfPath)) {
            return res.status(404).send('PDF not found');
        }
        res.sendFile(pdfPath);
    };

    sendPdf = async (req, res) => {
        const pdfPath = path.join(__dirname, '../pdfs/formulaire.pdf');
        if (!fs.existsSync(pdfPath)) {
            return res.status(404).send('PDF not found for emailing');
        }

        try {
            const attachment = fs.readFileSync(pdfPath).toString('base64');

            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false,
                },
            });

            const mailOptions = {
                from: process.env.USER, // Sender's email address
                to: req.body.email, // Receiver's email address
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF generation document. Thanks.</p>',
                attachments: [
                    {
                        content: attachment,
                        filename: 'formulaire.pdf',
                        type: 'application/pdf',
                        disposition: 'attachment',
                    },
                ],
            };

            const info = await smtpTransport.sendMail(mailOptions);

            console.log('Email sent: ', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email');
        }
    };
}

module.exports = new pdfController();
