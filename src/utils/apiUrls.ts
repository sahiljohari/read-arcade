import { buildUrlPath } from "./urlBuilder";
import { stringObjectType } from "./types";

const urls: stringObjectType = {};

urls.root = "/";
urls.lists = buildUrlPath(urls.root, "lists/");
urls.overview = buildUrlPath(urls.lists, "/overview/");
urls.names = buildUrlPath(urls.lists, "/names/");
urls.reviews = buildUrlPath(urls.root, "reviews/");

export const apiUrls = urls;
