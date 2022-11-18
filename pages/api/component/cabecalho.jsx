export const Cabecalho = () => { 
    return(
        <html>
            <head>
            <link href="../styles/index.css" rel="stylesheet"></link>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
            </head>
            <body>
            <header>
                <nav className="navbar navbar-expand">
                    <img className="logonavbar" src='../../img/logogrowth.png' width= "158" ></img>
                    <a className="navbar-brand">Suplementos em Geral</a>
                </nav>      
            </header>

            </body>
        </html>
    )
}