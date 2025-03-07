import { FormData } from '@/components/ContactForm';
import { toaster } from '@/src/components/ui/toaster';

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      toaster.create({
        title: 'Contact Form',
        type: 'success',
        description: response.message,
        duration: 5000,
      });
    })
    .catch((err) => {
      toaster.create({
        title: 'Contact Form',
        type: 'error',
        description: err,
        duration: 5000,
      });
    });
}
