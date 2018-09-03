btnNewQuiz = document.getElementById("btnNewQuiz");
questions = document.getElementById("questions");
scores = document.getElementById("scores");


PageTxt = document.getElementById("questionsTxt");
content = document.getElementById("content");
missAnswer = document.getElementById("missAnswer");
showResult = document.getElementById("showResult");

i = 1;
q = 1;
answer = [1,2,3];
result = [];
function validaEGrava(numberOfQuestion){

    missAnswer.style.display = "none";
    showResult.style.display = "none";
    var numberQ = 1;
    var isChecked = false;
    var checked = 0;


    switch (numberOfQuestion){

        case 1:
            var numberQ = 1;
            var isChecked = false;
            var checked = 0;
            while(document.getElementById(`q${numberQ}`)){
                if(document.getElementById(`q${numberQ}`).checked == true){
                    isChecked = true;
                    break;
                }
                numberQ++;
            }
            if(isChecked){
                i++;
                q++;
                if(numberQ == answer[0]){
                    result.push(true);
                }else{
                    result.push(false);
                }
                questao2();
            }else{
                missAnswer.style.display = "block";
            }
            break;

        case 2:
            var numberQ = 1;
            var isChecked = false;
            var checked = 0;
            while(document.getElementById(`q${numberQ}`)){
                if(document.getElementById(`q${numberQ}`).checked == true){
                    isChecked = true;
                    break;
                }
                numberQ++;
            }
            if(isChecked){
                i++;
                q++;
                if(numberQ == answer[1]){
                    result.push(true);
                }else{
                    result.push(false);
                }
                questao3();
            }else{
                missAnswer.style.display = "block";
            }   
            break;

        case 3:
            var numberQ = 1;
            var isChecked = false;
            var checked = 0;
            while(document.getElementById(`q${numberQ}`)){
                if(document.getElementById(`q${numberQ}`).checked == true){
                    isChecked = true;
                    break;
                }
                numberQ++;
            }
            if(isChecked){
                i++;
                q++;
                if(numberQ == answer[2]){
                    result.push(true);
                }else{
                    result.push(false);
                }
                PageTxt.style.display = "none";
                content.style.display = "none";

                if(result[0])
                    var r1 = "&#10003;";
                else 
                    var r1 = "&#10007;";

                if(result[1])
                    var r2 = "&#10003;";
                else 
                    var r2 = "&#10007;";

                if(result[2])
                    var r3 = "&#10003;";
                else 
                    var r3 = "&#10007;";
                showResult.innerHTML = 
                `
                    <ul>
                        <li>Questão 1)`+r1+` </li>`+`
                        <li>Questão 2)`+r2+`</li>
                        <li>Questão 3)`+r3+`</li>
                    </ul>
                `;
                showResult.style.display = "block";
            }else{
                missAnswer.style.display = "block";
            }   
            break;
       
    }
}


function questao1(){
    PageTxt.innerHTML = `Página ${i}`;
    content.innerHTML =
        `
        <p>Questão ${q})</p>
        <p>O que signfica <b>HTML</b> ?</p>
        <p>
            <input type="radio" id="q1" name="choseAQuestion"> HyperText Markup Language
        </p>
        <p>
            <input type="radio" id="q2" name="choseAQuestion"> HyperText Manager Language
        </p>
        <p>
            <input type="radio" id="q3" name="choseAQuestion"> HyperText Manager Lexical
        </p>
        <button class="button score" onClick="validaEGrava(1)">Próxima</button>
        `;
}

function questao2(){
    PageTxt.innerHTML = `Página ${i}`;
    content.innerHTML =
        `
        <p>Questão ${q})</p>
        <p><b>HTML</b> é considerado uma linguagem de :</p>
        <p>
            <input type="radio" id="q1" name="choseAQuestion"> Programação
        </p>
        <p>
            <input type="radio" id="q2" name="choseAQuestion"> Marcação
        </p>
        <p>
            <input type="radio" id="q3" name="choseAQuestion"> Texto
        </p>
        <button class="button score" onClick="validaEGrava(2)">Próxima</button>        
        `;
}

function questao3(){
    PageTxt.innerHTML = `Página ${i}`;
    content.innerHTML =
        `
        <p>Questão ${q})</p>
        <p>Quem criou o <b>HTML</b> ?</p>
        <p>
            <input type="radio" id="q1" name="choseAQuestion"> Håkon Wium Lie
        </p>
        <p>
            <input type="radio" id="q2" name="choseAQuestion"> Alan Turing
        </p>
        <p>
            <input type="radio" id="q3" name="choseAQuestion"> Tim Berners-Lee
        </p>
        <button class="button new" onClick="validaEGrava(3)">Concluir</button>
        `;
}


btnNewQuiz.onclick = function(){
    i = 1;
    q= 1;
    result = [];
    showResult.style.display = "none";
    content.style.display = "block";
    PageTxt.style.display = "block";
    questions.style.display = "block";  
    questao1();


}

