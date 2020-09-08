import { y as _slicedToArray, L as readable, B as _asyncToGenerator, C as regenerator, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, M as globals, N as validate_each_argument, j as validate_slots, k as element, t as text, m as claim_element, o as children, p as claim_text, q as detach_dev, r as attr_dev, u as add_location, w as insert_dev, x as append_dev, O as listen_dev, z as set_data_dev, l as space, P as empty, n as claim_space, Q as destroy_each, E as query_selector_all, A as noop, R as prevent_default, K as set_style } from './client.5e9a2189.js';
import { t as tsvParse } from './tsv.c906c42a.js';
import { s as slugify } from './helpers.38afc14c.js';
import { E as EVENT_URL } from './constants.8e4190be.js';

function identity (x) {
  return x;
}

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function group(values) {
  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  return nest(values, identity, identity, keys);
}

function nest(values, map, reduce, keys) {
  return function regroup(values, i) {
    if (i >= keys.length) return reduce(values);
    var groups = new Map();
    var keyof = keys[i++];
    var index = -1;

    var _iterator = _createForOfIteratorHelper(values),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var value = _step.value;
        var key = keyof(value, ++index, values);

        var _group = groups.get(key);

        if (_group) _group.push(value);else groups.set(key, [value]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(groups),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _slicedToArray(_step2.value, 2),
            _key7 = _step2$value[0],
            _values = _step2$value[1];

        groups.set(_key7, regroup(_values, i));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return map(groups);
  }(values, 0);
}

var t0 = new Date(),
    t1 = new Date();
function newInterval(floori, offseti, count, field) {
  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date() : new Date(+date)), date;
  }

  interval.floor = function (date) {
    return floori(date = new Date(+date)), date;
  };

  interval.ceil = function (date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function (date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function (date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function (start, stop, step) {
    var range = [],
        previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date

    do {
      range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    } while (previous < start && start < stop);

    return range;
  };

  interval.filter = function (test) {
    return newInterval(function (date) {
      if (date >= date) while (floori(date), !test(date)) {
        date.setTime(date - 1);
      }
    }, function (date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty

        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty

        }
      }
    });
  };

  if (count) {
    interval.count = function (start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function (step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function (d) {
        return field(d) % step === 0;
      } : function (d) {
        return interval.count(0, d) % step === 0;
      });
    };
  }

  return interval;
}

var durationMinute = 6e4;
var durationDay = 864e5;
var durationWeek = 6048e5;

var day = newInterval(function (date) {
  return date.setHours(0, 0, 0, 0);
}, function (date, step) {
  return date.setDate(date.getDate() + step);
}, function (start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay;
}, function (date) {
  return date.getDate() - 1;
});

function weekday(i) {
  return newInterval(function (date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function (start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var year = newInterval(function (date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function (date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function (start, end) {
  return end.getFullYear() - start.getFullYear();
}, function (date) {
  return date.getFullYear();
}); // An optimized implementation for this simple case.

year.every = function (k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function (date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

var utcDay = newInterval(function (date) {
  date.setUTCHours(0, 0, 0, 0);
}, function (date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function (start, end) {
  return (end - start) / durationDay;
}, function (date) {
  return date.getUTCDate() - 1;
});

function utcWeekday(i) {
  return newInterval(function (date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function (start, end) {
    return (end - start) / durationWeek;
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcYear = newInterval(function (date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function (date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function (start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function (date) {
  return date.getUTCFullYear();
}); // An optimized implementation for this simple case.

utcYear.every = function (k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function (date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }

  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }

  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newDate(y, m, d) {
  return {
    y: y,
    m: m,
    d: d,
    H: 0,
    M: 0,
    S: 0,
    L: 0
  };
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;
  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  }; // These recursive directive definitions must be deferred.

  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function (date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;
      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, Z) {
    return function (string) {
      var d = newDate(1900, undefined, 1),
          i = parseSpecifier(d, specifier, string += "", 0),
          week,
          day$1;
      if (i != string.length) return null; // If a UNIX timestamp is specified, return it.

      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0)); // If this is utcParse, never use the local timezone.

      if (Z && !("Z" in d)) d.Z = 0; // The am-pm flag is 0 for AM, and 1 for PM.

      if ("p" in d) d.H = d.H % 12 + d.p * 12; // If the month was not specified, inherit from the quarter.

      if (d.m === undefined) d.m = "q" in d ? d.q : 0; // Convert day-of-week and week-of-year to day-of-year.

      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;

        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day$1 = week.getUTCDay();
          week = day$1 > 4 || day$1 === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day$1 = week.getDay();
          week = day$1 > 4 || day$1 === 0 ? monday.ceil(week) : monday(week);
          week = day.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day$1 = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day$1 + 5) % 7 : d.w + d.U * 7 - (day$1 + 6) % 7;
      } // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.


      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      } // Otherwise, all fields are in local time.


      return localDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);

      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || (j = parse(d, string, j)) < 0) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }

  return {
    format: function format(specifier) {
      var f = newFormat(specifier += "", formats);

      f.toString = function () {
        return specifier;
      };

      return f;
    },
    parse: function parse(specifier) {
      var p = newParse(specifier += "", false);

      p.toString = function () {
        return specifier;
      };

      return p;
    },
    utcFormat: function utcFormat(specifier) {
      var f = newFormat(specifier += "", utcFormats);

      f.toString = function () {
        return specifier;
      };

      return f;
    },
    utcParse: function utcParse(specifier) {
      var p = newParse(specifier += "", true);

      p.toString = function () {
        return specifier;
      };

      return p;
    }
  };
}
var pads = {
  "-": "",
  "_": " ",
  "0": "0"
},
    numberRe = /^\s*\d+/,
    // note: ignores next directive
percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  return new Map(names.map(function (name, i) {
    return [name.toLowerCase(), i];
  }));
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + day.count(year(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(sunday.count(year(d) - 1, d), p, 2);
}

function dISO(d) {
  var day = d.getDay();
  return day >= 4 || day === 0 ? thursday(d) : thursday.ceil(d);
}

function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(thursday.count(year(d), d) + (year(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(monday.count(year(d) - 1, d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? thursday(d) : thursday.ceil(d);
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
}

function UTCdISO(d) {
  var day = d.getUTCDay();
  return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
}

function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}

var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale(definition) {
  locale = formatLocale(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}

var now = readable(null, function (set) {
  set(new Date());
  var interval = setInterval(function () {
    set(new Date());
  }, 1000);
  return function () {
    return clearInterval(interval);
  };
});

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var console_1 = globals.console,
    document_1 = globals.document;
var file = "src/routes/schedule/index.svelte";

function get_each_context_2(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
}

function get_each_context_3(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[15] = list[i];
  child_ctx[17] = i;
  return child_ctx;
}

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[12] = list[i][0];
  child_ctx[1] = list[i][1];
  return child_ctx;
}

function get_each_context_4(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[12] = list[i][0];
  child_ctx[1] = list[i][1];
  return child_ctx;
} // (194:8) {#each Array.from(eventsByDay.entries()) as [date, events]}


function create_each_block_4(ctx) {
  var a;
  var t_value =
  /*formatDay*/
  ctx[3](
  /*events*/
  ctx[1][0].startsAt) + "";
  var t;
  var a_href_value;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        class: true,
        href: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "class", "rounded-link bd-col-1 col-1");
      attr_dev(a, "href", a_href_value = "#" +
      /*formatDay*/
      ctx[3](
      /*events*/
      ctx[1][0].startsAt).toLowerCase());
      add_location(a, file, 194, 10, 4689);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, t);

      if (!mounted) {
        dispose = listen_dev(a, "click", prevent_default(scrollTo), false, true, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*eventsByDay*/
      1 && t_value !== (t_value =
      /*formatDay*/
      ctx[3](
      /*events*/
      ctx[1][0].startsAt) + "")) set_data_dev(t, t_value);

      if (dirty &
      /*eventsByDay*/
      1 && a_href_value !== (a_href_value = "#" +
      /*formatDay*/
      ctx[3](
      /*events*/
      ctx[1][0].startsAt).toLowerCase())) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_4.name,
    type: "each",
    source: "(194:8) {#each Array.from(eventsByDay.entries()) as [date, events]}",
    ctx: ctx
  });
  return block;
} // (218:16) {#if event.livestream == "true"}


function create_if_block_1(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("ONLINE");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "ONLINE");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "rounded-link col-6 bd-col-6 svelte-1oqplu8");
      add_location(span, file, 218, 18, 5776);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(218:16) {#if event.livestream == \\\"true\\\"}",
    ctx: ctx
  });
  return block;
} // (222:16) {#if event.physical == "yes"}


function create_if_block(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("PHYSICAL");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "PHYSICAL");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "rounded-link col-6 bd-col-6 svelte-1oqplu8");
      add_location(span, file, 222, 18, 5995);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(222:16) {#if event.physical == \\\"yes\\\"}",
    ctx: ctx
  });
  return block;
} // (233:16) {#each event.artists as artist}


function create_each_block_3(ctx) {
  var a;
  var t_value =
  /*artist*/
  ctx[18].name + "";
  var t;
  var a_href_value;
  var block = {
    c: function create() {
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", a_href_value = "artists/" +
      /*artist*/
      ctx[18].slug);
      attr_dev(a, "class", "artist-name col-5 svelte-1oqplu8");
      add_location(a, file, 233, 18, 6500);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*eventsByDay*/
      1 && t_value !== (t_value =
      /*artist*/
      ctx[18].name + "")) set_data_dev(t, t_value);

      if (dirty &
      /*eventsByDay*/
      1 && a_href_value !== (a_href_value = "artists/" +
      /*artist*/
      ctx[18].slug)) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_3.name,
    type: "each",
    source: "(233:16) {#each event.artists as artist}",
    ctx: ctx
  });
  return block;
} // (240:16) {#each event.artists as artist}


function create_each_block_2(ctx) {
  var a;
  var span;
  var t;
  var a_href_value;
  var block = {
    c: function create() {
      a = element("a");
      span = element("span");
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        href: true
      });
      var a_nodes = children(a);
      span = claim_element(a_nodes, "SPAN", {
        class: true,
        style: true
      });
      var span_nodes = children(span);
      span_nodes.forEach(detach_dev);
      t = claim_space(a_nodes);
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "bio-photo svelte-1oqplu8");
      set_style(span, "background-image", "url(img/bios/" +
      /*artist*/
      ctx[18].username + ".jpeg)");
      add_location(span, file, 242, 20, 6937);
      attr_dev(a, "href", a_href_value = "artists/" +
      /*artist*/
      ctx[18].slug);
      add_location(a, file, 240, 18, 6741);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, span);
      append_dev(a, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*eventsByDay*/
      1) {
        set_style(span, "background-image", "url(img/bios/" +
        /*artist*/
        ctx[18].username + ".jpeg)");
      }

      if (dirty &
      /*eventsByDay*/
      1 && a_href_value !== (a_href_value = "artists/" +
      /*artist*/
      ctx[18].slug)) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_2.name,
    type: "each",
    source: "(240:16) {#each event.artists as artist}",
    ctx: ctx
  });
  return block;
} // (212:8) {#each events as event, i}


function create_each_block_1(ctx) {
  var div7;
  var div6;
  var div0;
  var t0;
  var t1;
  var div4;
  var div1;
  var t2_value =
  /*formatTime*/
  ctx[4](
  /*event*/
  ctx[15].startsAt) + "";
  var t2;
  var t3;
  var div2;
  var t4_value =
  /*event*/
  ctx[15].title + "";
  var t4;
  var t5;
  var div3;
  var t6_value =
  /*event*/
  ctx[15].desc + "";
  var t6;
  var t7;
  var t8;
  var div5;
  var t9;
  var div7_class_value;
  var div7_live_value;
  var div7_physical_value;
  var if_block0 =
  /*event*/
  ctx[15].livestream == "true" && create_if_block_1(ctx);
  var if_block1 =
  /*event*/
  ctx[15].physical == "yes" && create_if_block(ctx);
  var each_value_3 =
  /*event*/
  ctx[15].artists;
  validate_each_argument(each_value_3);
  var each_blocks_1 = [];

  for (var i = 0; i < each_value_3.length; i += 1) {
    each_blocks_1[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  }

  var each_value_2 =
  /*event*/
  ctx[15].artists;
  validate_each_argument(each_value_2);
  var each_blocks = [];

  for (var _i = 0; _i < each_value_2.length; _i += 1) {
    each_blocks[_i] = create_each_block_2(get_each_context_2(ctx, each_value_2, _i));
  }

  var block = {
    c: function create() {
      div7 = element("div");
      div6 = element("div");
      div0 = element("div");
      if (if_block0) if_block0.c();
      t0 = space();
      if (if_block1) if_block1.c();
      t1 = space();
      div4 = element("div");
      div1 = element("div");
      t2 = text(t2_value);
      t3 = space();
      div2 = element("div");
      t4 = text(t4_value);
      t5 = space();
      div3 = element("div");
      t6 = text(t6_value);
      t7 = space();

      for (var _i2 = 0; _i2 < each_blocks_1.length; _i2 += 1) {
        each_blocks_1[_i2].c();
      }

      t8 = space();
      div5 = element("div");

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].c();
      }

      t9 = space();
      this.h();
    },
    l: function claim(nodes) {
      div7 = claim_element(nodes, "DIV", {
        class: true,
        live: true,
        physical: true
      });
      var div7_nodes = children(div7);
      div6 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      div0 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      if (if_block0) if_block0.l(div0_nodes);
      t0 = claim_space(div0_nodes);
      if (if_block1) if_block1.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div6_nodes);
      div4 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      div1 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t2 = claim_text(div1_nodes, t2_value);
      div1_nodes.forEach(detach_dev);
      t3 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      t4 = claim_text(div2_nodes, t4_value);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      t6 = claim_text(div3_nodes, t6_value);
      div3_nodes.forEach(detach_dev);
      t7 = claim_space(div4_nodes);

      for (var _i4 = 0; _i4 < each_blocks_1.length; _i4 += 1) {
        each_blocks_1[_i4].l(div4_nodes);
      }

      div4_nodes.forEach(detach_dev);
      t8 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        each_blocks[_i5].l(div5_nodes);
      }

      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      t9 = claim_space(div7_nodes);
      div7_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "column is-1 location-data svelte-1oqplu8");
      add_location(div0, file, 216, 14, 5669);
      attr_dev(div1, "class", "event-time col-3 svelte-1oqplu8");
      add_location(div1, file, 228, 16, 6241);
      attr_dev(div2, "class", "event-title svelte-1oqplu8");
      add_location(div2, file, 229, 16, 6322);
      attr_dev(div3, "class", "event-description svelte-1oqplu8");
      add_location(div3, file, 230, 16, 6383);
      attr_dev(div4, "class", "column is-9");
      add_location(div4, file, 227, 14, 6199);
      attr_dev(div5, "class", "column text-align-right svelte-1oqplu8");
      add_location(div5, file, 237, 14, 6636);
      attr_dev(div6, "class", "columns");
      add_location(div6, file, 215, 12, 5633);
      attr_dev(div7, "class", div7_class_value = " event " +
      /*eventBdClass*/
      ctx[5](
      /*event*/
      ctx[15]) + " svelte-1oqplu8");
      attr_dev(div7, "live", div7_live_value =
      /*event*/
      ctx[15].livestream);
      attr_dev(div7, "physical", div7_physical_value =
      /*event*/
      ctx[15].physical);
      add_location(div7, file, 212, 10, 5432);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div7, anchor);
      append_dev(div7, div6);
      append_dev(div6, div0);
      if (if_block0) if_block0.m(div0, null);
      append_dev(div0, t0);
      if (if_block1) if_block1.m(div0, null);
      append_dev(div6, t1);
      append_dev(div6, div4);
      append_dev(div4, div1);
      append_dev(div1, t2);
      append_dev(div4, t3);
      append_dev(div4, div2);
      append_dev(div2, t4);
      append_dev(div4, t5);
      append_dev(div4, div3);
      append_dev(div3, t6);
      append_dev(div4, t7);

      for (var _i6 = 0; _i6 < each_blocks_1.length; _i6 += 1) {
        each_blocks_1[_i6].m(div4, null);
      }

      append_dev(div6, t8);
      append_dev(div6, div5);

      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        each_blocks[_i7].m(div5, null);
      }

      append_dev(div7, t9);
    },
    p: function update(ctx, dirty) {
      if (
      /*event*/
      ctx[15].livestream == "true") {
        if (if_block0) ; else {
          if_block0 = create_if_block_1(ctx);
          if_block0.c();
          if_block0.m(div0, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (
      /*event*/
      ctx[15].physical == "yes") {
        if (if_block1) ; else {
          if_block1 = create_if_block(ctx);
          if_block1.c();
          if_block1.m(div0, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      if (dirty &
      /*eventsByDay*/
      1 && t2_value !== (t2_value =
      /*formatTime*/
      ctx[4](
      /*event*/
      ctx[15].startsAt) + "")) set_data_dev(t2, t2_value);
      if (dirty &
      /*eventsByDay*/
      1 && t4_value !== (t4_value =
      /*event*/
      ctx[15].title + "")) set_data_dev(t4, t4_value);
      if (dirty &
      /*eventsByDay*/
      1 && t6_value !== (t6_value =
      /*event*/
      ctx[15].desc + "")) set_data_dev(t6, t6_value);

      if (dirty &
      /*Array, eventsByDay*/
      1) {
        each_value_3 =
        /*event*/
        ctx[15].artists;
        validate_each_argument(each_value_3);

        var _i8;

        for (_i8 = 0; _i8 < each_value_3.length; _i8 += 1) {
          var child_ctx = get_each_context_3(ctx, each_value_3, _i8);

          if (each_blocks_1[_i8]) {
            each_blocks_1[_i8].p(child_ctx, dirty);
          } else {
            each_blocks_1[_i8] = create_each_block_3(child_ctx);

            each_blocks_1[_i8].c();

            each_blocks_1[_i8].m(div4, null);
          }
        }

        for (; _i8 < each_blocks_1.length; _i8 += 1) {
          each_blocks_1[_i8].d(1);
        }

        each_blocks_1.length = each_value_3.length;
      }

      if (dirty &
      /*Array, eventsByDay*/
      1) {
        each_value_2 =
        /*event*/
        ctx[15].artists;
        validate_each_argument(each_value_2);

        var _i9;

        for (_i9 = 0; _i9 < each_value_2.length; _i9 += 1) {
          var _child_ctx = get_each_context_2(ctx, each_value_2, _i9);

          if (each_blocks[_i9]) {
            each_blocks[_i9].p(_child_ctx, dirty);
          } else {
            each_blocks[_i9] = create_each_block_2(_child_ctx);

            each_blocks[_i9].c();

            each_blocks[_i9].m(div5, null);
          }
        }

        for (; _i9 < each_blocks.length; _i9 += 1) {
          each_blocks[_i9].d(1);
        }

        each_blocks.length = each_value_2.length;
      }

      if (dirty &
      /*eventsByDay*/
      1 && div7_class_value !== (div7_class_value = " event " +
      /*eventBdClass*/
      ctx[5](
      /*event*/
      ctx[15]) + " svelte-1oqplu8")) {
        attr_dev(div7, "class", div7_class_value);
      }

      if (dirty &
      /*eventsByDay*/
      1 && div7_live_value !== (div7_live_value =
      /*event*/
      ctx[15].livestream)) {
        attr_dev(div7, "live", div7_live_value);
      }

      if (dirty &
      /*eventsByDay*/
      1 && div7_physical_value !== (div7_physical_value =
      /*event*/
      ctx[15].physical)) {
        attr_dev(div7, "physical", div7_physical_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div7);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_1.name,
    type: "each",
    source: "(212:8) {#each events as event, i}",
    ctx: ctx
  });
  return block;
} // (205:6) {#each Array.from(eventsByDay.entries()) as [date, events]}


function create_each_block(ctx) {
  var h2;
  var t0_value =
  /*formatDate*/
  ctx[2](
  /*events*/
  ctx[1][0].startsAt) + "";
  var t0;
  var h2_id_value;
  var t1;
  var each_1_anchor;
  var each_value_1 =
  /*events*/
  ctx[1];
  validate_each_argument(each_value_1);
  var each_blocks = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  var block = {
    c: function create() {
      h2 = element("h2");
      t0 = text(t0_value);
      t1 = space();

      for (var _i10 = 0; _i10 < each_blocks.length; _i10 += 1) {
        each_blocks[_i10].c();
      }

      each_1_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      h2 = claim_element(nodes, "H2", {
        id: true
      });
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, t0_value);
      h2_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);

      for (var _i11 = 0; _i11 < each_blocks.length; _i11 += 1) {
        each_blocks[_i11].l(nodes);
      }

      each_1_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      attr_dev(h2, "id", h2_id_value =
      /*formatDay*/
      ctx[3](
      /*events*/
      ctx[1][0].startsAt).toLowerCase());
      add_location(h2, file, 205, 8, 5105);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h2, anchor);
      append_dev(h2, t0);
      insert_dev(target, t1, anchor);

      for (var _i12 = 0; _i12 < each_blocks.length; _i12 += 1) {
        each_blocks[_i12].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*eventsByDay*/
      1 && t0_value !== (t0_value =
      /*formatDate*/
      ctx[2](
      /*events*/
      ctx[1][0].startsAt) + "")) set_data_dev(t0, t0_value);

      if (dirty &
      /*eventsByDay*/
      1 && h2_id_value !== (h2_id_value =
      /*formatDay*/
      ctx[3](
      /*events*/
      ctx[1][0].startsAt).toLowerCase())) {
        attr_dev(h2, "id", h2_id_value);
      }

      if (dirty &
      /*eventBdClass, Array, eventsByDay, formatTime*/
      49) {
        each_value_1 =
        /*events*/
        ctx[1];
        validate_each_argument(each_value_1);

        var _i13;

        for (_i13 = 0; _i13 < each_value_1.length; _i13 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i13);

          if (each_blocks[_i13]) {
            each_blocks[_i13].p(child_ctx, dirty);
          } else {
            each_blocks[_i13] = create_each_block_1(child_ctx);

            each_blocks[_i13].c();

            each_blocks[_i13].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        for (; _i13 < each_blocks.length; _i13 += 1) {
          each_blocks[_i13].d(1);
        }

        each_blocks.length = each_value_1.length;
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(h2);
      if (detaching) detach_dev(t1);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(205:6) {#each Array.from(eventsByDay.entries()) as [date, events]}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0;
  var section;
  var div2;
  var div1;
  var h20;
  var t1;
  var t2;
  var p0;
  var t3;
  var t4;
  var p1;
  var t5;
  var a0;
  var t6;
  var t7;
  var h21;
  var t8;
  var t9;
  var div0;
  var t10;
  var a1;
  var t11;
  var t12;
  var each_value_4 = Array.from(
  /*eventsByDay*/
  ctx[0].entries());
  validate_each_argument(each_value_4);
  var each_blocks_1 = [];

  for (var i = 0; i < each_value_4.length; i += 1) {
    each_blocks_1[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
  }

  var each_value = Array.from(
  /*eventsByDay*/
  ctx[0].entries());
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var _i14 = 0; _i14 < each_value.length; _i14 += 1) {
    each_blocks[_i14] = create_each_block(get_each_context(ctx, each_value, _i14));
  }

  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      div2 = element("div");
      div1 = element("div");
      h20 = element("h2");
      t1 = text("Events");
      t2 = space();
      p0 = element("p");
      t3 = text("The online component of Chimera Garden features a mixture of live performance, discussion and demonstrations, streamed directly from St James Hatcham Church and remote artists’ locations. You will be able to catch the online stream through Twitch here on our website during the show.");
      t4 = space();
      p1 = element("p");
      t5 = text("Below you can find the line up of events, some that will be happening physically in St James Hatcham Church and those that will be streaming online. Below you can register for free tickets for the online events. If you would like to visit us at St James Hatcham Church please read our ");
      a0 = element("a");
      t6 = text("safety guidelines and register here.");
      t7 = space();
      h21 = element("h2");
      t8 = text("Schedule");
      t9 = space();
      div0 = element("div");

      for (var _i15 = 0; _i15 < each_blocks_1.length; _i15 += 1) {
        each_blocks_1[_i15].c();
      }

      t10 = space();
      a1 = element("a");
      t11 = text("Free online tickets");
      t12 = space();

      for (var _i16 = 0; _i16 < each_blocks.length; _i16 += 1) {
        each_blocks[_i16].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1llonc1\"]", document_1.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      div2 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h20 = claim_element(div1_nodes, "H2", {});
      var h20_nodes = children(h20);
      t1 = claim_text(h20_nodes, "Events");
      h20_nodes.forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      p0 = claim_element(div1_nodes, "P", {});
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "The online component of Chimera Garden features a mixture of live performance, discussion and demonstrations, streamed directly from St James Hatcham Church and remote artists’ locations. You will be able to catch the online stream through Twitch here on our website during the show.");
      p0_nodes.forEach(detach_dev);
      t4 = claim_space(div1_nodes);
      p1 = claim_element(div1_nodes, "P", {});
      var p1_nodes = children(p1);
      t5 = claim_text(p1_nodes, "Below you can find the line up of events, some that will be happening physically in St James Hatcham Church and those that will be streaming online. Below you can register for free tickets for the online events. If you would like to visit us at St James Hatcham Church please read our ");
      a0 = claim_element(p1_nodes, "A", {
        href: true
      });
      var a0_nodes = children(a0);
      t6 = claim_text(a0_nodes, "safety guidelines and register here.");
      a0_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      t7 = claim_space(div1_nodes);
      h21 = claim_element(div1_nodes, "H2", {});
      var h21_nodes = children(h21);
      t8 = claim_text(h21_nodes, "Schedule");
      h21_nodes.forEach(detach_dev);
      t9 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);

      for (var _i17 = 0; _i17 < each_blocks_1.length; _i17 += 1) {
        each_blocks_1[_i17].l(div0_nodes);
      }

      t10 = claim_space(div0_nodes);
      a1 = claim_element(div0_nodes, "A", {
        class: true,
        href: true
      });
      var a1_nodes = children(a1);
      t11 = claim_text(a1_nodes, "Free online tickets");
      a1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t12 = claim_space(div1_nodes);

      for (var _i18 = 0; _i18 < each_blocks.length; _i18 += 1) {
        each_blocks[_i18].l(div1_nodes);
      }

      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document_1.title = "Schedule - Final Show - 2020";
      add_location(h20, file, 185, 6, 3895);
      add_location(p0, file, 187, 6, 3918);
      attr_dev(a0, "href", "/getting-there");
      add_location(a0, file, 189, 294, 4504);
      add_location(p1, file, 189, 6, 4216);
      add_location(h21, file, 191, 6, 4581);
      attr_dev(a1, "class", "rounded-link bd-col-2 col-2");
      attr_dev(a1, "href", EVENT_URL);
      add_location(a1, file, 201, 8, 4937);
      add_location(div0, file, 192, 6, 4605);
      attr_dev(div1, "class", "content");
      add_location(div1, file, 182, 4, 3859);
      attr_dev(div2, "class", "container is-widescreen");
      add_location(div2, file, 181, 2, 3817);
      attr_dev(section, "class", "section bg-col-7");
      add_location(section, file, 180, 0, 3780);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, div2);
      append_dev(div2, div1);
      append_dev(div1, h20);
      append_dev(h20, t1);
      append_dev(div1, t2);
      append_dev(div1, p0);
      append_dev(p0, t3);
      append_dev(div1, t4);
      append_dev(div1, p1);
      append_dev(p1, t5);
      append_dev(p1, a0);
      append_dev(a0, t6);
      append_dev(div1, t7);
      append_dev(div1, h21);
      append_dev(h21, t8);
      append_dev(div1, t9);
      append_dev(div1, div0);

      for (var _i19 = 0; _i19 < each_blocks_1.length; _i19 += 1) {
        each_blocks_1[_i19].m(div0, null);
      }

      append_dev(div0, t10);
      append_dev(div0, a1);
      append_dev(a1, t11);
      append_dev(div1, t12);

      for (var _i20 = 0; _i20 < each_blocks.length; _i20 += 1) {
        each_blocks[_i20].m(div1, null);
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*formatDay, Array, eventsByDay, scrollTo*/
      9) {
        each_value_4 = Array.from(
        /*eventsByDay*/
        ctx[0].entries());
        validate_each_argument(each_value_4);

        var _i21;

        for (_i21 = 0; _i21 < each_value_4.length; _i21 += 1) {
          var child_ctx = get_each_context_4(ctx, each_value_4, _i21);

          if (each_blocks_1[_i21]) {
            each_blocks_1[_i21].p(child_ctx, dirty);
          } else {
            each_blocks_1[_i21] = create_each_block_4(child_ctx);

            each_blocks_1[_i21].c();

            each_blocks_1[_i21].m(div0, t10);
          }
        }

        for (; _i21 < each_blocks_1.length; _i21 += 1) {
          each_blocks_1[_i21].d(1);
        }

        each_blocks_1.length = each_value_4.length;
      }

      if (dirty &
      /*Array, eventsByDay, eventBdClass, formatTime, formatDay, formatDate*/
      61) {
        each_value = Array.from(
        /*eventsByDay*/
        ctx[0].entries());
        validate_each_argument(each_value);

        var _i22;

        for (_i22 = 0; _i22 < each_value.length; _i22 += 1) {
          var _child_ctx2 = get_each_context(ctx, each_value, _i22);

          if (each_blocks[_i22]) {
            each_blocks[_i22].p(_child_ctx2, dirty);
          } else {
            each_blocks[_i22] = create_each_block(_child_ctx2);

            each_blocks[_i22].c();

            each_blocks[_i22].m(div1, null);
          }
        }

        for (; _i22 < each_blocks.length; _i22 += 1) {
          each_blocks[_i22].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(_ref3) {
    var params, scheduleRows, artistsRows;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _ref3.params;
            _context.next = 3;
            return this.fetch("schedule.tsv").then(function (d) {
              return d.text();
            });

          case 3:
            scheduleRows = _context.sent;
            _context.next = 6;
            return this.fetch("artists.tsv").then(function (d) {
              return d.text();
            });

          case 6:
            artistsRows = _context.sent;
            return _context.abrupt("return", {
              scheduleRows: scheduleRows,
              artistsRows: artistsRows
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _preload.apply(this, arguments);
}

function scrollTo(_ref4) {
  var target = _ref4.target;
  document.querySelector(target.getAttribute("href")).scrollIntoView({
    behavior: "smooth"
  });
}

function instance($$self, $$props, $$invalidate) {
  var scheduleRows = $$props.scheduleRows;
  var artistsRows = $$props.artistsRows;
  var formatDate = timeFormat("%A %d %b");
  var formatDay = timeFormat("%A");
  var formatTime = timeFormat("%H.%M"); // Make a list of unique artist names

  var artists;
  var events;
  var artistByUsername = new Map();
  var eventsByDay;

  function happeningNow(event) {
    return event.startsAt >= now && event.endsAt < now;
  }

  function inPast(event) {
    return event.endsAt < now;
  }

  function eventBdClass(event) {
    if (inPast(event)) {
      return "bd-col-7";
    }

    if (happeningNow(event.startsAt)) {
      return "bd-col-1"; // TODO design shows red colour not in pallette
    }
  }

  var writable_props = ["scheduleRows", "artistsRows"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<Schedule> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Schedule", $$slots, []);

  $$self.$set = function ($$props) {
    if ("scheduleRows" in $$props) $$invalidate(6, scheduleRows = $$props.scheduleRows);
    if ("artistsRows" in $$props) $$invalidate(7, artistsRows = $$props.artistsRows);
  };

  $$self.$capture_state = function () {
    return {
      preload: preload,
      tsvParse: tsvParse,
      group: group,
      timeFormat: timeFormat,
      slugify: slugify,
      EVENT_URL: EVENT_URL,
      now: now,
      scheduleRows: scheduleRows,
      artistsRows: artistsRows,
      formatDate: formatDate,
      formatDay: formatDay,
      formatTime: formatTime,
      artists: artists,
      events: events,
      artistByUsername: artistByUsername,
      eventsByDay: eventsByDay,
      happeningNow: happeningNow,
      inPast: inPast,
      eventBdClass: eventBdClass,
      scrollTo: scrollTo
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("scheduleRows" in $$props) $$invalidate(6, scheduleRows = $$props.scheduleRows);
    if ("artistsRows" in $$props) $$invalidate(7, artistsRows = $$props.artistsRows);
    if ("artists" in $$props) $$invalidate(8, artists = $$props.artists);
    if ("events" in $$props) $$invalidate(1, events = $$props.events);
    if ("artistByUsername" in $$props) $$invalidate(9, artistByUsername = $$props.artistByUsername);
    if ("eventsByDay" in $$props) $$invalidate(0, eventsByDay = $$props.eventsByDay);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*artistsRows, artists, scheduleRows, events*/
    450) {
       {
        $$invalidate(8, artists = tsvParse(artistsRows));
        artists.forEach(function (artist) {
          artistByUsername.set(artist.username, artist);
        });
        $$invalidate(1, events = tsvParse(scheduleRows).map(function (row) {
          row.themes = row.themes.split(/,\s*/);
          row.medium = row.medium.split(/,\s*/);
          row.artists = [];

          if (row.username.trim()) {
            row.username.split(/,\s*/).forEach(function (username) {
              var artist = artistByUsername.get(username);

              if (artist) {
                row.artists.push(artist);
              } else {
                console.log("Couldn't find \"".concat(username, "\""));
              }
            });
          }

          row.startsAt = new Date(row.startTime);
          return row;
        }).filter(function (d) {
          return d.startTime;
        }));
        console.log(events);
        $$invalidate(0, eventsByDay = group(events, function (d) {
          return d.startTime.slice(0, 10);
        }));
      }
    }
  };

  return [eventsByDay, events, formatDate, formatDay, formatTime, eventBdClass, scheduleRows, artistsRows];
}

var Schedule = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Schedule, _SvelteComponentDev);

  var _super = _createSuper(Schedule);

  function Schedule(options) {
    var _this;

    _classCallCheck(this, Schedule);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      scheduleRows: 6,
      artistsRows: 7
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Schedule",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*scheduleRows*/
    ctx[6] === undefined && !("scheduleRows" in props)) {
      console_1.warn("<Schedule> was created without expected prop 'scheduleRows'");
    }

    if (
    /*artistsRows*/
    ctx[7] === undefined && !("artistsRows" in props)) {
      console_1.warn("<Schedule> was created without expected prop 'artistsRows'");
    }

    return _this;
  }

  _createClass(Schedule, [{
    key: "scheduleRows",
    get: function get() {
      throw new Error("<Schedule>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Schedule>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "artistsRows",
    get: function get() {
      throw new Error("<Schedule>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Schedule>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Schedule;
}(SvelteComponentDev);

export default Schedule;
export { preload };
