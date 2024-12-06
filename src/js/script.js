// lista de aptos;
let candidatosValidadosAmpla = [];
let candidatosValidadosFeminino = [];
let candidatosValidadosPCD = [];
let candidatosDesistentes = [];


validarLista(candidatosAmpla, candidatosValidadosAmpla, 'Ampla');
validarLista(candidatosFeminino, candidatosValidadosFeminino, 'Feminino');
validarLista(candidatosPCD, candidatosValidadosPCD, 'PCD');


exibirLista(candidatosValidadosAmpla, '#listagemAmpla');
exibirLista(candidatosValidadosFeminino, '#listagemFeminino');
exibirLista(candidatosValidadosPCD, '#listagemPCD');
exibirLista(candidatosDesistentes, '#listagemDesistentes');


// funcoes;

function validarLista(listaDeCandidados, listaParaSalvarCandidatosValidados, nomeLista) {
  listaDeCandidados.forEach((c, i) => {
    // verificar a situacao do candidado nas fases;

    // para os candidatos apto em tudo;
    if (c.taf === true && c.psi === true && c.fic === true && c.em === true) {
      listaParaSalvarCandidatosValidados.push({ "matricula": c.matricula, "nome": c.nome, "classificacao": i + 1 })
    }
    // para os nao temos informacao;
    else if (c.taf === 'aguardando' && c.psi === 'aguardando' && c.fic === 'aguardando' && c.em === 'aguardando') {
      listaParaSalvarCandidatosValidados.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' })
    }
    // para os que informaram apenas dois;
    else if (c.taf === true && c.psi === true && c.fic === 'aguardando' && c.em === 'aguardando') {
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
        document.querySelector(idLista).innerHTML += `<tr>
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