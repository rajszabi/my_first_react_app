import React from 'react'

const PersonForm = ({ persons, newName, newNumber, setPersons, setNewName, setNewNumber, handlePersonChange, handleNumberChange }) => {
    const addPerson = (event) => {
        event.preventDefault()

        if (nameExists()) {
            window.alert(newName + ' is already added in the phonebook')
            return
        }

        const newPerson = {
            name : newName,
            number : newNumber
        }

        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
    }

    const nameExists = () => {
        for (var person of persons)
            if (person.name === newName)
                return true
        return false
    }
    
    return (
        <form onSubmit={addPerson}>
            <div>name: <input value={newName} onChange={handlePersonChange}/></div>
            <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
            <div><button type="submit">add</button></div>
        </form>
    )
}

export default PersonForm