import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.siteHeader = document.querySelector('.site-header');
    this.headerTriggerElement = document.querySelector('.large-hero__title');
    this.createHeaderWaypoint();
    this.pageSections = document.querySelectorAll('.page-section');
    this.headerLinks = document.querySelectorAll('.primary-nav a');
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.headerLinks.forEach(link => {
      $(link).smoothScroll();
    });
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

  createPageSectionWaypoints() {
    const that = this;
    this.pageSections.forEach(function(section) {
      new Waypoint({
        element: section,
        handler: direction => {
          if (direction == 'down') {
            const matchingHeaderLink = section.getAttribute(
              'data-matching-link'
            );

            that.headerLinks.forEach(link => {
              link.classList.remove('is-current-link');
            });

            const matchingHeaderElement = document.querySelector(
              matchingHeaderLink
            );

            matchingHeaderElement.classList.add('is-current-link');
          }
        },
        offset: '18%'
      });

      new Waypoint({
        element: section,
        handler: direction => {
          if (direction == 'up') {
            const matchingHeaderLink = section.getAttribute(
              'data-matching-link'
            );

            that.headerLinks.forEach(link => {
              link.classList.remove('is-current-link');
            });

            const matchingHeaderElement = document.querySelector(
              matchingHeaderLink
            );

            matchingHeaderElement.classList.add('is-current-link');
          }
        },
        offset: '-40%'
      });
    });
  }
}

export default StickyHeader;
