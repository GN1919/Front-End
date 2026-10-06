var vetor = [9,8,2,1,5,43]

 vetor.sort(function(a, b){ return a - b;});//pq so sort() nao ordena corretamente quando se tem nuemros com 2 digigots,pq ele transforma o vetor em strings 
for(let pos in vetor){
   
    console.log(vetor[pos])
}