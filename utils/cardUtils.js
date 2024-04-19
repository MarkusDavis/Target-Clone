import {
  validateCardNumber,
  validateExpirationDate,
  validateCVC,
} from "card-validator";

export const formatCreditCardNumber = (value) => {
  const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = v.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0; i < match.length; i += 4) {
    parts.push(match.slice(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  }
  return value;
};

export const validateCardNumber = (value) => {
  return validateCardNumber(value.replace(/\s/g, "")).isValid;
};

export const validateExpiry = (value) => {
  return validateExpirationDate(value).isValid;
};

export const validateCVC = (value) => {
  return validateCVC(value).isValid;
};
