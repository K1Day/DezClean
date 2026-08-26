import { MessageCircle } from 'lucide-react';

export default function WaFab() {
  return (
    <a className="wa-fab" href="https://wa.me/77001234567" target="_blank" rel="noreferrer" aria-label="WhatsApp">
      <MessageCircle size={20} /> WhatsApp
    </a>
  );
}
