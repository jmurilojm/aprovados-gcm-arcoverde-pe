// lista de aptos;
let candidatosAptosAmpla = [];
let candidatosAptosFeminino = [];
let candidatosAptosPCD = [];



validacao(candidatosAmpla, candidatosAptosAmpla);
validacao(candidatosFeminino, candidatosAptosFeminino);
validacao(candidatosPCD, candidatosAptosPCD);

exibirLista(candidatosAptosAmpla, '#listagemAmpla');
exibirLista(candidatosAptosFeminino, '#listagemFeminino');
exibirLista(candidatosAptosPCD, '#listagemPCD');



// funcoes;

function validacao(listaDeCandidados, listaParaSalvarCandidatosValidados) {
  listaDeCandidados.forEach((c, i) => {
    // verificar a situacao do candidado nas fases;
    if (c.taf === true && c.psi === true && c.fic === true && c.em === true) {
      listaParaSalvarCandidatosValidados.push({ "matricula": c.matricula, "nome": c.nome, "classificacao": i + 1 })
    } else if (c.taf === 'aguardando' && c.psi === 'aguardando' && c.fic === 'aguardando' && c.em === 'aguardando') {
      listaParaSalvarCandidatosValidados.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' })
    } else if (c.taf === 'aguardando' && c.psi === 'aguardando' && c.fic === 'aguardando' && c.em === 'aguardando') {
      listaParaSalvarCandidatosValidados.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' })
    } else if (c.taf === true && c.psi === true && c.fic === 'aguardando' && c.em === 'aguardando') {
      listaParaSalvarCandidatosValidados.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' });
    }
  });
}

function exibirLista(lista, idLista) {
  lista.forEach((c, i) => {
    if (c.matricula === '-------') {
      document.querySelector(idLista).innerHTML += `<tr class='aguardando'>
                    <td class="center">${i+1}º</td>
                    <td class="center">${c.matricula}</td>
                    <td class="capitalize center">${c.nome.toLowerCase()}</td>
                    <td class="center">${c.classificacao}º</td>
                  </tr>`;
    } else {
      document.querySelector(idLista).innerHTML += `<tr>
                <td class="center">${i+1}º</td>
                <td class="center">${c.matricula}</td>
                <td class="capitalize center">${c.nome.toLowerCase()}</td>
                <td class="center">${c.classificacao}º</td>
              </tr>`;
    }
  });
}



// fim;