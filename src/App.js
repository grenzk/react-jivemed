import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const App = () => {
  const [state, setState] = useState(false);

  return (
    <div>
      <Dialog visible={state} onHide={() => setState(false)}>
        // content
      </Dialog>

      <Button label="Show" onClick={() => setState(true)} />
    </div>
  );
};

export default App;
