import { WarsawjsWorkshop4portalVodPage } from './app.po';

describe('warsawjs-workshop4portal-vod App', function() {
  let page: WarsawjsWorkshop4portalVodPage;

  beforeEach(() => {
    page = new WarsawjsWorkshop4portalVodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
