## Básico

### JSX

O JSX é uma estrutura de template que funciona como uma extenção do javaScript. Como o JSX é interpretado e 
traduzido para o JavaScript em tempo de execução, então ele nos dá muito mais poder em questão de manipulação
de interfaces e de reatividade.

### Rendering Elements

Uma das principais vantagens do react está na eficiência ao atualizar e criar seus elementos. Ao contrário dos elementos do
DOM, os elementos React por serem objetos JavaScript são muito mais gerenciaveis e faceis de manipular, além
de terem uma performance muito maior do que os elementos do DOM convencional. Isso se dá ao fato de que React usa o que
chamamos de DOM Virtual, que é responsável por chamar o método renderizador toda vez em que for atualizado, ao mesmo tempo em que 
usa algoritimos inteligentes para alterar apenas o que é necessário ser alterado, baseado em uma diferenciação de estado.

### Components and Props

Os Components React são Blocos de elementos React que podem ser reutilizados e que possuem seu próprio Ciclo de Vida.
Por serem altamente customizaveis e altamente modulares graças a capacidade de compartilharem
dados entre si através das Props, os Componentes React possibilitam criações de interfaces totalmente escalonáveis
e com muito reaproveitamento de código.

### State and Lyfecicle

Todo Componente React possui métodos especificos que são chamados em cada etapa de sua execução! Desde o momento em que ele monta
até o momento em que ele desmonta, ele passa por um ciclo de vida bastante restrito, ou seja, voce tem a possibilidade
de controlar especificar diversas ações para cada momento do seu componente, seja ao montar, ao atualizar, ao receber propriedades ou ao desmontar. Um componente React possui do inicio ao fim de sua vida um estado privado e controlado.

### Handling events

Lidar com eventos em React é muito parecido com manipulação de eventos no DOM normal, as diferenças são basicamente em questões 
de sintaxe.

### Renderização Condicional

O React permite voce usar expressões lógicas para manipular a renderização de elementos dependendo do estado da aplicação.
Por ser praticamente uma extensão do javaScript, o JSX permite voce utilizar estruturas condicionais e de repetição na própria
montagem do template.

### Lists and Keys

Da mesma forma que voce pode usar estruturas condicionais em React, voce tambem pode usar estrturas de repetição! Estruturas de 
repetição são geralmente usando para renderizar listas e tabelas, ou seja, para renderizar componentes ou elementos com o mesmo estilo, mas com propriedades diferente.

### Forms

Os formulários em react funcionam um pouco diferente dos formulários no DOM convencional. Essas diferenças se dão devido ao
modo em que os elementos de entrada (inputs) interagem com o estado do componente. No react voce tem um controle muito maior sobre as entradas de dados, e os valores são muito mais acessíveis e fáceis de serem manipulados!

## Avançado

### ES5 vs ES6

O EcmaScript 6 introduziu muitas novidades ao javascript... conceitos e ferramentas que tornaram a linguagem muito mais poderosa. As principais novidades foram:

- Arrow Functions
- Operador de Spreading
- Desconstrução
- Promises
- importação e exportação de módulos
- template literals
- Novos tipos de escopo para variáveis (let e const)

### Hooks

O React sempre teve alguns problemas em relação a curva de aprendizado. Devido ao formato de classe e outros problemas relacionado
aos métodos do ciclo de vida dos componentes, estreturas que deveriam ser simples acabavam se tornando muito complexas, 
principalmente por causa da dificuldade de leitura. Os hooks trazem uma proposta mais intuítiva e funcionalidades mais eficientes
para o controle do estado de um componente React e do seu ciclo de vida, além de trazer a possibilidade de criação de hooks, o que adiciona potencialmente mais uma camada de abstração na arquitetura de um projeto React.

### High-order Components e Render props

High order components é um padrão de desenvolvimento em React que visa abstrair componentes que servem como um wrapper para 
outros componentes, envolvendo-os em um estado novo e com novas funcionalidades. Já o Render props é uma técnica que tem como 
foco criar componentes que renderizam de forma dinâmica funções passadas diretamentes através das Props, reutilizando uma lógica  que faça sentido para mais de um componente.

### Refs

O Refs é uma forma utilizada para disponibilizar no escopo do componente a referencia de outro componente! Tendo a referência de um componente te da a possibilidade de acessar os seus métodos disponíveis, podendo alterar seu estado em tempo de execução.

### Portals

O React Portal é uma forma de renderizar um componente filho fora do componente pai, em qualquer lugar DOM sem perder as 
propriedades de um componente React! Ou seja, mesmo sendo renderizado fora da estrutura atual do DOM ele possui o mesmo ciclo de vida, as mesma propriedades e o mesmo poder que qualquer outro componente React.

### Fragments

Os Fragmentos são uma maneira de agrupar elementos que estão "soltos" e não possuem um elemento pai, sem ter que usar uma div 
por exemplo! Uma div pode alterar o comportamento esperado em alguns casos, então usa-se os fragments para poder envelopar
esses elementos sem impactar na estrutura do DOM.

### Error Boundarys

Consiste em métodos do ciclo de vida sendo utilizados com o intuito de manipular erros javascript dentro da arvore React de
uma aplicação. Esses métodos de ciclo de vida são acionados no momento que acontece um disparo de erro.

### Context

O context é uma forma de compartilhar dados entre componentes compondo a mesma árvore, sem a necessidade de passar esses dados atravéz de props, não importando a diferença de nivel hierárquico.

### Components e PureComponents

A principal diferença entre Components e PureComponents é que no processo de renderização do componente, o pureComponente faz
uma comparação raza do estado, ou seja, enquanto dados não objetos são comparados em relação ao seu conteúdo, nos objetos só é
verificado a referência e isso acaba trazendo melhorias em performance.