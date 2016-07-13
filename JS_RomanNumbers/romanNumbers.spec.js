describe('romanNumbers-js-kata', function(){

  it('should have I when one passed', function() {
    var result = romanNumbers.convertToRoman(1);
    expect(result).toBe('I');
  });
  it('should have II when two passed', function() {
    var result = romanNumbers.convertToRoman(2);
    expect(result).toBe('II');
  });
  //...
});
