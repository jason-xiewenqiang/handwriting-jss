const eventUtils = {
  addEvent: function (el, type, handler) {
    if (el.addEventListener) {
      el.addEventListener(type, handler, false);
    } else if (el.attachEvent) {
      el.attachEvent("on" + type, handler);
    } else {
      el[`on${type}`] = handler;
    }
  },
  removeEvent: function (el, type, handler) {
    if (el.removeEventListener) {
      el.removeEventListener(type, handler, false);
    } else if (el.detachEvent) {
      el.detachEvent(`on${type}`, handler);
    } else {
      el[`on${type}`] = null;
    }
  },
  getTarget: function (event) {
    return event.target || event.srcElement;
  },
  getEvent: function (event) {
    return event || window.event;
  },
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },
  perventDefault: function (event) {
    if (event.perventDefault) {
      event.perventDefault();
    } else {
      event.returnValue = false;
    }
  },
};
