var palavraSecreta;
var listaPalavra;
var acertou;
var fase;
var letraDescoberta;


function iniciar(){ 
        acertou=0;
        fase=0;
        palavraSecreta =  localStorage.getItem('valueText'); 
        letraDescoberta=palavraSecreta
        listaPalavra=document.getElementById('palavraSecreta');      
        for(var i=0;i<palavraSecreta.length;i++){
            var letras=document.createElement('li');
            letras.textContent='*';
            listaPalavra.appendChild(letras);
        } 
                
 }

function verificarLetra(){
    var errou=0;
    var imagem=document.querySelector("#imagem");
    var entradaTentativa=document.getElementById('letra');
    tentativa=entradaTentativa.value;
    if(tentativa.length>1||tentativa==''){
        alert("Escolha exatamente uma letra.\nNão é permitido campo vazio ou com mais de uma letra.");
    }else{
        var linhas = listaPalavra.getElementsByTagName("li");
        for(var j=0;j<palavraSecreta.length;j++){
            if(tentativa===palavraSecreta[j]){
                if(letraDescoberta[j]!='*'){
                    acertou++;
                    linhas[j].textContent=tentativa;
                    letraDescoberta=letraDescoberta.replace(tentativa,'*');
                }else{
                    alert('A letra digitada já foi descoberta!!')
                }
            }else{
                errou++;
            }
        }
        if(acertou==palavraSecreta.length){
            var escolha=document.querySelector('#escolha');
            var letra=document.querySelector('#letra');
            var verificar=document.querySelector('#verificar');
            var div=document.querySelector('#fimJogo');
            var link=document.createElement('a');
            link.textContent='jogar novamente';
            link.setAttribute('href','./index.html');
            link.setAttribute('class','btn');
            div.appendChild(link);
            escolha.textContent='Parabéns!!! Você descobriu a palavra secreta.';
            verificar.setAttribute('type','hidden');
            letra.setAttribute('type','hidden');
        }else{
            if(errou==palavraSecreta.length){
                fase++;
                switch(fase){
                    case 1:{
                        imagem.setAttribute('src',"./imagensForca/cabeca.gif");
                        break;
                    }
                    case 2:{
                        imagem.setAttribute('src',"./imagensForca/cabeca_corpo.gif");
                        break;
                    }
                    case 3:{
                        imagem.setAttribute('src',"./imagensForca/cabeca_corpo_bdir.gif");
                        break;
                    }
                    case 4:{
                        imagem.setAttribute('src',"./imagensForca/cabeca_corpo_bdir_besq.gif");
                        break;
                    }
                    case 5:{
                        imagem.setAttribute('src',"./imagensForca/cabeca_corpo_bdir_besq_pdir.gif");
                        break;
                    }
                    case 6:{
                        imagem.setAttribute('src',"./imagensForca/cabeca_corpo_bdir_besq_pdir_pesq.gif");
                        var escolha=document.querySelector('#escolha');
                        var letra=document.querySelector('#letra');
                        var verificar=document.querySelector('#verificar');
                        var div=document.querySelector('#fimJogo');
                        var link=document.createElement('a');
                        link.textContent='jogar novamente';
                        link.setAttribute('href','./index.html');
                        link.setAttribute('class','btn');
                        div.appendChild(link);
                        escolha.textContent='Voce foi enforcado. A palavra secreta é:';
                        verificar.setAttribute('type','hidden');
                        letra.setAttribute('type','hidden');
                        for(var j=0;j<palavraSecreta.length;j++){
                                linhas[j].textContent=palavraSecreta[j];
                            }
                    }          
                }
            }
        }
    }
    entradaTentativa.value='';
}