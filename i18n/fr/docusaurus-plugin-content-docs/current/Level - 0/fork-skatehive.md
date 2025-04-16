---
title: Guide de Fork Skatehive
sidebar_position: 1
---

# Comment Fork Skatehive 🛹

Nous allons faire ce tutoriel pour tous ceux qui veulent créer leur propre portail alimenté par Skatehive, comme <a href="https://skatehive.app" class="button-link" target="_blank">**Skatehive.app**</a>.

Vous allez devoir installer certaines choses sur votre machine pour préparer votre environnement de développement.

Le code est encore un peu désordonné, mais je vous invite à faire partie de ce voyage d'apprentissage avec nous. Ce document sera toujours mis à jour à : https://docs.skatehive.app

## Index

- Installer Git et configurer le compte Github
- Configurer les clés SSH de Github
- Forker le Répertoire 
- Cloner/Télécharger le Répertoire
- Télécharger et Installer NodeJs
- Installer pnpm 
- Installer les Dépendances avec `pnpm`
- Changer les variables .env
- Exécuter avec `pnpm dev`
- Apporter quelques modifications juste pour le plaisir
- Pousser vos modifications sur github 
- Mettre en ligne, déployer votre version avec vercel 


## Installer Git et configurer le compte Github

Téléchargez et installez Git sur votre machine locale. Cela vous permettra d'exécuter des commandes git dans votre terminal, comme `git clone` et d'autres magies 


[Télécharger Git](https://git-scm.com/downloads)
[En savoir plus sur git et son installation](https://www.youtube.com/results?search_query=what+is+git+how+to+install)

## Créer un compte Github

Il suffit de s'inscrire 

## Configurer les clés SSH de Github 

Pour rendre le processus plus fluide, nous allons configurer une connexion SSH en générant des clés SSH. 


1. Ouvrez votre terminal 

2. Tapez la commande suivante
> utilisez le même email que vous avez utilisé pour créer le compte github

```
ssh-keygen -t ed25519 -C "your_email@example.com"
``` 
> Cela crée une nouvelle clé SSH, en utilisant l'email fourni comme étiquette.

3. Démarrez l'agent ssh en arrière-plan

```
eval "$(ssh-agent -s)"
```

4. Copiez le contenu du fichier id_ed25519.pub dans votre presse-papiers

- Pour les utilisateurs de Mac : 
`pbcopy < ~/.ssh/id_ed25519.pub`

- Pour les utilisateurs de Windows : 
`clip < ~/.ssh/id_ed25519.pub`



et donnez-lui un titre et collez le contenu dans Key
![Alt ​​text](../../src/assets/Tuto-Dev/1.png)



> [Tutoriel complet SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

## Forker le répertoire

 **[Cliquez sur le bouton Fork](https://github.com/SkateHive/nextskateapp)** 

![Alt ​​text](../../src/assets/Tuto-Dev/2.png)

Cela créera votre propre version du répertoire dans votre compte : 

![Alt ​​text](../../src/assets/Tuto-Dev/3.png)

Ok, maintenant vous allez cloner le répertoire de fichiers dans votre machine, ce qui revient à télécharger l'application : 

```
git clone git@github.com:<your-username>/<your-fork>.git
```

![Alt ​​text](../../src/assets/Tuto-Dev/4.png)


Maintenant, naviguez vers le répertoire cloné par : 

```
cd <your-fork>
```

Dans ce cas, 

```
cd nextskateapp
``` 

Pour l'étape suivante, nous allons devoir installer quelques programmes supplémentaires sur votre machine pour compléter votre environnement et enfin installer et exécuter l'application. 


## [Télécharger et installer Node.Js](https://nodejs.org/en)

> Rien de spécial ici, il suffit d'installer et de s'assurer de laisser l'option `add to path` cochée.

## [Installer pnpm ici](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) ou 

```
npm install -g pnpm
```

> [Plus de façons d'installer Yarn](https://www.youtube.com/results?search_query=install+yarn)


Si vous avez Nodejs, npm, yarn et weed/coffee, vous pouvez maintenant l'installer et l'exécuter sur votre machine locale. 

## Retour au terminal... 

Dans le dossier du répertoire

```
pnpm i
```
> Remarque : Cette commande installera automatiquement tous les packages JavaScript et dépendances nécessaires pour votre projet, comme spécifié dans le fichier package.json. Yarn téléchargera et configurera tout ce qui est nécessaire pour exécuter votre portail Skatehive.
Cette étape garantit que vous disposez de toutes les bibliothèques et outils nécessaires dans votre environnement de développement pour construire et exécuter l'application.


![Alt ​​text](../../src/assets/Tuto-Dev/5.png)
Attendez un peu, buvez du "café"...

Vous devriez voir cela lorsque c'est terminé : 
![Alt ​​text](../../src/assets/Tuto-Dev/6.png)

> Si vous rencontrez une erreur à n'importe quelle étape, vous pouvez la lancer dans chat-gpt ou nous demander sur [skatehive discord](https://discord.gg/skatehive) et voir lequel vous aide le plus rapidement 


## Renommer .env.example en .env 

Renommez .env.example et choisissez la communauté hive à partir de laquelle vous souhaitez obtenir/télécharger du contenu. Par exemple, si vous utilisez hive-173115, vous obtenez skatehive, si vous utilisez hive-141964 dans le champ communauté, vous obtenez surfhive 

## .env.example
NEXT_PUBLIC_WEBSITE_URL=http://localhost:3000/
NEXT_PUBLIC_HIVE_COMMUNITY_TAG=xxxxxxxxxxx
NEXT_PUBLIC_PINATA_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_PINATA_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_PINATA_GATEWAY_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_CRYPTO_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_OPENAI_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_ETHERSCAN_API=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Maintenant, exécutez l'application que vous venez d'installer : 

```
pnpm dev
```
![Alt ​​text](../../src/assets/Tuto-Dev/7.png)


Maintenant, ouvrez https://localhost:3000 <a href="https://skatehive.app" class="button-link" target="_blank"></a> et vous verrez la même application que <a href="https://skatehive.app" class="button-link" target="_blank">**Website Skatehive**</a>.

![Alt ​​text](../../src/assets/Tuto-Dev/8.png)

Cela signifie que vous exécutez l'application en utilisant votre propre ordinateur comme serveur via le port 3000 

Vous pouvez maintenant essayer d'éditer votre code dans un éditeur de code, je recommande <a href="https://code.visualstudio.com/" class="button-link" target="_blank">**Website VSCode**</a>, mais mon maître Jedi recommande <a href="https://www.jetbrains.com/" class="button-link" target="_blank">**Website JetBrains**</a>.


J'utilise généralement la commande `code .` dans le dossier du terminal pour ouvrir facilement le dossier sur lequel je travaille dans VScode

Faites un changement idiot, comme changer le pied de page.

![Alt ​​text](../../src/assets/Tuto-Dev/9.png)


Ce projet est construit avec TypeScript et intègre Chakra UI pour le frontend. Pour les tâches liées à Hive, nous nous appuyons sur le <a href="https://play.hive-keychain.com/" class="button-link" target="_blank">**Website Keychain SDK**</a> et les bibliothèques dive. De plus, pour faciliter les interactions avec Ethereum, Bitcoin et diverses autres blockchains, nous tirons parti des capacités de <a href="https://github.com/BitHighlander/pioneer-react#readme" class="button-link" target="_blank">**WebSite Pioneer-React**</a>.



**Stage Changes:**

Avant d'envoyer sur github, il est bon de : 

```
pnpm build:turbo 
```

et tester sa build localement !

```
git add .
````
> pour préparer vos modifications pour le commit.

**Commit Changes:**

```
git commit -m "Changed header color".
```
> Commit avec un message 

**Push to GitHub:**
```
git push origin main
```
> Poussez vos modifications 

Vous pouvez maintenant aller sur votre compte github et vérifier si cela a été mis à jour 

## Mettre votre site web en ligne 

## Allez sur vercel.com 

1. Créez un compte avec votre compte github 
![Alt ​​text](../../src/assets/Tuto-Dev/10.png)

2. Installez l'extension Github qu'il propose 
3. Sélectionnez le répertoire 
![Alt ​​text](../../src/assets/Tuto-Dev/11.png)

4. Cliquez sur Déployer

Vous devriez voir quelque chose comme ça : 

![Alt ​​text](../../src/assets/Tuto-Dev/12.png)
 

Vous pouvez maintenant naviguer vers : 

https://your-repo.vercel.app 

et voir votre propre communauté hive. 

Félicitations ! C'est tellement cool, vous avez mis un site web en ligne sans autorisation ! Allez montrer ça à votre maman, dites-lui qu'elle me manque. 

--- 
