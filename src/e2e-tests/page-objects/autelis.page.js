// autelis.page.js
import expect from 'expect';
import Page from './page';
import MenuComponent from './menu.component';
let counter = 0;

class AutelisPage extends Page {
    get pageContent() {return $('//div[contains(@class, "ion-page")]')}
    get autelisTab() {return $('#autelis-tabs-tab-autelis')}
    get offButton() {return $('//button[text()[contains(., "OFF")]]')}
    get poolButton() {return $('//button[text()[contains(., "POOL")]]')}
    get spaButton() {return $('//button[text()[contains(., "SPA")]]')}
    get switchMessageOff() {return $('//div[text()="All Off"]')}
    get switchMessagePool() {return $('//div[text()[starts-with(., "Pool")]]')}
    get switchMessageSpa() {return $('//div[text()[starts-with(., "Spa")]]')}
    get switchMessageSolar() {return $('//div[text()[starts-with(., "Solar")]]')}

    get solarOnButton() {return $('//div[text()[starts-with(., "Solar")]]/parent::*//button[text()="On"]')}
    get solarOffButton() {return $('//div[text()[starts-with(., "Solar")]]/parent::*//button[text()="Off"]')}
    get cleanerOnButton() {return $('//div[text()="Cleaner"]/parent::*//button[text()="On"]')}
    get cleanerOffButton() {return $('//div[text()="Cleaner"]/parent::*//button[text()="Off"]')}

    get poolHeatOnButton() {return $('//div[text()="Pool Heat"]/parent::*//button[text()="On"]')}
    get poolHeatOffButton() {return $('//div[text()="Pool Heat"]/parent::*//button[text()="Off"]')}
    get poolLightOnButton() {return $('//div[text()="Pool Light"]/parent::*//button[text()="On"]')}
    get poolLightOffButton() {return $('//div[text()="Pool Light"]/parent::*//button[text()="Off"]')}
    get waterfallOnButton() {return $('//div[text()="Waterfall"]/parent::*//button[text()="On"]')}
    get waterfallOffButton() {return $('//div[text()="Waterfall"]/parent::*//button[text()="Off"]')}

    get spaHeatOnButton() {return $('//div[text()="Spa Heat"]/parent::*//button[text()="On"]')}
    get spaHeatOffButton() {return $('//div[text()="Spa Heat"]/parent::*//button[text()="Off"]')}
    get jetsOnButton() {return $('//div[text()="Jets"]/parent::*//button[text()="On"]')}
    get jetsOffButton() {return $('//div[text()="Jets"]/parent::*//button[text()="Off"]')}
    get spaLightOnButton() {return $('//div[text()="Spa Light"]/parent::*//button[text()="On"]')}
    get spaLightOffButton() {return $('//div[text()="Spa Light"]/parent::*//button[text()="Off"]')}
    get blowerOnButton() {return $('//div[text()="Blower"]/parent::*//button[text()="On"]')}
    get blowerOffButton() {return $('//div[text()="Blower"]/parent::*//button[text()="Off"]')}

    // 0 - lower; 1 - higher
    get poolHeatAdjButtons() {return $$('//div[text()="Pool Heat"]/parent::*//div[@class="float-right"]/button')}
    get poolHeatCounter() {return $('//div[text()="Pool Heat"]/parent::*//div[@class="float-right"]/input')}
    // 0 - lower; 1 - higher
    get spaHeatAdjButtons() {return $$('//div[text()="Spa Heat"]/parent::*//div[@class="float-right"]/button')}
    get spaHeatCounter() {return $('//div[text()="Spa Heat"]/parent::*//div[@class="float-right"]/input')}

    checkPoolHeatDecreased() {
        expect(parseInt(this.poolHeatCounter.getValue())).to.equal(counter - 1);
    }

    checkPoolHeatIncreased() {
        expect(parseInt(this.poolHeatCounter.getValue())).to.equal(counter + 1);
    }

    checkSpaHeatDecreased() {
        expect(parseInt(this.spaHeatCounter.getValue())).to.equal(counter - 1);
    }

    checkSpaHeatIncreased() {
        expect(parseInt(this.spaHeatCounter.getValue())).to.equal(counter + 1);
    }

    clickBlowerOnButton() {
        this.blowerOnButton.click();
    }

    clickBlowerOffButton() {
        this.blowerOffButton.click();
    }

    clickCleanerOnButton() {
        this.cleanerOnButton.click();
    }

    clickCleanerOffButton() {
        this.cleanerOffButton.click();
    }

    clickDecreasePoolHeat() {
        counter = parseInt(this.poolHeatCounter.getValue());
        this.poolHeatAdjButtons[0].click();
    }

    clickDecreaseSpaHeat() {
        counter = parseInt(this.spaHeatCounter.getValue());
        this.spaHeatAdjButtons[0].click();
    }

    clickIncreasePoolHeat() {
        counter = parseInt(this.poolHeatCounter.getValue());
        this.poolHeatAdjButtons[1].click();
    }

    clickIncreaseSpaHeat() {
        counter = parseInt(this.spaHeatCounter.getValue());
        this.spaHeatAdjButtons[1].click();
    }

    clickJetsOnButton () {
        this.jetsOnButton.click();
    }

    clickJetsOffButton () {
        this.jetsOffButton.click();
    }

    clickPoolHeatOnButton() {
        this.poolHeatOnButton.click();
    }

    clickPoolHeatOffButton() {
        this.poolHeatOffButton.click();
    }

    clickPoolLightOnButton() {
        this.poolLightOnButton.click();
    }

    clickPoolLightOffButton() {
        this.poolLightOffButton.click();
    }

    clickOffButton() {
        this.offButton.click();
    }

    clickPoolButton() {
        this.poolButton.click();
    }

    clickSolarOnButton() {
        this.solarOnButton.click();
    }

    clickSolarOffButton() {
        this.solarOffButton.click();
    }

    clickSpaButton() {
        this.spaButton.click();
    }

    clickSpaHeatOnButton() {
        this.spaHeatOnButton.click();
    }

    clickSpaHeatOffButton() {
        this.spaHeatOffButton.click();
    }

    clickSpaLightOnButton() {
        this.spaLightOnButton.click();
    }

    clickSpaLightOffButton() {
        this.spaLightOffButton.click();
    }

    clickWaterfallOnButton() {
        this.waterfallOnButton.click();
    }

    clickWaterfallOffButton() {
        this.waterfallOffButton.click();
    }

    isButtonDisabled(button) {
        browser.waitUntil(() => {
            return button.getAttribute('class').includes('btn-dark');
        }, 5000);
    }

    isButtonEnabled(button) {
        browser.waitUntil(() => {
            return (button.getAttribute('class').includes('btn-success') | button.getAttribute('class').includes('btn-danger'));
        }, 5000);
    }

    isPoolAndSpaParametersTurnedOff() {
        browser.waitUntil(() => {
            return this.offButton.getAttribute('class').includes('btn-dark');
        }, 5000);
        browser.waitUntil(() => {
            return this.switchMessageOff.isDisplayed();
        }, 5000);
    }

    isPoolParameterDisplayed() {
        browser.waitUntil(() => {
            return this.poolButton.getAttribute('class').includes('btn-success');
        }, 5000);
        expect(this.switchMessagePool.getText()).toMatch(/^Pool\s\d{2,3}°F$/);
    }

    isSpaAndSolarParameterDisplayed() {
        browser.waitUntil(() => {
            return this.spaButton.getAttribute('class').includes('btn-danger');
        }, 5000);
        expect(this.switchMessageSpa.getText()).toMatch(/^Spa\s\d{2,3}°F$/);
        expect(this.switchMessageSolar.getText()).toMatch(/^Solar\s\d{2,3}°F$/);
    }

    goToAutelisTab() {
        this.autelisTab.click();
    }
}

module.exports = new AutelisPage('', '/autelis');