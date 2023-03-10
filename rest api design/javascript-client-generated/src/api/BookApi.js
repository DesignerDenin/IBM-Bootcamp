/*
 * Library Management
 * Simple REST API for Library Management System, primarily just to track books
 *
 * OpenAPI spec version: 1.0.11
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.40
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {Book} from '../model/Book';

/**
* Book service.
* @module api/BookApi
* @version 1.0.11
*/
export class BookApi {

    /**
    * Constructs a new BookApi. 
    * @alias module:api/BookApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addBook operation.
     * @callback moduleapi/BookApi~addBookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Book{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new book to the library
     * Add a new book to the library
     * @param {module:model/Book} body Create a new book in the store
     * @param {Number} id 
     * @param {Number} isbn 
     * @param {String} name 
     * @param {String} author 
     * @param {Number} noOfPages 
     * @param {String} publicationDate 
     * @param {String} genre 
     * @param {module:api/BookApi~addBookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addBook(body, id, isbn, name, author, noOfPages, publicationDate, genre, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addBook");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addBook");
      }
      // verify the required parameter 'isbn' is set
      if (isbn === undefined || isbn === null) {
        throw new Error("Missing the required parameter 'isbn' when calling addBook");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling addBook");
      }
      // verify the required parameter 'author' is set
      if (author === undefined || author === null) {
        throw new Error("Missing the required parameter 'author' when calling addBook");
      }
      // verify the required parameter 'noOfPages' is set
      if (noOfPages === undefined || noOfPages === null) {
        throw new Error("Missing the required parameter 'noOfPages' when calling addBook");
      }
      // verify the required parameter 'publicationDate' is set
      if (publicationDate === undefined || publicationDate === null) {
        throw new Error("Missing the required parameter 'publicationDate' when calling addBook");
      }
      // verify the required parameter 'genre' is set
      if (genre === undefined || genre === null) {
        throw new Error("Missing the required parameter 'genre' when calling addBook");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'id': id,'isbn': isbn,'name': name,'author': author,'no of pages': noOfPages,'publication date': publicationDate,'genre': genre
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml'];
      let returnType = Book;

      return this.apiClient.callApi(
        '/book', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteBook operation.
     * @callback moduleapi/BookApi~deleteBookCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a book
     * delete a book
     * @param {Number} bookId Book id to delete
     * @param {module:api/BookApi~deleteBookCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteBook(bookId, callback) {
      
      let postBody = null;
      // verify the required parameter 'bookId' is set
      if (bookId === undefined || bookId === null) {
        throw new Error("Missing the required parameter 'bookId' when calling deleteBook");
      }

      let pathParams = {
        'bookId': bookId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/book/{bookId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBook operation.
     * @callback moduleapi/BookApi~getBookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Book{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find available books
     * Returns all books
     * @param {module:api/BookApi~getBookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getBook(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml'];
      let returnType = Book;

      return this.apiClient.callApi(
        '/book', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBookById operation.
     * @callback moduleapi/BookApi~getBookByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Book{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find book by ID
     * Returns a single book
     * @param {Number} bookId ID of book to return
     * @param {module:api/BookApi~getBookByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getBookById(bookId, callback) {
      
      let postBody = null;
      // verify the required parameter 'bookId' is set
      if (bookId === undefined || bookId === null) {
        throw new Error("Missing the required parameter 'bookId' when calling getBookById");
      }

      let pathParams = {
        'bookId': bookId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml'];
      let returnType = Book;

      return this.apiClient.callApi(
        '/book/{bookId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the replaceBook operation.
     * @callback moduleapi/BookApi~replaceBookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Book{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replace book by ID
     * Replace book by ID
     * @param {module:model/Book} body Replace book in the store
     * @param {Number} id 
     * @param {Number} isbn 
     * @param {String} name 
     * @param {String} author 
     * @param {Number} noOfPages 
     * @param {String} publicationDate 
     * @param {String} genre 
     * @param {module:api/BookApi~replaceBookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    replaceBook(body, id, isbn, name, author, noOfPages, publicationDate, genre, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceBook");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling replaceBook");
      }
      // verify the required parameter 'isbn' is set
      if (isbn === undefined || isbn === null) {
        throw new Error("Missing the required parameter 'isbn' when calling replaceBook");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling replaceBook");
      }
      // verify the required parameter 'author' is set
      if (author === undefined || author === null) {
        throw new Error("Missing the required parameter 'author' when calling replaceBook");
      }
      // verify the required parameter 'noOfPages' is set
      if (noOfPages === undefined || noOfPages === null) {
        throw new Error("Missing the required parameter 'noOfPages' when calling replaceBook");
      }
      // verify the required parameter 'publicationDate' is set
      if (publicationDate === undefined || publicationDate === null) {
        throw new Error("Missing the required parameter 'publicationDate' when calling replaceBook");
      }
      // verify the required parameter 'genre' is set
      if (genre === undefined || genre === null) {
        throw new Error("Missing the required parameter 'genre' when calling replaceBook");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'id': id,'isbn': isbn,'name': name,'author': author,'no of pages': noOfPages,'publication date': publicationDate,'genre': genre
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml'];
      let returnType = Book;

      return this.apiClient.callApi(
        '/book', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the searchBook operation.
     * @callback moduleapi/BookApi~searchBookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Book{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for books according to author, title or genre
     * Rearch for books according to author, title or genre
     * @param {Object} opts Optional parameters
     * @param {String} opts.author 
     * @param {String} opts.genre 
     * @param {String} opts.title 
     * @param {module:api/BookApi~searchBookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    searchBook(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'author': opts['author'],'genre': opts['genre'],'title': opts['title']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml'];
      let returnType = Book;

      return this.apiClient.callApi(
        '/book/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateBookById operation.
     * @callback moduleapi/BookApi~updateBookByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a book in the store with form data
     * @param {Number} bookId ID of book that needs to be updated
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Name of book that needs to be updated
     * @param {String} opts.author Author of book that needs to be updated
     * @param {String} opts.noOfPages No of pages in the book to be updated
     * @param {String} opts.publicationDate Publication date of the book to be updated
     * @param {String} opts.genre Genre of the book to be updated
     * @param {module:api/BookApi~updateBookByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateBookById(bookId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'bookId' is set
      if (bookId === undefined || bookId === null) {
        throw new Error("Missing the required parameter 'bookId' when calling updateBookById");
      }

      let pathParams = {
        'bookId': bookId
      };
      let queryParams = {
        'name': opts['name'],'author': opts['author'],'no of pages': opts['noOfPages'],'publication date': opts['publicationDate'],'genre': opts['genre']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/book/{bookId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}