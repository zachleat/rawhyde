RawHyde
==========

A boilerplate for the Jekyll/Grunt/Buttsweater combination used on zachleat.com and nebraskajs.com.

### Building the Site

Use [NPM](http://npmjs.org) to install the dependencies.

    npm install

[Jekyll](https://github.com/mojombo/jekyll) is not available in npm, so you'll need to install it separately. Then, run the build script:

    grunt

Output is generated into the `_site` directory.  As is, the site's hierarchy (subfolders for posts) means that all of the resources are referenced using absolute urls and the site must be hosted at `/`. Set up a Virtual Host for the `_site` directory and modify your `/etc/hosts` to map that to a local development domain of your choosing.

#### Fetching Avatars

Add the new Presenter’s twitter and github handles to `_avatars/users.json`

    grunt avatars
    grunt

### Credits

Built by [@zachleat](https://twitter.com/zachleat).