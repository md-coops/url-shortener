# using NextJs middlewear for the establishing connection and getting db instance
Unfortunatley this was not quite possible inside NextJS. Modules supported in middlewear can only contain ES modules and not use any native Node.js APIs. The mongodb modules unfortunalty leverages such progibited APIs.

