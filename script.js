/*Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:
*/

let students = [
    {
        name: "Lucas",
        noteOne: 7,
        noteTwo: 8,
    },
    {
        name: "Gisele",
        noteOne: 7,
        noteTwo: 9,
    },
    {
        name: "Amanda",
        noteOne: 7,
        noteTwo: 10,
    },
    {
        name: "Matheus",
        noteOne: 7,
        noteTwo: 5,
    }
]

function media(n1,n2){
    let media = (n1+n2)/2
    return media
}

for( let student in students){
    let notas = media(students[student].noteOne,students[student].noteTwo)
    if(notas >= 7){
        alert(`Parabéns ${students[student].name} você esta aprovado com média de ${notas}`)
    }else{
        alert(`Infelizmente sua média foi de ${notas} e você não foi aprovado no concurso ${students[student].name}`)
    }
}


