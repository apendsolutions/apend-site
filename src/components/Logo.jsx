export default function Logo({ light }) {
  return <span className={'logo' + (light ? ' logo-light' : '')} aria-label="APEND">APEND<i aria-hidden="true" /></span>
}
