import { ElectronAngularPage } from './app.po';

describe('electron-angular App', () => {
  let page: ElectronAngularPage;

  beforeEach(() => {
    page = new ElectronAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
