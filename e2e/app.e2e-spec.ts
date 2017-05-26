import { TelerikReportingNg4Page } from './app.po';

describe('telerik-reporting-ng4 App', () => {
  let page: TelerikReportingNg4Page;

  beforeEach(() => {
    page = new TelerikReportingNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
