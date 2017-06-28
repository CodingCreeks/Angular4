import { HelloYarnPage } from './app.po';

describe('hello-yarn App', () => {
  let page: HelloYarnPage;

  beforeEach(() => {
    page = new HelloYarnPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
