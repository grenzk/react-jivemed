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
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" onClick={handleLogo}>
          Jivemed
        </a>
      </div>
      <div className="navbar-end gap-2">
        <button className="btn btn-ghost" onClick={handleLogin}>
          Login
        </button>
        <button className="btn" onClick={handleSignUp}>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default RootNavbar
