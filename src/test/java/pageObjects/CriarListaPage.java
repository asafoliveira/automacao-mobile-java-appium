package pageObjects;

import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class CriarListaPage {
	
	//Construtor
	public CriarListaPage(AppiumDriver<?> driver) {
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	//Campos
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/btnAddCheckbox")
	private MobileElement teclaMaisItemLista;
	
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/editText")
	private MobileElement campoCheckbox;
	
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/btnAdd")
	private MobileElement botaoAdicionarItemLista;
	
	//Métodos
	public void acionarTeclaMaisItemLista() {
		teclaMaisItemLista.click();
	}
	
	public void preencherCampoCheckbox(String checkbox) {
		campoCheckbox.sendKeys(checkbox);
	}
	
	public void acionarBotaoAdicionarItemLista() {
		botaoAdicionarItemLista.click();
	}
	
	public void adicionarUmItemLista(String checkbox) {
		acionarTeclaMaisItemLista();
		preencherCampoCheckbox(checkbox);
		acionarBotaoAdicionarItemLista();
	}
	
	public void adicionarDoisItensLista(String checkbox, String checkbox1) {
		adicionarUmItemLista(checkbox);
		preencherCampoCheckbox(checkbox1);
		acionarBotaoAdicionarItemLista();
	}

}
