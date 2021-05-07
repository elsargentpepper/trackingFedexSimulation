const Header = () => {
    const view =`
    <div class="Header-main">
        <nav class="Header-nav">
                <div>
                    <a href="/"><image class="Header-logo" src="/images/logo.png" alt="Página de inicio de FedEx"/></a>
                </div>
                <ul class="Nav-menu">
                    <li class="Nav-item">
                        <a href="#" class="Nav-link">
                            Envíos</a>
                    </li>
                    <li class="Nav-item">
                        <a href="#" class="Nav-link">Rastreo</a>
                    </li>
                    <li class="Nav-item">
                        <a href="#" class="Nav-link">Soporte</a>
                    </li>
                    <li class="Nav-item">  
                        <a href="#" class="Nav-link">Cuenta</a>
                    </li>
                </ul>
                <div class="Nav-icons">
                    <div>
                            <a href="/"><image class="Nav-user" src="/images/user.png" alt="User login"/></a>
                    </div>
                    <div>
                            <a href="/"><image class="Nav-search" src="/images/loupe.png" alt="Search"/></a>
                    </div>
                    <div class="hamburger">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </div>
        </nav>
    </div>
    `
    return view;
};

export default Header;