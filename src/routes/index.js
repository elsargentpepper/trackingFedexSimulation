import Header from '../templates/Header';
import Home from '../pages/Home';
import Error404 from '../templates/Header';
import Footer from '../templates/Footer';

const router = async () => {
    const header = null || document.getElementById('header');
    const footer = null || document.getElementById('footer');
    const content = null || document.getElementById('content');

    header.innerHTML = Header();
    footer.innerHTML = Footer();
    content.innerHTML = Home();

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".Nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");

    const navLink = document.querySelectorAll(".Nav-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
}
}
};

export default router;