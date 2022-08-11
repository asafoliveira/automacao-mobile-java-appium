$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CriarItens.feature");
formatter.feature({
  "name": "Criar uma lista ou uma nota",
  "description": "  Eu como usuario quero criar, editar ou excluir uma lista ou uma nota",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@CriarItens"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Criar uma Lista com tres itens",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@CriarListaTresItens"
    }
  ]
});
formatter.step({
  "name": "que eu crie uma lista",
  "keyword": "Dado "
});
formatter.step({
  "name": "eu adicione dois itens a lista",
  "keyword": "Quando "
});
formatter.step({
  "name": "que eu acione a tecla mais",
  "keyword": "E "
});
formatter.step({
  "name": "preencher o campo checkbox com \"\u003ccheckbox\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "acionar o botao Adicionar",
  "keyword": "E "
});
formatter.step({
  "name": "o sistema exibe o novo item \"\u003citem\u003e\" criado na lista",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "itens",
        "",
        "checkbox"
      ]
    },
    {
      "cells": [
        "Titulo",
        "",
        "Item"
      ]
    },
    {
      "cells": [
        "123456",
        "",
        "123456"
      ]
    },
    {
      "cells": [
        "Titulo123",
        "",
        "Item01"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "que eu esteja acessando o BasicNote",
  "keyword": "Dado "
});
formatter.match({
  "location": "CriarItensSteps.queEuEstejaAcessandoOBasicNote()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "eu acionar a tecla mais",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarItensSteps.euAcionarATeclaMais()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Criar uma Lista com tres itens",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@CriarItens"
    },
    {
      "name": "@CriarListaTresItens"
    }
  ]
});
formatter.step({
  "name": "que eu crie uma lista",
  "keyword": "Dado "
});
formatter.match({
  "location": "CriarItensSteps.queEuCrieUmaLista(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "eu adicione dois itens a lista",
  "keyword": "Quando "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "que eu acione a tecla mais",
  "keyword": "E "
});
formatter.match({
  "location": "CriarItensSteps.queEuAcioneATeclaMais()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "preencher o campo checkbox com \"Item\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarItensSteps.preencherOCampoCheckboxCom(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "acionar o botao Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "CriarItensSteps.acionarOBotaoAdicionar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o sistema exibe o novo item \"\u003citem\u003e\" criado na lista",
  "keyword": "Entao "
});
formatter.match({
  "location": "CriarItensSteps.oSistemaExibeONovoItemCriadoNaLista(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "que eu esteja acessando o BasicNote",
  "keyword": "Dado "
});
formatter.match({
  "location": "CriarItensSteps.queEuEstejaAcessandoOBasicNote()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "eu acionar a tecla mais",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarItensSteps.euAcionarATeclaMais()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Criar uma Lista com tres itens",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@CriarItens"
    },
    {
      "name": "@CriarListaTresItens"
    }
  ]
});
formatter.step({
  "name": "que eu crie uma lista",
  "keyword": "Dado "
});
formatter.match({
  "location": "CriarItensSteps.queEuCrieUmaLista(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "eu adicione dois itens a lista",
  "keyword": "Quando "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "que eu acione a tecla mais",
  "keyword": "E "
});
formatter.match({
  "location": "CriarItensSteps.queEuAcioneATeclaMais()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "preencher o campo checkbox com \"123456\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarItensSteps.preencherOCampoCheckboxCom(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "acionar o botao Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "CriarItensSteps.acionarOBotaoAdicionar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o sistema exibe o novo item \"\u003citem\u003e\" criado na lista",
  "keyword": "Entao "
});
formatter.match({
  "location": "CriarItensSteps.oSistemaExibeONovoItemCriadoNaLista(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "que eu esteja acessando o BasicNote",
  "keyword": "Dado "
});
formatter.match({
  "location": "CriarItensSteps.queEuEstejaAcessandoOBasicNote()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "eu acionar a tecla mais",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarItensSteps.euAcionarATeclaMais()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Criar uma Lista com tres itens",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@CriarItens"
    },
    {
      "name": "@CriarListaTresItens"
    }
  ]
});
formatter.step({
  "name": "que eu crie uma lista",
  "keyword": "Dado "
});
formatter.match({
  "location": "CriarItensSteps.queEuCrieUmaLista(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "eu adicione dois itens a lista",
  "keyword": "Quando "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "que eu acione a tecla mais",
  "keyword": "E "
});
formatter.match({
  "location": "CriarItensSteps.queEuAcioneATeclaMais()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "preencher o campo checkbox com \"Item01\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarItensSteps.preencherOCampoCheckboxCom(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "acionar o botao Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "CriarItensSteps.acionarOBotaoAdicionar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o sistema exibe o novo item \"\u003citem\u003e\" criado na lista",
  "keyword": "Entao "
});
formatter.match({
  "location": "CriarItensSteps.oSistemaExibeONovoItemCriadoNaLista(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});