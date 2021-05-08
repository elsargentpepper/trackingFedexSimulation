const Home = () => {
    const view = `
    <div class="content">
        <div class="spacer"></div>
        <h2 class="title">Rastrea de la manera que más te guste</h2>
        <p class="title-p">¿Necesitas el estado de tu envío o una prueba de entrega? Ingresa tu número de rastreo o número de referencia abajo.</p>
        <div class="tracking">
            <select>
                <option label="Número de rastreo" value="número-rastreo"></option>
                <option label="Rastrear por referencia" value="referencia-rastreo"></option>
                <option label="Obtenga la prueba de entrega" value="prueba-entrega"></option>
            </select>
            <div class="extra-info">
                <div class="info-client">
                    <div class="text-fx">Información de la compañía</div>
                    <div><a class="text-link" href="">Acerca de FedEx</a></div>
                    <div><a class="text-link" href="">FedEx y la ecología</a></div>
                    <div><a class="text-link" href="">Alerta al fraude</a></div>
                    <div><a class="text-link" href="">Carreras</a></div>
                    <div><a class="text-link" href="">Calendario internacional</a></div>
                    <div><a class="text-link" href="">Términos y condiciones</a></div>
                    <div><a class="text-link" href="">Rules</a></div>
                </div>
                <div class="client-service">
                    <div class="text-fx">Ayuda al cliente</div>
                        <div><a class="text-link" href="">Escribir FedEx</a></div>
                        <div><a class="text-link" href="">Herramientas</a></div>
                        <div><a class="text-link" href="">Información sobre recargo de combustible</a></div>
                        <div><a class="text-link" href="">FedEx Móvil</a></div>
                        <div><a class="text-link" href="">Aviso de privacidad</a></div>
                        <div><a class="text-link" href="">Artículos prohibidos</a></div>

                </div>
                <div class="language">
                    <div class="text-fx">Idioma</div>
                </div>
            </div>
        </div>
    </div>
    `
    return view;
};

export default Home;