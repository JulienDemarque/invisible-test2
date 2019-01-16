import { API_CALL } from "./types";

export const callAPI = query => async dispatch => {
  console.log(
    `https://api.mercadolibre.com/sites/MLM/search?q=${query.searchTerm}&sort=${
      query.sort
    }`
  );
  var response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLM/search?q=${
      query.searchTerm
    }&sort=${query.sort}&offset=${(query.page - 1) * 50}`,
    { mode: "cors" }
  );
  let body = await response.json();
  console.log(body);
  dispatch({ type: API_CALL, payload: body });
};
