// lista ampla
const candidatosAmpla = [
  { 
    "matricula": "0236788", 
    "nome": "RAUL HENRIQUE DE SOUZA BEZERRA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 1 
  },
  { 
    "matricula": "0230229", 
    "nome": "EVERLANDY VALERIO ALEXANDRE", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 2 
  },
  { 
    "matricula": "0213423", 
    "nome": "GABRIELLA TENÓRIO GUIMARÃES", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 3 
  },
  { 
    "matricula": "0232930", 
    "nome": "JOALDO RODRIGUES DE SANTANA JUNIOR", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 4 
  },
  { 
    "matricula": "0219382", 
    "nome": "ANACLÉCIO DE FRANÇA BEZERRA DA SILVA", 
    "taf": false, 
    "psi": false, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 5 
  },
  { 
    "matricula": "0231111", 
    "nome": "DARLAN BARBOSA DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 6 
  },
  { 
    "matricula": "0213616", 
    "nome": "DANIEL FERREIRA DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 7 
  },
  { 
    "matricula": "0218994", 
    "nome": "LUCAS BERNARDO DA SILVA", 
    "taf": false, 
    "psi": false, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 8 
  },
  { 
    "matricula": "0227167", 
    "nome": "DIEGO HENRIQUE DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 9 
  },
  { 
    "matricula": "0226673", 
    "nome": "THIAGO DA SILVA ALEXANDRE", 
    "taf": false, 
    "psi": false, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 10 
  },
  { 
    "matricula": "0215407", 
    "nome": "CARLOS MATHEUS DA SILVA OLIVEIRA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 11 
  },
  { 
    "matricula": "0229972", 
    "nome": "ROSIVALDO DOMINGOS DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 12 
  },
  { 
    "matricula": "0221524", 
    "nome": "EMANOEL ANGELO FERREIRA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 13 
  },
  { 
    "matricula": "0235811", 
    "nome": "ROBSON AUGUSTO DE BRITO PEIXOTO", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 14 
  },
  { 
    "matricula": "0228683", 
    "nome": "JOSÉ ENNYO PEREIRA MOURATO", 
    "taf": false, 
    "psi": false, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 15 
  },
  { 
    "matricula": "0225496", 
    "nome": "JOYCE FREIRE BARBOSA DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 16 
  },
  { 
    "matricula": "0222435", 
    "nome": "RENATO SIQUEIRA DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 17 
  },
  { 
    "matricula": "0221260", 
    "nome": "JOSEPH MATHEUS SOARES DE ALBUQUERQUE", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 18 
  },
  { 
    "matricula": "0217545", 
    "nome": "ELIZANGELO ANTONIO DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 19 
  },
  { 
    "matricula": "0229024", 
    "nome": "LEANDRO GUSTAVO FERREIRA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 20 
  },
  { 
    "matricula": "0230699", 
    "nome": "JOSÉ WALISSON DE OLIVEIRA TORRES", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 21 
  },
  { 
    "matricula": "0220601", 
    "nome": "JONATHAN CORREIA LOPES", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 22 
  },
  { 
    "matricula": "0229988", 
    "nome": "JOSE BRUNO CAVALCANTI PEREIRA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 23 
  },
  { 
    "matricula": "0219999", 
    "nome": "CAIO HIGOR NUNES DE FREITAS BRITO", 
    "taf": true, 
    "psi": "aguardando", 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 24 
  },
  { 
    "matricula": "0215960", 
    "nome": "GABRIEL FILIPE BARROS DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 25 
  },
  { 
    "matricula": "0223968", 
    "nome": "JOSÉ ANDRÉ SOARES DE QUEIROZ", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 26 
  },
  { 
    "matricula": "0226554", 
    "nome": "CLAÚDIO HENRIQUE OLIVEIRA DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 27 
  },
  { 
    "matricula": "0227035", 
    "nome": "EMANOEL FÁBIO ALVES LIBERATO", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 28 
  },
  { 
    "matricula": "0232145", 
    "nome": "GUSTAVO RICARDO MAGALHAES RABELO", 
    "taf": false, 
    "psi": false, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 29 
  },
  { 
    "matricula": "0215584", 
    "nome": "CEZAR AUGUSTO DE ALENCAR PEREIRA", 
    "taf": false, 
    "psi": false, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 30 
  },
  { 
    "matricula": "0213435", 
    "nome": "BEATRIZ MAURÍCIO TORRES MACEDO", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 31 
  },
  { 
    "matricula": "0228544", 
    "nome": "JHONNY WESLLY PEREIRA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 32 
  },
  { 
    "matricula": "0224398", 
    "nome": "JAQUELINE PATRICIA RICARDO HONORIO", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 33 
  },
  { 
    "matricula": "0227062", 
    "nome": "EDNALDO DE LIMA PEREIRA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 34 
  },
  { 
    "matricula": "0236369", 
    "nome": "WILLIANS DE OLIVEIRA CALIXTO", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 35 
  },
  { 
    "matricula": "0214684", 
    "nome": "MATEUS HENRIQUE DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 36 
  },
  { 
    "matricula": "0214075", 
    "nome": "RENNAN BEZERRA HARDMAN", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 37 
  },
  { 
    "matricula": "0228481", 
    "nome": "GUSTAVO VINICIUS LOPES ANDRADE", 
    "taf": "aguardando", 
    "psi": "aguardando", 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 38 
  },
  { 
    "matricula": "0228934", 
    "nome": "ADEMILSON ANDRELINO DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 39 
  },
  { 
    "matricula": "0227947", 
    "nome": "KARL FRANCIS DOS SANTOS ARAUJO", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 40 
  },
  { 
    "matricula": "0224429", 
    "nome": "EDER DA ROCHA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 41 
  },
  { 
    "matricula": "0232075", 
    "nome": "ERENILSON BESERRA DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 42 
  },
  { 
    "matricula": "0230859", 
    "nome": "LEANDRO FRANCISCO DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 43 
  },
  { 
    "matricula": "0231694", 
    "nome": "VICTOR ALVES DE LIMA", 
    "taf": false, 
    "psi": false, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 44 
  },
  { 
    "matricula": "0224417", 
    "nome": "FRED LUCAS CAETANO TAVARES", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 45 
  },
  { 
    "matricula": "0221347", 
    "nome": "JOSE WASHINGTON DE CASTRO NERY BARROS", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 46 
  },
  { 
    "matricula": "0231629", 
    "nome": "DANIEL BARBOSA DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 47 
  },
  { 
    "matricula": "0235456", 
    "nome": "MICAEL THIAGO SANTOS FEITOSA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 48 
  },
  { 
    "matricula": "0226200", 
    "nome": "MARIA TEREZA FEITOSA TELES", 
    "taf": false, 
    "psi": false, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 49 
  },
  { 
    "matricula": "0236299", 
    "nome": "JOSÉ WILLYAM ALVES FIRMINO", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 50 
  },
  { 
    "matricula": "0227904", 
    "nome": "LEANDRO CABRAL JORDÃO", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 51 
  },
  { 
    "matricula": "0235352", 
    "nome": "JOSÉ ISAAC SANTOS LEAL", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 52 
  },
  { 
    "matricula": "0227358", 
    "nome": "ANDERSON PEREIRA FERREIRA", 
    "taf": false, 
    "psi": false, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 53 
  },
  { 
    "matricula": "0217412", 
    "nome": "LUIS HENRIQUE ALBUQUERQUE SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 54 
  },
  { 
    "matricula": "0236214", 
    "nome": "SUELBER COSTA DA PAZ", 
    "taf": false, 
    "psi": false, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 55 
  },
  { 
    "matricula": "0230648", 
    "nome": "ROBERTO ANTONIO DOS SANTOS SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 56 
  },
  { 
    "matricula": "0217345", 
    "nome": "LUCAS KAIQUE GOMES CAVALCANTI", 
    "taf": false, 
    "psi": false, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 57 
  },
  { 
    "matricula": "0217751", 
    "nome": "DAVID MOURA SIQUEIRA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 58 
  },
  { 
    "matricula": "0217046", 
    "nome": "ANA KAROLINE FRAGA NUNES", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 59 
  },
  { 
    "matricula": "0225072", 
    "nome": "RUAN RIQUELMY DE SOUZA NASCIMENTO", 
    "taf": "aguardando", 
    "psi": "aguardando", 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 60 
  },
  { 
    "matricula": "0236415", 
    "nome": "ALEX PEREIRA DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 61 
  },
  { 
    "matricula": "0230598", 
    "nome": "MARCOS RODRIGUES ALVES", 
    "taf": "aguardando", 
    "psi": "aguardando", 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 62 
  },
  { 
    "matricula": "0222243", 
    "nome": "FLAVIO MANOEL CAVALCANTE SILVA", 
    "taf": false, 
    "psi": false, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 63 
  },
  { 
    "matricula": "0213287", 
    "nome": "PEDRO DE ARAÚJO SILVA", 
    "taf": false, 
    "psi": false, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 64 
  },
  { 
    "matricula": "0227578", 
    "nome": "JOSIMARIO FERREIRA DO NASCIMENTO", 
    "taf": false, 
    "psi": false, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 65 
  },
  { 
    "matricula": "0230612", 
    "nome": "RAFAEL GOMES DE SOUZA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 66 
  },
  { 
    "matricula": "0233067", 
    "nome": "LEANDRO FLAVIO GOMES DE MELO", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 67 
  },
  { 
    "matricula": "0231960", 
    "nome": "GABRIEL DE LIMA MACHADO", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 68 
  },
  { 
    "matricula": "0227677", 
    "nome": "ANTONIO CÉSAR MARQUES DE CARVALHO", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 69 
  },
  { 
    "matricula": "0217169", 
    "nome": "JOSÉ WILLIAM DE LIMA LEITE", 
    "taf": false, 
    "psi": false, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 70 
  },
  { 
    "matricula": "0222166", 
    "nome": "ÉRICO VERÍSSIMO MONTEIRO ALVES", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 71 
  },
  { 
    "matricula": "0234943", 
    "nome": "YBN ALCANTARA FERRO DE MOURA", 
    "taf": false, 
    "psi": false, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 72 
  },
  { 
    "matricula": "0222831", 
    "nome": "LUCAS DO NASCIMENTO SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 73 
  },
  { 
    "matricula": "0229500", 
    "nome": "EDSON FÁBIO DE SOUZA FILHO", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 74 
  },
  { 
    "matricula": "0232120", 
    "nome": "EMMANUEL FELIPE FERREIRA", 
    "taf": "aguardando", 
    "psi": "aguardando", 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 75 
  },
  { 
    "matricula": "0231402", 
    "nome": "JOÃO PEDRO CORDEIRO SIMÕES RODRIGUES", 
    "taf": "aguardando", 
    "psi": "aguardando", 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 76 
  },
  { 
    "matricula": "0219374", 
    "nome": "JOSÉ MURILO LOPES FERREIRA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 77 
  },
  { 
    "matricula": "0237136", 
    "nome": "JOSE ALBERTO DE SOUZA FILHO", 
    "taf": "aguardando", 
    "psi": "aguardando", 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 78 
  },
  { 
    "matricula": "0230066", 
    "nome": "JOSÉ ROMILDO ALVES DE ANDRADE", 
    "taf": true, 
    "psi": true, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 79 
  },
  { 
    "matricula": "0224011", 
    "nome": "FRANCIMARIO GONÇALVES DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 80 
  },
  { 
    "matricula": "0229605", 
    "nome": "SHARLES HUDSON RODRIGUES DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 81 
  },
  { 
    "matricula": "0225170", 
    "nome": "JOZILDO JOSÉ DOS SANTOS JUNIOR", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 82 
  },
  { 
    "matricula": "0233683", 
    "nome": "IVALDO IGOR DA SILVA CRUZ", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 83 
  },
  { 
    "matricula": "0216581", 
    "nome": "PAULO ROBERTO ANTAO VERISSIMO", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 84 
  },
  { 
    "matricula": "0217404", 
    "nome": "IAGO DE FARIAS ARAUJO", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 85 
  },
  { 
    "matricula": "0228657", 
    "nome": "JOSE KEYDSON LUCENA MARCOLINO DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 86 
  },
  { 
    "matricula": "0213720", 
    "nome": "RAVELT SOUZA CHAGAS", 
    "taf": "aguardando", 
    "psi": "aguardando", 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 87 
  },
  { 
    "matricula": "0214380", 
    "nome": "WILKER BRENO BRITO PEREIRA DA SILVA", 
    "taf": false, 
    "psi": true, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 88 
  },
  { 
    "matricula": "0236302", 
    "nome": "VINICIUS DE CARVALHO ARAÚJO MELO FREIRE", 
    "taf": "aguardando", 
    "psi": "aguardando", 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 89 
  },
  { 
    "matricula": "0227044", 
    "nome": "DAVI MASCARENHAS DE LIMA", 
    "taf": false, 
    "psi": false, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 90 
  },
  { 
    "matricula": "0213798", 
    "nome": "SEVERINO BERNARDO DE ALMEIDA JÚNIOR", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 91 
  },
  { 
    "matricula": "0218174", 
    "nome": "CLEITON JAKSON DA SILVA ANJOS SILVA", 
    "taf": false, 
    "psi": false, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 92 
  },
  { 
    "matricula": "0228046", 
    "nome": "ARY SIQUEIRA LUNA DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 93 
  },
  { 
    "matricula": "0237067", 
    "nome": "LUCAS JOSE DA SILVA MELO", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 94 
  },
  { 
    "matricula": "0213477", 
    "nome": "SABRIELYSON BEZERRA SANTANA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 95 
  },
  { 
    "matricula": "0219587", 
    "nome": "JEFFERSON YURI RODRIGUES ALVES", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 96 
  },
  { 
    "matricula": "0230235", 
    "nome": "CARLOS ANTONIO BENÍCIO", 
    "taf": "aguardando", 
    "psi": "aguardando", 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 97 
  },
  { 
    "matricula": "0228360", 
    "nome": "ALAN JONATHAN LEANDRO BRAGA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 98 
  },
  { 
    "matricula": "0214812", 
    "nome": "ERIC MICHEL NOBERTO DA SILVA", 
    "taf": true, 
    "psi": true, 
    "fic": true, 
    "em": true, 
    "id": 99 
  },
  { 
    "matricula": "0213610", 
    "nome": "JOAIZ FERREIRA PAZ", 
    "taf": false, 
    "psi": false, 
    "fic": "aguardando", 
    "em": "aguardando", 
    "id": 100 
  }];
  
  
  