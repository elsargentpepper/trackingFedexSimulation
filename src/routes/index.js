import Header from '../templates/Header';
import Home from '../pages/Home';
import Error404 from '../templates/Header';
import Footer from '../templates/Footer';

const routes = {
    '/': Home,
    '/tracking': 'Tracking',
}

const router = async () => {
    const header = null || document.getElementById('header');
    const footer = null || document.getElementById('footer');
    const content = null || document.getElementById('content');

    header.innerHTML = Header();
    footer.innerHTML = Footer();
    content.innerHTML = Home();

};

export default router;