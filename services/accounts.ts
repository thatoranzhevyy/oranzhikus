import {useAPI} from '~/composables';

export const getAllAccounts = () => {
  return useAPI('/accounts');
};