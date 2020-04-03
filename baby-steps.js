var somme = 0;
for (var i=2; i< process.argv.length; i++){
somme = somme + Number(process.argv[i])
}
console.log(somme);