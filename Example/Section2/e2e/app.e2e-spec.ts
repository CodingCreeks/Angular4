import { FirstAssignmentPage } from './app.po';

describe('first-assignment App', () => {
  let page: FirstAssignmentPage;

  beforeEach(() => {
    page = new FirstAssignmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
