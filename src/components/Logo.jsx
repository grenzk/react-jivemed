import { Text, Group } from '@mantine/core'
import { TbCalendarPlus } from 'react-icons/tb'

const Logo = () => {
  const handleLogo = () => window.location.assign('/')

  return (
    <Group
      style={{ cursor: 'pointer' }}
      spacing="xs"
      position="center"
      onClick={handleLogo}
    >
      <TbCalendarPlus size={30} />
      <Text
        size={30}
        style={{ fontWeight: 'bold', fontFamily: 'Greycliff CF' }}
      >
        Jivemed
      </Text>
    </Group>
  )
}

export default Logo
