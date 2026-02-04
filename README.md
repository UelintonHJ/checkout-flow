# [Checkout Flow - Experiência de Pedido Simulada](https://checkout-flow-liart.vercel.app/)

Uma **simulação de fluxo de checkout** focada em **usabilidade, clareza e feedback visual**, recriando a experiência de revisar pedidos e receber confirmação, sem backend real.
O objetivo é demonstrar **controle de estado, feedback para o usuário e redução de fricção.**

[!GIF do fluxo de checkout: idle -> loading -> sucesso.](src/assets/checkout-flow.gif)

---

## Funcionalidades

* **Revisão de pedido**:  lista de itens selecionados e valor total
* **Pagamento**: exibe forma de pagamento simulada.
* **Resumo de preços**: subtotal, taxa de entrega e total.
* **Confirmação de pedido**:
  * Estado de **loading** com mensagens dinâmcas.
  * Possibilidade de **cancelar confirmação** durante o loading.
  * Tratamento de **erros simulados**: payment_refused, network, timeout.
  * **Sucesso com reset automático** após 3 segundos.
* **Feedback visual claro**: estados desabilitados, mensagens, cores e animações leves.

---

## Tecnologias

* **React 18+**
* **TypeScript**
* **Tailwind CSS** para layout e estilos
* **Context API** para gerenciamento global do estado de checkout
* Deploy: **Vercel**

---

## Estrutura do projeto

* **CheckoutContext.tsx**: gerencia todos os estados (idle, loading, success, error) e timers simulados.
* **CheckoutFooter.tsx**: botão de confirmar pedido, feedback de loading, erro ou sucesso.
* **CheckoutCancel.tsx**: permite cancelar a confirmação enquanto está carregando.
* **CheckoutLayout.tsx**: organiza o layout e aplica estados de desabilitado.

---

## Rodando localmente

### Pré-requisitos

* Node.js v18+
* npm ou yarn

### Passos

```
# Instalar dependências
npm install
# ou
yarn

# Rodar o projeto em modo dev
npm run dev
# ou
yarn dev

# Build para produção
npm run build
# ou
yarn build

# Deploy local com preview
npm run preview
# ou
yarn preview
```

---

## Deploy

* Repositório no GitHub conectado à **Vercel**
* Deploy automático em cada push para a branch main
* URL: https://checkout-flow-liart.vercel.app/

---

## Insights de UX e Produto

* **Feedback rápido**: mensagens de loading e cores diferentes ajudam o usuário a entender o estado do pedido.
* **Redução de fricção**: botão de cancelar e retry automático em caso de erro simula comportamento real.
* **Resiliência**: simula diferentes falhas de rede e pagamento.
* **Reset automático**: após sucesso, o fluxo volta para o estado inicial, pronto para novo pedido.

---

Desenvolvido com foco em **UX, usabilidade e fluxo real de produto.**

