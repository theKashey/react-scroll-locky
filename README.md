# 📜🔒 react-scroll-locky 
----
📜 Prevents page from being scrolled.

💡 Hides scrollbars, reserving the space.

🤘 Works for any desktop or mobile browser.

📦 All features are hidden inside.

👫 Stands more that one instance.

🔥 Support nested scrollable elements.

All due to [React-Locky](https://github.com/theKashey/react-locky) it uses underneath

# API

Just wrap _anything_ with `ScrollLocky`, which accepts only one prop - "enabled"

```js
import {ScrollLocky} from 'react-scroll-locky';

<Modal>
 <ScrollLocky>
   <MyContent>
     Anything!
   </MyContent>
 </ScrollLocky>
</Modal>   
```

## More

For a good modals you also need a proper Focus Management Library.
Use [react-focus-lock](https://github.com/theKashey/react-focus-lock) to complete the picture.

## See also
 - [react-locky]() - React event canceler
 - [dom-locky]() - DOM event canceler
 - [react-scrolllock](https://github.com/jossmac/react-scrolllock) - React scroll lock
 - [scroll-lock]()https://github.com/FL3NKEY/scroll-lock) - DOM scroll lock  

# Licence
 MIT
