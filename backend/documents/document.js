module.exports = ({operationName, limitPres, prixUnit, tVa, dureeInter})=>{
    const today = new Date()
    return `

    <!doctype html>
    <html>
    <head>
    <meat charset-"utf-8>
    <title>PDF result </title>
    </head>

    <body>
    <div>
    <table>
        <tr><td>${operationName}</td></tr>
        <tr><td>${limitPres}</td></tr>
        <tr><td>${prixUnit}</td></tr>
        <tr><td>${tVa}</td></tr>
        <tr><td>${dureeInter}</td></tr>
    </table>
    <footer>
    <p>${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}</p>
    </footer>
    </div>
    </body>
    </html>
    `
}