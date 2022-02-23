class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  // For Product Name
  search() {
    const keyword = this.queryStr.keyword
      ? {
          //Creating RegeXp For searching Keyword
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    console.log(keyword);

    this.query = this.query.find({ ...keyword });
    //Return The class Ref
    return this;
  }

  //For Category

  filter() {
    //Creating copy of ref with spread operator
    const queryCopy = { ...this.queryStr };
    console.log(queryCopy);

    // Remove some  fields For Category
    const removeFields = ["keyword", "page", "limit"];
    removeFields.forEach((key) => delete queryCopy[key]);
    //    this.query = this.query.find(queryCopy);

    //Filter For Price And Rating
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));
    console.log(queryStr);
    return this;
  }

  // For Showing Per Page Result
  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;

    //showing a product and skipping

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);
    
    return this;
  }
}

module.exports = ApiFeatures;
