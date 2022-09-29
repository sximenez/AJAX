# What is AJAX?
Since 1995 (inception of web)

It allows JS scripts to:
>1. exchange data with web servers
2. load data without having to refresh
3. access web APIs

An ```AJAX request``` is an ```HTTP request``` coming from JS

An ```HTTP request``` is the way web servers communicate (a protocol)

There are two main requests:

```GET``` (gather data)

```POST``` (send data)

### Example: 

Classic web app:
>1. Web browser (I want to access Google)
2. HTTP request from browser to server (I type "google.com" on search bar and enter)
3. Web server (Ok, send user google.com's HTML/CSS data to browser)
4. Web browser shows website

AJAX web app:
>1. Web browser (I want to download something)
2. AJAX request from JS script (Ok, send HTTP request to server)
3. AJAX program (Show HTML/CSS to the user)
4. Web server (Ok send back XML or data to browser)
5. Web browser shows data

AJAX was initially created to gather ```XML data```, and HTML-like data structuring format

Today, ```JSON``` is more widely used

# Send a GET request with AJAX
This can be done with class ```XMLHttpRequest```

### Four steps:

``` Javascript
1. var xhr = new XMLHttpRequest(); // specify the class
2. xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1'); // specify the GET method and the desired URL
3. xhr.onreadystatechange = function() { // state what to do with the received data from the server
4. if (xhr.readyState === 4) { // readyState is a property allowing to know the download state of a document
5. alert(xhr.responseText); // responseText contains the text or string
6. }
7. };
8. xhr.send(); // send the request to the end user?
```

> Before sending an AJAX request, type the URL in the browser to see responseText

# JSON with AJAX
```JSON``` is lightweight, faster.

JSON is a syntax to "serialise" things: objects, arrays, numbers, strings, booleans and nulls.

Serializing means to put data in binary and then in a file.

> JSON doesn't natively serialize functions, regex or other complex data.

### Two structures
>1. { "name": "value1", value2, [value1, value2] }
2. list

JSON is not related to JS: it's an independent text format

However, JS has an object ```JSON``` with two methods:

> JSON.parse() or "string to JS object"
> JSON.stringify() or "JS object to string"