import { AngularFrontendMidspacePage } from './app.po';

describe('angular-frontend-midspace App', () => {
  let page: AngularFrontendMidspacePage;

  beforeEach(() => {
    page = new AngularFrontendMidspacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
