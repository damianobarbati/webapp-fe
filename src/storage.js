const keyPrefix = process.env.LOCAL_STORAGE_PREFIX || '';

Storage.prototype.set = function (key, value) {
  const prefixed_key = `${keyPrefix}${key}`;
  this.setItem(prefixed_key, JSON.stringify(value));
};

Storage.prototype.get = function (key) {
  const prefixed_key = `${keyPrefix}${key}`;
  const value = this.getItem(prefixed_key);

  try {
    return JSON.parse(value);
  } catch (error) {
    console.warn(`removing malformed JSON ${keyPrefix}${key} from localStorage`);
    window.localStorage.remove(key);
  }
};

Storage.prototype.remove = function (key) {
  const prefixed_key = `${keyPrefix}${key}`;
  return this.removeItem(prefixed_key);
};
