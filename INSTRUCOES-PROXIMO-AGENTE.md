# 📋 INSTRUÇÕES PARA CONTINUIDADE DO SITE - MUNDO DA BEBÊ REBORN

## 📁 ESTRUTURA DO PROJETO
- **index.html** - Arquivo principal (HTML + CSS + JS inline)
- **logo.png / logo-nova.jpg** - Logo da loja
- **favicon.ico, apple-touch-icon.png, favicon-192.png** - Ícones do site
- **produto-*.jpg/png** - Imagens dos produtos
- **selo-*.png** - Selos de confiança
- **banner-boas-vindas.png** - Banner principal
- **exemplo-abas.html** - Exemplo de sistema de abas/filtros (referência)
- **mockup-formulario.html** - Mockup do formulário de cadastro (referência)

---

## 🎨 CORES DO PROJETO

| Elemento | Cor |
|----------|-----|
| Rosa tema | #FFB6C1 |
| Azul tema | #87CEEB |
| Verde WhatsApp | #25D366 |
| Dourado menu | #DAA520 → #FFD700 (hover) |
| Rosa botão hover | #E36D88 |

---

## ✅ FUNÇÕES JÁ IMPLEMENTADAS

1. Menu de navegação dourado com boa legibilidade
2. 8 produtos cadastrados (Docinho, Luninha, Sorrisinha, Princesinha, Safira, Ruivinha, Sorrisinho, Nuvem Azul Fofo)
3. Botões WhatsApp nos produtos (verde → gradiente rosa no hover)
4. Botão flutuante WhatsApp (canto inferior ESQUERDO) - NUNCA ALTERAR COR
5. Selos de confiança
6. Widget Google Reviews
7. Banner de boas-vindas
8. Layout responsivo
9. Favicon atualizado com nova logo

---

## 🚧 TAREFAS PENDENTES

### 1. BOTÃO FLUTUANTE DE CADASTRO (CANTO DIREITO)
**Localização:** Canto inferior DIREITO (oposto ao WhatsApp)
**Comportamento:**
- Botão pequeno pulsando com ícone ⭐
- A cada 10-15 segundos, expande com mensagem
- Copy sugerido: "🎁 GANHE VANTAGENS! Cadastre-se agora"
- Ao clicar: abre popup de formulário

### 2. FORMULÁRIO DE CADASTRO (POPUP)
**Campos aprovados:**
1. Primeiro Nome (obrigatório)
2. Último Nome (obrigatório)
3. E-mail (obrigatório)
4. WhatsApp com DDD (obrigatório)
5. Cidade/Estado (obrigatório)
6. Qual bebê te interessou? (seleção - opcional)
7. Como conheceu a loja? (seleção - opcional)

**Integração:** Google Sheets + notificação por e-mail
**Layout:** Manter tema rosa com logo do Mundo da Bebê Reborn
**Referência visual:** mockup-formulario.html

### 3. SISTEMA DE ABAS/FILTROS (OPCIONAL)
**Objetivo:** Organizar produtos por categoria
**Categorias:** Todos, Pronta Entrega, Sob Encomenda, Meninas, Meninos
**Referência:** exemplo-abas.html

---

## 📞 INFORMAÇÕES DA EMPRESA

- **Nome:** O Mundo da Bebê Reborn
- **Domínio final:** mundodabebereborn.com.br
- **Email:** omundodabebereborn@gmail.com
- **WhatsApp:** 81979001072
- **CNPJ:** 61.626.085/0001-02

---

## ⚠️ REGRAS IMPORTANTES

1. **NUNCA** alterar o botão flutuante do WhatsApp (canto esquerdo) - deve permanecer VERDE #25D366
2. **SEMPRE** confirmar antes de fazer mudanças estruturais
3. Site deve parecer **COMPLETO** (não "em construção")
4. Todos os links WhatsApp usam o número **81979001072**
5. Política de privacidade: https://omundodabebereborn.com.br/politica-de-privacidade/

---

## 🚀 DEPLOY

**Site de teste atual:** https://mundodabebereborn-teste.surge.sh

**Para novo deploy no Surge:**
```bash
cd loja-reborn
surge . mundodabebereborn-teste.surge.sh
```

**Para HostGator:**
1. Extrair ZIP na pasta `public_html`
2. Configurar domínio mundodabebereborn.com.br

---

## 📝 MASTER INSTRUCTIONS ATUALIZADAS

### Botão WHATSAPP (abaixo dos produtos):
- **Normal:** Verde sólido #25D366
- **Hover:** Gradiente Verde #25D366 → Rosa #E36D88
- **Texto:** "WHATSAPP" com ícone
- **Efeito:** 3D com sombra

### Menu de navegação:
- **Cor:** Dourado #DAA520
- **Hover:** #FFD700
- **Fonte:** weight 600, size 0.9rem
- **Sombra:** text-shadow para legibilidade

---

*Última atualização: 29/12/2025*
