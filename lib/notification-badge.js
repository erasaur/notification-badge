Template.notificationBadge.helpers({
  count: function () {
    $('.notification-count')
      .css({ opacity: 0 })
      .css({ top: '-3px' })
      .animate({ top: '5px', opacity: 1 });

    return this.count;
  }
});