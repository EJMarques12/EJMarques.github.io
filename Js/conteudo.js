var conteudo = document.querySelector('body');
       conteudo.innerHTML = `<div id="conteudo">

       </div>`;
       var c = document.querySelector('div#conteudo');
        c.innerHTML = `<h1>Calculadora</h1>
       <p>Primeiro Número: </p>
        <p><input type='number' id='n1'></p>
       Digite a operação {Operações válidas: +, -, /, *}
       <p><input type='text' id='oper'></p>
       <p>Segundo Número: </p>
       <p><input type='number' id='n2'></p>
       <input type='button' value='Calcular' id='calc'>`;
       var btnSoma = document.querySelector('input#calc');
       btnSoma.addEventListener('click',operacao);
       
       function operacao(){
           var op = document.querySelector('input#oper');
           var n1 = document.querySelector('input#n1');
           var n2 = document.querySelector('input#n2');
           if(String(n1.value)!= '' || String(n2.value)!='' || String(op.value)!=''){
            var res
            if(op.value == '+'){
                    res = Number(n1.value) + Number(n2.value);
                    c.innerHTML+= `<p>${Number(n1.value)} ${String(op.value)} ${Number(n2.value)} = ${res}</p>`;
                }else if(op.value == '*'){
                    res = Number(n1.value) * Number(n2.value);
                    c.innerHTML+= `<p>${Number(n1.value)} ${String(op.value)} ${Number(n2.value)} = ${res}</p>`;
                }else if(op.value == '-'){
                    res = Number(n1.value) - Number(n2.value);
                    c.innerHTML+= `<p>${Number(n1.value)} ${String(op.value)} ${Number(n2.value)} = ${res}</p>`;
                }else if(op.value == '/'){
                    if(Number(n2.value) != 0 ){
                        res = Number(n1.value) / Number(n2.value);
                        c.innerHTML+= `<p>${Number(n1.value)} ${String(op.value)} ${Number(n2.value)} = ${res}</p>`;
                    }else{
                        window.alert('Divisão por 0 inválida');
                    }
                }
            }else{
                window.alert('Todos campos são obrigatórios');
            }
            
       } 
