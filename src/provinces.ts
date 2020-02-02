/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * provinces
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import removeAccents from './utils/removeAccents';
import provincesData from './data/provincesData';

export interface ProvinceInterface {
  name: string;
  p_code: string;
}

export interface ProvinceListInterface {
  [x: string]: ProvinceInterface;
}

export const provincesList: ProvinceListInterface = provincesData;

/**
 * provinceFunc without any argument
 * @returns {object} - Returns province data
 */
function provincesFunc(province: void): ProvinceListInterface;

/**
 * provinceFunc with a string argument
 * @param {string} province
 * @returns {object} data - Returns province data
 * @returns {string} data.name - Province name
 * @returns {string} data.p_code - Province code
 */
function provincesFunc(province: string): ProvinceInterface;

/**
 * provinceFunc
 * @param {string} province
 * @returns {object} - Returns province data
 */
function provincesFunc(province: void | string): ProvinceListInterface | ProvinceInterface {
  if (!province) {
    return provincesList;
  }

  const provinceWithoutAccent = removeAccents(province.toLowerCase());
  const provinceData = provincesList[provinceWithoutAccent];

  if (!provinceData) {
    throw new Error("Province doesn't exist");
  }

  return provinceData;
}

export default provincesFunc;
