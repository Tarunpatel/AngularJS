/*import { browser, element, by, ElementFinder} from 'protractor'
import { Select } from './Select';*/
describe('AngularJS Tutorial', function () {

	it('URL Launch', function () {
		var URL = 'https://angularjs.org/'
		browser.get(URL);
		browser.sleep(3000);
		browser.manage().window().maximize();
		expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
		});
	
	it('test1', function(){
		var txtName = element(by.model('yourName')).sendKeys('Tarun');
		browser.waitForAngular();
		var guru = element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
		browser.waitForAngular();
		expect(guru.getText()).toEqual('Hello Tarun!');
		browser.waitForAngular();
		});
	
	it('Redirect on new page', function () {
		var click_Learn = element(by.xpath('.//*[@id="navbar-main"]/div/div/ul/li[1]/a'));
		click_Learn.click();
		console.log('click');
		browser.waitForAngular();
		var click_Tutorial = element(by.xpath('.//*[@id="navbar-main"]/div/div/ul/li[@class="dropdown open"]/ul/li[1]/a'));
		click_Tutorial.click();
		console.log('On Tutorial');
		var text = browser.getTitle();
		expect(text).toEqual('AngularJS: Tutorial: Tutorial');
	});
	
	/*it('Selection dropdown practice', function () {
		browser.manage().timeouts().implicitlyWait(30000);
		let dropdownElement:ElementFinder = element(by.model('$ctrl.selectedVersion'));
		let sel:Select = new Select(dropdownElement);
		sel.SelectByIndex(4).click();
			});*/
});
