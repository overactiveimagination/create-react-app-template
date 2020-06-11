function getStorageType(type = "local") {
  if (type === "session") {
    return sessionStorage;
  }
  return localStorage;
}

export const saveToStorage = (key, data, session = false) => {
  const storage = getStorageType(session);
  storage.setItem(key, typeof data !== "string" ? JSON.stringify(data) : data);
};

export const getFromStorage = (key, parseJson = false, session = false) => {
  const storage = getStorageType(session);
  const item = storage.getItem(key);
  return parseJson ? JSON.parse(item) : item;
};

export const removeFromStorage = (key, session = false) => {
  const storage = getStorageType(session);
  return storage.removeItem(key);
};
