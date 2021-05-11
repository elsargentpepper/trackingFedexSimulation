const Header = (data) => {
    const view =`
    <div class="Header-main">
        <nav class="Header-nav">
                <div>
                    <a href="/"><image class="Header-logo" src="assets/images/logo.png" alt="Página de inicio de FedEx"/></a>
                </div>
                <ul class="Nav-menu">
                    <li class="Nav-item">
                        <a href="#" class="Nav-link">${data.shipping}</a>
                    </li>
                    <li class="Nav-item">
                        <a href="#" class="Nav-link">${data.tracking}</a>
                    </li>
                    <li class="Nav-item">
                        <a href="#" class="Nav-link">${data.support}</a>
                    </li>
                    <li class="Nav-item">  
                        <a href="#" class="Nav-link">${data.account}</a>
                    </li>
                </ul>
                <div class="Nav-icons">
                    <div>
                            <a href=""><image class="Nav-user" src="assets/images/user.png" alt="User login"/></a>
                    </div>
                    <div>
                            <a href=""><image class="Nav-search" src="assets/images/loupe.png" alt="Search"/></a>
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