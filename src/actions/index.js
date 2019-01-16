import { API_CALL } from "./types";

export const callAPI = prop => async dispatch => {
  console.log("API called");
  var response = await fetch(
    "https://api.mercadolibre.com/sites/MLM/search?q=orange"
  );
  let body = await response.json();
  console.log(body);
  dispatch({ type: API_CALL, payload: body });
};
