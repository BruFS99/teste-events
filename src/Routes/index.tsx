import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import HeroDetails from 'pages/HeroDetails'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/hero/:id" element={<HeroDetails />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
