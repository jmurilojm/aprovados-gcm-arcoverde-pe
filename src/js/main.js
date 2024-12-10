const contato = '83999613965';
const instagram = 'https://www.instagram.com/gcmarcoverde2024';


const acessoInstagram = `<a href="${instagram}" target="_blank"><i class="bi bi-instagram"></i> Instagram</a>`;
const tituloH2 = 'IMPORTANTE SABER!';
const paragrafo0 = 'Esta Página foi desenvolvida por um Candidato, apenas para projetar um mero acompanhamento dos Resultados que vão sendo disponibilizados durante o período de andamento do Calendário das Fases do Concurso para a GCM Arcoverde/PE, seja Preeliminar ou Oficial. Após a conclusão do Calendário, esta Página ficará indisponível.'
const paragrafo1 = 'O Quadro de Posições, aqui representado, está "tentando criar um cenário" baseado na Coleta de Informações obtidas a partir do contato com os(as) colegas Candidatos(as).';
const paragrafo2 = `A Página fará questão de manter o respeito integral, pela vontade do(a) colega Candidato(a), em querer ou não dispor de seus "Resultados Preliminares". Sendo assim, estamos à disposição para remover qualquer informação que lhe faça sentir algum incomodado. Para isso, basta clicar <a href="https://wa.me/55${contato}?text=Quero%20remover%20meus%20dados!" target="_blank">aqui.</a>`;
const paragrafo3 = '<strong>Estão listados APENAS os Candidatos(as) que realizaram as Fases descritas abaixo e que obtiveram RESULTADO APTO em todas. Lembrando que quem não informou seus Resultados nas Fases Preliminares ou que esteja faltando informar um deles, não estará presente nessa lista por falta de dados.</strong>';
const fases = '<strong><p>TAF = Definitivo</p><p>PSICOTÉCNICO = Definitivo</p><p>FIC = Definitivo</p><p>EXÂME MÉDICO E TÓXICO = Definitivo</p></strong>';
const paragrafo4 = `Se você Participou das Fases mencionadas e não viu seu nome na lista, basta <a href="https://wa.me/55${contato}839?text=Quero%20incluir%20meu%20nome%20nessa%20lista!" target="_blank">entrar em contato</a>. Pode estar existindo alguma das seguintes situações: falta de informações, divergência nos resultados obtidos ou outro motivo aparente.`;
const paragrafo5 = 'Quando se tratar de Resultados Oficiais dos(as) Candidatos(as), em determinada Fase, e por ser uma Divulgação Pública, o levantamento será realizado por meio destas publicações que estarão sendo divulgadas em expecífica página do <a href="https://igeduc.selecao.net.br/informacoes/70/" target="_blank">Instituto Igeduc</a>.';



document.querySelector('nav').innerHTML = acessoInstagram;
document.querySelector('aside').innerHTML = `<h2>${tituloH2}</h2>
      <p>${paragrafo0}</p>
      <p>${paragrafo1}</p>
      <p>${paragrafo2}</p>
      <p>${paragrafo3}</p>
      <br>
      <div>
        ${fases}
      </div>
      <br>
      <p>${paragrafo4}</p>
      <p>${paragrafo5}</p>`;