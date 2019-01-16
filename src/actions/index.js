import { API_CALL } from "./types";

export const callAPI = query => async dispatch => {
  console.log(
    `https://api.mercadolibre.com/sites/MLM/search?q=${query.searchTerm}&sort=${
      query.sort
    }`
  );
  var response = await fetch(
    `https://api.mercadolibre.com/sites/MLM/search?q=${query.searchTerm}&sort=${
      query.sort
    }&offset=0`
  );
  let body = await response.json();
  console.log(body);
  dispatch({ type: API_CALL, payload: body });
};
