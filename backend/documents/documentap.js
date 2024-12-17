
module.exports = ({clientName, chantierSirenDO, imagesMO})=> {
    const today = new Date();
    return `

    <!DOCTYPE  html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>fbfaa8c0-0016-4fe6-a453-7045c7c5c8e3</title><meta name="author" content="Microsoft Office User"/>
<style type="text/css"> * {margin:0; padding:0; text-indent:0; }
 .s1 { color: black; font-family:"Calibri Light", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 8pt; }
 .s2 { color: #FFF; font-family:"Calibri Light", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 8pt; }
 .s3 { color: #00F; font-family:"Calibri Light", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 8pt; }
 .s4 { color: #FFF; font-family:"Calibri Light", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }
 .s5 { color: black; font-family:"Calibri Light", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 6.5pt; }
 .s6 { color: black; font-family:"Calibri Light", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10.5pt; }
 .s7 { color: black; font-family:"Calibri Light", sans-serif; font-style: italic; font-weight: normal; text-decoration: none; font-size: 6.5pt; }
 p { color: black; font-family:"Calibri Light", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 8pt; margin:0pt; }
 a { color: #00F; font-family:"Calibri Light", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 8pt; }
 .s8 { color: black; font-family:"Calibri Light", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10.5pt; }
 .s9 { color: black; font-family:"Calibri Light", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 9pt; }
 .s10 { color: #FFF; font-family:"Calibri Light", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 9pt; }
 .s11 { color: black; font-family:"Calibri Light", sans-serif; font-style: italic; font-weight: normal; text-decoration: none; font-size: 8pt; }
 .s12 { color: black; font-family:"Calibri Light", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 9pt; }
 .s13 { color: #FFF; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 7.5pt; }
 .s14 { color: #FFF; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 9pt; }

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
   
    text-align: center; /* Centers text inside */
}

table {
    border-collapse: collapse;
    text-align: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Optional: shadow effect */
    margin: auto; /* Ensure table is horizontally centered */
}

th, td {
    text-align: center; /* Center text within cells */
    padding: 8px; /* Add padding for better spacing */
}

       
</style>
</head>
<body style="justify-content: center; align-items: center; border="0" cellspacing="0" cellpadding="0" background-color: #f4f4f4;">
<table style="border-collapse:collapse;margin-left:8.7712pt" text-align: center; cellspacing="0">
<tr style="height:24pt">
<td style="width:409pt;border-bottom-style:solid;border-bottom-width:1pt" colspan="3">
<img width="25"  height="41" src="data:image/jpg;base64,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"/>
<p style="padding-top: 0pt;padding-left: 52pt;text-indent: 0pt;text-align: left;">
<a name="bookmark0">&zwnj;</a>N°3-2067 <br/> Liste des implantations et portées</br></a>
<a href="http://www.cofrac.fr/" style=" color: black; font-family:&quot;Calibri Light&quot;, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 8pt;" target="_blank">disponibles sur </a>
<a href="http://www.cofrac.fr/" class="s3" target="_blank">www.cofrac.fr</a>
</p></td></tr>
<tr style="height:19pt">
<td style="width:409pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="3" bgcolor="#CE4527">
<p class="s4" style="padding-top: 1pt;text-indent: 0pt;text-align: center;">Rapport d&#39;inspection sur le lieu d&#39;opération BAR-TH-145</p>
</td>
</tr>
<tr style="height:11pt">
<td style="width:409pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" colspan="3">
<p class="s5" style="padding-top: 1pt;padding-left: 2pt;padding-right: 1pt;text-indent: 0pt;text-align: center;">Selon fiche BAR-TH-145</p>
</td>
</tr>
<tr style="height:11pt">
<td style="width:409pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="3" bgcolor="#CE4527">
<p class="s2" style="text-indent: 0pt;line-height: 10pt;text-align: center;">PHOTO BATIMENT</p></td></tr>
<tr style="height:176pt">
<td style="width:409pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="3">
<p style="text-indent: 0pt;text-align: center;">
${imagesMO}</p>
</td>
</tr>
<tr style="height:12pt">
<td style="width:409pt;border-top-style:solid;border-top-width:1pt" colspan="3">
<p style="text-indent: 0pt;text-align: center;">
<br/></p>
</td>
</tr>
<tr style="height:12pt">
<td style="width:84pt">
<p style="text-indent: 0pt;text-align: center;"><br/></p>
</td>
<td style="width:123pt;" bgcolor="#CE4527">
<p style="text-indent: 0pt;text-align: left;"/>
<p class="s2" style="padding-top: 1pt;padding-left: 19pt;text-indent: 0pt;line-height: 10pt;text-align: center;">Nom :</p>
</td><td style="width:202pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
</tr>
<tr style="height:19pt" >
<td style="width:409pt;border-right-style:solid;border-right-width:1pt" colspan="3">
<p class="s6" style="padding-top: 4pt;padding-left: 2pt;text-indent: 0pt;line-height: 13pt;text-align: left;">Adresse des travaux :</p>
</td>
</tr>
<tr style="height:17pt">
<td style="width:84pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
<td style="width:123pt " bgcolor="#CE4527" >
<p style="text-indent: 0pt;text-align: left;"/>
<p class="s2" style="padding-left: 19pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Adresse :</p>
</td>
<td style="width:202pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
</tr>
<tr style="height:12pt">
<td style="width:84pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
<td style="width:123pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
<td style="width:202pt">
<p style="text-indent: 0pt;text-align: left;">
<br/>
</p>
</td>
</tr>
<tr style="height:12pt">
<td style="width:409pt;border-right-style:solid;border-right-width:1pt" colspan="3">
<p style="text-indent: 0pt;text-align: left;"/>
<p class="s2" style="padding-left: 45pt;text-indent: 0pt;text-align: left;">Accompagnateur :</p>
</td>
</tr>
<tr style="height:24pt">
<td style="width:409pt;border-bottom-style:solid;border-bottom-width:1pt" colspan="3">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
</tr>
<tr style="height:14pt">
<td style="width:84pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p class="s1" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Conlusion de l&#39;audit</p>
</td>
<td style="width:123pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="padding-left: 17pt;text-indent: 0pt;text-align: left;"/></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s6" style="padding-left: 25pt;text-indent: 0pt;line-height: 12pt;text-align: left;">Satisfaisant</p>
</td>
</tr>
<tr style="height:10pt">
<td style="width:84pt;border-top-style:solid;border-top-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
<td style="width:123pt;border-top-style:solid;border-top-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
</tr>
<tr style="height:34pt">
<td style="width:84pt">
<p style="text-indent: 0pt;text-align: left;"/>
<p class="s2" style="padding-left: 1pt;padding-right: 49pt;text-indent: 0pt;line-height: 11pt;text-align: justify;">Date de visite de contrôle :</p></td><td style="width:123pt">
<p style="padding-top: 2pt;text-indent: 0pt;text-align: left;"><br/></p>
<p class="s1" style="text-indent: 0pt;text-align: left;">JJ/MM/AA</p></td>
<td style="width:202pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"/>
<p class="s2" style="padding-top: 6pt;padding-left: 52pt;padding-right: 112pt;text-indent: 0pt;line-height: 112%;text-align: left;">Date saisie rapport:</p></td></tr>
<tr style="height:41pt">
<td style="width:409pt" colspan="3">
<p class="s7" style="padding-top: 6pt;padding-left: 1pt;padding-right: 1pt;text-indent: 0pt;text-align: center;">Ce document est la propriété de la société L.A INSPECTION, il ne pourra, sans autorisation écrite être utilisé ou communiqué à des tiers.</p><p class="s7" style="padding-right: 2pt;text-indent: 0pt;text-align: center;">Toutes précautions utiles seront prises pour éviter sa divulgation.</p><p class="s7" style="padding-right: 2pt;text-indent: 0pt;text-align: center;">Les résultats de ce contrôle ne se rapportent qu&#39;aux parties accessibles lors de l&#39;intervention sur site.</p>
<p class="s7" style="padding-left: 1pt;padding-right: 1pt;text-indent: 0pt;line-height: 7pt;text-align: center;">Le rapport établi répond aux exigences réglementaires en vigueur le jour du contrôle.</p></td></tr></table>
<p style="text-indent: 0pt;text-align: left;"><span>
<table border="0" cellspacing="0" cellpadding="0">
<tr>
<td>
<img width="25" height="41" src="data:image/jpg;base64,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"/>
</td>
</tr></table></span></p>
<table style="border-collapse:collapse;margin-left:30pt" cellspacing="0"  text-align: center>
<tr style="height:11pt">
<td style="width:101pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
<p class="s2" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: right;">Numéro de rapport:</p></td>
<td style="width:51pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td></tr>
<tr style="height:11pt">
<td style="width:101pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
<p class="s2" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Référence demandeur:</p></td>
<td style="width:51pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td></tr>
</table>
<p style="text-indent: 0pt;text-align: left;"/>
<p style="padding-top: 2pt;padding-left: 60pt;text-indent: 0pt;text-align: left;">N°3-2067</p>
<p style="padding-top: 2pt;padding-left: 60pt;text-indent: 0pt;line-height: 118%;text-align: left;">
<a href="http://www.cofrac.fr/" style=" color: black; font-family:&quot;Calibri Light&quot;, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 8pt;" target="_blank">Liste des implantations et portées disponibles sur </a>
<a href="http://www.cofrac.fr/" target="_blank">www.cofrac.fr</a></p>
<p style="text-indent: 0pt;text-align: left;"><br/></p>
<table style="border-collapse:collapse;margin-left:8.7712pt" cellspacing="0">
<tr style="height:19pt">
<td style="width:409pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#CE4527">
<p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: center;">Rapport d&#39;inspection sur le lieu d&#39;opération BAR-TH-145</p></td></tr>
<tr style="height:12pt">
<td style="width:409pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#CE4527">
<p class="s4" style="padding-left: 1pt;text-indent: 0pt;line-height: 11pt;text-align: center;">ADMINISTRATIF</p>
</td>
</tr>
</table>
<p style="padding-top: 7pt;text-indent: 0pt;text-align: left;"><br/></p>
<table style="border-collapse:collapse;margin-left:3pt" cellspacing="0">
<tr style="height:11pt">
<td style="width:51pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5"><p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Nom :</p></td><td style="width:257pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr>
<tr style="height:23pt">
<td style="width:51pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5">
<p class="s1" style="padding-top: 6pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Adresse :</p>
</td>
<td style="width:257pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
</tr>
<tr style="height:11pt">
<td style="width:51pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5"><p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Siren :</p></td>
<td style="width:257pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr></table>
<p style="text-indent: 0pt;text-align: left;"/>
<p class="s8" style="padding-left: 10pt;text-indent: 0pt;text-align: left;">Donneur d’ordre :</p>
<p style="text-indent: 0pt;text-align: left;"><br/></p>
<table style="border-collapse:collapse;margin-left:3pt" cellspacing="0">
<tr style="height:11pt">
<td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5"><p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: left;">Nom ou personne moral :</p></td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr></table><p style="text-indent: 0pt;text-align: left;"/><table style="border-collapse:collapse;margin-left:3pt" cellspacing="0"><tr style="height:11pt"><td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5"><p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: left;">Adresse :</p></td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr></table><p style="text-indent: 0pt;text-align: left;"/><p class="s8" style="padding-left: 10pt;text-indent: 0pt;text-align: left;">Bénéficiaire :</p><p style="text-indent: 0pt;text-align: left;"><br/></p><table style="border-collapse:collapse;margin-left:3pt" cellspacing="0"><tr style="height:13pt"><td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5">
<p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: left;">Nom :</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
</tr>
<tr style="height:13pt">
<td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5">
<p class="s1" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">SIREN :</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr>
<tr style="height:22pt">
<td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5">
<p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: left;">Référence de l&#39;étude</p>
<p class="s1" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">énergétique (RGE étude) :</p></td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr>
</table>
<p style="text-indent: 0pt;text-align: left;"/>
<p class="s9" style="padding-left: 10pt;text-indent: 0pt;line-height: 107%;text-align: left;">Entreprise ayant effectué l&#39;étude énergétique:</p><p style="padding-top: 6pt;text-indent: 0pt;text-align: left;"><br/></p>
<table style="border-collapse:collapse;margin-left:109.811pt" cellspacing="0">
<tr style="height:12pt">
<td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5">
<p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: left;">Nom du représentant:</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr></table>
<p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br/></p>
<table style="border-collapse:collapse;margin-left:3pt" cellspacing="0">
<tr style="height:13pt">
<td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5">
<p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: left;">Raison sociale :</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr><tr style="height:14pt"><td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5"><p class="s1" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">SIRET :</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;">
<br/>
</p>
</td>
</tr>
<tr style="height:14pt">
<td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5">
<p class="s1" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Domaine de travaux réalisés:</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
</tr>
<tr style="height:29pt">
<td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5">
<p class="s1" style="padding-top: 3pt;padding-left: 1pt;padding-right: 2pt;text-indent: 0pt;line-height: 112%;text-align: left;">Référence de la qualification ou certification:</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
</tr>
<tr style="height:13pt">
<td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5">
<p class="s1" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Nom du représentant:</p></td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
</tr>
</table>
<p style="text-indent: 0pt;text-align: left;"/>
<p class="s9" style="padding-left: 10pt;text-indent: 0pt;line-height: 107%;text-align: left;">Professionnel ayant réalisé les travaux:</p><p style="text-indent: 0pt;text-align: left;"><br/></p>
<table style="border-collapse:collapse;margin-left:3pt" cellspacing="0">
<tr style="height:13pt">
<td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5"><p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: left;">Raison sociale :</p></td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
</tr>
<tr style="height:14pt">
<td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5">
<p class="s1" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">SIRET :</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
</tr><tr style="height:14pt"><td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5">
<p class="s1" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Domaine de travaux réalisés:</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr>
<tr style="height:28pt">
<td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5">
<p class="s1" style="padding-top: 3pt;padding-left: 1pt;padding-right: 2pt;text-indent: 0pt;line-height: 112%;text-align: left;">Référence de la qualification ou certification:</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
</tr>
</table>
<p style="text-indent: 0pt;text-align: left;"/>
<p class="s9" style="padding-left: 10pt;text-indent: 0pt;line-height: 107%;text-align: left;">Professionnel ayant réalisé les travaux:</p>
<p style="text-indent: 0pt;text-align: left;"><br/></p>
<table style="border-collapse:collapse;margin-left:3pt" cellspacing="0"><tr style="height:13pt">
<td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5">
<p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: left;">Raison sociale :</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#F8CAAC">
<p class="s1" style="padding-left: 74pt;text-indent: 0pt;text-align: left;">L.A INSPECTION</p></td></tr>
<tr style="height:14pt">
<td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5">
<p class="s1" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Adresse :</p></td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#F8CAAC">
<p class="s1" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: center;">15 Rue Françoise Giroud 57280 Maizières-Lès-Metz</p></td></tr>
<tr style="height:13pt">
<td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5"><p class="s1" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">SIREN :</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#F8CAAC">
<p class="s1" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: center;">918 710 492</p></td></tr>
<tr style="height:12pt">
<td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5"><p class="s1" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Numéro d’accréditation</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#F8CAAC">
<p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: center;">3-2067</p>
</td>
</tr>
</table>
<p style="text-indent: 0pt;text-align: left;"/>
<p class="s9" style="padding-left: 10pt;text-indent: 0pt;line-height: 107%;text-align: left;">Bureau de contrôle :</p>
<p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br/></p>
<table style="border-collapse:collapse;margin-left:8.7712pt" cellspacing="0">
<tr style="height:15pt"><td style="width:101pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s6" style="padding-left: 2pt;text-indent: 0pt;text-align: left;">Inspecteur :</p>
</td><td style="width:106pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 2pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Nom, Prénom :</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
</tr>
<tr style="height:24pt">
<td style="width:152pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="2" bgcolor="#FBE3D5">
<p class="s1" style="padding-top: 7pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Compagnie d’assurance :</p>
</td>
<td style="width:257pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5">
<p class="s1" style="padding-left: 92pt;padding-right: 8pt;text-indent: -84pt;line-height: 11pt;text-align: left;">Assureur Lloyd’s : Lloyd’s Insurance Company S.A. par l’intermédiaire de Add Value Assurances</p></td></tr></table>
<p style="text-indent: 0pt;text-align: left;"><br/></p>
<table style="border-collapse:collapse;margin-left:8.7712pt" cellspacing="0"><tr style="height:11pt">
<td style="width:152pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5">
<p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">N° de police et date de validité :</p></td>
<td style="width:257pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#FBE3D5">
<p class="s1" style="padding-left: 55pt;text-indent: 0pt;line-height: 10pt;text-align: left;">BRCP101020 du 31/01/2024 au 31/01/2025</p></td></tr></table>
<table style="border-collapse:collapse;margin-left:8.7712pt" cellspacing="0">
<tr style="height:11pt">
<td style="width:207pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;">
<span>
<table border="0" cellspacing="0" cellpadding="0">
<tr>
<td>
<img width="25" height="41" src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAApABkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6N1z9qb4h2fh2zv49JsLTUJdU1CzmsJtLuZDbyw+T5FiSGG6V1kLFxwcgAAqRSWninxn4O8ceNtS0ZNPfW/Enjey0DzNRtZWSGHyJDGW2ychNyDgD7rf3gF9M+JOpr8JdL+2+JfjTrtlvBMNqLLTXuJyOyRi2yecDPQZ5Irlfhr8VLX4jX8mlt8WPFXhvXEJZdL1vTtMt5ZExuV0P2ba2VIO0HOMnGOT9nTcXRlVpUVyPd2nbe/a7Sdr/AIs/PasZrERo1sRLnWqXNBNaW72TavbbrZGNd/tQfEW18TeP7KDQrG/XRF1A2lsljOrjyZ4o0Z33YcCORpGC4JC9VBFVP+GqNQ/6Kb4c/wDCU1D/AOKrU8cfEzWLC2l/4Rb4oazqUCyeQ+vXtrYJpqyYPyRFbQyXcnA/dwK3XllrH/4S/wCLP/Q5+Pf/AA20X/xVbwoUJRUnSgtu99F2cX69+5y1MRiIycY15vfs1q+6kttu3bqdF418V+CdO/bQsLnxPfaWLeDw2lvDLebXjtr0XDOm5uRE4QsQWxjcOeRln7RemxfHrxRaeD/C/h1NQ1rRbmG5vNdmWMQxQtGSsRkOSUbeGI77OFbqOHfwhp9/ptnpdxapdw3Ks1lZwWUiQlmRlMlnY7hLPJgn/S7tgO4xius+G2max+yxe6he3/hDUD4R1OOHfPBdJdz2Gzf/AK3aACSXJOMKMgAtXyePzGkvZPCVZKUEotpaWs9U+m+uluq7n6vkPDuISxEszw9OXtLzhTlLVz5o6SV0pWSbS5r3VnvynOxaN4p8IeN7HRPEOlzf8JHf7rew1eykVWuk3ECGCdvksoVVhlYYw+ODjIr0X/hn7xP/ANAnwx/4ONU/+LqxFq2rfHr4n+DvEGi6Fc2PhPw5cSy/2rqB8v7Xv2AiNOSfucYz1Odp4r6I3V4UVLFSlOrJyWyb7fd+i+e59XjMX/ZEKVHC0YUptNzjFbS5nvaWjas2m3bbRKy+LfC+tWumwy6ppt34rsbm9MM1/dvqsLOUkU7HeUWjMwLjy13YG88lRzXS6X4l8Qa2bm2Gp+LbO9jV3EN9rCQo6LD5rHc1j1KlCqYLENlggGT5zef8gHwb/vWf/oNxXSfEn/kdtS/6/vDn/pNLXBFuMf6/zPrMTTpzrWtq76uztytL+X/huhrf8LBurCwiurrXvFtvZrdpYS/Z9YgkaOUyspKp9kBZBGjNu4ywCY6sOJ/4aPu/+f3xh/4P7f8A+Q63NN/5H+w/694v/UgSvAa5q9apTtyv+vvPUy7A4HEOXtaV9E90t7/3fI//2QAA"/></td></tr></table></span></p>
<p class="s1" style="padding-top: 1pt;padding-left: 52pt;text-indent: 0pt;line-height: 9pt;text-align: left;">N°3-2067</p></td>
<td style="width:101pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
<p class="s2" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Numéro de rapport:</p></td>
<td style="width:50pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td>
<td style="width:51pt;border-left-style:solid;border-left-width:1pt" rowspan="2"><p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
</tr>
<tr style="height:11pt">
<td style="width:207pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 1pt;padding-left: 52pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Liste des implantations et portées</p></td>
<td style="width:101pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
<p class="s2" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Référence demandeur:</p>
</td>
<td style="width:50pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
</tr>
<tr style="height:23pt">
<td style="width:409pt;border-bottom-style:solid;border-bottom-width:1pt" colspan="4"><p style="padding-left: 52pt;text-indent: 0pt;text-align: left;">
<a href="http://www.cofrac.fr/" style=" color: black; font-family:&quot;Calibri Light&quot;, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 8pt;" target="_blank">disponibles sur </a>
<a href="http://www.cofrac.fr/" class="s3" target="_blank">www.cofrac.fr</a></p>
</td>
</tr>
<tr style="height:19pt">
<td style="width:409pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="4" bgcolor="#CE4527">
<p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: center;">Rapport d&#39;inspection sur le lieu d&#39;opération BAR-TH-145</p></td></tr>
<tr style="height:15pt">
<td style="width:409pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="4" bgcolor="#CE4527">
<p class="s4" style="padding-left: 1pt;text-indent: 0pt;line-height: 14pt;text-align: center;">RESULTAT DU CONSTAT VISUEL</p></td></tr>
<tr style="height:11pt">
<td style="width:409pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" colspan="4"><p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
</tr>
<tr style="height:11pt">
<td style="width:409pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="4" bgcolor="#CE4527">
<p class="s10" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Documentation client / maître d&#39;œuvre</p></td></tr>
<tr style="height:35pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 6pt;padding-left: 1pt;text-indent: 0pt;line-height: 112%;text-align: left;">Document matérialisant l&#39;engagement de l&#39;opération (devis signé…) :</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="3">
<p style="padding-top: 2pt;text-indent: 0pt;text-align: left;"><br/></p>
<p class="s1" style="padding-left: 58pt;text-indent: 0pt;text-align: left;">1 - oui et pièce présentée</p></td></tr>
<tr style="height:35pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Date d’engagement de l&#39;opération :</p>
<p class="s11" style="padding-top: 1pt;padding-left: 95pt;text-indent: 0pt;text-align: left;">(ex : date d’acceptation du</p>
<p class="s11" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">devis)</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="3">
<p style="padding-top: 2pt;text-indent: 0pt;text-align: left;"><br/></p>
<p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: center;">00/00/2023</p>
</td></tr><tr style="height:35pt"><td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 6pt;padding-left: 1pt;padding-right: 15pt;text-indent: 0pt;line-height: 112%;text-align: left;">Document prouvant la réalisation de l’opération (facture des travaux, PV de réception, etc) remis au bénéficiaire :</p>
</td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="3"><p style="padding-top: 2pt;text-indent: 0pt;text-align: left;"><br/></p>
<p class="s1" style="padding-left: 47pt;text-indent: 0pt;text-align: left;">2 - oui mais pièce non présentée</p></td></tr>
<tr style="height:23pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: left;">Date de preuve de réalisation de l’opération :</p><p class="s11" style="padding-top: 1pt;padding-left: 51pt;text-indent: 0pt;text-align: left;">(ex : date de la facture)</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="3">
<p class="s1" style="padding-top: 6pt;padding-left: 1pt;text-indent: 0pt;text-align: center;">00/00/2023</p></td></tr><tr style="height:12pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: left;">Référence de la facture :</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="3"><p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr>
<tr style="height:17pt"><td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 3pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Cadre contribution remis au bénéficiaire</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="3">
<p class="s1" style="padding-top: 2pt;padding-left: 51pt;text-indent: 0pt;text-align: left;">3 - non avec déclaration écrite</p></td></tr>
<tr style="height:21pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s1" style="padding-top: 5pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Commentaires:</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="3">
<p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr>
<tr style="height:21pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Maison individuelle existant depuis plus de 2 ans à la date</p><p class="s1" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">d&#39;engagement de l&#39;opération</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="3">
<p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr></table>
<p style="text-indent: 0pt;text-align: left;"><span><table border="0" cellspacing="0" cellpadding="0">
<tr>
<td><img width="25" height="41" src="data:image/jpg;base64,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"/></td></tr></table></span></p><table style="border-collapse:collapse;margin-left:3pt" cellspacing="0"><tr style="height:11pt">
<td style="width:101pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
<p class="s2" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Numéro de rapport:</p></td><td style="width:51pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td></tr><tr style="height:11pt"><td style="width:101pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
<p class="s2" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Référence demandeur:</p></td><td style="width:51pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td></tr></table>
<p style="text-indent: 0pt;text-align: left;"/>
<p style="padding-top: 2pt;padding-left: 60pt;text-indent: 0pt;text-align: left;">N°3-2067</p>
<p style="padding-top: 2pt;padding-left: 60pt;text-indent: 0pt;line-height: 118%;text-align: left;"><a href="http://www.cofrac.fr/" style=" color: black; font-family:&quot;Calibri Light&quot;, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 8pt;" target="_blank">Liste des implantations et portées disponibles sur </a>
<a href="http://www.cofrac.fr/" target="_blank">www.cofrac.fr</a></p><p style="text-indent: 0pt;text-align: left;"><br/></p>
<table style="border-collapse:collapse;margin-left:8.7712pt" cellspacing="0"><tr style="height:19pt">
<td style="width:409pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="2" bgcolor="#CE4527">
<p class="s4" style="padding-top: 1pt;text-indent: 0pt;text-align: center;">Rapport d&#39;inspection sur le lieu d&#39;opération BAR-TH-145</p></td></tr>
<tr style="height:11pt">
<td style="width:409pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="2" bgcolor="#CE4527">
<p class="s2" style="padding-left: 1pt;text-indent: 0pt;text-align: left;">Contrôle à l&#39;achevement des travaux</p></td></tr>
<tr style="height:11pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Travaux réalisés</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: center;">non vérifiable</p></td></tr>
<tr style="height:11pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Chantier accessible</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: center;">oui</p>
</td></tr><tr style="height:11pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Date de l&#39;étude énergétique:</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: center;">00/00/2023</p>
</td></tr>
<tr style="height:11pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Référence de l&#39;étude énergétique:</p></td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr><tr style="height:29pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 3pt;padding-left: 1pt;text-indent: 0pt;line-height: 112%;text-align: left;">Le contrôle de l&#39;audit énergétique a donné lieu à un avis satisfaisant</p></td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr>
<tr style="height:16pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 2pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Coup de pouce</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 2pt;padding-left: 1pt;text-indent: 0pt;text-align: center;">Oui</p></td></tr>
<tr style="height:17pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 3pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Scénarios de travaux choisis:</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr><tr style="height:17pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 3pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Geste 1 mis en place :</p>
</td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr>
<tr style="height:17pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 3pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Geste 2 mis en place :</p></td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr><tr style="height:17pt"><td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 3pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Geste 3 mis en place :</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr>
<tr style="height:17pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 3pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Geste 4 mis en place :</p></td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr><tr style="height:17pt"><td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 3pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Geste 5 mis en place :</p>
</td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr>
<tr style="height:30pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 4pt;padding-left: 1pt;padding-right: 3pt;text-indent: 0pt;line-height: 112%;text-align: left;">En cas de CDP, les travaux réalisés font partie des scénarios de travaux de l&#39;audit énergétique éligibles au CDP</p></td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr><tr style="height:35pt"><td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 11pt;text-align: left;">Hors CDP, les travaux réalisés font partie des scénarios de travaux de l&#39;audit énergétique respectant les critères des fiches BAR TH-164</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr><tr style="height:15pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 2pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Cep initial (kWh/m²/an) :</p></td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td></tr><tr style="height:15pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 2pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Cep projet (kWh/m²/an) :</p></td>
<td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td></tr>
<tr style="height:15pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s1" style="padding-top: 2pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Cef initial (kWh/m²/an) :</p>
</td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr><tr style="height:15pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 2pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Cef projet (kWh/m²/an) :</p></td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr><tr style="height:32pt"><td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 4pt;padding-left: 1pt;text-indent: 0pt;line-height: 112%;text-align: left;">Gain énergétique du projet par rapport à la consommation conventionnelle en énergie primaire avant travaux :</p>
</td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td></tr><tr style="height:40pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 3pt;padding-left: 1pt;padding-right: 3pt;text-indent: 0pt;line-height: 112%;text-align: left;">Les émissions de gaz à effet de serre après rénovation, exprimées en kgeq CO2/m²/an, sont inférieures ou égales à la valeur initiale de ces émissions avant travaux :</p>
</td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td></tr><tr style="height:44pt">
<td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-left: 1pt;padding-right: 17pt;text-indent: 0pt;line-height: 112%;text-align: justify;">Un écart est relevé entre les équipements installés et le scénario retenu de l&#39;audit ou les factures des travaux en quantité et en qualité (performances thermiques et</p>
<p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">énergétiques)</p></td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr><tr style="height:26pt"><td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s1" style="padding-top: 7pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Commentaires</p></td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr><tr style="height:11pt"><td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Des non qualités manifestes sont relevées</p></td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: center;">non</p></td>
</tr>
<tr style="height:47pt"><td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 7pt;padding-left: 1pt;text-indent: 0pt;line-height: 112%;text-align: left;">Commentaire (le cas échéant, lister les non qualités relevées au regard des référentiels de contrôle &quot;geste par geste&quot; correspondant à chaque poste de travaux mono-lot)</p>
</td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td></tr></table><p style="text-indent: 0pt;text-align: left;"><br/></p><table style="border-collapse:collapse;margin-left:8.7712pt" cellspacing="0"><tr style="height:19pt">
<td style="width:101pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s12" style="padding-top: 3pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Conclusion</p></td><td style="width:308pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-top: 3pt;text-indent: 0pt;text-align: center;">Satisfaisant</p></td></tr>
<tr style="height:36pt"><td style="width:207pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="2">
<p style="padding-top: 2pt;text-indent: 0pt;text-align: left;"><br/></p>
<p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: left;">Commentaires</p></td><td style="width:202pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td></tr></table><p style="text-indent: 0pt;text-align: left;">
<span>
<table border="0" cellspacing="0" cellpadding="0"><tr><td><img width="25" height="41" src="data:image/jpg;base64,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"/></td></tr></table></span></p><table style="border-collapse:collapse;margin-left:3pt" cellspacing="0"><tr style="height:11pt">
<td style="width:101pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
<p class="s2" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Numéro de rapport:</p></td>
<td style="width:51pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr>
<tr style="height:11pt">
<td style="width:101pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
<p class="s2" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Référence demandeur:</p></td><td style="width:51pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p>
</td></tr></table><p style="text-indent: 0pt;text-align: left;"/>
<p style="padding-top: 2pt;padding-left: 60pt;text-indent: 0pt;text-align: left;">N°3-2067</p><p style="padding-top: 2pt;padding-left: 60pt;text-indent: 0pt;line-height: 118%;text-align: left;"><a href="http://www.cofrac.fr/" style=" color: black; font-family:&quot;Calibri Light&quot;, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 8pt;" target="_blank">Liste des implantations et portées disponibles sur </a>
<a href="http://www.cofrac.fr/" target="_blank">www.cofrac.fr</a></p><p style="text-indent: 0pt;text-align: left;"><br/></p><table style="border-collapse:collapse;margin-left:8.7712pt" cellspacing="0"><tr style="height:19pt">
// <td style="width:409pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="2" bgcolor="#CE4527">
// <p class="s4" style="padding-top: 1pt;text-indent: 0pt;text-align: center;">Rapport d&#39;inspection sur le lieu d&#39;opération BAR-TH-145</p></td></tr><tr style="height:12pt"><td style="width:101pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt"><p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: left;">Nom du technicien</p></td>
<td style="width:308pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" rowspan="2"><p class="s1" style="padding-left: 1pt;text-indent: 0pt;text-align: left;">Signature</p></td></tr>
<tr style="height:24pt">
<td style="width:101pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: center;">0</p></td></tr></table><table style="border-collapse:collapse;margin-left:8.7712pt" cellspacing="0"><tr style="height:12pt">
<td style="width:167pt" colspan="2">
<p style="text-indent: 0pt;text-align: left;"><span><table border="0" cellspacing="0" cellpadding="0">
<tr>
<td><img width="25" height="41" src="data:image/jpg;base64,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"/></td></tr></table></span></p><p class="s1" style="padding-top: 1pt;padding-left: 52pt;text-indent: 0pt;line-height: 10pt;text-align: left;">N°3-2067</p></td><td style="width:120pt"><p style="text-indent: 0pt;text-align: left;"/>
<p class="s2" style="padding-top: 1pt;padding-left: 41pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Numéro de rapport:</p>
</td><td style="width:122pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr>
<tr style="height:12pt">
<td style="width:167pt" colspan="2">
<p class="s1" style="padding-top: 1pt;padding-left: 52pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Liste des implantations et portées</p>
</td><td style="width:120pt"><p class="s2" style="padding-top: 1pt;padding-left: 41pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Référence demandeur:</p>
</td><td style="width:122pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr><tr style="height:24pt"><td style="width:409pt;border-bottom-style:solid;border-bottom-width:1pt" colspan="4"><p style="padding-left: 52pt;text-indent: 0pt;text-align: left;"><a href="http://www.cofrac.fr/" style=" color: black; font-family:&quot;Calibri Light&quot;, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 8pt;" target="_blank">disponibles sur </a><a href="http://www.cofrac.fr/" class="s3" target="_blank">www.cofrac.fr</a></p></td></tr><tr style="height:19pt"><td style="width:409pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="4" bgcolor="#CE4527"><p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: center;">Rapport d&#39;inspection sur le lieu d&#39;opération BAR-TH-145</p></td></tr><tr style="height:15pt"><td style="width:51pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4527"><p style="text-indent: 0pt;text-align: left;"><br/></p></td><td style="width:116pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4527"><p style="text-indent: 0pt;text-align: left;"><br/></p></td>
<td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4527">
<p style="text-indent: 0pt;text-align: left;"/>
<p style="text-indent: 0pt;text-align: left;"/>
<p class="s4" style="padding-left: 17pt;text-indent: 0pt;line-height: 14pt;text-align: left;">PHOTOS</p>
</td><td style="width:122pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#CE4527">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td></tr>
<tr style="height:11pt"><td style="width:51pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
<td style="width:116pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
<td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td><td style="width:122pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td></tr><tr style="height:106pt">
<td style="width:51pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td>
<td style="width:116pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td><td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td><td style="width:122pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>

</td></tr><tr style="height:11pt"><td style="width:51pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td>
<td style="width:116pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td><td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td>
<td style="width:122pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td></tr><tr style="height:106pt">
<td style="width:51pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td>
<td style="width:116pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td><td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td>
<td style="width:122pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td></tr><tr style="height:11pt"><td style="width:51pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td>
<td style="width:116pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td><td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
<td style="width:122pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td></tr>
<tr style="height:106pt">
<td style="width:51pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td>
<td style="width:116pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td><td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
<td style="width:122pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr>
<tr style="height:11pt">
<td style="width:51pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
<td style="width:116pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p></td>
<td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td><td style="width:122pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td></tr>
<tr style="height:106pt">
<td style="width:51pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td>
<td style="width:116pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
<td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
<td style="width:122pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"><br/></p></td></tr><tr style="height:11pt">
<td style="width:51pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td><td style="width:116pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p class="s1" style="padding-right: 9pt;text-indent: 0pt;line-height: 10pt;text-align: center;">…</p></td>
<td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td>
<td style="width:122pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p class="s1" style="padding-left: 19pt;text-indent: 0pt;line-height: 10pt;text-align: left;">…</p></td></tr>
<tr style="height:11pt">
<td style="width:409pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" colspan="4" bgcolor="#CE4527">
<p style="text-indent: 0pt;text-align: left;"/>
<p style="text-indent: 0pt;text-align: left;"/>
<p class="s2" style="padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: center;">HISTORIQUE DES MODIFICATIONS</p></td></tr>
<tr style="height:12pt"><td style="width:409pt;border-top-style:solid;border-top-width:1pt" colspan="4">
<p style="text-indent: 0pt;text-align: left;"><br/></p>
</td></tr>
<tr style="height:31pt"><td style="width:51pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"><p style="text-indent: 0pt;text-align: left;"/>
<p class="s13" style="padding-left: 13pt;padding-right: 8pt;text-indent: -5pt;line-height: 108%;text-align: left;">Version du rapport</p>
</td><td style="width:116pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
<p class="s13" style="padding-top: 4pt;padding-right: 14pt;text-indent: 0pt;text-align: center;">Date de modification</p></td>
<td style="width:120pt;border-bottom-style:solid;border-bottom-width:1pt">
<p class="s14" style="padding-top: 3pt;padding-left: 2pt;text-indent: 0pt;text-align: left;">Nom du correcteur</p></td>
<td style="width:122pt;border-bottom-style:solid;border-bottom-width:1pt">
<p class="s2" style="padding-top: 3pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Commentaire modification</p>
</td></tr></table></body></html>

    
     `;
   }
