 /*
  * TODO: ES5 for now until I make a webpack plugin for protractor
  */
describe('App', function() {

  beforeEach(function() {
    browser.get('/');
  });


  it('should have a title', function() {
    var subject = browser.getTitle();
    var result  = 'FoodButton.io';
    expect(subject).toEqual(result);
  });

  it('should have <header>', function() {
    var subject = element(by.deepCss('app /deep/ header')).isPresent();
    var result  = true;
    expect(subject).toEqual(result);
  });

});
