import Mailer from './mailer.js'


export default class AuthController {
    static async register(req, res) {
        const data = req.body;

        if (!data) return res.status(404).json({ 'error': 'Not found' });

        // Check for required fields
        const requiredFields = ['fullname', 'email', 'telephone'];
        for (const field of requiredFields) {
            if (!data[field]) {
                return res.status(400).json({ 'error': `Missing ${field}` });
            }
        }

        // Generate the list items from the data object
        const listItems = Object.entries(data).map(([key, value]) => {
            return `<li>${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}</li>`;
        }).join('');

        const mailResponse = await Mailer.mail(data.email, {
            title: `Form Registration for ${data.fullname}`,
            body: `
                <html>
                    <body>
                        <h1>Application Form</h1>
                        <ul>
                            ${listItems}
                        </ul>
                    </body>
                </html>
            `
        });

        if (mailResponse.error) return res.status(500).json({ error: 'An error occurred while sending mail' });
        return res.status(200).json({ 'message': 'Form submitted successfully' });
    }
}