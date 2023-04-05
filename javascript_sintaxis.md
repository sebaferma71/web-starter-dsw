# Sintaxis básica JavaScript
#dsw #js 

A continuación trataremos conceptos básico de javascript para poder empezar a programar en este lenguaje.

Aunque podemos hacerle desde cualquier entorno on-line, navegador o IDE en particular comenzaremos con el uso de Codium / VS Code.

Por lo que se recomienda haber revisado la sección anterior e instalado el software recomendado.

## 1 - Variables, Constantes y Tipos base
En JavaScript (js de aquí en más) se utilizan las siguientes palabras reservadas para definir variables y constantes: **let**, **const** y **var**

### let
**let** se utiliza para declarar variables en JavaScript y opcionalmente asignarles un valor. Las variables declaradas con let tiene un scope de bloque es decir que existen dentro del bloque de llaves `{}` donde se las define.

El valor de una variable puede ser modificado multiples veces pero solo puede declararse una vez dentro del bloque.

Al declarar una variable puede asignarse un valor o puede hacerse más adelante, si se declara una variable sin asignarle un valor la misma adquiere el valor `undefined`.

Este ejemplo declara la variable `a` y le asigna valor luego mientras que declara la variable `b` y le asigna el valor durante la declaración. Luego el valor de B es reasignado y se muestra nuevamente.

```javascript
let a;
let b = 'see ya...';
a = 'hello world';
console.log(a);
console.log(b);
b = '...later';
console.log(b);
```

salida:
```bash
$ node 01-variables-constants-types.js 
hello world
see ya...
...later
```

### const
Permite definir una variable pero cuyo valor no puede modificarse por una reasignación, es decir cuyo valor es constante. Si tratan de reasignar esta variable obtendrían un error `TypeError: Assignment to constant variable.`. Normalmente se llama a estas variables "variables constantes" aunque suene como una contradicción.

Este es el uso principal de una constante, evitar que erróneamente se reasigne un valor.

ejemplo de definición:
```javascript
const a = 'hello';
console.log(a);
```

para generar error de reasignación basta con ejecutar el siguiente código:
```javascript
const a = 'hello';
console.log(a);
a = 'bye';
```

Sin embargo que una variable sea constante no significa que su contenido no cambie. Aunque nos adelantaremos un poco y utilizaremos un objeto el siguiente código no genera errores:
```javascript
const obj = { name: 'John' };
console.log(obj);
obj.name = 'John Doe';
console.log(obj);
```

resultado de la ejecución:
```bash
$ node 01.02-const.js 
{ name: 'John' }
{ name: 'John Doe' }
```

No entremos en detalles sobre la definición del objeto que asignamos a `obj`, eso lo veremos un poco más adelante. Lo importante es notar que el contenido de las variables const pueden cambiar sus valores internos, pero nunca puedo reasignarlas a otro elemento

Por ejemplo el siguiente código solo agrega la línea del final y vuelve a generar el error `TypeError: Assignment to constant variable.`
```javascript
const obj = { name: 'John' };
console.log(obj);
obj.name = 'John Doe';
console.log(obj);
obj = { name: 'John Doe' };
```

### var
**var** se utiliza para definir variables. Es la forma original que tenía el lenguaje para hacerlo. Son similares a let pero con esta diferencia:

El ámbito de var es global o de función. Esto combinado con una propiedad llamada hoisting que significa que al declarar una variable en cualquier punto del código equivale a definirla al principio de su scope puede causar problemas:

* una variable no puede existir dentro de un bloque y aunque se redefina una existente en un subloque usa el scope global o de función.
* al tratar de usar una variable antes de definirla no dará error, devolverá undefined.

Por estos motivos var no es recomendado para nuevos desarrollos. Se recomienda el uso de let y const en todo el código moderno, dejando el uso de var prácticamente para retro compatibilidad.

### Tipos

JavaScript es un lenguaje de programación de tipado dinámico y débilmente tipado.

Por lo tanto las variables de JS no son asociadas a ningún tipo  y las mismas pueden ser asignadas (y reasignadas) con cualquier tipo. Por ejemplo:
```javascript
let myVariable = 42;    // foo ahora es un número
myVariable     = 'bar'; // foo ahora es un string
myVariable     = true;  // foo ahora es un booleano
```

Sin embargo JavaScript si tiene tipos.

#### Tipos primitivos
- [Undefined](https://developer.mozilla.org/docs/Glossary/Undefined)
- [Boolean](https://developer.mozilla.org/docs/Glossary/Boolean)
- [Number](https://developer.mozilla.org/docs/Glossary/Number)
- [String](https://developer.mozilla.org/docs/Glossary/String)
- [BigInt](https://developer.mozilla.org/docs/Glossary/BigInt)
- [Symbol](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [Null](https://developer.mozilla.org/docs/Glossary/Null): aunque es primitivo por un bug histórico de JS typeof devuelve object es un tipo primitivo.

#### Tipos no primitivos
- [Object](https://developer.mozilla.org/docs/Glossary/Object)
- [Function](https://developer.mozilla.org/docs/Glossary/Function)

Nota: Más adelante mencionaremos funciones pero un dato relevante es que las variables con datos primitivos se pasan por valor mientras que los no primitivos se pasan por referencia.

### Enlaces
[Variables en MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
[Estructuras de datos en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)


## 2 - Arrays

Los [arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) permiten almacenar una colección de items, pero a diferencia de la mayoría de los lenguajes los arrays no son una estructura primitiva si no un objeto Array.

Características relevantes:
* Los array pueden contener objetos de distintos tipos (Existen [typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) también). 
* Los arrays son de tamaño dinámico.
* Son no asociativos, solo se pueden acceder por el índide, no por una key.
* Los array comienzan en 0.
* Si un array se copia, la copia contiene referencias a los objetos dentro del array original. (Excepto por literales o se usa structuredClone o literales)
* No son estructuras densamente agrupadas, pueden contener lugares vacíos.
* No causa error invocar una posición fuera del límite
* Se los puede acceder con `[]` o el método `at`

Definir un array:
```javascript
let array = [1, true, 'story'];

console.log(`the array contains ${array}`);
console.log(`the first element of array is ${array[0]}`);
console.log(`the seccond element of array is ${array.at(1)}`);
console.log(`the last element from the end of array is ${array.at(-1)}`);
console.log(`the length of array is ${array.length}`);
console.log(`exceding the maximun size of an array won't throw an error it will throw: ${array[3]}`);

array[5] = 'last';
console.log(`array arent packed, they can have empty spots: ${array}`);
```

salida:
```bash
$ node 01.03-array.js 
the array contains 1,true,story
the first element of array is 1
the seccond element of array is true
the last element from the end of array is story
the length of array is 3
exceding the maximun size of an array wont throw an error it will throw: undefined
array arent packed, they can have empty spots: 1,true,story,,,last
```

### Referencias
* [Arrays en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Métodos relevantes
En el link anterior hay una referencia completa de los métodos que pueden usarse sobre los arrays pero estos son los más importantes

#### Manipular elementos
* [at](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at): devuelve el elemento en la posición indicada por el índice, los números positivos devuelven los elementos desde el inició y los negativos desde el final 
* [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push): agrega un elemento al final
* [pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop): remueve el último elemento de un array
* [unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift): agrega un elemento al principio
* [shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift): remueve primer elemento del array

#### Métodos basados en funciones y expresiones
Aunque aún no hemos visto funciones en detalle luego de revisarlo estos son los métodos más relevantes para operar sobre los elementos.
* [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [findLast](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast), [findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [findLastIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex) e [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf): buscar elementos o sus posiciones en el array
* [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter): obtener un subconjunto de los elementos en base a una función
* [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map): crea un nuevo array con el resultado de aplicar la función designada a cada elemento
* [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce): permite calcular un resultado al aplicar una función de reducción al array
* [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort): ordenar los elementos del array
* [reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse): revertir el orden de los elementos del array

## 3 - if - switch
## if...else
La sentencia [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) de JS funciona de la misma forma que los demás lenguajes, se plantea una condición en el if y si es verdadera se ejecuta el bloque de if y si es falta se ejecuta el bloque else.

Sintaxis if-else
```javascript
if (boolean condition){
  //if block
} else {
  //else block
}
```

Sin embargo en JS (y algunos otros lenguajes) no solo hay valores true (verdaderos) y false (falsos) si no que hay expresiones que son evaluadas como si fueran verdaderas [truthly values](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) y expresiones que son evaluadas como si fueran falsas [falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) pero no son valores booleanos.

Ejemplo:
```javascript
let a = 1 + 2;
let b;

if (a > 3) {
  console.log('a>3 is true');
} else {
  console.log('a>3 is false');
}

if (a) {
  console.log('a is truthy');
} else {
  console.log('a is falsy');
}

if (b) {
  console.log('b is truthy');
} else {
  console.log('b is falsy');
}
```

Resultado:
```bash
$ node 01.04-if.js 
a>3 is false
a is truthy
b is falsy
```

En la condición de if pueden utilizarse cualquier expresión y en caso de no devolver un resultado booleano se evaluará el resultado en base a los truthly y falsy values.

Algunos de los operadores más relevantes que suelen usarse en la condición de una sentencia if: 
* Igualdad: `==` (doble igual)
* Igualdad estricta: `===` (triple igual)
* Desigualdad: `!=`
* Desigualdad estricta: `!==`
* Comparadores de magnitud `>, >=,<=,<
* OR: `||`
* AND: `&&`
* NOT: `!`

En JS existen la igualdad y la igualdad estricta al igual que la desigualdad y la desigualdad estricta. Son doble igual, triple igual, signo de admiración e igual y signo de admiración y doble igual respectivamente.

La diferencia entre los operadores dobles y triples es que los operadores al comparar elementos que son de distinto tipo tratan de convertirlos y compararlos mientras que los estrictos no.

Ejemplo:
```javascript
console.log(`equality 1=='1': ${1 == '1'}`);
console.log(`strict equality 1==='1': ${1 === '1'}`);

console.log(`inequality 1!='1': ${1 != '1'}`);
console.log(`strict inequality 1!=='1': ${1 !== '1'}`);
```

Resultado:
```bash
$ node 01.05-equality.js 
equality 1=='1': true
strict equality 1==='1': false
inequality 1!='1': false
strict inequality 1!=='1': true
```

### switch statement
La sentencia switch de JS utiliza evalúa un expresión y la compara con una serie de valores indicadas por las cláusulas case y ejecuta el código del bloque correspondiente a esa cláusula. Opcionalmente se puede utilizar una cláusula default al final por si la expresión no matchea con ninguna cláusula case.

```javascript
switch (expression){
  case value1:
    //block 1
    break;
  case value2:
    //block 1
    break;
  case value3:
    //block 1
    break;
  default:
    //default block
    break;
}
```

Ejemplo:
```javascript
let a = '1';

switch (a) {
  case 1:
    console.log(`a is 1`);
    break;
  case 2:
    console.log(`a is 2`);
    break;
  case '1':
    console.log(`a is '1'`);
    break;
  default:
    console.log('no match');
    break;
}
```

Resultado:
```bash
$ node 01.06-switch.js 
a is '1'
```

## 4 - loops & iterations

### loops
Para realizar bucles en JS tenemos las sentencias while, do...while y for.

#### while
La sentencia while es un bucle que permite repetir un bloque de código mientras la expresión de condición sea verdadera. La condición es evaluada al principio antes de ejecutar el código

```javascript
while (condition){
  // statements
}
```


#### do...while
La sentencia do...while es un bucle como while pero la condición se evalúa al final de la iteración. Asegurando al menos una ejecución

```javascript
do {
  // statements
} while (condition)
```

#### for
for es una sentencia que permite ejecutar un bucle de forma similar al while, permite realizar una inicialización, una expresión que sirve de condición, mientras sea verdadera el bucle se ejecutará y una expresión final que se ejecutará al finalizar la iteración.

Tiene además una sección de bloque de código.

```javascript
for (initialize; condition-expression; final-expresion){
	//statements
}
```

Ejemplo:
```javascript
let i = 0;
let j = 0;

console.log('while');
while (i < 3) {
  console.log(`i is ${i}, so i<3 is ${i < 3}`);
  i++;
}

console.log('do...while');
do {
  console.log(`j is ${j}, so j<0 is ${j < 0} but it executed once`);
} while (j < 0);

console.log('for');

for (let k = 0; k < 3; k++) {
  console.log(`k is ${k}, so k<3 is ${k < 3}`);
}
```

Resultado:
```bash
$ node 01.07-loops.js 
while
i is 0, so i<3 is true
i is 1, so i<3 is true
i is 2, so i<3 is true
do...while
j is 0, so j<0 is false but it executed once
for
k is 0, so k<3 is true
k is 1, so k<3 is true
k is 2, so k<3 is true
```

### Iterations

Las iteraciones sobre algún elemento, por ejemplo un array, son comunmente realizadas utilizando for y forEach. Aunque se encuentran disponibles muchos métodos útiles en los arrays como map, filter, etc.

Cabe mencionar que for es una sentencia mientras que forEach es un método

#### for iterations
Para iterar sobre un array con un for se debe utilizar una variable de índice y la propiedad length.

```javascript
for (let i = 0; i < someArray.length; i++) {
  console.log(someArray[i]);
}
```

Este tipo de iteraciones tiene una cantidad fija de ejecuciones pero en el for se pueden definir otras condiciones diferentes o incluso adicionales con `||`y `&&`.

#### forEach iteration
En el caso de forEach a diferencia del for es un método del array que ejecuta una función (llamada callback) sobre cada elemento del array.

En esta etapa lo utilizaremos sin entrar en detalles sobre el callback ya que pronto veremos funciones y callbacks este tema.

Las siguientes opciones del forEach dan el mismo resultado.

```javascript
const datos = ['array', 1, true, undefined, 'story'];

function show(element) {
  console.log(element);
}

console.log('use an already defined function');
datos.forEach(show);

console.log('creating the function');
datos.forEach(function (element) {
  console.log(element);
});

console.log('arrow function');
datos.forEach((element) => console.log(element));
```

En este caso  definimos una función y se la pasamos como parámetro a método forEach para ejecutarla para cada elemento. La función puede crearse con una sentencia y utilizar un nombre para ello (primer caso), o crearla específicamente dentro del método como los otros dos métodos a esto se le conoce como function expression. En el tercer caso se utiliza una sintaxis ligeramente diferente de las function expressions llamadas arrow functions.

El método forEach le pasa a la función en cada iteración el elemento, luego el índice y finalmente el array completo. No es necesario que recibamos todos, solo que mantengan el orden.

En el ejemplo a continuación iteramos sobre un mismo array con un for y forEach. Para poder mostrar el índice en el forEach recibimos el segundo parámetro, pero si solo deberíamos mostrar el elemento podríamos, como en el ejemplo anterior, solo utilizar el primero.

Ejemplo:
```javascript
const datos = ['array', 1, true, undefined, 'story'];

console.log('for');
for (let i = 0; i < datos.length; i++) {
  const element = datos[i];
  console.log(`el elemento ${i} es ${element} de tipo ${typeof element}`);
}

console.log('forEach');
datos.forEach((element, i) => {
  console.log(`el elemento ${i} es ${element} de tipo ${typeof element}`);
});
```

Resultado:
```bash
$ node 01.08-iterate.js 
for
el elemento 0 es array de tipo string
el elemento 1 es 1 de tipo number
el elemento 2 es true de tipo boolean
el elemento 3 es undefined de tipo undefined
el elemento 4 es story de tipo string
forEach
el elemento 0 es array de tipo string
el elemento 1 es 1 de tipo number
el elemento 2 es true de tipo boolean
el elemento 3 es undefined de tipo undefined
el elemento 4 es story de tipo string
```