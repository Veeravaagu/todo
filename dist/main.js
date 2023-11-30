/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfWeek/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfWeek/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfWeek)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isWithinInterval/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isWithinInterval/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isWithinInterval)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date }) // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end }) // => true
 */
function isWithinInterval(dirtyDate, interval) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var time = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var startTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.start).getTime();
  var endTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.end).getTime();

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }
  return time >= startTime && time <= endTime;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/todolist.js":
/*!*************************!*\
  !*** ./src/todolist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTodo: () => (/* binding */ CreateTodo)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/endOfWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isWithinInterval/index.js");


class CreateTodo {
    constructor(title, dueDate, description, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
        this.id = CreateTodo.generateUniqueId();
        // console.log(`New Todo created with ID: ${this.id}`);
    }

    static saveDataToLocalStorage() {
        const dataToSave = {
            taskCategories: CreateTodo.taskCategories,
            projects: CreateTodo.projects,
            // Add any other data you want to save
        };

        localStorage.setItem('todoData', JSON.stringify(dataToSave));
    }

    static loadDataFromLocalStorage() {
        const savedData = localStorage.getItem('todoData');

        if (savedData) {
            const parsedData = JSON.parse(savedData);

            // Restore taskCategories and other data
            CreateTodo.taskCategories = parsedData.taskCategories || {};
            CreateTodo.projects = parsedData.projects || [];
        }
    }

    static generateUniqueId() {
        if (!this.uniqueIdCounter) {
            this.uniqueIdCounter = 1;
        } else {
            this.uniqueIdCounter += 1;
        }
        return this.uniqueIdCounter;
    }

    static appendTodoToDisplay(paragraphContent) {
        const inboxTaskCard = document.querySelector('.inbox-task-card-container');
        const inboxTasks = CreateTodo.taskCategories[paragraphContent] || []; // Check if inboxTasks is defined, use an empty array if not
    
        inboxTaskCard.innerHTML = '';
    
        inboxTasks.forEach(todo => {
            const taskId = todo.id;
    
            const taskContent = `
                <div class="task-item" data-task-id="${taskId}">
                    <p><strong>Task Name:</strong>${todo.title}</p>
                    <p><strong>Description:</strong>${todo.description}</p>
                    <p><strong>Due Date:</strong> ${todo.dueDate}</p>
                    <p><strong>Priority:</strong>${todo.priority}</p>
                    <button class="deleteButton">Delete</button>
                </div>`;
            inboxTaskCard.insertAdjacentHTML('beforeend', taskContent);
    
            // Log the task information
            // console.log(`Task "${todo.title}" with ID ${taskId} displayed in ${paragraphContent}`);
            // console.log('Actual Due Date:', new Date(todo.dueDate));
            // console.log('Today:', startOfDay(new Date()));
            // console.log('Is Today Task:', isToday(new Date(todo.dueDate)));
        });
    
        // Check if the task is scheduled for Today or This Week
        const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date());
        const endOfWeekDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date());
    
        inboxTasks.forEach(todo => {
            const taskId = todo.id;
    
            const isTodayTask = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(todo.dueDate)));
            const isThisWeekTask = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(todo.dueDate)), { start: today, end: endOfWeekDate });
    
            if ((paragraphContent === 'Today' && isTodayTask) || (paragraphContent === 'This Week' && isThisWeekTask)) {
                const taskContent = `
                    <div class="task-item" data-task-id="${taskId}">
                        <p><strong>Task Name:</strong>${todo.title}</p>
                        <p><strong>Description:</strong>${todo.description}</p>
                        <p><strong>Due Date:</strong> ${todo.dueDate}</p>
                        <p><strong>Priority:</strong>${todo.priority}</p>
                        <button class="deleteButton">Delete</button>
                    </div>`;
                inboxTaskCard.insertAdjacentHTML('beforeend', taskContent);
    
                // Log the task information for Today or This Week
                console.log(`Task "${todo.title}" with ID ${taskId} displayed in ${paragraphContent} yolo`);
                console.log('Actual Due Date:', new Date(todo.dueDate));
                console.log('Today:', (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date()));
                console.log('Is Today Task:', (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(todo.dueDate)));
            }
        });
        CreateTodo.saveDataToLocalStorage();
    }    
    
    static taskCategories = {
        'Inbox': [],
        'Today': [],
        'This Week': [],
      };

    static handleAddTask(paragraphContent) {
        const nameElement = document.getElementById('name');
        const descriptionElement = document.getElementById('description');
        const dateElement = document.getElementById('date');
        const priorityElement = document.getElementById('priority');
    
        if (nameElement && descriptionElement && dateElement && priorityElement) {
            const name = nameElement.value;
            const description = descriptionElement.value;
            const date = dateElement.value;
            const priority = priorityElement.value;
    
            if (name !== '' && date !== '') {
                const todo = new CreateTodo(name, date, description, priority);
    
                if (CreateTodo.taskCategories.hasOwnProperty(paragraphContent)) {

                    CreateTodo.taskCategories[paragraphContent].push(todo);
                } else {
                    CreateTodo.taskCategories[paragraphContent] = [todo];
                }
                CreateTodo.appendTodoToDisplay(paragraphContent);
    
                document.getElementById('taskForm').reset();
            } else {
                alert("You will at least need a name and due date");
            }
            // CreateTodo.myArr.forEach(todo => {
            //     console.log(todo.title, todo.dueDate, todo.description, todo.priority);
            // });
            // console.log(CreateTodo.taskCategories['Inbox']);
            // console.log(CreateTodo.taskCategories[paragraphContent],`paragraphContent is ${paragraphContent}`);
            // // console.log(CreateTodo.myArr[CreateTodo.myArr.length - 1],`paragraphContent is ${paragraphContent}`, 'todo');
            // console.log(CreateTodo.taskCategories,'check');
        }
        CreateTodo.saveDataToLocalStorage();
    }
    static deleteTask(taskItem, paragraphContent) {
        // const inboxTaskCard = document.querySelector('.inbox-task-card-container');
        const taskId = taskItem.dataset.taskId;
    

        taskItem.remove();
    

        CreateTodo.taskCategories[paragraphContent] = CreateTodo.taskCategories[paragraphContent].filter(
            task => task.id !== parseInt(taskId)  
        );
        CreateTodo.saveDataToLocalStorage();
    }
    
    

    static buildProjectOrInbox(paragraphContent = 'Inbox') {
        const mainContent = document.querySelector('.main-content-container');
        if(paragraphContent === 'Today' || paragraphContent === 'This Week'){
            mainContent.innerHTML =
            `<div class="inbox-add-task">
                <h2>${paragraphContent}</h2>
                <div class="inbox-task-container"></div>
                <div class="inbox-task-card-container"></div>
            </div>`;
        }
        else{
            mainContent.innerHTML =
            `<div class="inbox-add-task">
                <h2>${paragraphContent}</h2>
                <button class="inbox-add-task-button"><span>+</span> Add Task</button>
                <div class="inbox-task-container"></div>
                <div class="inbox-task-card-container"></div>
            </div>`;
        }
        const inboxTaskCard = mainContent.querySelector('.inbox-task-container');
        const taskCardDisplayDelete = mainContent.querySelector('.inbox-task-card-container');
        let showTaskForm = false;
      
        const addTaskButton = mainContent.querySelector('.inbox-add-task-button');

        if (addTaskButton) {
          addTaskButton.addEventListener('click', () => {
            showTaskForm = !showTaskForm; 
            renderTaskForm();
          });
        }
        
        inboxTaskCard.addEventListener('click', (event) => {
          const target = event.target;
          if (target.classList.contains('addTaskButton')) {
            CreateTodo.handleAddTask(paragraphContent);
            showTaskForm = !showTaskForm; 
            renderTaskForm();
          } else if (target.classList.contains('deleteButton')) {
              showTaskForm = !showTaskForm; 
              renderTaskForm();
          }
        });
      
        taskCardDisplayDelete.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('deleteButton')) {
                const taskItem = target.closest('.task-item');
                if (taskItem) {
                    const paragraphContent = mainContent.querySelector('h2').textContent;
                    CreateTodo.deleteTask(taskItem, paragraphContent);
                }
            }
        });
        
        
        function renderTaskForm() {
            if (showTaskForm) {
                inboxTaskCard.innerHTML = `
                    <form id="taskForm">
                        <div class="task-form-container">
                            <label for="name">Name:</label>
                            <input type="text" id="name" required>
        
                            <label for="description">Description:</label>
                            <textarea id="description" rows="4" required></textarea>
        
                            <label for="date">Date:</label>
                            <input type="date" id="date" required>
        
                            <label for="priority">Priority:</label>
                            <select id="priority" required>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
        
                            <button type="button" class="addTaskButton">Add Task</button>
                            <button type="button" class="deleteButton">Delete</button>
                        </div>
                    </form>`;
            } else {
                inboxTaskCard.innerHTML = '';
            }
        }
        
      

        CreateTodo.saveDataToLocalStorage();  
      }

      static createProject() {
        const addProject = document.querySelector('.add-project');
        const addProjectContainer = document.querySelector('.add-project-container');
        let showProjectForm = false;
        
        addProject.addEventListener('click', (event) => {
            showProjectForm = !showProjectForm;
            event.stopPropagation();
            renderAddProject();
        });
    
        addProjectContainer.addEventListener('click', (event) => {
            const target = event.target;
            event.stopPropagation();
            if (target.classList.contains('add-project-button')) {
                CreateTodo.handleAddProject();
                showProjectForm = !showProjectForm;
                renderAddProject();
            } else if (target.classList.contains('cancel-project-button')) {
                showProjectForm = !showProjectForm;
                renderAddProject();
            }
        });
    
        function renderAddProject() {
            CreateTodo.renderAddProject(showProjectForm);
        }
    
        CreateTodo.saveDataToLocalStorage();
    }
    
    static renderAddProject(showProjectForm){
        const addProjectContainer = document.querySelector('.add-project-container');
            if(showProjectForm){
                addProjectContainer.innerHTML = `
                <div class="project-form-container">
                <input type="text" id="project-name" placeholder="Project Name">
                <button class="add-project-button">Add</button>
                <button class="cancel-project-button">Cancel</button>
                </div>`;

            }
            else {
                addProjectContainer.innerHTML = ''; 
              }
              CreateTodo.saveDataToLocalStorage();
    }

    static handleAddProject() {
        const newProjectContainer = document.querySelector('.project-name-container');
        let addProjectInput = document.querySelector('#project-name').value;
    
        if (addProjectInput === '') {
            alert('You will need a Project Name');
        } else {
            const newProjectElement = document.createElement('p');
            newProjectElement.textContent = addProjectInput;
            newProjectElement.classList.add('page-title');
            newProjectElement.classList.add('page-title-delete');
            newProjectContainer.appendChild(newProjectElement);
            CreateTodo.projects.push(addProjectInput);
            CreateTodo.saveDataToLocalStorage(); 
            console.log(CreateTodo.projects,'projects')
        }
    }
    static initialize() {
        CreateTodo.loadDataFromLocalStorage();
        CreateTodo.deleteProjects(); 
    }
    
    static deleteProjects() {
        const deleteProjects = document.querySelectorAll('.page-title');
    
        deleteProjects.forEach(deleteProject => {
            deleteProject.addEventListener('dblclick', (event) => {
                const target = event.target;
    
                if (target.classList.contains('page-title-delete')) {
                    const projectName = target.textContent;
    
                    
                    CreateTodo.projects = CreateTodo.projects.filter(project => project !== projectName);
    
                    
                    target.remove();
    
                    
                    CreateTodo.saveDataToLocalStorage();
                }
            });
        });
    }
    
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todolist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist.js */ "./src/todolist.js");
// import {buildInbox} from './inbox.js';
// import {buildProject} from './project.js';



    function isInboxOrProject() {
        const isInboxOrProjectNames = document.querySelectorAll('.page-title');
        _todolist_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodo.initialize();
        isInboxOrProjectNames.forEach((element) => {
            element.addEventListener('click', (event) => {
                const target = event.target;
                const paragraphContent = target.textContent;
                if (paragraphContent === 'Today' || paragraphContent === 'This Week') {
                    _todolist_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodo.buildProjectOrInbox(paragraphContent);
                    _todolist_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodo.appendTodoToDisplay(paragraphContent);
                } else {
                    _todolist_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodo.buildProjectOrInbox(paragraphContent);
                    _todolist_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodo.handleAddTask(paragraphContent);
                    _todolist_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodo.appendTodoToDisplay(paragraphContent);
                }
            });
        });
        _todolist_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodo.createProject();
    }

    // Your existing code here
    isInboxOrProject();
    // CreateTodo.initialize(); 



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZWZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQSxXQUFXLFlBQVk7QUFDdkIsV0FBVyxjQUFjO0FBQ2tCOzs7QUFHM0M7QUFDQTtBQUNBLFFBQVEsb0RBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvREFBVTtBQUM5QixvQkFBb0Isb0RBQVU7QUFDOUIsa0JBQWtCO0FBQ2xCLG9CQUFvQixvREFBVTtBQUM5QixvQkFBb0Isb0RBQVU7QUFDOUIsb0JBQW9CLG9EQUFVO0FBQzlCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxRQUFRLG9EQUFVO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzV2l0aGluSW50ZXJ2YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFNhdCBTZXAgMDYgMjAxNCAyMzo1OTo1OS45OTlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIGVuZCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBTdW4gU2VwIDA3IDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IC03IDogMCkgKyA2IC0gKGRheSAtIHdlZWtTdGFydHNPbik7XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzV2l0aGluSW50ZXJ2YWxcbiAqIEBjYXRlZ29yeSBJbnRlcnZhbCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB3aXRoaW4gdGhlIGludGVydmFsP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgd2l0aGluIHRoZSBpbnRlcnZhbD8gKEluY2x1ZGluZyBzdGFydCBhbmQgZW5kLilcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7SW50ZXJ2YWx9IGludGVydmFsIC0gdGhlIGludGVydmFsIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgd2l0aGluIHRoZSBpbnRlcnZhbFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gVGhlIHN0YXJ0IG9mIGFuIGludGVydmFsIGNhbm5vdCBiZSBhZnRlciBpdHMgZW5kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBEYXRlIGluIGludGVydmFsIGNhbm5vdCBiZSBgSW52YWxpZCBEYXRlYFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgd2l0aGluIHRoZSBpbnRlcnZhbDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwobmV3IERhdGUoMjAxNCwgMCwgMyksIHtcbiAqICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTQsIDAsIDEpLFxuICogICBlbmQ6IG5ldyBEYXRlKDIwMTQsIDAsIDcpXG4gKiB9KVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgZGF0ZSBvdXRzaWRlIG9mIHRoZSBpbnRlcnZhbDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwobmV3IERhdGUoMjAxNCwgMCwgMTApLCB7XG4gKiAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCAwLCAxKSxcbiAqICAgZW5kOiBuZXcgRGF0ZSgyMDE0LCAwLCA3KVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGRhdGUgZXF1YWwgdG8gaW50ZXJ2YWwgc3RhcnQ6XG4gKiBpc1dpdGhpbkludGVydmFsKGRhdGUsIHsgc3RhcnQsIGVuZDogZGF0ZSB9KSAvLyA9PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBkYXRlIGVxdWFsIHRvIGludGVydmFsIGVuZDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwoZGF0ZSwgeyBzdGFydDogZGF0ZSwgZW5kIH0pIC8vID0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNXaXRoaW5JbnRlcnZhbChkaXJ0eURhdGUsIGludGVydmFsKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZSA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIHN0YXJ0VGltZSA9IHRvRGF0ZShpbnRlcnZhbC5zdGFydCkuZ2V0VGltZSgpO1xuICB2YXIgZW5kVGltZSA9IHRvRGF0ZShpbnRlcnZhbC5lbmQpLmdldFRpbWUoKTtcblxuICAvLyBUaHJvdyBhbiBleGNlcHRpb24gaWYgc3RhcnQgZGF0ZSBpcyBhZnRlciBlbmQgZGF0ZSBvciBpZiBhbnkgZGF0ZSBpcyBgSW52YWxpZCBEYXRlYFxuICBpZiAoIShzdGFydFRpbWUgPD0gZW5kVGltZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBpbnRlcnZhbCcpO1xuICB9XG4gIHJldHVybiB0aW1lID49IHN0YXJ0VGltZSAmJiB0aW1lIDw9IGVuZFRpbWU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgeyBpc1RvZGF5LCBpc1RoaXNXZWVrLCBzdGFydE9mRGF5LCBlbmRPZldlZWssIGlzV2l0aGluSW50ZXJ2YWwsIGFkZCB9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGNsYXNzIENyZWF0ZVRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5pZCA9IENyZWF0ZVRvZG8uZ2VuZXJhdGVVbmlxdWVJZCgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgTmV3IFRvZG8gY3JlYXRlZCB3aXRoIElEOiAke3RoaXMuaWR9YCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGNvbnN0IGRhdGFUb1NhdmUgPSB7XG4gICAgICAgICAgICB0YXNrQ2F0ZWdvcmllczogQ3JlYXRlVG9kby50YXNrQ2F0ZWdvcmllcyxcbiAgICAgICAgICAgIHByb2plY3RzOiBDcmVhdGVUb2RvLnByb2plY3RzLFxuICAgICAgICAgICAgLy8gQWRkIGFueSBvdGhlciBkYXRhIHlvdSB3YW50IHRvIHNhdmVcbiAgICAgICAgfTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0RhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhVG9TYXZlKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWREYXRhRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgY29uc3Qgc2F2ZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9EYXRhJyk7XG5cbiAgICAgICAgaWYgKHNhdmVkRGF0YSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkRGF0YSA9IEpTT04ucGFyc2Uoc2F2ZWREYXRhKTtcblxuICAgICAgICAgICAgLy8gUmVzdG9yZSB0YXNrQ2F0ZWdvcmllcyBhbmQgb3RoZXIgZGF0YVxuICAgICAgICAgICAgQ3JlYXRlVG9kby50YXNrQ2F0ZWdvcmllcyA9IHBhcnNlZERhdGEudGFza0NhdGVnb3JpZXMgfHwge307XG4gICAgICAgICAgICBDcmVhdGVUb2RvLnByb2plY3RzID0gcGFyc2VkRGF0YS5wcm9qZWN0cyB8fCBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZW5lcmF0ZVVuaXF1ZUlkKCkge1xuICAgICAgICBpZiAoIXRoaXMudW5pcXVlSWRDb3VudGVyKSB7XG4gICAgICAgICAgICB0aGlzLnVuaXF1ZUlkQ291bnRlciA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuaXF1ZUlkQ291bnRlciArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnVuaXF1ZUlkQ291bnRlcjtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXBwZW5kVG9kb1RvRGlzcGxheShwYXJhZ3JhcGhDb250ZW50KSB7XG4gICAgICAgIGNvbnN0IGluYm94VGFza0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtdGFzay1jYXJkLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBpbmJveFRhc2tzID0gQ3JlYXRlVG9kby50YXNrQ2F0ZWdvcmllc1twYXJhZ3JhcGhDb250ZW50XSB8fCBbXTsgLy8gQ2hlY2sgaWYgaW5ib3hUYXNrcyBpcyBkZWZpbmVkLCB1c2UgYW4gZW1wdHkgYXJyYXkgaWYgbm90XG4gICAgXG4gICAgICAgIGluYm94VGFza0NhcmQuaW5uZXJIVE1MID0gJyc7XG4gICAgXG4gICAgICAgIGluYm94VGFza3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IHRvZG8uaWQ7XG4gICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGVudCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1pdGVtXCIgZGF0YS10YXNrLWlkPVwiJHt0YXNrSWR9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+VGFzayBOYW1lOjwvc3Ryb25nPiR7dG9kby50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RGVzY3JpcHRpb246PC9zdHJvbmc+JHt0b2RvLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5EdWUgRGF0ZTo8L3N0cm9uZz4gJHt0b2RvLmR1ZURhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPlByaW9yaXR5Ojwvc3Ryb25nPiR7dG9kby5wcmlvcml0eX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVCdXR0b25cIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgaW5ib3hUYXNrQ2FyZC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRhc2tDb250ZW50KTtcbiAgICBcbiAgICAgICAgICAgIC8vIExvZyB0aGUgdGFzayBpbmZvcm1hdGlvblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFRhc2sgXCIke3RvZG8udGl0bGV9XCIgd2l0aCBJRCAke3Rhc2tJZH0gZGlzcGxheWVkIGluICR7cGFyYWdyYXBoQ29udGVudH1gKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdBY3R1YWwgRHVlIERhdGU6JywgbmV3IERhdGUodG9kby5kdWVEYXRlKSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnVG9kYXk6Jywgc3RhcnRPZkRheShuZXcgRGF0ZSgpKSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnSXMgVG9kYXkgVGFzazonLCBpc1RvZGF5KG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSkpKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSB0YXNrIGlzIHNjaGVkdWxlZCBmb3IgVG9kYXkgb3IgVGhpcyBXZWVrXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgpKTtcbiAgICAgICAgY29uc3QgZW5kT2ZXZWVrRGF0ZSA9IGVuZE9mV2VlayhuZXcgRGF0ZSgpKTtcbiAgICBcbiAgICAgICAgaW5ib3hUYXNrcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza0lkID0gdG9kby5pZDtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGlzVG9kYXlUYXNrID0gaXNUb2RheShzdGFydE9mRGF5KG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSkpKTtcbiAgICAgICAgICAgIGNvbnN0IGlzVGhpc1dlZWtUYXNrID0gaXNXaXRoaW5JbnRlcnZhbChzdGFydE9mRGF5KG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSkpLCB7IHN0YXJ0OiB0b2RheSwgZW5kOiBlbmRPZldlZWtEYXRlIH0pO1xuICAgIFxuICAgICAgICAgICAgaWYgKChwYXJhZ3JhcGhDb250ZW50ID09PSAnVG9kYXknICYmIGlzVG9kYXlUYXNrKSB8fCAocGFyYWdyYXBoQ29udGVudCA9PT0gJ1RoaXMgV2VlaycgJiYgaXNUaGlzV2Vla1Rhc2spKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0NvbnRlbnQgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWl0ZW1cIiBkYXRhLXRhc2staWQ9XCIke3Rhc2tJZH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+VGFzayBOYW1lOjwvc3Ryb25nPiR7dG9kby50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkRlc2NyaXB0aW9uOjwvc3Ryb25nPiR7dG9kby5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkR1ZSBEYXRlOjwvc3Ryb25nPiAke3RvZG8uZHVlRGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPlByaW9yaXR5Ojwvc3Ryb25nPiR7dG9kby5wcmlvcml0eX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlQnV0dG9uXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgaW5ib3hUYXNrQ2FyZC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRhc2tDb250ZW50KTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBMb2cgdGhlIHRhc2sgaW5mb3JtYXRpb24gZm9yIFRvZGF5IG9yIFRoaXMgV2Vla1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUYXNrIFwiJHt0b2RvLnRpdGxlfVwiIHdpdGggSUQgJHt0YXNrSWR9IGRpc3BsYXllZCBpbiAke3BhcmFncmFwaENvbnRlbnR9IHlvbG9gKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWN0dWFsIER1ZSBEYXRlOicsIG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2RheTonLCBzdGFydE9mRGF5KG5ldyBEYXRlKCkpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSXMgVG9kYXkgVGFzazonLCBpc1RvZGF5KG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIENyZWF0ZVRvZG8uc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH0gICAgXG4gICAgXG4gICAgc3RhdGljIHRhc2tDYXRlZ29yaWVzID0ge1xuICAgICAgICAnSW5ib3gnOiBbXSxcbiAgICAgICAgJ1RvZGF5JzogW10sXG4gICAgICAgICdUaGlzIFdlZWsnOiBbXSxcbiAgICAgIH07XG5cbiAgICBzdGF0aWMgaGFuZGxlQWRkVGFzayhwYXJhZ3JhcGhDb250ZW50KSB7XG4gICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0IGRhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5Jyk7XG4gICAgXG4gICAgICAgIGlmIChuYW1lRWxlbWVudCAmJiBkZXNjcmlwdGlvbkVsZW1lbnQgJiYgZGF0ZUVsZW1lbnQgJiYgcHJpb3JpdHlFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uRWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkYXRlRWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlFbGVtZW50LnZhbHVlO1xuICAgIFxuICAgICAgICAgICAgaWYgKG5hbWUgIT09ICcnICYmIGRhdGUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBDcmVhdGVUb2RvKG5hbWUsIGRhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSk7XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKENyZWF0ZVRvZG8udGFza0NhdGVnb3JpZXMuaGFzT3duUHJvcGVydHkocGFyYWdyYXBoQ29udGVudCkpIHtcblxuICAgICAgICAgICAgICAgICAgICBDcmVhdGVUb2RvLnRhc2tDYXRlZ29yaWVzW3BhcmFncmFwaENvbnRlbnRdLnB1c2godG9kbyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlVG9kby50YXNrQ2F0ZWdvcmllc1twYXJhZ3JhcGhDb250ZW50XSA9IFt0b2RvXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQ3JlYXRlVG9kby5hcHBlbmRUb2RvVG9EaXNwbGF5KHBhcmFncmFwaENvbnRlbnQpO1xuICAgIFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRm9ybScpLnJlc2V0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91IHdpbGwgYXQgbGVhc3QgbmVlZCBhIG5hbWUgYW5kIGR1ZSBkYXRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ3JlYXRlVG9kby5teUFyci5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRvZG8udGl0bGUsIHRvZG8uZHVlRGF0ZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5wcmlvcml0eSk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKENyZWF0ZVRvZG8udGFza0NhdGVnb3JpZXNbJ0luYm94J10pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coQ3JlYXRlVG9kby50YXNrQ2F0ZWdvcmllc1twYXJhZ3JhcGhDb250ZW50XSxgcGFyYWdyYXBoQ29udGVudCBpcyAke3BhcmFncmFwaENvbnRlbnR9YCk7XG4gICAgICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhDcmVhdGVUb2RvLm15QXJyW0NyZWF0ZVRvZG8ubXlBcnIubGVuZ3RoIC0gMV0sYHBhcmFncmFwaENvbnRlbnQgaXMgJHtwYXJhZ3JhcGhDb250ZW50fWAsICd0b2RvJyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhDcmVhdGVUb2RvLnRhc2tDYXRlZ29yaWVzLCdjaGVjaycpO1xuICAgICAgICB9XG4gICAgICAgIENyZWF0ZVRvZG8uc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH1cbiAgICBzdGF0aWMgZGVsZXRlVGFzayh0YXNrSXRlbSwgcGFyYWdyYXBoQ29udGVudCkge1xuICAgICAgICAvLyBjb25zdCBpbmJveFRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LXRhc2stY2FyZC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgdGFza0lkID0gdGFza0l0ZW0uZGF0YXNldC50YXNrSWQ7XG4gICAgXG5cbiAgICAgICAgdGFza0l0ZW0ucmVtb3ZlKCk7XG4gICAgXG5cbiAgICAgICAgQ3JlYXRlVG9kby50YXNrQ2F0ZWdvcmllc1twYXJhZ3JhcGhDb250ZW50XSA9IENyZWF0ZVRvZG8udGFza0NhdGVnb3JpZXNbcGFyYWdyYXBoQ29udGVudF0uZmlsdGVyKFxuICAgICAgICAgICAgdGFzayA9PiB0YXNrLmlkICE9PSBwYXJzZUludCh0YXNrSWQpICBcbiAgICAgICAgKTtcbiAgICAgICAgQ3JlYXRlVG9kby5zYXZlRGF0YVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuICAgIFxuICAgIFxuXG4gICAgc3RhdGljIGJ1aWxkUHJvamVjdE9ySW5ib3gocGFyYWdyYXBoQ29udGVudCA9ICdJbmJveCcpIHtcbiAgICAgICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50LWNvbnRhaW5lcicpO1xuICAgICAgICBpZihwYXJhZ3JhcGhDb250ZW50ID09PSAnVG9kYXknIHx8IHBhcmFncmFwaENvbnRlbnQgPT09ICdUaGlzIFdlZWsnKXtcbiAgICAgICAgICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9XG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImluYm94LWFkZC10YXNrXCI+XG4gICAgICAgICAgICAgICAgPGgyPiR7cGFyYWdyYXBoQ29udGVudH08L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmJveC10YXNrLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmJveC10YXNrLWNhcmQtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJpbmJveC1hZGQtdGFza1wiPlxuICAgICAgICAgICAgICAgIDxoMj4ke3BhcmFncmFwaENvbnRlbnR9PC9oMj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaW5ib3gtYWRkLXRhc2stYnV0dG9uXCI+PHNwYW4+Kzwvc3Bhbj4gQWRkIFRhc2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ib3gtdGFzay1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ib3gtdGFzay1jYXJkLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmJveFRhc2tDYXJkID0gbWFpbkNvbnRlbnQucXVlcnlTZWxlY3RvcignLmluYm94LXRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRhc2tDYXJkRGlzcGxheURlbGV0ZSA9IG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC10YXNrLWNhcmQtY29udGFpbmVyJyk7XG4gICAgICAgIGxldCBzaG93VGFza0Zvcm0gPSBmYWxzZTtcbiAgICAgIFxuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gbWFpbkNvbnRlbnQucXVlcnlTZWxlY3RvcignLmluYm94LWFkZC10YXNrLWJ1dHRvbicpO1xuXG4gICAgICAgIGlmIChhZGRUYXNrQnV0dG9uKSB7XG4gICAgICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNob3dUYXNrRm9ybSA9ICFzaG93VGFza0Zvcm07IFxuICAgICAgICAgICAgcmVuZGVyVGFza0Zvcm0oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaW5ib3hUYXNrQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkVGFza0J1dHRvbicpKSB7XG4gICAgICAgICAgICBDcmVhdGVUb2RvLmhhbmRsZUFkZFRhc2socGFyYWdyYXBoQ29udGVudCk7XG4gICAgICAgICAgICBzaG93VGFza0Zvcm0gPSAhc2hvd1Rhc2tGb3JtOyBcbiAgICAgICAgICAgIHJlbmRlclRhc2tGb3JtKCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGVCdXR0b24nKSkge1xuICAgICAgICAgICAgICBzaG93VGFza0Zvcm0gPSAhc2hvd1Rhc2tGb3JtOyBcbiAgICAgICAgICAgICAgcmVuZGVyVGFza0Zvcm0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgXG4gICAgICAgIHRhc2tDYXJkRGlzcGxheURlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZUJ1dHRvbicpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0l0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnLnRhc2staXRlbScpO1xuICAgICAgICAgICAgICAgIGlmICh0YXNrSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhZ3JhcGhDb250ZW50ID0gbWFpbkNvbnRlbnQucXVlcnlTZWxlY3RvcignaDInKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlVG9kby5kZWxldGVUYXNrKHRhc2tJdGVtLCBwYXJhZ3JhcGhDb250ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlclRhc2tGb3JtKCkge1xuICAgICAgICAgICAgaWYgKHNob3dUYXNrRm9ybSkge1xuICAgICAgICAgICAgICAgIGluYm94VGFza0NhcmQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInRhc2tGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCIgcm93cz1cIjRcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPkRhdGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiByZXF1aXJlZD5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwicHJpb3JpdHlcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImFkZFRhc2tCdXR0b25cIj5BZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlQnV0dG9uXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPmA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGluYm94VGFza0NhcmQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBcblxuICAgICAgICBDcmVhdGVUb2RvLnNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoKTsgIFxuICAgICAgfVxuXG4gICAgICBzdGF0aWMgY3JlYXRlUHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgc2hvd1Byb2plY3RGb3JtID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzaG93UHJvamVjdEZvcm0gPSAhc2hvd1Byb2plY3RGb3JtO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICByZW5kZXJBZGRQcm9qZWN0KCk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtcHJvamVjdC1idXR0b24nKSkge1xuICAgICAgICAgICAgICAgIENyZWF0ZVRvZG8uaGFuZGxlQWRkUHJvamVjdCgpO1xuICAgICAgICAgICAgICAgIHNob3dQcm9qZWN0Rm9ybSA9ICFzaG93UHJvamVjdEZvcm07XG4gICAgICAgICAgICAgICAgcmVuZGVyQWRkUHJvamVjdCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYW5jZWwtcHJvamVjdC1idXR0b24nKSkge1xuICAgICAgICAgICAgICAgIHNob3dQcm9qZWN0Rm9ybSA9ICFzaG93UHJvamVjdEZvcm07XG4gICAgICAgICAgICAgICAgcmVuZGVyQWRkUHJvamVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyQWRkUHJvamVjdCgpIHtcbiAgICAgICAgICAgIENyZWF0ZVRvZG8ucmVuZGVyQWRkUHJvamVjdChzaG93UHJvamVjdEZvcm0pO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIENyZWF0ZVRvZG8uc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgcmVuZGVyQWRkUHJvamVjdChzaG93UHJvamVjdEZvcm0pe1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgaWYoc2hvd1Byb2plY3RGb3JtKXtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvamVjdC1uYW1lXCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IE5hbWVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXByb2plY3QtYnV0dG9uXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbC1wcm9qZWN0LWJ1dHRvblwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7IFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIENyZWF0ZVRvZG8uc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVBZGRQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZS1jb250YWluZXInKTtcbiAgICAgICAgbGV0IGFkZFByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKS52YWx1ZTtcbiAgICBcbiAgICAgICAgaWYgKGFkZFByb2plY3RJbnB1dCA9PT0gJycpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdZb3Ugd2lsbCBuZWVkIGEgUHJvamVjdCBOYW1lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3RFbGVtZW50LnRleHRDb250ZW50ID0gYWRkUHJvamVjdElucHV0O1xuICAgICAgICAgICAgbmV3UHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGFnZS10aXRsZScpO1xuICAgICAgICAgICAgbmV3UHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGFnZS10aXRsZS1kZWxldGUnKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEVsZW1lbnQpO1xuICAgICAgICAgICAgQ3JlYXRlVG9kby5wcm9qZWN0cy5wdXNoKGFkZFByb2plY3RJbnB1dCk7XG4gICAgICAgICAgICBDcmVhdGVUb2RvLnNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoKTsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhDcmVhdGVUb2RvLnByb2plY3RzLCdwcm9qZWN0cycpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGluaXRpYWxpemUoKSB7XG4gICAgICAgIENyZWF0ZVRvZG8ubG9hZERhdGFGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIENyZWF0ZVRvZG8uZGVsZXRlUHJvamVjdHMoKTsgXG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBkZWxldGVQcm9qZWN0cygpIHtcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFnZS10aXRsZScpO1xuICAgIFxuICAgICAgICBkZWxldGVQcm9qZWN0cy5mb3JFYWNoKGRlbGV0ZVByb2plY3QgPT4ge1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncGFnZS10aXRsZS1kZWxldGUnKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZVRvZG8ucHJvamVjdHMgPSBDcmVhdGVUb2RvLnByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QgIT09IHByb2plY3ROYW1lKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5yZW1vdmUoKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZVRvZG8uc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IHtidWlsZEluYm94fSBmcm9tICcuL2luYm94LmpzJztcbi8vIGltcG9ydCB7YnVpbGRQcm9qZWN0fSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHsgQ3JlYXRlVG9kbyB9IGZyb20gJy4vdG9kb2xpc3QuanMnO1xuXG5cbiAgICBmdW5jdGlvbiBpc0luYm94T3JQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBpc0luYm94T3JQcm9qZWN0TmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFnZS10aXRsZScpO1xuICAgICAgICBDcmVhdGVUb2RvLmluaXRpYWxpemUoKTtcbiAgICAgICAgaXNJbmJveE9yUHJvamVjdE5hbWVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYWdyYXBoQ29udGVudCA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBpZiAocGFyYWdyYXBoQ29udGVudCA9PT0gJ1RvZGF5JyB8fCBwYXJhZ3JhcGhDb250ZW50ID09PSAnVGhpcyBXZWVrJykge1xuICAgICAgICAgICAgICAgICAgICBDcmVhdGVUb2RvLmJ1aWxkUHJvamVjdE9ySW5ib3gocGFyYWdyYXBoQ29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZVRvZG8uYXBwZW5kVG9kb1RvRGlzcGxheShwYXJhZ3JhcGhDb250ZW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBDcmVhdGVUb2RvLmJ1aWxkUHJvamVjdE9ySW5ib3gocGFyYWdyYXBoQ29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZVRvZG8uaGFuZGxlQWRkVGFzayhwYXJhZ3JhcGhDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlVG9kby5hcHBlbmRUb2RvVG9EaXNwbGF5KHBhcmFncmFwaENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgQ3JlYXRlVG9kby5jcmVhdGVQcm9qZWN0KCk7XG4gICAgfVxuXG4gICAgLy8gWW91ciBleGlzdGluZyBjb2RlIGhlcmVcbiAgICBpc0luYm94T3JQcm9qZWN0KCk7XG4gICAgLy8gQ3JlYXRlVG9kby5pbml0aWFsaXplKCk7IFxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==