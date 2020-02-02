/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * territories
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import removeAccents from './utils/removeAccents';
import territoriesData from './data/territoriesData';

export interface TerritoryInterface {
  name: string;
  province: string;
  t_code: string;
  p_code: string;
}

export interface TerritoryListInterface {
  [x: string]: TerritoryInterface;
}

interface FilterTerritoryNameInterface {
  name: string;
  province?: string;
}

interface FilterTerritoryProvinceInterface {
  name?: string;
  province: string;
}

interface FilterTerritoryAllInterface {
  name?: string;
  province: string;
}

type FilterTerritoryType =
  | FilterTerritoryNameInterface
  | FilterTerritoryProvinceInterface
  | FilterTerritoryAllInterface;

export const territoriesList: TerritoryListInterface = territoriesData;

/**
 * territoryFunc
 * @param {object} filter
 * @param {string} filter.name
 * @param {string} filter.province
 * @returns {object} data - Returns territory data
 * @returns {string} data.name - Territory name
 * @returns {string} data.province - Province name
 * @returns {string} data.t_code - Territory code
 * @returns {string} data.p_code - Province code
 */

function territoriesFunc(filter: FilterTerritoryType | void): TerritoryListInterface {
  if (!filter) {
    return territoriesList;
  }

  const newTerritoriesList: TerritoryListInterface = {};

  for (const key of Object.keys(territoriesList)) {
    const territory = territoriesList[key] as TerritoryInterface;

    const matchedName = filter.name && territory.name.includes(filter.name);
    const matchedProvince = filter.province && territory.province.includes(filter.province);

    if (filter.name && filter.province && matchedName && matchedProvince) {
      newTerritoriesList[key] = territory;
    }

    if (filter.name && matchedName && !filter.province) {
      newTerritoriesList[key] = territory;
    }

    if (filter.province && matchedProvince && !filter.name) {
      newTerritoriesList[key] = territory;
    }
  }

  return newTerritoriesList;
}

export default territoriesFunc;
