export const isLoading = (obj) => Object.keys(obj).length === 0;
export const cleanHTML = (str) => str.replace(/(<p>|<\/p>)/g, "");
