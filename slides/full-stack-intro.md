## Full stack
{title: 1}

## AKA 'back- and front-end'

## Theory first

## Nah
{bad:1}

> An ounce of practice is generally worth more than a ton of theory.

## Exercise
{exercise:1}

    exercises/first-full-stack

    npm start

- Open network - no response
- Look at TODOs in app/server.js
- Look at TODOs in public/app.js

## Saga of web-page
{title:1}

## URL bar

## DNS

- Which computer (server) am I trying to talk to?
- Domain name to IP address

## IP

- IP = internet protocol
- TCP = transmission control protocol
- TCP makes IP reliable

## We've got the IP

```
# play along at home with curl -v google.com
About to connect() to app.com/funny/122 port 80 (#0)
 Trying 62.253.72.148...
Connected to google.com (62.253.72.148) port 80 (#0)

HEAD /funny/122 HTTP/1.1
User-Agent: curl/7.30.0
Host: app.com
Accept: */*
```

## HTTPS?

- transport layer - outside world only sees IP addresses etc

## HTTP arrives

- if HTTPS, after decryption

## Application server

- server: as it sounds, provides nice things like GIFs
- just a computer
- reads ('parses') the HTTP request

## Reading HTTP

- HTTP 1.x is plain text!
- we use path, domain and query string to interpret what we need to serve up

```
HEAD / HTTP/1.1
User-Agent: curl/7.30.0
Host: google.com
Accept: */*
```

## Response

- Application decides - do I have anything to reply with?
- If so, send back whatever is asked for

## HTML page

- First request/response likely HTML

```html
<!doctype html>
<link href="style.css" rel="stylesheet">
<img hover-to-play-gif src="content/funny/122.jpg">
<script src="app.js"></script>
```

## Client (browser)

- Parses HTML, turns into DOM tree
- Requests all blocking stylesheets and scripts
- Requests images and other non-embedded content (videos, audio etc)

## Rendering

- With HTML + CSS, renders DOM tree to screen
- Invokes blocking Javascript at each point it's found in tree

## Javascript

- Still only virtual machine in browsers
- Makes single web pages an interactive application platform
- Without JS, behaviour has to be via links and new HTTP requests

## AJAX

- Continues communicate with server while staying on same HTML page
- Makes web pages into 'thick clients'

## Server

- 'Your' computers
- Storage, trust, collaboration

## Storage

- Computer stays online
- Data stays around

## Trust

##   
{notitle:1}

<img src="media/server-v-client.png">


## Saga
{summary:1}

- DNS = which computer
- TCP/IP = transport
- HTTP = what do you want?
- HTML + CSS = pretty pictures
- JS + AJAX = keeps the party going
- Server: trust, persistence, collaboration

