import axios from "axios";

export const api = axios.create({
  // baseURL: (process.env.BASE_URL || 'http://192.168.15.148:3333'),
  baseURL: 'https://portal-b2c-marks.vercel.app/api',
  // baseURL: 'http://192.168.15.91:3333',
})