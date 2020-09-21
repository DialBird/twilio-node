/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { SerializableClass } from '../../../interfaces';

/**
 * Initialize the UserList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function UserList(version: V1): UserListInstance;

/**
 * Options to pass to update
 *
 * @property attributes - The JSON Object string that stores application-specific data
 * @property friendlyName - The string that you assigned to describe the resource
 * @property roleSid - The SID of a service-level Role to assign to the user
 */
interface UserInstanceUpdateOptions {
  attributes?: string;
  friendlyName?: string;
  roleSid?: string;
}

interface UserListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): UserContext;
  /**
   * create a UserInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: UserListInstanceCreateOptions, callback?: (error: Error | null, item: UserInstance) => any): Promise<UserInstance>;
  /**
   * Streams UserInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: UserInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams UserInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: UserListInstanceEachOptions, callback?: (item: UserInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a user
   *
   * @param sid - The SID of the User resource to fetch
   */
  get(sid: string): UserContext;
  /**
   * Retrieve a single target page of UserInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: UserPage) => any): Promise<UserPage>;
  /**
   * Retrieve a single target page of UserInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: UserPage) => any): Promise<UserPage>;
  /**
   * Lists UserInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: UserInstance[]) => any): Promise<UserInstance[]>;
  /**
   * Lists UserInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: UserListInstanceOptions, callback?: (error: Error | null, items: UserInstance[]) => any): Promise<UserInstance[]>;
  /**
   * Retrieve a single page of UserInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: UserPage) => any): Promise<UserPage>;
  /**
   * Retrieve a single page of UserInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: UserListInstancePageOptions, callback?: (error: Error | null, items: UserPage) => any): Promise<UserPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property attributes - The JSON Object string that stores application-specific data
 * @property friendlyName - The string that you assigned to describe the resource
 * @property identity - The string that identifies the resource's User
 * @property roleSid - The SID of a service-level Role to assign to the user
 */
interface UserListInstanceCreateOptions {
  attributes?: string;
  friendlyName?: string;
  identity: string;
  roleSid?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface UserListInstanceEachOptions {
  callback?: (item: UserInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface UserListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface UserListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface UserPayload extends UserResource, Page.TwilioResponsePayload {
}

interface UserResource {
  account_sid: string;
  attributes: string;
  chat_service_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  identity: string;
  is_online: boolean;
  role_sid: string;
  sid: string;
  url: string;
}

interface UserSolution {
}


declare class UserContext {
  /**
   * Initialize the UserContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param sid - The SID of the User resource to fetch
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a UserInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: UserInstance) => any): Promise<UserInstance>;
  /**
   * remove a UserInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: UserInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a UserInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: UserInstance) => any): Promise<UserInstance>;
  /**
   * update a UserInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: UserInstanceUpdateOptions, callback?: (error: Error | null, items: UserInstance) => any): Promise<UserInstance>;
}


declare class UserInstance extends SerializableClass {
  /**
   * Initialize the UserContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The SID of the User resource to fetch
   */
  constructor(version: V1, payload: UserPayload, sid: string);

  private _proxy: UserContext;
  accountSid: string;
  attributes: string;
  chatServiceSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a UserInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: UserInstance) => any): Promise<UserInstance>;
  friendlyName: string;
  identity: string;
  isOnline: boolean;
  /**
   * remove a UserInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: UserInstance) => any): Promise<boolean>;
  roleSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a UserInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: UserInstance) => any): Promise<UserInstance>;
  /**
   * update a UserInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: UserInstanceUpdateOptions, callback?: (error: Error | null, items: UserInstance) => any): Promise<UserInstance>;
  url: string;
}


declare class UserPage extends Page<V1, UserPayload, UserResource, UserInstance> {
  /**
   * Initialize the UserPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: UserSolution);

  /**
   * Build an instance of UserInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: UserPayload): UserInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { UserContext, UserInstance, UserInstanceUpdateOptions, UserList, UserListInstance, UserListInstanceCreateOptions, UserListInstanceEachOptions, UserListInstanceOptions, UserListInstancePageOptions, UserPage, UserPayload, UserResource, UserSolution }
