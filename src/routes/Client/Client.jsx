import Admin from './Admin/Admin'
import Navbar from '../../components/Client/Navbar'

const Client = () => {
  const displayPage = () => {
    return <Admin />
  }
  return (
    <>
      <Navbar />
      {displayPage()}
    </>
  )
}

export default Client
