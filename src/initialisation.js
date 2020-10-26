/* Google Fonts */

var fonts = "https://fonts.googleapis.com/css?family=Lexend+Giga|Poppins|Source+Sans+Pro|Montserrat|Abril+Fatface&display=swap"
var faCDN = "https://kit.fontawesome.com/4c65dbe1d8.js"
var bsJsCDN = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"
var bsCssCDN = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"

linkGF=document.createElement('link');
linkGF.href=fonts;
linkGF.rel="stylesheet";
document.getElementsByTagName('head')[0].appendChild(linkGF);

/* FontAwesome */

scriptFA=document.createElement('script');
scriptFA.src=faCDN;
document.getElementsByTagName('head')[0].appendChild(scriptFA);

/* Bootstrap */

scriptBS=document.createElement('script');
scriptBS.src=bsJsCDN;
document.getElementsByTagName('head')[0].appendChild(scriptBS);
linkBS=document.createElement('link');
linkBS.src=bsCssCDN;
linkBS.rel="stylesheet";
document.getElementsByTagName('head')[0].appendChild(linkBS);