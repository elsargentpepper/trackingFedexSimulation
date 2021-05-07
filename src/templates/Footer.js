const Footer = () => {
    const view =`
    <div class="Footer-main">
        <div class="Footer-wrapper">
            <div class="Footer-social">
                <span>Seguir a fedex</span>
                <div class="icon-link">
                    <a href="url">
                        <img src="icon" alt="Facebook">
                    </a>
                </div>
                <div class="icon-link">
                    <a href="url">
                        <img src="icon" alt="Twitter">
                    </a>
                </div>
                <div class="icon-link">
                    <a href="url">
                        <img src="icon" alt="Youtube">
                    </a>
                </div>
                <div class="icon-link">
                    <a href="url">
                        <img src="icon" alt="LinkedIn">
                    </a>
                </div>
            </div>
            <div class="Footer-copyright">
                <span>© FedEx 1995-2021</span>
                <span>Mapa del sitio</span>
                <span>Terminos y condiciones</span>
                <span>Aviso de privacidad</span>
            </div>
        </div>
    </div>
    `
    return view;
};

export default Footer;