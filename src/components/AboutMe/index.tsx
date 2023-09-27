import EmailIcon from '../../assets/email.svg';
import InstagramIcon from '../../assets/instagram.svg';
import GitHubIcon from '../../assets/github.svg';
import PhoneIcon from '../../assets/phone.svg';

export function AboutMe() {
  const socialMediaInfo = [
    { icon: EmailIcon, name: 'E-mail', data: 'kauannyvieira8@gmail.com' },
    { icon: InstagramIcon, name: 'Instagram', data: '@imkakau_' },
    { icon: GitHubIcon, name: 'GitHub', data: 'Kauanny-cmd' },
    { icon: PhoneIcon, name: 'Telefone', data: '(83) 99967-2394' },
  ];
  return (
    <div>
      <aside>
        <h1>Sobre mim</h1>
        <p>loreeem</p>
      </aside>
      <aside>
        {socialMediaInfo.map((item, index) => (
          <div key={index}>
            <img src={item.icon} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.data}</p>
          </div>
        ))}
      </aside>
    </div>
  )
}