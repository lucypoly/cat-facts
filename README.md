# cat-facts

* `npm install expo-cli --global`
* clone the git repo `git clone https://github.com/lucypoly/cat-facts.git`
* `cd` to the git repo and run `npm i`
* Install the [expo client](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) app on your phone
* Launch the expo client with `expo start` and scan the QR code

This should have the app running on your phone.



# Technical facts
* FE pagination was chosen to implement as API is not providining pagination on BE, only random facts (that could cause duplication of facts)
* `Eslint` and `prettier` were added for more convinient developing
* Main components include: 
  - `App` - the entry component with loading indicator
  - `Facts` - container for the `List`, implementation of `Load more button`
  - `List` - container for `FlatList` and scroll logic
  - `Card` - items of `FlatList` that have random color
