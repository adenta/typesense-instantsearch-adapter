"use strict";

export class Configuration {
  constructor(options = {}) {
    this.server = options.server || {
      masterNode: {
        host: "localhost",
        port: "8108",
        path: "",
        protocol: "http"
      }
    };

    this.additionalSearchParameters = options.additionalSearchParameters || {};

    this.additionalSearchParameters.queryBy =
      this.additionalSearchParameters.queryBy || "";

    this.additionalSearchParameters.highlightFullFields =
      this.additionalSearchParameters.highlightFullFields ||
      this.additionalSearchParameters.queryBy;
    
    this.additionalSearchParameters.filterBy =
      this.additionalSearchParameters.filterBy || "";
  }

  validate() {
    if (this.additionalSearchParameters.queryBy.length === 0) {
      throw new Error(
        "Missing required parameter: additionalSearchParameters.queryBy"
      );
    }
  }
}
