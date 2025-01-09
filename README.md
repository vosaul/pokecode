PokeCode.net
============

[PokeCode](https://pokecode.net) is a new company dedicated to provide digital solutions for a better democracy.

![PokeCode Logo](assets/img/mini-pokecode-logo.png)

We have a high degree of expertise in [Decidim](https://decidim.org), the Ruby on Rails framework for participation created by the city of Barcelona and used all over the world in many different types of organizations.

We are the authors of the [Decidim Awesome Plugin](https://github.com/Platoniq/decidim-module-decidim_awesome), one of the most used addons for Decidim.

This is our website, feel free to use it as you might need, it is licensed under the terms of te GPLv3.

Developer instructions
----------------------

This website is based on Jekyll and TailWind.

To install run:

```
bundle install
yarn install
```

Local developing:

```
bundle exec jekyll serve
npx tailwindcss -i ./assets/css/main.css -o ./assets/css/tailwind.css --watch
```

Then point the browser to:

http://localhost:4000

Deploying:
----------

1. Configure Github to used pages from the "/docs" folder
2. Run `/.deploy`

Credits:
-------

This website is based on https://github.com/harrywang/tailpages