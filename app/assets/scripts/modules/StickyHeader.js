import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.siteHeader = document.querySelector('.site-header');
    this.headerTriggerElement = document.querySelector('.large-hero__title');
    this.createHeaderWaypoint();
  }

  createHeaderWaypoint() {
    const that = this;
    new Waypoint({
      element: this.headerTriggerElement,
      handler: function(direction) {
        if (direction === 'down') {
          that.siteHeader.classList.add('site-header--dark');
        } else {
          that.siteHeader.classList.remove('site-header--dark');
        }
      }
    });
  }
}

export default StickyHeader;
