import React, { useState } from 'react';
import SOCIAL from './social-paths.json';

const cx = (...a) => a.filter(Boolean).join(' ');

/* ---------- Icon ---------- */
const PATHS = {
  'chevron-right': '<path d="M9 6l6 6-6 6"/>',
  'check': '<polyline points="20 6 9 17 4 12"/>',
  'x': '<path d="M18 6L6 18M6 6l12 12"/>',
  'menu': '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  'mail': '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/>',
  'phone': '<path d="M4 4c0 9 7 16 16 16l1-4-5-2-2 2c-3-1-6-4-7-7l2-2-2-5z"/>',
  'map-pin': '<path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  'message-circle': '<path d="M4 12a8 8 0 1 1 3.5 6.6L4 20l1.2-3.6A7.96 7.96 0 0 1 4 12z"/>',
  'search': '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/>',
  'users': '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6"/><circle cx="17" cy="9" r="3"/><path d="M14 14.5c2.7.3 5 2.5 5 5.5"/>',
  'target': '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  'bar-chart': '<line x1="6" y1="20" x2="6" y2="12"/><line x1="12" y1="20" x2="12" y2="6"/><line x1="18" y1="20" x2="18" y2="15"/>',
  'trending-up': '<polyline points="3 17 9 11 13 15 21 6"/><polyline points="15 6 21 6 21 12"/>',
  'arrow-up-right': '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>'
};

export function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 2, style, title }) {
  const d = PATHS[name];
  if (!d) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" style={style}
      role={title ? 'img' : undefined} aria-label={title} aria-hidden={title ? undefined : true}
      dangerouslySetInnerHTML={{ __html: (title ? '<title>' + title + '</title>' : '') + d }} />
  );
}
Icon.AVAILABLE = Object.keys(PATHS);

/* ---------- SocialIcon (Simple Icons, CC0, inline) ---------- */
export function SocialIcon({ network, size = 20, color = 'currentColor', style, title }) {
  const d = SOCIAL[network];
  if (!d) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={style}
      role="img" aria-label={title || network}>
      <path d={d} />
    </svg>
  );
}
SocialIcon.AVAILABLE = Object.keys(SOCIAL);

/* ---------- Button ---------- */
export function Button({ children = 'Ver más', variant = 'primary', href, onClick, disabled = false, showIcon = true, type }) {
  const slider = variant === 'slider-cta';
  const cls = cx('sw-btn', slider && 'sw-btn--slider');
  const icon = showIcon ? <Icon name="chevron-right" size={slider ? 16 : 14} /> : null;
  if (href && !disabled) return <a className={cls} href={href} onClick={onClick}>{icon}{children}</a>;
  return <button type={type || 'button'} className={cls} onClick={onClick} disabled={disabled}>{icon}{children}</button>;
}

/* ---------- NavBar ---------- */
const NAV_ITEMS = ['Acerca de SWIITCH', 'Marketing Digital', 'Comunicación', 'Publicidad', 'Transformación Digital', 'Contacto'];

export function NavBar({ variant = 'transparent', items = NAV_ITEMS, logo, logoOnPhoto, logoAlt = 'SWIITCH', homeHref = '#' }) {
  const [open, setOpen] = useState(false);
  const solid = variant === 'solid';
  const src = solid ? logo : (logoOnPhoto || logo);
  return (
    <nav className={cx('sw-nav', solid && 'sw-nav--solid', open && 'sw-nav--open')} aria-label="Principal">
      <a href={homeHref} className="sw-nav__brand">
        {src ? <img src={src} alt={logoAlt} height={34} style={{ display: 'block', height: 34, width: 'auto' }} />
          : <span className="sw-nav__word">SWIITCH</span>}
      </a>
      <div className="sw-nav__links">
        {items.map(it => <a key={it} href="#">{it}</a>)}
      </div>
      <button className="sw-nav__menu" type="button" aria-label="Menú" aria-expanded={open} onClick={() => setOpen(!open)}>
        <Icon name={open ? 'x' : 'menu'} size={24} />
      </button>
    </nav>
  );
}

/* ---------- Cards ---------- */
export function ServiceTile({ image, title = 'Servicios de Marketing Digital', href = '#' }) {
  return (
    <div style={{ background: 'var(--surface)', display: 'flex', flexDirection: 'column' }}>
      <div role={image ? 'img' : undefined} aria-label={image ? title : undefined} style={{
        width: '100%', aspectRatio: '4 / 3', borderRadius: 'var(--radius-none)',
        background: image ? 'url(' + image + ') center / cover' : 'var(--photo-placeholder)'
      }} />
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, textAlign: 'center' }}>
        <div style={{ font: '700 21px/1.6 var(--font-sans)', color: 'var(--heading)' }}>{title}</div>
        <Button variant="primary" href={href}>Ver más</Button>
      </div>
    </div>
  );
}

export function MethodologyIconBlock({ icon = 'target', title = 'Análisis', description = 'Investigamos a fondo tu marca y su contexto para identificar oportunidades reales.' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 18, maxWidth: 260 }}>
      <Icon name={icon} size={80} color="var(--primary)" strokeWidth={1.5} />
      <div style={{ font: '700 21px/1.6 var(--font-sans)', color: 'var(--heading)' }}>{title}</div>
      <div style={{ font: '400 16px/1.8 var(--font-sans)', color: 'var(--body)', textAlign: 'justify' }}>{description}</div>
    </div>
  );
}

export function PortraitImage({ image, size = 320, alt = '' }) {
  return (
    <div role={image ? 'img' : undefined} aria-label={image ? alt : undefined} style={{
      width: size, height: size, borderRadius: 'var(--radius-circle)', overflow: 'hidden',
      background: image ? 'url(' + image + ') center / cover' : 'var(--photo-placeholder)'
    }} />
  );
}

/* ---------- Sections ---------- */
export function SectionSurfaceLight({ children }) {
  return (
    <section style={{
      background: 'var(--surface-alt)', color: 'var(--heading)', padding: '5% 5%', minHeight: '30vh', boxSizing: 'border-box'
    }}>{children}</section>
  );
}

export function SectionCTAPhoto({ image, eyebrow = 'Consultoría en Transformación Digital', title = 'Prepárate para lo que se viene', body, buttonLabel = 'Ver más', buttonHref = '#', height = '50vh', navSlot }) {
  return (
    <section style={{
      position: 'relative', minHeight: height, display: 'flex', flexDirection: 'column', boxSizing: 'border-box',
      background: image ? 'url(' + image + ') center / cover' : 'var(--surface-footer)'
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--overlay-dark)' }} />
      {navSlot && <div style={{ position: 'relative', zIndex: 2 }}>{navSlot}</div>}
      <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', padding: '40px 5%', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 640 }}>
          <div style={{ alignSelf: 'flex-start', background: 'var(--primary)', color: 'var(--on-primary)', font: '700 13px/1.4 var(--font-sans)', padding: '4px 12px', borderRadius: 'var(--radius-xs)' }}>{eyebrow}</div>
          <h2 style={{ margin: 0, font: '400 48px/1.2 var(--font-display)', color: 'var(--heading-on-photo)' }}>{title}</h2>
          {body && <div style={{ font: '400 18px/1.6 var(--font-sans)', color: 'var(--body-on-dark)' }}>{body}</div>}
          <div><Button variant="primary" href={buttonHref}>{buttonLabel}</Button></div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Forms ---------- */
let uid = 0;
export function FormInput({ label = 'Nombre', type = 'text', required = true, placeholder = '', id, name }) {
  const [auto] = useState(() => 'sw-f' + (++uid));
  const fid = id || auto;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, font: '400 16px/1.2 var(--font-sans)' }}>
      <label htmlFor={fid} style={{ font: '700 16px/1.2 var(--font-sans)', color: 'var(--heading)' }}>
        {label}{required && <span style={{ color: 'var(--primary)' }} aria-hidden="true"> *</span>}
      </label>
      {type === 'textarea'
        ? <textarea id={fid} name={name} className="sw-input" placeholder={placeholder} required={required} rows={4} style={{ padding: '10px 14px', resize: 'vertical' }} />
        : <input id={fid} name={name} className="sw-input" type={type} placeholder={placeholder} required={required} style={{ height: 'var(--space-form-field-height)', padding: '0 14px' }} />}
    </div>
  );
}

export function FormSubmitButton({ label = 'Enviar', disabled = false }) {
  return <button type="submit" className="sw-btn sw-btn--submit" disabled={disabled}>{label}</button>;
}

/* ---------- Footer ---------- */
const COLUMNS = [
  { title: 'Marketing Digital', links: ['Social Media Marketing', 'Marketing de Influencers', 'Diseño y Desarrollo Web', 'Consultoría de Marketing Digital'] },
  { title: 'Transformación Digital', links: ['Consultoría de Transformación Digital', 'Consultoría e Implementación de CRM'] },
  { title: 'Comunicación', links: ['Comunicación Corporativa', 'Organización de Eventos Corporativos', 'Relaciones Públicas'] }
];

export function Footer({ logo, logoAlt = 'SWIITCH' }) {
  const row = { display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, lineHeight: 1.6, color: 'var(--body-on-dark)' };
  const label = { fontSize: 12, fontWeight: 700, color: 'var(--body-on-dark)', textTransform: 'uppercase', marginBottom: 6 };
  return (
    <footer className="sw-on-dark" style={{ background: 'var(--surface-footer)', color: 'var(--body-on-dark)', padding: '64px 5% 32px', font: '400 13px/1.6 var(--font-sans)' }}>
      <div className="sw-footer__grid">
        <div>
          {logo ? <img src={logo} alt={logoAlt} style={{ display: 'block', height: 40, width: 'auto', marginBottom: 20 }} />
            : <div style={{ font: '400 22px/1 var(--font-display)', color: 'var(--primary)', marginBottom: 20 }}>SWIITCH</div>}
          <div style={label}>Bolivia</div>
          <div style={{ ...row, marginBottom: 12 }}>
            <Icon name="map-pin" size={15} color="var(--primary)" style={{ marginTop: 3, flexShrink: 0 }} />
            Manzana 40 Piso 9, Torre 2, Santa Cruz de la Sierra, Bolivia
          </div>
          <div style={{ ...row, alignItems: 'center', marginBottom: 20 }}>
            <Icon name="phone" size={15} color="var(--primary)" /> (+591) 779 44824
          </div>
          <div style={label}>USA</div>
          <div style={{ ...row, marginBottom: 20 }}>
            <Icon name="map-pin" size={15} color="var(--primary)" style={{ marginTop: 3, flexShrink: 0 }} />
            1900 N Bayshore Dr, Miami, FL 33132, USA
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            {['facebook', 'instagram', 'linkedin', 'tiktok'].map(n => (
              <a key={n} href="#" className="sw-social" aria-label={n}><SocialIcon network={n} size={18} color="currentColor" /></a>
            ))}
          </div>
        </div>
        {COLUMNS.map(col => (
          <div key={col.title}>
            <div style={{ font: '700 19px/1.6 var(--font-sans)', color: 'var(--body-on-dark)', margin: '0 0 16px' }}>{col.title}</div>
            {col.links.map(l => <a key={l} href="#" className="sw-link-dark">{l}</a>)}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>© 2026 SWIITCH.</div>
    </footer>
  );
}

/* ---------- WhatsAppButton ---------- */
export function WhatsAppButton({ href = '#', tooltip = '¿Necesitas ayuda? Conversemos' }) {
  return (
    <a className="sw-fab" href={href} title={tooltip} aria-label={tooltip}>
      <SocialIcon network="whatsapp" size={28} color="currentColor" />
    </a>
  );
}


/* ================= Reportes de datos ================= */
const TONE = { good: 'var(--delta-good)', bad: 'var(--delta-bad)', neutral: 'var(--muted)' };

export function Delta({ value, direction = 'up', tone = 'good', label }) {
  const col = TONE[tone] || TONE.neutral;
  const words = direction === 'up' ? 'sube' : direction === 'down' ? 'baja' : 'sin cambio';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, font: '700 11px/1.2 var(--font-sans)', color: col, whiteSpace: 'nowrap' }}>
      {direction === 'flat'
        ? <span aria-hidden="true">–</span>
        : <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true" fill={col}>{direction === 'up' ? <polygon points="4,0.5 7.5,7 0.5,7" /> : <polygon points="0.5,1 7.5,1 4,7.5" />}</svg>}
      {value}
      <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>{label ? label + ' ' : ''}{words}</span>
    </span>
  );
}

export function KpiCard({ label = 'Inversión', value = '$240,00', deltas = [] }) {
  return (
    <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius-sm)', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
      <div className="sw-rlabel">{label}</div>
      <div style={{ font: '700 32px/1.1 var(--font-sans)', color: 'var(--ink)' }}>{value}</div>
      {deltas.length > 0 && (
        <div style={{ display: 'flex', gap: 20, borderTop: '1px solid var(--hairline-soft)', paddingTop: 8, marginTop: 4 }}>
          {deltas.map(d => (
            <div key={d.label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span className="sw-rlabel" style={{ fontWeight: 400 }}>{d.label}</span>
              <Delta value={d.value} direction={d.direction} tone={d.tone} label={d.label} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function ReportHeader({ title = 'Pauta en TikTok', eyebrow = 'Reporte mensual', subtitle, period = 'Septiembre 2026', comparison, page, total, logo, logoAlt = 'SWIITCH' }) {
  const pad = n => (n == null ? '' : String(n).padStart(2, '0'));
  return (
    <header style={{ display: 'flex', alignItems: 'center', gap: 20, background: 'var(--surface)', padding: '16px 24px' }}>
      {logo ? <img src={logo} alt={logoAlt} style={{ height: 22, width: 'auto', display: 'block' }} />
        : <span style={{ font: '400 20px/1 var(--font-display)', color: 'var(--primary)' }}>SWIITCH</span>}
      <span aria-hidden="true" style={{ alignSelf: 'stretch', width: 1, background: 'var(--hairline-soft)' }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="sw-rlabel" style={{ fontWeight: 400 }}>{eyebrow}</div>
        <h1 style={{ margin: '2px 0 0', font: '700 22px/1.2 var(--font-sans)', color: 'var(--heading)' }}>{title}</h1>
        {subtitle && <div style={{ font: '400 12px/1.4 var(--font-sans)', color: 'var(--muted)', marginTop: 2 }}>{subtitle}</div>}
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ font: '700 12px/1.3 var(--font-sans)', color: 'var(--heading)' }}>{period}</div>
        {comparison && <div style={{ font: '400 11px/1.3 var(--font-sans)', color: 'var(--muted)' }}>{comparison}</div>}
      </div>
      {page != null && (
        <>
          <span aria-hidden="true" style={{ alignSelf: 'stretch', width: 1, background: 'var(--hairline-soft)' }} />
          <div style={{ font: '400 11px/1 var(--font-sans)', color: 'var(--muted)', whiteSpace: 'nowrap' }}>
            <span style={{ font: '700 22px/1 var(--font-sans)', color: 'var(--primary)' }}>{pad(page)}</span>{total != null ? ' / ' + pad(total) : ''}
          </div>
        </>
      )}
    </header>
  );
}

export function InsightPanel({ label = 'Lectura', figure, highlight, children }) {
  return (
    <aside style={{ background: 'var(--panel)', borderRadius: 'var(--radius-sm)', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div className="sw-rlabel">{label}</div>
      {figure && <div style={{ font: '700 36px/1.1 var(--font-sans)', color: 'var(--primary-active)' }}>{figure}</div>}
      {highlight && <div style={{ font: '700 13px/1.5 var(--font-sans)', color: 'var(--heading)' }}>{highlight}</div>}
      {children && <div style={{ font: '400 12px/1.6 var(--font-sans)', color: 'var(--muted)' }}>{children}</div>}
    </aside>
  );
}

export function Pill({ children, tone = 'neutral' }) {
  const t = {
    primary: { background: 'var(--primary-active)', color: 'var(--on-primary)', border: '1px solid var(--primary-active)' },
    neutral: { background: 'var(--panel)', color: 'var(--heading)', border: '1px solid var(--panel)' },
    outline: { background: 'var(--surface)', color: 'var(--primary-active)', border: '1px solid var(--primary-active)' },
    white: { background: 'var(--surface)', color: 'var(--heading)', border: '1px solid var(--surface)' }
  }[tone];
  return <span style={{ display: 'inline-block', borderRadius: 'var(--radius-full)', padding: '2px 10px', font: '700 10px/1.5 var(--font-sans)', whiteSpace: 'nowrap', ...t }}>{children}</span>;
}

export function BarMeter({ label, display, percent = 0, tone = 'mid', note }) {
  const fill = { primary: 'var(--primary)', dark: 'var(--chart-dark)', mid: 'var(--chart-mid)' }[tone];
  const p = Math.max(0, Math.min(100, percent));
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr 70px 40px', alignItems: 'center', gap: 12, font: '400 12px/1.3 var(--font-sans)', color: 'var(--heading)' }}>
      <span>{label}</span>
      <div role="meter" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={p} style={{ height: 8, borderRadius: 'var(--radius-full)', background: 'var(--chart-track)', overflow: 'hidden' }}>
        <div style={{ width: p + '%', height: '100%', background: fill }} />
      </div>
      <span style={{ font: '700 12px/1.3 var(--font-sans)', textAlign: 'right' }}>{display}</span>
      <span style={{ color: 'var(--muted)', textAlign: 'right' }}>{note}</span>
    </div>
  );
}

export function FunnelStep({ label, value, width = 100, tone = 'panel', note }) {
  const bg = { panel: 'var(--panel)', mid: 'var(--chart-track)', primary: 'var(--primary)' }[tone];
  const fg = tone === 'primary' ? 'var(--ink)' : 'var(--heading)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      {note && <div style={{ font: '400 10px/1.2 var(--font-sans)', color: 'var(--muted)' }}>{note}</div>}
      <div style={{ width: width + '%', background: bg, color: fg, borderRadius: 'var(--radius-xs)', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', font: '700 12px/1.3 var(--font-sans)', boxSizing: 'border-box' }}>
        <span>{label}</span><span>{value}</span>
      </div>
    </div>
  );
}

export function AdCard({ image, rank = 1, format = 'Video', title = 'Cómo hablar en familia sobre la previsión', metrics = [], action, actionTone = 'primary' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
      <div style={{ position: 'relative', aspectRatio: '9 / 14', borderRadius: 'var(--radius-sm)', overflow: 'hidden', background: image ? 'url(' + image + ') center / cover' : 'var(--chart-track)' }}>
        <span style={{ position: 'absolute', top: 8, left: 8, width: 22, height: 22, borderRadius: 'var(--radius-full)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', font: '700 11px/1 var(--font-sans)', background: rank === 1 ? 'var(--primary-active)' : 'var(--chart-dark)', color: 'var(--on-primary)' }}>{rank}</span>
        <span style={{ position: 'absolute', top: 8, right: 8 }}><Pill tone="white">{format}</Pill></span>
      </div>
      <div style={{ font: '700 11px/1.4 var(--font-sans)', color: 'var(--heading)' }}>{title}</div>
      <div style={{ display: 'flex', gap: 16 }}>
        {metrics.map(m => (
          <div key={m.label} style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="sw-rlabel" style={{ fontWeight: 400 }}>{m.label}</span>
            <span style={{ font: '700 14px/1.3 var(--font-sans)', color: 'var(--ink)' }}>{m.value}</span>
          </div>
        ))}
      </div>
      {action && <div><Pill tone={actionTone}>{action}</Pill></div>}
    </div>
  );
}

export function ReportTable({ columns = [], rows = [] }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', font: '400 12px/1.4 var(--font-sans)', color: 'var(--heading)' }}>
      <thead>
        <tr>{columns.map(c => (
          <th key={c.key} scope="col" className="sw-rlabel" style={{ textAlign: c.align || 'left', padding: '4px 8px', borderBottom: '2px solid var(--heading)' }}>{c.label}</th>
        ))}</tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} style={{ borderBottom: '1px solid var(--hairline-soft)' }}>
            {columns.map((c, j) => (
              <td key={c.key} style={{ textAlign: c.align || 'left', padding: '9px 8px', fontWeight: j === 0 || r._strong ? 700 : 400, color: 'var(--heading)' }}>{r[c.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

if (typeof window !== 'undefined') {
  window.Swiitch = { Button, NavBar, ServiceTile, MethodologyIconBlock, PortraitImage, SectionSurfaceLight, SectionCTAPhoto, FormInput, FormSubmitButton, Footer, WhatsAppButton, Icon, SocialIcon, Delta, KpiCard, ReportHeader, InsightPanel, Pill, BarMeter, FunnelStep, AdCard, ReportTable };
}
