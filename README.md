
<a href="https://nodei.co/npm/anti-links/"><img src="https://nodei.co/npm/anti-links.png?downloads=true&stars=true" alt="npm installnfo" /></a>

## Block Links in your Discord Server

### Install

```js
npm i anti-links
```

### Setup

```js
const antilink = require('anti-links')

client.on('messageCreate', async TOBZiCoder => {
    antilink(client, TOBZiCoder)
})
```

### Example

```js
const antilink = require('anti-links')

client.on('messageCreate', async TOBZiCoder => {
    antilink(client, TOBZiCoder, {
        StaffRole: '', // You Can Remove Option (Option Feature: 'Staff Role Can Send Links')
        Message: `<@${TOBZiCoder.author.id}> Hey, Don't Share Links`
    })
})
```

### Developer

<a href='https://discord.com/users/779034600415428608' target="_blank"><img alt='Discord' src='https://img.shields.io/badge/Discord-100000?style=for-the-badge&logo=Discord&logoColor=002FFF&labelColor=FFFFFF&color=FFFFFF'/></a>