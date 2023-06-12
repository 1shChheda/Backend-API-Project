// ----------------------------------------------------------------------
    // REST APIs

        // What is it? Why is it required?

            // Not Every FRONTEND (UI) requires HTML Pages { like we've used so far }

                // for Example:
                    // Single Page Web Apps: 
                        // Udemy Course Website

                            // When we go-through OR click on different sections of the page, we notice that the "reload icon" of the browser stays still.

                            // i.e. all these parts do re-render "without the page reloading / page being refreshed"

                            // Reason?

                                // The entire page is rendered through "Browser Side Javascript" (not Server Side Javascript)

                                // & this JS code can manipulate the DOM

                    // so basically what happens is: 
                    // you only fetch one inital HTML page, that does not really contain a lot real HTML content, 
                    // but that does load all these JS script files,
                    // & then these JS scripts reach out to some Backend API, to a Restful API & only fetch the data they need to work with, to then re-render the UI
                    
            // Core Logic : We only want to exchange the data from the Backend, & not render HTML pages

                // --> Transfer Data instead of User Interfaces
                

        // "RE"presentational "S"tate "T"ransfer (REST)

        // NOTE : Only the response (& request data) changes, NOT the general server-side logic !

        // Data Formats :
            // HTML
            // Plain Text
            // XML
            // JSON (recommended)

        // HTTP Method & Path   --->   API Endpoints

            // HTTP methods (HTTP Verbs)

                // GET (get a Resource from the Server)

                // POST (post a Resource to the Server {i.e. create or append Resource})

                // PUT (put a Resource onto the Server {i.e. create or overwrite a Resource})

                // PATCH (Update parts of an existing Resource on the Server)

                // DELETE (Delete a Resource on the Server)

                // OPTIONS (Determine whether follow-up Request is allowed {sent automatically})

        // Postman
            // allows us to make HTTP requests to a server and receive responses
            // helps us test API endpoints

        // CodePen
            // a great playground to simulate a frontend app

            // we can use fetchAPI (with 'fetch' keyword)
                // where we define a url to which we want to send a http request (example: 'http://localhost:8080/feed/posts')

            // getButton.addEventListener('click', () => {
            //     fetch('http://localhost:8080/feed/posts')
            //         .then(res => res.json())
            //         .then(resData => console.log(resData))
            //         .catch(err => console.log(err));
            // });

            postButton.addEventListener('click', () => {
                fetch('http://localhost:8080/feed/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: 'Second Commit!',
                        content: 'commit message Two'
                    }),
                    // 'JSON.stringify' in body will change the 'Request Payload' to a Json format

                    headers: {
                        'Content-Type': 'application/json'
                    }
                    // this will change the 'Request Headers' -> 'Content-Type' to "application/json"
                    // so we can work with json data

                })
                    .then(res => res.json())
                    .then(resData => console.log(resData))
                    .catch(err => console.log(err));
            });


        // CORS Error
            // by default NOT ALLOWED BY BROWSERS

            // When Client & Server run on DIFFERENT Domains

            // You can't share resources across domains

            // How To Solve ?
                // You CANNOT solve it on BROWSER-SIDE Javascript Code

                // You CAN ONLY solve it on SERVER-SIDE Code

                    // we need to set some special headers on any response that leaves our server
