const btn = document.querySelector('.btn');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const lista1 = document.querySelector('#lista1');
const lista2 = document.querySelector('#lista2');
btn.addEventListener('click', mostra_horarios);

function mostra_horarios(){
    lista1.innerHTML = '';
    lista2.innerHTML = '';
    let dataAtual = new Date();
    let diaAtual = dataAtual.getDate();
    let listaHorarios1 = [];
    let listaHorarios2 = [];

    let intervalo;

    if(26 <= diaAtual <= 30){
        intervalo = 4.00
    }else if(31 <= diaAtual <= 4){
        intervalo = 6.00
    }else if(5 <= diaAtual <= 9){
        intervalo = 8.00
    }else if(10 <= diaAtual <= 14){
        intervalo = 12.00
    }else if(15 <= diaAtual <= 19){
        intervalo = 24.00
    };

    let horarioBase1 = Number(input1.value);
    let horarioBase2 = Number(input2.value);

    let horarioFloat1 = horarioBase1;
    while(horarioFloat1 <= 24.00){
        listaHorarios1.push(horarioFloat1);
        horarioFloat1 = horarioFloat1 + intervalo;
    };

    let horarioFloat2 = horarioBase2;
    while(horarioFloat2 < 24.00){
        listaHorarios2.push(horarioFloat2);
        horarioFloat2 = horarioFloat2 + 8.00;
    };

    for(let i = 0; i < listaHorarios1.length; i++){
        let li = document.createElement('li');
        let horarioAtual = listaHorarios1[i].toFixed(2);
        let horarioLista = horarioAtual.split('.');
        li.textContent = `${horarioLista[0]}:${horarioLista[1]}h`
        lista1.appendChild(li);
    };

    for(let i = 0; i < listaHorarios2.length; i++){
        let li = document.createElement('li');
        let horarioAtual = listaHorarios2[i].toFixed(2);
        let horarioLista = horarioAtual.split('.');
        li.textContent = `${horarioLista[0]}:${horarioLista[1]}h`
        lista2.appendChild(li);
    };
};
