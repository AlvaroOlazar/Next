export const Footer = () =>{
    // var logoempresa = require ('../../img/bootstrap.png')
    // var logofacebook = require ('../../img/facebook.png')
    // var logotwitter = require ('../../img/twitter.png')
    // var logoinstagram = require ('../../img/instagram.png')
    return(
        <html>
        <head>
            <link href="../styles/index.css" rel="stylesheet"></link>
            <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/footers/"></link>
            <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        </head>
        <body>

        <div className="finalrodape">
            <div className="b-example-divider"></div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <img src='../../img/bootstrap.png' href="#!" width="30" height="24"></img>
                    <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
            </div>
             
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <img src='../../img/twitter.png'  href="#!" className="ms-3" width="24" height="24"></img>
            <img src='../../img/instagram.png' href="#!" className="ms-3" width="24" height="24"></img>
            <img src='../../img/facebook.png' href="#!" className="ms-3" width="24" height="24"></img>
        </ul>

        </footer>
        </div>
        </body>

    </html>
    )
}