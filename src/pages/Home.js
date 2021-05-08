const Home = (data) => {
    const hero = data.hero || {};
    const tracking_info = data.tracking_info || {};
    const tracking_options = data.tracking_options || [];
    const tracking_options_info = data.tracking_options_info || {};
    const company_info = data.company_info || {};
    const language = data.language || "";

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
            <select>
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
                    `<div>
                        <picture>
                            <img class="options-pic" src="${option.image}" alt="">
                        </picture>
                        <div class="advanced-tx">
                            <h3 class="title">${option.title}</h3>
                            <p class="title-p">${option.description}</p>
                        </div>
                    </div>`
                    ).join('')}
            </div>
        </div>
        <div class="space"></div>
        <div class="extra-info">
            ${company_info.map(info => `
                <div>
                <div class="text-fx">${info.title}</div>
                <ul>
                ${info.options.map(option =>`
                    <li><a class="text-link" href="">${option}</a></li>
                `).join('')}
                </ul>
                </div>
            `).join('')}
            <div class="language">
                <div class="text-fx">${language}</div>
                    <figure>
                        <img class="globe" src="/images/globe.png" alt="globe">
                        <div><a class="text-link" href="">México</a></div>
                    </figure>
                </div>
            </div>
    </div>
    `
    return view;
};

export default Home;