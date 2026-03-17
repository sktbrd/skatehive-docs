---
sidebar_position: 6
icon: crosshairs
---

# Bounties

**¡Gana haciendo trucos!** SkateHive Bounties permite crear desafíos de trucos y ganar recompensas en cripto en dos blockchains.

🎯 **Ver bounties:** [skatehive.app/bounties](https://skatehive.app/bounties)

---

## 🌐 Dos Sistemas Blockchain

SkateHive soporta bounties en dos redes diferentes:

### Bounties Hive
- **Moneda:** HBD o HIVE
- **Plataforma:** Blockchain Hive
- **Pago:** Creador aprueba ganadores manualmente
- **Mejor para:** Desafíos comunitarios, recompensas sociales

### Bounties POIDH (Ethereum)
- **Moneda:** ETH
- **Plataforma:** Base o Arbitrum (Layer 2)
- **Pago:** Smart contract (verificación on-chain)
- **Mejor para:** Verificación descentralizada, recompensas ETH

---

## 📋 Cómo Navegar por Bounties

Ve a [skatehive.app/bounties](https://skatehive.app/bounties) y verás:

![Página Principal de Bounties](/img/bounties/01-main-page.png)

**Filtrar por origen:**
- **ALL** — Muestra bounties de Hive y POIDH
- **HIVE** — Solo bounties Hive (recompensas HBD/HIVE)
- **POIDH** — Solo bounties Ethereum (recompensas ETH)

Cada card de bounty muestra:
- 🟢 **OPEN** o 🔴 **CLOSED**
- 💰 Valor de recompensa (+ equivalente en USD)
- 📝 Descripción del truco
- 📅 Fecha límite (si está definida)
- 🎯 Botón **CLAIM IT** o **PROOF**

---

## 💎 Cómo Crear un Bounty

### Paso 1: Haz clic en "+ CREATE BOUNTY"

En la página principal de bounties, haz clic en el botón **"+ CREATE BOUNTY"** (esquina superior derecha).

### Paso 2: Elige Tu Blockchain

![Elegir Blockchain](/img/bounties/02-choose-blockchain.png)

Verás dos opciones:

- **HIVE** (izquierda) — Pagar en HBD o HIVE
- **ETH** (derecha) — Pagar on-chain vía POIDH

---

### Creando un Bounty Hive

![Formulario Hive](/img/bounties/03-hive-form.png)

**Requisitos:**
- Extensión Hive Keychain instalada
- Cuenta con posting key

**Completa el formulario:**

1. **Challenge** — Descripción corta del truco (ej: "Kickflip en 5 escalones")
2. **Rules** — Requisitos detallados (soporta markdown)
   - Ejemplo: "Debe ser en suelo plano, sin cortes, decir 'this is for skatehive' antes del truco"
3. **Subir medios** (opcional):
   - **Upload Image** — Miniatura del bounty
   - **Upload Video** — Video de referencia
4. **Reward:**
   - Ingresa el monto
   - Selecciona moneda (dropdown HBD o HIVE)
5. **Deadline** (opcional) — Elige una fecha para crear urgencia
6. **POST BOUNTY** — Aprueba con popup de Hive Keychain

**✅ ¡Listo!** Tu bounty se publica instantáneamente.

**División de Recompensa (Hive):**
- 1 ganador: 100%
- 2 ganadores: 70% / 30%
- 3 ganadores: 50% / 30% / 20%

---

### Creando un Bounty POIDH

**Requisitos:**
- Wallet con ETH en Base o Arbitrum
- MetaMask, Rainbow o wallet compatible

**Pasos:**

1. Haz clic **"+ CREATE BOUNTY"** → Selecciona **"ETH"**
2. **Conecta wallet** (si no está conectada)
3. Completa formulario:
   - **Bounty name** — Título corto
   - **Description** — Requisitos del truco
   - **Reward** — Monto en ETH
   - **Chain** — Base (gas menor) o Arbitrum
4. **Create Bounty** → Aprueba transacción en wallet
5. Espera ~30 segundos para el indexador

**✅ ¡Listo!** Bounty aparece en la lista 🚀

:::tip Tarifas de Gas
**Base** tiene tarifas menores (~$0.01-0.05). **Arbitrum** también es barato pero un poco más caro.
:::

---

## 🏆 Cómo Reclamar un Bounty

### Reclamando Bounty Hive

![Detalle Bounty Hive](/img/bounties/05-hive-detail.png)

**Pasos:**

1. **Haz clic en el card** → Se abre página de detalles
2. Desplázate hasta **"CLAIM THIS BOUNTY TO SUBMIT YOUR PROOF"**
3. **Haz clic "CLAIM IT"**
4. Completa formulario:
   - **Title** — Nombre de tu envío
   - **Description** — Link del video (YouTube, Streamable, IPFS)
   - **Upload proof** — Video o imagen tuya logrando el truco
5. **Firma con Hive Keychain**
6. **Espera revisión del creador** — Vuelve a la página del bounty

**Bounties Hive se pagan después de que creador apruebe manualmente tu claim.**

---

### Reclamando Bounty POIDH

![Detalle Bounty POIDH](/img/bounties/04-poidh-detail.png)

**Pasos:**

1. **Conecta wallet** (esquina superior derecha)
2. **Haz clic en el card** → Se abre página de detalles
3. **Haz clic "SUBMIT PROOF"** (abajo)
4. Completa formulario:
   - **Claim name** — Descripción corta
   - **Description** — Link del video o subida
   - **Attach media** — Subida IPFS automática
5. **Aprueba transacción** en wallet
6. **Fase de votación** (si está habilitada) o aprobación instantánea
7. **¡Recibe** cuando claim sea aceptado! 💸

**Bounties POIDH se pagan automáticamente vía smart contract.**

---

## 💰 Cómo Funciona el Pago

### Pago Hive
- **Método:** Transferencias Hive (automático tras aprobación)
- **Verificar:** Tu wallet Hive (Keychain o [PeakD](https://peakd.com))
- **Aparece en:** Historial de transacciones

### Pago POIDH
- **Método:** Smart contract (instantáneo en aprobación)
- **Verificar:** Tu wallet conectada
- **Ver en:** Blockchain explorer (Basescan, Arbiscan)

---

## 💡 Ideas de Bounties

- **Desafíos de truco:** "Hardflip en 5 escalones — 0.05 ETH"
- **Desafíos de spot:** "Cualquier truco en [nombre del skatepark] — 20 HBD"
- **Desafíos de estilo:** "Mejor line en 30 segundos — 50 HIVE"
- **Desafíos de crew:** "Mejor clip de tu grupo — 0.1 ETH"
- **Concursos mensuales:** "Mejor truco de marzo — 100 HBD"

---

## 🔥 Consejos Pro

### Para Patrocinadores

✅ **Define reglas claras** — Evita disputas con requisitos específicos  
✅ **Elige recompensas justas** — Recompensas mayores = más participantes  
✅ **Interactúa con claims** — Comenta y anima a skaters  
✅ **Paga rápido** — No dejes ganadores esperando  
✅ **Agrega fechas límite** (Hive) — Crea urgencia

### Para Participantes

✅ **Lee reglas con atención** — Sabe qué se espera  
✅ **Filma con claridad** — Buena calidad aumenta tus posibilidades  
✅ **Muestra truco completo** — Setup → aterrizaje, sin cortes  
✅ **Envía temprano** — Evita problemas técnicos de último minuto  
✅ **Sigue** — Revisa página del bounty para resultados

---

## ❓ FAQ

**P: ¿Puedo reclamar mi propio bounty?**  
R: No — bounties son para que otros skaters completen.

**P: ¿Cuánto tiempo hasta recibir?**  
R: **Hive:** Cuando creador apruebe tu claim  
**POIDH:** Cuando votación pase o instantáneo (depende de config)

**P: ¿Y si mi claim es rechazado?**  
R: Intenta de nuevo si el bounty sigue abierto. Revisa las reglas y mejora tu envío.

**P: ¿Puedo cancelar un bounty?**  
R: **Hive:** Edita metadata del post para marcar como cerrado  
**POIDH:** Usa función cancel en contrato (retorna ETH menos gas)

**P: ¿Cuál es la diferencia entre Hive y POIDH?**  
R: **Hive** = blockchain social, aprobación manual, sentimiento comunidad  
**POIDH** = smart contracts Ethereum, verificación on-chain, pago automático

**P: ¿Qué blockchain usar?**  
R: **Hive** para compromiso comunitario  
**POIDH** para usuarios Ethereum y verificación descentralizada

**P: ¿Puedo patrocinar múltiples bounties?**  
R: Sí, ilimitado en ambas plataformas!

**P: ¿Qué monedas funcionan?**  
R: **Hive:** Solo HBD o HIVE  
**POIDH:** Solo ETH (en Base o Arbitrum)

**P: ¿Y si nadie logra el truco?**  
R: **Hive:** Quedas con tu cripto (extiende fecha o republica)  
**POIDH:** Cancela bounty para recuperar ETH (menos gas)

---

## 🔗 Enlaces Rápidos

| Recurso | URL |
|---------|-----|
| **Bounties En Vivo** | [skatehive.app/bounties](https://skatehive.app/bounties) |
| **Protocolo POIDH** | [poidh.xyz](https://poidh.xyz) |
| **Hive Keychain** | [Extensión Chrome](https://chrome.google.com/webstore/detail/hive-keychain) |
| **Ayuda/Soporte** | [Telegram](https://t.me/skatehive) |

---

## 🛠️ Detalles Técnicos

Para desarrolladores:

- **Indexador Hive:** Posts con tags `skatehive` + `bounty`
- **API POIDH:** [skatehive-api.vercel.app](https://skatehive-api.vercel.app)
- **Chains Soportadas:** Base (8453), Arbitrum (42161)
- **GitHub:** [github.com/skatehive/skatehive](https://github.com/skatehive/skatehive)

---

**Empieza a ganar:** [skatehive.app/bounties](https://skatehive.app/bounties)  
**¿Necesitas ayuda?** Únete a [Telegram](https://t.me/skatehive) | [Discord](https://discord.gg/skatehive)
