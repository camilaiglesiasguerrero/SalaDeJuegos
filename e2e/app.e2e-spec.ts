import { SalaDeJuegosPage } from './app.po';

describe('sala-de-juegos App', function() {
  let page: SalaDeJuegosPage;

  beforeEach(() => {
    page = new SalaDeJuegosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
