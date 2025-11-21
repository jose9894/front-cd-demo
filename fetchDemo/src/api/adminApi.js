import { Api } from "./api";

export async function getAllUser(){
 const response = await Api.get("/Admin/user");
  return response.data;
}