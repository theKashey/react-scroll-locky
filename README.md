# 📜🔒 react-scroll-locky 
----
📜 Prevents page from being scrolled.

💡 Hides scrollbars, reserving the space.

🤘 Works for any desktop or mobile browser.

📦 All features are hidden inside.

👫 Stands more that one instance.

🔥 Supports nested scrollable elements.

🤔 Supports nested locks

### Just wrap your content with `<ScrollLocky />` and it block any iterations with the rest of a page. 

All due to [React-Locky](https://github.com/theKashey/react-locky) it uses underneath

# API

Just wrap _anything_ with `ScrollLocky`, which accepts only one prop - "enabled"

There is only two pros to configure
 -  `noRelative` - do not app "position:relative" on body.
 -  `gapMode=[padding|margin]` - gap policy, you may choose how to generate the gap,
 it is affects how absolutely positioned elements will work
    - gapMode="padding" - "right:0" will be on window right (will jump on scroll removal)
    - gapMode="margin" - "right:0" will be in constant position (will not jump, but leave a gap)

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

# Article
 There is a medium article about preventing the body scroll - [How to fight the <body> scroll](https://medium.com/@antonkorzunov/how-to-fight-the-body-scroll-2b00267b37ac)

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
