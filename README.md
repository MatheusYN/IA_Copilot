![CI](https://github.com/MatheusYN/IA_Copilot/actions/workflows/node-ci.yml/badge.svg)

## Análise do problema enfrentado pela equipe ##

A empresa simulada atua no desenvolvimento de uma ferramenta de colaboração online e enfrenta um cenário típico de organizações em rápido crescimento: a pressão constante por novas funcionalidades, impulsionada por demandas de mercado e campanhas de marketing, entra em conflito direto com a necessidade de manter a qualidade do software entregue.

O principal dilema da equipe está no equilíbrio entre velocidade e qualidade. Quando os desenvolvedores priorizam entregas rápidas para cumprir o roadmap, a escrita de testes automatizados e a revisão de código acabam sendo negligenciadas, o que resulta em aumento significativo de bugs em produção. Por outro lado, quando o foco é direcionado à qualidade — com testes mais completos e revisões detalhadas — os prazos deixam de ser cumpridos, gerando atrasos e frustração entre as áreas de negócio e engenharia.

Esse problema é agravado por gargalos claros no fluxo de trabalho atual:

Desenvolvimento lento, devido à repetição constante de código boilerplate para novas funcionalidades.

Baixa cobertura de testes, pois os testes de unidade são vistos como uma tarefa custosa e pouco atrativa.

Ciclo de feedback tardio, com identificação de erros apenas em fases finais de QA ou após o deploy.

Inconsistência no código, já que diferentes desenvolvedores resolvem problemas semelhantes de formas distintas.

Esse conjunto de fatores compromete a escalabilidade do time e evidencia a necessidade de um novo fluxo de trabalho que permita acelerar o desenvolvimento sem sacrificar a qualidade.

## O papel da IA no ciclo de desenvolvimento de software ##

A Inteligência Artificial tem assumido um papel cada vez mais estratégico no ciclo moderno de desenvolvimento de software, atuando como um acelerador de produtividade e um facilitador de boas práticas de engenharia.

Ferramentas como o GitHub Copilot utilizam modelos de linguagem treinados em grandes volumes de código para auxiliar desenvolvedores na:

Geração de código, reduzindo o tempo gasto com tarefas repetitivas e estruturais.

Criação de testes automatizados, incentivando maior cobertura de testes desde as fases iniciais.

Padronização de soluções, diminuindo a variabilidade de implementações na base de código.

Ao contrário de substituir o desenvolvedor, a IA atua como um par programador, permitindo que o profissional foque em decisões de maior valor, como lógica de negócio e arquitetura.

Complementando esse cenário, o uso de CI/CD com GitHub Actions automatiza etapas críticas do ciclo de vida do software, como instalação de dependências, execução de testes e validações a cada push ou pull request. Isso reduz drasticamente o tempo de feedback, permitindo que erros sejam detectados rapidamente e corrigidos ainda durante o desenvolvimento.

Dessa forma, a combinação de IA para geração de código e automação para validação contínua cria um fluxo de trabalho mais eficiente, confiável e escalável.

## Caso real de uso de GitHub Copilot e GitHub Actions ##

Um caso real amplamente divulgado é o uso do GitHub Copilot por equipes internas da própria Microsoft e GitHub. Estudos apresentados pela empresa indicam que desenvolvedores que utilizam o Copilot conseguem completar tarefas de programação em menos tempo, além de relatarem maior satisfação e menor carga cognitiva durante o desenvolvimento.

Além disso, levantamentos mostraram que o uso do Copilot aumenta a probabilidade de os desenvolvedores escreverem testes automatizados, uma vez que a ferramenta reduz o esforço inicial necessário para criá-los. Isso contribui diretamente para a melhoria da qualidade do software e redução de falhas em produção.

No contexto de automação, o GitHub Actions é amplamente adotado por empresas de todos os portes para implementar pipelines de integração contínua. Times que utilizam Actions conseguem detectar falhas logo após um commit, evitando que código defeituoso avance no pipeline e chegue aos usuários finais.

Esses casos demonstram que a adoção combinada de IA assistiva (Copilot) e automação de CI/CD (GitHub Actions) não apenas acelera o desenvolvimento, mas também estabelece um padrão de qualidade sustentável, alinhado às práticas modernas de engenharia de software.
