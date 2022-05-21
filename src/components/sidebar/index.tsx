import { memo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PropsRoute } from '../../routes/types'
import * as Styled from './styled'

type SidebarProps = { data: PropsRoute[] }

const user: any = {
  name: 'Daniel Silveira',
}

export const Sidebar = (props: SidebarProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isActive = (name: any) => pathname === name

  const handleNavigate = (path: string) => {
    navigate(path)
    return
  }

  return (
    <Styled.Container>
      <Profile />
      {props.data?.map((item: PropsRoute) => (
        <Styled.Button key={item.path} active={!!isActive(item.path)} onClick={() => handleNavigate(item.path)}>
          {item.icon && <item.icon size={20} />}
          <span>{item.title}</span>
        </Styled.Button>
      ))}
    </Styled.Container>
  )
}

const Profile = memo(() => (
  <Styled.BoxProfile>
    <Styled.Image>
      <img
        src={
          user?.avatar ||
          'https://img2.gratispng.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg'
        }
        alt="profile"
      />
    </Styled.Image>
    <>
      <Styled.Name>{user?.name}</Styled.Name>
      <Styled.Type>Administrador</Styled.Type>
    </>
  </Styled.BoxProfile>
))
