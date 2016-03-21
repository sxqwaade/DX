'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /prolist when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/prolist");
  });


  describe('prolist', function() {

    beforeEach(function() {
      browser.get('index.html#/prolist');
    });


    it('should render prolist when user navigates to /prolist', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for prolist/);
    });

  });


  describe('prodetail', function() {

    beforeEach(function() {
      browser.get('index.html#/prodetail');
    });


    it('should render prodetail when user navigates to /prodetail', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for prodetail/);
    });

  });
});
