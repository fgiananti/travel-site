import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class FixedHeader {
  constructor() {
    this.headerTriggerElement = document.querySelector('.large-hero__title');
    this.siteHeader = document.querySelector('.site-header');
    this.siteHeaderLogo = document.querySelector('.site-header__logo')
    this.createHeaderWaypoint();
    this.pageSection = document.querySelectorAll('.page-section');
    this.headerLinks = document.querySelectorAll('.primary-nav a');
    this.createSectionWaypoints();
    this.addSmoothScrolling();
  }

  createHeaderWaypoint() {
    const that = this;
    new Waypoint ({
      element: this.headerTriggerElement,
      handler: (direction) => {
        if (direction == 'down') {
          that.siteHeader.classList.add('site-header--dark')
          that.siteHeaderLogo.classList.add('site-header__logo--small')
        } else {
          that.siteHeader.classList.remove('site-header--dark')
          that.siteHeaderLogo.classList.remove('site-header__logo--small')
        }
      }
    })
  }

  createSectionWaypoints() {
    const that = this;
    this.pageSection.forEach(section => {
      new Waypoint ({
        element: section,
        handler: (direction) => {
          if (direction == 'down') {
            that.headerLinks.forEach(link => {
              link.classList.remove('is-current-link');
            });

            const matchingHeaderLink = section.getAttribute(
              'data-matching-link'
            );

            const matchingHeaderElement = document.querySelector(
              matchingHeaderLink
            );

            matchingHeaderElement.classList.add('is-current-link');
          }
        },
        offset: '18%'
      });

      new Waypoint ({
        element: section,
        handler: (direction) => {
          if (direction == 'up') {
            that.headerLinks.forEach(link => {
              link.classList.remove('is-current-link');
            });

            const matchingHeaderLink = section.getAttribute(
              'data-matching-link'
            );

            const matchingHeaderElement = document.querySelector(
              matchingHeaderLink
            );

            matchingHeaderElement.classList.add('is-current-link');
          }
        },
        offset: '-40%'
      });

    })
  }

  addSmoothScrolling() {
    this.headerLinks.forEach(link => {
      $(link).smoothScroll();
    });
  }

}

export default FixedHeader;
