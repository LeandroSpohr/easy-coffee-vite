export const breakpoint = {
  xxs: 359,
  xs: 575,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
}

export const device = {
  xxs: `(max-width: ${breakpoint.xxs}px)`,
  xs: `(max-width: ${breakpoint.xs}px)`,
  sm: `(min-width: ${breakpoint.sm}px)`,
  md: `(min-width: ${breakpoint.md}px)`,
  lg: `(min-width: ${breakpoint.lg}px)`,
  xl: `(min-width: ${breakpoint.xl}px)`,
  xxl: `(min-width: ${breakpoint.xxl}px)`,
}
