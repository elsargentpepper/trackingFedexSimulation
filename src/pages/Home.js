const Home = (data) => {
    const hero = data.hero || {};
    const tracking_info = data.tracking_info || {};
    const tracking_options = data.tracking_options || [];
    const tracking_options_info = data.tracking_options_info || {};
    const company_info = data.company_info || {};
    const language = data.language || "";
    const currentLanguage = window.localStorage.getItem('lang') || 'es';

    const view = `
    <div class="content">
        
        <div class="hero-image">
            <div class="hero-text">
                <div><h1>${hero.title}</h1></div>
                <div><p>${hero.description}<p>
                </div>
            </div>
        </div>
        <div class="space"></div>
        <h2 class="title">${tracking_info.title}</h2>
        <p class="title-p">${tracking_info.description}</p>
        <div class="tracking">
            <select class="track-menu-info">
                ${tracking_options.map(option =>
                    `<option label="${option.label}" value="${option.value}"></option>`
                ).join('')}
            </select>
        </div>
        <div class="space"></div>
        <div class="options">
            <h3 class="title">Opciones de rastreo</h3>
            <div class="options-wrapper">
                ${tracking_options_info.map(option =>
                    `<div class="options-single">
                        <picture>
                            <img class="options-pic" src="assets${option.image}" alt="">
                        </picture>
                        <div class="advanced-tx">
                            <h3 class="title-opt">${option.title}</h3>
                            <p class="title-opt-p">${option.description}</p>
                        </div>
                    </div>`
                    ).join('')}
            </div>
        </div>
        <div class="space"></div>
        <div class="extra-info">
            ${company_info.map(info => `
                <div class="extra-info-inner">
                <div class="text-fx">${info.title}</div>
                <ul>
                ${info.options.map(option =>`
                    <li><a class="text-link" href="">${option}</a></li>
                `).join('')}
                </ul>
                </div>
            `).join('')}
            <div class="extra-info-inner">
                <div class="text-fx">${language}</div>
                    <figure>
                        <img class="globe" src="assets/images/globe.png" alt="globe">
                        <div class="lang-menu">
                        <select name="lang-menu-select" id="lang-menu-select">
                            <option ${ currentLanguage === 'es' ? "selected" : "" } value="es">Español</option>
                            <option ${ currentLanguage === 'en' ? "selected" : "" } value="en">English</option>
                        </select>
                    </div>
                    </figure>
                </div>
            </div>
        <button class="btn btn-chat" type="button" onclick="openChat()">Chat</button>
        <div class="Chatbox" id="chatbox">
            <h4 class="title-chat">Mensaje</h4>
            <form action="form-container">
                <textarea type="text" placeholder="Type away..." name="msg" required=""></textarea>
                <div class="chat-buttons">
                    <button type="button" class="btn btn-info btn-lg btn-send">Enviar</button>
                    <button type="button" class="btn btn-danger btn-lg btn-close" onclick="closeChat()">Cerrar</button>
                </div>
                
            </form>
        </div>
    </div>
    `
    return view;
};

export default Home;