import axios from "axios";
import { IRes } from "./types";

const apiKey: string = "3d0afd2e91fc43d491da1396615c26aa";

export async function getNews(page: number, pageSize: number) {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`
    );

    const data: IRes = response.data;

    return data;
  } catch (error: any) {
    return error;
  }
}
