# Nastran-Notification

🎉 Nastran-Notification grants you the ability to add clean and optimized notifications to your app with ease.

## Installation

```
$ npm install --save nastran-notification
$ yarn add react-toastify
```

## Features

-   You can make it work in less than 10sec!
-   Multiple notifications styles
-   Super easy to customize.
-   Can easily configured to to have custom body.
-   Has `onOpen` and `onClose` hooks.
-   Can remove a notification programmatically.
-   Define behavior per notification.
-   Fancy progress bar to display the remaining time
-   And much more !

## Usage

```jsx
import React from 'react';

import NotificationContainer, {
  NotificationManager,
} from "nastran-notification";

function App() {
    const notify = () => NotificationManager.info('Opportunity', 'This component is optimized and fantistic.');

    return (
        <div>
            <button onClick={notify}>Notify!</button>
            </NotificationContainer>
        </div>
    );
}
```

## Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome! Take a look at the contributing guide.

## License

Licensed under MIT
