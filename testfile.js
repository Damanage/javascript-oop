const Element = require('./html/element');
let tom = new Element({tag:'input',id:'tom'});
tom.addClass('some-class')
tom.addClass('--focused')
tom.addClass('semi--focused')
console.log(tom.className)
tom.removeClass('--focused')
console.log(tom.className)