package pageObjects;

import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class CriarNotaPage {
	
	public CriarNotaPage(AppiumDriver<?> driver) {
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/editTitle")
	private MobileElement campoTituloNota;
	
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/editContent")
	private MobileElement campoNotas;
	
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/btnAdd")
	private MobileElement botaoGuardarNota;
	
	public void preencherCampoTituloNota(String titulo) {
		campoTituloNota.sendKeys(titulo);
	}
	
	public void preencherCampoNotas(String notas) {
		campoNotas.sendKeys(notas);
	}
	
	public void acionarBotaoGuardarNota() {
		botaoGuardarNota.click();
	}
	
	public void criarNota(String titulo, String nota) {
		preencherCampoTituloNota(titulo);
		preencherCampoNotas(nota);
		acionarBotaoGuardarNota();
	}

}
