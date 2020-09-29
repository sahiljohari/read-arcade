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

  // Get Best Sellers list. If no date is provided returns the latest list.
  async getList(params: booksListType = { list: "" }) {
    return await axios.get(apiUrls.lists, {
      params: { ...params, "api-key": this.apiKey },
    });
  }

  // Get top 5 books for all the Best Sellers lists for specified date.
  async getOverview(params: booksOverviewType = {}) {
    return await axios.get(apiUrls.overview, {
      params: { ...params, "api-key": this.apiKey },
    });
  }

  // Get Best Sellers list names.
  async getBookCategoryNames() {
    return await axios.get(apiUrls.names, {
      params: { "api-key": this.apiKey },
    });
  }

  // Get book reviews.
  async getBookReviews(params: booksReviewsType = { title: "" }) {
    return await axios.get(apiUrls.reviews, {
      params: { ...params, "api-key": this.apiKey },
    });
  }
}

export default new Api();
