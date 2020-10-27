const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;

function start() {
  let svar = prompt('Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“');

  if (svar === 'kóða') {
    shift();
  }

  else if (svar === 'afkóða') {
    shift();
  }

  else {
    alert(`Veit ekki hvaða aðgerð „${svar}“ er. Reyndu aftur`);
    start();
  }
}

start();

function shift () {
  let n = prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]');

  if (31 <= n && n >= 1) {
    prompt(`Gefðu upp strenginn sem á að ${svar} með hliðrun ${n}:`);
  }

  else {
    alert(`${n} er ekki heiltala á bilinu [1, 31]. Reyndu aftur`);
    shift();
  }
}

/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */
function encode(str, n) {
  return str;
}

/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
function decode(str, n) {
  return str;
}

console.assert(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
console.assert(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
console.assert(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
console.assert(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf');
