<!-- markdownlint-disable MD010 -->

# firelordrn(BETA, NOT for nodejs)

[![npm](https://img.shields.io/npm/v/firelordrn)](https://www.npmjs.com/package/firelordrn) [![GitHub](https://img.shields.io/github/license/tylim88/firelordrn)](https://github.com/tylim88/firelordrn/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/tylim88/firelordrn/pulls)

🐤 firestore react native wrapper with deeper typing solution.

🚀 All read and write operation are typed, field path, field value, collection path, document path, all typed!

🔥 Automatically convert base type to corresponding read and write time(good at handling timestamp and field value).

✨ Api closely resemble firestore api, low learning curve.

🐉 Zero dependency.

⛲️ Out of box typescript support.

Variants:

1. [nodejs](https://www.npmjs.com/package/firelord)
2. [js](https://www.npmjs.com/package/firelordjs)

## 🦙 Usage

This is wrapper for [react-native-firebase](https://www.npmjs.com/package/react-native-firebase)

work exactly like [firelord](https://github.com/tylim88/Firelord), except that:

1. any kind of `create` operations is not available, you can only create document using `set` or `add`
2. no `offset`

finally you just need to change the import

instead of

```ts
// don't do this
import { firelord, Firelord } from 'firelord'
import { firestore } from 'firebase-admin'

// create wrapper
const wrapper = firelord(firestore)
```

do

```ts
// do this
import { firelord, Firelord } from 'firelordrn'
import firestore from '@react-native-firebase/firestore'

// create wrapper
const wrapper = firelord(firestore)
```
