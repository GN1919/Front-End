var vetor = [1,2,3,4];

vetor.push(5,6);
for(let pos in vetor){ //para cada posicao na varaiavel vetor  irei mostrar o elmenos nesta mesma posicao
    console.log('na posicao ' +  [pos] + ' temos ' + vetor[pos])
}

vetor.sort();
