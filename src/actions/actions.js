import axios from "axios";
import { gnomesAPI, genderGuessingAPI} from "./../../utils";

import {
  REQUEST_GNOMES,
  REQUEST_GENDER,
  SEARCH_TERM,
  FILTER_BY_JOB,
  ORDER_BY_FILTER,
  CURRENT_PAGE
} from "./types";

export const getGnomes = (gnomes) => ({
  type: REQUEST_GNOMES,
  payload: gnomes
});

export const fetchGnomes = () => async (dispatch) => {
  const offlineGnomes = localStorage.getItem("gnomes");
  if (offlineGnomes) {
    const gnomes = JSON.parse(offlineGnomes);
    return dispatch(getGnomes(gnomes));
  }

  try {
    const { data: { Brastlewark: gnomes } } = await axios.get(gnomesAPI);
    const gnomesToJSON = JSON.stringify(gnomes);
    localStorage.setItem("gnomes", gnomesToJSON);
    dispatch(getGnomes(gnomes));
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchGender = (params) => async (dispatch) => {
  const offlineGender = localStorage.getItem("gender");
  if (offlineGender) {
    const gender = JSON.parse(offlineGender);
    return dispatch(getGender(gender));
  }

  try {
    const {data} = await axios.get(genderGuessingAPI+params);
    //localStorage.setItem("gender", genderToJSON);
    dispatch(getGender(data));
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getGender = (gender) => ({
  type: REQUEST_GENDER,
  payload: gender
});

export const getSearchText = (searchTerm) => ({
  type: SEARCH_TERM,
  payload: searchTerm
});

export const filterByJob = (job) => ({
  type: FILTER_BY_JOB,
  payload: job
});

export const updateOrderBy = (order) => ({
  type: ORDER_BY_FILTER,
  payload: order
});

export const getCurrentPage = (page) => ({
  type: CURRENT_PAGE,
  payload: page
});
