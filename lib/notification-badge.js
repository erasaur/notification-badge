Template.notificationBadge.helpers({
  count: function () {
    // access template instance instead of 'this', 
    // which only returns the data context
    var self = Template.instance();

    self._count = self._count || this.count;

    if (this.count !== self._count) {
      Meteor.defer(function () {
        $('.notification-count')
          .css({ opacity: 0 })
          .css({ top: '-20px' })
          .animate({ top: '-8px', opacity: 1 });    
      });
      
      self._count = this.count;
    }

    return this.count;
  }
});