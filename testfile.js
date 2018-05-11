const EmailInput = require('./html/email-input');
let tom =  new EmailInput({ value: 'olegpolyakov@outlook.com', minlength: 2, maxlength: 16 });
console.log(tom.isValid)