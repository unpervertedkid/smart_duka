const mailchimpFactory = require("@mailchimp/mailchimp_transactional/src/index.js");
const mailchimpTx = mailchimpFactory(process.env.MAILCHIMP_API_KEY);

export async function sendReminderCampaign(userEmail: string, orderId: string): Promise<boolean> {
    const message = {
        to: userEmail,
        subject: "Complete Your Order",
        from_email: process.env.FROM_EMAIL,
        from_name: process.env.WEBSITE_NAME,
        text: `Dear Customer,

We noticed that you haven't completed your order (ID: ${orderId}) yet. 

We understand that life can get in the way of our plans. That's why we've saved your order for you. 

Click here to complete your order: ${process.env.WEBSITE_URL}/complete-order/${orderId}

If you have any questions or need assistance, please don't hesitate to contact us.

Best,
${process.env.WEBSITE_TEAM}`
    };

    try {
        const response = await mailchimpTx.messages.send({ message });
        return response[0].status === "sent";
    } catch (error) {
        console.error(error);
        return false;
    }
}