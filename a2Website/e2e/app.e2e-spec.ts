import { A2WebsitePage } from './app.po';

describe('a2-website App', () => {
  let page: A2WebsitePage;

  beforeEach(() => {
    page = new A2WebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
