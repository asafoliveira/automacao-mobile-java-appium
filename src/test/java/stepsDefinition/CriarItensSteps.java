package stepsDefinition;

import static org.junit.Assert.assertTrue;
import static utils.Utils.*;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.CriarListaPage;
import pageObjects.CriarNotaPage;
import pageObjects.TelaInicialPage;

public class CriarItensSteps {

	TelaInicialPage tl = new TelaInicialPage(driver);
	CriarNotaPage cnp = new CriarNotaPage(driver);
	CriarListaPage clp = new CriarListaPage(driver);

	@Dado("que eu esteja acessando o BasicNote")
	public void queEuEstejaAcessandoOBasicNote() throws Exception {

	}

	@Quando("eu acionar a tecla mais")
	public void euAcionarATeclaMais() throws Exception {
		tl.acionarTeclaMais();
	}

	@Quando("selecionar a opcao Nota")
	public void selecionarAOpcaoNota() throws Exception {
		tl.acionarBotaoCriarNota();
	}

	@Quando("selecionar a opcao Lista")
	public void selecionarAOpcaoLista() throws Exception {
		tl.acionarBotaoCriarLista();
	}

	@Quando("preencher o campo Titulo da nota com {string}")
	public void preencherOCampoTituloDaNotaCom(String tituloNota) throws Exception {
		cnp.preencherCampoTituloNota(tituloNota);
	}

	@Quando("preencher o campo Titulo da Lista com {string}")
	public void preencherOCampoTituloDaListaCom(String tituloLista) throws Exception {
		tl.preencherCampoTituloLista(tituloLista);
	}

	@Dado("que eu crie uma lista")
	public void queEuCrieUmaLista(String tituloLista) throws Exception {
		tl.criarListaSemItens(tituloLista);
	}

	@Quando("que eu acione a tecla mais")
	public void queEuAcioneATeclaMais() throws Exception {
		clp.acionarTeclaMaisItemLista();
	}

	@Quando("preencher o campo checkbox com {string}")
	public void preencherOCampoCheckboxCom(String checkbox) throws Exception {
		clp.preencherCampoCheckbox(checkbox);
	}

	@Quando("acionar o botao Adicionar")
	public void acionarOBotaoAdicionar() throws Exception {
		clp.acionarBotaoAdicionarItemLista();
	}

	@Quando("eu adicione um item a lista")
	public void euAdicioneUmItemALista(String checkbox) throws Exception {
		clp.adicionarUmItemLista(checkbox);
	}
	
	@Quando("eu adicione dois itens a lista")
	public void euAdicioneDoisItensALista(String checkbox, String checkbox1) throws Exception {
		clp.adicionarDoisItensLista(checkbox, checkbox1);
	}

	@Quando("preencher o campo Notas {string}")
	public void preencherOCampoNotas(String notas) throws Exception {
		cnp.preencherCampoNotas(notas);
	}

	@Quando("acionar o botao Guardar")
	public void acionarOBotaoGuardar() throws Exception {
		cnp.acionarBotaoGuardarNota();
	}

	// O titulo gerado tanto para a nota quanto para a lista possuem o mesmo id
	@Entao("o sistema exibe o item criado")
	public void oSistemaExibeOItemCriado() throws Exception {
		assertTrue(driver.findElement(By.id("notizen.basic.notes.notas.note.notepad:id/txtTitle")).isDisplayed());
	}

	@Entao("o sistema exibe o novo item {string} criado na lista")
	public void oSistemaExibeONovoItemCriadoNaLista(String itemLista) throws Exception {
		assertTrue(driver.findElement(By.xpath("//android.widget.RelativeLayout[@text='" + itemLista + "']"))
				.isDisplayed());
	}

}
