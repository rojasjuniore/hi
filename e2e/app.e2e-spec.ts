import { Rojasjuniore.Co.VePage } from './app.po';

describe('rojasjuniore.co.ve App', () => {
  let page: Rojasjuniore.Co.VePage;

  beforeEach(() => {
    page = new Rojasjuniore.Co.VePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
