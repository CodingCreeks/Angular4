import { Ng4StylesAnimationsPage } from './app.po';

describe('ng4-styles-animations App', () => {
  let page: Ng4StylesAnimationsPage;

  beforeEach(() => {
    page = new Ng4StylesAnimationsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
