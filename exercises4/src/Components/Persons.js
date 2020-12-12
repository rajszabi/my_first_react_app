import React from 'react'

import Person from './Person'

const Persons = ({ persons, newFilter }) => {
    const filteredPersons = persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()))
    return filteredPersons.map((person, i) => <Person key={i} name={person.name} number={person.number} />)
}

export default Persons