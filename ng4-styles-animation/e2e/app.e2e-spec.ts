import { NgStylesAnimationPage } from './app.po';

describe('ng-styles-animation App', () => {
  let page: NgStylesAnimationPage;

  beforeEach(() => {
    page = new NgStylesAnimationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
