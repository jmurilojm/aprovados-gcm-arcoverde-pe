const horario = '10:54';
const data = '11/12/2024';
const logo = 'src/imagens/logo.png';
const editalAtualizado = 'src/midia/EDITAL - GUARDA DE ARCOVERDE - ATUALIZADO EM 10.12.2024.pdf'
const listaCF = 'src/midia/Lista-convocacao-cf-11.12.2024.pdf'
const listaCFComClassificacao = 'src/midia/Lista-pos-etapas-e-classificacao-11.12.2024.pdf'


const cabecalho = `<div class="importante">
      <p><em>Página e Logo não Oficiais!<br>Arte: José Murilo - 073...-44.</em></p>
      <p>Última atualização: <span>${horario}</span> horas - <span>${data}</span></p>
    </div>

    <img src="${logo}" alt="Logo não oficial da GCM Arcoverde/PE. Arte: José Murilo.">
    <h1>GCM Arcoverde - PE</h1>
    <h2>APROVADOS/2024</h2>
    <h6><em>*Lançada a Lista de Convocação para o Curso de Formação.</em></h6>`;

const arquivos = `<strong><p>Arquivos para Download</p></strong>
<a href="${editalAtualizado}" download=""><button>Edital Atualizado - 10/12/2024</button></a>
<a href="${listaCF}" download=""><button>Lista para Curso de Formação - 11/12/2024</button></a>
<a href="${listaCFComClassificacao}" download=""><button>Classificação pós Etapas - 11/12/2024</button></a>`



document.querySelector('header').innerHTML = cabecalho;
document.querySelector('section').innerHTML = arquivos;
