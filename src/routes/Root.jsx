import { Button } from 'primereact/button'

const Root = () => {
  return (
    <div className="flex justify-content-between flex-wrap m-4">
      <div className="flex align-items-center justify-content-center flex-wrap">
        <p className="font-base font-bold mx-5">Jivemed</p>
        <div className="flex align-items-center justify-content-center flex-wrap mx-8">
          <Button className="p-button-link mx-3" label="Link 1" />
          <Button className="p-button-link mx-3" label="Link 2" />
          <Button className="p-button-link mx-3" label="Link 3" />
        </div>
      </div>
      <div className="flex align-items-center justify-content-center flex-wrap">
        <div className="flex align-items-center justify-content-center flex-wrap">
          <Button className="p-button-link mr-3" label="Login" />
          <Button label="Sign up" />
        </div>
      </div>
    </div>
  )
}

export default Root
