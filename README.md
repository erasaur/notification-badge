Meteor Notification Badge ![Screenshot](https://raw.githubusercontent.com/erasaur/notification-badge/master/screenshot.png)
=========================

Simple, Animated Notification Badge Template for Meteor

##Usage

The animated badge can be declared in two different ways, both of which require a single `count` parameter.

With a template inclusion helper:

```javascript
// Pass in the count to be displayed
{{#notificationBadge count=notifications.count}}
  <i class="fa fa-lightbulb-o fa-lg"></i>
  // Other custom html...
{{/notificationBadge}}
```

Or as a regular template:

```javascript
// Because the badge is absolutely positioned, make sure it goes
// before the element it is attached to!
{{> notificationBadge count=notifications.count}}
<i class="fa fa-lightbulb-o fa-lg"></i>
```

The notification badge will be rendered inside a container div. The only difference between the two options above is that all elements inside the first declaration will be wrapped inside this div, whereas only the badge element will be wrapped in the second option. You should use the first option if you plan on attaching one badge to multiple elements.

You can pass custom classes to the wrapper div like so:
```javascript
{{> notificationBadge count=notifications.count class="custom-class"}}
```

The css of the container and badge can also be overriden by changing the `.notification-container` and `.notification-badge` classes.

##License
MIT
