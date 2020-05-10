/* global fetch */
import camelize from 'camelize';
import {
    BASE_URL
  } from '../constants/ApiConstants';
export const callApi = (url, options) =>
  fetch(`${BASE_URL}${url}`, options)
    .then(
      response => (response.ok
        ? response.json()
        : Promise.reject(response.text())
      ),
      error => Promise.reject(error))
    .then(
      json => ({ json: camelize(json) }),
      error => ({ error }))
    .catch(error => ({ error }));