# AGENTS.md

## Projeto: @arapucajs/tsconfig

Este repositório provê configurações padrão de TypeScript para todo ecossistema ArapucaJS, incluindo aplicações, pacotes e código client-side. Inspirado em @adonisjs/tsconfig, mas adaptado para Node e Bun.
Os arquivos aqui funcionam como presets prontos de TypeScript para pacotes ArapucaJS executados em Node ou Bun.

## Como contribuir

- Cada arquivo `tsconfig.*.json` serve a um propósito específico: aplicações, pacotes ou front-end.
- As opções são modernas (ES2022+), com suporte a module ESNext e moduleResolution NodeNext.
- As tipagens de Bun são incluídas por padrão (`bun-types`).
- Qualquer melhoria ou configuração extra deve ser enviada via Pull Request.
- Ao criar um novo módulo ArapucaJS, use `tsconfig.package.json` como base.
- Para rodar testes em TypeScript, use `tsconfig.test.json`.
- A CI usa GitHub Actions, executando `npm ci` e `tsc --noEmit`.
- O arquivo `tsconfig.base.json` centraliza regras de estilo e restrições globais.
- Contribuições devem manter compatibilidade com Node e Bun e evitar sobrescritas drásticas de paths.

## Para Agentes OpenAI/Codex:

- Siga as boas práticas TypeScript do Node moderno.
- Use ESNext sempre que possível.
- Mantenha compatibilidade tanto com Node quanto com Bun.
- Nunca sobrescreva opções de path de forma agressiva em configs herdadas.
- Preserve estrutura de módulos para facilitar modularização futura.

---

**Tarefas futuras sugeridas:**
- Melhorar preset de test (`tsconfig.test.json`)
- Automatizar geração de tipagens de tipos globais para Bun
- Documentar integração com frameworks front-end

---

> Para dúvidas, leia o README.md ou abra uma issue.
