const Footer = () => {
    const view =`
    <div class="Footer-main">
        <div class="Footer-wrapper">
            <div class="Footer-social">
                <span class="texto-fx">Seguir a fedex</span>
                <div class="icon-link">
                    <a href="url">
                        <img class="fx-sm-ico" src="/images/facebook.png" alt="Facebook">
                    </a>
                </div>
                <div class="icon-link">
                    <a href="url">
                        <img class="fx-sm-ico" src="/images/ig.png" alt="Twitter">
                    </a>
                </div>
                <div class="icon-link">
                    <a href="url">
                        <img class="fx-sm-ico" src="/images/yt.png" alt="Youtube">
                    </a>
                </div>
                <div class="icon-link">
                    <a href="url">
                        <img class="fx-sm-ico" src="/images/linkedin.png" alt="LinkedIn">
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