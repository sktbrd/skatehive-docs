---
title: Guía para Fork Skatehive
sidebar_position: 1
---

# Cómo hacer un Fork de Skatehive 🛹

Vamos a hacer este tutorial para cualquiera que quiera crear su propio portal impulsado por Skatehive, como <a href="https://skatehive.app" class="button-link" target="_blank">**Skatehive.app**</a>.

Tendrás que instalar algunas cosas en tu máquina para preparar tu entorno de desarrollo.

El código aún está un poco desordenado, pero te invito a ser parte de este viaje de aprendizaje con nosotros. Este documento siempre se actualizará en: https://docs.skatehive.app

## Índice

- Instalar Git y configurar la cuenta de Github
- Configurar claves SSH de Github
- Hacer Fork del Repositorio 
- Clonar/Descargar el Repositorio
- Descargar e Instalar NodeJs
- Instalar pnpm 
- Instalar Dependencias con `pnpm`
- Cambiar variables .env
- Ejecutar con `pnpm dev`
- Hacer algunas modificaciones solo por diversión
- Enviar tus cambios a github 
- Ponerlo en línea, desplegar tu versión con vercel 


## Instalar Git y configurar la cuenta de Github

Descarga e instala Git en tu máquina local. Eso te permitirá ejecutar comandos git en tu terminal, como `git clone` y otros comandos mágicos 


[Descargar Git](https://git-scm.com/downloads)
[Aprender más sobre git y su instalación](https://www.youtube.com/results?search_query=what+is+git+how+to+install)

## Crear una cuenta de Github

Solo regístrate 

## Configurar claves SSH de Github 

Para hacer el proceso más fluido, vamos a configurar una conexión SSH generando claves SSH. 


1. Abre tu terminal 

2. Escribe el siguiente comando
> usa el mismo correo electrónico que usaste para crear la cuenta de github

```
ssh-keygen -t ed25519 -C "your_email@example.com"
``` 
> Esto crea una nueva clave SSH, usando el correo electrónico proporcionado como etiqueta.

3. Inicia el agente ssh en segundo plano

```
eval "$(ssh-agent -s)"
```

4. Copia el contenido del archivo id_ed25519.pub en tu portapapeles

- Para usuarios de Mac: 
`pbcopy < ~/.ssh/id_ed25519.pub`

- Para usuarios de Windows: 
`clip < ~/.ssh/id_ed25519.pub`



y dale un título y pega el contenido en Key
![Alt ​​text](../../src/assets/Tuto-Dev/1.png)



> [Tutorial completo de SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

## Hacer Fork del Repositorio

 **[Click Fork Button](https://github.com/SkateHive/nextskateapp)** 

![Alt ​​text](../../src/assets/Tuto-Dev/2.png)

Esto creará tu propia versión del repositorio en tu cuenta: 

![Alt ​​text](../../src/assets/Tuto-Dev/3.png)

Ok, ahora vas a clonar el repositorio de archivos en tu máquina, que básicamente es descargar la aplicación: 

```
git clone git@github.com:<your-username>/<your-fork>.git
```

![Alt ​​text](../../src/assets/Tuto-Dev/4.png)


Ahora navega al repositorio clonado por: 

```
cd <your-fork>
```

En este caso, 

```
cd nextskateapp
``` 

Para el siguiente paso necesitaremos instalar algunos programas más en tu máquina para completar tu entorno y finalmente instalar y ejecutar la aplicación. 


## [Descargar e instalar Node.Js](https://nodejs.org/en)

> Nada especial aquí, solo instala y asegúrate de dejar marcada la opción `add to path`.

## [Instalar pnpm Aquí](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) o 

```
npm install -g pnpm
```

> [Más formas de instalar Yarn](https://www.youtube.com/results?search_query=install+yarn)


Si tienes Nodejs, npm, yarn y weed/coffee ahora puedes instalar y ejecutarlo en tu máquina local. 

## Volviendo al Terminal... 

En la carpeta del repositorio

```
pnpm i
```
> Nota: Este comando instalará automáticamente todos los paquetes y dependencias de JavaScript necesarios para tu proyecto, según lo especificado en el archivo package.json. Yarn descargará y configurará todo lo necesario para ejecutar tu portal Skatehive.
Este paso asegura que tengas todas las bibliotecas y herramientas necesarias en tu entorno de desarrollo para construir y ejecutar la aplicación.


![Alt ​​text](../../src/assets/Tuto-Dev/5.png)
Espera un poco, toma un "café"...

Deberías ver esto cuando termine: 
![Alt ​​text](../../src/assets/Tuto-Dev/6.png)

> Si obtienes un error en cualquier paso, puedes lanzarlo en chat-gpt o preguntarnos en [skatehive discord](https://discord.gg/skatehive) y ver cuál te ayuda más rápido 


## Renombrar .env.example a .env 

Renombra .env.example y elige la comunidad hive de la que deseas obtener/subir contenido. Por ejemplo, si usas hive-173115 obtendrás skatehive, si usas hive-141964 en el campo de la comunidad obtendrás surfhive 

## .env.example
NEXT_PUBLIC_WEBSITE_URL=http://localhost:3000/
NEXT_PUBLIC_HIVE_COMMUNITY_TAG=xxxxxxxxxxx
NEXT_PUBLIC_PINATA_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_PINATA_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_PINATA_GATEWAY_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_CRYPTO_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_OPENAI_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_ETHERSCAN_API=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Ahora ejecuta la aplicación que acabas de instalar: 

```
pnpm dev
```
![Alt ​​text](../../src/assets/Tuto-Dev/7.png)


Ahora abre https://localhost:3000 <a href="https://skatehive.app" class="button-link" target="_blank"></a> y verás la misma aplicación que <a href="https://skatehive.app" class="button-link" target="_blank">**Website Skatehive**</a>.

![Alt ​​text](../../src/assets/Tuto-Dev/8.png)

Eso significa que estás ejecutando la aplicación usando tu propia computadora como servidor a través del puerto 3000 

Ahora puedes intentar editar tu código en un editor de código, recomiendo <a href="https://code.visualstudio.com/" class="button-link" target="_blank">**Website VSCode**</a>, pero mi Maestro Jedi recomienda <a href="https://www.jetbrains.com/" class="button-link" target="_blank">**Website JetBrains**</a>.


Normalmente uso el comando `code .` en la carpeta del terminal para abrir fácilmente la carpeta en la que estoy trabajando en VScode

Haz un cambio tonto, como cambiar el pie de página. 

![Alt ​​text](../../src/assets/Tuto-Dev/9.png)


Este proyecto está construido con TypeScript e incorpora Chakra UI para el frontend. Para tareas relacionadas con Hive, confiamos en el <a href="https://play.hive-keychain.com/" class="button-link" target="_blank">**Website Keychain SDK**</a> y las bibliotecas dive. Además, para facilitar las interacciones con Ethereum, Bitcoin y varias otras blockchains, aprovechamos las capacidades de <a href="https://github.com/BitHighlander/pioneer-react#readme" class="button-link" target="_blank">**WebSite Pioneer-React**</a>.



**Cambios de Etapa:**

Antes de enviar a github es bueno: 

```
pnpm build:turbo 
```

y probar su compilación localmente!

```
git add .
````
> para preparar tus cambios para el commit.

**Commit Changes:**

```
git commit -m "Changed header color".
```
> Commit con un mensaje 

**Push to GitHub:**
```
git push origin main
```
> Enviar tus cambios 

Ahora puedes ir a tu cuenta de github y verificar si se actualizó 

## Poner tu sitio web en línea 

## Ir a vercel.com 

1. Crea una cuenta con tu cuenta de github 
![Alt ​​text](../../src/assets/Tuto-Dev/10.png)

2. Instala la extensión de Github que ofrece 
3. Selecciona el repositorio 
![Alt ​​text](../../src/assets/Tuto-Dev/11.png)

4. Haz clic en Deploy

Deberías ver algo como esto: 

![Alt ​​text](../../src/assets/Tuto-Dev/12.png)
 

Ahora puedes navegar a: 

https://your-repo.vercel.app 

y ver tu propia comunidad hive. 

¡Felicidades! Eso es genial, ¡pusiste un sitio web sin permisos en línea! Ve a mostrarle a tu mamá, dile que la extraño. 

--- 
