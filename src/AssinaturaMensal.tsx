import React, { useEffect } from 'react';

export default function AssinaturaMensal() {
  useEffect(() => {
    // Remove script antigo se houver
    const existingScript = document.querySelector('.ymp-script');
    if (existingScript) existingScript.remove();
    // Cria novo script
    const script = document.createElement('script');
    script.src = 'https://api.yampi.io/v2/andreconstrutoria/public/buy-button/GRDRQ3WOZ3/js';
    script.className = 'ymp-script';
    script.async = true;
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#181026' }}>
      <h1 style={{ color: '#fff', marginBottom: 32 }}>Assinatura Mensal</h1>
      <div id="yampi-buy-button" style={{ minWidth: 320 }}></div>
    </div>
  );
}
