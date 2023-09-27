export function Projects (){
  const projects = [
    {name:'Árvore de social midia', tecnologias:'REACTJS'}
  ]
  return(
    <div>
      <h1>Projetos</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <div>
            <img src="" alt="" />
            <aside>
              <p>{project.name}</p>
              <p>{project.tecnologias}</p>
            </aside>
          </div>
        </div>
      ))}
    </div>
  )
}