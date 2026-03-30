const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { amount, items, customer } = JSON.parse(event.body);

        // Validação básica
        if (!amount || amount < 100) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Valor inválido' })
            };
        }

        // Cria o Payment Intent no Stripe
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // converte para centavos
            currency: 'brl',
            automatic_payment_methods: { enabled: true },
            metadata: {
                loja: 'Mundo da Bebê Reborn',
                cliente_nome: customer?.nome || '',
                cliente_email: customer?.email || '',
                itens: JSON.stringify(items?.map(i => i.titulo) || [])
            },
            description: `Pedido MBR - ${customer?.nome || 'Cliente'}`,
            receipt_email: customer?.email || undefined,
        });

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                clientSecret: paymentIntent.client_secret
            })
        };

    } catch (err) {
        console.error('Stripe error:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message })
        };
    }
};
