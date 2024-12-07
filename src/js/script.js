const total = document.querySelector('#total');
const totalAptos = document.querySelector('#totalAptos');
const totalSemStatus = document.querySelector('#totalSemStatus');
const totalIinaptos = document.querySelector('#totalInaptos');


// lista de aptos;
let candidatosValidadosAmpla = [];
let candidatosValidadosFeminino = [];
let candidatosValidadosPCD = [];
let candidatosDesistentes = [];

let informaramAptoEmTudo = 0;

validarLista(candidatosAmpla, candidatosValidadosAmpla, 'Ampla');
validarLista(candidatosFeminino, candidatosValidadosFeminino, 'Feminino');
validarLista(candidatosPCD, candidatosValidadosPCD, 'PCD');


exibirLista(candidatosValidadosAmpla, '#listagemAmpla');
exibirLista(candidatosValidadosFeminino, '#listagemFeminino');
exibirLista(candidatosValidadosPCD, '#listagemPCD');
exibirLista(candidatosDesistentes, '#listagemDesistentes');

// resumo das quantidades...;
const totalCandidatos = candidatosValidadosAmpla.length + candidatosValidadosFeminino.length + candidatosValidadosPCD.length;

total.textContent = totalCandidatos;
totalAptos.textContent = informaramAptoEmTudo;
totalSemStatus.textContent = totalCandidatos - informaramAptoEmTudo;
totalIinaptos.textContent = candidatosDesistentes.length;


// funcoes;

function validarLista(listaDeCandidados, listaParaSalvarCandidatosValidados, nomeLista) {
  listaDeCandidados.forEach((c, i) => {
    // verificar a situacao do candidado nas fases;

    // apto em tudo;
    if (c.taf === true && c.psi === true && c.fic === true && c.em === true) {
      listaParaSalvarCandidatosValidados.push({ "matricula": c.matricula, "nome": c.nome, "classificacao": i + 1 })
      // contador de aptos
      informaramAptoEmTudo++;
    }
    // sem informacao;
    else if (c.taf === 'aguardando' && c.psi === 'aguardando' && c.fic === 'aguardando' && c.em === 'aguardando') {
      listaParaSalvarCandidatosValidados.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' })
    }

    // apto no taf e aguardando;
    else if (c.taf === true && c.psi === 'aguardando' && c.fic === 'aguardando' && c.em === 'aguardando') {
      listaParaSalvarCandidatosValidados.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' });
    }
    // apto no taf e no psi e aguardando;
    else if (c.taf === true && c.psi === true && c.fic === 'aguardando' && c.em === 'aguardando') {
      listaParaSalvarCandidatosValidados.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' });
    }
    // apto no taf, psi, fic e aguardando;
    else if (c.taf === true && c.psi === true && c.fic === true && c.em === 'aguardando') {
      listaParaSalvarCandidatosValidados.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' });
    }
    
    
    // inapto no taf e apto no psi
    else if (c.taf === false && c.psi === true && c.fic === 'aguardando' && c.em === 'aguardando') {
      listaParaSalvarCandidatosValidados.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' });
    }
    // inapto no taf e apto no psi
    else if (c.taf === true && c.psi === false && c.fic === 'aguardando' && c.em === 'aguardando') {
      listaParaSalvarCandidatosValidados.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' });
    }


    // inapto so no psi
    else if (c.taf === true && c.psi === false && c.fic === true && c.em === true) {
      listaParaSalvarCandidatosValidados.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' });
    }
    // inapto so na fic
    else if (c.taf === true && c.psi === true && c.fic === false && c.em === true) {
      listaParaSalvarCandidatosValidados.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' });
    }
    // inapto so nos exames medicos
    else if (c.taf === true && c.psi === true && c.fic === true && c.em === false) {
      listaParaSalvarCandidatosValidados.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' });
    }
    // para os que desistiram nos dois;
    else if (c.taf === false && c.psi === false) {
      candidatosDesistentes.push({ "matricula": c.matricula, "nome": c.nome, "classificacao": i + 1, lista: nomeLista });
    }
  });
}

function exibirLista(lista, idLista) {
  // com informacoes incompletas;
  lista.forEach((c, i) => {
    if (c.matricula === '-------') {
      document.querySelector(idLista).innerHTML += `<tr class='aguardando'>
                    <td class="center">${i+1}º</td>
                    <td class="center">${c.matricula}</td>
                    <td class="capitalize center">${c.nome.toLowerCase()}</td>
                    <td class="center">${c.classificacao}º</td>
                  </tr>`;
    }
    // os aptos em tudo;
    else {
      // verificar se o candidato esta sendo da lista dos desistentes;
      // se for, ele sera encaminhado para a lista ux com o nome de sua lista;
      if (lista === candidatosDesistentes) {
        document.querySelector(idLista).innerHTML += `<tr class='desistente'>
                <td class="center">${i+1}º</td>
                <td class="center">${c.matricula}</td>
                <td class="capitalize center">${c.nome.toLowerCase()}  ‐ ${c.lista}</td>
                <td class="center">${c.classificacao}º</td>
              </tr>`;
      } else {
        document.querySelector(idLista).innerHTML += `<tr>
                <td class="center">${i+1}º</td>
                <td class="center">${c.matricula}</td>
                <td class="capitalize center">${c.nome.toLowerCase()} </td>
                <td class="center">${c.classificacao}º</td>
              </tr>`;
      }
    }
  });
}



// fim;