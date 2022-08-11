#language: pt
#encoding: UTF-8
@CriarItens
Funcionalidade: Criar uma lista ou uma nota
  Eu como usuario quero criar, editar ou excluir uma lista ou uma nota

  Contexto: 
    Dado que eu esteja acessando o BasicNote
    Quando eu acionar a tecla mais

  @CriarNota
  Esquema do Cenario: Criar uma Nota
    E selecionar a opcao Nota
    E preencher o campo Titulo da nota com "<titulo>"
    E preencher o campo Notas "<nota>"
    E acionar o botao Guardar
    Entao o sistema exibe o item criado

    Exemplos: 
      | titulo    |  | nota    |
      | Titulo    |  | Nota    |
      |    123456 |  |  123456 |
      | Titulo123 |  | Nota123 |

  @CriarLista
  Esquema do Cenario: Criar uma Lista
    Quando selecionar a opcao Lista
    E preencher o campo Titulo da Lista com "<titulo>"
    E acionar o botao Guardar
    Entao o sistema exibe o item criado

    Exemplos: 
      | titulo    |
      | Titulo    |
      |    123456 |
      | Titulo123 |

  @CriarListaUmItem
  Esquema do Cenario: Criar uma Lista com um item
    Quando selecionar a opcao Lista
    E preencher o campo Titulo da Lista com "<titulo>"
    E acionar o botao Guardar
    E que eu acione a tecla mais
    E preencher o campo checkbox com "<checkbox>"
    E acionar o botao Adicionar
    Entao o sistema exibe o novo item "<item>" criado na lista

    Exemplos: 
      | titulo    |  | checkbox | item   |
      | Titulo    |  | Item     | Item   |
      |    123456 |  |   123456 | 123456 |
      | Titulo123 |  | Item01   | Item01 |

  @CriarListaDoisItens
  Esquema do Cenario: Criar uma Lista com dois itens
    Dado que eu crie uma lista
    Quando eu adicione um item a lista
    E que eu acione a tecla mais
    E preencher o campo checkbox com "<checkbox>"
    E acionar o botao Adicionar
    Entao o sistema exibe o novo item "<item>" criado na lista

    Exemplos: 
      | itens     |  | checkbox |
      | Titulo    |  | Item     |
      |    123456 |  |   123456 |
      | Titulo123 |  | Item01   |

  @CriarListaTresItens
  Esquema do Cenario: Criar uma Lista com tres itens
    Dado que eu crie uma lista
    Quando eu adicione dois itens a lista
    E que eu acione a tecla mais
    E preencher o campo checkbox com "<checkbox>"
    E acionar o botao Adicionar
    Entao o sistema exibe o novo item "<item>" criado na lista

    Exemplos: 
      | itens     |  | checkbox |
      | Titulo    |  | Item     |
      |    123456 |  |   123456 |
      | Titulo123 |  | Item01   |
