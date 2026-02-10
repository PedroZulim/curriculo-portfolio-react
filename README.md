# Currículo Portfolio React

Portfólio em React + Vite publicado no GitHub Pages.

## Deploy automático com GitHub Actions

Este repositório agora possui workflow em `.github/workflows/deploy.yml` para publicar automaticamente no GitHub Pages.

### Como funciona
- A cada `push` na branch `main`, o GitHub Actions:
  1. Instala dependências (`npm ci`)
  2. Gera build (`npm run build`)
  3. Publica a pasta `dist` no GitHub Pages
- Também é possível rodar manualmente em **Actions → Deploy to GitHub Pages → Run workflow**.

## Configuração inicial no GitHub (uma vez)
No repositório do GitHub:
1. Vá em **Settings → Pages**
2. Em **Build and deployment**, selecione **Source: GitHub Actions**
3. Salve

Pronto: depois disso, cada merge/push na `main` publica automaticamente.

## Fluxo recomendado

```bash
# 1) desenvolver e validar localmente
npm install
npm run build

# 2) commit e push
git add .
git commit -m "feat: sua alteração"
git push origin main
```

## Scripts disponíveis

```bash
npm run dev      # ambiente local
npm run build    # build de produção
npm run preview  # pré-visualização do build
npm run deploy   # deploy manual (legado, opcional)
```
