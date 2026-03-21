# 📊 INSTRUÇÕES PARA INTEGRAÇÃO COM GOOGLE SHEETS

## 🎯 OBJETIVO
Configurar o Google Sheets para receber os dados do formulário de cadastro do site.

---

## 📋 PASSO 1: Criar a Planilha

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Renomeie para: **"Cadastros - Mundo da Bebê Reborn"**
4. Na primeira linha (cabeçalhos), adicione:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Data/Hora | Primeiro Nome | Último Nome | E-mail | WhatsApp | Cidade/Estado | Bebê de Interesse | Como Conheceu |

---

## 📋 PASSO 2: Criar o Google Apps Script

1. Na planilha, vá em **Extensões > Apps Script**
2. Apague todo o código existente
3. Cole o seguinte código:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Adicionar nova linha com os dados
    sheet.appendRow([
      data.timestamp,
      data.primeiro_nome,
      data.ultimo_nome,
      data.email,
      data.whatsapp,
      data.cidade_estado,
      data.bebe_interesse,
      data.como_conheceu
    ]);
    
    // Enviar e-mail de notificação (opcional)
    var emailDestino = "omundodabebereborn@gmail.com";
    var assunto = "🎉 Novo Cadastro - " + data.primeiro_nome + " " + data.ultimo_nome;
    var corpo = "Novo cadastro recebido!\n\n" +
                "Nome: " + data.primeiro_nome + " " + data.ultimo_nome + "\n" +
                "E-mail: " + data.email + "\n" +
                "WhatsApp: " + data.whatsapp + "\n" +
                "Cidade/Estado: " + data.cidade_estado + "\n" +
                "Bebê de Interesse: " + data.bebe_interesse + "\n" +
                "Como Conheceu: " + data.como_conheceu + "\n" +
                "Data/Hora: " + data.timestamp;
    
    MailApp.sendEmail(emailDestino, assunto, corpo);
    
    return ContentService.createTextOutput(JSON.stringify({status: "success"}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({status: "error", message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("API funcionando!");
}
```

4. Salve o projeto (Ctrl+S)
5. Dê um nome ao projeto: **"FormularioCadastro"**

---

## 📋 PASSO 3: Implantar como Web App

1. Clique em **Implantar > Nova implantação**
2. Clique no ícone de engrenagem e selecione **App da Web**
3. Configure:
   - **Descrição:** Formulário de Cadastro
   - **Executar como:** Eu (seu e-mail)
   - **Quem pode acessar:** Qualquer pessoa
4. Clique em **Implantar**
5. Autorize o acesso quando solicitado
6. **COPIE A URL** que aparecerá (algo como: `https://script.google.com/macros/s/ABC123.../exec`)

---

## 📋 PASSO 4: Atualizar o Site

1. Abra o arquivo `index.html`
2. Procure por esta linha:
```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/SEU_SCRIPT_ID/exec';
```
3. Substitua `SEU_SCRIPT_ID` pela URL completa que você copiou

---

## ✅ TESTE

1. Acesse o site
2. Clique no botão dourado ⭐ (canto inferior direito)
3. Preencha o formulário e envie
4. Verifique se os dados aparecem na planilha
5. Verifique se o e-mail de notificação foi recebido

---

## 🔧 SOLUÇÃO DE PROBLEMAS

### Dados não aparecem na planilha:
- Verifique se a URL do script está correta
- Verifique se o script foi implantado como "Qualquer pessoa pode acessar"
- Verifique o console do navegador (F12) para erros

### E-mail não chega:
- Verifique a pasta de spam
- Verifique se o e-mail está correto no código
- O Google tem limite de 100 e-mails/dia para contas gratuitas

---

*Última atualização: 31/12/2025*
