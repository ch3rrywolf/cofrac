const pdf = require('html-pdf');
const path = require('path');
const nodemailer = require('nodemailer');
const fs = require('fs');
const env = require('dotenv');
const puppeteer = require('puppeteer');
env.config();

const pdfDirectory = path.join(__dirname, '../pdfs');
const pdfTemplate = require("../documents/document");

if (!fs.existsSync(pdfDirectory)) {
    fs.mkdirSync(pdfDirectory);
}

class pdfController {
    createPdf = async (req, res) => {
        const { email, imagesBase64MO, imagesBase64IC, imagesBase64AA, imagesBase64AE, imagesBase64CET,Q1MO, Q2MO, Q3MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, CET1, AAmarqu1e, AAreferenc1e, AAnomberuni1t1, AAnomberuni1t2, AApuissancenomina1l, AACO1P, AAmarqu2e, AAreferenc2e, AAnomberuni2t1, AAnomberuni2t2, AApuissancenomina2l, AACO2P, AAmarqu3e, AAreferenc3e, AAnomberuni3t1, AAnomberuni3t2, AApuissancenomina3l, AACO3P, AAmarqu4e, AAreferenc4e, AAnomberuni4t1, AAnomberuni4t2, AApuissancenomina4l, AACO4P, AAmarqu5e, AAreferenc5e, AAnomberuni5t1, AAnomberuni5t2, AApuissancenomina5l, AACO5P, AA1Q1, AAQ1, AAQ2, AAQ3, AAQ4, AAQ5, AAQ6, AAQ7, AAQ8, AAQ9, AAQ10, AAQ11, AAQ12, AAQ13, AAQ14, AAQ15, AAQ16, AAQ17, AEmarqu1e, AEreferenc1e, AEnomberuni1t1, AEnomberuni1t2, AEpuissancenomina1l, AECO1P, AEmarqu2e, AEreferenc2e, AEnomberuni2t1, AEnomberuni2t2, AEpuissancenomina2l, AECO2P, AEmarqu3e, AEreferenc3e, AEnomberuni3t1, AEnomberuni3t2, AEpuissancenomina3l, AECO3P, AEmarqu4e, AEreferenc4e, AEnomberuni4t1, AEnomberuni4t2, AEpuissancenomina4l, AECO4P, AEmarqu5e, AEreferenc5e, AEnomberuni5t1, AEnomberuni5t2, AEpuissancenomina5l, AECO5P, AE1Q1, AEQ1, AEQ2, AEQ3, AEQ4, AEQ5, AEQ6, AEQ7, AEQ8, AEQ9, AEQ10, AEQ11, AEQ12, CETQ1, CETQ2, CETQ3, CETQ4, CETQ5, CETQ6, CETQ7, CETQ8, CETQ9, CETQ10, CETQ11, CETQ12, CETQ13, CETQ14, ICQQ1, ICQQ2, ICQQ3, ICQQ4, ICQQ5, ICQQ6, ICQQ7, ICQQ8, ICQQ9, ICQQ10, ICQQ11, ICQQ12, ICQQ13,  ICQQ15, ICQQ16, ICQQ17, ICQQ18, ICQQ19, ICQQ20, ICQQ21, ICQQ22, ICQQ23, ICQQ24 } = req.body;
        const pdfPath = path.join(__dirname, '../pdfs/formulaire.pdf');

       
        const imagesCET = imagesBase64CET.map((imageBase64CET) => {
            return `<img src="${imageBase64CET}" style="width: 220px; height: 250px; margin: 7px auto;" />`;
        }).join('');

        const imagesAE = imagesBase64AE.map((imageBase64AE) => {
            return `<img src="${imageBase64AE}" style="width: 220px; height: 250px; padding-left: 20px; margin-top: 10px;" />`;
        }).join('');

        const imagesAA = imagesBase64AA.map((imageBase64AA) => {
            return `<img src="${imageBase64AA}" style="width: 220px; height: 250px; padding-left: 20px; margin-top: 10px;" />`;
        }).join('');

        const imagesIC = imagesBase64IC.map((imageBase64IC) => {
            return `<img src="${imageBase64IC}" style="width: 220px; height: 250px; padding-left: 20px; margin-top: 10px;" />`;
        }).join('');

        const imagesMO = imagesBase64MO.map((imageBase64MO) => {
            return `<img src="${imageBase64MO}" style="width: 550px; height: 320px; padding-left: 20px; margin-top: 10px;" />`;
        }).join('');




        const htmlContent = pdfTemplate({ email, imagesMO, imagesIC, imagesAA, imagesAE, imagesCET, Q1MO, Q2MO, Q3MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, CET1, AAmarqu1e, AAreferenc1e, AAnomberuni1t1, AAnomberuni1t2, AApuissancenomina1l, AACO1P, AAmarqu2e, AAreferenc2e, AAnomberuni2t1, AAnomberuni2t2, AApuissancenomina2l, AACO2P, AAmarqu3e, AAreferenc3e, AAnomberuni3t1, AAnomberuni3t2, AApuissancenomina3l, AACO3P, AAmarqu4e, AAreferenc4e, AAnomberuni4t1, AAnomberuni4t2, AApuissancenomina4l, AACO4P, AAmarqu5e, AAreferenc5e, AAnomberuni5t1, AAnomberuni5t2, AApuissancenomina5l, AACO5P, AA1Q1, AAQ1, AAQ2, AAQ3, AAQ4, AAQ5, AAQ6, AAQ7, AAQ8, AAQ9, AAQ10, AAQ11, AAQ12, AAQ13, AAQ14, AAQ15, AAQ16, AAQ17, AEmarqu1e, AEreferenc1e, AEnomberuni1t1, AEnomberuni1t2, AEpuissancenomina1l, AECO1P, AEmarqu2e, AEreferenc2e, AEnomberuni2t1, AEnomberuni2t2, AEpuissancenomina2l, AECO2P, AEmarqu3e, AEreferenc3e, AEnomberuni3t1, AEnomberuni3t2, AEpuissancenomina3l, AECO3P, AEmarqu4e, AEreferenc4e, AEnomberuni4t1, AEnomberuni4t2, AEpuissancenomina4l, AECO4P, AEmarqu5e, AEreferenc5e, AEnomberuni5t1, AEnomberuni5t2, AEpuissancenomina5l, AECO5P, AE1Q1, AEQ1, AEQ2, AEQ3, AEQ4, AEQ5, AEQ6, AEQ7, AEQ8, AEQ9, AEQ10, AEQ11, AEQ12, CETQ1, CETQ2, CETQ3, CETQ4, CETQ5, CETQ6, CETQ7, CETQ8, CETQ9, CETQ10, CETQ11, CETQ12, CETQ13, CETQ14, ICQQ1, ICQQ2, ICQQ3, ICQQ4, ICQQ5, ICQQ6, ICQQ7, ICQQ8, ICQQ9, ICQQ10, ICQQ11, ICQQ12, ICQQ13,  ICQQ15, ICQQ16, ICQQ17, ICQQ18, ICQQ19, ICQQ20, ICQQ21, ICQQ22, ICQQ23, ICQQ24 });

 
        try {
            // Launch Puppeteer to generate PDF
            const browser = await puppeteer.launch({ 
                headless: true, 
                args: ['--no-sandbox', '--disable-setuid-sandbox'] 
            });
            const page = await browser.newPage();
            await page.setContent(htmlContent, { waitUntil: 'load' });

            await page.pdf({
                path: pdfPath,
                format: 'A4',
                printBackground: true,
                margin: {
                    top: '1cm',
                    bottom: '1cm',
                    left: '1cm',
                    right: '1cm',
                },
            });

            await browser.close();
            res.send('PDF generated');
        } catch (err) {
            console.error('Error generating PDF:', err);
            res.status(500).send('Error generating PDF');
        }
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
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPath, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
}

module.exports = new pdfController();
