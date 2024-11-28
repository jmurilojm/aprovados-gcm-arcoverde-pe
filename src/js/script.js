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
  }
});
// listar na tela os candidatosAptos e o total;
candidatosAptosAmpla.forEach((c, i) => {
  document.querySelector("#listagemAmpla").innerHTML += `<tr>
        <td class="center">${i+1}º</td>
        <td class="center">${c.matricula}</td>
        <td class="capitalize center">${c.nome.toLowerCase()}</td>
        <td class="center">${c.classificacao}º</td>
      </tr>`
})



// feminino;
candidatosFeminino.forEach((c, i) => {
  // verificar a situacao do candidado nas fases;
  if (c.taf === true && c.psi === true && c.fic === true && c.em === true) {
    candidatosAptosFeminino.push({ "matricula": c.matricula, "nome": c.nome, "classificacao": i + 1 })
  }
});
// listar na tela os candidatosAptos e o total;
candidatosAptosFeminino.forEach((c, i) => {
  document.querySelector("#listagemFeminino").innerHTML += `<tr>
        <td class="center">${i+1}º</td>
        <td class="center">${c.matricula}</td>
        <td class="capitalize center">${c.nome.toLowerCase()}</td>
        <td class="center">${c.classificacao}º</td>
      </tr>`
})




// pcd;
candidatosPCD.forEach((c, i) => {
  // verificar a situacao do candidado nas fases;
  if (c.taf === true && c.psi === true && c.fic === true && c.em === true) {
    candidatosAptosPCD.push({ "matricula": c.matricula, "nome": c.nome, "classificacao": i + 1 })
  }
});
// listar na tela os candidatosAptos e o total;
candidatosAptosPCD.forEach((c, i) => {
  document.querySelector("#listagemPCD").innerHTML += `<tr>
        <td class="center">${i+1}º</td>
        <td class="center">${c.matricula}</td>
        <td class="capitalize center">${c.nome.toLowerCase()}</td>
        <td class="center">${c.classificacao}º</td>
      </tr>`
})

// fim;