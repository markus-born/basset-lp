import { BassetLpPage } from './app.po';

describe('basset-lp App', () => {
  let page: BassetLpPage;

  beforeEach(() => {
    page = new BassetLpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
