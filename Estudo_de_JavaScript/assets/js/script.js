/* Variaveis
let nome = "Júlio" // String
let idade = 23 // Int Number
let logado = true // Boolean
let lista = ["Ovó", "Massa", "Corante"] // Array
let nomeCompleto = {nome: "Julio", idade: 90} // Objeto


let // vc pode mudar os conteudo da variavel que vc criar
var nome = '' // vc pode declarar ela vazia e depopis preencher. 
const nome = '' // vc não conseque motificar o conteudo dentro desta variavel. 
*/

/* Templet String

let nome = "Júlio";
let sobrenome = "César";

let nomeCompleto = `Nome e Sobrenome: ${nome} ${sobrenome}`;

console.log(nomeCompleto);
*/

/* Condicionais

    > maior 
    < menor
    >= meior e igual
    <= menor e igual
    == igual 
    === iqual abisoluta
    && (se) so passa se as duas condicionais vor verdade 
    || (ou) so passa se uma codicional for verdade

*/

/* if else
// Codicional Simples de if else

idade = 18;
if(idade >= 18){
    console.log("E maior de idade");
} else {
    console.log("Não e maior de idade");
}

// Condicionais Dupla de if else

idade = 25
if(idade < 18){
    console.log("menor de idade");
} else if(idade >= 18 && idade < 60){
    console.log("Um adulto");
} else if(idade >= 60){
    console.log("Idoso");
}
*/

/* Condicional Ternário
O operador ternário é uma forma compacta de escrever uma estrutura condicional (if/else) em uma única linha. 
Ele tem a seguinte sintaxe:

    condição ? valorSeVerdadeiro : valorSeFalso;

Como funciona:
    Condição: Uma expressão que é avaliada como true ou false.
    valorSeVerdadeiro: O valor retornado caso a condição seja verdadeira.
    valorSeFalso: O valor retornado caso a condição seja falsa.

    Exemplo: 
    const idade = 20;
    const mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";
    console.log(mensagem); // Saída: "Maior de idade"
*/

/* Swith
O switch é uma estrutura de controle em JavaScript que permite executar diferentes 
blocos de código com base no valor de uma expressão. É útil quando você tem múltiplas 
condições para comparar, tornando o código mais limpo e organizado do que uma série de "if/else if".

Sintaxe: 
    switch (expressão) {
    case valor1:
        // comandos a serem executados se expressão === valor1
        break;
    case valor2:
        // comandos a serem executados se expressão === valor2
        break;
    default:
        // comandos a serem executados se nenhum dos casos for atendido
    }

    expressão: A variável ou valor que será comparado.
    case valor: Cada "case" compara a expressão com um valor específico. Se for igual, 
        o bloco de código associado é executado.
    break: A palavra-chave "break" interrompe a execução do switch após um case correspondente 
        ser executado. Sem o "break", o JavaScript continuará executando os próximos cases 
        (o que se chama "fall-through").
    default: O bloco "default" é opcional e é executado se nenhum dos cases corresponder ao valor da expressão.

    Exemplo:
        let diaDaSemana = 'terça';

        switch (diaDaSemana) {
        case 'segunda':
            console.log('Hoje é segunda-feira.');
            break;
        case 'terça':
            console.log('Hoje é terça-feira.');
            break;
        case 'quarta':
            console.log('Hoje é quarta-feira.');
            break;
        default:
            console.log('Dia não identificado.');
        }
    Neste exemplo, como diaDaSemana é 'terça', o switch executa o bloco associado a esse 
        case e imprime "Hoje é terça-feira.".
*/

/* Função
Uma função é um bloco de código reutilizável que executa uma tarefa ou calcula um valor.
Principais pontos:
    Definição:
    Você define uma função usando a palavra-chave function ou, em sintaxes mais recentes, 
        usando arrow functions (=>).

    Parâmetros:
    Funções podem receber parâmetros, que são valores passados para a função quando ela é chamada.

    Retorno:
    Uma função pode retornar um valor usando a palavra-chave return. Se nenhum valor for retornado, 
        a função retorna undefined por padrão.

// Sintaxe da Função tradicional:
    function nomeDaFuncao(param1, param2, ...) {
        // Corpo da função
        return valor;
    }

// Sintaxe da Arrow function:
    const nomeDaFuncao = (param1, param2, ...) => {
        // Corpo da função
        return valor;
    };
  

    // Exemplo 1, Soma dois numeros
            function soma(n1, n2) {
                let resultado = n1 + n2;
                return(resultado);
            }

            let resultado = soma(10, 5);
            console.log(resultado);

    // Exemplo 2, Verifica se e maior de idade
            function maiorIdade(idade) {
                if(idade >= 18){
                    return true;
                }else {
                    return false;
                }
            }

            let idade = 19;
            let verificacao = maiorIdade(idade); 

            if(verificacao){
                console.log("Maior de idade");
            }else {
                console.log("Menor de idade");
            }
        
    // Exemplo 3, Cauculando a porcentagem
            function porcentagem (numero, numero1){
                return (numero1 / numero) * 100;
            }

            let numero = 40;
            let numero1 = 10;
            let pct = porcentagem(numero, numero1);
            console.log(`${pct}% de ${numero} é ${numero1}`);

    // Exemplo 4, Calculando um imovel
            function calcularImovel(metragem, quarto){
                let m2 = 3000;
                let preco = 0;

                switch(quarto){
                    case 1:
                    default:
                        return preco = metragem * m2;
                        break;
                    case 2: 
                        return preco = metragem * (m2 * 1.2);
                        break;
                    case 3: 
                        return preco = metragem * (m2 * 1.5);
                        break;
                }

                return preco;

            }

            let metragem = 123;
            let quarto = 1;
            let preco = calcularImovel(metragem, quarto);
            console.log(`A casa custa ${preco}`);

    // Exemplo 5: Validar usuario
            function validar(usuario, senha){
                if(usuario === "Julio" && senha == 1234){
                    return true;
                } else {
                    return false;
                }
            }

            let usuario = "Julio";
            let senha = 1234;
            let validacao = validar(usuario, senha);
            if(validacao){
                console.log("Acesso concedido.");
            } else {
                console.log("Acesso negado.");
            }

    Arrow Function

    // Exemplo 1: A soma de dois numeros
            const Soma = (x, y) => {
                return x + y;
            }

            let resultado = Soma(10, 5);
            console.log(resultado);
    
    // Exemplo 2: Colocar o sobrenome  
                const sobrenome = sub => `Júlio ` + sub;

                console.log(sobrenome('César'));

    // Exemplo 3: Outra forma de colocar o sobrenome com Arrow Function
                const sobrenome = (sub) => `Júlio ` + sub;

                console.log(sobrenome('César'));
*/

/* Array 

    let array = [
        'julio',
        'cesar',
        'santos',
        'franco'
    ];

    array.push("Júlio"); // adicionar um item dentro do array
    array.pop(); // excluir o ultimo item do array
    array.shift(); // excluir o primeiro item do array
    console.log(`Total dentro do array: ${array.length}`); // .length informe o total de itens dentro do array 
    console.log(frutas.join(', ')); // .join(', ') edita a forma que aparece na tela, nesta forma ele esta colando uma virgula separando os conteudos do array
    frutas.sort(); //  ordem aufabetica
    frutas.reverse(); // ele reverte, da utima letra do aufabeto para a primeira.
    console.log(array);

    Exemplo: 
        let carros = ['BMW', 'Ferrari', 'Mercedes'];
        let x = 1;
        console.log('1. ' + carros[x]);

        carros[1] = "Audi";
        console.log('2. lista com Audi: ' + carros);

        carros.push("Volvo");
        console.log("3. lista com Volvo " + carros);

        console.log(carros.length);

        ---------------------/////////////////----------////////////////
Ordenando o Array


let frutas = ['Maça', 'Uva', 'Laranja', 'Banana'];

Ordena o array pelo Primeira letra do nome : 

    frutas.sort(); // ordem aufabetica
    frutas.reverse(); // ele reverte, da utima letra do aufabeto para a primeira.

Ordena o array pelo ano: 
        let cars = [
            { brand: 'Fiat', year: 2022},
            { brand: 'Bmw', year: 2018},
            { brand: 'Ferrari', year: 2020}
        ]

Ordena o array pelo ano do menor para o maior:

        cars.sort((a, b) => {
            if(a.year > b.year){
                return 1;
            }else if(b.year < a.year){
                return -1;
            }else {
                return 0;
            }
        });

    Como funciona a função de comparação:
        Se a.year for maior que b.year:
        A função retorna 1, indicando que o objeto a deve ficar depois do objeto b.

        Se a.year for menor que b.year:
        A função retorna -1, indicando que o objeto a deve ficar antes do objeto b.

        Se ambos os anos forem iguais:
        A função retorna 0, mantendo a ordem atual entre esses dois elementos.

Outra froma de ordena do menor para o maior;

        cars.sort((a, b) => a.year - b.year);

        console.log(cars);

    Cálculo da Diferença:
    A expressão a.year - b.year calcula a diferença entre os anos dos dois carros:

        Se o resultado for negativo (ou seja, a.year é menor que b.year), então A ficará antes de B.
        Se o resultado for positivo (ou seja, a.year é maior que b.year), então A ficará depois de B.
        Se o resultado for zero, a ordem dos elementos não muda.

        -------------/////////////------------/////////////////////----------------
Alguns metodos de iteração com o array 


    let frutas = ['Banana', 'Laranja', 'Maça', 'Péra', 'Uva'];

//frutas.filter() // Ele filtra os elementos que vc selecionar.
        Exemplo:
            let bigFrutas = frutas.filter((item) => {
                return item.length > 4;
            }) // neste exemplo ele esta filtrando as frutas que tem mas que 4 caracteteris

//frutas.every() // Retorna true somente se todos os elementos do array atenderem à condição definida.
        Exemplo:
            let ok = frutas.every((value) => {
                return value.length > 3;
            })
            if(ok){
                console.log('Todos são maiores que 3');
            }else {
                console.log("Não são maiores que 3");
            }
        
//frutas.some() // Retorna true se pelo menos um elemento satisfizer a condição especificada.
        Exemplo:
            let okk = frutas.some((value) => {
                return value.length > 3;
            })
            if(okk){
                console.log("Algum item e amior que 3");
            }else{
                console.log("Nenhum item e maior que 3");
            }

//frutas.includes() // Verifica se o array contém um determinado valor e retorna true se encontrar, ou false caso contrário.
        Exemplo:
            if(frutas.includes('Uva')){
                console.log("Tem uva sim!");
            }else{
                console.log("Não tem uva...");
            }
*/

/* Objeto
Em JavaScript, um objeto é uma estrutura que armazena dados na forma de pares chave: valor. 
    Ele permite agrupar informações relacionadas e definir comportamentos por meio de métodos 
    (funções dentro do objeto).

Um objeto é uma estrutura que permite agrupar dados e funcionalidades relacionados em um único item. 
    Cada dado é armazenado como uma propriedade (ou par chave/valor) e as funções associadas a esses 
    dados são chamadas de métodos.
    
        Exemplo de objeto com notação literal:
            const pessoa = {
            nome: "João",
            idade: 30,
            apresentar() {
                console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
            }
            };

            console.log(pessoa.nome);      // Acessa a propriedade "nome": "João"
            pessoa.apresentar();           // Executa o método "apresentar"
        
        Explicação:
            Propriedades: São as variáveis que pertencem ao objeto (por exemplo, nome e idade).
            Métodos: São funções definidas dentro do objeto que podem utilizar suas propriedades (por exemplo, apresentar).
            Notação "this": Dentro dos métodos, this refere-se ao próprio objeto, permitindo acessar suas propriedades.

Exemplo simples: 
        let personagem = {
        nome: "Júlio",
        idade: 23,
        pais: 'Brasil'
        }
        console.log(`Nome ${personagem.nome} idade: ${personagem.idade} Pais: ${personagem.pais}`);

// ! Objeto dentro de um objeto
        let personagem1 = {
            nome: "Júlio",
            idade: 23,
            pais: 'Brasil',
            Olhos: ['preto', 'azul'],
            caracteristica: {
                forca: 20,
                magia: 5,
                stamina: 15
            }
        }
        console.log(`Nome ${personagem.nome} idade: ${personagem.idade} Pais: ${personagem.pais}
            força: ${personagem1.caracteristica.forca}, Magia: ${personagem1.caracteristica.magia},
            stamina: ${personagem1.caracteristica.stamina}`);

// ! Objto > Objeto > Array > Objeto
        let personagem = {
            nome: 'Júlio',
            idade: 23,
            carros: [
                { modelo: 'Fiat', cor: 'preto'},
                { modelo: 'Ferrari', cor: 'vermelho'}
            ]
        }
        console.log(personagem.carros[1].modelo);

// ! Uma função dentro de um Objeto
        let pessoa = {
            nome: 'julio',
            sobrenome: 'cesar',
            idade: 23,
            nomeCompleto: function(){
                return `${this.nome} ${this.sobrenome}`
            }
        }

        console.log(pessoa.nomeCompleto());
*/

/* For 
// O loop for é uma estrutura de repetição que permite executar um bloco de código várias vezes, de maneira controlada.

Sintaxe Básica
        for (inicialização; condição; incremento) {
            // Código a ser executado em cada iteração
        }
    Inicialização: Geralmente usada para definir uma variável de controle (por exemplo, let i = 0).
    Condição: É avaliada antes de cada iteração. Enquanto for verdadeira, o loop continua executando.
    Incremento: Atualiza a variável de controle a cada iteração (por exemplo, i++).

Exemplo Simples
        for ( let inicio = 0; inicio < 10; inicio++ ) {
        console.log(inicio);
        }
    Nesse exemplo, o loop começa com inicio = 0 e repete enquanto inicio for menor que 10, 
        incrementando inicio em 1 a cada iteração.

Exemplo 3 formas de percorrendo um Array
        let cores = [
            { nome: 'preto', qt: 10},
            { nome: 'branco', qt: 5},
            { nome: 'azul', qt: 15}
        ];

        for(let n =0; n = cores.length; lista++){
            console.log(lista[n]);
        } // percorre todo o array e apresenta

        for(let i in cores){
            console.log(cores[i].nome);
        } // Ele pega da chave que neste exemplo e cores

        for(let cor of cores){
            console.log(cor.qt);
        } // Ele armazena todo o conteudo dentro de uma variavel e aprecenta

    Exemplo que posso fazer em todos as 3 formas
        for(let n = 0; n < cores.length; n++){
            console.log(`Nome: ${cores[n].nome}, Quantidade: ${cores[n].qt}`);
        } // consigo fazer em todos estes exemplos desta forma

    

*/

/* While
while é uma estrutura de repetição, que executa um bloco de código enquanto uma condição for verdadeira.
Ele é útil quando não sabemos exatamente quantas vezes o laço deve ser executado e queremos que ele 
continue até que a condição deixe de ser satisfeita.

    Sintaxe Básica
        while (condição) {
        // Código a ser executado enquanto a condição for verdadeira
        }

    Exemplo: 
        let numero = 0;

        while(numero <= 10){
            console.log(`Numero: ${numero}`);
            numero++;
        }
*/

/*//////////// ---------------------- ///////////// --------------------///////////////// */

/* document
document.getElementsByTagName("h1"); // ele pega o h1 do HTML

document.getElementById("teste"); // ele pega do HTML pelo id da tag

document.getElementsByClassName("") // pega do HTML pelo css da tag

document.querySelector("#teste") // pega da mesma forma que no css

document.querySelectorAll("li") // em uma lista ele pega toda a lista
*/

/* Evento 
function clicou(){
    console.log("Clicou no butão");
}

// adicionar um evento na tag.

    let botao = document.querySelector(".botao"); // ele pega o botao e armazena ele. 
    document.addEventListener("click", () => {
        clicou();
    }); // ele adicionol um evento de clique que puchace a função clicou assim 
         que ele clicase no botão. 

Outra forma de fazer isso

    let botao = document.querySelector(".botao");
    document.addEventListener("click", function(){
        clicou();
    })

*/

/* Manipulando Elementos 

Elemento são as tags do HTML, estas são as maneira de alterar pelo javascript.

ul.innerHTML // ele altera o conteudo do elemento
ul.outerHTML // Ele seleciona todo o elemento

function clicou(){
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector('ul');

    ul.innerHTML // ele altera o conteudo do elemento 
    Exemplo ele autera o conteudo do elemento li
    ul.innerHTML = "<li>Item alterado</li>" 

    ul.outerHTML // Ele seleciona todo o elemento
    neste exemplo alterou o elemnto ul pelo satrong
    ul.outerHTML = "<strong>Alterado!</strong>"; 
}
*/

/* Manipulando Elementos Usando appendChild

tem duas formas de adicionar um elemento a primeira e o appendChild a
segunda e o innerHTML. 
    A diferencia entre os dois:
        o innerHTML Atualiza todo o conteúdo interno do elemento ao atribuir uma nova string HTML.
        o appendChild ele adiciona o elemento sem atualizar os outro elementos ao redor.

ul.prepend(newLi) // Ele adiciona um elemento no começo do ul
ul.appendChild(newLi) // Ele ediciona um elemento no final
ul.children[0].append(" (alterado)") // Ele adiciona um texto


function clicou(){
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector('ul');

    let newLi = document.createElement('li');
    newLi.innerText = ("Adicionar elemento.");

    // ul.prepend(newLi);
    // ul.appendChild(newLi);
    ul.children[0].append(" (alterado)")
}

*/

/* Manipulado Elemento usando after e before

before(): Insere o novo elemento antes do elemento selecionado.
after(): Insere o novo elemento depois do elemento selecionado.

e para vc informa na onde vc quer que coloque o elemento criado. 
    neste exemplo vc informa como base o elemento que já esta na tela.
    e depois vc decide se quer depois ou antes deste elemento, que apareça 
    o novo elemento que vc criou. 

        ul.after(newUl);

AFTER = DEPOIS
BEFORE = ANTES

    Exemplo completo:
        function clicou(){
            const teste = document.querySelector("#teste");
            const ul = teste.querySelector('ul');


            let newUl = document.createElement('ul');
            // inserio o elemento depois da ul já existente
            ul.after(newUl);

            for(let i =0; i < 5; i++){
                let newLi = document.createElement("li");
                newLi.innerHTML = 'Item add ' + (i + i);
                newUl.append(newLi);
            }
        }

*/

/* Manipulando atributos

input.getAttribute(); // e para pegar o atributo.
input.hasAttribute(); // e para saber se tem o atributo.
input.setAttribute(); // e para trocar o conteudo do atributo

function clicou(){

    // console.log(input.getAttribute('text')); // e para pegar o atributo.
    // console.log(input.hasAttribute('placeholder')); // e para saber se tem o atributo. 
    // console.log(input.setAttribute('placeholder', 'placeholder alterado')); // e para trocar o conteudo do atributo
    

    const input = document.querySelector('input');
    const botao = document.querySelector('.botao');

    if(input.getAttribute('type') === 'text'){
        input.setAttribute('type', 'password');
        botao.innerText = 'Mostra senha';
    }else {
        input.setAttribute('text', 'text');
        botao.innerText = 'Ocultar senha';
    }
}
*/

/* Manipulando o CSS

function clicou(){
    const li = document.querySelector('li');

    li.style.background = '#00f';
    li.style.fontSize = '20px';
}

*/

/* Manipulando class 
function clicou(){
    const botao = document.querySelector('button');

    // console.log(botao.classList); // Lista todas as class 
    // botao.classList.add('adiciona');
    // botao.classList.remove('adiciona');
    // console.log(botao.classList.contains("botao")); // Verifica se tem a quela class
    // botao.classList.toggle("verde"); // Adiciona assim que clica no botão
    // botao.classList.replace('azul', 'verde'); // ele troca a clase neste exemplo e se tem azul vai para o verde. 
}
*/

/* Verificar quando o usuario aperto na tecla e em qual ele clicou 

Tem duas forma de pegando o usuario clicou na tecla.
A primeira e no HMTL, vc coloca no input pode cer outra tag, vc coloca estes atributos:

        onkeydown="apertou()" onkeypress="segurou()" onkeyup="soltou()" 

    Um Exemplo:
    <input type="text" placeholder="Digite o que quiser" onkeydown="apertou()" onkeypress="segurou()" onkeyup="soltou()" />

    Ai vc pode puxar no javascript desta forma.  
    function apertou(){
        console.log('Apertou');
    }

    function segurou(){
        console.log('Segurou');
    }

    function soltou(){
        console.log('Soltou');
    }

A segunda forma e direto no javascript

    Neste exemplo se vc clicar na tela ele pega se vc clicou ou não.

    document.addEventListener('keydown', apertou);
    document.addEventListener('keypress', segurou);
    document.addEventListener('keyup', soltou);

    function apertou(){
        console.log('Apertou');
    }

    function segurou(){
        console.log('Segurou');
    }

    function soltou(){
        console.log('Soltou');
    }

vc tambem pode fazer assim, Neste exemplo se vc clicar na input ele pega se vc clicou ou não.

    const input = document.querySelector('input');
    input.addEventListener('keyup', soltou);

    function soltou() {
        console.log('Soltou');
    }

// e.code // ele informa qual tecla o usuario esta clicando, ele pega todas as teclas do teclado. 
// e.key // Informa as teclas com menos detales de qual tecla o usuario esta clicando.
// e.shiftKey // Informa se a tecla shift estava precionada quando vc digitou uma letra. 
              // vc pode colocar outra teclas como alt, ctrl, e outros. 

    Exemplo
        const input = document.querySelector('input');
        input.addEventListener('keyup', soltou);

        function soltou(e) {
            console.log(e.code);
        }
*/

/* Exercício 

// Elementos
const input = document.querySelector('input');
const ul = document.querySelector('ul');

// Função
function handleKeyUp(e) {
    // Adicionar um elemento li na lista
    if(e.key === 'Enter'){
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        ul.appendChild(newLi);

        // Limpar o campo de texto
        input.value = '';
    }
}

//Evento
input.addEventListener('keyup', handleKeyUp);

*/

/* //////////////////-------------------------////////-----//////////////////////////----------------// */

/* POO 
- Programação orientada a objetos (POO - OOP)
- Programação Procedural 
- Programação Funcional (PF - FP) (Functional Programing Paradigm)

- CLASSES 
- FUNÇÃO/OBJETOS
*/

/* Contrutor e this 

class Person{
constructor ele serve para inicializar as propriedades do objeto e preparar o estado inicial.
Pontos Importantes
    Inicialização:
    No método constructor, você define as propriedades que deseja associar à nova instância (this.name).
    Execução Automática:
    O constructor é chamado automaticamente quando você utiliza a palavra-chave new para criar uma instância da classe.
    Parâmetros:
    Você pode passar parâmetros para o constructor para personalizar a inicialização do objeto.
    Construtor Padrão:
    Se você não definir um constructor em sua classe, um construtor padrão vazio será utilizado.

    Exemplo: 
    constructor(name, idade){

        This ele esta referenciando o nome da class, ela recebe o nome que o usuario digitou no teclado.

            Exemplo ele esta salvando o nome que o usuario digitou no this.name no ( Person.name ).

                this.name = name; 
                    this.name ele referencia ao nome da class. 
                    = name; ele e referente ao nome que o usuario digitou. 
        
                    this.name = name;
    }
}
*/

/* Estancia
class Person{
    constructor(name, idade){
        this.name = name;
        this.age = idade;
    }
}

pessoa1 e uma estancia que vc conseque enviar as infromação para a class. 
e utilizala como vc esta vendo como console.log a baixo.

let pessoa1 = new Person("Júlio", 20);
let pessoa2 = new Person("Maria", 30);
let pessoa3 = new Person("Janaina", 40); 

console.log(`${pessoa1.name} e ${pessoa1.idade}`);
console.log(`${pessoa2.name} e ${pessoa2.idade}`);
console.log(`${pessoa3.name} e ${pessoa3.idade}`);

*/

/* Action e uma ação

Difinir uma ação para a quela classe, Exemplo quanto vc salvar um dado ele verificar se e maior de idade 
    ou informa que só pode receber numero e bloquear sulva string no lugar de numero. 

E uma função dentro de uma class.

class Person{
    constructor(name){
        this.name = name;
    }

    idade = 0;
    steps = 0;

    Uma ação ele conta a quantidade que o usuario deu. 
    Passos(){
        this.steps++;
    }

    Ação ele verificar se o que o usuario digitou e um numero e informa que só pode digitar numero.
    E verificar se e maior de idade. 

    setIdade(newIdade){
        if(typeof newIdade == 'number' && newIdade >= 18){
            this.idade = newIdade;
            console.log('E maior de idade');
        }else {
            console.log("Só pode digitar numero");
            console.log('Não e maior de idade');
        }
    }
}

let pessoa1 = new Person("Júlio");
let pessoa2 = new Person("Maria");

// Aqui estou puxando (estanciando) a ação e passando o valor para ele, valo 18.
pessoa1.setIdade(18);

// Aqui estou puxando (estanciando) e contatndo os passos 
pessoa1.Passos(); 


console.log(`${pessoa1.name} e ${pessoa1.steps} idade: ${pessoa1.idade}`);
console.log(`${pessoa2.name} e ${pessoa2.steps}`);

*/

/*Getter e Setter 

    Os getters e setters são métodos especiais em JavaScript que permitem controlar o acesso de entrada e saida. 
    sem expor diretamente seus dados internos.

    metodos e literalmente uma função a diferença e que Gettter e saida e Setter e entrada. 

    Gettter: É um método que é chamado quando você tenta acessar uma propriedade. 
        Ele permite "obter" o valor de uma propriedade de forma controlada.
    Setter: Permite atualizar o valor, colocando algumas regras para salva como só pode salvar numero. 

class Person {
    constructor (name, sobrenome){
        this.name = name;
        this.sobrenome = sobrenome; 
    }

    _idade = 0;

    Neste exemplo o Gettter esta acessando o conteudo que esta em idade. 
    get idade(){
        return this._idade;
    }

    Neste exemplo ele esta acessando o conteudo de uma forma modificada mostrando o nome e sobrenome junto.
    get nomeCompleto(){
        return `${this.name} ${this.sobrenome}`;
    }

    Neste exemplo ele esta atualizando a idade e verificando se o usuario esta salvando um numero
    se não estiver ele vai informa para digitar um numero. 
    set idade(x){
        if(typeof x == 'number'){
        this._idade = x;
        } else{
            console.log("Digite um numero");
        }
    }

}

let p1 = new Person('Júlio', 'César') 

p1.idade = 10; aqui esta adicionando um numero

console.log(p1.nomeCompleto); Ele ler o metodo nomeCompleto vai mostrar na tela ( Júlio César )

console.log(`${p1.idade}`); Ele ler o metodo idade ele vai mostra na tela a idade salva ( 10 )
*/

/* Herança 

Herança ela permite reutilizar o codigo. 
Com compartilahção das propriedades e metodos uns com os outros. 
Assim não precisa repetir codigo. 

Exemplo: Neste a class Person esta compartinhando o constructor(name) e o metodo ola.

class Person { 
    age = 0;

    constructor (name){
        this.name = name;
    }

    ola(){
        console.log(`${this.name} diz oi`);
    }
}

class Studante extends Person{ // A qui ele herde as propriedades e metodos da class Person assim se 
                               // tornando class filha do Person. 
    
    constructor (name, id){
        super(name); // aqui ele puxa o nome da class Person
        this.id = id; 
    }

    ola(){ 
     // console.log(`${this.name} Ola`); // Aquie ele esta reinscrevendo o metodo. 
        super.ola(); // Aqui ele puxa o metodo da class Person
    }
}

let p1 = new Studante("Júlio ", 1)

console.log(`${p1.name} id: ${p1.id}`);

p1.ola();

*/

/* Static 
 Static e para definir métodos e propriedades estáticos, que pertencem à própria classe.
vc não vai consequir usar estes metodos e propriedades em outra class só nesta class. 

class Person{

    static hands = 2; // Propriedades estáticos pertencem à classe

    constructor(name){
        this.name = name;
    }

    static Ola(){ // Métodos estáticos são funções que pertencem à classe
        //console.log(`eu tenho ${Person.hands}`); : A unica forma de vc pega o valor que esta em uma propriedade 
    estatic e Person.hands usando o nome da propria class que e dona dele. 
    }
}

let p1 = new Person("Julio"); 

console.log(`${p1.name} tem ${Person.hands}`); // a unica forma de vc pega o valor que esta em uma propriedade 
    estatic e Person.hands usando o nome da propria class que e dona dele. 

*/

/* Factory Method 

é um metodo para vc criar função que peque tudo e junte em um só para ficar mais facil e simples. 

Exemplo
class Person{

    idade = 0; 

    constructor (name){
        this.name = name; 

    }
}

Aquie vc tem um metodo que junta o nome e idade para fazer um cadastro. 
Mais simples e só puchar a função e usar. 

function createPerson(name, idade){ 
    let p = new Person(name);
    p.idade = idade;
    return p;
}

let p1 = createPerson("Júlio", 20);  

console.log(`${p1.name} tem ${p1.idade} anos.`);

*/

/* O HTML do jogo
    <div class="fightarea">
        <div id="char">
            <div class="lifebar">
                <div class="bar" style="width: 10%;"></div>
            </div>
            <strong class="name">--</strong>
            <div>
                <button class="attackButton">Atacar</button>
            </div>
        </div>

        <div id="monster">
            <div class="lifebar">
                <div class="bar" style="width: 10%;"></div>
            </div>
            <strong class="name">--</strong>
            <div>
                <button class="attackButton">Atacar</button>
            </div>
        </div>
    </div>

    <div class="log"></div>

    <script src="./assets/js/classes.js"></script>
    <script src="./assets/js/script.js"></script>
*/

/* Criando um Joquinho 
let log = new Log(document.querySelector('.log'));

let char = new Knight('Julio');
let monster = new BigMonster();

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();

*/

/* Funcional: Factory

function createPerson(name, lastName, age){
    return {
        name,
        lastName,
        age,
        gatFullName(){ 
            return `${this.name} ${this.lastName}`
        }
    }
}

let person1 = createPerson("Julio", 'César', 23);
let person2 = createPerson("Santos", 'Franco', 24);

console.log(person1.name, person1.lastName, person1.age); 
console.log(person1.gatFullName()); // Ação 

*/

/* Funcional Herança

const defaultUser = {
    name: '',
    email: '',
    leval: 1
}

let user1 = {
    ...defaultUser, // Aqui vc já fucha tudo do defaltUser, e vira o filho dele
    name : 'Júlio',
    email: 'JulioCesar@gmail.com'
}

console.log(user1);
*/

/* Funcional Jogo 
const char = createKnight('Júlio');
const monster = createBigMonster();

stage.start (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)

*/

/* O HMLT do jogo Funcional
    <div class="fightarea">
        <div id="char">
            <div class="lifebar">
                <div class="bar" style="width: 10%;"></div>
            </div>
            <strong class="name">--</strong>
            <div>
                <button class="attackButton">Atacar</button>
            </div>
        </div>

        <div id="monster">
            <div class="lifebar">
                <div class="bar" style="width: 10%;"></div>
            </div>
            <strong class="name">--</strong>
            <div>
                <button class="attackButton">Atacar</button>
            </div>
        </div>
    </div>

    <div class="log"></div>

    <script src="./assets/js/functions.js"></script>
    <script src="./assets/js/script.js"></script>

*/

/* ------------//////////////////------------//////////////---------/////////////-------/// */

/* API */

/*Callback 

Callback é uma função callback, ou seja, uma função passada como 
    argumento para ser executada posteriormente, geralmente em 
    resposta a um evento.
Callback é uma função que vc chama para informa para o usuario 
    que finalizou algo, quando enviar um formulario aparecer na 
    tela informando que o formulario foi enviado, ou informando 
    que a senha foi salva, como um alert.  

    Exemplo: 
        function clickCallback(){
        alert("Clique no botãozinho");
        }

        document.querySelector("#botao")
            .addEventListener('click', clickCallback);
    
    Exemplo 2: 
        document.querySelector("#botao")
            .addEventListener('click', 
            () => {alert('Clicou no botãozinho');}
        );
    
*/

/* Requisição em uma API 

// fetch Requisita os dados na API 
// .then Se der certo, processa e usa os dados.
// .catch Se der erro, captura e trata o erro.
// .finally Ele e sempre ejecultado não inporta o resultado, e usando para informa o fim da requisição.

O fetch ele requisita os dados na API
    se deu certo ele entra no .then e informa que deu certo a requisição. 
    mas se deu erro ele entra no .catch e imforma que deu erro na requisição.
    o finally informa um texto informando que foi fializado a requisição
    independente do resultado.


function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts') // Aqui vc coloca um link para acesar o banco de dados.
        .then(response => response.json()) // Converte A resposta e JSON
        .then((response) => { 
            console.log('Requisição deu certo'); // Exibe os dados no console
        })
        .catch((data) => {
            console.log('Requisição deu erro'); // Exibe o erro
        });
        .finally(() => {
            alert("Finalizou a requisição");
        })
        
}

document.querySelector('#botao')
    .addEventListener('click', clicou); 

*/

/* Requsição em tempo real pelo navegador

    vc conseque ver toda a requisição acontecer na hora pelo
    navegador, em inspecionar na mesma linha do console tem network
    nele vai opção de fetch/XHR vc seleciona e conseque ver,
    no navegador do Crome vc conseque ver em outro navegadores. 

function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(`Primeiro post: ${json[0].title}`);
        })
        .catch(date => console.log('deu erro'))
}

document.querySelector('#botao').addEventListener('click', clicou);

*/

/* Metodos de Requisição > GET, PORT, PUT, PATCH, DELETE 

    GET Buscar dados no servidor. (Não altera nada)
    PORT Criar um novo recurso no servidor.
    PUT Atualizar um recurso existente (substitui tudo).
    DELETE Remover um recurso no servidor.
    PATCH Atualiza apenas os campos enviados.

        method > e para vc informa o tipo da requisição
        header >  Informa ao servidor o tipo de dados que está sendo enviado.
            Content-Type > Especifica o formato dos dados no body (no caso, JSON).
        body > Contém os dados a serem enviados na requisição.
            JSON.stringify(...) > Converte um objeto JavaScript para o formato JSON (string).

    Exeplos: 

// 1️⃣ GET: Buscar todos os posts se vc não colocar um method: '' ele altomaticomente ele vira GET
        function buscar() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((json) => {
                    console.log("GET - Primeiro posts:", json[0]);
                })
                .catch((error) => {
                    console.log("GET - Erro:", error)
                })
                .finally(() => {
                    console.log('Requisição get finalizado');
                })
        }
        document.querySelector('#buscar').addEventListener('click', buscar);


// 2️⃣ POST: Inserir um novo post
        function inserir(){
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: 'Titulo de teste',
                    body: 'Corpo de teste',
                    userId: 2
                })
            })
            .then((response) => response.json())
            .then((json) => {
                console.log("POST - Novo post:", json);
            })
            .catch((error) => console.error("POST - Erro:", error));
        }
        document.querySelector('#inserir').addEventListener('click', inserir);


// 3️⃣ PUT: Atualizar um post (exemplo: post com id 1)
        function atualizar(){
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: 'Título atualizado',
                    body: 'Corpo atualizado',
                    userId: 2
                })
            })
            .then((response) => response.json())
            .then((json) => {
                console.log("PUT - Post atualizado:", json);
            })
            .catch((error) => console.error("PUT - Erro:", error));
        }
        document.querySelector('#atualizar').addEventListener('click', atualizar);

// 4️⃣ PATCH - Atualiza parcialmente um post (exemplo: post com id 1)
        function atualizarParcialmentePost() {
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: 'Título parcialmente atualizado'
                })
            })
            .then(response => response.json())
            .then(json => console.log('Title atualizado so poste:', json))
            .catch(error => console.error('Erro na atualização do poste:', error));
        }
        document.querySelector('#atualizarParcialmentePost').addEventListener('click', atualizarParcialmentePost);

// 5️⃣ DELETE: Remover um post (exemplo: post com id 1)
        function remover(){
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'DELETE'
            })
            .then((response) => {
                console.log("DELETE - Post removido com sucesso!");
            })
            .catch((error) => console.error("DELETE - Erro:", error));
        }
        document.querySelector('#remover').addEventListener('click', remover);

*/

/* Requisição com async e await mais fácil e simples

    async Define uma função assíncrona que pode usar await.
        o async e para inializar a função, sem ele o await
        não funciona. 
    await Espera a resolução de uma Promise, tornando o código mais legível.
        ele esperar a resposta para continuar o codigo, sem a resposta ele da error. 
    try...catch Captura e trata erros dentro da função assíncrona.
        ele tem a mesma estrutura if/else o try ele verificar se deu certo a requisição
        se não deu certo ele passa para o catch que deu erro, se não deu error ele cotinua 
        o código.
    
        Exemplo: 
            async function buscarDados() {
                try {
                    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Faz a requisição
                    let data = await response.json(); // Converte para JSON
                    console.log('Dados recebidos:', data); // Exibe os dados no console
                } catch (error) {
                    console.log('Erro na requisição:', error); // Captura e exibe o erro
                }
            }
            document.querySelector('#buscar').addEventListener('click', buscarDados);

        Exemplo 2:
            async function clicou() {
                try {
                    let response = await fetch('https://jsonplaceholder.typicode.com/po1sts')
                    let json = await response.json();
                    console.log(`Titulo do primeiro post: ${json[0].title}`);
                } catch (error) {
                    console.log('Erro na requisição:', error);
                }
                alert("CLICOU!");
            }
            document.querySelector('#buscar').addEventListener('click', clicou);

        Exemplo 3: POST
            async function inserir(){
                try {
                let response = await fetch(
                    'https://jsonplaceholder.typicode.com/posts', 
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            title: 'Titulo de teste',
                            body: 'Corpo de teste',
                            userId: 2
                        })
                    });
                    let json = await response.json();
                    console.log('Novo post', json);
                } catch(error){
                    console.log("Erro na requisição");
                }
            }
            document.querySelector('#inserir').addEventListener('click', inserir);
*/

/*Exercicios de Inserir um post 
async function readPosts() {
    let postArea = document.querySelector('.post');
    postArea.innerHTML = 'Carregando...';

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    if(json.length > 0){
        postArea.innerHTML = '';

        for(let i in json){
            let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}<hr/></div>`;
            postArea.innerHTML += postHtml;
        }
    } else {
        postArea.innerHTML = 'Nenhum post para exibir';
    }
}


async function addNewPost(title, body) {
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 2
            })
        }
    );

    document.querySelector('#titleField').value = '';
    document.querySelector('#bodyField').value = '';

    readPosts();
}

document.querySelector('#insertButton').addEventListener('click', () => {
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;

    if(title && body){
        addNewPost(title, body);
    } else {
        alert("Preencha todos os campos"); 
    }
});

readPosts();

// Trecho do HTML

<h1>Blog Fake</h1>

   <fieldset>
    <legend>Inserir um novo post</legend>

    <div>
        <input id="titleField" type="text" placeholder="Titulo do post">
    </div>
    <div>
        <textarea id="bodyField"></textarea>
    </div>
    <div>
        <button id="insertButton">Inserir</button>
    </div>
   </fieldset>

   <div class="post"></div>

    <script src="./assets/js/script.js"></script>

*/

/* Métodos String
let nome = 'Julio Cesar Santos Franco';

// let resultado = nome.length; e para verificar quantas caracteris foram digitados e pega também o espasamento
// let resultado = nome.indexOf('a') e para informa a posição das letras, palavras formadas e espaçamento do texto, 
    //mas e bem usado para pesquisar se uma letra ou uma palavra tem na quele texto.  
// let resultado = nome.slice(0, 10); e para pegar os caracteris pelo pasoção dele. 
// let resultado = nome.substring(-5, -10); vc conseque pegar o caracteris pela posição, colocar um numero negativo vc pega de tras para frente o caracteris. 

// let resultado = nome.replace('Julio', 'Franco'); // ele muda o nome no texto, neste exemplo eu mudei o Julio para o Franco. 
// let resultado = nome.toUpperCase(); // Coloca o texto todo em maiusculo.
// let resultado = nome.toLowerCase(); // Coloca o texto todo em minusculo. 
// let resultado = nome.trim(); // ele retira o espaços no inicio e fim da string.
        // Retira o espaço no meio do texto
//const regex = /\s{2,}/g; // Significa "dois ou mais espaços em branco".E o g Substitui todos os espaços extras encontrados na string. 
//let resultado = nome.trim().replace(regex, " "); // retira o espaço no meio da string do texto. 

// let resultado = nome.charAt(3); // ele informa o caracteris pela posição.
// let resultado = nome.split(' '); // ele transforma em array o texto dividindo pelo espaço entre o texto. 

console.log(resultado);

*/

/* Métodos Number
let n = 10;

// let res = n.toString(); // Converte um número para string.
// let res = n.toFixed(2) // arredonda para duas casas decimais, se quiser mas casa e só mudar o 2 dentro das ().
// let res = parseInt(n); // Converte para número inteiro.
// let res = parseFloat(n); // Converte para número decimal (ponto flutuante)
console.log(res);
*/

/* Métodos de Arrays

let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];
let lista2 = ['Prato', 'Liquidificador', 'Forno'];
let lista = [45, 9, 16, 25];


let res = lista.toString(); // Converte o Array em uma string.
let res = lista.join('-'); // Junta os elementos em uma string, separando por um caractere específico, que vc colocar dentro do ().
let res = lista.indexOf('Farinha'); // Retorna a posição de um item no array. Se o item não for encontrado, retorna -1.

lista.pop(); // Remove o último item do array.
lista.shift(); // Remove o primeiro item do array.
lista.push('Prato'); // Adiciona um item no final do array.
lista[0] = 'Ovos'; // esta alterando o promeiro item selecionando ele diretamente

lista.splice(1, 1); // Remove, o primeiro numero e a Posição onde a alteração começa, e o segundo a quantidade de Números de elementos a serem removidos a parte da posição.
let res = lista.concat(lista2); // Juntar Dois Arrays, não altera os arrays originais, ele cria um novo array com os valores combinados.
lista.sort(); // Ordenar em Ordem Alfabética.
lista.reverse(); // ele Inverter  o array esta em ordem alfabetica agoara esta ao contrario da ordem Alfabética.


let lista2 = [];

// O map ele esta percorrendo todo o array, pegando cada numero e multiplicando e armazenando no lista2.
lista2 = lista.map(function(item) {
    return item * 2
})

// O filter ele esta filtra os item neste exemplo que esta selecionando os item que são maiores que 20. 
lista2 = lista.filter(function(item){
    if(item > 20){
        return true;
    }else {
        return false;
    }
    
    // simplificando o if/else, mas simples.
    return (item > 20)? true : false;
});

// O every() só retorna true se TODOS os itens passarem na condição, Se um único item falhar, ele retorna false.
lista2 = lista.every(function(item){
    if(item > 20){
        return true;
    }else {
        return false;
    }
    
    // simplificando o if/else, mas simples. 
    return (item > 10)? true : false;
})

// O some() retorna true se PELO MENOS UM item passar na condição, se nenhum item atender à condição, ele retorna false.
lista2 = lista.some(function(item){
    if(item > 20){
        return true;
    }else {
        return false;
    }

    // simplificando o if/else, mas simples. 
    return (item > 10)? true : false;
})


let lista = [45, 9, 16, 25];
let lista2 = [];

// find esta buscando o item no array, se o item não for encontrado, retorna undefined. 
lista2 = lista.find(function(item){
   return (item == 16)? true : false;
});

    // Outro exemplo
    let listaDePessoas = [
        {id:1, nome:'Julio', sobrenome:'Cesar'},
        {id:2, nome:'Paulo', sobrenome:'F'},
        {id:3, nome:'Fulano', sobrenome:'S'}
    ]

    let pessoa = listaDePessoas.find(function(item){
        return (item.nome == 'Fulano') ? true : false;
    });

    let resultado = pessoa;
    console.log(resultado);

// ele esta buscando a posição do array que esta aquele item, se o item não for encontrado, retorna -1.
lista2 = lista.findIndex(function(item){
    return (item == 16)? true : false;
});

let res = lista2;

console.log(res);

*/

let d = new Date();

// console.log(d.toDateString());
// console.log(d.toUTCString());
// let novoValor = d.getFullYear(); // retorna o ano
// let novoValor = d.getMonth(); // retor na o mês, no javaScript a contagem do mês começa com 0 então janeiro e 0.
// let novoValor = d.getDay(); // Retorna o dia da semana, semana no javaScript começa no domingo e com numero 0. 
// let novoValor = d.getDate(); // Retorna o dia do mês
// let novoValor = d.getHours(); // retorna a hora
// let novoValor = d.getMinutes(); // Retorna os munitos
// let novoValor = d.getSeconds(); // retorna os segundos
// let novoValor = d.getMilliseconds(); // Retorna os milisegundos

d.setDate(d.getDate() + 3);

let novoValor = d;
console.log( novoValor );


