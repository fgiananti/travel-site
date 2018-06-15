import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import FixedHeader from './modules/FixedHeader';

const mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), '85%');
new RevealOnScroll(document.querySelectorAll('.testimonial-item'), '70%');
const fixedHeader = new FixedHeader();
