# gatsby-remark-soundcloud
Embed a Soundcloud Track or Playlist to in your Markdown

![npm](https://img.shields.io/npm/v/gatsby-remark-soundcloud.svg?style=flat-square)


## Install 
1. Install plugin to your site:

```bash
yarn add gatsby-remark-soundcloud
```

2. Add following to your `gatsby-config.js`:
```js
    plugins: [      
      {
        resolve: "gatsby-transformer-remark",
        options: {
          plugins: [
          {
            resolve: "gatsby-remark-soundcloud",
            options: {
              width: 800,
              height: 400, 
            }
          }
          ]
        }
      },
```
[other options](https://github.com/c0b41/gatsby-remark-soundcloud/blob/master/index.js#L4-L12)

1. Restart gatsby.

## Usage

```markdown 

`soundcloud:https://soundcloud.com/zhu/waters-of-monaco`
`soundcloud:https://soundcloud.com/zhu/sets/ringos-desert-1` 

```


## License

MIT