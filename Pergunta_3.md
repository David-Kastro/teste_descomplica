## Pergunta

Suponha que vc está colocando uma nova API no ar. Ela é composta de endpoints
de escrita e leitura REST que se comunicam com um banco de dados SQL que não
possui redundância. A API está de aberta para a Internet, sem um servidor de front /
borda. Como vc acompanharia este serviço para garantir que tudo está saudável?

## Resposta

Eu usaria uma ferramenta simples como postman ou insomnia para fazer alguns testes mais básicos como o de autenticação,
autorização, tempo de resposta e etc. Para testes de estresse eu uso scripts para simular multiplas requisições.