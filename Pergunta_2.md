## Pergunta

Suponha que vc esteja trabalhando numa API, melhorando um endpoint que grava
em que ponto de um vídeo um usuário está. Atualmente, estes dados são gravados
no mesmo banco de dados onde as demais informações dos vídeos são
armazenadas (nome, descrição, matéria, professor, etc). Com o aumento do número
de usuários, o grande volume de escritas causadas por este endpoint tem
impactado os demais endpoints desta API. Ainda assim, o time de produto deseja
aumentar a granularidade do tracking de 15s para 5s - ou seja, guardaremos as
posições dos usuários nos vídeos a cada 5s. Como vc faria para resolver esta
situação sem impactar a experiência do usuário e atendendo as requisições de
produto?

## Resposta

Bom, uma das maneiras mais rápidas e eficientes de resolver esse problema, seria deixar que o lado
do cliente se responsabilize pelo processamento desses dados usando cookies, por exemplo. Mas como
não foi especificado se o cliente precisa realmente dessas informações na base de dados, vou assumir que
ter esses dados persistidos faz parte das requisições do produto. Nessa ocasião eu iria sugerir a criação de um
serviço serverless independente e com alta disponiblidade apenas para lidar com essa feature, além de criar um banco
separado baseado em valor-chave em memória para a persistencia desses dados.. Mas caso, seja totalmente necessário
que esses dados sejam guardados no mesmo banco, seria viável criar uma regra de debouce dentro do serviço para receber
a posição do vídeo a cada 5s mas apenas registrar no banco após o valor parar de atualizar depois de um tempo determinado,
como 15s por exemplo.