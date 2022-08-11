package pageObjects;

import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class TelaInicialPage {
	
	//Construtor
	public TelaInicialPage(AppiumDriver<?> driver) {
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	//Campos
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/btnAddNote")
	private MobileElement teclaMais;

	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/txtNote")
	private MobileElement botaoCriarNota;

	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/txtChecklist")
	private MobileElement botaoCriarLista;
	
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/editText")
	private MobileElement campoTituloLista;
	
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/txtAdd")
	private MobileElement botaoGuardarLista;
	
	
	//Métodos
	public void acionarTeclaMais() {
		teclaMais.click();
	}

	public void acionarBotaoCriarNota() {
		botaoCriarNota.click();
	}

	public void acionarBotaoCriarLista() {
		botaoCriarLista.click();
	}
	
	public void preencherCampoTituloLista(String titulo) {
		campoTituloLista.sendKeys(titulo);
	}
	
	public void acionarBotaoGuardarLista() {
		botaoGuardarLista.click();
	}
	
	public void criarListaSemItens(String titulo) {
		acionarBotaoCriarLista();
		preencherCampoTituloLista(titulo);
		acionarBotaoGuardarLista();
	}
	
}
