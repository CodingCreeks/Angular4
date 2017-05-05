import { HttpStartPage } from './app.po';

describe('http-start App', () => {
  let page: HttpStartPage;

  beforeEach(() => {
    page = new HttpStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
