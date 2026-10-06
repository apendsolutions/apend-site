import { team } from '../data/team.js'
import TeamMember from './TeamMember.jsx'
export default function Team() {
  return (
    <section id="team" className="section"><div className="wrap">
      <div className="head"><h2>Meet the People Behind APEND</h2><p>A small team focused on turning ideas into practical digital products.</p></div>
      <div className="grid2">{team.map((m) => <TeamMember key={m.name} m={m} />)}</div>
    </div></section>
  )
}
