import { PatientApiData } from "@/app/types/types";
import axios, { AxiosPromise } from "axios";

export const PatientApi = (auth: string) => {
  const instance = axios.create({
    baseURL: "https://fedskillstest.coalitiontechnologies.workers.dev",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
    },
  });

  return {
    getPatients: async () => {
      return await instance.get("/");
    },
  };
};

export const getAllPatients = async () => {
  const username = process.env.NEXT_PUBLIC_API_USERNAME;
  const password = process.env.NEXT_PUBLIC_API_PASSWORD;
  console.log("Username:", username); // Log the username
  console.log("Password:", password); // Log the password (careful in production)

  if (!username || !password) {
    throw new Error("Missing API credentials.");
  }

  const auth = btoa(`${username}:${password}`);
  const api = PatientApi(auth as string);
  const response = await api.getPatients();
  return response?.data as PatientApiData[];
};
