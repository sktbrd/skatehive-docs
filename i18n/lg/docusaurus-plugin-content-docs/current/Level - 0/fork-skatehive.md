---
title:  "Engeri y'okukola fork ya Skatehive"
sidebar_position: 1
---

Aqui está a tradução para Luganda:

---

# Engeri y’okukola Fork ya Skatehive 🛹

Tugenda okukola omusomo guno ku muntu yenna ayagala okukola ekibiina kye nga akozesa obukugu bwa Skatehive, nga https://skatehive.app.

Olina okuteekateeka ekintu ekimu ku kompyuta yo okusobola okutandika okukulaakulanya fork.

Kodi ya Skatehive ekyali mu ngeri etono etategerekeka bulungi, naye tukusabye okwegatta ku kuyiga kwaffe. Ekiwandiiko kino kijja kusigala nga kiwaggulidwa wano: https://docs.skatehive.app.

### Endagiriro (Index)

- Teekako Git era oteekeko akawunti ya GitHub
- Teekateeka obukwakulizo bwa SSH ku GitHub
- Fork e repositori
- Clone/Download e repositori
- Teekako Node.js ku kompyuta yo
- Teekako pnpm
- Teekako dependencies nga okozesa ekiragiro `pnpm install`
- Kyusa env variables .env
- Ddamu okutandika ne `pnpm dev`
- Kolako enkyukakyuka ez’omuzannyo
- Teeka enkyukakyuka zo ku GitHub
- Teeka fork yo online nga okozesa Vercel

---

### Teekako Git era oteekeko akawunti ya GitHub

Teekako Git ku kompyuta yo. Kino kijja kukusobozesa okukozesa ebiragiro bya git nga `git clone` ne birala.

[Download Git](https://git-scm.com/downloads)  
[Omutindo ogw’okusoma ku Git ne okugiteekako](https://www.youtube.com/results?search_query=what+is+git+how+to+install)  

---

### Funa Akawunti ya GitHub  

Bwe kibeera nti tolina akaawunti ku GitHub, yongera okwewandiisa.

---

### Teekateeka obukwakulizo bwa SSH ku GitHub  

Tugenda kutondawo SSH keys okusobola okukola ku GitHub nga tekusaba password buli kaseera.

1. Fungula Terminal yo  
2. Teeka ekiragiro kino:  

```
ssh-keygen -t ed25519 -C "your_email@example.com"
```

> Kino kijja kutondawo ekyokulabirako ekiggulawo obutujju bwa SSH.

3. Tandika SSH Agent

```
eval "$(ssh-agent -s)"
```

4. Koppa ekitundu kya `id_ed25519.pub` ku clipboard:

- Ku Mac: 
```
pbcopy < ~/.ssh/id_ed25519.pub
```
- Ku Windows:
```
clip < ~/.ssh/id_ed25519.pub
```

Oteeke ekitundu kino ku GitHub mu `SSH Keys`.

---

### Fork e repositori  

**[Kuba ku Fork Button](https://github.com/sktbrd/skateapp)**  

Fork eno ejja kutondawo ekifaananyi kya repositori ku akawunti yo.  

---

### Clone e repositori  

Koppa ne download e repositori ku kompyuta yo nga okozesa ekiragiro kino:

```
git clone git@github.com:<your-username>/<your-fork>.git
```

Genda mu folder gye waakoze clone:

```
cd <your-fork>
```

Mu kaseera kano, `cd skateapp`.

---

### Teekako Node.js  

[Download and Install Node.js](https://nodejs.org/en)  

Teekako era okozese `Add to Path` bw'oba osaba okukikola.  

---

### Teekako pnpm  

Teekako **pnpm** n’ekiragiro kino:  

```
npm install -g pnpm
```

---

### Teekako dependencies  

Genda mu folder ya repositori yo, olwo okozese:

```
pnpm install
```

Kino kijja kutondawo buli dependency gy’oyetaaga.

---

### Kyusa `.env` variables  

Funa `.env.example`, olwo okyuse erinnya lya `.env`. Ku **NEXT_PUBLIC_HIVE_COMMUNITY_TAG**, teekamu Hive community gy’oyagala okukozesa.  

---

### Tandika Skatehive locally  

```
pnpm dev
```

Genda ku [http://localhost:5173](http://localhost:5173) okebereko oba kitegeerekeka bulungi.

---

### Funa Editor w’okukola enkyukakyuka  

Tukugira kukozesa **VS Code** ([Download VS Code](https://code.visualstudio.com/)) oba **JetBrains** ([JetBrains](https://www.jetbrains.com/)).

---

### Teekako enkyukakyuka zo ku GitHub  

**Stage Changes:**  

```
git add .
```

**Commit Changes:**  

```
git commit -m "Changed header color"
```

**Push ku GitHub:**  

```
git push origin main
```

---

### Teeka website yo ku Vercel  

1. Genda ku **[vercel.com](https://vercel.com/)**  
2. Wewandiise nga okozesa GitHub  
3. Gattako repositori yo  
4. Kuba ku **Deploy**  

Wano ojja kuba owezezza website yo.

---

### Kati osobola okukyalira site yo ku:  

```
https://your-repo.vercel.app
```

**Nsonyiwa! Teri nsonga. Genda ogambe Maama nti nnakumissinga!** 🚀