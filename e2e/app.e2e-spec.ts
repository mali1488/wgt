import { WgtPage } from './app.po';

describe('wgt App', () => {
  let page: WgtPage;

  beforeEach(() => {
    page = new WgtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
