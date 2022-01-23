var monto, saldo, credito;

saldo = prompt("ingrese el saldo de la empresa");
monto = prompt("ingrese el monto a pagar");

if(monto > 500000){
    alert("se pagara a contado: "+monto*0.55);
    saldo = saldo-monto*0.55;
    alert("se pedira prestado al banco: "+monto*0.30);
    credito = monto*0.15+monto*0.20;
    alert("se pagara a credito con intereses: "+credito);
    alert("el saldo restante es: "+saldo)
}else{
    alert("se pagara a contado: "+monto*0.70);
    saldo = saldo-monto*0.70;
    credito = monto*0.30+monto*0.20;
    alert("se pagara a credito con intereses: "+credito);
    alert("el saldo restante es: "+saldo)
}
