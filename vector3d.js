/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Aram Pérez Dios
 * @since Apr 22 2022
 * 
 * @desc Class representing 3d vectors
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-p09-oop2-alu0101244488}
 * @license GPLv3
 */

'use strict';

/**@module Vector3D */

/** 
* @class Class which represents rational numbers
*/
export class Vector3D {
  /**
   * @desc X coordinate
   * @access private
   */
  #coordX = 0

  /**
   * @desc Y coordinate
   * @access private
   */
  #coordY = 0

  /**
   * @desc Z coordinate
   * @access private
   */
  #coordZ = 0

  /**
   * @desc Constructor set real and imaginary part
   * @param {Number} real real default set to 0             
   * @param {Number} imaginary imaginary default set to 0
   */
  constructor(coordX = 0, coordY = 0, coordZ = 0) {
    if (!isNaN(coordX)) this.#coordX = coordX;
    else throw new Error(`Error with X coordinate part: ${coordX} is not a number`);
    if (!isNaN(coordY)) this.#coordY = coordY;
    else throw new Error(`Error with Y coordinate part: ${coordY} is not a number`);
    if (!isNaN(coordZ)) this.#coordZ = coordZ;
    else throw new Error(`Error with Z coordinate part: ${coordZ} is not a number`);
  }

  /**
   * @desc Get X coordinate
   * @returns {Number} X coordinate
   */
  getXcoord() {
    return this.#coordX;
  }
  
  /**
   * @desc Get Y coordinate
   * @returns {Number} Y coordinate
   */
  getYcoord() {
    return this.#coordY;
  }

  /**
   * @desc Get Z coordinate
   * @returns {Number} Z coordinate
   */
  getZcoord() {
    return this.#coordZ;
  }
  
  /**
   * @desc Method to return Vector3D as string
   * @returns {String} string with format '(x, y, z)'
   */
  toString() {
    return `(${this.#coordX}, ${this.#coordY}, ${this.#coordZ})`;
  }

  /**
   * @desc Method calculate to sum two vectors
   * @param {Vector3D} vector3d vector to add
   * @returns {Vector3D} new vector 3d
   */
  add(vector3d) {
    let coordX = this.#coordX + vector3d.getXcoord();
    let coordY = this.#coordY + vector3d.getYcoord();
    let coordZ = this.#coordZ + vector3d.getZcoord();
    return new Vector3D(coordX, coordY, coordZ);
  }

  /**
   * @desc Method calculate the multiplication of the vector
   *       with an scalar
   * @param {number} scalar number representing scalar
   * @returns {Vector3D} new vector 3d
   */
  multScalar(scalar) {
    let coordX = this.#coordX * scalar;
    let coordY = this.#coordY * scalar;
    let coordZ = this.#coordZ * scalar;
    return new Vector3D(coordX, coordY, coordZ);
  }


  /**
   * @desc Method calculate the dot product of two vectors
   * @param {Vector3D} vector3d vector to use to calculate the dot product
   * @returns {Vector3D} new vector 3d
   */
  dotProd(vector3d) {
    return  this.#coordX * vector3d.getXcoord()
        + this.#coordY * this.#coordY
        + this.#coordZ * this.#coordZ;
  }

  /**
   * @desc Get the length of the vectorwa
   * @returns {Number} length of the vector
   */
  mod() {
    let length = this.#coordX * this.#coordX
        + this.#coordY * this.#coordY
        + this.#coordZ * this.#coordZ;
    return Math.sqrt(length);
  }

  /**
   * @desc Method to return a vector normalized
   * @returns {Vector3D} normalized vector 
   */
  normailize() {
    let dividend = this.mod();
    let coordX = this.#coordX / dividend;
    let coordY = this.#coordY / dividend;
    let coordZ = this.#coordZ / dividend;
    return new Vector3D(coordX, coordY, coordZ);
  }
}