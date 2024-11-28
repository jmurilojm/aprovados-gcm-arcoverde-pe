const horario = '19:33';
const data = '28/11/2024';
const logo = 'src/imagens/logo.png';


const cabecalho = `<div class="importante">
      <p><em>Página não Oficial!</em></p>
      <p>Última atualização: <span>${horario}</span> horas - <span>${data}</span></p>
    </div>

    <img src="${logo}" alt="Logo não oficial da GCM Arcoverde/PE. Arte: José Murilo.">
    <h1>GCM Arcoverde - PE</h1>
    <h2>APROVADOS/2024</h2>
    <h6><em>*Fases, pós Prova Objetiva, ainda em andamento.</em></h6>`;



document.querySelector('header').innerHTML = cabecalho;
