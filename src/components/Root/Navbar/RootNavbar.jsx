import { Button } from 'primereact/button'

const RootNavbar = () => {
  return (
    <div className="flex align-items-center justify-content-between m-4">
      <div className="flex">
        <i className="pi pi-calendar-plus text-teal-500 text-3xl font-bold"></i>
        <p className="text-2xl text-teal-500 font-bold ml-3">Jivemed</p>
      </div>
      <div className="flex">
        <Button className="p-button-text mr-3" label="Login" />
        <Button label="Sign up" />
      </div>
    </div>
  )
}

export default RootNavbar
