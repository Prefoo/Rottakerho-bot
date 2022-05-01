@echo off
title Rottakerho

if exist node_modules\ (
  echo Latasit jo kaikki tarvittavat
  echo mene "config" kansioon botin asetuksia varten ja "rottakerho" käynnistääksesi botti
  pause
  exit
) else (
  call npm i >> NUL
  echo Kaikki ladattu!
  echo käynnistä uudellee tää filu
  pause
  exit
)