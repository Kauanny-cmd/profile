import WomanGif from '../../assets/womanSite.gif';

export function TopMain (){
  return(
<div>
<aside>
    <h1>Olá, eu sou Kauanny Vieira :) </h1>
    <p>Desenvolvedora Front-End</p>
    <div>
      <button type="button">Download CV</button>
      <button type="button">Entrar em contato</button>
    </div>
  </aside>
  <aside>
    <img src={WomanGif} alt="" />
  </aside>
</div>
  )
}