Template.notificationBadge.helpers({
  count: function () {
    // access template instance instead of 'this', 
    // which only returns the data context
    var self = Template.instance();

    self._count = self._count || this.count;

    if (this.count !== self._count) {
      Tracker.afterFlush(function () {
        var $badge = $('.notification-badge');
        var initY = parseInt($badge.css('top'), 10);
        var initOpacity = $badge.css('opacity');
        var animY = initY - 8;

        $badge
          .css({ opacity: 0 })
          .css({ top: animY + 'px' })
          .animate({ top: initY, opacity: initOpacity });
      });
      
      self._count = this.count;
    }

    return this.count;
  }
});