import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/study" exact>
        <TeacherList />
      </Route>
      <Route path="/give-classes" exact>
        <TeacherForm />
      </Route>
    </BrowserRouter>
  )
}

export default Routes