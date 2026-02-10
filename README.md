# Currículo Portfolio React

Portfólio em React + Vite publicado no GitHub Pages.

## Deploy automático com GitHub Actions

O deploy é feito pelo workflow `.github/workflows/deploy.yml`.

### Como funciona
A cada `push` na branch `main`, o GitHub Actions:
1. Instala dependências com `npm ci`
2. Gera o build com `npm run build`
3. Publica o conteúdo de `dist` no GitHub Pages usando `actions/deploy-pages`

> Esse fluxo **não usa** `gh-pages -d dist`, então evita o erro:
> `fatal: could not read Username for 'https://github.com'`.

Também é possível publicar manualmente em **Actions → Deploy to GitHub Pages → Run workflow**.

## Configuração inicial no GitHub (uma vez)
No repositório do GitHub:
1. Vá em **Settings → Pages**
2. Em **Build and deployment**, selecione **Source: GitHub Actions**
3. Salve

Depois disso, cada push na `main` publica automaticamente.

## Fluxo recomendado

```bash
# 1) validar local
npm install
npm run build

# 2) publicar
git add .
git commit -m "feat: sua alteração"
git push origin main
```

## Scripts disponíveis

```bash
npm run dev      # ambiente local
npm run build    # build de produção
npm run preview  # pré-visualização do build
```
