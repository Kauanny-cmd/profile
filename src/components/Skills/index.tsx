import Exemplo from '../../assets/instagram.svg'

export function Skills() {
  const skills = [Exemplo];
  return (
    <div>
      <h1>Minhas skills</h1>
      {skills.map((skill) => (
        <div>
          <img src={skill} alt="" />
        </div>
      ))}
    </div>
  )
}