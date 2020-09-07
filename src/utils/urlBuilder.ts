import {
  REGEX_ANY_TRAILING_SLASHES,
  REGEX_ANY_LEADING_SLASHES,
  REGEX_DUPLICATE_SLASHES,
} from "./constants";

export const buildUrlPath = (
  rootPath: string,
  childPath: string = ""
): string => {
  return normalizePath(rootPath + childPath);
};

const normalizePath = (path: string): string => {
  return path
    .replace(REGEX_ANY_TRAILING_SLASHES, "")
    .replace(REGEX_ANY_LEADING_SLASHES, "/")
    .replace(REGEX_DUPLICATE_SLASHES, "/");
};
