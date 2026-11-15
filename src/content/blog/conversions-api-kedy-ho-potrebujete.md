---
title: 'Meta Conversions API: kedy ho potrebujete a kedy nie'
description: 'Čo Conversions API robí, čím sa líši od Pixelu, komu sa oplatí a na čo si dať pozor pri nastavení.'
date: 2026-11-15
---

Conversions API (CAPI) posiela udalosti do Mety priamo z vášho servera. Pixel ich posiela z prehliadača návštevníka. Oboje hlási to isté, napríklad nákup alebo odoslaný formulár, len inou cestou.

## Prečo Pixel sám nestačí

Pixel beží v prehliadači, a tam mu dnes veľa vecí stojí v ceste:

- blokovače reklamy ho vôbec nenačítajú,
- Safari a Firefox skracujú životnosť cookies,
- časť ľudí zavrie stránku skôr, než sa skript stihne spustiť.

Výsledok je, že Meta vidí menej konverzií, než koľko ich naozaj bolo. Kampane sa potom optimalizujú na neúplných dátach a v reportoch vyzerajú horšie, než sú.

## Čo CAPI zmení

Server udalosť odošle bez ohľadu na to, čo sa deje v prehliadači. Meta dostane úplnejší obraz a algoritmus má viac signálov, podľa ktorých hľadá ďalších zákazníkov.

Správne nastavenie posiela každú udalosť oboma cestami, cez Pixel aj cez CAPI, s rovnakým `event_id`. Podľa neho Meta spozná, že ide o tú istú udalosť, a nezapočíta ju dvakrát. Bez deduplikácie budete mať v reportoch dvojnásobok konverzií, čo je horšie než ich mať menej.

## Komu sa oplatí

- **E-shopom, ktoré na Mete pravidelne inzerujú.** Tu je prínos najväčší, pretože nákupné udalosti sú presne to, na čo sa kampane optimalizujú.
- **Firmám, ktoré zbierajú dopyty.** Najmä ak viete poslať späť aj informáciu, z ktorého dopytu bol nakoniec zákazník.
- **Každému, komu čísla z Mety výrazne nesedia s objednávkami.**

## Kedy s tým počkať

Ak na Mete míňate pár stoviek eur mesačne a máte desiatky konverzií, rozdiel v dátach bude malý. V takom prípade vám viac pomôže dobre nastavený Pixel, čisté UTM parametre a overené základné udalosti. CAPI pridajte, až keď rozpočet narastie.

## Na čo si dať pozor

1. **Súhlas.** Cez server sa neobchádzajú cookies. Ak návštevník nesúhlasil s marketingovým meraním, jeho udalosti neposielajte ani cez CAPI.
2. **Kvalita spárovania.** Meta priradí udalosť k človeku podľa údajov ako e-mail alebo telefón (posielajú sa zahašované). Čím viac ich pošlete, tým lepšie spárovanie. V Events Manageri to ukazuje skóre Event Match Quality.
3. **Deduplikácia.** Po spustení skontrolujte, či počet nákupov v Mete zodpovedá počtu objednávok.
4. **Hotové prepojenia.** Shopify, WooCommerce a ďalšie platformy majú vlastné integrácie. Fungujú, ale oplatí sa overiť, čo presne posielajú.

## Zhrnutie

CAPI nie je povinné pre každého. Ak je Meta váš dôležitý kanál a čísla nesedia s realitou, je to jedna z prvých vecí, ktoré sa oplatí opraviť. Ak s reklamou len začínate, najprv si dajte do poriadku základy.
