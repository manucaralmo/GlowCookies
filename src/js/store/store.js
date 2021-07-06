export const getFromStore = () => JSON.parse(localStorage.getItem("GlowCookies")) || false

export const setToStore = (data) => {
  localStorage.setItem("GlowCookies", JSON.stringify(data))
}