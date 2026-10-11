// English versions of the service library (src/data/servicios.ts), used by
// proposals with `idioma: en`. A service missing here makes the build fail
// with a clear message, so add it before using it in an English proposal.
import type { IdServicio, Servicio } from './servicios';

const kickoffBase = [
  { titulo: 'Initial brief', detalle: 'To gather the key information about the brand and its goals.' },
  { titulo: 'Alignment meeting', detalle: 'To clarify details and set expectations.' },
];

export const serviciosEn: Partial<Record<IdServicio, Servicio>> = {
  'social-media': {
    titulo: 'Social Media Marketing',
    subtitulo: 'Connecting with your audience',
    estrategia:
      'We build a content structure around authority, education and conversion. Nothing is posted just to be present: every piece follows a clear positioning and acquisition strategy, with specific funnels for each service and audience.',
    enfoque: 'A modern, professional and approachable image, always clear and credible.',
    incluye: [
      'Setup, optimization and management of the Facebook and Instagram pages.',
      'Monthly content creation: 16 posts on Facebook and Instagram.',
      'Community management during business hours, Monday to Friday.',
      'Creation and design of advertising campaigns.',
      'Planning of the media investment on Meta channels.',
      'Management and monitoring of ads and KPIs in Meta Business, Metricool and Google Analytics.',
      'Custom audiences (databases, target audiences, website retargeting).',
      'Monthly performance reports and competitor benchmarking.',
    ],
    kickoff: [
      ...kickoffBase,
      { titulo: 'Communication and marketing strategy', detalle: 'Strategy development, about 2 weeks.' },
      { titulo: 'Key visuals', detalle: 'Designed around the identity and style of the brand.' },
      { titulo: 'Credentials and access', detalle: 'To manage the accounts on every platform.' },
      { titulo: 'Business Manager setup', detalle: 'Setup or optimization so the digital assets are managed correctly.' },
      { titulo: 'Audiences and databases', detalle: 'To segment and optimize campaigns from day one.' },
      { titulo: 'Strategy presentation', detalle: 'Content plan with the final proposal, ready for execution.' },
    ],
  },
};
