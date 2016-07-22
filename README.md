# dependencies

* `npm install -g brunch`
* `npm install -g bower`

# steps

* `npm init`
* copy `package.json` and `brunch-config.js` from basic brunch project
* `npm install`
* `git-ignore node-modules`
* configure `brunch-config` to use rails locations
* create custom `brunch-server.js` to server assets from 'public'
* add asset_path helper that can parse manifest files

# todo

* Read asset config from rails
* Get `fingerprint-brunch`'s `autoReplaceAndHash`
* Read assets from gem
