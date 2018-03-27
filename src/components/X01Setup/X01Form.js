import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button } from '../shared'
import './form.css'

const X01Form = ({handleSubmit, pristine, submitting}) => (
  <form onSubmit={handleSubmit}>
    <div className={`formRow`}>
      <label htmlFor="points">Points</label>
      <Field name="points" component="select">
        {
          Array.from(Array(15).keys())
          .map(nr => 101 + 100 * nr)
          .map(pm => <option key={pm} value={pm}>{pm}</option>)
        }
      </Field>
    </div>
    <div className={`formRow`}>
      <label htmlFor="legs">Legs</label>
      <Field name="legs" component="select">
        {
          Array.from(Array(21).keys())
          .slice(1)
          .map(legs => <option key={legs} value={legs}>{legs}</option>)
        }
      </Field>
    </div>
    <div className={`formRow`}>
      <label htmlFor="sets">Sets</label>
      <Field name="sets" component="select">
        {
          Array.from(Array(21).keys())
          .slice(1)
          .map(sets => <option key={sets} value={sets}>{sets}</option>)
        }
      </Field>
    </div>
    <div>
      <Button type="submit" text="Submit" disabled={submitting}/>
    </div>
  </form>
)

export default reduxForm({
  form: 'x01Setup',
  initialValues: {points: 501, legs: 3, sets: 1}
})(X01Form)
