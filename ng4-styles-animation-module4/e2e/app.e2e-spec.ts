import { Ng4StylesAnimationModule4Page } from './app.po';

describe('ng4-styles-animation-module4 App', () => {
  let page: Ng4StylesAnimationModule4Page;

  beforeEach(() => {
    page = new Ng4StylesAnimationModule4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
