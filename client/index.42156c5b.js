import { D as readable, S as SvelteComponentDev, i as init, d as dispatch_dev, E as globals, s as safe_not_equal, F as validate_each_argument, b as validate_slots, e as element, t as text, g as claim_element, j as children, k as claim_text, l as detach_dev, m as attr_dev, n as add_location, o as insert_dev, p as append_dev, G as listen_dev, q as set_data_dev, f as space, H as empty, h as claim_space, I as destroy_each, w as query_selector_all, r as noop, J as prevent_default, C as set_style } from './client.cfba85bb.js';
import { t as tsvParse } from './tsv.6a7ced64.js';
import { s as slugify } from './helpers.ce81ccb7.js';
import { E as EVENT_URL } from './constants.e85bc00e.js';

function identity(x) {
  return x;
}

function group(values, ...keys) {
  return nest(values, identity, identity, keys);
}

function nest(values, map, reduce, keys) {
  return (function regroup(values, i) {
    if (i >= keys.length) return reduce(values);
    const groups = new Map();
    const keyof = keys[i++];
    let index = -1;
    for (const value of values) {
      const key = keyof(value, ++index, values);
      const group = groups.get(key);
      if (group) group.push(value);
      else groups.set(key, [value]);
    }
    for (const [key, values] of groups) {
      groups.set(key, regroup(values, i));
    }
    return map(groups);
  })(values, 0);
}

var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
  }

  interval.floor = function(date) {
    return floori(date = new Date(+date)), date;
  };

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
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
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}

var durationMinute = 6e4;
var durationDay = 864e5;
var durationWeek = 6048e5;

var day = newInterval(
  date => date.setHours(0, 0, 0, 0),
  (date, step) => date.setDate(date.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay,
  date => date.getDate() - 1
);

function weekday(i) {
  return newInterval(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
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

var year = newInterval(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

var utcDay = newInterval(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / durationDay;
}, function(date) {
  return date.getUTCDate() - 1;
});

function utcWeekday(i) {
  return newInterval(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
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

var utcYear = newInterval(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
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
  return {y: y, m: m, d: d, H: 0, M: 0, S: 0, L: 0};
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
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
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
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
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
    return function(string) {
      var d = newDate(1900, undefined, 1),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day$1;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

      // If this is utcParse, never use the local timezone.
      if (Z && !("Z" in d)) d.Z = 0;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // If the month was not specified, inherit from the quarter.
      if (d.m === undefined) d.m = "q" in d ? d.q : 0;

      // Convert day-of-week and week-of-year to day-of-year.
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
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
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
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
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
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
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
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
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
  return (day >= 4 || day === 0) ? thursday(d) : thursday.ceil(d);
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
  d = (day >= 4 || day === 0) ? thursday(d) : thursday.ceil(d);
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
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
  return (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
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
  d = (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
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

const now = readable(null, (set) => {
  set(new Date());

  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return () => clearInterval(interval);
});

/* src/routes/schedule/index.svelte generated by Svelte v3.24.0 */

const { console: console_1, document: document_1 } = globals;
const file = "src/routes/schedule/index.svelte";

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[18] = list[i];
	return child_ctx;
}

function get_each_context_3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[18] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[15] = list[i];
	child_ctx[17] = i;
	return child_ctx;
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i][0];
	child_ctx[1] = list[i][1];
	return child_ctx;
}

function get_each_context_4(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i][0];
	child_ctx[1] = list[i][1];
	return child_ctx;
}

// (194:8) {#each Array.from(eventsByDay.entries()) as [date, events]}
function create_each_block_4(ctx) {
	let a;
	let t_value = /*formatDay*/ ctx[3](/*events*/ ctx[1][0].startsAt) + "";
	let t;
	let a_href_value;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			a = element("a");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, t_value);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "class", "rounded-link bd-col-1 col-1");
			attr_dev(a, "href", a_href_value = "#" + /*formatDay*/ ctx[3](/*events*/ ctx[1][0].startsAt).toLowerCase());
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
			if (dirty & /*eventsByDay*/ 1 && t_value !== (t_value = /*formatDay*/ ctx[3](/*events*/ ctx[1][0].startsAt) + "")) set_data_dev(t, t_value);

			if (dirty & /*eventsByDay*/ 1 && a_href_value !== (a_href_value = "#" + /*formatDay*/ ctx[3](/*events*/ ctx[1][0].startsAt).toLowerCase())) {
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
		block,
		id: create_each_block_4.name,
		type: "each",
		source: "(194:8) {#each Array.from(eventsByDay.entries()) as [date, events]}",
		ctx
	});

	return block;
}

// (218:16) {#if event.livestream == "true"}
function create_if_block_1(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("ONLINE");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
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
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(218:16) {#if event.livestream == \\\"true\\\"}",
		ctx
	});

	return block;
}

// (222:16) {#if event.physical == "yes"}
function create_if_block(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("PHYSICAL");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
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
		block,
		id: create_if_block.name,
		type: "if",
		source: "(222:16) {#if event.physical == \\\"yes\\\"}",
		ctx
	});

	return block;
}

// (233:16) {#each event.artists as artist}
function create_each_block_3(ctx) {
	let a;
	let t_value = /*artist*/ ctx[18].name + "";
	let t;
	let a_href_value;

	const block = {
		c: function create() {
			a = element("a");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, t_value);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "href", a_href_value = "artists/" + /*artist*/ ctx[18].slug);
			attr_dev(a, "class", "artist-name col-5 svelte-1oqplu8");
			add_location(a, file, 233, 18, 6500);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*eventsByDay*/ 1 && t_value !== (t_value = /*artist*/ ctx[18].name + "")) set_data_dev(t, t_value);

			if (dirty & /*eventsByDay*/ 1 && a_href_value !== (a_href_value = "artists/" + /*artist*/ ctx[18].slug)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_3.name,
		type: "each",
		source: "(233:16) {#each event.artists as artist}",
		ctx
	});

	return block;
}

// (240:16) {#each event.artists as artist}
function create_each_block_2(ctx) {
	let a;
	let span;
	let t;
	let a_href_value;

	const block = {
		c: function create() {
			a = element("a");
			span = element("span");
			t = space();
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true });
			var a_nodes = children(a);
			span = claim_element(a_nodes, "SPAN", { class: true, style: true });
			var span_nodes = children(span);
			span_nodes.forEach(detach_dev);
			t = claim_space(a_nodes);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "bio-photo svelte-1oqplu8");
			set_style(span, "background-image", "url(img/bios/" + /*artist*/ ctx[18].username + ".jpeg)");
			add_location(span, file, 242, 20, 6937);
			attr_dev(a, "href", a_href_value = "artists/" + /*artist*/ ctx[18].slug);
			add_location(a, file, 240, 18, 6741);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, span);
			append_dev(a, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*eventsByDay*/ 1) {
				set_style(span, "background-image", "url(img/bios/" + /*artist*/ ctx[18].username + ".jpeg)");
			}

			if (dirty & /*eventsByDay*/ 1 && a_href_value !== (a_href_value = "artists/" + /*artist*/ ctx[18].slug)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_2.name,
		type: "each",
		source: "(240:16) {#each event.artists as artist}",
		ctx
	});

	return block;
}

// (212:8) {#each events as event, i}
function create_each_block_1(ctx) {
	let div7;
	let div6;
	let div0;
	let t0;
	let t1;
	let div4;
	let div1;
	let t2_value = /*formatTime*/ ctx[4](/*event*/ ctx[15].startsAt) + "";
	let t2;
	let t3;
	let div2;
	let t4_value = /*event*/ ctx[15].title + "";
	let t4;
	let t5;
	let div3;
	let t6_value = /*event*/ ctx[15].desc + "";
	let t6;
	let t7;
	let t8;
	let div5;
	let t9;
	let div7_class_value;
	let div7_live_value;
	let div7_physical_value;
	let if_block0 = /*event*/ ctx[15].livestream == "true" && create_if_block_1(ctx);
	let if_block1 = /*event*/ ctx[15].physical == "yes" && create_if_block(ctx);
	let each_value_3 = /*event*/ ctx[15].artists;
	validate_each_argument(each_value_3);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_3.length; i += 1) {
		each_blocks_1[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
	}

	let each_value_2 = /*event*/ ctx[15].artists;
	validate_each_argument(each_value_2);
	let each_blocks = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	const block = {
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

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t8 = space();
			div5 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t9 = space();
			this.h();
		},
		l: function claim(nodes) {
			div7 = claim_element(nodes, "DIV", { class: true, live: true, physical: true });
			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div0 = claim_element(div6_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			if (if_block0) if_block0.l(div0_nodes);
			t0 = claim_space(div0_nodes);
			if (if_block1) if_block1.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div6_nodes);
			div4 = claim_element(div6_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			t2 = claim_text(div1_nodes, t2_value);
			div1_nodes.forEach(detach_dev);
			t3 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			t4 = claim_text(div2_nodes, t4_value);
			div2_nodes.forEach(detach_dev);
			t5 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			t6 = claim_text(div3_nodes, t6_value);
			div3_nodes.forEach(detach_dev);
			t7 = claim_space(div4_nodes);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(div4_nodes);
			}

			div4_nodes.forEach(detach_dev);
			t8 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div5_nodes);
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
			attr_dev(div7, "class", div7_class_value = " event " + /*eventBdClass*/ ctx[5](/*event*/ ctx[15]) + " svelte-1oqplu8");
			attr_dev(div7, "live", div7_live_value = /*event*/ ctx[15].livestream);
			attr_dev(div7, "physical", div7_physical_value = /*event*/ ctx[15].physical);
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

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div4, null);
			}

			append_dev(div6, t8);
			append_dev(div6, div5);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div5, null);
			}

			append_dev(div7, t9);
		},
		p: function update(ctx, dirty) {
			if (/*event*/ ctx[15].livestream == "true") {
				if (if_block0) ; else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					if_block0.m(div0, t0);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*event*/ ctx[15].physical == "yes") {
				if (if_block1) ; else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(div0, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (dirty & /*eventsByDay*/ 1 && t2_value !== (t2_value = /*formatTime*/ ctx[4](/*event*/ ctx[15].startsAt) + "")) set_data_dev(t2, t2_value);
			if (dirty & /*eventsByDay*/ 1 && t4_value !== (t4_value = /*event*/ ctx[15].title + "")) set_data_dev(t4, t4_value);
			if (dirty & /*eventsByDay*/ 1 && t6_value !== (t6_value = /*event*/ ctx[15].desc + "")) set_data_dev(t6, t6_value);

			if (dirty & /*Array, eventsByDay*/ 1) {
				each_value_3 = /*event*/ ctx[15].artists;
				validate_each_argument(each_value_3);
				let i;

				for (i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3(ctx, each_value_3, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_3(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(div4, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_3.length;
			}

			if (dirty & /*Array, eventsByDay*/ 1) {
				each_value_2 = /*event*/ ctx[15].artists;
				validate_each_argument(each_value_2);
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_2(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div5, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_2.length;
			}

			if (dirty & /*eventsByDay*/ 1 && div7_class_value !== (div7_class_value = " event " + /*eventBdClass*/ ctx[5](/*event*/ ctx[15]) + " svelte-1oqplu8")) {
				attr_dev(div7, "class", div7_class_value);
			}

			if (dirty & /*eventsByDay*/ 1 && div7_live_value !== (div7_live_value = /*event*/ ctx[15].livestream)) {
				attr_dev(div7, "live", div7_live_value);
			}

			if (dirty & /*eventsByDay*/ 1 && div7_physical_value !== (div7_physical_value = /*event*/ ctx[15].physical)) {
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
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(212:8) {#each events as event, i}",
		ctx
	});

	return block;
}

// (205:6) {#each Array.from(eventsByDay.entries()) as [date, events]}
function create_each_block(ctx) {
	let h2;
	let t0_value = /*formatDate*/ ctx[2](/*events*/ ctx[1][0].startsAt) + "";
	let t0;
	let h2_id_value;
	let t1;
	let each_1_anchor;
	let each_value_1 = /*events*/ ctx[1];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const block = {
		c: function create() {
			h2 = element("h2");
			t0 = text(t0_value);
			t1 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", { id: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, t0_value);
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "id", h2_id_value = /*formatDay*/ ctx[3](/*events*/ ctx[1][0].startsAt).toLowerCase());
			add_location(h2, file, 205, 8, 5105);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h2, anchor);
			append_dev(h2, t0);
			insert_dev(target, t1, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*eventsByDay*/ 1 && t0_value !== (t0_value = /*formatDate*/ ctx[2](/*events*/ ctx[1][0].startsAt) + "")) set_data_dev(t0, t0_value);

			if (dirty & /*eventsByDay*/ 1 && h2_id_value !== (h2_id_value = /*formatDay*/ ctx[3](/*events*/ ctx[1][0].startsAt).toLowerCase())) {
				attr_dev(h2, "id", h2_id_value);
			}

			if (dirty & /*eventBdClass, Array, eventsByDay, formatTime*/ 49) {
				each_value_1 = /*events*/ ctx[1];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
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
		block,
		id: create_each_block.name,
		type: "each",
		source: "(205:6) {#each Array.from(eventsByDay.entries()) as [date, events]}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let section;
	let div2;
	let div1;
	let h20;
	let t1;
	let t2;
	let p0;
	let t3;
	let t4;
	let p1;
	let t5;
	let a0;
	let t6;
	let t7;
	let h21;
	let t8;
	let t9;
	let div0;
	let t10;
	let a1;
	let t11;
	let t12;
	let each_value_4 = Array.from(/*eventsByDay*/ ctx[0].entries());
	validate_each_argument(each_value_4);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_4.length; i += 1) {
		each_blocks_1[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
	}

	let each_value = Array.from(/*eventsByDay*/ ctx[0].entries());
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
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

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t10 = space();
			a1 = element("a");
			t11 = text("Free online tickets");
			t12 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1llonc1\"]", document_1.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div2 = claim_element(section_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
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
			a0 = claim_element(p1_nodes, "A", { href: true });
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

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(div0_nodes);
			}

			t10 = claim_space(div0_nodes);
			a1 = claim_element(div0_nodes, "A", { class: true, href: true });
			var a1_nodes = children(a1);
			t11 = claim_text(a1_nodes, "Free online tickets");
			a1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t12 = claim_space(div1_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div1_nodes);
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

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div0, null);
			}

			append_dev(div0, t10);
			append_dev(div0, a1);
			append_dev(a1, t11);
			append_dev(div1, t12);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*formatDay, Array, eventsByDay, scrollTo*/ 9) {
				each_value_4 = Array.from(/*eventsByDay*/ ctx[0].entries());
				validate_each_argument(each_value_4);
				let i;

				for (i = 0; i < each_value_4.length; i += 1) {
					const child_ctx = get_each_context_4(ctx, each_value_4, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_4(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(div0, t10);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_4.length;
			}

			if (dirty & /*Array, eventsByDay, eventBdClass, formatTime, formatDay, formatDate*/ 61) {
				each_value = Array.from(/*eventsByDay*/ ctx[0].entries());
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div1, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
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
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload({ params }) {
	const scheduleRows = await this.fetch("schedule.tsv").then(d => d.text());
	const artistsRows = await this.fetch("artists.tsv").then(d => d.text());
	return { scheduleRows, artistsRows };
}

function scrollTo({ target }) {
	document.querySelector(target.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
}

function instance($$self, $$props, $$invalidate) {
	let { scheduleRows } = $$props;
	let { artistsRows } = $$props;
	const formatDate = timeFormat("%A %d %b");
	const formatDay = timeFormat("%A");
	const formatTime = timeFormat("%H.%M");

	// Make a list of unique artist names
	let artists;

	let events;
	let artistByUsername = new Map();
	let eventsByDay;

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

	const writable_props = ["scheduleRows", "artistsRows"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Schedule> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Schedule", $$slots, []);

	$$self.$set = $$props => {
		if ("scheduleRows" in $$props) $$invalidate(6, scheduleRows = $$props.scheduleRows);
		if ("artistsRows" in $$props) $$invalidate(7, artistsRows = $$props.artistsRows);
	};

	$$self.$capture_state = () => ({
		preload,
		tsvParse,
		group,
		timeFormat,
		slugify,
		EVENT_URL,
		now,
		scheduleRows,
		artistsRows,
		formatDate,
		formatDay,
		formatTime,
		artists,
		events,
		artistByUsername,
		eventsByDay,
		happeningNow,
		inPast,
		eventBdClass,
		scrollTo
	});

	$$self.$inject_state = $$props => {
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

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*artistsRows, artists, scheduleRows, events*/ 450) {
			 {
				$$invalidate(8, artists = tsvParse(artistsRows));

				artists.forEach(artist => {
					artistByUsername.set(artist.username, artist);
				});

				$$invalidate(1, events = tsvParse(scheduleRows).map(row => {
					row.themes = row.themes.split(/,\s*/);
					row.medium = row.medium.split(/,\s*/);
					row.artists = [];

					if (row.username.trim()) {
						row.username.split(/,\s*/).forEach(username => {
							const artist = artistByUsername.get(username);

							if (artist) {
								row.artists.push(artist);
							} else {
								console.log(`Couldn't find "${username}"`);
							}
						});
					}

					row.startsAt = new Date(row.startTime);
					return row;
				}).filter(d => d.startTime));

				console.log(events);
				$$invalidate(0, eventsByDay = group(events, d => d.startTime.slice(0, 10)));
			}
		}
	};

	return [
		eventsByDay,
		events,
		formatDate,
		formatDay,
		formatTime,
		eventBdClass,
		scheduleRows,
		artistsRows
	];
}

class Schedule extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { scheduleRows: 6, artistsRows: 7 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Schedule",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*scheduleRows*/ ctx[6] === undefined && !("scheduleRows" in props)) {
			console_1.warn("<Schedule> was created without expected prop 'scheduleRows'");
		}

		if (/*artistsRows*/ ctx[7] === undefined && !("artistsRows" in props)) {
			console_1.warn("<Schedule> was created without expected prop 'artistsRows'");
		}
	}

	get scheduleRows() {
		throw new Error("<Schedule>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set scheduleRows(value) {
		throw new Error("<Schedule>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get artistsRows() {
		throw new Error("<Schedule>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set artistsRows(value) {
		throw new Error("<Schedule>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Schedule;
export { preload };
