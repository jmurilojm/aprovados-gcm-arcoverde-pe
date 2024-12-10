const horario = '13:07';
const data = '10/12/2024';
const logo = 'src/imagens/logo.png';
const editalAtualizado = 'src/midia/EDITAL - GUARDA DE ARCOVERDE - ATUALIZADO EM 10.12.2024.pdf'
const listaCF = 'src/midia/Lista de Convocados para o Curso de Formação.pdf'


const cabecalho = `<div class="importante">
      <p><em>Página não Oficial!</em></p>
      <p>Última atualização: <span>${horario}</span> horas - <span>${data}</span></p>
    </div>

    <img src="${logo}" alt="Logo não oficial da GCM Arcoverde/PE. Arte: José Murilo.">
    <h1>GCM Arcoverde - PE</h1>
    <h2>APROVADOS/2024</h2>
    <h6><em>*Fases, pós Prova Objetiva, ainda em andamento.</em></h6>`;

const arquivos = `<strong><p>Arquivos para Download</p></strong>
<a href="${editalAtualizado}" download=""><button>Edital Atualizado - 10/12/2024</button></a><a href="${listaCF}" download=""><button>Lista para Curso de Formação - 10/12/2024</button></a>`



document.querySelector('header').innerHTML = cabecalho;
document.querySelector('section').innerHTML = arquivos;
