/**
 * Centralized configuration for Supabase, EmailJS, and other services
 * All values come from environment variables (Vite)
 */

export const config = {
  // Supabase Configuration
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL,
    publishableKey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
    ackFunctionName: import.meta.env.VITE_SUPABASE_ACK_FUNCTION_NAME || 'send-application-ack',
    newsletterAckFunctionName: import.meta.env.VITE_SUPABASE_NEWSLETTER_ACK_FUNCTION_NAME || 'send-newsletter-ack',
    bookingFunctionName: import.meta.env.VITE_SUPABASE_BOOKING_FUNCTION_NAME || 'create-booking-and-calendar',
  },

  // EmailJS Configuration (for frontend alerts)
  emailJS: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_dphylwc',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'z15jqkk',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'DKv17ddBWoxuQFOf8',
    applicationAlertToEmail: import.meta.env.VITE_APPLICATION_ALERT_TO_EMAIL,
  },
};

export default config;
