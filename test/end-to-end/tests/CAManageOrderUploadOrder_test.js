Feature('CA Manage Order Upload Order - TS Court Admin');

Scenario(
  'CA Manage Order Upload Order Serve order Personally @nightly',
  async({ I }) => {
    await I.loginAsCourtAdmin();
    await I.createC100CaseByCourtAdmin();
    await I.manageOrderUploadOrderServeNowPersonally();
  }
).retry(1);

Scenario(
  'CA Manage Order Upload Order - For Judge review - @nightly',
  async({ I }) => {
    await I.loginAsCourtAdmin();
    await I.createC100CaseByCourtAdmin();
    await I.manageOrderUploadOrderForJudgeReview();
  }
);
