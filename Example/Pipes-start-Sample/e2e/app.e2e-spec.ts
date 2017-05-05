import { PipesStartSamplePage } from './app.po';

describe('pipes-start-sample App', () => {
  let page: PipesStartSamplePage;

  beforeEach(() => {
    page = new PipesStartSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
