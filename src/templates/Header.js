const Header = () => {
    const view =`
    <div class="Header-main">
        <div class="Header-wrapper">
            <div class="Header-logo">
                <h1>
                    <a href="/">
                        <image src="/images/logo.png" alt="Página de inicio de FedEx"/>
                    </a>
                </h1>
            </div>
            <ul class="Header-nav">
                <li>Envíos</li>
                <li>Rastreo</li>
                <li>Soporte</li>
                <li>Cuenta</li>
            </ul>
            <div class="User-nav">
                <div class="User-logo">
                    <h1>
                        <a href="/">
                            <image src="" alt="User login"/>
                        </a>
                    </h1>
                </div>
                <div class="Header-logo">
                    <h1>
                        <a href="/">
                            <image src="" alt="Página de inicio de FedEx"/>
                        </a>
                    </h1>
                </div>
            </div>
        </div>
    </div>
    `
    return view;
};

export default Header;