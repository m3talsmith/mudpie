MudPie
======

Not much to see here yet I'm afraid. That is changing but I just started this afternoon (2012-04-15).

Goals
-----

The goal of this project is to make a peer to peer mud platform so that individuals can create there own games and share them with friends. There's no need to hassle about hosting when you can run it yourself.

One other goal is to make the registration and log on process painless. One idea I am toying with is using a public/private key scheme so that your character can automatically login based on the key signature.

Regardless, once you're up and running you should be able to manage nodes fairly easily with a few scripts.

Install
-------

```bash
git clone git://github.com/m3talsmith/mudpie.git
cd mudpie
npm install
```

To start the server on the default port 23:

```bash
sudo node server.js
```

Or if you wish to use another port (for example 3000):

```bash
node server.js --port 3000
```

Connecting
----------

All you need to start is a telnet client.

```bash
telnet localhost
```

Or if you customized the port (again port 300 as an example):

```bash
telnet localhost 3000
```

Enjoy!
