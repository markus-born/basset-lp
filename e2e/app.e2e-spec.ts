import { NewSourcePage } from './app.po';

describe('new-source App', () => {
  let page: NewSourcePage;

  beforeEach(() => {
    page = new NewSourcePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
