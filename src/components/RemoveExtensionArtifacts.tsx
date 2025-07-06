// src/components/RemoveExtensionArtifacts.tsx
'use client';
import { useEffect } from 'react';

export default function RemoveExtensionArtifacts() {
  useEffect(() => {
    // Remove all bis_skin_checked attributes after component mounts
    document.querySelectorAll('[bis_skin_checked]').forEach(el => {
      el.removeAttribute('bis_skin_checked');
    });
  }, []);

  return null;
}