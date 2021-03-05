import React from 'react'
import {Grid} from "semantic-ui-react";
import SidePanel from './components/SidePanel/SidePanel';

const App =()=> {
  
    return (
      <Grid>
        <Grid.Column width="3" style={{background:"#000", height:"110vh"}}>
          {/* Sidebar */}
          <SidePanel></SidePanel>
        </Grid.Column>

        <Grid.Column width="13" style={{background:"#efd", height:"110vh"}}>
          {/* Chat Panel */}

        </Grid.Column>
      </Grid>
    )
  
}

export default App
