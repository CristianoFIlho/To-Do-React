import React from 'react';

/**
 * Retorna um novo objeto com apenas alguns atributos do objeto original.
  * Observação: os atributos/propriedades ainda estarão vinculados ao objeto antigo.
 *
 * @param  {Object} object     The object.
 * @param  {Array}             Array of selected attributes.
 * @return {Object}            New object with only the selected attributes.
 */
export function objectWithOnly(object, attrs) {
    let newObject = {};

    attrs.forEach(attr => {
        newObject[attr] = object[attr].bind(object);
    });

    return newObject;
}

/**
 * Envoltórios reagem a elementos filhos com adereços.
 */
export function wrapChildrenWith(children, props) {
    return React.Children.map(children, child => React.cloneElement(child, props));
}

/**
 * Checks if the string includes the substring.
 *
 * @param  {String} str
 * @param  {String} substr
 * @return {Boolean}
 */
export function stringInclues(str, substr) {
    return str.indexOf(substr) !== -1;
}
