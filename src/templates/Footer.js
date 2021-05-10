const Footer = (data) => {
    const view =`
    <div class="Footer-main">
        <div class="Footer-wrapper">
            <div class="Footer-social">
                <span class="texto-fx">${data.social_cta}</span>
                <div class="icon-link">
                    <a href="https://www.facebook.com/FedEx/" target="_blank">
                        <img class="fx-sm-ico" src="/images/facebook.png" alt="Facebook">
                    </a>
                </div>
                <div class="icon-link">
                    <a href="https://twitter.com/FedEx" target="_blank">
                        <img class="fx-sm-ico" src="/images/ig.png" alt="Twitter">
                    </a>
                </div>
                <div class="icon-link" target="_blank">
                    <a href="https://www.youtube.com/channel/UCq5UqvM2Pob3wNX2tJUx7Kg/custom">
                        <img class="fx-sm-ico" src="/images/yt.png" alt="Youtube">
                    </a>
                </div>
                <div class="icon-link" target="_blank">
                    <a href="https://mx.linkedin.com/company/fedex">
                        <img class="fx-sm-ico" src="/images/linkedin.png" alt="LinkedIn">
                    </a>
                </div>
            </div>
            <div class="Footer-copyright">
                <div class="copyright">
                    <span>© FedEx 1995-2021</span>
                </div>
                <div class="site-nav">
                    <span class="site-nav-tx">${data.site_map}</span>
                    <span>|</span>
                    <span class="site-nav-tx">${data.terms_and_conditions}</span>
                    <span>|</span>
                    <span class="site-nav-tx">${data.privacy}</span>
                </div>
                
            </div>
        </div>
    </div>
    `
    return view;
};

export default Footer;