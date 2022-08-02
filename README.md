## Dependencies

* Next.js v12.22.0
* React.js v17.0.2
* Node.js v16.16.0

## For development

Start:
```
npm run start
```

Start with auto-reload via nodemon
```
npm run dev
```

The website will listen on `3000` port
```
http://localhost:3000/
```

## For production

With nodejs
```
next build
```

No nodejs via [`next export`](https://nextjs.org/docs/advanced-features/static-html-export)
```
next build && next export
```