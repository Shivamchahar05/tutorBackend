const errorTemplates = {
    "object.unknown": (label, t) => `${label} ${t ? t("VALIDATION.IS_NOT_ALLOWED") : "is not allowed"}`,
    "any.allowOnly": (label, t) => `${label} ${t ? t("VALIDATION.IS_INVALID") : "is invalid"}`,
    "any.empty": (label, t) => `${label} ${t ? t("VALIDATION.IS_REQUIRED") : "is required"}`,
    "string.empty": (label, t) => `${label} ${t ? t("VALIDATION.CANNOT_BE_EMPTY") : "cannot be empty"}`,
    "any.required": (label, t) => `${label} ${t ? t("VALIDATION.IS_REQUIRED") : "is required"}`,
    "object.base": (label, t) => `${label} ${t ? t("VALIDATION.IS_INVALID") : "is invalid"}`,
    "number.base": (label, t) => `${label} ${t ? t("VALIDATION.IS_INVALID") : "is invalid"}`,
    "string.base": (label, t) => `${label} ${t ? t("VALIDATION.IS_INVALID") : "is invalid"}`,
    "string.alphanum": (label, t) => `${label} ${t ? t("VALIDATION.MUST_BE_ALPHANUMERIC") : "must be alphanumeric"}`,
    "string.max": (label, t, limit) => `${label} ${t ? t("VALIDATION.IS_TOO_LONG", { limit }) : `cannot be longer than ${limit} characters`}`,
    "string.min": (label, t, limit) => `${label} ${t ? t("VALIDATION.IS_TOO_SHORT", { limit }) : `must be at least ${limit} characters`}`,
    "string.email": (label, t) => `${label} ${t ? t("VALIDATION.MUST_BE_AN_EMAIL") : "must be an email address"}`,
    "boolean.base": (label, t) => `${label} ${t ? t("VALIDATION.IS_INVALID") : "is invalid"}`,
    "number.max": (label, t, limit) => `${label} ${t ? t("VALIDATION.IS_TOO_HIGH", { limit }) : `cannot be greater than ${limit}`}`,
    "number.min": (label, t, limit) => `${label} ${t ? t("VALIDATION.IS_TOO_LOW", { limit }) : `must be at least ${limit}`}`,
    "array.max": (label, t, limit) => `${label} ${t ? t("VALIDATION.HAS_TOO_MANY_ITEMS", { limit }) : `cannot have more than ${limit} items`}`,
    "string.pattern.base" : (label, t) => `${label} ${t ? t("VALIDATION.EXTENSION_NOT_VALID") : " pattern not matched"}`,
  };

const joiErrorFormatter = (error, t) => {
    try {
      const errorType = error.details[0]["type"];
      const label = error.details[0]["context"]["label"].toString();
      const limit = error.details[0]["context"]["limit"];
    //  console.log("joiErrorFormatter",error)
      const formatError = errorTemplates[errorType];
      if (!formatError) {return  error?.details[0]["message"].replace(/"/g, '')|| 'Invalid Input'; }
      return formatError(label, t, limit).trim();
    } catch (err) {
      console.error(err);
      return "Invalid input";
    }
  };
  
  module.exports={joiErrorFormatter}
