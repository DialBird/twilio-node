'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../base/Page');  /* jshint ignore:line */
var ParticipantList = require('./room/roomParticipant').ParticipantList;
var RecordingRulesList = require('./room/roomRecordingRule').RecordingRulesList;
var RoomRecordingList = require('./room/recording').RoomRecordingList;
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var serialize = require('../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var RoomList;
var RoomPage;
var RoomInstance;
var RoomContext;

/* jshint ignore:start */
/**
 * Initialize the RoomList
 *
 * @constructor Twilio.Video.V1.RoomList
 *
 * @param {Twilio.Video.V1} version - Version of the resource
 */
/* jshint ignore:end */
RoomList = function RoomList(version) {
  /* jshint ignore:start */
  /**
   * @function rooms
   * @memberof Twilio.Video.V1#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Video.V1.RoomContext}
   */
  /* jshint ignore:end */
  function RoomListInstance(sid) {
    return RoomListInstance.get(sid);
  }

  RoomListInstance._version = version;
  // Path Solution
  RoomListInstance._solution = {};
  RoomListInstance._uri = `/Rooms`;
  /* jshint ignore:start */
  /**
   * create a RoomInstance
   *
   * @function create
   * @memberof Twilio.Video.V1.RoomList#
   *
   * @param {object} [opts] - Options for request
   * @param {boolean} [opts.enableTurn] -
   *          Enable Twilio's Network Traversal TURN service
   * @param {room.room_type} [opts.type] - The type of room
   * @param {string} [opts.uniqueName] -
   *          An application-defined string that uniquely identifies the resource
   * @param {string} [opts.statusCallback] -
   *          The URL to send status information to your application
   * @param {string} [opts.statusCallbackMethod] -
   *          The HTTP method we should use to call status_callback
   * @param {number} [opts.maxParticipants] -
   *          The maximum number of concurrent Participants allowed in the room
   * @param {boolean} [opts.recordParticipantsOnConnect] -
   *          Whether to start recording when Participants connect
   * @param {room.video_codec|list} [opts.videoCodecs] -
   *          An array of the video codecs that are supported when publishing a track in the room
   * @param {string} [opts.mediaRegion] -
   *          The region for the media server in Group Rooms
   * @param {object} [opts.recordingRules] - A collection of Recording Rules
   * @param {boolean} [opts.audioOnly] -
   *          Indicates whether the room will only contain audio track participants for group rooms.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed RoomInstance
   */
  /* jshint ignore:end */
  RoomListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'EnableTurn': serialize.bool(_.get(opts, 'enableTurn')),
      'Type': _.get(opts, 'type'),
      'UniqueName': _.get(opts, 'uniqueName'),
      'StatusCallback': _.get(opts, 'statusCallback'),
      'StatusCallbackMethod': _.get(opts, 'statusCallbackMethod'),
      'MaxParticipants': _.get(opts, 'maxParticipants'),
      'RecordParticipantsOnConnect': serialize.bool(_.get(opts, 'recordParticipantsOnConnect')),
      'VideoCodecs': serialize.map(_.get(opts, 'videoCodecs'), function(e) { return e; }),
      'MediaRegion': _.get(opts, 'mediaRegion'),
      'RecordingRules': serialize.object(_.get(opts, 'recordingRules')),
      'AudioOnly': serialize.bool(_.get(opts, 'audioOnly'))
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new RoomInstance(this._version, payload, this._solution.sid));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Streams RoomInstance records from the API.
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
   * @function each
   * @memberof Twilio.Video.V1.RoomList#
   *
   * @param {object} [opts] - Options for request
   * @param {room.room_status} [opts.status] - Read only the rooms with this status
   * @param {string} [opts.uniqueName] - Read only rooms with this unique_name
   * @param {Date} [opts.dateCreatedAfter] -
   *          Read only rooms that started on or after this date, given as YYYY-MM-DD
   * @param {Date} [opts.dateCreatedBefore] -
   *          Read only rooms that started before this date, given as YYYY-MM-DD
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  RoomListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          callback(instance, onComplete);
        });

        if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * Lists RoomInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Video.V1.RoomList#
   *
   * @param {object} [opts] - Options for request
   * @param {room.room_status} [opts.status] - Read only the rooms with this status
   * @param {string} [opts.uniqueName] - Read only rooms with this unique_name
   * @param {Date} [opts.dateCreatedAfter] -
   *          Read only rooms that started on or after this date, given as YYYY-MM-DD
   * @param {Date} [opts.dateCreatedBefore] -
   *          Read only rooms that started before this date, given as YYYY-MM-DD
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  RoomListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of RoomInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Video.V1.RoomList#
   *
   * @param {object} [opts] - Options for request
   * @param {room.room_status} [opts.status] - Read only the rooms with this status
   * @param {string} [opts.uniqueName] - Read only rooms with this unique_name
   * @param {Date} [opts.dateCreatedAfter] -
   *          Read only rooms that started on or after this date, given as YYYY-MM-DD
   * @param {Date} [opts.dateCreatedBefore] -
   *          Read only rooms that started before this date, given as YYYY-MM-DD
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  RoomListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Status': _.get(opts, 'status'),
      'UniqueName': _.get(opts, 'uniqueName'),
      'DateCreatedAfter': serialize.iso8601DateTime(_.get(opts, 'dateCreatedAfter')),
      'DateCreatedBefore': serialize.iso8601DateTime(_.get(opts, 'dateCreatedBefore')),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new RoomPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single target page of RoomInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Video.V1.RoomList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  RoomListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new RoomPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Constructs a room
   *
   * @function get
   * @memberof Twilio.Video.V1.RoomList#
   *
   * @param {string} sid - The SID that identifies the resource to fetch
   *
   * @returns {Twilio.Video.V1.RoomContext}
   */
  /* jshint ignore:end */
  RoomListInstance.get = function get(sid) {
    return new RoomContext(this._version, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Video.V1.RoomList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  RoomListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  RoomListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return RoomListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the RoomPage
 *
 * @constructor Twilio.Video.V1.RoomPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {RoomSolution} solution - Path solution
 *
 * @returns RoomPage
 */
/* jshint ignore:end */
RoomPage = function RoomPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(RoomPage.prototype, Page.prototype);
RoomPage.prototype.constructor = RoomPage;

/* jshint ignore:start */
/**
 * Build an instance of RoomInstance
 *
 * @function getInstance
 * @memberof Twilio.Video.V1.RoomPage#
 *
 * @param {RoomPayload} payload - Payload response from the API
 *
 * @returns RoomInstance
 */
/* jshint ignore:end */
RoomPage.prototype.getInstance = function getInstance(payload) {
  return new RoomInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Video.V1.RoomPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
RoomPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

RoomPage.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the RoomContext
 *
 * @constructor Twilio.Video.V1.RoomInstance
 *
 * @property {string} sid - The unique string that identifies the resource
 * @property {room.room_status} status - The status of the room
 * @property {Date} dateCreated -
 *          The ISO 8601 date and time in GMT when the resource was created
 * @property {Date} dateUpdated -
 *          The ISO 8601 date and time in GMT when the resource was last updated
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {boolean} enableTurn - Enable Twilio's Network Traversal TURN service
 * @property {string} uniqueName -
 *          An application-defined string that uniquely identifies the resource
 * @property {string} statusCallback -
 *          The URL to send status information to your application
 * @property {string} statusCallbackMethod -
 *          The HTTP method we use to call status_callback
 * @property {Date} endTime - The UTC end time of the room in UTC ISO 8601 format
 * @property {number} duration - The duration of the room in seconds
 * @property {room.room_type} type - The type of room
 * @property {number} maxParticipants -
 *          The maximum number of concurrent Participants allowed in the room
 * @property {number} maxConcurrentPublishedTracks -
 *          The maximum number of published tracks allowed in the room at the same time
 * @property {boolean} recordParticipantsOnConnect -
 *          Whether to start recording when Participants connect
 * @property {room.video_codec} videoCodecs -
 *          An array of the video codecs that are supported when publishing a track in the room
 * @property {string} mediaRegion - The region for the media server in Group Rooms
 * @property {boolean} audioOnly -
 *          Indicates whether the room will only contain audio track participants for group rooms.
 * @property {string} url - The absolute URL of the resource
 * @property {string} links - The URLs of related resources
 *
 * @param {V1} version - Version of the resource
 * @param {RoomPayload} payload - The instance payload
 * @param {sid_like} sid - The SID that identifies the resource to fetch
 */
/* jshint ignore:end */
RoomInstance = function RoomInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.enableTurn = payload.enable_turn; // jshint ignore:line
  this.uniqueName = payload.unique_name; // jshint ignore:line
  this.statusCallback = payload.status_callback; // jshint ignore:line
  this.statusCallbackMethod = payload.status_callback_method; // jshint ignore:line
  this.endTime = deserialize.iso8601DateTime(payload.end_time); // jshint ignore:line
  this.duration = deserialize.integer(payload.duration); // jshint ignore:line
  this.type = payload.type; // jshint ignore:line
  this.maxParticipants = deserialize.integer(payload.max_participants); // jshint ignore:line
  this.maxConcurrentPublishedTracks = deserialize.integer(payload.max_concurrent_published_tracks); // jshint ignore:line
  this.recordParticipantsOnConnect = payload.record_participants_on_connect; // jshint ignore:line
  this.videoCodecs = payload.video_codecs; // jshint ignore:line
  this.mediaRegion = payload.media_region; // jshint ignore:line
  this.audioOnly = payload.audio_only; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(RoomInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new RoomContext(this._version, this._solution.sid);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a RoomInstance
 *
 * @function fetch
 * @memberof Twilio.Video.V1.RoomInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RoomInstance
 */
/* jshint ignore:end */
RoomInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a RoomInstance
 *
 * @function update
 * @memberof Twilio.Video.V1.RoomInstance#
 *
 * @param {object} opts - Options for request
 * @param {room.room_status} opts.status - The new status of the resource
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RoomInstance
 */
/* jshint ignore:end */
RoomInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Access the recordings
 *
 * @function recordings
 * @memberof Twilio.Video.V1.RoomInstance#
 *
 * @returns {Twilio.Video.V1.RoomContext.RoomRecordingList}
 */
/* jshint ignore:end */
RoomInstance.prototype.recordings = function recordings() {
  return this._proxy.recordings;
};

/* jshint ignore:start */
/**
 * Access the participants
 *
 * @function participants
 * @memberof Twilio.Video.V1.RoomInstance#
 *
 * @returns {Twilio.Video.V1.RoomContext.ParticipantList}
 */
/* jshint ignore:end */
RoomInstance.prototype.participants = function participants() {
  return this._proxy.participants;
};

/* jshint ignore:start */
/**
 * Access the recordingRules
 *
 * @function recordingRules
 * @memberof Twilio.Video.V1.RoomInstance#
 *
 * @returns {Twilio.Video.V1.RoomContext.RecordingRulesList}
 */
/* jshint ignore:end */
RoomInstance.prototype.recordingRules = function recordingRules() {
  return this._proxy.recordingRules;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Video.V1.RoomInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
RoomInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

RoomInstance.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the RoomContext
 *
 * @constructor Twilio.Video.V1.RoomContext
 *
 * @property {Twilio.Video.V1.RoomContext.RoomRecordingList} recordings -
 *          recordings resource
 * @property {Twilio.Video.V1.RoomContext.ParticipantList} participants -
 *          participants resource
 * @property {Twilio.Video.V1.RoomContext.RecordingRulesList} recordingRules -
 *          recordingRules resource
 *
 * @param {V1} version - Version of the resource
 * @param {sid_like} sid - The SID that identifies the resource to fetch
 */
/* jshint ignore:end */
RoomContext = function RoomContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = `/Rooms/${sid}`;

  // Dependents
  this._recordings = undefined;
  this._participants = undefined;
  this._recordingRules = undefined;
};

/* jshint ignore:start */
/**
 * fetch a RoomInstance
 *
 * @function fetch
 * @memberof Twilio.Video.V1.RoomContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RoomInstance
 */
/* jshint ignore:end */
RoomContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new RoomInstance(this._version, payload, this._solution.sid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * update a RoomInstance
 *
 * @function update
 * @memberof Twilio.Video.V1.RoomContext#
 *
 * @param {object} opts - Options for request
 * @param {room.room_status} opts.status - The new status of the resource
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RoomInstance
 */
/* jshint ignore:end */
RoomContext.prototype.update = function update(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameter "opts" missing.');
  }
  if (_.isUndefined(opts.status)) {
    throw new Error('Required parameter "opts.status" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({'Status': _.get(opts, 'status')});

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new RoomInstance(this._version, payload, this._solution.sid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

Object.defineProperty(RoomContext.prototype,
  'recordings', {
    get: function() {
      if (!this._recordings) {
        this._recordings = new RoomRecordingList(this._version, this._solution.sid);
      }
      return this._recordings;
    }
});

Object.defineProperty(RoomContext.prototype,
  'participants', {
    get: function() {
      if (!this._participants) {
        this._participants = new ParticipantList(this._version, this._solution.sid);
      }
      return this._participants;
    }
});

Object.defineProperty(RoomContext.prototype,
  'recordingRules', {
    get: function() {
      if (!this._recordingRules) {
        this._recordingRules = new RecordingRulesList(this._version, this._solution.sid);
      }
      return this._recordingRules;
    }
});

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Video.V1.RoomContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
RoomContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

RoomContext.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  RoomList: RoomList,
  RoomPage: RoomPage,
  RoomInstance: RoomInstance,
  RoomContext: RoomContext
};
