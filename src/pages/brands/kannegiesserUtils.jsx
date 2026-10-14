import React from 'react';

/**
 * Renders the product name formatted according to official Kannegiesser corporate typography:
 * Dual-weight styling with bold brand roots and light model suffixes.
 * E.g., POWER (extrabold) + TRANS (light) + VARIO (extrabold)
 */
export const formatKannegiesserTitle = (productId = '', subtitle = '') => {
  const id = (productId || '').toLowerCase();
  const text = (subtitle || '').trim();

  // 1. PowerTrans Vario (Official Kannegiesser: POWER (bold) + TRANS (light) + VARIO (bold))
  if (id.includes('powertrans') || text.toLowerCase().includes('powertrans')) {
    return (
      <span className="inline-flex items-center tracking-normal">
        <span className="font-extrabold">POWER</span>
        <span className="font-light">TRANS</span>
        <span className="mx-1">&nbsp;</span>
        <span className="font-extrabold">VARIO</span>
      </span>
    );
  }

  // 2. PowerPress (Official Kannegiesser: POWER (bold) + PRESS (light))
  if (id.includes('powerpress') || text.toLowerCase().includes('powerpress')) {
    return (
      <span className="inline-flex items-center tracking-normal">
        <span className="font-extrabold">POWER</span>
        <span className="font-light">PRESS</span>
      </span>
    );
  }

  // 3. PowerDry (Official Kannegiesser: POWER (bold) + DRY (light))
  if (id.includes('powerdry') || text.toLowerCase().includes('powerdry')) {
    return (
      <span className="inline-flex items-center tracking-normal">
        <span className="font-extrabold">POWER</span>
        <span className="font-light">DRY</span>
      </span>
    );
  }

  // 4. PowerSwing (Official Kannegiesser: POWER (bold) + SWING (light))
  if (id.includes('powerswing') || text.toLowerCase().includes('powerswing')) {
    return (
      <span className="inline-flex items-center tracking-normal">
        <span className="font-extrabold">POWER</span>
        <span className="font-light">SWING</span>
      </span>
    );
  }

  // 5. Favorit Vario HighClean (Official Kannegiesser: FAVORIT (bold) + VARIO (light) + HIGHCLEAN (bold))
  if (id.includes('cleanroom') || text.toLowerCase().includes('favorit')) {
    return (
      <span className="inline-flex items-center tracking-normal">
        <span className="font-extrabold">FAVORIT</span>
        <span className="mx-1">&nbsp;</span>
        <span className="font-light">VARIO</span>
        <span className="mx-1">&nbsp;</span>
        <span className="font-extrabold">HIGHCLEAN</span>
      </span>
    );
  }

  // 6. Synchro EMT / EMQ (Official Kannegiesser: SYNCHRO (bold) + EMT / EMQ (light))
  if (id.includes('feeding') || id.includes('synchro') || text.toLowerCase().includes('synchro')) {
    return (
      <span className="inline-flex items-center tracking-normal">
        <span className="font-extrabold">SYNCHRO</span>
        <span className="mx-1">&nbsp;</span>
        <span className="font-light">EMT / EMQ</span>
      </span>
    );
  }

  // 7. HPM Ironer (Official Kannegiesser: HPM (bold) + / HPM GAS (light))
  if (id.includes('ironers') || text.toLowerCase().includes('hpm')) {
    return (
      <span className="inline-flex items-center tracking-normal">
        <span className="font-extrabold">HPM</span>
        <span className="mx-1">&nbsp;</span>
        <span className="font-light">/ HPM GAS</span>
      </span>
    );
  }

  // 8. Process Control (Official Kannegiesser: SMART (bold) + PROCESS CONTROL (light))
  if (id.includes('process-control') || text.toLowerCase().includes('process control')) {
    return (
      <span className="inline-flex items-center tracking-normal">
        <span className="font-extrabold">SMART</span>
        <span className="mx-1">&nbsp;</span>
        <span className="font-light">PROCESS CONTROL</span>
      </span>
    );
  }

  // 9. Data Analytics / Monitoring (Official Kannegiesser: DATA (bold) + ANALYTICS (light))
  if (id.includes('monitoring') || text.toLowerCase().includes('analytics')) {
    return (
      <span className="inline-flex items-center tracking-normal">
        <span className="font-extrabold">DATA</span>
        <span className="mx-1">&nbsp;</span>
        <span className="font-light">ANALYTICS</span>
      </span>
    );
  }

  // 10. Separating CSP (Official Kannegiesser: CSP in bold uppercase)
  if (id.includes('separating') || text.toLowerCase().includes('csp')) {
    return <span className="font-extrabold tracking-normal">CSP</span>;
  }

  // 11. Folding RFM (Official Kannegiesser: RFM in bold uppercase)
  if (id.includes('folding') || text.toLowerCase().includes('rfm')) {
    return <span className="font-extrabold tracking-normal">RFM</span>;
  }

  // 12. Dry Work Folding XFM (Official Kannegiesser: XFM in bold uppercase)
  if (id.includes('drywork') || text.toLowerCase().includes('xfm')) {
    return <span className="font-extrabold tracking-normal">XFM</span>;
  }

  // 13. Disinfection Sluice CWD (Official Kannegiesser: CWD in bold uppercase)
  if (id.includes('cwd') || text.toLowerCase().includes('cwd')) {
    return <span className="font-extrabold tracking-normal">CWD</span>;
  }

  // 14. Disinfection Sluice CD (Official Kannegiesser: CD in bold uppercase)
  if (id.includes('cd') || text.toLowerCase().includes('cd')) {
    return <span className="font-extrabold tracking-normal">CD</span>;
  }

  // General regex fallback for any "Power..." compound name
  if (/^power/i.test(text)) {
    const match = text.match(/^power(\w+)?(.*)$/i);
    if (match) {
      return (
        <span className="inline-flex items-center tracking-normal">
          <span className="font-extrabold">POWER</span>
          {match[1] && <span className="font-light">{match[1].toUpperCase()}</span>}
          {match[2] && <span className="font-extrabold ml-1">{match[2].trim().toUpperCase()}</span>}
        </span>
      );
    }
  }

  return <span className="font-extrabold tracking-normal">{text.toUpperCase()}</span>;
};
