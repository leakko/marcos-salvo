'use client';

import { Button } from '@/components/ui/button';

export default function ResumeButton() {
  return (
    <Button variant="light" onClick={() => window.open('/documents/cv.pdf')}>CV 📄</Button>
  );
}
