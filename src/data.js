export const API_KEY = "AIzaSyDj3eIS1OwzTEfeRzZ6P4qyu3gI2rI5dpo";
export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  }
  return value;
};
