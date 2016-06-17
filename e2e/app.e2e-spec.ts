import { PcardsPage } from './app.po';

describe('pcards App', function() {
  let page: PcardsPage;

  beforeEach(() => {
    page = new PcardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
