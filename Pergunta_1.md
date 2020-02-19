## Pergunta

Suponha que vc tem uma API que roda 24/7 e que possui uma enorme quantidade
de requisições. Para suportar o tráfego, existem várias instâncias desta aplicação
rodando num cluster Kubernetes.
Atualmente, esta aplicação utiliza MongoDB como forma de persistir seus dados.

No entanto, o time técnico deseja migrar de banco para o PostgreSQL. Como você
faria para migrar a aplicação sem downtime e sem perda de dados?

## Resposta

Imagino que o meu primeiro passo seria definir a nova estrutura do banco relacional, de forma que o novo
modelo seja o mais condizente possível com as camadas de interação com o banco e as entidades do sistema.

O próximo passo seria adaptar as regras e a arquitetura do sistema para que os novos dados começassem a ser
persistidos na nova base de dados, pois assim eu poderia começar a trabalhar na adaptação do sistema para o
novo banco e na solução para a migração dos dados sem me preocupar com downtime ou com o trafego recorrente.

O próximo passo seria criar um script para gerar um arquivo SQL a partir de uma massa de dados limitada exportada
do antigo banco em MongoDB (existem programas que criam estruturas de bancos relacionais simples a partir de um json extraido do 
mongoDB, mas não existe script que faça esse para uma estrutura já definida e específica)! A partir do momento em que o script
for finalizado e os testes realizados localmente forem bem sucedidos, eu realizaria uma migração teste com a massa de dados 
completa em um servidor nas mesmas condições que o servidor em produção.

Depois de realizar os testes e fazer o máximo de otimizações possiveis, os próximos passos seriam os seguintes:

1- Realizar a migração completa em uma instancia separada
2- Tornar essa instancia a principal
3- Reinserir na nova instancia os dados recorrentes da instancia antiga do período em que ocorreu a migração
4- terminar a adaptação completa do sistema para atender ao novo banco  
