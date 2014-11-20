Template.notificationBadge.helpers({
  count: function () {
    // TODO: find a better way ?
    this._count = this._count || this.count;

    if (this.count !== this._count) {
      $('.notification-count')
        .css({ opacity: 0 })
        .css({ top: '-3px' })
        .animate({ top: '5px', opacity: 1 });  
    }

    return this.count;
  }
});