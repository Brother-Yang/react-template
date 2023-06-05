import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosRequestConfig } from 'axios';
import { store } from '@/store';
import { request } from '@/utils/request';

/**
 * P ParamsTyoe, R ReturnType
 * @param {object} options
 * @returns {object}
 */
export const createAsyncThunkByRequest = <P = unknown, R = unknown>(
  options: AxiosRequestConfig
) => {
  const call = createAsyncThunk(`${options.url}/${options.method}`, (params?: P): Promise<R> => {
    const isGetParams = options.url.toLowerCase() === 'get' ? { params } : { data: params };
    return request<R>({ ...options, ...isGetParams });
  });
  return {
    call: (params?: P) => store.dispatch(call(params)).unwrap(),
    type: call.fulfilled.type,
  };
};

/**
 * P ParamsTyoe, R ReturnType
 * @param {object} options
 * @param {function} callback
 * @returns {object}
 */
export const createAsyncThunkByCallback = <P = unknown, R = unknown>(
  options: AxiosRequestConfig,
  callback: (p?: P, o?: AxiosRequestConfig) => Promise<R>
) => {
  const call = createAsyncThunk(
    `${options.url}/${options.method}`,
    (params?: P): Promise<R> => callback(params, options)
  );
  return {
    call: (params?: P) => store.dispatch(call(params)).unwrap(),
    type: call.fulfilled.type,
  };
};
