# Power Moto

Website frontend for [Power Moto](http://powermoto.innpressionhost.com) developed under [Innpression](https://www.innpression.com) Ltd. (Hong Kong) using [Next.js](https://nextjs.org)
 
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

You need build the application first
```
npm run build
```

This project is SSG website without Node.js server via `next export` [see more](https://nextjs.org/docs/advanced-features/static-html-export)
, make sure all page is SSG not SSR, you can check it via build reuslt

If you need test the build, you must run `start` instead of `dev`

## CI & deployment

This project uses [Innperssion internal Drone CI](https://drone.innpression.com/) for CI/CD and deployment with `.drone.yml`. Make sure you have created **secrets** in Drone CI before pushing or deploying:

| Secrets | Example | Description |
| :--- | :--- | :--- |
| `PROJECT_ENV` | `APP_TITLE=Innpression` | **Required**. The content of `.env` |
| `CYPRESS_ENV_JSON` | `{"username":"user","password":"password"}` | **Required**. The minified JSON string of `cypress.env.json` |
| `UAT_DEPLOY_PATH` | `/var/www/power-moto/public/` | **Required**. The target folder of UAT deployment (end with slash) |
| `UAT_HOST` | `128.128.128.128` | **Required**. UAT server host |
| `UAT_SSH_KEY` | `-----BEGIN OPENSSH PRIVATE KEY----- ...` | **Required**. UAT server SSH private key (without passphrase) |
| `UAT_SSH_USER` | `ubuntu` | **Required**. UAT server SSH username |
| `SLACK_WEBHOOK` | `https://hooks.slack.com/services/TEST/123/456` | **Optional**. Drone CI Slack notification webhook |

To deploy the project,
- click on a finished build/test
- click the three dots button on top right
- click `Promote` button
- enter the `Target` 
    - empty for `production`
    - OR enter `uat` for UAT

## Author

[funglee](fung@innpression.com)

## License

[Next.js](https://github.com/vercel/next.js/blob/canary/license.md)