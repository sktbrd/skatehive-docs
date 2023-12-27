# Skatehive Docs 

### Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/JasperOPR"><img src="https://avatars.githubusercontent.com/u/85296013?v=4?s=100" width="100px;" alt="Jasper"/><br /><sub><b>Jasper</b></sub></a><br /><a href="#translation-JasperOPR" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/VasconsaBR"><img src="https://avatars.githubusercontent.com/u/90463966?v=4?s=100" width="100px;" alt="VasconsaBR"/><br /><sub><b>VasconsaBR</b></sub></a><br /><a href="#translation-VasconsaBR" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/knowhow92"><img src="https://avatars.githubusercontent.com/u/124047824?v=4?s=100" width="100px;" alt="knowhow92"/><br /><sub><b>knowhow92</b></sub></a><br /><a href="#review-knowhow92" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/BeagleXV"><img src="https://avatars.githubusercontent.com/u/146370309?v=4?s=100" width="100px;" alt="BeagleXV"/><br /><sub><b>BeagleXV</b></sub></a><br /><a href="#content-BeagleXV" title="Content">🖋</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->


This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
