import { Ng4StylesAnimationsP3Page } from './app.po';

describe('ng4-styles-animations-p3 App', () => {
  let page: Ng4StylesAnimationsP3Page;

  beforeEach(() => {
    page = new Ng4StylesAnimationsP3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
