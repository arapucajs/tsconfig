# @arapucajs/tsconfig

<hr>
<br />

<div align="center">
  <h3>Arquivos base de TSConfig</h3>
  <p>Arquivos de configuração TypeScript para aplicações e pacotes ArapucaJS rodando em Node ou Bun.</p>
</div>

<br />

<div align="center">

[![npm-image]][npm-url] [![license-image]][license-url]

</div>

## Instalação

Instale o pacote via npm (ou bun):

```sh
npm i -D @arapucajs/tsconfig

# Ou, se preferir Bun:
bun add -d @arapucajs/tsconfig
````

> Recomendamos utilizar o **Bun** na versão 1.2 ou superior.

> **Dependências sugeridas:**
>
> ```sh
> npm i -D typescript ts-node @swc/core
> # ou
> bun add -d typescript ts-node @swc/core
> ```

## Uso

Após instalar, use um dos arquivos de configuração base.

**Para desenvolvimento de pacotes:**

```json
// tsconfig.json
{
  "extends": "@arapucajs/tsconfig/tsconfig.package.json",
  "compilerOptions": {
    "rootDir": "./",
    "outDir": "./build"
  }
}
```

**Para aplicações ArapucaJS:**

```json
// tsconfig.json
{
  "extends": "@arapucajs/tsconfig/tsconfig.app.json",
  "compilerOptions": {
    "rootDir": "./",
    "outDir": "./build"
  }
}
```

**Para código client-side (exemplo para projetos SSR ou SPA):**

```json
// resources/tsconfig.json
{
  "extends": "@arapucajs/tsconfig/tsconfig.client.json"
}
```

**Para testes:**

```json
// tsconfig.json
{
  "extends": "@arapucajs/tsconfig/tsconfig.test.json"
}
```

### Rodando os testes com Bun

```sh
bun test
```

<div align="center">
  <sub>Feito com ❤ por <a href="https://github.com/JefteCosta">Jefte</a> e colaboradores ArapucaJS.</sub>
</div>

[npm-image]: https://img.shields.io/npm/v/@arapucajs/tsconfig/latest.svg?style=for-the-badge&logo=npm
[npm-url]: https://www.npmjs.com/package/@arapucajs/tsconfig/v/latest "npm"
[license-url]: LICENSE.md
[license-image]: https://img.shields.io/github/license/arapucajs/tsconfig?style=for-the-badge

````

---

### 2. **tsconfig.app.json**

```json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "NodeNext",
    "rootDir": "./",
    "outDir": "./build",
    "types": ["bun-types", "node"],
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["./"],
  "exclude": ["node_modules", "build", "dist"]
}
````

---

### 3. **tsconfig.package.json**

```json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "NodeNext",
    "declaration": true,
    "declarationMap": true,
    "outDir": "./build",
    "rootDir": "./",
    "types": ["bun-types", "node"],
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "build", "dist", "test", "tests"]
}
```

---

### 4. **tsconfig.client.json**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "lib": ["DOM", "ES2022"],
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "strict": true
  },
  "include": ["."],
  "exclude": ["node_modules", "build", "dist"]
}
```

---

### 5. **tsconfig.test.json**

```json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "types": ["bun-types", "node", "@types/node"],
    "esModuleInterop": true,
    "allowImportingTsExtensions": true
  },
  "include": ["test", "tests", "**/*.test.ts", "**/*.spec.ts"],
  "exclude": ["node_modules", "build", "dist"]
}
```

---

### 6. **tsconfig.base.json**

```json
{
  "compilerOptions": {
    "strict": true,
    "noEmit": false,
    "allowJs": false,
    "resolveJsonModule": true
  }
}
```



## Como contribuir

Contribuições são bem-vindas! Consulte o [CONTRIBUTING.md](./CONTRIBUTING.md) para seguir o padrão de **Conventional Commits**. Dessa forma o Release Please poderá gerar versões automaticamente.

