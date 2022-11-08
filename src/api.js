export const API_END_POINT = "http://localhost:4000/questions";
const request = async (url) => {
  const res = await fetch(url);
  if (res.status === 200) {
    const json = await res.json();
    return json;
  }
  throw new Error("요청에 실패함");
};
export const fetchLanguages = async (keyword) =>
  request(`${API_END_POINT}/languages?keyword=${keyword}`);
