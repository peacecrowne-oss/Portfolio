interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  topic: string;
  message: string;
}

export const emailService = {
  async sendContactMessage(payload: ContactPayload): Promise<void> {
    // Stub: no email provider is configured yet. This logs the payload only —
    // no email is actually sent, and no secrets are involved.
    console.log("[emailService] Contact message received (stub, not sent):", payload);
  },
};
