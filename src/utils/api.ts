import { apiUrls } from "./apiUrls";
import { booksListType, booksOverviewType, booksReviewsType } from "./types";
import axios from "axios";
class Api {
  baseUrl: string;
  apiKey: string;

  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL || "";
    this.apiKey = process.env.REACT_APP_API_KEY || "";

    axios.defaults.baseURL = this.baseUrl;
  }

  getList(params: booksListType = { list: "" }) {
    axios
      .get(apiUrls.lists, { params: { ...params, "api-key": this.apiKey } })
      .then((res) => console.log("getList", res))
      .catch((err) => console.error(err));
  }

  getOverview(params: booksOverviewType = {}) {
    axios
      .get(apiUrls.overview, { params: { ...params, "api-key": this.apiKey } })
      .then((res) => console.log("getOverview", res))
      .catch((err) => console.error(err));
  }

  getBookCategoryNames() {
    axios
      .get(apiUrls.names, { params: { "api-key": this.apiKey } })
      .then((res) => console.log("getBookCategoryNames", res))
      .catch((err) => console.error(err));
  }

  getBookReviews(params: booksReviewsType = {}) {
    axios
      .get(apiUrls.reviews, { params: { ...params, "api-key": this.apiKey } })
      .then((res) => console.log("getBookReviews", res))
      .catch((err) => console.error(err));
  }
}

export default new Api();
