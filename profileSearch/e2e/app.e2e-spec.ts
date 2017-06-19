import { ProfileSearchPage } from './app.po';

describe('profile-search App', () => {
  let page: ProfileSearchPage;

  beforeEach(() => {
    page = new ProfileSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
