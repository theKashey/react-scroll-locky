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

There is only a few pros to configure
 -  `noRelative` - do not apply "position:relative" on body.
 -  `noImportant` - do not apply "!important" to any rules.
 -  `className` - className for a internal div
 -  `headless` - enables "no-div" mode (will pick the first DOM node-inside)
 -  `enabled` - allow you disable Lock behavior (CSS modification and Locky), keeping it rendered.
 -  `gapMode=[padding|margin(default)]` - gap policy, you may choose how to generate the gap,
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

# The order
 - Only first Lock is `real`. Only it hides the scrollbars.
 - Only the last Lock is `active`. Only last-mounted Locky is working, silencing the rest of a page.

# Gap modes
 - "padding" - for the simple use. It will keep scroll-bar-gap for the normal elements,
 letting _absolutely_ or _fixed_ positioned elements hit the right-most window edge.
 - "margin" - for the advanced use. Will always preserve the gap, letting only the 
 `fixed` positioned elements fill the while page(preffered mode)  
 
To _fill_ the gap with `absolute` positioned elements - use another exposed component.

```js
import {ScrollLocky, ScrollLockyPane} from 'react-scroll-locky';

// position:absolute, left:0, right: -"gap"px
<ScrollLockyPane>
  // your modal inside
  <Modal>
     <ScrollLocky>
        <MyContent/>  
     </ScrollLocky>
  </Modal> 
</ScrollLockyPane>
```
`ScrollLockyPane` will "return" the "consumed" width to the component.

# Article
 There is a medium article about preventing the body scroll - [How to fight the <body> scroll](https://medium.com/@antonkorzunov/how-to-fight-the-body-scroll-2b00267b37ac)

## More

For a good modals you also need a proper Focus Management Library.
Use [react-focus-lock](https://github.com/theKashey/react-focus-lock) to complete the picture.

## See also
 - [react-locky](https://github.com/theKashey/react-locky) - React event canceler
 - [react-scrolllock](https://github.com/jossmac/react-scrolllock) - React scroll lock
 - [scroll-lock](https://github.com/FL3NKEY/scroll-lock) - DOM scroll lock  

# Licence
 MIT
