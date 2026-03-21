# Instruções de Continuação - Mundo da Bebê Reborn

## STATUS ATUAL
- Site 100% funcional com botão de cadastro
- Formulário popup implementado
- Falta apenas: integrar URL do Google Sheets

---

## PENDENTE: Google Sheets + Email

### O que o usuário precisa fazer:
1. No Google Apps Script, clicar em **Implantar → Nova implantação**
2. Selecionar **App da Web**
3. Executar como: **Eu**
4. Quem pode acessar: **Qualquer pessoa**
5. Clicar em **Implantar**
6. Autorizar com conta Google
7. Copiar a URL gerada

### O que o próximo agente precisa fazer:
1. Receber a URL do usuário (formato: https://script.google.com/macros/s/XXXXX/exec)
2. Editar `/home/ubuntu/loja-reborn/index.html`
3. Buscar por `YOUR_GOOGLE_SCRIPT_URL` e substituir pela URL real
4. Testar o formulário
5. Gerar novo ZIP

---

## CÓDIGO DO GOOGLE APPS SCRIPT (já colado pelo usuário)

```javascript
const SHEET_NAME = 'Página1';
const EMAIL_TO = 'omundodabebereborn@gmail.com';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = JSON.parse(e.postData.contents);
    
    const row = [
      new Date().toLocaleString('pt-BR'),
      data.firstName,
      data.lastName,
      data.email,
      data.whatsapp,
      data.city,
      data.babyInterest || '',
      data.howFound || ''
    ];
    
    sheet.appendRow(row);
    
    const subject = 'Novo Cadastro - Mundo da Bebe Reborn';
    const body = 'Nome: ' + data.firstName + ' ' + data.lastName + '\nEmail: ' + data.email + '\nWhatsApp: ' + data.whatsapp + '\nCidade: ' + data.city + '\nBebe de interesse: ' + (data.babyInterest || 'Nao informado') + '\nComo conheceu: ' + (data.howFound || 'Nao informado');
    
    MailApp.sendEmail(EMAIL_TO, subject, body);
    
    return ContentService.createTextOutput(JSON.stringify({success: true})).setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## ESPECIFICAÇÕES DO BOTÃO DE CADASTRO

- **Tamanho estrela:** 60x60px
- **Tamanho expandido:** 150x60px
- **Tempo estrela:** 0,9 segundos
- **Tempo expandido:** 1,7 segundos
- **Loop:** infinito
- **Hover 1s:** abre formulário
- **Degradê ao tocar:** sim
- **Posição:** fixed, bottom: 20px, right: 20px

---

## CAMPOS DO FORMULÁRIO

1. Primeiro Nome (obrigatório)
2. Último Nome (obrigatório)
3. Email (obrigatório)
4. WhatsApp com DDD (obrigatório)
5. Cidade/Estado (obrigatório)
6. Qual bebê te interessou? (opcional)
7. Como conheceu a loja? (opcional)

---

## PRÓXIMAS FASES SUGERIDAS (após Sheets/Email)

### Fase 2 - Melhorias Imediatas
- SEO básico (meta tags)
- Página de produto individual
- Página "Sobre Nós"
- FAQ

### Fase 3 - Crescimento
- Pixel Facebook/Instagram
- Google Analytics
- Blog com conteúdo
- Cupom de desconto para cadastrados

### Fase 4 - Automação Avançada
- Email marketing automático
- WhatsApp Business API
- Integração com CRM

---

## CONTA GOOGLE SHEETS
- Email: omundodabebereborn@gmail.com
- Planilha: "Cadastros Mundo da Bebê Reborn"
- Aba: Página1

---

## LINK DE TESTE TEMPORÁRIO
https://8888-izod132sx5bqk55borm3s-5f2a4027.us2.manus.computer

(Este link é temporário e expira quando o sandbox desliga)
