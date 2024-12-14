import "@/lib/axiosSetting";
import axios from "axios";

export default async function getUser() {
  if (typeof window !== "undefined") {
    if (
      localStorage.getItem("accessToken") &&
      localStorage.getItem("accessToken") !== "null"
    ) {
      let response = null;
      await axios.get(`/user/my`).then((res) => (response = res));
      return response;
    }
  }
  return null;
}
