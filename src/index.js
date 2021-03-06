import home from './home';
import menu from './menu';
import contact from './contact';

const loadPage = () => {
  const content = document.getElementById('content');
  content.innerHTML = `
  <header>
  <div id="logo">BurgerMelt Kitchen</div>
  <nav id="nav-container">
    <ul id="navbar">
      <li class="nav-items"><a href="#" class="nav-items" id="home-button">Home</a></li>
      <li class="nav-items"><a href="#" class="nav-items" id="menu-button">Menu</a></li>
      <li class="nav-items"><a href="#" class="nav-items" id="contact-button">Contact</a></li>
    </ul>
  </nav>
</header>
<main id="main"></main>
  `;

  const homeButton = document.getElementById('home-button');
  const menuButton = document.getElementById('menu-button');
  const contactButton = document.getElementById('contact-button');

  homeButton.addEventListener('click', home);
  menuButton.addEventListener('click', menu);
  contactButton.addEventListener('click', contact);
};

const init = (() => {
  loadPage();
  home();
})();
