


///////////CALCULADORA DE CAMBIO
//CREAMOS LOS ELEMENTOS html
function crearelementos (felemento,fclase,fidentificador,fcontenedor,fplace){
var tArea = document.createElement(felemento);
tArea.setAttribute("class",fclase);
tArea.setAttribute("id",fidentificador);
tArea.setAttribute("placeholder", fplace);
var elemento = document.getElementById(fcontenedor);
elemento.appendChild(tArea);
} 
//////CREAMOS LOS ELEMENTOS 
document.getElementById("idTotal").style.display = "flex";
document.getElementById("idTotal").style.flexDirection = "column";
crearelementos ("div","cdiv","idCuenta","idTotal","");
crearelementos ("div","cdiv","idMatricula","idTotal","");
crearelementos ("div","cdiv","idImagenes","idTotal","");
crearelementos ("div","cdiv","idCuentaMaster","idTotal","");
crearelementos ("div","cdiv","idContraseña1","idTotal","");
crearelementos ("div","cdiv","idContraseña2","idTotal","");
crearelementos ("div","cdiv","idURL","idTotal","");
crearelementos ("div","cdiv","idHex","idTotal","");


document.getElementById("idCuenta").style.display = "flex";
document.getElementById("idMatricula").style.display = "flex";
document.getElementById("idImagenes").style.display = "flex";
document.getElementById("idCuentaMaster").style.display = "flex";
document.getElementById("idContraseña1").style.display = "flex";
document.getElementById("idContraseña2").style.display = "flex";

crearelementos ("input","cInput","idInput","idCuenta","Introduce número de cuenta");
crearelementos ("textarea","cText","idText","idCuenta","Codigo pais");

crearelementos ("input","cInput","idInput1","idMatricula","Introduce matrícula");
crearelementos ("textarea","cText","idText1","idMatricula","Numeros");
crearelementos ("textarea","cText","idText2","idMatricula","Letras");

//crearelementos ("textarea","cText","idText3","idImagenes","URL de imagen1");
//crearelementos ("textarea","cText","idText4","idImagenes","URL de imagen2");
crearelementos ("button","cButton","idButton","idImagenes","");
document.getElementById("idButton").innerHTML = "Obtener url de imagen en consola";

imagenes = document.getElementsByTagName("img");
document.getElementById("idButton").addEventListener("click",()=>obtener(imagenes,"perro"))

crearelementos ("input","cInput","idInput2","idCuentaMaster","MasterCARD");
crearelementos ("textarea","cText","idText5","idCuentaMaster","");
crearelementos ("textarea","cText","idText6","idCuentaMaster","");
crearelementos ("textarea","cText","idText7","idCuentaMaster","");
crearelementos ("textarea","cText","idText8","idCuentaMaster","");

crearelementos ("input","cInput","idInput3","idContraseña1","Contraseña compleja");

crearelementos ("input","cInput","idInput4","idContraseña2","Contraseña moderada");

crearelementos ("input","cInput","idInput5","idURL","URL");

crearelementos ("input","cInput","idInput6","idHex","Codigo Hexadecimal");

///////CREO LOS PATRONES 

const pat = /^(([A-Z][A-Z]\d{2})\d{20})$|^(([A-Z][A-Z]\d{2})(\s\d{4}){5})$/;
const patm = /^(\d{4})(\s|-)?([A-Z]{3})$/;                 
const patmaster = /^(5(1|2|3|4|5)\d{2})\s(\d{4})\s(\d{4})\s(\d{4})$|^(5(1|2|3|4|5)\d{2})((\-)(\d{4})){3}$|^(5(1|2|3|4|5)\d{2})((\d{4})){3}$/;
const ps1 = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;//REGEX DE INTERNET
const ps2 = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;;//REGEX DE INTERNET
const purl = /^((ftp|http|https):\/\/)?www\.([A-z]+)\.(com|net)$/;;//REGEX DE INTERNET
const phex = /^0x[0-9A-F]+$/;;//REGEX DE INTERNET

///////LLAMO A LA FUNCION DE COMPROBACION 
document.getElementById("idInput").addEventListener("keyup",()=>validar(pat,"idInput","idText","","","",0))
document.getElementById("idInput1").addEventListener("keyup",()=>validar(patm,"idInput1","idText1","idText2","","",1))
document.getElementById("idInput2").addEventListener("keyup",()=>validar(patmaster,"idInput2","idText5","idText6","idText7","idText8",2))
document.getElementById("idInput3").addEventListener("keyup",()=>validar(ps1,"idInput3","","","","",3))
document.getElementById("idInput4").addEventListener("keyup",()=>validar(ps2,"idInput4","","","","",3))
document.getElementById("idInput5").addEventListener("keyup",()=>validar(purl,"idInput5","","","","",3))
document.getElementById("idInput6").addEventListener("keyup",()=>validar(phex,"idInput6","","","","",3))

///////COLOREO EN VERDE SI ENCJA EN ROJO SI NO
function validar (pt,idI,idT1,idT2,idT3,idT4,a){
    if(pt.test(document.getElementById(idI).value))
        { document.getElementById(idI).style.backgroundColor = '#2bff003d';
        const pat1 = /^[A-Z][A-Z]\d{2}$/;//PATRON PARA DETECTAR ESXX DE UN NUMERO DE CUENTA, y otros parones de las otras busquedas
        const pat2 = /^(\d{4})$/;
        const pat3 = /^([A-Z]{3})$/;
        var prueba = pt.exec(document.getElementById(idI).value);
        if(a==0){extraer(prueba,pat1,idT1);}
        if(a==1){
            extraer(prueba,pat2,idT1);
            extraer(prueba,pat3,idT2); }
        if(a==2){
            extraerm(prueba,pat2,idT1,1);
            extraerm(prueba,pat2,idT2,2);
            extraerm(prueba,pat2,idT3,3);
            extraerm(prueba,pat2,idT4,4);}
        }
    else{ document.getElementById(idI).style.backgroundColor = '#ff00003d';
    if(a!=3){document.getElementById(idT1).innerHTML = "";}
    if(a==1){document.getElementById(idT2).innerHTML = "";}
    if(a==2){
        document.getElementById(idT1).innerHTML = "";
        document.getElementById(idT2).innerHTML = "";
        document.getElementById(idT3).innerHTML = "";
        document.getElementById(idT4).innerHTML = "";
            }
    }
}

//Busqueda mas exhaustiva dentro del array previamente encontrado para filtrar string mas pequeños
function extraer(pr,patt,idText){
    for(i=0;i<pr.length;i++){
        if(patt.test(pr[i])){
            document.getElementById(idText).innerHTML = pr[i];
        }
    }
}
function extraerm(pr,patt,idText,a){
    var hecho = 0;
    for(i=0;hecho<a;i++){
        if(patt.test(pr[i])){
            document.getElementById(idText).innerHTML = pr[i];
            hecho++;
        }
    }
}

function obtener (imgs,s){
    console.log(imgs[0])
    console.log(imgs[1])
    for(i=0;i<imgs.length;i++){
    const pattern = /^(https:\/\/)(.*?)(\.jpg|\.png)$/;
    console.log(pattern.test(imgs[i].src))
    var prueba = pattern.exec(imgs[i].src);
    console.log(prueba[0])
    }
}