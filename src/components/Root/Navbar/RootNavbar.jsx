import { Button } from 'primereact/button'

const RootNavbar = () => {
  const handleLogo = () => {
    window.location.assign('/')
  }

  const handleLogin = () => {
    window.location.assign('/login')
  }

  const handleSignUp = () => {
    window.location.assign('/signup')
  }

  return (
    <div className="flex align-items-center justify-content-between m-4">
      <div className="flex" style={{ cursor: 'pointer' }} onClick={handleLogo}>
        <i className="pi pi-calendar-plus text-teal-500 text-3xl font-bold"></i>
        <p className="text-2xl text-teal-500 font-bold ml-3">Jivemed</p>
      </div>
      <div className="flex">
        <Button
          className="p-button-text mr-3"
          label="Login"
          onClick={handleLogin}
        />
        <Button label="Sign up" onClick={handleSignUp} />
      </div>
    </div>
  )
}

export default RootNavbar
