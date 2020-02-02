/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * provinces
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import removeAccents from './utils/removeAccents';

export interface ProvinceInterface {
  province: string;
  pcode_province: string;
}


export interface ProvinceListInterface {
  [x: string]: ProvinceInterface
}

export const provincesList: ProvinceListInterface = {
  'bas-uele': {
    province: 'Bas-Uele',
    pcode_province: 'CD52',
  },
  equateur: {
    province: 'Équateur',
    pcode_province: 'CD41',
  },
  'haut-katanga': {
    province: 'Haut-Katanga',
    pcode_province: 'CD71',
  },
  'haut-lomami': {
    province: 'Haut-Lomami',
    pcode_province: 'CD73',
  },
  'Haut-Uele': {
    province: 'Haut-Uele',
    pcode_province: 'CD53',
  },
  ituri: {
    province: 'Ituri',
    pcode_province: 'CD54',
  },
  kasai: {
    province: 'Kasaï',
    pcode_province: 'CD92',
  },
  'kasai-central': {
    province: 'Kasaï-Central',
    pcode_province: 'CD91',
  },
  'kasai-oriental': {
    province: 'Kasaï-Oriental',
    pcode_province: 'CD82',
  },
  kinshasa: {
    province: 'Kinshasa',
    pcode_province: 'CD10',
  },
  'kongo-central': {
    province: 'Kongo-Central',
    pcode_province: 'CD20',
  },
  kwango: {
    province: 'Kwango',
    pcode_province: 'CD31',
  },
  kwilu: {
    province: 'Kwilu',
    pcode_province: 'CD32',
  },
  lomami: {
    province: 'Lomami',
    pcode_province: 'CD81',
  },
  lualaba: {
    province: 'Lualaba',
    pcode_province: 'CD72',
  },
  'mai-ndombe': {
    province: 'Maï-Ndombe',
    pcode_province: 'CD33',
  },
  maniema: {
    province: 'Maniema',
    pcode_province: 'CD63',
  },
  mongala: {
    province: 'Mongala',
    pcode_province: 'CD44',
  },
  'nord-Kivu': {
    province: 'Nord-Kivu',
    pcode_province: 'CD61',
  },
  'nord-ubangi': {
    province: 'Nord-Ubangi',
    pcode_province: 'CD43',
  },
  sankuru: {
    province: 'Sankuru',
    pcode_province: 'CD83',
  },
  'sud-kivu': {
    province: 'Sud-Kivu',
    pcode_province: 'CD62',
  },
  'sud-ubangi': {
    province: 'Sud-Ubangi',
    pcode_province: 'CD42',
  },
  tanganyika: {
    province: 'Tanganyika',
    pcode_province: 'CD74',
  },
  tshopo: {
    province: 'Tshopo',
    pcode_province: 'CD51',
  },
  tshuapa: {
    province: 'Tshuapa',
    pcode_province: 'CD45',
  },
};

/**
 * provinceFunc without any argument
 * @returns {object} - Returns province data
 */
function provincesFunc(province: void): ProvinceListInterface;

/**
 * provinceFunc with a string argument
 * @param {string} province
 * @returns {object} data - Returns province data
 * @returns {string} data.province - Province name
 * @returns {string} data.pcode_province - Province code
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
};


export default provincesFunc;
