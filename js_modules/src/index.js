const button = document.createElement('button');
button.innerText = 'Click Me!';
button.onclick = () => {
    //  System is a global variable inside of JS. System.import is part of the ES2015 spec.
    //  We pass in the name of the module we want to import. Then our application will reach out to the server and ask for the module.
    //  Server finds it, returns it to the client and then we can execute it.
    //  We only pull in the image_viewer module, but any import that it has inside it we pull in as well with the module.
    //  This is asynchronous code, so it returns a promise.
    System.import('./image_viewer').then(module => {
        module.default();
    });
};

document.body.appendChild(button);