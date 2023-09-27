export function AppBar (){
  const navItems = ['Sobre mim', 'Projetos', 'Serviços', 'Minhas skills'];
  return(
    <div>
      <h2>Portifólio</h2>
      <ul>
        {navItems.map((item)=>{
          return <li>{item}</li>
        })}
      </ul>
    </div>
  )
}