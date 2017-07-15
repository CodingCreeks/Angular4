import { Ng4StylesAnimationsSPage } from './app.po';

describe('ng4-styles-animations-s App', () => {
  let page: Ng4StylesAnimationsSPage;

  beforeEach(() => {
    page = new Ng4StylesAnimationsSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
