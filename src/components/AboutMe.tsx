
export interface Person {
    name: string,
    age: number,
    awesome: boolean
}

export interface AboutMeProps {
    person: Person
}

export default function AboutMe({ person }: AboutMeProps){
    return(
        <>
        <h2>Name: {person.name}</h2>
        <h3>Age: {person.age}</h3>
        <h3>I am {(person.awesome) ? 'AWESOME' : 'meh'}</h3>
        </>
    )
}