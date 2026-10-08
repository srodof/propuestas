export interface ButtonProps { children?: React.ReactNode; variant?: 'primary' | 'slider-cta'; href?: string; onClick?: (e: React.MouseEvent) => void; disabled?: boolean; showIcon?: boolean; type?: 'button' | 'submit' | 'reset'; }
export interface WhatsAppButtonProps { href?: string; tooltip?: string; }
export interface NavBarProps { variant?: 'transparent' | 'solid'; items?: string[]; logo?: string; logoOnPhoto?: string; logoAlt?: string; homeHref?: string; }
export interface FooterProps { logo?: string; logoAlt?: string; }
export interface ServiceTileProps { image?: string; title?: string; href?: string; }
export interface MethodologyIconBlockProps { icon?: IconName; title?: string; description?: string; }
export interface PortraitImageProps { image?: string; size?: number; alt?: string; }
export interface SectionSurfaceLightProps { children?: React.ReactNode; }
export interface SectionCTAPhotoProps { image?: string; eyebrow?: string; title?: string; body?: React.ReactNode; buttonLabel?: string; buttonHref?: string; height?: string; navSlot?: React.ReactNode; }
export interface FormInputProps { label?: string; type?: 'text' | 'email' | 'tel' | 'number' | 'textarea'; required?: boolean; placeholder?: string; id?: string; name?: string; }
export interface FormSubmitButtonProps { label?: string; disabled?: boolean; }
export type IconName = 'chevron-right' | 'check' | 'x' | 'menu' | 'mail' | 'phone' | 'map-pin' | 'message-circle' | 'search' | 'users' | 'target' | 'bar-chart' | 'trending-up' | 'arrow-up-right';
export interface IconProps { name: IconName; size?: number; color?: string; strokeWidth?: number; style?: React.CSSProperties; title?: string; }
export interface SocialIconProps { network: 'facebook' | 'instagram' | 'linkedin' | 'tiktok' | 'whatsapp'; size?: number; color?: string; style?: React.CSSProperties; title?: string; }
export interface DeltaProps { value: string; direction?: 'up' | 'down' | 'flat'; tone?: 'good' | 'bad' | 'neutral'; label?: string; }
export interface KpiCardProps { label?: string; value?: string; deltas?: DeltaProps[]; }
export interface ReportHeaderProps { title?: string; eyebrow?: string; subtitle?: string; period?: string; comparison?: string; page?: number; total?: number; logo?: string; logoAlt?: string; }
export interface InsightPanelProps { label?: string; figure?: string; highlight?: React.ReactNode; children?: React.ReactNode; }
export interface PillProps { children?: React.ReactNode; tone?: 'primary' | 'neutral' | 'outline' | 'white'; }
export interface BarMeterProps { label: string; display?: string; percent?: number; tone?: 'primary' | 'dark' | 'mid'; note?: string; }
export interface FunnelStepProps { label: string; value: string; width?: number; tone?: 'panel' | 'mid' | 'primary'; note?: string; }
export interface AdCardProps { image?: string; rank?: number; format?: string; title?: string; metrics?: { label: string; value: string }[]; action?: string; actionTone?: PillProps['tone']; }
export interface ReportTableProps { columns: { key: string; label: string; align?: 'left' | 'right' | 'center' }[]; rows: Record<string, React.ReactNode>[]; }
