import clsx from 'clsx';
import styles from './button.module.scss';

type TProps = {
  children?: React.ReactNode;
  className?: string;
  Component?: any;
  color?: 'primary' | 'secondary' | 'secondary-v2' | 'secondary-v3';
  size?: 'xs' | 's' | 'm';
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  rounded?: boolean | number;
  gap?: string | number;
  px?: string | number;
  pressable?: boolean;
  buttonStyle?: 'solid' | 'outlined' | 'text';
  href?: string;
  loading?: boolean;
} & React.ButtonHTMLAttributes<any>;

export const Button = ({
  Component = 'button',
  className,
  children,
  color = 'primary',
  buttonStyle = 'solid',
  pressable,
  size = 'm',
  append,
  prepend,
  rounded,
  gap,
  px,
  loading,
  ...rest
}: TProps) => {
  const cls = clsx(
    styles.button,
    className,
    styles[`${color}Color`],
    styles[`${size}Size`],
    styles[`${buttonStyle}Style`],
    {
      [styles.rounded]: typeof rounded === 'boolean' && rounded,
      [styles.pressable]: pressable,
      [styles.loading]: loading,
    }
  );

  const borderRadius = typeof rounded === 'number' ? rounded : undefined;

  return (
    <Component
      type="button"
      className={cls}
      style={{ gap, borderRadius, paddingLeft: px, paddingRight: px }}
      to={rest.href}
      {...rest}
    >
      {prepend && <span className={styles.prepend}>{prepend}</span>}
      <span className={styles.text}>{children}</span>
      {append && <span className={styles.append}>{append}</span>}
    </Component>
  );
};
