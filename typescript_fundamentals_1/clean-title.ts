let str: string = ' broken STREET light';

str = str.trim();
console.log(str);

str = str.toLowerCase();
console.log(str);

str = str.toUpperCase();
console.log(str);

str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
console.log(str);

const contains_light: boolean = (str.search("light") === -1) ? false : true;
console.log(`Conatains light: ${contains_light}`);

const replaced: string = str.replace("street", "road");
console.log(replaced);