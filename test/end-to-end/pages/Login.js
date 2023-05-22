const I = actor();
const config = require('../config');

const retryCount = 3;
// const normalizeCaseId = caseId => {
//   return caseId.toString().replace(/\D/g, '');
// };
// eslint-disable-next-line no-unused-vars
const baseUrl = config.baseUrl;

module.exports = {

  fields: {
    email: '#username',
    password: '#password',
    submit: 'input[type="submit"]'
  },

  async loginAsSolicitor() {
    await I.retry(retryCount).amOnPage(`${process.env.XUI_WEB_URL}`);
    try {
      await I.retry(retryCount).click('#cookie-accept-submit');
      await I.retry(retryCount).click('#cookie-accept-all-success-banner-hide');
      await I.runAccessibilityTest();
      await I.retry(retryCount).seeElement('#authorizeCommand');
      await I.retry(retryCount).fillField(this.fields.email, config.legalProfessionalUserOne.email);
      await I.retry(retryCount).fillField(this.fields.password, config.legalProfessionalUserOne.password);
    } catch {
      await I.retry(retryCount).fillField(this.fields.email, config.legalProfessionalUserOne.email);
      await I.retry(retryCount).fillField(this.fields.password, config.legalProfessionalUserOne.password);
    }
    await I.retry(retryCount).click(this.fields.submit);
  },
  async loginAsCourtAdmin() {
    await I.wait('2');
    // const caseId = normalizeCaseId(await I.grabTextFrom('.markdown > h1:first-child'));
    // await I.retry(retryCount).click('Sign out');

    const caseId = '1684793475603503';

    // eslint-disable-next-line no-useless-concat
    await I.retry(retryCount).amOnPage(`${`${process.env.XUI_WEB_URL}` + '/case-details/'}${caseId}`);
    try {
      // await I.retry(retryCount).click('#cookie-accept-submit');
      // await I.retry(retryCount).click('#cookie-accept-all-success-banner-hide');
      await I.runAccessibilityTest();
      await I.retry(retryCount).seeElement('#authorizeCommand');
      await I.retry(retryCount).fillField(this.fields.email, config.legalProfessionalUserTwo.email);
      await I.retry(retryCount).fillField(this.fields.password, config.legalProfessionalUserTwo.password);
    } catch {
      await I.retry(retryCount).fillField(this.fields.email, config.legalProfessionalUserTwo.email);
      await I.retry(retryCount).fillField(this.fields.password, config.legalProfessionalUserTwo.password);
    }
    await I.retry(retryCount).click(this.fields.submit);
    await I.wait('10');
  }


};
