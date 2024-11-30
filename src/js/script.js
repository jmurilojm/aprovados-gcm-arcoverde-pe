// lista de aptos;
let candidatosAptosAmpla = [];
let candidatosAptosFeminino = [];
let candidatosAptosPCD = [];



// analisando os candidatos;


// ampla;
candidatosAmpla.forEach((c, i) => {
  // verificar a situacao do candidado nas fases;
  if (c.taf === true && c.psi === true && c.fic === true && c.em === true) {
    candidatosAptosAmpla.push({ "matricula": c.matricula, "nome": c.nome, "classificacao": i + 1 })
  } else if (c.taf === 'aguardando' && c.psi === 'aguardando' && c.fic === 'aguardando' && c.em === 'aguardando') {
    candidatosAptosAmpla.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' })
  } else if (c.taf === 'aguardando' && c.psi === 'aguardando' && c.fic === 'aguardando' && c.em === 'aguardando') {
    candidatosAptosAmpla.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' })
  } else if (c.taf === true && c.psi === true && c.fic === 'aguardando' && c.em === 'aguardando') {
    candidatosAptosAmpla.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' });
  }
});
// listar na tela os candidatosAptos e o total;
validarLista(candidatosAptosAmpla, '#listagemAmpla');



// ========================================
// feminino;
candidatosFeminino.forEach((c, i) => {
  // verificar a situacao do candidado nas fases;
  if (c.taf === true && c.psi === true && c.fic === true && c.em === true) {
    candidatosAptosFeminino.push({ "matricula": c.matricula, "nome": c.nome, "classificacao": i + 1 })
  } else if (c.taf === 'aguardando' && c.psi === 'aguardando' && c.fic === 'aguardando' && c.em === 'aguardando') {
    candidatosAptosFeminino.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' })
  } else if (c.taf === 'aguardando' && c.psi === 'aguardando' && c.fic === 'aguardando' && c.em === 'aguardando') {
    candidatosAptosFeminino.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' })
  } else if (c.taf === true && c.psi === true && c.fic === 'aguardando' && c.em === 'aguardando') {
    candidatosAptosFeminino.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' });
  }
});
// listar na tela os candidatosAptos e o total;
validarLista(candidatosAptosFeminino, '#listagemFeminino');




// ========================================
// pcd;
candidatosPCD.forEach((c, i) => {
  // verificar a situacao do candidado nas fases;
  if (c.taf === true && c.psi === true && c.fic === true && c.em === true) {
    candidatosAptosPCD.push({ "matricula": c.matricula, "nome": c.nome, "classificacao": i + 1 })
  } else if (c.taf === 'aguardando' && c.psi === 'aguardando' && c.fic === 'aguardando' && c.em === 'aguardando') {
    candidatosAptosPCD.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' })
  } else if (c.taf === 'aguardando' && c.psi === 'aguardando' && c.fic === 'aguardando' && c.em === 'aguardando') {
    candidatosAptosPCD.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' })
  } else if (c.taf === true && c.psi === true && c.fic === 'aguardando' && c.em === 'aguardando') {
    candidatosAptosPCD.push({ "matricula": "-------", "nome": '--------------------', "classificacao": '-' });
  }
});
// listar na tela os candidatosAptos e o total;
validarLista(candidatosAptosPCD, '#listagemPCD');


// funcoes;

function validarLista(lista, idLista) {
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