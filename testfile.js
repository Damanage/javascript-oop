const TextInput = require('./html/text-input');
let tom =  new TextInput({value: 'pfsjdfhskjdfhsl', minlength: 2, maxlength: 16 });
console.log(tom.isValid)