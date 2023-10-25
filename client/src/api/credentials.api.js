import axios from "axios";

const credentialApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/credentials/",
});

export const getAllCredentials = () => credentialApi.get("/");

export const getCredential = (id) => credentialApi.get(`/${id}`);

export const createCredentials = (credential) => credentialApi.post("/", credential);

export const deleteCredentials = (id) => credentialApi.delete(`/${id}/`);

export const setCredentials = (id,value) => credentialApi.put(`/${id}/`,value);

export const patchCredentials = (id,f) => credentialApi.patch(`/${id}/`,f);



